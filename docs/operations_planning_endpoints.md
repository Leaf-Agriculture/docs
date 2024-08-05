---
title: Prescriptions > Operations Planning Endpoints
description: Operations Planning Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: #create-operation-planning-on-john-deere
[2]: #get-all-operation-planning


## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/prescription/api
```

See below the REST resources and their endpoints available in this service.

## Operations planning

This feature has the following endpoints available:

| Description                                   | Endpoints                                                                                            |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------|
| [Create operation planning on John Deere][1]  | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/operationsPlanning/JohnDeere`    |
| [Get all operation planning][2]               | <span class="badge badge--success">GET</span> `/users/{leafUserId}/operationsPlanning`               |

### Create operation planning on John Deere

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/operationsPlanning/JohnDeere`

Creates an operation planning on John Deere, it is the equivalent to John Deere Work Plans.

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

  const endpoint ='https://api.withleaf.io/services/prescription/api/users/{leafUserId}/operationsPlanning/JohnDeere'

  const headers = {
    'Authorization': `Bearer ${TOKEN}`
  }

  const data = {
    fieldId: 'UUID',
    applicationPrescriptions: [
      {
        prescriptionId: 'UUID',
        prescriptionUnits: 'String',
        prescriptionUse: 'String',
        productId: 'UUID'
      }
    ],
    instructions: 'String',
    seedingPrescriptions: [
    {
      prescriptionId: 'UUID',
      prescriptionUnits: 'String',
      prescriptionUse: 'String',
      varietyId: 'String'
    }
    ],
    workOrder: 'String', (optional)
    instructions: 'string', (optional)
    year: 2024 
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

  endpoint = 'https://api.withleaf.io/services/prescription/api/users/{leafUserId}/operationsPlanning/JohnDeere'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
      'fieldId': 'UUID',
      'applicationPrescriptions': [
      {
        'prescriptionId': 'UUID',
        'prescriptionUnits': 'String',
        'prescriptionUse': 'String',
        'productId': 'UUID'
      }
    ],
      'instructions': 'String',
      'seedingPrescriptions': [
      {
        'prescriptionId': 'UUID',
        'prescriptionUnits': 'String',
        'prescriptionUse': 'String',
        'varietyId': 'String'
      }
    ],
    'workOrder': 'String', (optional)
    'instructions': 'string', (optional)
    'year': 2024
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "fieldId": "UUID", "applicationPrescriptions": [ { "prescriptionId": "UUID", "prescriptionUnits": "String", "prescriptionUse": "String", "productId": "UUID" }], "instructions": "String", "seedingPrescriptions": [ { "prescriptionId": "UUID", "prescriptionUnits": "String", "prescriptionUse": "String", "varietyId": "String" } ], "workOrder": "String", "instructions": "string", "year": 2024 }' \
      'https://api.withleaf.io/services/prescription/api/users/{leafUserId}/operationsPlanning/JohnDeere'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "id": "UUID",
    "leafUserId": "UUID",
    "provider": "String",
    "providerPlanId": "UUID",
    "createdAt": "ISO Date",
    "organizationId": "Integer",
    "fieldId": "UUID",
    "applicationPrescriptions": [
    {
      "prescriptionId": "UUID",
      "prescriptionUnits": "String",
      "prescriptionUse": "String",
      "productId": "UUID"
    }
  ],
    "instructions": "String",
    "seedingPrescriptions": [
    {
      "prescriptionId": "UUID",
      "prescriptionUnits": "String",
      "prescriptionUse": "String",
      "varietyId": "String"
    }
  ],
  "workOrder": "String",
  "instructions": "string",
  "year": 2024
}
```

### Get all operation planning

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/operationsPlanning`

List the existing operation plans.

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
  const endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/operationsPlanning'
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
  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/operationsPlanning'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/operationsPlanning'
  ```

  </TabItem>
</Tabs>


#### Response

```json
[
  {
      "id": "UUID",
      "leafUserId": "UUID",
      "provider": "String",
      "providerPlanId": "UUID",
      "createdAt": "ISO Date",
      "organizationId": "Integer",
      "fieldId": "UUID",
      "applicationPrescriptions": [
      {
        "prescriptionId": "UUID",
        "prescriptionUnits": "String",
        "prescriptionUse": "String",
        "productId": "UUID"
      }
    ],
      "instructions": "String",
      "seedingPrescriptions": [
      {
        "prescriptionId": "UUID",
        "prescriptionUnits": "String",
        "prescriptionUse": "String",
        "varietyId": "String"
      }
    ],
    "workOrder": "String",
    "instructions": "string",
    "year": "Integer"
  }
]
```
