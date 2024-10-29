---
title: Field Boundary Management Endpoints
description: Field Boundary Management - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[crops_table]: https://docs.withleaf.io/docs/machine_file_conversion_crops_table

## About
Here we list all the available endpoints from Leaf's Fields API. To call them easily, we recommend using [Leaf's Postman collection](https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection).

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/fields/api
```

There is a [REST resources](#rest-resources) section if you want to check it out.

This service has the following endpoints available:

| Description                                                               | Endpoints                                                                                                           |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| [Get all fields](#get-all-fields)                                         | <span class="badge badge--success">GET</span> `/fields`                                                             |
| [Get a field](#get-a-field)                                               | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}`                                             |
| [Create a field](#create-a-field)                                         | <span class="badge badge--warning">POST</span> `/users/{id}/fields`                                                 |
| [Update a field](#update-a-field)                                         | <span class="badge badge--warning">PATCH</span> `/users/{id}/fields/{id}`                                           |
| [Get all operation files of a field](#get-all-operation-files-of-a-field) | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files`               |
| [Get an operation file of a field](#get-an-operation-file-of-a-field)     | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files/{fileId}`      |
| [Get fields by geometry](#get-fields-by-geometry)                         | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields/intersects`                              |
| [Get intersection of fields](#get-intersection-of-fields)                 | <span class="badge badge--warning">POST</span> `/users/{id}/fields/intersect`                                       |
| [Sync fields manually](#sync-fields-manually)                             | <span class="badge badge--warning">POST</span> `/users/{id}/fields/sync`                                            |
| [Enable a preview field](#enable-a-preview-field)                             | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields/{id}/enableSync`                                            |
| [Upload a Field to Provider](#upload-a-field-to-provider)                     | <span class="badge badge--warning">POST</span> `/users/{leaf_user_id}/fields/{field_id}/integration/{provider_name}` |
| [Delete a field](#delete-a-field)                                         | <span class="badge badge--danger">DELETE</span> `/users/{id}/fields/{id}`                                           |
| [Get all boundaries from field](#get-all-boundaries-from-field)           | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries`                      |
| [Get a boundary from field](#get-a-boundary-from-field)                   | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}`         |
| [Get active boundary from field](#get-active-boundary-from-field)         | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundary`                        |
| [Update active boundary from field](#update-active-boundary-from-field)   | <span class="badge badge--warning">PUT</span> `users/{leafUserId}/fields/{fieldId}/boundary`                        |
| [Get all farms](#get-all-farms)                                           | <span class="badge badge--success">GET</span> `/farms`                                                              |
| [Get a farm](#get-a-farm)                                                 | <span class="badge badge--success">GET</span> `/users/{id}/farms/{id}`                                              |
| [Create a farm](#create-a-farm)                                           | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/farms`                                          |
| [Update a farm](#update-a-farm)                                           | <span class="badge badge--warning">PUT</span> `/users/{leafUserId}/farms/{id}`                                      |
| [Get all growers](#get-all-growers)                                       | <span class="badge badge--success">GET</span> `/growers`                                                            |
| [Get a grower](#get-a-grower)                                             | <span class="badge badge--success">GET</span> `/users/{leafUserId}/growers/{id}`                                    |
| [Create a grower](#create-a-grower)                                       | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/growers`                                        |
| [Update a grower](#update-a-grower)                                       | <span class="badge badge--warning">PUT</span> `/users/{leafUserId}/growers/{id}`                                    |


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

```json
[
  {
    "id": "1a952614-3673-4d1e-b677-1f7224339ec6",
    "leafUserId": "58800d61-91ac-4922-8e2a-f0216b9f052a",
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
    "status": "PROCESSED"
  },
  {
    "id": "68c354f2-eb20-4512-816f-2edea4b6fca4",
    "leafUserId": "9ffc7b1c-617b-46cb-a8ef-927b26285b7f",
    "boundaries": [
      "39d171d7-9ec3-4201-81bf-9d57473b2a67"
    ],
    "type": "ORIGINAL",
    "createdTime": "2023-06-14T18:31:01.702615Z",
    "updatedTime": "2023-06-14T18:31:01.702615Z",
    "sources": [],
    "status": "PROCESSED"
  },
  ....
]
```

### Get a field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{id}`

Gets a single Field by Leaf User.

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

#### Request body

```json
{
  "id": "idTest", // optional
  "name": "nameTest", // optional
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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields'
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
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "id": "idTest",
  "leafUserId": "95eb7d79-b93d-4fc2-877a-3f2b366f8beb",
  "area": {
    "value": float,
    "unit": "ha"
  },
  "boundaries": [
    "d0245010-157d-4988-96a2-5f3637098475"
  ],
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [...]
  },
  "type": "ORIGINAL",
  "name": "nameTest",
  "createdTime": "2023-06-07T19:48:51.017280Z",
  "updatedTime": "2023-06-07T19:48:51.017280Z",
  "files": [
    "2762a5f2-ed53-4999-afac-f2d4b136dc1f"
  ]
}
```

### Update a Field

&nbsp<span class="badge badge--warning">PATCH</span> `/users/{leafUserId}/fields/{id}`

:::tip 
This is for manually created fields only. Provider created fields need to be updated via the Provider platform.
:::

Update the Field by `"id"` for the user `"leafUserId"`. The request body accepts updatable field properties like `"name"` to update the field name, `"farmId"` to update the related Farm of the Field and `"geometry"`, which represents the boundaries of the
Field as a GeoJSON geometry (it must be a `"MultiPolygon"`).

#### Request body

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
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
  ```

  </TabItem>
</Tabs>

#### Response
A [Field](#field-resource) as a JSON object.


### Get all operation files of a field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files`

Gets a paged list of all operation files of the Field and Leaf User specified in
the URL.

It is possible to filter the results by passing some query
parameters. They are listed below.

| Parameter (to filter by) | Type                                                                                               | Description                                      |
|--------------------------|----------------------------------------------------------------------------------------------------|--------------------------------------------------|
| operationType            | String "harvested", "planted", "applied" or "other"                                                | retrieve operations of given type                |
| provider                 | String "CNHI", "JohnDeere", "Trimble" or "ClimateFieldView"                                        | retrieve operations of given provider            |
| origin                   | String "provider", "automerged", "merged" or "uploaded"                                            | retrieve operations of given origin              |
| crop                     | String name of the crop, like "corn" or "soybeans". Entire crop list available [here][crops_table] | retrieve operations with this crop.              |
| startTime                | ISO 8601 datetime format                                                                           | retrieve operations that started after this date |
| endTime                  | ISO 8601 datetime format                                                                           | retrieve operations that ended before this date  |

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (default is 20, max is 100)

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
    "id": "abbac24d-7f13-414a-989a-ee5dc9de624b",
    "operationType": "harvested",
    "origin": "automerged",
    "startTime": "2017-10-27T08:59:58Z",
    "endTime": "2017-10-27T09:40:33Z",
    "crops": [
      "corn"
    ],
    "varieties": [
      "Corn"
    ],
    "providerFileId": "cacde0d5-55b9-4bff-bf2c-05ec1def1c95",
    "provider": "Leaf",
    "leafUserId": "dcb6fd16-b6f4-40bc-805e-659c7f7350d6"
  },
  ....
]
```


### Get an operation file of a field 

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files/{fileId}`

Gets a single Operation File of a field by its id.

#### Request examples

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

```json
{
  "id": "75127023-190a-4579-b76c-ccbcfcf00d3c",
  "operationType": "harvested",
  "origin": "automerged",
  "startTime": "2017-10-27T08:59:58Z",
  "endTime": "2017-10-27T09:40:33Z",
  "crops": [
    "corn"
  ],
  "varieties": [
    "Corn"
  ],
  "providerFileId": "a3602817-57e4-4056-bdef-4fb687ba4c2e",
  "provider": "Leaf",
  "leafUserId": "01a17a22-e6fa-4d83-b343-ea23eddbd936"
}
```


### Get Fields by geometry 

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields/intersects`

Gets a list of fields that intersect with the GeoJSON geometry (`"type"` property must be a `"MultiPolygon"`) sent in
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
|---------------------------|-----------|
| 3                         | ✅         |
| 5                         | ✅         |
| 37                        | ✅         |
| 50                        | ✅         |
| 75                        | ❌         |
| 100                       | ❌         |


#### Request body

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
  },
  "intersectionThreshold": 3
}
```

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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/intersects'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
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
              "intersectionThreshold": 3
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
        "intersectionThreshold": 3
      }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type": "MultiPolygon", "coordinates": [[[[-93.48821327980518, 41.77137549568163], [-93.48817333680519, 41.77143534378164], [-93.48821327390516, 41.76068857977987], [-93.48821327980518, 41.77137549568163]]]]}, "intersectionThreshold": 3 }'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/intersects'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "7740ce52-ae37-45e8-b6ed-5d55eea1dc09",
    "leafUserId": "04526587-21eb-42a0-8de5-59964340db4d",
    "area": {
      "value": 16.71391976284981,
      "unit": "ha"
    },
    "boundaries": [
      "f748db67-1885-4936-bc93-a3fbaf249957"
    ],
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [...]
    },
    "providerName": "ClimateFieldView",
    "providerId": 4,
    "providerFieldId": "62cf2326-8525-4c40-9e37-23fd1c76eeba",
    "providerBoundaryId": "bac50a8c-a3bc-4a90-9c4b-df7ea5f5d28b",
    "providerFieldName": "behav_test_field",
    "type": "ORIGINAL",
    "createdTime": "2023-06-06T09:35:07.676376Z",
    "updatedTime": "2023-06-06T09:35:07.965139Z",
    "sources": []
  },
  {
    {
    "id": "8bfe22fa-af4a-41ad-a167-fa792c3faa5f",
    "leafUserId": "04526587-21eb-42a0-8de5-59964340db4d",
    "area": {
      "value": 0.19710594050867244,
      "unit": "ha"
    },
    "boundaries": [
      "c329f54f-f979-47f1-96f6-bcf95a771be8"
    ],
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [...]
    },
    "type": "ORIGINAL",
    "name": "nameTest",
    "createdTime": "2023-06-07T13:55:04.028129Z",
    "updatedTime": "2023-06-07T14:08:13.101100Z",
    "sources": []
  },
  ....
]
```

### Get intersection of fields

&nbsp<span class="badge badge--warning">POST</span> `/users/{id}/fields/intersect`

Gets a GeoJSON geometry (`"type"` property must be a `"MultiPolygon"`) corresponding to the intersection of the Fields
specified by the given id's. Such Field id's goes in a list, in the request body.

#### Request body

```json
[
  "id1",
  "id2"
]
```

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


### Sync fields manually

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields/sync`

:::tip 
This endpoint should be used to fetch field data when this [fieldsAutoSync](/docs/configurations_overview#fieldsautosync) configuration is disabled.
:::

Schedules a synchronization to fetch Field Boundaries data from the providers.


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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/sync'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/sync'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.post(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/sync'
  ```

  </TabItem>
</Tabs>

### Enable a preview field

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields/{id}/enableSync`

:::tip 
This endpoint should be used to fetch data when the [customDataSync](/docs/configurations_overview#customdatasync) configuration is enabled.
:::

It will remove the field from the `PREVIEW` mode making it ready for be fetched in the next synchonization. The status will change to `WAITING`.


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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}/enableSync'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}/enableSync'
  headers = {'Authorization': f'Bearer {TOKEN}'}


  response = requests.post(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}/enableSync'
  ```

  </TabItem>
</Tabs>

:::tip 
Fields can be set to synchronize at the grower level using the [enable preview fields by growers](#enable-preview-fields-by-grower) endpoint.
:::

### Upload a Field to Provider

&nbsp<span class="badge badge--warning">POST</span> `/users/{leaf_user_id}/fields/{field_id}/integration/{provider_name}`

Upload a field boundary a provider. The field must be available on the Leaf API first (manually created or fetched from a provider).

- `provider_name`: the name of the provider that will receive the field boundary. The supported providers are `JohnDeere` or `ClimateFieldView`.
- if the `provider_name` is `JohnDeere` it will be necessary to add the `organizationId` as a parameter: `?organizationId={organization_value}`

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

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leaf_user_id}/fields/{field_id}/integration/{provider_name}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leaf_user_id}/fields/{field_id}/integration/{provider_name}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.post(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leaf_user_id}/fields/{field_id}/integration/{provider_name}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "ba518264-7f2a-11ee-b962-0242ac120002": {
      "ClimateFieldView": {
        "id": "uuid",
        "status": "PENDING",
        "updatedAt": "2023-11-09T18:02:17.834Z"
      }
    }
  }
]
```

:::info Warning
To avoid recursive synchronizations, it is not possible to send a field to the same provider from which it was fetched.
:::

### Delete a field

&nbsp<span class="badge badge--danger">DELETE</span> `/users/{id}/fields/{id}`

Deletes the field with the given id.

:::tip
Fields created by a provider cannot be deleted on Leaf side.
:::


## Boundaries

### Get all boundaries from field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/boundaries`

Gets a list of boundaries from a field.

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

#### Request examples

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

#### Request body

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

```json
{
  "id": "g7941ef8-iddf-42c1-b43c-d36b0df369e8",
  "status": "ACTIVE",
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
    "value": 0.19710594050867244,
    "unit": "ha"
  },
  "validity": "VALID",
  "createdTime": "2023-06-07T19:48:51.017280Z",
  "updatedTime": "2023-06-07T19:48:51.017280Z"
}
```


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


```json
[
  {
    "id": 1538766,
    "name": "name",
    "providerId": 2,
    "providerName": "JohnDeere",
    "providerFarmId": "2f4a03ed-ac81-4c6d-810d-1db6b47baec2",
    "providerFarmName": "farmName",
    "leafUserId": "ace92e9c-2e83-4d85-ab34-1f76a480abc8",
    "fieldIds": [
      "6595418e-11d2-4260-9e6b-e8c452fb8375"
    ],
    "growerId": 12345,
    "createdTime": "2023-06-06T09:34:11.759672Z",
    "updatedTime": "2023-06-07T09:15:42.855759Z"
  },
  ....
]
```

### Get a farm

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/farms/{id}`

Gets a single farm by its `id` from the user `leafUserId`.

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

### Create a farm

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/farms`

Creates a farm for the user `leafUserId`. It's possible to pass both the `farmName` and the `growerId` on the body of 
the request.

#### Request body

```json
{
  "name": "Farm 01",
  "growerId": 123
}
```

#### Request examples

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

#### Request body

```json
{
  "name": "Updated Farm Name",
  "growerId": 123
}
```

#### Request examples

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

A list of [Grower](#grower-resource) as a JSON object.

```json
[
  {
    "id": 873300016,
    "name": "1Grower",
    "leafUserId": "1d3ecb0f-bf3d-42db-aae6-8c45c045d28c",
    "providerName": "JohnDeere",
    "providerId": 23,
    "providerGrowerId": "1Grower",
    "farmIds": [],
    "createdTime": "2023-06-06T03:31:39.966630Z",
    "updatedTime": "2023-06-07T20:01:14.814346Z"
  },
  ....
]
```

### Get a grower

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/growers/{id}`

Gets a single grower by its `id` from the user `leafUserId`.

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

A single [Grower](#grower-resource) as a JSON object.

```json
{
  "id": 873300016,
  "name": "1Grower",
  "leafUserId": "1d3ecb0f-bf3d-42db-aae6-8c45c045d28c",
  "providerName": "JohnDeere",
  "providerId": 23,
  "providerGrowerId": "1Grower",
  "farmIds": [],
  "createdTime": "2023-06-06T03:31:39.966630Z",
  "updatedTime": "2023-06-07T20:01:14.814346Z"
}
```
:::tip Note
In our system, Growers are equivalent to John Deere Client. That been said, the 
attribute `name` comes directly from the Client's name for growers with John Deere as provider.
:::


### Create a grower

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/growers`

Creates a grower for the user `leafUserId`. It's possible to pass `name` on the body of the request.

#### Request body

```json
{
  "name": "Example Grower Name"
}
```

#### Request examples

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

#### Request body

```json
{
  "name": "Updated Grower Name"
}
```

#### Request examples

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

### Enable preview fields by grower

&nbsp<span class="badge badge--warning">POST</span> `/growers/enableSync`


:::tip 
This endpoint should be used to fetch data when the [customDataSync](/docs/configurations_overview#customdatasync) configuration is enabled.
:::

It will remove the indicated growers' fields from `PREVIEW` mode leaving them ready to be fetched immediately after the request. The status will change to `WAITING`. It accepts a list of Leaf grower IDs.

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

  const endpoint ='https://api.withleaf.io/services/fields/api/growers/enableSync'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    growerIds: [
      99999, 88888
    ]
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

  endpoint = 'https://api.withleaf.io/services/fields/api/growers/enableSync'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'growerIds': [
      99999, 88888
    ]
  }


  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "growerIds": [ 99999, 88888 ] }'
      'https://api.withleaf.io/services/fields/api/growers/enableSync'
  ```

  </TabItem>
</Tabs>

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
  "providerName": "string",
  "providerFieldName": "string",
  "providerFieldId": "string",
  "providerBoundaryId": "UUID",
  "type": "ORIGINAL",
  "leafUserId": "UUID",
  "organizationId": "string",
  "mergedFieldId": ["UUID"],
  "files": ["UUID"],
  "boundaries": ["UUID"],
  "createdTime": "ISO date-time",
  "updatedTime": "ISO date-time",
  "status": "PROCESSED"
}
```

#### Preview mode
If the [`customDataSync`](/docs/configurations_overview#customdatasync) configuration is enabled, the field will be fetched from the providers in the `PREVIEW` mode. A Field in `PREVIEW` mode has almost all properties except the geometry so that no boundaries will be available.

```json
{
  "id": "UUID",
  "providerName": "string",
  "providerFieldName": "string",
  "providerFieldId": "string",
  "providerBoundaryId": "UUID",
  "type": "ORIGINAL",
  "leafUserId": "UUID",
  "organizationId": "string",
  "mergedFieldId": ["UUID"],
  "files": ["UUID"],
  "boundaries": [],
  "createdTime": "ISO date-time",
  "updatedTime": "ISO date-time",
  "status": "PREVIEW"
}
```

Those Fields will still be listed in the field endpoints, allowing the custom synchronization of the resources available in the providers. To fetch a Field completely, it is necessary to remove it from the `PREVIEW` mode, sending it in the [enable a preview field](#enable-a-preview-field).

After the change request, the field(s) will be marked as `WAITING` to be fetched completely in the next synchronization window and then, when it happens, the status will change to `PROCESSED`.


**Field operations**

In `PREVIEW` mode, the operation files associated with the fields on the provider side will also not be fetched and will only be available after the field sync request. Since not all providers support this relationship, it will only be reflected in John Deere and Climate FieldView files. For other providers, all files will be fetched normally, regardless of the configuration.

| Description                                               | Endpoints                                                                     |
|-----------------------------------------------------------|-------------------------------------------------------------------------------|
| [Get all fields](#get-all-fields)                         | <span class="badge badge--success">GET</span> `/fields`                       |
| [Get a field](#get-a-field)                               | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}`       |
| [Create a field](#create-a-field)                         | <span class="badge badge--warning">POST</span> `/users/{id}/fields`           |
| [Get fields by geometry](#get-fields-by-geometry)         | <span class="badge badge--warning">POST</span> `/fields/query/intersects`     |
| [Get intersection of fields](#get-intersection-of-fields) | <span class="badge badge--warning">POST</span> `/users/{id}/fields/intersect` |
| [Sync fields manually](#sync-fields-manually)             | <span class="badge badge--warning">POST</span> `/users/{id}/fields/sync`       |
| [Delete a field](#delete-a-field)                         | <span class="badge badge--danger">DELETE</span> `/users/{id}/fields/{id}`     |

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

The `geometry` may be invalidly registered with the provider, more information in [Troubleshooting](#troubleshooting).

```json
{
  "id": "UUID",
  "status": "ACTIVE",
  "providerStatus": "ACTIVE",
  "providerBoundaryId": "UUID",
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
  },
  "validity": "VALID",
  "createdTime": "2023-06-06T03:33:51.528534Z",
  "updatedTime": "2023-06-06T03:33:51.528534Z"
  }
}
```

| Description                                                             | Endpoints                                                                                                   |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [Get all boundaries from field](#get-all-boundaries-from-field)         | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries`              |
| [Get a boundary from field](#get-a-boundary-from-field)                 | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}` |
| [Get active boundary from field](#get-active-boundary-from-field)       | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundary`                |
| [Update active boundary from field](#update-active-boundary-from-field) | <span class="badge badge--warning">PUT</span> `users/{leafUserId}/fields/{fieldId}/boundary`                |

### Operation Resource

```json
{
  "id": "UUID",
  "operationType": "harvested|planted|applied",
  "startTime": "ISO date-time",
  "endTime": "ISO date-time",
  "crops": ["string"],
  "varieties": ["string"],
  "providerFileId": "string",
  "provider": "Trimble",
  "origin": "provider|merged|automerged|uploaded",
  "leafUserId": "UUID"
}
```

| Description                                                                                  | Endpoints                                                                                                      |
|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [Get all operations of a field (deprecated)](#get-all-operation-files-of-a-field-deprecated) | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations`                |
| [Get all operations of a field](#get-all-operation-files-of-a-field)                         | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files`          |
| [Get an operation of a field (deprecated)](#get-an-operation-of-a-field-deprecated)          | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/{fileId}`       |
| [Get an operation of a field](#get-an-operation-of-a-field)                                  | <span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/operations/files/{fileId}` |

### Farm Resource

```json
{
  "id": int,
  "name": "string",
  "providerId": int,
  "providerName": "string",
  "providerFarmId": "UUID",
  "providerFarmName": "farmName",
  "leafUserId": "UUID",
  "fieldIds": [
    "UUID"
  ],
  "growerId": int,
  "createdTime": "2023-06-06T09:34:11.759672Z",
  "updatedTime": "2023-06-07T09:15:42.855759Z"
}
```

| Description                     | Endpoints                                                                      |
|---------------------------------|--------------------------------------------------------------------------------|
| [Get all farms](#get-all-farms) | <span class="badge badge--success">GET</span> `/farms`                         |
| [Get a farm](#get-a-farm)       | <span class="badge badge--success">GET</span> `/users/{id}/farms/{id}`         |
| [Create a farm](#create-a-farm) | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/farms`     |
| [Update a farm](#update-a-farm) | <span class="badge badge--warning">PUT</span> `/users/{leafUserId}/farms/{id}` |

### Grower Resource

```json
{
  "id": int,
  "name": "string",
  "leafUserId": "UUID",
  "providerName": "string",
  "providerId": int,
  "providerGrowerId": "string",
  "farmIds": [
    "UUID"
  ],
  "createdTime": "ISO date-time",
  "updatedTime": "ISO date-time"
}
```
*If there is a name available for the grower so the `name` property will be returned as well.*

| Description                         | Endpoints                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------|
| [Get all growers](#get-all-growers) | <span class="badge badge--success">GET</span> `/growers`                         |
| [Get a grower](#get-a-grower)       | <span class="badge badge--success">GET</span> `/growers/{id}`                    |
| [Create a grower](#create-a-grower) | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/growers`     |
| [Update a grower](#update-a-grower) | <span class="badge badge--warning">PUT</span> `/users/{leafUserId}/growers/{id}` |

## Troubleshooting

Currently, Leaf gets the field boundary data as available from the provider, so in some cases there may be fields without 
boundaries or with invalid boundaries, identified with one of the values below:

|     Validity values       |
|:-------------------------:|
|           VALID           |
|      REPEATED_POINT       |
|    HOLE_OUTSIDE_SHELL     |
|       NESTED_HOLES        |
|   DISCONNECTED_INTERIOR   |
|     SELF_INTERSECTION     |
|  RING_SELF_INTERSECTION   |
|       NESTED_SHELLS       |
|      DUPLICATE_RINGS      |
|      TOO_FEW_POINTS       |
|    INVALID_COORDINATE     |
|      RING_NOT_CLOSED      |
| NOT_ALLOWED_GEOMETRY_TYPE |

Here is an example of a geometry registered as invalid due to a **SELF_INTERSECTION**.

```json
{
  "geometry": {
    "coordinates": [
      [
        [
          [-47.779352980393611,-21.192167369960515], 
          [-47.775885948768021,-21.192669687635007], 
          [-47.775917640099145,-21.194602117356858], 
          [-47.780062866210912,-21.195033512590314], 
          [-47.77870013897234,-21.191730056712402], 
          [-47.779352980393611,-21.192167369960515]
        ]
      ]
    ],
    "type": "MultiPolygon"
  }
}
```

This is what this invalid type of geometry looks like from the provider side:

<img alt="Field example" src={useBaseUrl('img/invalid_geometry.png')} />

### Automatic geometry fix
There is a [configuration](/docs/configurations_overview#automaticfixboundary) available to fix the invalid geometry that Leaf fetches from the provider.

When enabled, Leaf will try to fix the geometry. If the fix is successful, then the invalid boundary will be disabled (available as a historical boundary) and the new one will be available as the main boundary with the property `"fixStatus": "FIXED"`

This behavior only applies to Fields obtained from providers, as validation prevents Fields from being created manually with invalid geometries.

:::info Warning
Note that this is an automatic procedure and that the corrected geometry may present small differences in relation to the original, such as an increase or decrease in area.
:::