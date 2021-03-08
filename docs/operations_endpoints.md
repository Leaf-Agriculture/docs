---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://tools.ietf.org/html/rfc7946
[3]: #get-all-files
[4]: #get-a-file
[5]: #get-a-file-summary
[6]: #get-a-files-images
[7]: #upload-a-file
[8]: #merge-files
[9]: #get-a-files-images
[10]: alerts_events#operation-events

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/operations/api
```

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Get all files][3] | <span class="badge badge--success">GET</span> `/files`
[Get a file][4] | <span class="badge badge--success">GET</span> `/files/{id}`
[Get a file summary][5] | <span class="badge badge--success">GET</span> `/files/{id}/summary`
[Get a file's images][6] | <span class="badge badge--success">GET</span> `/files/{id}/images`
[Get a file's units][9] | <span class="badge badge--success">GET</span> `/files/{id}/units`
[Upload a file][7] | <span class="badge badge--warning">POST</span> `/files`
[Merge files][8] | <span class="badge badge--warning">POST</span> `/files/merge`

For easily testing these endpoints, we recommend using our Postman [collection][1].


:::info requires Leaf User with credentials
To have access to operation files, you will need a Leaf User with valid credentials
from the provider you want to access data. If you don't have a Leaf User or you
have not connected it with any provider yet, see **[how to create a Leaf User]()**
or **[how to add credentials to a Leaf User]()**.
:::

---

### Get all files

&nbsp<span class="badge badge--success">GET</span>  `/files`

Gets a paged list of files that belong to the current logged in user. It is
possible to filter the results by passing some query parameters. They are listed
below.

| Parameter (to filter by) | Values
| - | - |
| `leafUserId` | uuid of one of your users |
| `provider` | `CNHI`, `JohnDeere`, `Trimble`, `ClimateFieldView` or `Leaf`|
| `status` | `processed`, `failed` or `processing` |
| `origin` | `provider`, `automerged`, `merged` or `uploaded` |
| `organizationId` | the provider organizationId (only available for John Deere) |
| `createdTime` | ISO 8601 date. Returns operations from the createdTime onward |
| `operationStartTime` | ISO 8601 date. Returns operations from the operationStartTime onward |
| `operationEndTime` | ISO 8601 date. Returns operations until the operationEndTime |
| `operationType` | `applied`, `planted` or `harvested` |
| `minArea` | a number (Double) representing the minimum area (square meters) of the operations to be returned |



You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/files'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files'
  ```

  </TabItem>
  <TabItem value="json">

  ```json
  [
    {
         "id": "11e8df30-df5c-4373-8dc1-fb275cdd3ea4",
         "provider": "ClimateFieldView",
         "sizeInBytes": 24249,
         "originalFile": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/19e9fe2e-399c-4735-b4b1-9b052840e2f5.zip",
         "standardGeojson": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/14aa028a-72f0-473a-8fc8-e2b3edef7c3f.json",
         "leafUserId": "1f351aa6-c05a-473a-89ba-d63a87d9b302",
         "apiOwnerUsername": "leafdemos",
         "status": "processed",
         "origin": "provider",
         "createdTime": "2020-10-29T19:44:57.723",
         "operationStartTime": "2019-04-29T00:24:52.084",
         "operationEndTime": "2019-04-29T00:43:03.276",
         "summary": {
             "type": "Feature",
             "properties": {
                 "totalDistance": 10900.947723655045,
                 "speed": {
                     "average": 10.33722442338795,
                     "standardDeviation": 1.5361860364425932,
                     "min": 0.3355403244495392,
                     "max": 11.497848510742188
                 },
                 "elevation": {
                     "average": 3577.9168289290683,
                     "standardDeviation": 0.6729413774132946,
                     "min": 3576.9,
                     "max": 3578.9
                 },
                 "varieties": [
                     "28-0-0 uan @ 160 lb/ac",
                     "agrotain advanced @ 2.5 gal/ac",
                     "bicep ii magnum @ 32 fl oz/ac",
                     "fs optique @ 20 fl oz/ac",
                     "roundup powermax (usa) @ 16 fl oz/ac",
                     "sharpen powered by kixor @ 1 fl oz/ac"
                 ],
                 "appliedRate": {
                     "average": 14.757733806861584,
                     "standardDeviation": 0.3157623349195758,
                     "min": 13.899999643744623,
                     "max": 15.599999476023033
                 },
                 "operationType": "applied",
                 "totalArea": 319471.8942196931,
                 "machineSpecification": {
                     "machineDescription": "Agco Rogator RG1300",
                     "implementDescription": "Sprayer",
                     "implementWidth": 1440.0000000000002
                 }
             },
             "geometry": {
                 "type": "MultiPolygon",
                 "coordinates": [
                     [
                         [
                             [-89.83382833, 39.71963950, 3578.8],
                             [-89.83443583, 39.71966733, 3578.8],
                             [-89.83452050, 39.71968466, 3578.6],
                             [-89.83451283, 39.72648850, 3577.8],
                             [-89.83010300, 39.72748950, 3577.2],
                             [-89.83005766, 39.72749950, 3577.2],
                             [-89.83001900, 39.72750716, 3577.2],
                             [-89.82999183, 39.72751166, 3577.3],
                             [-89.82997116, 39.72751383, 3577.3],
                             [-89.82993383, 39.72020166, 3578.6],
                             [-89.82993866, 39.71975133, 3578.2],
                             [-89.82996366, 39.71968966, 3578.1],
                             [-89.83382833, 39.71963950, 3578.8]
                         ]
                     ]
                 ]
             }
         },
         "sourceFiles": []
     },
    ...
  ]
  ```

  The `sourceFiles` entry in this JSON response is a list of files' ids that were
  used to create the file. It will appear only in _"merge"_ and _"automerged"_ files.

  </TabItem>
</Tabs>


---

### Get a file

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}`

Gets a single file by its id.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/files/{id}'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}'
  ```

  </TabItem>
  <TabItem value="json">

  This is a sample response of "applied" operation type
  ```json
  {
       "id": "11e8df30-df5c-4373-8dc1-fb275cdd3ea4",
       "provider": "ClimateFieldView",
       "sizeInBytes": 24249,
       "originalFile": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/19e9fe2e-399c-4735-b4b1-9b052840e2f5.zip",
       "standardGeojson": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/14aa028a-72f0-473a-8fc8-e2b3edef7c3f.json",
       "leafUserId": "1f351aa6-c05a-473a-89ba-d63a87d9b302",
       "apiOwnerUsername": "leafdemos",
       "status": "processed",
       "origin": "provider",
       "createdTime": "2020-10-29T19:44:57.723",
       "operationStartTime": "2019-04-29T00:24:52.084",
       "operationEndTime": "2019-04-29T00:43:03.276",
       "summary": {
           "type": "Feature",
           "properties": {
               "totalDistance": 10900.947723655045,
               "speed": {
                   "average": 10.33722442338795,
                   "standardDeviation": 1.5361860364425932,
                   "min": 0.3355403244495392,
                   "max": 11.497848510742188
               },
               "elevation": {
                   "average": 3577.9168289290683,
                   "standardDeviation": 0.6729413774132946,
                   "min": 3576.9,
                   "max": 3578.9
               },
               "varieties": [
                   "28-0-0 uan @ 160 lb/ac",
                   "agrotain advanced @ 2.5 gal/ac",
                   "bicep ii magnum @ 32 fl oz/ac",
                   "fs optique @ 20 fl oz/ac",
                   "roundup powermax (usa) @ 16 fl oz/ac",
                   "sharpen powered by kixor @ 1 fl oz/ac"
               ],
               "appliedRate": {
                   "average": 14.757733806861584,
                   "standardDeviation": 0.3157623349195758,
                   "min": 13.899999643744623,
                   "max": 15.599999476023033
               },
               "operationType": "applied",
               "totalArea": 319471.8942196931,
               "machineSpecification": {
                   "machineDescription": "Agco Rogator RG1300",
                   "implementDescription": "Sprayer",
                   "implementWidth": 1440.0000000000002
               }
           },
           "geometry": {
               "type": "MultiPolygon",
               "coordinates": [
                   [
                       [
                           [-89.83382833, 39.71963950, 3578.8],
                           [-89.83443583, 39.71966733, 3578.8],
                           [-89.83452050, 39.71968466, 3578.6],
                           [-89.83451283, 39.72648850, 3577.8],
                           [-89.83010300, 39.72748950, 3577.2],
                           [-89.83005766, 39.72749950, 3577.2],
                           [-89.83001900, 39.72750716, 3577.2],
                           [-89.82999183, 39.72751166, 3577.3],
                           [-89.82997116, 39.72751383, 3577.3],
                           [-89.82993383, 39.72020166, 3578.6],
                           [-89.82993866, 39.71975133, 3578.2],
                           [-89.82996366, 39.71968966, 3578.1],
                           [-89.83382833, 39.71963950, 3578.8]
                       ]
                   ]
               ]
           }
       },
       "sourceFiles": []
   }
  ```

  </TabItem>
</Tabs>

---

### Get a file summary

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/summary`

Gets the summary, if available, for the file id.


<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
  ]
}>

  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/files/{id}/summary'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/summary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}/summary'
  ```

  </TabItem>
  <TabItem value="json">

  Returns a single [GeoJSON][2] feature containing the convex hull of all operation
  data and some statistics calculated from it.

  ```json
  {
      "type": "Feature",
      "properties": {
          "totalDistance": 10900.947723655045,
          "speed": {
              "average": 10.33722442338795,
              "standardDeviation": 1.5361860364425932,
              "min": 0.3355403244495392,
              "max": 11.497848510742188
          },
          "elevation": {
              "average": 3577.9168289290683,
              "standardDeviation": 0.6729413774132946,
              "min": 3576.9,
              "max": 3578.9
          },
          "varieties": [
              "28-0-0 uan @ 160 lb/ac",
              "agrotain advanced @ 2.5 gal/ac",
              "bicep ii magnum @ 32 fl oz/ac",
              "fs optique @ 20 fl oz/ac",
              "roundup powermax (usa) @ 16 fl oz/ac",
              "sharpen powered by kixor @ 1 fl oz/ac"
          ],
          "appliedRate": {
              "average": 14.757733806861584,
              "standardDeviation": 0.3157623349195758,
              "min": 13.899999643744623,
              "max": 15.599999476023033
          },
          "operationType": "applied",
          "totalArea": 319471.8942196931,
          "machineSpecification": {
              "machineDescription": "Agco Rogator RG1300",
              "implementDescription": "Sprayer",
              "implementWidth": 1440.0000000000002
          }
      },
      "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
              [
                  [
                      [-89.83382833, 39.71963950, 3578.8],
                      [-89.83443583, 39.71966733, 3578.8],
                      [-89.83452050, 39.71968466, 3578.6],
                      [-89.83451283, 39.72648850, 3577.8],
                      [-89.83010300, 39.72748950, 3577.2],
                      [-89.83005766, 39.72749950, 3577.2],
                      [-89.83001900, 39.72750716, 3577.2],
                      [-89.82999183, 39.72751166, 3577.3],
                      [-89.82997116, 39.72751383, 3577.3],
                      [-89.82993383, 39.72020166, 3578.6],
                      [-89.82993866, 39.71975133, 3578.2],
                      [-89.82996366, 39.71968966, 3578.1],
                      [-89.83382833, 39.71963950, 3578.8]
                  ]
              ]
          ]
      }
  }
  ```

  </TabItem>
</Tabs>


---

### Get a file's images

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/images`

Gets a list of PNG images generated from the operation's file properties.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/files/{id}/images'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/images'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}/images'
  ```

  </TabItem>
  <TabItem value="json">

  Returns a JSON list of the following format:

  ```json
  [
    {
      "property": "elevation",
      "ramp": {
        "0%":   [200,   0, 0],
        "35%":  [255,  40, 0],
        "45%":  [255, 150, 0],
        "55%":  [255, 240, 0],
        "65%":  [  0, 230, 0],
        "75%":  [  0, 190, 0],
        "100%": [  0, 130, 0],
        "nv":   [  0,   0, 0, 0]
      },
      "url": "string"
    },
    ...
  ]
  ```

  The `property` refers to the property extracted from files' data to generate the
  image. In the example above, the image would represent the elevation.

  The `ramp` is the color ramp used to generate the image. The percentages
  correspond to the minimum (0%) and maximum (100%) values in the image. The
  listed values correspond to RGB values used. The `nv` refers to `no value`. It
  is used internally to make the image transparent on places without data.
  Currently, this ramp is the same in all images processed.

  We also generate an auxiliary `xml` with geographic information to handle this
  image on GIS environments. You just need to append the `".aux.xml"` string to the png url.

  </TabItem>
</Tabs>



---

### Get a file's units

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/units`

Gets the file's properties and their units.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/files/{id}/units'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/units'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}/units'
  ```

  </TabItem>
  <TabItem value="json">

  Returns a JSON like the following:

  ```json
  {
      "distance": "ft",
      "heading": "arcdeg",
      "speed": "mi/hr",
      "elevation": "ft",
      "harvestMoisture": "prcnt",
      "wetMass": "lb",
      "yieldVolume": "bu",
      "equipmentWidth": "ft"
  }
  ```

These properties vary depending on the operationType, but you can expect the same,
standardized keys, across different providers.

Units usually don't change for the same Leaf User, since the providers units
configuration is based on their location. But keep in mind that it's best to
always take the units into consideration, just to be sure.

  </TabItem>
</Tabs>



---

### Upload a file

&nbsp<span class="badge badge--warning">POST</span> `/files`

Posts/creates a new file in Leaf. The file must be sent as a zip.

This endpoint receives three URL parameters, one of them is optional.

A `leafUserId`, `provider` and `fileFormat` (optional). 

When you are sure which provider a file came from and that if there are multiple 
files they belong to the same operations, you can add the `fileFormat`, that 
must be one of the following:


```
ADAPTADM
CN1
DATCLIMATE
GEOJSON
ISO11783
SHAPEFILE
TRIMBLE
```

Along with the `fileFormat`, a `provider` must be set and be one of the following:

```
Leaf
ClimateFieldView
CNHI
JohnDeere
Trimble
```

When unsure about the format or when there can be more than one format in the same 
zip, you can use our generic uploader and Leaf will detect the files present.
For that, set `provider` to `Leaf` and don't include `fileFormat`. 
Leaf will detect files present in a number of different ways and hierarchies and 
create/return one file id for each detection. This is very important because it's 
slightly different than when uploading a zip file you are sure refers to the 
same operation and same provider, creating only one file even if the zip contains
multiple files for the same operation.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
  ]
}>

  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/files'

  const headers = {
    'Authorization': `Bearer ${TOKEN}`
    'Content-Type': 'multipart/form-data'
  }

  const params = {
    fileFormat: 'SHAPEFILE',
    provider: 'JohnDeere',
    leafUserId: 'id'
  }

  const form = new FormData()
  form.append('file', 'shapefile.zip')

  axios.post(endpoint, form, { headers, params })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/operations/api/files'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  files = {'file': open('shapefile.zip')}
  params = {
    'fileFormat': 'SHAPEFILE',
    'provider': 'JohnDeere',
    'leafUserId': 'id'
  }

  response = requests.post(endpoint, headers=headers, files=files, params=params)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -F 'file=shapefile.zip' \
      'https://api.withleaf.io/services/operations/api/files?' \
      'fileFormat=SHAPEFILE&provider=JohnDeere&leafUserId=id'
  ```

  </TabItem>
  <TabItem value="json">

  Returns a single JSON object:

  ```json
{
    "message": "Your file is being processed and will be available in a few minutes",
    "ids": [
        "file_id_1",
        "file_id_2",
        "file_id_...",
        "file_id_n",
    ]
}
  ```

  </TabItem>
</Tabs>

After a few minutes, you can query each of the files individually on 
[Get a File](#get-a-file) or all of them, filtering by `createdDate`, on 
[Get all Files](#get-all-files).


---

### Merge files

&nbsp<span class="badge badge--warning">POST</span> `/files/merge`

Posts a merge operation to our server.

A merge operation is performed asynchronously. This call will return immediately
with the newly created file entry, but at this point, the file is not already
processed and available. You will need to make a new `GET /files` request for the
new id and check the status. A status value of `processed` means the file is
done merging.

A merge process has some validations, the files passed must belong to
the same `leafUserId`, be of the same operation type and have the status as `processed`.
If any of those filters fail, the endpoint will result in HTTP 400 error.

It receives a single JSON object with the `ids` entry. Example:

```json
{
  "ids": [ "id1", "id2", "so on" ]
}
```

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
  ]
}>

  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/files/merge'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = { ids: [ 'id1', 'id2' ] }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/operations/api/files/merge'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {'ids': ['id1', 'id2']}

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "ids": [ "id1", "id2" ] }'
      'https://api.withleaf.io/services/operations/api/files/merge'
  ```

  </TabItem>
  <TabItem value="json">

  Returns a single JSON object:

  ```json
  {
    "id": "id",
    "status": "SENT_TO_MERGE"
  }
  ```

  After a few minutes, you can consult the result of Leaf processing over this file by
  performing GET consults in this.

  </TabItem>
</Tabs>


## REST Resources

See below the REST resources and their endpoints.

### Operation File Summary Resource

Leaf returns operation file summaries in a standardized format. Summaries use the point data to derive basic information about the operation and include links to the original files and images of an operation.Naturally, different 
types of operations contain different properties. For instance, an `applied` 
operation will contain `appliedRate`, whereas a `harvested` operation will 
contain `wetMass` and other Yield properties. The resource below shows a typical return. A list of 
all properties is available here.

```json
{
    "id": "f505092b-ab8f-4d87-a4b6-92cccb6b2515",
    "fileName": "new_test_data.zip",
    "provider": "Leaf",
    "fileFormat": "DATCLIMATE",
    "originalFile": "URL (String)",
    "rawGeojson": "URL (String)",
    "standardGeojson": "URL (String)",
    "zippedPNGs": "URL (String)",
    "leafUserId": "UUID",
    "apiOwnerUsername": "email (String)",
    "summary": {
        "type": "Feature",
        "properties": {
            "property1": {
                "average": float,
                "standardDeviation": float,
                "min": float,
                "max": float
            },
            "property2": {
                "average": float,
                "standardDeviation": float,
                "min": float,
                "max": float
            },
            "propertyn": {
                "average": float,
                "standardDeviation": float,
                "min": float,
                "max": float
            },
            "crop": [
                "String"
            ],
            "operationType": "String",
            "totalArea": float
        },
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [[[
              [-89.832583, 39.719780, 194.9],
              [-89.832588, 39.719780, 194.9],
              [-89.832519, 39.719806, 195.0],
              [-89.832578, 39.719781, 195.0],
              [-89.832583, 39.719780, 194.9]
            ]]]
        }
    },
    "sourceFiles": [],
    "status": "processed, processing or failed",
    "origin": "provider, uploaded, merged or automerged",
    "createdTime": "ISO 8601 date",
    "operationStartTime": "ISO 8601 date",
    "operationEndTime": "ISO 8601 date"
}
```

An operation returned by Leaf can be an individual file or contain multiple 
individual files (uploaded, merged or uploaded).
If the operation contains more than one individual file, another key is added to 
the resource, the "sources" key, that is a list of individual file ids.

### Standard Geojson Resource

Each operation file returns with a "standardgeojson" URL that allows you to download a full point dataset from the operation in a standardized geojson format. Below is an example of the format of each point in these files.

<Tabs
  defaultValue="planted"
  values={[
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
  ]
}>
  
  <TabItem value="planted">

  ```json
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": 
      [
        -74.83762110788625,
        28.686604864693564
      ]
    },
    "properties": {
      "distance": "float",
      "heading": "float",
      "speed": "float",
      "elevation": "float",
      "equipmentWidth": "float",
      "recordingStatus": "string",
      "machinery": ["string"],
      "sectionId" : "int",
      "timestamp": "string",
      "operationType": "planted",
      "crop": "string",
      "variety": "string",
      "area": "float",
      "seedRate": "int",
      "seedRateTarget": "int",
      "seedDepth": "float",
    }
  }
  ```


  </TabItem>
  <TabItem value="applied">

  ```json
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": 
      [
        -74.83762110788625,
        28.686604864693564
      ]
    },
    "properties": {
      "distance": "float",
      "heading": "float",
      "speed": "float",
      "elevation": "float",
      "equipmentWidth": "float",
      "recordingStatus": "string",
      "machinery": ["string"],
      "sectionId" : "int",
      "timestamp": "string",
      "operationType": "applied",
      "crop": "string",
      "area": "float",
      "products": {
        "type": "string",
        "description": "string"
      },
      "appliedRate": "float",
      "appliedRateTarget": "float",
    }
  }
  ```

  </TabItem>
  <TabItem value="harvested">

  ```json
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": 
      [
        -74.83762110788625,
        28.686604864693564
      ]
    },
    "properties": {
      "distance": "float",
      "heading": "float",
      "speed": "float",
      "elevation": "float",
      "harvestMoisture": "float",
      "equipmentWidth": "float",
      "recordingStatus": "string",
      "machinery": ["string"],
      "sectionId" : "int",
      "timestamp": "string",
      "operationType": "harvested",
      "crop": "string",
      "variety": "string",
      "area": "float",
      "wetMass": "float",
      "wetVolume": "float",
      "wetMassPerArea": "float",
      "wetVolumePerArea": "float",
      "dryMass": "float",
      "dryVolume": "float",
      "dryMassPerArea": "float",
      "dryVolumePerArea": "float"
    }
  }
  ```

  </TabItem>
</Tabs>



## List of properties

Below is the list of all properties. When the data is present in the original 
file, Leaf standardizes names (and units) to create the standardGeojson, the 
summary and, when applicable, images for those properties. 

Below we list all the properties in the standardGeojson and summary separately,
since there are different properties present.

### Summary properties

Select the tab you want to see "planted", "applied" or "harvested"

<Tabs
  defaultValue="planted"
  values={[
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
  ]
}>

  <TabItem value="planted">

  | key             | presence       | type | 
  | -               | -              | - |
  | crop            | *  | string | 
  | seedRate        | *  | dict |
  | operationType   | *  | string "planted" |
  | totalArea       | *  | int (square meters) |
  | elevation       | *  | dict |
  | variety         | ** | string |
  | seedRateTarget  | ** | dict |
  | seedDepth       | ** | dict |
  | machinery       | ** | list of strings |
  | speed           | ** | dict |
  | totalPlanted    | ** | int (number of seeds) |
  

  note: the dict properties will always contain a "min", "max", "avg" and "unit" 
  key inside it, like the following example:

  ```json
  "seedRate": {
      "min": 123,
      "max": 140,
      "avg": 126,
      "unit": "seeds/ac"
  }
  ```

  </TabItem>

  <TabItem value="applied">

  | key | presence | type |
  | - | - | - |
  | appliedRate         | *  | dict |
  | operationType       | *  | applied |
  | elevation           | *  | dict |
  | totalArea           | *  | int (square meters) |
  | products            | *  | dict  |
  | appliedRateTarget   | ** | dict |
  | machinery           | ** | list of strings |
  | speed               | ** | dict |
  | totalApplied        | ** | float |

  note: "products" dict contains one dict for every product used. Every product 
  dict contains "minRate", "maxRate", "avgRate", "unit" and "description" like
  shown below:

  ```json
  "products": {
      "28-0-0 UAN": {
          "minRate": 13.0,
          "maxRate": 15.0,
          "avgRate": 14.0,
          "unit":"gal/ac",
          "description": ""
      },
      "Agrotain Plus": {
          "minRate": 1.1, 
          "maxRate": 1.3,
          "avgRate": 1.23,         
          "unit": "lb/ac",
          "description": ""
      }
  }
  ```

  note: with the exception of "products", all the dict properties contain "min", 
  "max", "avg" and "unit" key inside it, like the following example:

  ```json
  "appliedRate": {
      "min": 123.0,
      "max": 140.0,
      "avg": 126.0,
      "unit": "gal/ac or l/ha"
  },
  ```

  </TabItem>


  <TabItem value="harvested">


  | key | presence | type |
  | - | - | - |
  | elevation         | *  | dict |
  | harvestMoisture   | *  | dict |
  | operationType     | *  | harvested |
  | totalArea         | *  | int (square meters) |
  | wetMass           | *  | dict | 
  | wetMassPerArea    | *  | dict |
  | wetVolume         | *  | dict |
  | wetVolumePerArea  | *  | dict |
  | totalWetVolume    | *  | float |
  | totalWetMass      | *  | float |
  | crop              | *  | string |
  | dryMass           | ** | dict |
  | dryMassPerArea    | ** | dict |
  | dryVolume         | ** | dict |
  | dryVolumePerArea  | ** | dict |
  | speed             | ** | dict |
  | variety           | ** | string |
  | machinery         | ** | list of strings |

  note: the dict properties will always contain a "min", "max", "avg" and "unit" 
  key inside it, like the following example:

  ```json
  "harvestMoisture": {
    "min": 17.0,
    "max": 18.0,
    "avg": 17.3,
    "unit": "percentage"
  }
  ```


  </TabItem>
</Tabs>

\* = Always in response  
\*\* = Usually in response but not required to pass tests


### Standard GEOJSON properties


<Tabs
  defaultValue="planted"
  values={[
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
  ]
}>

  <TabItem value="planted">

  | key | presence | type | example units | description |
  | - | - | - | - | - |
  | coords          | * | Point (x,y)     | -                    | Point (x,y) |
  | timestamp       | * | string          | -                    | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z |
  | crop            | * | string          | -                    | Crop type (normalized) |
  | area            | * | float           | ft² or m²            | Area represented by point |
  | heading         | * | float           | degrees              | Heading of machine at point |
  | distance        | * | float           | ft or m              | Distance travelled since previous point |
  | elevation       | * | float           | ft or m              | Distance to sea level |
  | operationType   | * | string          | -                    | string "planted" |
  | equipmentWidth  | * | int             | ft or m              | Width of implement |
  | recordingStatus | * | Boolean         | -                    | Recording status of machine at point |
  | seedRate        | * | int             | seeds/m² or seeds/ac | The rate of seeds planted at point |
  | variety         | ** | string          | -                    | The variety of seed being planted |
  | speed           | ** | float           | ft/s or m/s          | Speed of machine at point |
  | sectionId       | ** | int             | -                    | ID of implement sensor section |
  | machinery       | ** | list of strings | -                    | name of machine & implement |
  | seedRateTarget  | ** | int             | seeds/m² or seeds/ac | The target rate of seeds to be planted at the point |
  | seedDepth       | ** | float           | cm                   | The depth at which seeds were planted at point |

  </TabItem>

  <TabItem value="applied">

  | key | presence | type | example units | description |
  | - | - | - | - | - |
  | coords            | * | Point (x,y)       | -                | Point (x,y) |
  | distance          | * | float             | ft or m          | Distance travelled since previous point |
  | heading           | * | float             | -                | Heading of machine at point |
  | elevation         | * | float             | m                | Distance to sea level |
  | area              | * | float             | ft² or m²        | Area represented by point |
  | appliedRate       | * | float             | fl.oz/ac or L/m² | The amount of product being applied at point |
  | recordingStatus   | * | Boolean           | -                | Recording status of machine |
  | timestamp         | * | string            | -                | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z |
  | operationType     | * | string            | -                | string "applied" |
  | products          | * | dict              | -                | tank mix including products and ratio |
  | equipmentWidth    | * | int               | ft or m          | Width of implement |
  | speed             | ** | float             | ft/s or m/s      | Speed of machine at point |
  | appliedRateTarget | ** | float             | fl.oz/ac or L/m² | The target amount of product to be applied at the point |
  | machinery         | ** | list of strings   | -                | Name of machine and implement |
  | sectionId         | ** | int               | -                | ID of implement sensor section |


  </TabItem>

  <TabItem value="harvested">

  | key | presence | type | example units | description |
  | - | - | - | - | - |
  | coords            | * | Point (x,y) | -              | Point x,y |
  | timestamp         | * | string      | -              | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z |
  | crop              | * | string      | -              | Crop type (normalized) |
  | area              | * | float       | ft² or m²      | Area represented by point |
  | distance          | * | float       | ft or m        | Distance travelled since previous point |
  | elevation         | * | float       | ft or m        | Distance to sea level |
  | operationType     | * | string      | -              | string "harvested" |
  | equipmentWidth    | * | float       | ft or m        | Width of implement |
  | recordingStatus   | * | Boolean     | -              | Recording status of machine |
  | harvestMoisture   | * | float       | % | float      | % moisture of harvested crop |
  | wetMass           | * | float       | lb or kg       | wet mass harvested in that point |
  | wetMassPerArea    | * | float       | lb/ac or kg/ha | wet mass harvested in that point divided by area |
  | wetVolume         | * | float       | bu or L        | wet volume harvested in that point |
  | wetVolumePerArea  | * | float       | bu/ac or L/ha  | wet volume harvested in that point divided by area |
  | variety           | ** | string      | -              | The variety of seed being harvested |
  | speed             | ** | float       | ft/s or m/s    | Speed of machine at point |
  | heading           | ** | float       | degrees        | Heading of machine at point |
  | machinery         | ** | list        | -              | name of machine & implement |
  | dryMass           | ** | float       | lb or kg       | dry mass harvested in that point |
  | dryMassPerArea    | ** | float       | lb/ac or kg/ha | dry mass harvested in that point divided by area |
  | dryVolume         | ** | float       | bu or L        | dry volume harvested in that point |
  | dryVolumePerArea  | ** | float       | bu/ac or L/ha  | dry volume harvested in that point divided by area |
  | sectionId         | ** | int         | int            | ID of implement sensor section |

  </TabItem>
</Tabs>

\* = Always in response  
\*\* = Usually in response but not required to pass tests

## Alerts

With Alerts you can be notified when something happens or changes instead of needing to repeatedly query for changes. 
Leaf Alerts support events that happen within Leaf and events that happen within supported 3rd party software. 


### List of Operations Events

Leaf Operations Service has can Alert you on these events: [list of Operations Events][10]
