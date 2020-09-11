---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/operations/api
```

This service has the following endpoints available:

```
GET    /files
GET    /files/{id}
GET    /files/{id}/summary
GET    /files/{id}/images
POST   /files
POST   /files/merge
DELETE /files/{id}
```

## Endpoints
Here we list all the available endpoints from this microservice. For easily
testing it, we recommend to see our Postman [collection][1].


:::info requires Leaf User with credentials
To have access to operation files, you will need a Leaf User with valid credentials
from the provider you want to access data. If you don't have a Leaf User or you
have not connected it with any provider yet, see **[how to create a Leaf User]()**
or **[how to add credentials to a Leaf User]()**.
:::

---

### `GET /files`
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
      "id": "UUID",
      "fileName": "string",
      "provider": "string",
      "organizationId": "string",
      "fileType": "string",
      "fileFormat": "string",
      "sizeInBytes": 0,
      "originalFile": "string",
      "rawGeojson": "string",
      "standardGeojson": "string",
      "zippedPNGs": "string",
      "leafUserId": "UUID",
      "apiOwnerUsername": "string",
      "summary": "Feature",
      "sourceFiles": [],
      "status": "string",
      "origin": "string",
      "createdTime": "2020-04-29T20:13:42.811Z",
      "operationEndTime": "2020-04-29T20:13:42.811Z",
      "operationStartTime": "2020-04-29T23:13:42.811Z"
    },
    ...
  ]
  ```

  The `sourceFiles` entry in this JSON response is a list of files' ids that were
  used to create the file. It will appear only in _"merge"_ and _"automerged"_ files.

  </TabItem>
</Tabs>


---

### `GET /files/{id}`
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

  ```json
  {
    "id": "UUID",
    "fileName": "string",
    "provider": "string",
    "organizationId": "string",
    "fileType": "string",
    "fileFormat": "string",
    "sizeInBytes": 0,
    "originalFile": "string",
    "rawGeojson": "string",
    "standardGeojson": "string",
    "zippedPNGs": "string",
    "leafUserId": "UUID",
    "apiOwnerUsername": "string",
    "summary": "Feature",
    "sourceFiles": [],
    "status": "string",
    "origin": "string",
    "createdTime": "2020-04-29T20:13:42.811Z",
    "operationEndTime": "2020-04-29T20:13:42.811Z",
    "operationStartTime": "2020-04-29T23:13:42.811Z"
  }
  ```

  </TabItem>
</Tabs>

---

### `GET /files/{id}/summary`
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
      # these properties and more
      "totalDistance": 19194.943013290438,
      "operationType": "harvested",
      "totalArea": 131638.75702051684
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [...]
    }
  }
  ```

  </TabItem>
</Tabs>


---

### `GET /files/{id}/images`
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

### `POST /files`
Posts/creates a new file in our server.

This endpoint receives three required query parameters. A `leafUserId`, `fileFormat` and
`provider`. The `fileFormat` must be one of the following:


```
ADAPTADM
CN1
DATCLIMATE
GEOJSON
ISO11783
SHAPEFILE
TRIMBLE
```

The `provider` must be one of the following:

```
Leaf
ClimateFieldView
CNHI
JohnDeere
Trimble
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
    "id": "id"
  }
  ```

  </TabItem>
</Tabs>

After a few minutes, you can consult the result of Leaf processing over this file by
performing GET consults in this.


---

### `POST /files/merge`
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


[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://tools.ietf.org/html/rfc7946
