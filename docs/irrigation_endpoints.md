---
title: Irrigation Endpoints
description: Irrigation - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: /docs/configurations_overview#unitmeasurement


## About
Here we list all the available endpoints from Leaf's Irrigation API. To call them easily, we recommend using [Leaf's Postman collection](https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection).

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/irrigation/api
```

This service has the following endpoints available:

| Description                                                               | Endpoints                                                                                                           |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| [Get as-applied irrigation](#get-as-applied-irrigation)                                         | <span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/applied-irrigation`                                                             |
| [Get all irrigated fields](#get-all-irrigated-fields)                                               | <span class="badge badge--success">GET</span> `/irrigation/fields`                                             |
| [Get an irrigated field](#get-an-irrigated-field)                                         | <span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/fields/{fieldId}`                                                 |

### Get as-applied irrigation

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/applied-irrigation`

Lists all irrigation reports from supported providers, summarized by day and with information on the amount of water applied, stored in the `depth` property. The area covered by the irrigation and the different geometries for each `depth` value is also available in the irrigation `standardGeojson`.

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

  const endpoint ='https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/applied-irrigation'
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

  endpoint = 'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/applied-irrigation'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/applied-irrigation'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "uuid",
    "provider": "Lindsay",
    "standardGeojson": "url.json",
    "downloadStandardGeojson": "url.json",
    "leafUserId": "uuid",
    "apiOwnerUsername": "apiowner@withleaf.io",
    "summary": {
      "type": "Feature",
      "properties": {
        "depth": {
          "avg": 4.87,
          "min": 2.53,
          "max": 7.49,
          "unit": "mm"
        },
        "totalArea": {
          "value": 52.72,
          "unit": "ha"
        }
      },
      "geometry": { }
    },
    "equipments": [
      {
        "name": "My Pivot",
        "type": "pivot",
        "providerEquipmentId": "d0245010-157d-4988-96a2-5f3637098475"
      }
    ],
    "createdTime": "2024-03-04T00:31:25.497Z",
    "startTime": "2024-01-07T00:00:00Z",
    "endTime": "2024-01-07T23:59:59Z"
  }
]
```

#### Properties
These are the basic properties available:

| Property           | Description                                                                                                                                                 |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | The record identifier                                                                                                                                       |
| `leafUserId`       | The Leaf User identifier                                                                                                                                    |
| `apiOwnerUsername` | The API Owner username                                                                                                                                      |
| `startTime`        | The start of the irrigation period, typically the first hour of the day                                                                                     |
| `endTime`          | The end of the irrigation period, typically the last hour of the day                                                                                        |
| `provider`         | The irrigation data provider. It can be `Lindsay` or `Valley`                                                                                               |
| `equipments`       | The list of equipment that performed the irrigation, may contain the `name`, `type` and the identifier of the equipment at the provider (`providerEquipmentId`) |
| `createdTime`      | The time the record was created in Leaf                                                                                                                     |

##### Summary

Each record shows a summary of the day, with the following properties:

| Property  | Unit of measure  | Description                                     |
|-----------|------------------|-------------------------------------------------|
| depth     | **`mm`** or `in` | Basic statistics on the amount of water applied |
| totalArea | **`ha`** or `ac` | Total irrigated area                            |
| geometry  | -                | The geometry that represents the irrigated area |

\* The unit of measure can be defined by the [`unitMeasurement`][1] configuration.

<p align="center">
    <img alt="Irrigation field" src={useBaseUrl('img/irrigated_area_geometry.png')} />
</p>

#### Irrigation StandardGeojson

The GeoJSON file for applied irrigation shows all irrigation values ​​from an equipment for a given day. The file contains multipolygon geometries that represent the amount of water application for each area, in the `depth` property.
To view the field-related information, check the [Get an irrigated field](#get-an-irrigated-field) endpoint.

<p align="center">
    <img alt="Irrigation data" src={useBaseUrl('img/irrigation-data-geojson.png')} />
</p>

### Get all irrigated fields

&nbsp<span class="badge badge--success">GET</span> `/irrigation/fields`

Lists all fields that have received any irrigation at some point.

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

  const endpoint ='https://api.withleaf.io/services/irrigation/api/irrigation/fields'
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

  endpoint = 'https://api.withleaf.io/services/irrigation/api/irrigation/fields'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/irrigation/api/irrigation/fields'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "95eb7d79-b93d-4fc2-877a-3f2b366f8beb",
    "lastIrrigationTime": "2024-02-18T23:59:59.000000Z"
  }
]
```

### Get an irrigated field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/fields/{fieldId}`

Gets information about irrigation performed in a specific field.

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

  const endpoint ='https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/fields/{fieldId}'
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

  endpoint = 'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/fields/{fieldId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/fields/{fieldId}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "uuid",
    "fieldId": "uuid",
    "irrigationId": "uuid",
    "provider": "Lindsay",
    "standardGeojson": "url.json",
    "downloadStandardGeojson": "url.json",
    "leafUserId": "uuid",
    "apiOwnerUsername": "apiowner@withleaf.io",
    "summary": {
      "type": "Feature",
      "properties": {
        "depth": {
          "avg": 4.87,
          "min": 2.53,
          "max": 7.49,
          "unit": "mm"
        },
        "totalArea": {
          "value": 49.48,
          "unit": "ha"
        },
        "coverage": {
          "value": 81.51,
          "unit": "percentage"
        }
      },
      "geometry": {  }
    },
    "equipments": [
      {
        "name": "My Pivot",
        "type": "pivot",
        "providerEquipmentId": "d0245010-157d-4988-96a2-5f3637098475"
      }
    ],
    "createdTime": "2024-03-04T00:31:25.497Z",
    "startTime": "2024-01-07T00:00:00Z",
    "endTime": "2024-01-07T23:59:59Z"
  }
]
```

#### Properties
These are the basic properties available:

| Property           | Description                                                                                                                                                 |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | The record identifier                                                                                                                                       |
| `leafUserId`       | The Leaf User identifier                                                                                                                                    |
| `apiOwnerUsername` | The API Owner username                                                                                                                                      |
| `startTime`        | The start of the irrigation period, typically the first hour of the day                                                                                     |
| `endTime`          | The end of the irrigation period, typically the last hour of the day                                                                                        |
| `provider`         | The irrigation data provider. It can be `Lindsay` or `Valley`                                                                                               |
| `equipments`       | The list of equipment that performed irrigation, may contain the `name`, `type` and the identifier of the equipment at the provider (`providerEquipmentId`) |
| `createdTime`      | The time the record was created in Leaf                                                                                                                     |

##### Summary
Each record shows a summary of the day, with the following properties:

| Property  | Unit             | Description                                                          |
|-----------|------------------|----------------------------------------------------------------------|
| depth     | **`mm`** or `in` | Basic statistics on the amount of water applied                      |
| totalArea | **`ha`** or `ac` | Total irrigated area for that given field                            |
| coverage  | `%`              | The percentage of field area covered by irrigation - the wetted area |
| geometry  | -                | The geometry that represents the field irrigated area                |

\* The unit of measure can be defined by the [`unitMeasurement`][1] configuration.

<p align="center">
    <img alt="Irrigation field" src={useBaseUrl('img/irrigated_field_area_geometry.png')} />
</p>

#### Irrigated field StandardGeojson

The GeoJSON file available for the irrigated field will show all irrigated areas within the field ​​from an equipment for a given day. Each geometry is represented as multi polygons and is clipped by the field boundary geometry and represents the total volume of water applied to the location (the `depth` property).

<p align="center">
    <img alt="Irrigation field" src={useBaseUrl('img/irrigation-field-geojson.png')} />
</p>
