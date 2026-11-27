---
title: Usage Monitoring endpoints
description: API endpoints for monitoring and tracking your usage across different services and features
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

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/billingapplication/api
```

See below the REST resources and their endpoints available in this service.

## Usage Monitoring Endpoints

Monitor your usage with these endpoints:

| Description                                        | Endpoints                                                                                                            |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [List your contracts][2]                           | <span class="badge badge--success">GET</span> `/billing/contracts`                                                   |
| [Get contract details][3]                          | <span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}`                                     |
| [Get daily usage summary][4]                       | <span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption`                         |
| [Get usage range for your organization][5]         | <span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption/api-owner`               |
| [Get usage range for specific user][6]             | <span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption/leaf-user/{leaf_user_id}`|

### List your contracts

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts`

Get a list of all usage monitoring contracts available for your organization. Each contract represents a different service or feature you can monitor.

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
    "region": null
  }
]
```

**Response fields:**
- `id`: Unique identifier for this contract
- `product`: Which service this tracks (see "What Gets Tracked" above)
- `startDate`: When usage monitoring began for this contract
- `endDate`: When usage monitoring ends for this contract
- `region`: Geographic region (if applicable)

### Get contract details

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}`

Get detailed information about a specific usage monitoring contract.

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
  "region": null
}
```

### Get daily usage summary

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption`

Get usage metrics for a specific contract for a single day. If you don't specify a date, it returns today's usage.

**Query Parameters:**
- `timestamp` (optional): Date to get usage for in ISO format `YYYY-MM-DDTHH:MM:SS.sssZ`

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
const params = { timestamp: '2024-01-15T00:00:00.000Z' }

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
params = {'timestamp': '2024-01-15T00:00:00.000Z'}

response = requests.get(endpoint, headers=headers, params=params)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption?timestamp=2024-01-15T00:00:00.000Z'
```

</TabItem>
</Tabs>

#### Response example

```json
{
  "areaUnit": "Acre",
  "date": "2024-01-15T00:00:00Z",
  "totalUniqueArea": 0.8,
  "leafUsersAreas": [
    {
        "leafUserId": "uuid1",
        "totalArea": 0.6
    },
    {
        "leafUserId": "uuid2",
        "totalArea": 0.4
    }
  ]
}
```

**Response fields:**
- `areaUnit`: Unit of measurement (Acre or Hectare)
- `date`: The date this usage data represents
- `totalUniqueArea`: Total unique area processed (removes overlaps between users)
- `leafUsersAreas`: Breakdown of usage by individual users

### Get usage range for your organization

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption/api-owner`

Get usage metrics for your entire organization over a date range. Shows daily breakdown of total and cumulative usage.

**Query Parameters:**
- `startTime`: Start date in ISO format `YYYY-MM-DDTHH:MM:SS.sssZ`
- `endTime`: End date in ISO format `YYYY-MM-DDTHH:MM:SS.sssZ`

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
    startTime: '2024-01-01T00:00:00.000Z',
    endTime: '2024-01-31T00:00:00.000Z'
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
    'startTime': '2024-01-01T00:00:00.000Z',
    'endTime': '2024-01-31T00:00:00.000Z'
}

response = requests.get(endpoint, headers=headers, params=params)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption/api-owner?startTime=2024-01-01T00:00:00.000Z&endTime=2024-01-31T00:00:00.000Z'
```

</TabItem>
</Tabs>

#### Response example

```json
{
  "areaUnit": "Acre",
  "areaPerDay": [
    {
        "date": "2024-01-02T00:00:00Z",
        "totalArea": 90.0,
        "dailyArea": 65.0
    },
    {
        "date": "2024-01-03T00:00:00Z",
        "totalArea": 90.0,
        "dailyArea": 0.0
    }
  ]
}
```

**Response fields:**
- `areaUnit`: Unit of measurement (Acre or Hectare)
- `areaPerDay`: Array of daily usage data
  - `date`: The date for this data point
  - `totalArea`: Cumulative area processed up to this date
  - `dailyArea`: New area processed on this specific date

### Get usage range for specific user

&nbsp<span class="badge badge--success">GET</span> `/billing/contracts/{contract_id}/consumption/leaf-user/{leaf_user_id}`

Get usage metrics for a specific Leaf user over a date range. Shows how much area this user has processed day by day.

**Query Parameters:**
- `startTime`: Start date in ISO format `YYYY-MM-DDTHH:MM:SS.sssZ`
- `endTime`: End date in ISO format `YYYY-MM-DDTHH:MM:SS.sssZ`

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
    startTime: '2024-01-01T00:00:00.000Z',
    endTime: '2024-01-31T00:00:00.000Z'
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
    'startTime': '2024-01-01T00:00:00.000Z',
    'endTime': '2024-01-31T00:00:00.000Z'
}

response = requests.get(endpoint, headers=headers, params=params)
print(response.json())
```

</TabItem>
<TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    'https://api.withleaf.io/services/billingapplication/api/billing/contracts/{contract_id}/consumption/leaf-user/{leaf_user_id}?startTime=2024-01-01T00:00:00.000Z&endTime=2024-01-31T00:00:00.000Z'
```

</TabItem>
</Tabs>

#### Response example

```json
{
  "areaUnit": "Acre",
  "areaPerDay": [
    {
        "date": "2024-01-02T00:00:00Z",
        "totalArea": 0.6,
        "dailyArea": 0.6
    },
    {
        "date": "2024-01-03T00:00:00Z",
        "totalArea": 0.6,
        "dailyArea": 0.0
    }
  ]
}
```

**Response fields:**
- `areaUnit`: Unit of measurement (Acre or Hectare)
- `areaPerDay`: Array of daily usage data for this user
  - `date`: The date for this data point
  - `totalArea`: Cumulative area processed by this user up to this date
  - `dailyArea`: New area processed by this user on this specific date

[contact]: mailto:help@withleaf.io