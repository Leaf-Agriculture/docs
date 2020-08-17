---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://a.agrigate.io/services/operations/api
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

### `GET /files`
Gets a paged list of files that belong to the current logged in user. It is
possible to filter the results by passing some query parameters. They are listed
below.

- `leafUserId`, only matches files from this user
- `provider`, filter by the provider. Currently we support the following providers: `CNHI`, `JohnDeere`, `Trimble` and `ClimateFieldView`
- `status`You can match the step of the process by passing one of the following: `processed`, `failed` or `processing`
- `origin`, files have differnte origins in our services. You can filter by
its origin using one of the following: `provider`, `automerged`, `merged`,
`uploaded`
- `organizationId`, as the provider organizationId (only available for JohnDeere files)
- `createdTime`, as ISO 8601 date to filter by the file's creation time
- `operationStartTime`, as ISO 8601 date to filter by the operation's start time
- `operationEndTime`, as ISO 8601 date to filter by the operation's end time

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page

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

  const endpoint ='https://a.agrigate.io/services/operations/api/files'
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

  endpoint = 'https://a.agrigate.io/services/operations/api/files'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files'
  ```

  </TabItem>
</Tabs>

It returns a JSON object like the following:

```json
[
  {
    "id": "UUID",
    "fileName": "filename.zip",
    "providerName": "CNHI",
    "originalFile": "S3_URL",
    "rawGeojson": "S3_URL",
    "status": "failed",
    "leafUserId": "UUID",
    "apiOwnerUsername": "CLIENT",
    "fileType": "PRESCRIPTION",
    "createdTime": "2020-04-16T21:14:03.518",
    "sizeInBytes": 123456789
  },
  ...
]
```

### `GET files/{id}`
Gets a single file by its id.

Returns a single JSON object:

```json
{
  "apiOwnerUsername": "string",
  "createdTime": "2020-04-29T20:13:42.811Z",
  "operationEndTime": "2020-04-29T20:13:42.811Z",
  "operationStartTime": "2020-04-29T23:13:42.811Z",
  "fileFormat": "string",
  "fileName": "string",
  "fileType": "string",
  "id": "UUID",
  "leafUserId": "UUID",
  "originalFile": "string",
  "zippedPNGs": "string",
  "provider": "string",
  "rawGeojson": "string",
  "sizeInBytes": 0,
  "status": "string",
  "stdGeojson": "string",
  "origin": "string"
}
```

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

  const endpoint ='https://a.agrigate.io/services/operations/api/files/{id}'
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

  endpoint = 'https://a.agrigate.io/services/operations/api/files/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files/{id}'
  ```

  </TabItem>
</Tabs>

### `GET /files/{id}/summary`
Gets the summary, if available, for the file id.

Returns a single [GeoJSON][2] feature containing the convex hull of all operation
data and some statistics calculated from it.

```py
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

  const endpoint ='https://a.agrigate.io/services/operations/api/files/{id}/summary'
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

  endpoint = 'https://a.agrigate.io/services/operations/api/files/{id}/summary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files/{id}/summary'
  ```

  </TabItem>
</Tabs>

### `GET /files/{id}/images`
Gets a list of PNG images generated from the operation's file properties.

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
correspond to the minimun (0%) and maximum (100%) values in the image. The
listed values corresponde to RGB values used. The `nv` refers to `no value`. It
is used internally to make the image transparent on places without data.
Currently, this ramp is the same of all images processed.

We also generate an auxiliary `xml` with geographic information to handle this
image on GIS environments. You just need to append the `".aux.xml"` string to the png url.

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

  const endpoint ='https://a.agrigate.io/services/operations/api/files/{id}/images'
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

  endpoint = 'https://a.agrigate.io/services/operations/api/files/{id}/images'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files/{id}/images'
  ```

  </TabItem>
</Tabs>

### `POST /files`
Posts/creates a new file in our server.

This endpoint receives three query parameters. A `leafUserId`, `fileFormat` and
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

Provider must be one of the following:

```
ClimateFieldView
CNHI
JohnDeere
Leaf
Trimble
```

Returns a single JSON object:

```json
{
  "message": "Your file is being processed and will be available in a few minutes",
  "id": "id"
}
```

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

  const endpoint ='https://a.agrigate.io/services/operations/api/files'

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

  endpoint = 'https://a.agrigate.io/services/operations/api/files'
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

  ```sh
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -F 'file=shapefile.zip' \
      'https://a.agrigate.io/services/operations/api/files?' \
      'fileFormat=SHAPEFILE&provider=JohnDeere&leafUserId=id'
  ```

  </TabItem>
</Tabs>

### `POST /files/merge`
Posts a merge operation to our server.

A merge operation is performed asynchronously. This call will return immediately
with the newly created file entry, but at this point the file is not already
processed and available. You will need to make new `GET /files` request for the
new id and check the status. A status value of `CONVERTED` means the file is
done merging.

A merge process has some limitations however. The files passed must belong to
the same user, be of the same operation type and have the status as `CONVERTED`.
If any of those filters fail, the endpoint will result in HTTP 400 error.

It receives a single JSON object with the `ids` entry. Example:

```json
{
  "ids": [ "id1", "id2", "so on" ]
}
```

Returns a single JSON object:

```json
{
  "id": "id",
  "status": "SENT_TO_MERGE"
}
```

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

  const endpoint ='https://a.agrigate.io/services/operations/api/files/merge'
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

  endpoint = 'https://a.agrigate.io/services/operations/api/files/merge'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {'ids': ['id1', 'id2']}

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "ids": [ "id1", "id2" ] }'
      'https://a.agrigate.io/services/operations/api/files/merge'
  ```

  </TabItem>
</Tabs>

[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://tools.ietf.org/html/rfc7946
