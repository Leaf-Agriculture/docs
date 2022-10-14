---
title: Endpoints
description: Field Boundaries - Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


## About
Here we list all the available endpoints from Fields API. For easily
calling them, we recommend using [Leaf's Postman collection](https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection).

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/fields/api
```

There is a [REST resources](#rest-resources) section if you want to check it out.

This service has the following endpoints available:

| Description                                                                                       | Endpoints                                                                                                      |
|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [Get all fields](#get-all-fields)                                                                 | <span class="badge badge--success">GET</span> `/fields`                                                        |
| [Get a field](#get-a-field)                                                                       | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}`                                        |
| [Create a field](#create-a-field)                                                                 | <span class="badge badge--warning">POST</span> `/users/{id}/fields`                                            |
| [Update a field](#update-a-field)                                                                 | <span class="badge badge--warning">PATCH</span> `/users/{id}/fields/{id}`                                      |
| [Get all operation files of a field (deprecated)](#get-all-operation-files-of-a-field-deprecated) | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations`                |
| [Get all operation files of a field](#get-all-operation-files-of-a-field)                         | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files`          |
| [Get an operation file of a field (deprecated)](#get-an-operation-file-of-a-field-deprecated)     | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/{fileId}`       |
| [Get an operation file of a field](#get-an-operation-file-of-a-field)                             | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files/{fileId}` |
| [Get fields by geometry (deprecated)](#get-fields-by-geometry-deprecated)                         | <span class="badge badge--warning">POST</span> `/fields/query/intersects`                                      |
| [Get fields by geometry](#get-fields-by-geometry)                                                 | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields/intersects`                         |
| [Get intersection of fields](#get-intersection-of-fields)                                         | <span class="badge badge--warning">POST</span> `/users/{id}/fields/intersect`                                  |
| [Delete a field](#delete-a-field)                                                                 | <span class="badge badge--danger">DELETE</span> `/users/{id}/fields/{id}`                                      |
| [Get all boundaries from field](#get-all-boundaries-from-field)                                   | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries`                 |
| [Get a boundary from field](#get-a-boundary-from-field)                                           | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}`    |
| [Get active boundary from field](#get-active-boundary-from-field)                                 | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundary`                   |
| [Update active boundary from field](#update-active-boundary-from-field)                           | <span class="badge badge--warning">PUT</span> `users/{leafUserId}/fields/{fieldId}/boundary`                   |
| [Get all farms](#get-all-farms)                                                                   | <span class="badge badge--success">GET</span> `/farms`                                                         |
| [Get a farm](#get-a-farm)                                                                         | <span class="badge badge--success">GET</span> `/users/{id}/farms/{id}`                                         |
| [Create a farm](#create-a-farm)                                                                   | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/farms`                                     |
| [Update a farm](#update-a-farm)                                                                   | <span class="badge badge--warning">PUT</span> `/users/{leafUserId}/farms/{id}`                                 |
| [Get all growers](#get-all-growers)                                                               | <span class="badge badge--success">GET</span> `/growers`                                                       |
| [Get a grower](#get-a-grower)                                                                     | <span class="badge badge--success">GET</span> `/users/{leafUserId}/growers/{id}`                               |
| [Create a grower](#create-a-grower)                                                               | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/growers`                                   |
| [Update a grower](#update-a-grower)                                                               | <span class="badge badge--warning">PUT</span> `/users/{leafUserId}/growers/{id}`                               |

## Endpoints

## Fields
### Get all fields

&nbsp<span class="badge badge--success">GET</span> `/fields`

Gets a paged list of Fields. It is possible to filter the results by passing
some query parameters.

- `type`, only matches fields with this type (string).
- `farmId`, only matches fields from this farmId (integer).
- `provider`, only matches fields from this provider (string).
- `leafUserId`, only matches fields from this user (string).
- `page`, an integer specifying the page being fetched.
- `size`, an integer specifying the size of the page (defaults to 20).

These last two parameters are used exclusively for paging through results.

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

  const endpoint ='https://api.withleaf.io/services/fields/api/fields'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/fields'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/fields'
  ```

  </TabItem>
</Tabs>

#### Response
A JSON array containing Fields.
```json
  [
    {
        "id": "1a952614-3673-4d1e-b677-1f7224339ec6",
        "leafUserId": "58800d61-91ac-4922-8e2a-f0216b9f052a",
        "area": {
            "value": 785229.21674535141,
            "unit": "ha"
        },
        "boundaries": [
            "279b52d5-ec6d-4459-a06a-4f47ffab0659"
        ],
        "providerName": "JohnDeere",
        "providerId": 2,
        "providerFieldId": "b96ed268-728f-489e-b928-9d3e70082be4",
        "providerBoundaryId": "125fc49f-7e75-43fe-89f2-af976addb392",
        "providerFieldName": "The_Field_field",
        "organizationId": "428214",
        "type": "ORIGINAL",
        "createdTime": "2021-10-20T21:21:24.732030Z",
        "updatedTime": "2021-11-03T01:34:15.154051Z",
        "farmId": 3746117,
        "mergedFieldId": "f97c5bbc-2dbf-4400-8d59-39eba37f8847",
        "sources": [],
        "legacy": true
    }
  ]
  ```

### Get a field

&nbsp<span class="badge badge--success">GET</span> `/users/{id}/fields/{id}`

Gets a single Field by its id.

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

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
  ```

  </TabItem>
</Tabs>

#### Response
A single [Field](#field-resource) as a JSON object.

### Create a field

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields`

Creates a Field for the user `leafUserId`. A request body must be provided
containing the entry `"geometry"` object which need to have the properties `"type"` and `"coordinates"`. 
The geometry represents the boundaries of the Field being created as a GeoJSON geometry 
(`"type"` property must be a `"MultiPolygon"`).

Consider that you can also set the `id` and `name` properties (both of them optional) in the request body. If no `id` is provided
an UUID will be generated and this property **can not** be updated.

Request body example:

```json
{
  "id": "string", // optional
  "name": "string", // optional
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [-93.48821327980518, 41.77137549568163],
          [-93.48817333680519, 41.77143534378164],
          [-93.48821327390516, 41.76068857977987],
          [-93.48821327980518, 41.77137549568163]
        ]
      ]
    ]
  }
}
```

You can try some requests on the create fields API using the examples below.

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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    }
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'geometry': {
      'type': "MultiPolygon",
      'coordinates': [...]
    }
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "coordinates": [...] } }'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/'
  ```

  </TabItem>
</Tabs>

#### Response

You can expect a response with a JSON Object containing the following properties.

```json
{
    "id": "string",
    "leafUserId": "string",
    "area": {
        "value": float,
        "unit": "ha"
    },
    "boundaries": [
        "UUID"
    ],
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [...]
    },
    "type": "string",
    "createdTime": "timestamp",
    "updatedTime": "timestamp"
}
```

### Update a Field

&nbsp<span class="badge badge--warning">PATCH</span> `/users/{leafUserId}/fields/{id}`

Update the Field by `"id"` for the user `"leafUserId"`. The request body accepts updatable field properties like `"name"` to update the field name, `"farmId"` to update the related Farm of the Field and `"geometry"`, which represents the boundaries of the
Field as a GeoJSON geometry (it must be a `"MultiPolygon"`).

Request body example:

```json
{
  "name": "updatedName",
  "farmId": 1,
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [-93.48821327980518, 41.77137549568163],
          [-93.48817333680519, 41.77143534378164],
          [-93.48821327390516, 41.76068857977987],
          [-93.48821327980518, 41.77137549568163]
        ]
      ]
    ]
  }
}
```

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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    name: "updatedName",
    farmId: 1,
    geometry: {
      type: "MultiPolygon",
      coordinates: [
        [-93.48821327980518, 41.77137549568163],
        [-93.48817333680519, 41.77143534378164],
        [-93.48821327390516, 41.76068857977987],
        [-93.48821327980518, 41.77137549568163]
      ]
    }
  }

  axios.patch(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'updatedName',
    'farmId': 1,
    'geometry': {
      'type': "MultiPolygon",
      'coordinates': [
        [-93.48821327980518, 41.77137549568163],
        [-93.48817333680519, 41.77143534378164],
        [-93.48821327390516, 41.76068857977987],
        [-93.48821327980518, 41.77137549568163]
      ]
    }
  }

  response = requests.patch(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PATCH \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "updatedName", "farmId": 1, "geometry": { "type: "MultiPolygon", "coordinates": [...] } }'
      'https://api.withleaf.io/services/fields/api/fields/users/{leafUserId}/{id}'
  ```

  </TabItem>
</Tabs>

#### Response
A [Field](#field-resource) as a JSON object.

### Get all operation files of a field (deprecated)

Use [this endpoint](#get-all-operation-files-of-a-field) instead

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations`

Gets a paged list of all operation files of the Field and Leaf User specified in
the URL.

It is possible to filter the results by passing some query
parameters. They are listed below.

| Parameter (to filter by) | Type | Description
| - | - | - |
| operationType | String "harvested", "planted", "applied" or "other" | retrieve operations of given type
| provider | String "CNHI", "JohnDeere", "Trimble" or "ClimateFieldView" | retrieve operations of given provider
| origin | String "provider", "automerged", "merged" or "uploaded" | retrieve operations of given origin
| crop | String name of the crop, like "corn" or "soybeans". Entire crop list available [here](crops.md) | retrieve operations with this crop.
| startTime | ISO 8601 datetime format | retrieve operations that started after this date
| endTime | ISO 8601 datetime format | retrieve operations that ended before this date

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (default is 20, max is 100)

#### Request

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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "crops": [
      "string"
    ],
    "endTime": "2022-05-11T13:11:57.994Z",
    "id": "string",
    "leafUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "operationType": "other",
    "origin": "automerged",
    "provider": "Other",
    "providerFileId": "string",
    "startTime": "2022-05-11T13:11:57.994Z",
    "varieties": [
      "string"
    ]
  }
]
```

### Get all operation files of a field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files`

Gets a paged list of all operation files of the Field and Leaf User specified in
the URL.

It is possible to filter the results by passing some query
parameters. They are listed below.

| Parameter (to filter by) | Type | Description
| - | - | - |
| operationType | String "harvested", "planted", "applied" or "other" | retrieve operations of given type
| provider | String "CNHI", "JohnDeere", "Trimble" or "ClimateFieldView" | retrieve operations of given provider
| origin | String "provider", "automerged", "merged" or "uploaded" | retrieve operations of given origin
| crop | String name of the crop, like "corn" or "soybeans". Entire crop list available [here](crops.md) | retrieve operations with this crop.
| startTime | ISO 8601 datetime format | retrieve operations that started after this date
| endTime | ISO 8601 datetime format | retrieve operations that ended before this date


You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (default is 20, max is 100)

#### Request

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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/files'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/files'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/files'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "crops": [
      "string"
    ],
    "endTime": "2022-05-11T13:11:57.994Z",
    "id": "string",
    "leafUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "operationType": "other",
    "origin": "automerged",
    "provider": "Other",
    "providerFileId": "string",
    "startTime": "2022-05-11T13:11:57.994Z",
    "varieties": [
      "string"
    ]
  }
]
```

### Get an operation file of a field (deprecated)

Use [this endpoint](#get-an-operation-file-of-a-field) instead

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/{fileId}`

Gets a single Operation File of a field by its id.

#### Request

<Tabs
  defaultValue="sh"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'cURL', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "crops": [
      "string"
    ],
    "endTime": "2022-05-11T13:11:57.994Z",
    "id": "string",
    "leafUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "operationType": "other",
    "origin": "automerged",
    "provider": "Other",
    "providerFileId": "string",
    "startTime": "2022-05-11T13:11:57.994Z",
    "varieties": [
      "string"
    ]
  }
]
```

### Get an operation file of a field 

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files/{fileId}`

Gets a single Operation File of a field by its id.

<Tabs
defaultValue="sh"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'Python', value: 'py', },
{ label: 'cURL', value: 'sh', },
]
}>
<TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/files/{id}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/files/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/files/{id}'
  ```

  </TabItem>
</Tabs>

#### Response
A single Operation File.

```json
{
  "crops": [
    "string"
  ],
  "endTime": "2022-05-11T13:13:01.548Z",
  "id": "string",
  "leafUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "operationType": "other",
  "origin": "automerged",
  "provider": "Other",
  "providerFileId": "string",
  "startTime": "2022-05-11T13:13:01.548Z",
  "varieties": [
    "string"
  ]
}
```

### Get Fields by geometry (deprecated)

&nbsp<span class="badge badge--warning">POST</span> `/fields/query/intersects`

Use [this endpoint](#get-fields-by-geometry) instead.

Gets a list of fields that intersect with the GeoJSON MultiPolygon sent in
the request body.

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

  const endpoint ='https://api.withleaf.io/services/fields/api/fields/query/intersects'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    }
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">


  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/query/intersects'
  headers = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}

  data = {
    'geometry': {
      'type': "MultiPolygon",
      'coordinates': [...]
    }
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }'
      'https://api.withleaf.io/services/fields/api/fields/query/intersects'
  ```

  </TabItem>
</Tabs>

#### Response
A JSON list of Fields.
```json
  [
    {
      "id": "id",
      "leafUserId": "uuid",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [-89.84388470649719,39.71943436012731],
              [-89.84392762184143,39.72439389620628],
              [-89.83936786651611,39.725392361998416],
              [-89.83928203582764,39.71951688444436],
              [-89.84388470649719,39.71943436012731]
            ]
          ]
        ]
      },
      "type": "MERGED",
      "sources": []
    }
  ]
  ```


### Get Fields by geometry 

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields/intersects`

Gets a list of fields that intersect with the GeoJSON MultiPolygon sent in
the request body. The minimum intersection percentage is given by 
`intersectionThreshold` and can range from 0.01% to 100%, its default value is `0.01`.

<p align="center">
  <img alt="How it works" width="75%" src={useBaseUrl('img/field_by_geometry.png')} />
</p>


The `intersectionThreshold` can be compared with the "intersection by field" ratio or the "intersection by geometry" ratio. Whichever is satisfied first.

Here we have a sample for a field with 100 area unit and a geometry with 10 area unit:  

<p align="center">
  <img alt="How it works" width="35%" src={useBaseUrl('img/field_by_geometry_intersectionThreshold.png')} />
</p>

So, in this case, if the `intersectionThreshold` were 3, then the condition would be satisfied and the field would be returned, but if the value was greater than 50, then it would not satisfy the condition, as 50% is the highest intersection value:

| intersectionThreshold (%) | satisfied |
| - | - |
| 3 | ✅ |
| 5 | ✅ |
| 37 | ✅ |
| 50 | ✅ |
| 75 | ❌ |
| 100 | ❌ |

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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/intersects'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    },
    'intersectionThreshold': 25.7
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">


  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/intersects'
  headers = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}

  data = {
    'geometry': {
      'type': "MultiPolygon",
      'coordinates': [...]
    },
    'intersectionThreshold': 25.7
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "coordinates": [...] }, "intersectionThreshold": 25.7 }'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/intersects'
  ```

  </TabItem>
</Tabs>

#### Response
A JSON list of Fields.
```json
  [
    {
      "id": "id",
      "leafUserId": "uuid",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [-89.84388470649719,39.71943436012731],
              [-89.84392762184143,39.72439389620628],
              [-89.83936786651611,39.725392361998416],
              [-89.83928203582764,39.71951688444436],
              [-89.84388470649719,39.71943436012731]
            ]
          ]
        ]
      },
      "type": "MERGED",
      "sources": []
    }
  ]
  ```

### Get intersection of fields

&nbsp<span class="badge badge--warning">POST</span> `/users/{id}/fields/intersect`

Gets a GeoJSON MultiPolygon corresponding to the intersection of the Fields
specified by the given id's. Such Field id's goes in a list, in the request
body.

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
  var axios = require('axios');
  var data = JSON.stringify(["id1","id2"]);

  var config = {
    method: 'post',
    url: 'https://api.withleaf.io/services/fields/api/users/{id}/fields/intersect',
    headers: {
      'Authorization': 'Bearer YOUR_LEAF_TOKEN',
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  ```

  </TabItem>
  <TabItem value="py">


  ```py
  import requests

  url = "https://api.withleaf.io/services/fields/api/users/{id}/fields/intersect"

  payload = "[\"id1\", \"id2\"]"
  headers = {
    'Authorization': 'Bearer YOUR_LEAF_TOKEN',
    'Content-Type': 'application/json'
  }

  response = requests.request("POST", url, headers=headers, data = payload)
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl --location --request \
  POST 'https://api.withleaf.io/services/fields/api/users/{id}/fields/intersect' \
  --header 'Authorization: Bearer YOUR_LEAF_TOKEN' \
  --header 'Content-Type: application/json' \
  --data-raw '["id1", "id2"]'
  ```

  </TabItem>
</Tabs>

#### Response
A JSON in the format of a GeoJSON geometry.
  ```json
  {
      "type": "MultiPolygon",
      "coordinates": [
          [
              [
                  [-89.84388470649719,39.71943436012731],
                  [-89.84392762184143,39.72439389620628],
                  [-89.83936786651611,39.725392361998416],
                  [-89.83928203582764,39.71951688444436],
                  [-89.84388470649719,39.71943436012731]
              ]
          ]
      ]
  }
  ```




<!-- ### POST /users/{id}/fields/same` --
<!-- response needs to be a json, not documenting for now -->
<!-- Gets a boolean value answering if the Fields specified by a list of Field
id's sent in the request body have the same values for their vertices, in
exactly the same order. -->


<!-- ### POST /users/{id}/fields/disjoint` --
<!-- response needs to be a json, not documenting for now -->
<!-- Gets a boolean value answering if the fields specified by a list of field
id's in the request body are disjoint.

#### Response
true or false

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
  var axios = require('axios');
  var data = JSON.stringify(["id1","id2"]);

  var config = {
    method: 'post',
    url: 'https://api.withleaf.io/services/fields/api/users/{id}/fields/disjoint',
    headers: {
      'Authorization': 'Bearer YOUR_LEAF_TOKEN',
      'Content-Type': 'application/json'
    },
    data : data
  };
  ```

  </TabItem>
  <TabItem value="py">


  ```py
  import requests

  url = "https://api.withleaf.io/services/fields/api/users/{id}/fields/disjoint"

  payload = "[\"id1\", \"id2\"]\n"
  headers = {
    'Authorization': 'Bearer YOUR_LEAF_TOKEN',
    'Content-Type': 'application/json'
  }

  response = requests.request("POST", url, headers=headers, data = payload)
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl --location --request \
  POST 'https://api.withleaf.io/services/fields/api/users/{id}/fields/disjoint' \
  --header 'Authorization: Bearer YOUR_LEAF_TOKEN' \
  --header 'Content-Type: application/json' \
  --data-raw '["id1", "id2"]'
  ```

  </TabItem>
</Tabs> -->



<!-- ### POST /users/{id}/fields/integration
Uploads fields to providers. Currently we only support Climate FieldView.
New integrations will come soon.

Request body format:

```json
{
  "fields": ["UUID"],
  "providers": ["ClimateFieldView"]
}
```

#### Response
A JSON in the followin format.

```json
{
  "UUID": {
    "ClimateFieldView": {
      "id": "0cb726c8-aff0-415a-9de3-a04b627008dd"
    },
  },
}
``` -->

### Delete a field

&nbsp<span class="badge badge--danger">DELETE</span> `/users/{id}/fields/{id}`

Deletes the field with the given id.

## Boundaries
### Get all boundaries from field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/boundaries`

Gets a list of boundaries from a field.

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

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}/boundaries'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}/boundaries'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}/boundaries'
  ```

  </TabItem>
    <TabItem value="res">

  ```json
  [
      {
          "id": "90060545-d448-493a-965f-625a17916067",
          "status": "ACTIVE",
          "geometry": {
              "type": "MultiPolygon",
              "coordinates": [
                  [
                      [
                          [
                              -89.84392762184143,
                              39.72439389620628
                          ],
                          [
                              -89.84388470649719,
                              39.71943436012731
                          ],
                          [
                              -89.83928203582764,
                              39.71951688444436
                          ],
                          [
                              -89.83936786651611,
                              39.725392361998416
                          ],
                          [
                              -89.84392762184143,
                              39.72439389620628
                          ]
                      ]
                  ]
              ]
          },
          "area": {
              "value": 23.659422807502747,
              "unit": "ha"
          }
      }
  ]
  ```
  </TabItem>
</Tabs>

#### Response
A list of [Boundary](#boundary-resource) as a JSON object.

### Get a boundary from field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}`

Gets a single Boundary from a field by its id.

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

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}'
  ```

  </TabItem>
</Tabs>

#### Response
A single [Boundary](#boundary-resource) as a JSON object.

### Get active boundary from field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/boundary`

Gets the active Boundary from a field.

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

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  ```

  </TabItem>
</Tabs>

#### Response
A single [Boundary](#boundary-resource) as a JSON object.

### Update active boundary from field

&nbsp<span class="badge badge--warning">PUT</span> `/users/{leafUserId}/fields/{fieldId}/boundary`

Updates the active boundary of field `fieldId`. The previous active boundary is not deleted, but set as inactive.

Request body example:

```json
{
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [-93.48821327980518, 41.77137549568163],
          [-93.48817333680519, 41.77143534378164],
          [-93.48821327390516, 41.76068857977987],
          [-93.48821327980518, 41.77137549568163]
        ]
      ]
    ]
  }
}
```

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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    }
  }

  axios.put(endpoint, data, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'geometry': {
      'type': "MultiPolygon",
      'coordinates': [...]
    }
  }

  response = requests.put(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  ```

  </TabItem>
</Tabs>

#### Response
A [Field](#field-resource) as a JSON object.

## Farms
### Get all farms

&nbsp<span class="badge badge--success">GET</span> `/farms`

Gets a paged list of all farms. It is possible to pass some query parameters.

- `growerId`, only matches Farms from this growerId (integer)
- `provider`, only matches Farms from this provider (string)
- `leafUserId`, only matches Farms from this Leaf User (UUID)
- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page (defaults to 20)

The parameters are used exclusively for paging through results.

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

  const endpoint ='https://api.withleaf.io/services/fields/api/farms'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/farms'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/farms'
  ```

  </TabItem>
</Tabs>

#### Response
A JSON array containing farms.
```json
  [
    {
      "id": 1538766,
      "name": "name",
      "providerId": 2,
      "providerName": "JohnDeere",
      "providerFarmId": "00000000-0000-0000-0000-000000000000",
      "leafUserId": "00000000-0000-0000-0000-000000000000",
      "fieldIds": ["00000000-0000-0000-0000-000000000000"],
      "growerId": 12345
    }
  ]
  ```

### Get a farm

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/farms/{id}`

Gets a single farm by its `id` from the user `leafUserId`.

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

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms/{id}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms/{id}'
  ```

  </TabItem>
</Tabs>

#### Response
A single [Farm](#farm-resource) as a JSON object.
```json
  {
    "id": 1551010,
    "name": "name",
    "providerName": "JohnDeere",
    "providerFarmId": "00000000-0000-0000-0000-000000000000",
    "leafUserId": "00000000-0000-0000-0000-000000000000",
    "fieldIds": ["00000000-0000-0000-0000-000000000000"],
    "growerId": 123
  }
  ```

### Create a farm

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/farms`

Creates a farm for the user `leafUserId`. It's possible to pass both the `farmName` and the `growerId` on the body of 
the request.

Request body example:
```json
{
  "name": "Farm 01",
  "growerId": 123
}
```

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
{ label: 'JavaScript', value: 'js', }
]
}>
<TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    name: 'farmName',
  }

  axios.post(endpoint, data, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'farmName',
  }

  response = requests.post(endpoint, json=data, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "farmName" }'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms'
  ```

  </TabItem>
</Tabs>

#### Response
A single [Farm](#farm-resource) as a JSON object.

### Update a farm

&nbsp<span class="badge badge--warning">PUT</span> `/users/{leafUserId}/farms/{id}`

Updates the farm with id `id` for the user `leafUserId`. It's possible to pass both the `farmName` and the `growerId`
on the body of the request.

Request body example:
```json
{
  "name": "Updated Farm Name",
  "growerId": 123
}
```

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
{ label: 'JavaScript', value: 'js', }
]
}>
<TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms/{id}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    name: 'newFarmName'
  }

  axios.put(endpoint, data, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'newFarmName'
  }

  response = requests.put(endpoint, json=data, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "newFarmName", "growerId": "newGrowerId }'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms/{id}'
  ```

  </TabItem>
</Tabs>

#### Response
A single [Farm](#farm-resource) as a JSON object.

## Grower
### Get all growers

&nbsp<span class="badge badge--success">GET</span> `/growers`

Gets a paged list of all growers. Use the following parameters for paging
through results.

- `provider`, only matches Growers from this provider (string)
- `leafUserId`, only matches Growers from this Leaf User (UUID)
- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page (defaults to 20)

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

  const endpoint ='https://api.withleaf.io/services/fields/api/growers'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/growers'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/growers'
  ```

  </TabItem>
</Tabs>

#### Response
A JSON array containing growers.
```json
  [
    {
      "id": 2345,
      "leafUserId": "UUID",
      "providerName": "str",
      "providerOrganizationId": "str",
      "providerCompanyId": "str",
      "providerUserId": "str",
      "providerGrowerId": "str",
      "farmIds": [4534]
    }
  ]
  ```

### Get a grower

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/growers/{id}`

Gets a single grower by its `id` from the user `leafUserId`.

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

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserID}/growers/{id}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserID}/growers/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/growers/{id}'
  ```

  </TabItem>
</Tabs>

#### Response
A single [Grower](#grower-resource) as a JSON object. In our system Growers are equivalent to John Deere Client. That been said, the 
attribute `name` comes directly from the Client's name for growers with John Deere as provider.
```json
  {
    "id": 2345,
    "name": "str",
    "leafUserId": "UUID",
    "providerName": "str",
    "providerOrganizationId": "str",
    "providerCompanyId": "str",
    "providerUserId": "str",
    "providerGrowerId": "str",
    "farmIds": [4534]
  }
  ```

### Create a grower

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/growers`

Creates a grower for the user `leafUserId`. It's possible to pass `name` on the body of the request.

Request body example:
```json
{
  "name": "Example Grower Name"
}
```

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
{ label: 'JavaScript', value: 'js', }
]
}>
<TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/growers'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    name: 'growerName'
  }

  axios.post(endpoint, data, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/growers'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'growerName'
  }

  response = requests.post(endpoint, json=data, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "growerName" }'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/growers'
  ```

  </TabItem>
</Tabs>

#### Response
A single [Grower](#grower-resource) as a JSON object.

### Update a grower

&nbsp<span class="badge badge--warning">PUT</span> `/users/{leafUserId}/growers/{id}`

Updates the grower with id `id` for the user `leafUserId`. It's possible to pass only the `name` on the body of the request.

Request body example:
```json
{
  "name": "Updated Grower Name"
}
```

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
{ label: 'JavaScript', value: 'js', }
]
}>
<TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/growers/{id}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    name: 'newGrowerName'
  }

  axios.put(endpoint, data, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/growers/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'newGrowerName'
  }

  response = requests.put(endpoint, json=data, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "newGrowerName"}'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/growers/{id}'
  ```

  </TabItem>
</Tabs>

#### Response
A single [Grower](#grower-resource) as a JSON object.


## REST Resources

See below the REST resources and their endpoints.

### Field Resource

A field might have one or neither of the following keys: 
- a "mergedFieldId" key or
- a "sources" key

A Field will only have one of the previous keys if it is either a field that 
has been merged with other one(s) or if it is a result of a merge. Leaf merges
fields that have any sort of overlap. This makes it easier for you to query 
operations from a field by querying by the merged field. Because a field might 
exist in multiple providers, Leaf detects that and creates a single field that 
you can query for - and you can still query by the individual fields too.

**`geometry` and `area` are deprecated keys** that contains the geometry of the active boundary and its area, respectively.

```json
{
  "id": "UUID",
  "providerName": "str",
  "providerFieldName": "str",
  "providerFieldId": "str",
  "providerFieldName": "str",
  "providerBoundaryId": "UUID",
  "type": "ORIGINAL",
  "leafUserId": "UUID",
  "organizationId": "str",
  "mergedFieldId": ["UUID"],
  "files": ["UUID"],
  "boundaries": ["UUID"],
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [-93.48821327980518, 41.77137549568163],
          [-93.48817333680519, 41.77143534378164],
          [-93.48821327390516, 41.76068857977987],
          [-93.48821327980518, 41.77137549568163]
        ]
      ]
    ]
  },
  "area": {
    "value": double,
    "unit": "ha"
  }
}
```

| Description | Endpoints
| - | - |
[Get all fields](#get-all-fields) | <span class="badge badge--success">GET</span> `/fields`
[Get a field](#get-a-field) | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}`
[Create a field](#create-a-field) | <span class="badge badge--warning">POST</span> `/users/{id}/fields`
[Get fields by geometry](#get-fields-by-geometry) | <span class="badge badge--warning">POST</span> `/fields/query/intersects`
[Get intersection of fields](#get-intersection-of-fields) | <span class="badge badge--warning">POST</span> `/users/{id}/fields/intersect`
[Delete a field](#delete-a-field) | <span class="badge badge--danger">DELETE</span> `/users/{id}/fields/{id}`

### Boundary Resource

Every Field at Leaf can have 0 or many boundaries. Fields created via Leaf's endpoints must have at least one boundary. Only one boundary may be active, the others are inactive boundaries. Boundaries cannot be deleted or have its geometry updated. Every update generates a new Boundary, and Leaf keeps a history of all seen Boundaries.

Each boundary has a `status` and `providerStatus`.

- `status` - Represents the current status of the boundary:
  - `ACTIVE` - If the boundary was created at Leaf, it is the active boundary. If it is from a provider,
 this boundary exists at the provider and is the active boundary there.
  - `INACTIVE` - If the boundary was created at Leaf, it is an inactive boundary. If it is from a provider, this boundary exists at the provider and is inactive there.
  - `OUTDATED_ON_PROVIDER` - The boundary is from a provider. The boundary once existed on the provider exactly as it is in that boundary, but it was edited (e.g. has a new geometry but the same provider boundary id).
  - `DELETED_ON_PROVIDER` - The boundary is from a provider. The boundary once existed on the provider, but it was deleted. The user won't find that boundary in the provider.

- `providerStatus` - Is the status of the boundary on the provider.
  - `ACTIVE` - The boundary is the active boundary in the provider.
  - `INACTIVE` - The boundary is inactive in the provider.

`providerStatus`, just like the geometry, is a static attribute. In case this attribute is changed at the provider, the boundary's `status` is updated and a new boundary is created with the updated `providerStatus` in order to maintain history.

```json
{
  "id": "UUID",
  "status": "ACTIVE",
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [
            -89.84392762184143,
            39.72439389620628
          ],
          [
            -89.84388470649719,
            39.71943436012731
          ],
          [
            -89.83928203582764,
            39.71951688444436
          ],
          [
            -89.83936786651611,
            39.725392361998416
          ],
          [
            -89.84392762184143,
            39.72439389620628
          ]
        ]
      ]
    ]
  },
  "area": {
    "value": double,
    "unit": "ha"
  }
}
```

| Description | Endpoints
| - | - |
[Get all boundaries from field](#get-all-boundaries-from-field) | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries`
[Get a boundary from field](#get-a-boundary-from-field) | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}`
[Get active boundary from field](#get-active-boundary-from-field) | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundary`
[Update active boundary from field](#update-active-boundary-from-field) | <span class="badge badge--warning">PUT</span> `users/{leafUserId}/fields/{fieldId}/boundary`

### Operation Resource

```json
{
  "id": "UUID",
  "operationType": "harvested|planted|applied",
  "startTime": "ISO date-time",
  "endTime": "ISO date-time",
  "crops": ["str"],
  "varieties": ["str"],
  "providerFileId": "str",
  "provider": "Trimble",
  "origin": "provider|merged|automerged|uploaded",
  "leafUserId": "UUID"
}
```

| Description | Endpoints
| - | - |
[Get all operations of a field (deprecated)](#get-all-operation-files-of-a-field-deprecated) | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations`
[Get all operations of a field](#get-all-operation-files-of-a-field) | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files`
[Get an operation of a field (deprecated)](#get-an-operation-of-a-field-deprecated) | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/{fileId}`
[Get an operation of a field](#get-an-operation-of-a-field) | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files/{fileId}`

### Farm Resource

```json
{
  "id": "long",
  "name": "str",
  "providerName": "str",
  "providerFarmName": "str",
  "providerFarmId": "UUID",
  "leafUserId": "UUID",
  "growerId": "long",
  "fieldIds": ["UUID"]
}
```

| Description | Endpoints
| - | - |
[Get all farms](#get-all-farms) | <span class="badge badge--success">GET</span> `/farms`
[Get a farm](#get-a-farm) | <span class="badge badge--success">GET</span> `/users/{id}/farms/{id}`
[Create a farm](#create-a-farm) | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/farms`
[Update a farm](#update-a-farm) | <span class="badge badge--warning">PUT</span> `/users/{leafUserId}/farms/{id}`


### Grower Resource

```json
{
  "id": 2345,
  "leafUserId": "UUID",
  "providerName": "str",
  "providerOrganizationId": "str",
  "providerCompanyId": "str",
  "providerUserId": "str",
  "providerGrowerId": "str",
  "farmIds": [4534]
}
```
*If there is a name available for the grower so the `name` property will be returned as well.*

| Description | Endpoints
| - | - |
[Get all growers](#get-all-growers) | <span class="badge badge--success">GET</span> `/growers`
[Get a grower](#get-a-grower) | <span class="badge badge--success">GET</span> `/growers/{id}`
[Create a grower](#create-a-grower) | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/growers`
[Update a grower](#update-a-grower) | <span class="badge badge--warning">PUT</span> `/users/{leafUserId}/growers/{id}`

