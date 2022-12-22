---
title: Endpoints
description: Satellite - Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/satellite/api
```

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Get all satellite fields][4] | <span class="badge badge--success">GET</span> `/fields`
[Get a satellite field][5] | <span class="badge badge--success">GET</span> `/fields/{id}`
[Get images of satellite field][6] | <span class="badge badge--success">GET</span> `/fields/{id}/processes`
[Get an image of satellite field][10] | <span class="badge badge--success">GET</span> `/fields/{id}/processes/{id}`
[Create a satellite field][7] | <span class="badge badge--warning">POST</span> `/fields`
[Delete a satellite field][8] | <span class="badge badge--danger">DELETE</span> `/fields/{id}`
[Get subscription for Planet][12] | <span class="badge badge--success">GET</span> `/fields/{id}/subscription`
[Reprocess satelite images][13] | <span class="badge badge--warning">POST</span> `/fields/{id}/process/{id}/reprocess`

[1]: /img/fieldovertime.png
[2]: /img/ndviexample.png
[3]: https://tools.ietf.org/html/rfc7946#section-3.1.7
[4]: #get-all-satellite-fields
[5]: #get-a-satellite-field
[6]: #get-images-of-satellite-field
[7]: #create-a-satellite-field
[8]: #delete-a-satellite-field
[9]: /docs/docs/alerts_events#satellite-events
[10]: #get-an-image-of-satellite-field
[11]: /docs/docs/satellite_overview#providers
[12]: #get-subscription-for-planet
[13]: #reprocess-satellite-images

---

## Endpoints

### Get all satellite fields

&nbsp<span class="badge badge--success">GET</span> `/fields`

Returns paged results for all satellite fields registered.

- `externalId`: external ID used in the field's registration
- `geometry`: a valid [MultiPolygon][3] GeoJSON object with the geometry of the
field

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

const endpoint ='https://api.withleaf.io/services/satellite/api/fields'
const headers = { 'Authorization': `Bearer ${TOKEN}` }

axios.get(endpoint, { headers })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'

endpoint = 'https://api.withleaf.io/services/satellite/api/fields'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/satellite/api/fields'
```

</TabItem>
</Tabs>

#### Response

It returns a list of JSON objects 

```json
[
    {
        "externalId": "your field id",
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [...]
        }
        "providers": [
          "sentinel", "planet"
        ]
    },
]
```

---

### Get a satellite field

&nbsp<span class="badge badge--success">GET</span> `/fields/{id}`

Fetches a field entry based on its external id.

- `id`: external ID used in the field's registration
- `geometry`: a valid [MultiPolygon][3] GeoJSON object with the geometry of the
field

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

const endpoint ='https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'
const headers = { 'Authorization': `Bearer ${TOKEN}` }

axios.get(endpoint, { headers })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>

<TabItem value="py">

```python
import requests

TOKEN = 'YOUR_TOKEN'

endpoint = 'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

</TabItem>

<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'
```

</TabItem>
</Tabs>

#### Response

It returns a single JSON object with the following entries (like each item from
`GET /fields` results):

```json
{
    "externalId": "your field id",
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [...]
    },
    "providers": [
      "sentinel", "planet"
    ]
}
```

---

### Get images of satellite field

&nbsp<span class="badge badge--success">GET</span> `/fields/{id}/processes`

Returns images for a given field `id`.

We return the following images, (tifs are EPSG:4326, pngs are EPSG:3857):
- RGB as tiff and as png
- Colorized NDVI as tiff and as png
- Raw NDVI as tiff
- All bands as tiff.

_Check the [comparison page][11] to identify the resolution and bands available for each provider._

It is possible to filter the results by a number of different parameters:

| Parameter | Type | Description | Default |
| - | - | - | - |
| startDate | ISO 8601 datetime format | retrieve images taken after this day | - |
| endDate | ISO 8601 datetime format | retrieve images taken until this day | - |
| startProcessedTimestamp | ISO 8601 datetime format | retrieve images processed by Leaf after this day | - |
| endProcessedTimestamp | ISO 8601 datetime format | retrieve images processed by Leaf until this day | - |
| maxClouds | double between 0.0 and 100.0 | filter processes with clouds less than or equal to this percentage | 100 |
| minCoverage | double between 0.0 and 100.0 | filter processes with coverage greater than or equal to this percentage | 0.0 |
| status | string "SUCCESS", "FAILED" or "STARTED" | retrieve images with selected status | SUCCESS |
| page | integer | page being fetched | 0 |
| size | integer | how many processes (sets of all images) to return per page | 20 |
| providers | array of string | sentinel or/and planet | If none is defined, it will created with *sentinel* only |

:::info Important
Default `page` is page 0 and default `size` is 20. So, to see more images,
you can either increase the size or the page number.
:::


<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

let endpoint = 'https://api.withleaf.io/services/satellite/api' +
               '/fields/YOUR_ID/processes'

const params = { startDate: '2020-06-03', endDate: '2020-06-10' }
const headers = { 'Authorization': `Bearer ${TOKEN}` }

axios.get(endpoint, { headers, params })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'

endpoint = ('https://api.withleaf.io/services/satellite/api'
            '/fields/YOUR_ID/processes')

params = {'startDate': '2020-06-03', 'endDate': '2020-06-10'}
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers, params=params)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    --header 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID/processes?startDate=2020-06-03&endDate=2020-06-10'
```

</TabItem>
</Tabs>

#### Response


```json
[
    {
        "id": 0,
        "date": "2020-06-03T19:03:57.882Z",
        "clouds": 0, 
        "provider": "sentinel",
        "bucketName": "sentinel-s2-l1c",
        "bucketKey": "tiles/10/S/FH/2020/6/3/0",
        "bucketRegion": "eu-central-1",
        "status": "SUCCESS",
        "coverage": 100,
        "images": [
            {
                "url": "url.to.your.image.tif",
                "type": "tif",
                "resolution": 20
            },
            # etc...
        ],
        "processedTimestamp": "2020-06-03T19:03:58.881731Z"
    },
    # etc...
]
```

- `date`: the date of the satellite image
- `clouds`: cloud coverage percentage of the field, from 0 to 100
- `provider`: the satellite provider (sentinel or planet) from where this process was created.
- `bucketName`: name of satellite image bucket where the original tile is. Usually
`sentinel-s2-l1c` or `leaf-planet-images-prd`
- `bucketRegion`: AWS region of original image's bucket. Usually `eu-central-1`
- `bucketKey`: base path of original satellite image
- `status`: status of the process. It will be either `SUCCESS` or `FAILURE`
- `coverage`: data coverage percentage of the field, from 0 to 100
- `images`: each image in this list will have the following data:
    - `url`: URL of the image
    - `type`: the type of the image. One of `tif`, `ndvi`, `png` and
    `tif_colorized`
    - `resolution`: resolution, in meters, of the image. See table below
- `processedTimestamp`: the timestamp of when the process was processed


---

&nbsp<span class="badge badge--success">GET</span> `/fields/{id}/processes/{id}`

### Get an image of satellite field

Returns a single process for the field.


<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

let endpoint = 'https://api.withleaf.io/services/satellite/api' +
               '/fields/YOUR_ID/processes/{id}'

const headers = { 'Authorization': `Bearer ${TOKEN}` }

axios.get(endpoint, { headers })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'

endpoint = ('https://api.withleaf.io/services/satellite/api'
            '/fields/YOUR_ID/processes/{id}')

headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    --header 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID/processes/{id}'
```

</TabItem>
</Tabs>

#### Response

```json
{
  "id": 0,
  "date": "2020-06-03T19:03:57.882Z",
  "clouds": 0,
  "provider": "sentinel",
  "bucketName": "sentinel-s2-l1c",
  "bucketKey": "tiles/10/S/FH/2020/6/3/0",
  "bucketRegion": "eu-central-1",
  "status": "SUCCESS",
  "coverage": 100,
  "images": [
    {
      "url": "url.to.your.image.tif",
      "type": "tif",
      "resolution": 20
    },
    # etc...
  ],
  "processedTimestamp": "2020-06-03T19:03:58.881731Z"
}
```

---

### Create a satellite field

&nbsp<span class="badge badge--warning">POST</span> `/fields`

Creates a new field

It will be continuously monitored forever, and new images will arrive based on the [provider selected][11], 
because each one of them has a different temporal resolution (time it takes for the satellite to go over the same field when orbiting
the Earth). If you don't need the field anymore, you can
[delete the field.](/docs/docs/satellite_endpoints#delete-fieldsid)

:::success  Note

By default, Leaf will return images for your field from the last
30 days (from the moment you create the field).

You can change that by including a "startDate" or a "daysBefore" to the body

:::

There are two ways you can do that:

1. set a `startDate` (ISO, "yyyy-mm-dd") meaning Leaf will
return all images for your field since this date.  
2. set how many `daysBefore` (an integer greater than or equal to 0) you
want to get images from.

Note that they are both _optional_, but you can **not** specify both.

Now let's see the Payload

#### Payload
The payload of this object should be like the following:

```py
{
    "externalId": "your field id",
    "startDate": "2019-01-01", 
    "providers": ["sentinel", "planet"],
    "assetType": "analytic_sr"
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [...]
    }
}
```

- `externalId`: external ID used in the field's registration.
- `geometry`: a valid [MultiPolygon][3] GeoJSON object with the geometry of the
field.
- `providers`: Specify the satellite imagery source, if none is specified, Sentinel images will be retrived by default.
- `assetType`: If the `providers` property contains `planet` you can select which `assetType` will be retrived. Default value is `analytic_sr`.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

let endpoint = 'https://api.withleaf.io/services/satellite/api/fields'
const headers = { 'Authorization': `Bearer ${TOKEN}` }

const data = { /* Your payload */ }

axios.post(endpoint, { headers, data })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'

endpoint = 'https://api.withleaf.io/services/satellite/api/fields'
headers = {'Authorization': f'Bearer {TOKEN}'}

payload = {...}  # Payload

response = requests.post(endpoint, headers=headers, json=payload)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    -d '{ your payload }' \
    'https://api.withleaf.io/services/satellite/api/fields'
```

</TabItem>
</Tabs>

:::info field size limit
- the field cannot be larger than 50k hectares (123k acres) and
- cannot have a perimeter bigger than 300km (180 miles).
:::

---

### Delete a satellite field

&nbsp<span class="badge badge--danger">DELETE</span>  `/fields/{id}`

Deletes the field from our database.

:::warning
Note that the field deletion is irreversible and all images will be lost.
:::
_(But you can always create a new field and get images from the past, as far
as you want)._


<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
<TabItem value="js">

```js
const axios = require('axios')

const TOKEN = 'YOUR_TOKEN'

const client = axios.create({
  baseURL: 'https://api.withleaf.io',
  headers: {'Authorization': `Bearer ${TOKEN}`}
})

client.delete('/fields/YOUR_ID')
  .then(res => console.log(res.statusCode))
  .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'

endpoint = 'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.delete(endpoint, headers=headers)
print(response)
```

</TabItem>
<TabItem value="sh">

```shell
curl -X DELETE \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'
```

</TabItem>
</Tabs>


### Get subscription for Planet

&nbsp <span class="badge badge--success">GET</span> `/fields/{id}/subscription`

Get the subscription from Planet. It returns the assetTypes, itemTypes and startDate for a field.


<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

let endpoint = 'https://api.withleaf.io/services/satellite/api' +
               '/fields/YOUR_ID/subscription'

const headers = { 'Authorization': `Bearer ${TOKEN}` }

axios.get(endpoint, { headers })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'

endpoint = ('https://api.withleaf.io/services/satellite/api'
            '/fields/YOUR_ID/subscription')

headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    --header 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID/subscription'
```

</TabItem>
</Tabs>

#### Response

```json
{
    "planetAssetTypes": [
        "analytic_sr"
    ],
    "planetItemTypes": [
        "PSOrthoTile"
    ],
    "startDate": "2022-04-01T00:00:00Z"
}
```

### Reprocess satellite images
&nbsp<span class="badge badge--warning">POST</span>  `/fields/{id}/process/{id}/reprocess`

Allows reprocessing the satellite images based on a `processId`.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/fields/{id}/process/{id}/reprocess'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.post(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/operations/api/fields/{id}/process/{id}/reprocess'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.post(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/fields/{id}/process/{id}/reprocess'
  ```

  </TabItem>
</Tabs>

## Alerts

With Alerts you can be notified when something happens or changes instead of needing to repeatedly query for changes. 
Leaf Alerts support events that happen within Leaf and events that happen within supported 3rd party software. 

### List of Satellite Events

Leaf Satellite Service can Alert you on these events: [list of Satellite Events][9]
