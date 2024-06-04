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

| Description                                                   | Endpoints                                                                                           |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [Get all irrigation equipment](#get-all-irrigation-equipment) | <span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation-equipment`            |
| [Get an irrigation equipment](#get-an-irrigation-equipment)   | <span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation-equipment/{id}`       |
| [Get as-applied irrigation](#get-as-applied-irrigation)       | <span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/applied-irrigation`   |
| [Get an irrigation activity](#get-an-irrigation-activity)       | <span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/applied-irrigation/{id}`   |
| [Get all irrigated fields](#get-all-irrigated-fields)         | <span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/fields`               |
| [Get an irrigated field](#get-an-irrigated-field)             | <span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/fields/{fieldId}`     |
| [Get an irrigated field activity](#get-an-irrigated-field-activity)    | <span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/fields/{fieldId}/irrigated/{id}`     |

### Get all irrigation equipment

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation-equipment`

Lists all irrigation system equipment available for a given leaf user. It is possible to filter the results by passing some query parameters:

| Parameter (to filter by) |         Values         |
|------------------------|----------------------|
| `providerEquipmentId`    | Provider equipment ID  |
| `provider`               | `Lindsay` or `Valley` |

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

  const endpoint ='https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation-equipment'
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

  endpoint = 'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation-equipment'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation-equipment'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
        "id": "uuid",
        "providerEquipmentId": "uuid",
        "provider": "Lindsay",
        "name": "HHD 700C",
        "type": "pivot",
        "pivotLength": {
          "value": 0.0,
          "unit": "m"
        },
        "endgunLength": {
          "value": 0.0,
          "unit": "m"
        },
        "pivotRuntime": {
          "value": 0.0,
          "unit": "hr"
        },
        "brand": "unknown",
        "originalEquipmentData": {
            "equipmentType": "",
            "equipmentSubType": ""
        }
    } 
]
```

#### Properties
These are the properties available:

| Property                    | Description                                                               |
|-----------------------------|---------------------------------------------------------------------------|
| `id`                        | The equipment ID                                                          |
| `providerEquipmentId`       | The equipment ID from the provider                                        |
| `provider`                  | The data provider: `Lindsay` or `Valley`                                  |
| `name`                      | The name of the equipment                                                 |
| `type`                      | The irrigation system type                                                |
| `pivotLength`               | The length of the equipment (**`meters`** or `feet`)                      |
| `endgunLength`              | The length of the endgun throw (**`meters`** or `feet`)                   |
| `pivotRuntime`              | The time a pivot takes to complete a full revolution (`hours`)            |
| `brand`                     | The brand of the equipment                                                |
| `originalEquipmentData`     | Not normalized equipment information data such as original type and subtype as available in the provider  |

\* The unit of measure can be defined by the [`unitMeasurement`][1] configuration.


### Get an irrigation equipment

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation-equipment/{id}`

Get a specific irrigation system equipment by ID.

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

  const endpoint ='https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation-equipment/{id}'
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

  endpoint = 'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation-equipment/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation-equipment/{id}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
        "id": "uuid",
        "providerEquipmentId": "uuid",
        "provider": "Lindsay",
        "name": "HHD 700C",
        "type": "pivot",
        "pivotLength": {
          "value": 0.0,
          "unit": "m"
        },
        "endgunLength": {
          "value": 0.0,
          "unit": "m"
        },
        "pivotRuntime": {
          "value": 0.0,
          "unit": "hr"
        },
        "brand": "unknown",
        "originalEquipmentData": {
            "equipmentType": "",
            "equipmentSubType": ""
        }
    }
```

#### Properties
These are the properties available:

| Property                    | Description                                                               |
|-----------------------------|---------------------------------------------------------------------------|
| `id`                        | The equipment ID                                                          |
| `providerEquipmentId`       | The equipment ID from the provider                                        |
| `provider`                  | The data provider: `Lindsay` or `Valley`                                  |
| `name`                      | The name of the equipment                                                 |
| `type`                      | The irrigation system type                                                |
| `pivotLength`               | The length of the equipment (**`meters`** or `feet`)                      |
| `endgunLength`              | The length of the endgun throw (**`meters`** or `feet`)                   |
| `pivotRuntime`              | The time a pivot takes to complete a full revolution (`hours`)            |
| `brand`                     | The brand of the equipment                                                |
| `originalEquipmentData`     | Not normalized equipment information data such as original type and subtype as available in the provider  |

\* The unit of measure can be defined by the [`unitMeasurement`][1] configuration.

### Get as-applied irrigation

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/applied-irrigation`

Lists all irrigation activities from supported providers, summarized by day and with information on the amount of water applied, stored in the `depth` property. The area covered by the irrigation and the different geometries for each `depth` value are also available in the irrigation `standardGeojson`. It is possible to filter the results by passing some query parameters:

| Parameter (to filter by) |                       Values                      |
|------------------------|-------------------------------------------------|
| `provider`               | `Lindsay` or `Valley`                             |
| `startTime`              | Returns irrigation data from the startTime onward |
| `endTime`                | Returns irrigation data  until the endTime        |

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
          "sum": 28.36,
          "min": 2.53,
          "max": 7.49,
          "unit": "mm"
        },
        "totalArea": {
          "value": 52.72,
          "unit": "ha"
        },
        "totalVolume": {
            "value": 1604.7,
            "unit": "L"
        },
        "totalPowerOn": {
            "value": 16.7,
            "unit": "hr"
        }
      },
      "geometry": { }
    },
    "equipment": [
      {
        "id": "uuid",
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
These are the properties available:

| Property           | Description                                                                                                                                                 |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | The record identifier                                                                                                                                       |
| `leafUserId`       | The Leaf User identifier                                                                                                                                    |
| `apiOwnerUsername` | The API Owner username                                                                                                                                      |
| `startTime`        | The start of the irrigation period, typically the first hour of the day                                                                                     |
| `endTime`          | The end of the irrigation period, typically the last hour of the day                                                                                        |
| `provider`         | The irrigation data provider. It can be `Lindsay` or `Valley`                                                                                               |
| `equipment`        | The list of equipment that performed the irrigation, may contain the `id`, `name`, `type` and the identifier of the equipment at the provider (`providerEquipmentId`) |
| `createdTime`      | The time the record was created in Leaf                                                                                                                     |

##### Summary

Each record shows a summary of the day, with the following properties:

| Property     | Unit of measure  | Description                                     |
|--------------|------------------|-------------------------------------------------|
| depth        | **`mm`** or `in` | Basic statistics on the amount of water applied |
| totalArea    | **`ha`** or `ac` | Total irrigated area                            |
| totalVolume  | **`L`** or `gal` | Total volume applied                            |
| totalPowerOn | `hr`             | Total time the pivot was ON for the given day   |
| geometry     | -                | The geometry that represents the irrigated area |

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

### Get an irrigation activity

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/applied-irrigation/{id}`

Gets an irrigation activity by ID.

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

  const endpoint ='https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/applied-irrigation/{id}'
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

  endpoint = 'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/applied-irrigation/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/applied-irrigation/{id}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
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
        "sum": 28.36,
        "min": 2.53,
        "max": 7.49,
        "unit": "mm"
      },
      "totalArea": {
        "value": 52.72,
        "unit": "ha"
      },
      "totalVolume": {
          "value": 1604.7,
          "unit": "L"
      },
      "totalPowerOn": {
          "value": 16.7,
          "unit": "hr"
      }
    },
    "geometry": { }
  },
  "equipment": [
    {
      "id": "uuid",
      "name": "My Pivot",
      "type": "pivot",
      "providerEquipmentId": "d0245010-157d-4988-96a2-5f3637098475"
    }
  ],
  "createdTime": "2024-03-04T00:31:25.497Z",
  "startTime": "2024-01-07T00:00:00Z",
  "endTime": "2024-01-07T23:59:59Z"
}
```

### Get all irrigated fields

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/fields`

Lists all fields that have received any irrigation at some point. It is possible to filter the results by passing some query parameters:

| Parameter (to filter by) |                       Values                      |
|------------------------|-------------------------------------------------|
| `equipmentId`            | Leaf equipment ID                                 |
| `startTime`              | Returns irrigation data from the startTime onward |
| `endTime`                | Returns irrigation data  until the endTime        |

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

  const endpoint ='https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/fields'
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

  endpoint = 'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/fields'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/fields'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "fieldId": "95eb7d79-b93d-4fc2-877a-3f2b366f8beb",
    "lastIrrigationTime": "2024-02-18T23:59:59.000000Z"
  }
]
```

### Get an irrigated field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/fields/{fieldId}`

Gets information about irrigation performed in a specific field. It is valid for all existent field boundary from the Leaf user account. It is possible to filter the results by passing some query parameters:

| Parameter (to filter by) |                       Values                      |
|------------------------|-------------------------------------------------|
| `irrigationId`           | As-applied irrigation ID                          |
| `provider`               | `Lindsay` or `Valley`                             |
| `startTime`              | Returns irrigation data from the startTime onward |
| `endTime`                | Returns irrigation data  until the endTime        |

:::info Field boundary
This functionality associates field boundaries from any provider with irrigation data, so there must be existing field boundaries in the integrated leaf user to access it.
Valley does not provide field boundaries and Lindsay requires the FieldNET Advisor product to make them available.
:::


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
    "irrigationId": ["uuid"],
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
          "sum": 28.36,
          "min": 2.53,
          "max": 7.49,
          "unit": "mm"
        },
        "totalArea": {
          "value": 49.48,
          "unit": "ha"
        },
        "totalVolume": {
            "value": 1604.7,
            "unit": "L"
        },
        "totalPowerOn": {
            "value": 16.7,
            "unit": "hr"
        },
        "coverage": {
          "value": 81.51,
          "unit": "percentage"
        }
      },
      "geometry": {  }
    },
    "equipment": [
      {
        "id": "uuid",
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
These are the properties available:

| Property           | Description                                                                                                                                                 |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`               | The record identifier                                                                                                                                       |
| `leafUserId`       | The Leaf User identifier                                                                                                                                    |
| `apiOwnerUsername` | The API Owner username                                                                                                                                      |
| `startTime`        | The start of the irrigation period, typically the first hour of the day                                                                                     |
| `endTime`          | The end of the irrigation period, typically the last hour of the day                                                                                        |
| `provider`         | The irrigation data provider. It can be `Lindsay` or `Valley`                                                                                               |
| `equipment`        | The list of equipment that performed irrigation, may contain the `id`, `name`, `type` and the identifier of the equipment at the provider (`providerEquipmentId`) |
| `createdTime`      | The time the record was created in Leaf                                                                                                                     |

##### Summary
Each record shows a summary of the day, with the following properties:

| Property     | Unit             | Description                                                          |
|--------------|------------------|----------------------------------------------------------------------|
| depth        | **`mm`** or `in` | Basic statistics on the amount of water applied                      |
| totalArea    | **`ha`** or `ac` | Total irrigated area for that given field                            |
| totalVolume  | **`L`** or `gal` | Total volume applied                                                 |
| totalPowerOn | `hr`             | Total time the pivot was ON for the given day                        |
| coverage     | `%`              | The percentage of field area covered by irrigation - the wetted area |
| geometry     | -                | The geometry that represents the field irrigated area                |

\* The unit of measure can be defined by the [`unitMeasurement`][1] configuration.

<p align="center">
    <img alt="Irrigation field" src={useBaseUrl('img/irrigated_field_area_geometry.png')} />
</p>

#### Irrigated field StandardGeojson

The GeoJSON file available for the irrigated field will show all irrigated areas within the field ​​from an equipment for a given day. Each geometry is represented as multi polygons and is clipped by the field boundary geometry and represents the total volume of water applied to the location (the `depth` property).

<p align="center">
    <img alt="Irrigation field" src={useBaseUrl('img/irrigation-field-geojson.png')} />
</p>

### Get an irrigated field activity

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/irrigation/fields/{fieldId}/irrigated/{id}`

Gets information about an irrigation activity performed in a specific field.

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

  const endpoint ='https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/fields/{fieldId}/irrigated/{id}'
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

  endpoint = 'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/fields/{fieldId}/irrigated/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/irrigation/api/users/{leafUserId}/irrigation/fields/{fieldId}/irrigated/{id}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "id": "uuid",
  "fieldId": "uuid",
  "irrigationId": ["uuid"],
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
        "sum": 28.36,
        "min": 2.53,
        "max": 7.49,
        "unit": "mm"
      },
      "totalArea": {
        "value": 49.48,
        "unit": "ha"
      },
      "totalVolume": {
          "value": 1604.7,
          "unit": "L"
      },
      "totalPowerOn": {
          "value": 16.7,
          "unit": "hr"
      },
      "coverage": {
        "value": 81.51,
        "unit": "percentage"
      }
    },
    "geometry": {  }
  },
  "equipment": [
    {
      "id": "uuid",
      "name": "My Pivot",
      "type": "pivot",
      "providerEquipmentId": "d0245010-157d-4988-96a2-5f3637098475"
    }
  ],
  "createdTime": "2024-03-04T00:31:25.497Z",
  "startTime": "2024-01-07T00:00:00Z",
  "endTime": "2024-01-07T23:59:59Z"
}
```