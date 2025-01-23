---
title: Billing > Usage metrics endpoints
description: Billing - Usage metrics endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: #list-contracts
[3]: #get-contract-by-id
[4]: #get-contract-consumption
[5]: #get-contract-consumption-range-for-api-owner
[6]: #get-contract-consumption-range-for-leaf-user

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/billingapplication/api
```

See below the REST resources and their endpoints available in this service.

### Contract Products
- AUDIT_FIELDS_BOUNDARY

Current active field boundary area, unbounded by sales contract start and end dates.

- FIELDS_BOUNDARY

Field boundary area consumption, including deleted and updated geometries, containing only field boundaries that were created/updated inside the sales contract start and end/renewal date.

- FIELDS_BOUNDARY_SENTERA

Sentera exlusive field boundary area consumption, including deleted and updated geometries, containing only field boundaries that were created/updated inside the sales contract start and end/renewal date.

- OPERATIONS_FILE

Machine operations files area consumption, including deleted geometries, containing only files that were created inside the sales contract start and end/renewal date.

- OPERATIONS_OPERATION

Machine operations area consumption, generated automatically from the intersection of fields boundary and machine operations files geometries, containing only operations that were generated inside the sales contract start and end/renewal date.

- SATELLITE_PROCESS_PLANET

Satellite imagery area consumption of the Planet provider, containing only images processed inside the sales contract start and end/renewal date.

- SATELLITE_PROCESS_SENTINEL

Satellite imagery area consumptioni of the Sentinel provider, containing only images processed inside the sales contract start and end/renewal date.


## Area consumption tracking

This feature has the following endpoints available:

| Description                                        | Endpoints                                                                                                            |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [List contracts][2]                                | <span class="badge badge--success">GET</span> `/billing/contracts`                                                   |
| [Get contract by id][3]                            | <span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}`                                     |
| [Get contract consumption][4]                      | <span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption`                         |
| [Get contract consumption range for api owner][5]  | <span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption/api-owner`               |
| [Get contract consumption range for leaf user][6]  | <span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption/leaf-user/{leaf_user_id}`|

### List contracts

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts`

Returns a list of all contracts available for the authenticated user.

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

const endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts'
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
endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/billingapplication/api/billing/contracts'
```

</TabItem>
</Tabs>

#### Response example

```json
[
  {
    "id": "unique id",
    "product": "FIELDS_BOUNDARY",
    "startDate": "2023-01-01T00:00:00Z",
    "endDate": "2024-01-01T00:00:00Z",
    "region": null,
    "quotaInHectares": 0.0,
    "quotaInAcres": 0.0
  },
  ...
]
```


### Get contract by id

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}`

Returns details for a specific contract by its ID.

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

const endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}'
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
endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}'
```

</TabItem>
</Tabs>

#### Response example

```json
{
  "id": "unique id",
  "product": "FIELDS_BOUNDARY",
  "startDate": "2023-01-01T00:00:00Z",
  "endDate": "2024-01-01T00:00:00Z",
  "region": null,
  "quotaInHectares": 0.0,
  "quotaInAcres": 0.0
}
```

### Get contract consumption

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption`

Gets the consumption metrics for a specific contract. Allows an optional "timestamp" query parameter to specify which day to get the data for, if not specified returns current day's data.

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

const endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption'
const headers = { 'Authorization': `Bearer ${TOKEN}` }
const params = { timestamp: 'YYYY-MM-DDT00:00:00.000Z' }

axios.get(endpoint, { headers, params })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'
endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption'
headers = {'Authorization': f'Bearer {TOKEN}'}
params = {'timestamp': 'YYYY-MM-DDT00:00:00.000Z'}

response = requests.get(endpoint, headers=headers, params=params)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption?timestamp=YYYY-MM-DDT00:00:00.000Z'
```

</TabItem>
</Tabs>

#### Request response

```json
{
  "areaUnit": "Hectare",
  "date": "YYYY-MM-DDT00:00:00Z",
  "totalUniqueArea": 0.32,
  "leafUsersAreas": [
    {
        "leafUserId": "uuid1",
        "totalArea": 0.26
    },
    {
        "leafUserId": "uuid2",
        "totalArea": 0.15
    }
  ]
}
```

### Get contract consumption range for api owner

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption/api-owner`

Gets consumption metrics for an API owner over a time range, specified by the query parameters "startTime" and "endTime", ISO format `YYYY-MM-DDTT00:00:00.000Z`.

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

const endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption/api-owner'
const headers = { 'Authorization': `Bearer ${TOKEN}` }
const params = {
    startTime: 'YYYY-MM-DDT00:00:00.000Z',
    endTime: 'YYYY-MM-DDT00:00:00.000Z'
}

axios.get(endpoint, { headers, params })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'
endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption/api-owner'
headers = {'Authorization': f'Bearer {TOKEN}'}
params = {
    'startTime': 'YYYY-MM-DDT00:00:00.000Z',
    'endTime': 'YYYY-MM-DDT00:00:00.000Z'
}

response = requests.get(endpoint, headers=headers, params=params)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption/api-owner?startTime=YYYY-MM-DDT00:00:00.000Z&endTime=YYYY-MM-DDT00:00:00.000Z'
```

</TabItem>
</Tabs>

#### Response example

```json
{
  "areaUnit": "Hectare",
  "areaPerDay": [
    {
        "date": "2024-01-02T00:00:00Z",
        "totalArea": 10.0,
        "dailyArea": 26.0
    },
    {
        "date": "2024-01-03T00:00:00Z",
        "totalArea": 10.0,
        "dailyArea": 0.0
    },
    ...
  ]
}
```

### Get contract consumption range for leaf user

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption/leaf-user/{leaf_user_id}`

Gets consumption metrics for a specific Leaf user over a time range, specified by the query parameters "startTime" and "endTime", ISO format `YYYY-MM-DDTT00:00:00.000Z`.

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

const endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption/leaf-user/{leaf_user_id}'
const headers = { 'Authorization': `Bearer ${TOKEN}` }
const params = {
    startTime: 'YYYY-MM-DDT00:00:00.000Z',
    endTime: 'YYYY-MM-DDT00:00:00.000Z'
}

axios.get(endpoint, { headers, params })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'
endpoint = 'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption/leaf-user/{leaf_user_id}'
headers = {'Authorization': f'Bearer {TOKEN}'}
params = {
    'startTime': 'YYYY-MM-DDT00:00:00.000Z',
    'endTime': 'YYYY-MM-DDT00:00:00.000Z'
}

response = requests.get(endpoint, headers=headers, params=params)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption/leaf-user/{leaf_user_id}?startTime=YYYY-MM-DDT00:00:00.000Z&endTime=YYYY-MM-DDT00:00:00.000Z'
```

</TabItem>
</Tabs>

#### Response example

```json
{
  "areaUnit": "Hectare",
  "areaPerDay": [
    {
        "date": "2024-01-02T00:00:00Z",
        "totalArea": 0.26,
        "dailyArea": 0.26
    },
    {
        "date": "2024-01-03T00:00:00Z",
        "totalArea": 0.26,
        "dailyArea": 0.0
    },
    ...
  ]
}
```

[contact]: mailto:help@withleaf.io