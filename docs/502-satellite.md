---
title: Satellite
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

Our API returns processed, cropped, and color-corrected RGB and NDVI images.

<img alt="Field example" src={useBaseUrl('img/fieldovertime.png')} />

All HTTP methods should be prepended by this service's endpoint:

```
https://a.agrigate.io/services/satellite/api
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
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

const endpoint ='https://a.agrigate.io/services/satellite/api/fields'
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

endpoint = 'https://a.agrigate.io/services/satellite/api/fields'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```bash
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://a.agrigate.io/services/satellite/api/fields'
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
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>

<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

const endpoint ='https://a.agrigate.io/services/satellite/api/fields/YOUR_ID'
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

endpoint = 'https://a.agrigate.io/services/satellite/api/fields/YOUR_ID'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

</TabItem>

<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://a.agrigate.io/services/satellite/api/fields/YOUR_ID'
```

</TabItem>
</Tabs>

---

### `GET /fields/{id}/processes`
Returns all processes already handled by our service.

A _process_ is created by our servers whenever there is a new satellite image
that intersects with one of your registered fields. This endpoint is used to
access all images that each process generates.

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

Usually, we generate a total of 17 images for each intersected field. A GeoTiff for each band from Sentinel; some utility images as well, RGB and NDVI. The following table shows all the images with its resolutions and types:

| Name           | Resolution | Type          |
|:---------------|:-----------|:--------------|
| B01.tif        | 60 meters  | tif           |
| B02.tif        | 10         | tif           |
| B03.tif        | 10         | tif           |
| B04.tif        | 10         | tif           |
| B05.tif        | 20         | tif           |
| B06.tif        | 20         | tif           |
| B07.tif        | 20         | tif           |
| B08.tif        | 10         | tif           |
| B09.tif        | 60         | tif           |
| B10.tif        | 60         | tif           |
| B11.tif        | 20         | tif           |
| B12.tif        | 20         | tif           |
| NDVI.png       | NULL       | png           |
| NDVI.tif       | 10         | ndvi          |
| NDVI_color.tif | 10         | tif_colorized |
| RGB.png        | NULL       | png           |
| RGB.tif        | 10         | tif_colorized |

PNG files do not have resolution because they are scaled up by 800%, so each pixel does not represent the correct size anymore.

We generate a colorized `NDVI_color.tif` using a custom built color ramp. See
the image below. If you want to use your own ramp, we recommend using `NDVI.tif`,
which is a pre calculated NDVI file. You can import it into any GIS software,
like [QGis][4], and use it as you please.

<img alt="NDVI example" src={useBaseUrl('img/ndviexample.png')} />

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

let endpoint = 'https://a.agrigate.io/services/satellite/api' +
               '/fields/YOUR_ID/processes'
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

endpoint = ('https://a.agrigate.io/services/satellite/api'
            '/fields/YOUR_ID/processes')
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```bash
curl -X GET \
    --header 'Authorization: Bearer YOUR_TOKEN' \
    'https://a.agrigate.io/services/satellite/api/fields/YOUR_ID/processes'
```

</TabItem>
</Tabs>

---

### `POST /fields`
Creates a new field entry in the database.

A field will start to be monitored as soon as it is added to our database. It
will be continuously monitored for as long as it is in there. If you want to
stop this process, you should remove the field from the database entirely.
Use a `DELETE` HTTP request.

:::caution

Note that the field deletion cascades to all other tables. Meaning that all
processed images will be lost.

:::

#### Payload
The payload of this object should be like the following:

```py
{
    "externalId": "your field id",
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [...]
    }
}
```

- `externalId`: external ID used in the field's registration
- `geometry`: a valid [MultiPolygon][3] GeoJSON object with the geometry of the
field

There are some limitations regarding the geometry of the field. It cannot be
bigger than 50 million square meters and it cannot have a perimeter bigger
than ~28 thousand meters.

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

let endpoint = 'https://a.agrigate.io/services/satellite/api/fields'
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

endpoint = 'https://a.agrigate.io/services/satellite/api/fields'
headers = {'Authorization': f'Bearer {TOKEN}'}

payload = {...}  # Payload

response = requests.post(endpoint, headers=headers, json=payload)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```bash
curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    -d '{ your payload }' \
    'https://a.agrigate.io/services/satellite/api/fields'
```

</TabItem>
</Tabs>

---

### `PUT /fields/{id}`
Endpoint used to update the geometry of the field.

You cannot update the external id. The payload is a single JSON object with an
entry `geometry` which contains a MultiPolygon GeoJSON object. Again, the new
geometry must respect the area and perimeter limits of `POST /fields`.

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
<TabItem value="js">

```js
const axios = require('axios')
const TOKEN = 'YOUR_TOKEN'

let endpoint = 'https://a.agrigate.io/services/satellite/api/fields'
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

endpoint = 'https://a.agrigate.io/services/satellite/api/fields'
headers = {'Authorization': f'Bearer {TOKEN}'}

payload = {...}  # Geometry

response = requests.post(endpoint, headers=headers, json=payload)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```bash
curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    -d '{ your geometry }' \
    'https://a.agrigate.io/services/satellite/api/fields'
```

</TabItem>
</Tabs>

---

### `DELETE /fields/{id}`
Deletes the field from our database.

:::caution

Be careful when using this method. It will delete all the processed images from
the database as well.

:::


<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
<TabItem value="js">

```js
const axios = require('axios')

const TOKEN = 'YOUR_TOKEN'

const client = axios.create({
  baseURL: 'https://a.agrigate.io',
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

endpoint = 'https://a.agrigate.io/services/satellite/api/fields/YOUR_ID'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.delete(endpoint, headers=headers)
print(response)
```

</TabItem>
<TabItem value="sh">

```bash
curl -X DELETE \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://a.agrigate.io/services/satellite/api/fields/YOUR_ID'
```

</TabItem>
</Tabs>


[1]: /img/fieldovertime.png
[2]: /img/ndviexample.png
[3]: https://tools.ietf.org/html/rfc7946#section-3.1.7
[4]: https://www.qgis.org/en/site/
