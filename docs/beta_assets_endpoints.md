---
title: Beta > Assets Endpoints
description: Beta - Assets Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://tools.ietf.org/html/rfc7946
[3]: #get-all-machines
[4]: #create-a-machine
[5]: #get-a-machine
[6]: #delete-a-machine
[7]: #update-a-machine
[8]: #get-machine-files
[9]: #get-all-implements

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/beta/api
```

See below the REST resources and their endpoints available in this service.

## Assets (BETA)

This feature has the following endpoints available:

| Description          | Endpoints                                                                                      |
|----------------------|------------------------------------------------------------------------------------------------|
| [Get all machines][3] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/machines`                   |
| [Get a machine][5]   | <span class="badge badge--success">GET</span> `/users/{leafUserId}/machines/{machineId}`       |
| [Get machine files][8] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/machines/{machineId}/files` |
| [Create a machine][4] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/machines`                  |
| [Update a machine][7] | <span class="badge badge--warning">PATCH</span> `/users/{leafUserId}/machines/{machineId}`     |
| [Delete a machine][6] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/machines/{machineId}`     |
| [Get all implements][9]  | <span class="badge badge--danger">GET</span> `/users/{leafUserId}/implements`     |

### Get all machines

&nbsp<span class="badge badge--success">GET</span>  `/users/{leafUserId}/machines`

Get the list of machines that are related to a given LeafUserId. Some fields can be sent as query parameters to filter the machines, such as:

| Parameter (to filter by) | Values                                                                                         |
|--------------------------|------------------------------------------------------------------------------------------------|
| `name`                   | string                                                                                         |
| `provider`               | string (JohnDeere, CaseIH, Stara, etc)                                                         |
| `providerOrganizationId` | string                                                                                         |
| `serialNumber`           | string                                                                                         |
| `originType`             | specify the origin of the machine, must be either USER_CREATED, FILE_POOLED or PROVIDER_POOLED |
| `createdTime`            | must match exactly the time of the record creation, ISO 8601 without timezone                  |
| `beforeCreatedTime`      | filters for records created before the datetime, ISO 8601 without timezone                     |
| `afterCreatedTime`       | filters for records created after the datetime, ISO 8601 without timezone                      |
| `vin`                    | filters machines by Vehicle Identification Number                                              |

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)
- `sort`, the sorting order of the results; can be multi-value, where the first value to be passed will have preference in ordering over the next ones; you can also specify the order as `asc` or `desc` with `asc` being the default. Example: id, desc
  - Valid values for sorting are: id, leafUserId, name, provider, providerOrganizationId, providerMachineId, serialNumber, vin, model, make, category and modelYear

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

  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "e89b1861-bdbb-49b9-8e11-74840f7e1ea8",
    "leafUserId": "faa6691a-7bf7-49c2-8934-b5b4c823aef8",
    "name": "TestName",
    "provider": "Leaf",
    "providerMachineId": "08790ae9-d451-4158-9920-09d1ab1ba5e6",
    "providerOrganizationId": "123456",
    "originType": "PROVIDER_POOLED",
    "createdTime": "2022-02-22T20:06:25.411Z",
    "serialNumber": "123456",
    "vin": "1234567890ABC",
    "model": "ModelName",
    "make": "MakerOfMachine",
    "category": "Sprayer",
    "modelYear": 2000
  },
  {
    "id": "82725746-3150-490d-9f3f-a47151ac0669",
    "leafUserId": "325f5ac0-6c57-4b4a-bdea-490ccddb06c4",
    "name": "nameTest",
    "provider": "Leaf",
    "providerMachineId": "75f362b4-8f61-46f9-905b-a357fb239930",
    "providerOrganizationId": "654321",
    "originType": "FILE_POOLED",
    "createdTime": "2022-02-22T20:06:25.411Z",
    "serialNumber": "123456",
    "vin": "1234567890ABC",
    "model": "ModelName",
    "make": "MakerOfMachine",
    "category": "Harvester",
    "modelYear": 2020
  },
  ....
]
```


### Get a machine

&nbsp<span class="badge badge--success">GET</span>  `/api/users/{leafUserId}/machines/{machineId}`

Get the details of a given machine by its id.

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
  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}'
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
  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}'
  ```
  </TabItem>
</Tabs>

#### Response

```json
{
  "id": "UUID",
  "leafUserId": "UUID",
  "name": "str",
  "provider": null,
  "providerMachineId": null,
  "providerOrganizationId": null,
  "originType": "PROVIDER_POOLED",
  "createdTime": "2022-02-22T20:06:25.411Z",
  "serialNumber": "123456",
  "vin": "1234567890ABC",
  "model": "ModelName",
  "make": "MakerOfMachine",
  "category": "Sprayer",
  "modelYear": 2000
}
```


### Get machine files

&nbsp<span class="badge badge--success">GET</span>  `/api/users/{leafUserId}/machines/{machineId}/files`

Get the details of machine operations files given a machine id. Some fields can be sent as query parameters to filter the machine files, such as:

| Parameter (to filter by)   | Values                                                                                                                 |
|----------------------------|------------------------------------------------------------------------------------------------------------------------|
| `leafFileId`               | UUID                                                                                                                   |
| `originType`               | specify the origin of the machine, must be either USER_CREATED, FILE_POOLED or PROVIDER_POOLED                         |
| `createdTime`              | an ISO 8601 without timezone specifying the operation exact created time                                               |
| `beforeCreatedTime`        | filters for records created before the datetime, ISO 8601 without timezone                                             |
| `afterCreatedTime`         | filters for records created after the datetime, ISO 8601 without timezone                                              |
| `startTime`                | must match exactly the time of the start of the operation, ISO 8601 without timezone                                   |
| `endTime`                  | must match exactly the time of the end of the operation, ISO 8601 without timezone                                     |
| `beforeStartTime`          | an ISO 8601 without timezone, returns all operations that started before the specified time                            |
| `afterStartTime`           | an ISO 8601 without timezone, returns all operations that started after the specified time                             |
| `beforeEndTime`            | an ISO 8601 without timezone, returns all operations that ended before the specified time                              |
| `afterEndTime`             | an ISO 8601 without timezone, returns all operations that ended after the specified time                               |
| `distanceValue`            | a double value for the distance                                                                                        |
| `greaterThanDistanceValue` | a double value for the distance, returns all operations that have a distance value greater than the specified distance |
| `lessThanDistanceValue`    | a double value for the distance, returns all operations that have a distance value lesser than the specified distance  |
| `distanceUnit`             | must be "Mile", "mile", "Feet" or "ft"                                                                                 |

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)
- `sort`, the sorting order of the results; can be multi-value, where the first value to be passed will have preference in ordering over the next ones; you can also specify the order as `asc` or `desc` with `asc` being the default. Example: id, desc
  - Valid values for sorting are: id, leafUserId, machineId, startTime, endTime, createdTime, leafFileId

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
  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}/files'
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
  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}/files'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}/files'
  ```
  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "e7916d05-97ae-404a-a467-e2512c202a2f",
    "leafFileId": "e0e18a6f-4f88-4801-96e2-f39143f260e1",
    "machineId": "98b244fc-7b2d-4acf-a51a-58d20ae27355",
    "startTime": "2022-02-22T20:06:25.411Z",
    "endTime": "2022-02-22T20:07:25.411Z",
    "distance": {
      "value": 4152.255,
      "unit": "ft"
    },
    "fuelConsumption": {
      "value": 28.89,
      "unit": "US gal"
    }
  },
  {
    "id": "UUID",
    "leafFileId": "UUID",
    "machineId": "UUID",
    "startTime": "YYYY-mm-ddThh:mm:ssZ",
    "endTime": "YYYY-mm-ddThh:mm:ssZ",
    "distance": {
      "value": 5075.145,
      "unit": "ft"
    },
    "fuelConsumption": {
      "value": 25.55,
      "unit": "US gal"
    }
  }
]
```


### Create a machine 

&nbsp<span class="badge badge--success">POST</span>  `/users/{leafUserId}/machines`

Creates a machine for a specific LeafUser.

#### Request body

```json
{
  "name": "nameTest",
  "serialNumber": "123456",
  "vin": "1234567890ABC",
  "model": "ModelName",
  "make": "MakerOfMachine",
  "category": "Harvester",
  "modelYear": 2020
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
  const endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    name: "str"
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
  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str"}' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "id": "d5efe8a1-98be-40db-b2b2-2da332e8f69c",
  "name": "nameTest",
  "provider": "Leaf",
  "providerMachineId": "24de86ff-e6f0-4f8f-b429-0571c30a7ddf",
  "providerOrganizationId": "654321",
  "leafUserId": "9e081c9d-6185-49e1-8df7-7788d6aa1211",
  "originType": "USER_CREATED",
  "createdTime": "2023-06-12T17:38:09.148568906Z",
  "createdAt": "2023-06-12T17:38:09.148568906Z",
  "serialNumber": "123456",
  "vin": "1234567890ABC",
  "model": "ModelName",
  "make": "MakerOfMachine",
  "category": "Harvester",
  "modelYear": 2020
}
```


### Update a machine

&nbsp<span class="badge badge--warning">PATCH</span>  `/api/users/{leafUserId}/machines/{machineId}`

Update a machine for a specific LeafUser. 

:::info Only machines created by the user can be updated
Machine data obtained from providers cannot be updated
::: 

#### Request body

```json
{
  "name": "updatedName",
  "serialNumber": "000123",
  "vin": "1234567890EFR",
  "model": "ModelNameUpdated",
  "make": "MakerOfMachineUpdated",
  "category": "Planted",
  "modelYear": 2021
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
  const endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    name: "str"
  }

  axios.patch(endpoint, data, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'
  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str"
  }

  response = requests.patch(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PATCH \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str"}' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "id": "d5efe8a1-98be-40db-b2b2-2da332e8f69c",
  "name": "updatedName",
  "provider": "Leaf",
  "providerMachineId": "24de86ff-e6f0-4f8f-b429-0571c30a7ddf",
  "providerOrganizationId": "654321",
  "leafUserId": "9e081c9d-6185-49e1-8df7-7788d6aa1211",
  "originType": "USER_CREATED",
  "createdTime": "2023-06-12T17:38:09.148568906Z",
  "createdAt": "2023-06-12T17:38:09.148568906Z",
  "serialNumber": "updatedName",
  "vin": "1234567890EFR",
  "model": "ModelNameUpdated",
  "make": "MakerOfMachineUpdated",
  "category": "Planted",
  "modelYear": 2021
}
```

### Delete a machine

&nbsp<span class="badge badge--danger">DELETE</span>  `/api/users/{leafUserId}/machines/{machineId}`

Delete a machine data

:::info Only machines created by the user can be Deleted
Machine data obtained from providers cannot be deleted
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
  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.delete(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'
  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/machines/{machineId}'
  ```
  </TabItem>
</Tabs>


### Get All Implements

&nbsp<span class="badge badge--success">GET</span>  `/api/users/{leafUserId}/implements`

Get all the implements information based on your `leafUserId`.

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
  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/implements'
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
  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/implements'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/implements'
  ```
  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "38d313fc-e4ce-442b-9147-f469b30aedab",
    "name": "c3po_implement",
    "provider": "JohnDeere",
    "providerImplementId": "110237",
    "providerOrganizationId": "296264",
    "leafUserId": "mbba54fb-3710-4f7d-9aaf-703107930193",
    "originType": "PROVIDER_POOLED",
    "serialNumber": "00000",
    "model": "StMax150",
    "make": "JOHN DEERE",
    "category": "Cotton Harvester Implement"
  },
  ...
]
```

[contact]: mailto:help@withleaf.io
