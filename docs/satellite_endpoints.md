---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/satellite/api
```

This service has the following endpoints available:

```
GET    /fields
GET    /fields/{id}
GET    /fields/{id}/processes
POST   /fields
PUT    /fields/{id}
DELETE /fields/{id}
```

---

## Endpoints

### `GET /fields`
Returns paged results for all fields registered.

It returns a list of JSON objects like so:

```py
[
    {
        "externalId": "your field id",
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [...]
        }
    },
    # etc...
]
```

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

---

### `GET /fields/{id}`
Fetches a field entry based on its external id.

It returns a single JSON object with the following entries (like each item from
`GET /fields` results):

```py
{
    "externalId": "your field id",
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [...]
    }
}
```

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

---

### `GET /fields/{id}/processes`
Returns all processes already handled by our service.

A _process_ is created by our servers whenever there is a new satellite image
that intersects with one of your registered fields. This endpoint is used to
access all images that each process generates.

It is possible to filter the results by passing a date range parameters.

- `startDate`, as ISO 8601 date format to filter processes created before this day
- `endDate`, as ISO 8601 date format to filter processes created until this day

The returned payload is like so:

```py
[
    {
        "date": "2020-06-03T19:03:57.882Z",
        "clouds": 0,
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
        ]
    },
    # etc...
]
```

- `date`: the date of the satellite image
- `clouds`: cloud coverage percentage of the field, from 0 to 100
- `bucketName`: name of Sentinel's bucket where the original tile is. Usually
`sentinel-s2-l1c`
- `bucketRegion`: AWS region of original image's bucket. Usually `eu-central-1`
- `bucketKey`: base path of original satellite image
- `status`: status of the process. It will be either `SUCCESS` or `FAILURE`
- `coverage`: data coverage percentage of the field, from 0 to 100
- `images`: each image in this list will have the following data:
    - `url`: URL of the image
    - `type`: the type of the image. One of `tif`, `ndvi`, `png` and
    `tif_colorized`
    - `resolution`: resolution, in meters, of the image. See table below



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

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page

:::info Important
Default `page` is page zero and default `size` is 20. So, to see more images,
you can either increase the size or the page number.
:::

---

### `POST /fields`
Creates a new field

It will be continuously monitored forever, and new images will arrive every ~5
days (time it takes for the satellite to go over the same field when orbiting
the Earth). If you don't need the field anymore, you can
[delete the field.](/docs/docs/satellite_endpoints#delete-fieldsid)

:::success  Note

By default, Leaf will retrieve and return images for your field from the last
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
    "startDate": "2019-01-01"
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [...]
    }
}
```

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


There are some limitations regarding the geometry of the field. It cannot be
bigger than 50k hectares (123.5k acres) and it cannot have a perimeter bigger
than 89.4km (55.5 miles).

---

### `PUT /fields/{id}`
Endpoint used to update the geometry of the field.

You cannot update the external id. The payload is a single JSON object with an
entry `geometry` which contains a MultiPolygon GeoJSON object. Again, the new
geometry must respect the area and perimeter limits of `POST /fields`.

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

const data = { /* Your geometry */ }

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

payload = {...}  # Geometry

response = requests.post(endpoint, headers=headers, json=payload)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    -d '{ your geometry }' \
    'https://api.withleaf.io/services/satellite/api/fields'
```

</TabItem>
</Tabs>

---

### `DELETE /fields/{id}`
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


[1]: /img/fieldovertime.png
[2]: /img/ndviexample.png
[3]: https://tools.ietf.org/html/rfc7946#section-3.1.7
