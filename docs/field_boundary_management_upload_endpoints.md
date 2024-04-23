---
title: Upload Field Boundary Endpoints
description: Upload Field Boundary Field Boundary - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-an-upload
[2]: #upload-status
[3]: #get-the-upload-entries
[4]: https://docs.withleaf.io/docs/field_boundary_management_endpoints#get-a-field


## About
This file upload service allows the creation of field boundaries from uploaded field files. It currently supports creating field boundaries using polygon and multi-polygon geometries from zip files that contain shapefiles, GeoJSON, or KML files. To call them easily, we recommend using [Leaf's Postman collection](https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection).

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/uploadservice/api
```

There is a [REST resources](#rest-resources) section if you want to check it out.

This service has the following endpoints available:

| Description                                                               | Endpoints                                                                                                           |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| [Upload a field file](#upload-a-field-file)                                         | <span class="badge badge--warning">POST</span> `/upload`                                                             |
| [Get all uploads](#get-all-uploads)                                               | <span class="badge badge--success">GET</span> `/upload`                                             |
| [Get an upload](#get-an-upload)                                         | <span class="badge badge--success">GET</span> `/upload/{uploadId}`                                                 |
| [Get the upload entries](#get-the-upload-entries)                                         | <span class="badge badge--success">GET</span> `/upload/{uploadId}/entries`                                           |



## Upload endpoints

### Upload a field file

&nbsp<span class="badge badge--warning">POST</span> `/upload`

Creates field boundaries in Leaf from files. The file must be sent as a zip.

It supports polygons and multi-polygons from the following spatial formats:

- Shapefile (minimum `*.shp`, `*.dbf`, and `*.shx` must be present)
- GeoJSON
- KML/KMZ

This endpoint accepts a .zip of multilevel files, detects the valid files from the 
.zip, and returns the ID of the upload, which can be used to retrieve 
the ID's of the fields created/processed in the [entries endpoint][3].


:::info Limitations

Currently, our upload endpoints accepts files with the maximum size limited to 3 gigabytes and with up to 100 fields per upload.
:::

This endpoint requires the `leafUserId` parameter and it also accepts the optional `farmId` parameter, which supports any existent Leaf farm ID and if present, all valid fields will be created under the informed farm.

Leaf will project all the geometries to WGS 84 (EPSG:4326). If there is a property/column called `name` available in the file, Leaf API will use it as the field name property.

#### Request examples

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

  const endpoint ='https://api.withleaf.io/services/uploadservice/api/upload?leafUserId={leafUserId}'

  const headers = {
    'Authorization': `Bearer ${TOKEN}`
    'Content-Type': 'multipart/form-data'
  }
  const form = new FormData()
  form.append('file', 'shapefile.zip')

  axios.post(endpoint, form, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/uploadservice/api/upload?leafUserId={leafUserId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  files = {'file': open('shapefile.zip', 'rb')}

  response = requests.post(endpoint, headers=headers, files=files)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -F 'file=shapefile.zip' \
      'https://api.withleaf.io/services/uploadservice/api/upload?' \
      'leafUserId={leafUserId}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "id": "uuid",
    "leafUserId": "uuid",
    "originalFileUrl": "url",
    "fileName": "shapefile.zip",
    "status": "RECEIVED",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
}
```

The upload ID returned as `id` can be used to retrieve on [Get an upload][1] the updated status and individual processed fields IDs.

##### Upload status

The possible `status` are:

| Status    | Description                                                                                         |
|-----------|-----------------------------------------------------------------------------------------------------|
| RECEIVED  | Is the default state for every upload created                                                       |
| PROCESSED | When all the files included in the upload were processed, and at least one file have status SUCCESS |
| FAILED    | The upload did not generated any field boundary with status SUCCESS                                 |


### Get all uploads

&nbsp<span class="badge badge--success">GET</span> `/upload`

Gets all uploads.

#### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/uploadservice/api/upload'
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

  endpoint = 'https://api.withleaf.io/services/uploadservice/api/upload'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/uploadservice/api/upload'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
      "id": "uuid",
      "leafUserId": "uuid",
      "originalFileUrl": "url",
      "fileName": "file.zip",
      "status": "PROCESSED",
      "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  },
  {
      "id": "uuid",
      "leafUserId": "uuid",
      "originalFileUrl": "url",
      "fileName": "shapefile.zip",
      "status": "RECEIVED",
      "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  }
]
```

The possible `status` are listed [here][2].

### Get an upload

&nbsp<span class="badge badge--success">GET</span> `/upload/{uploadId}`

Gets an upload by the upload id.

#### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/uploadservice/api/upload/{uploadId}'
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

  endpoint = 'https://api.withleaf.io/services/uploadservice/api/upload/{uploadId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/uploadservice/api/upload/{uploadId}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "id": "uuid",
    "leafUserId": "uuid",
    "originalFileUrl": "url",
    "fileName": "shapefile.zip",
    "status": "PROCESSED",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
}
```

The possible `status` are listed [here][2].

### Get the upload entries

&nbsp<span class="badge badge--success">GET</span> `/upload/{uploadId}/entries`

Returns the result of each file identified as compatible in the processing.

#### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/uploadservice/api/upload/{uploadId}/entries'
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

  endpoint = 'https://api.withleaf.io/services/uploadservice/api/upload/{uploadId}/entries'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/uploadservice/api/upload/{uploadId}/entries'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
    {
        "id": "uuid",
        "fieldId": [
            "uuid",
            "uuid"
        ],
        "converterFormat": "GEOJSON",
        "originalFileUrl": "url",
        "leafUserId": "uuid",
        "uploadId": "uuid",
        "status": "FINISHED",
        "createFieldErrorDetails": [],
        "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
        "processedTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
    },
    {
        "id": "uuid",
        "fieldId": [
            "uuid",
            "uuid",
            "uuid"
        ],
        "converterFormat": "SHAPEFILE",
        "originalFileUrl": "url",
        "leafUserId": "uuid",
        "uploadId": "uuid",
        "status": "FINISHED",
        "createFieldErrorDetails": [],
        "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
        "processedTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
    },
    {
        "id": "uuid",
        "fieldId": [
            "uuid"
        ],
        "converterFormat": "KML",
        "originalFileUrl": "url",
        "leafUserId": "uuid",
        "uploadId": "uuid",
        "status": "FINISHED",
        "createFieldErrorDetails": [],
        "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
        "processedTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
    }
]
```

The entries response has the list of the fields created for each recognized file, it can be fetched in the `fieldId` property. More information about the created fields can be fetched using the ID in the [Get a field endpoint][4].

The `converterFormat` will show the identified format: `SHAPEFILE`, `GEOJSON`, or `KML`.

If an error occurs for any entry in the file it will be showed in the `createFieldErrorDetails` array.

```json
[
    {
        "id": "uuid",
        "fieldId": [
            "uuid",
            "uuid"
        ],
        "converterFormat": "GEOJSON",
        "originalFileUrl": "url",
        "leafUserId": "uuid",
        "uploadId": "uuid",
        "status": "PARTIALLY_FINISHED",
        "createFieldErrorDetails": [
            "{\"type\":\"https://www.jhipster.tech/problem/problem-with-message\",\"title\":\"Invalid geometry: Self-intersection  at POINT (-39.86283923292457 -18.46470271875014)\",\"status\":400,\"path\":\"/api/system/users/bfa69ef7-7577-4902-9e93-890e2878e1fc/createField\",\"message\":\"Invalid geometry: Self-intersection  at POINT (-39.86283923292457 -18.46470271875014)\",\"errorKey\":\"invalidGeometry\"}"
        ],
        "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
        "processedTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
    }
]
```

The possible `status` for each file is described below:

| Status                | Description                                                                            |
|-----------------------|----------------------------------------------------------------------------------------|
| PROCESSING            | The file is processing, it is the initial status                                       |
| CONVERTED             | The file was converted but the process hasn't finished yet                             |
| FINISHED              | The file process is finished and the fields were created                               |
| FAILED                | A failure occurred during the file processing                                          |
| PARTIALLY_FINISHED    | Some of the fields were not created due to a processing error or invalid registers     |
