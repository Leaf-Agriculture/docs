---
title: Endpoints
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

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/beta/api
```

See below the REST resources and their endpoints available in this service.

## Machines (BETA)

### Machine Resources

This feature has the following endpoints available:

Description | Endpoints
--- | ---
[Get all machines][3] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/machines`
[Create a machine][4] | <span class="badge badge--success">POST</span> `/users/{leafUserId}/machines`
[Get a machine][5] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/machines/{machineId}`
[Delete a machine][6] | <span class="badge badge--success">DELETE</span> `/users/{leafUserId}/machines/{machineId}`
[Update a machine][7] | <span class="badge badge--success">PATCH</span> `/users/{leafUserId}/machines/{machineId}`

### Get all machines

&nbsp<span class="badge badge--success">GET</span>  `/users/{leafUserId}/machines`

Get the list of machines that are related to a given LeafUserId. 
You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)


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

The response is a JSON array containing machine records.

```json
[
  {
    "id": "UUID",
    "leafUserId": "UUID",
    "name": "str",
    "provider": "str",
    "providerMachineId": "str",
    "providerOrganizationId": "str"
  },
  {
    "id": "UUID",
    "leafUserId": "UUID",
    "name": "str",
    "provider": "str",
    "providerMachineId": "str",
    "providerOrganizationId": "str"
  }
]
```

### Create a machine 

&nbsp<span class="badge badge--success">POST</span>  `/users/{leafUserId}/machines`

Creates a machine for a specific LeafUser.

#### Request body

```json
{
  "name": "str"
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
A new machine is assigned to the given LeafUserId.

```json
{
  "id": "UUID",
  "leafUserId": "UUID",
  "name": "str",
  "provider": null,
  "providerMachineId": null,
  "providerOrganizationId": null
}
```

### Get a machine

&nbsp<span class="badge badge--success">GET</span>  `/api/users/{leafUserId}/machines/{machineId}`

Get the details of a given machine by its id.


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
A machine record with more details.

```json
{
  "id": "UUID",
  "leafUserId": "UUID",
  "name": "str",
  "provider": null,
  "providerMachineId": null,
  "providerOrganizationId": null
}
```

### Get machine files

&nbsp<span class="badge badge--success">GET</span>  `/api/users/{leafUserId}/machines/{machineId}/files`

Get the details of machine operations files given a machine id.


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
A json array containing the machine operations files details.

```json
[
  {
    "id": "f2a7c02a-0746-4175-b35b-5a0bfb42071a",
    "leafFileId": "a66516b4-ebaa-4c47-bbf4-33aa1d5b3647",
    "machineId": "b5d5b1aa-166c-4e16-8eb2-61f449135bca",
    "startTime": "2018-05-10T00:08:24Z",
    "endTime": "2018-05-10T00:10:55Z",
    "distance": {
      "value": 1273.7428553195657,
      "unit": "ft"
    },
    "fuelConsumption": null
  },
  {
    "id": "ae20796d-4f5a-4ea4-a1dd-1e4b676b052f",
    "leafFileId": "cb5c8bc4-2323-49fa-a30f-bdaac9dc068c",
    "machineId": "b5d5b1aa-166c-4e16-8eb2-61f449135bca",
    "startTime": "2018-05-10T00:16:50Z",
    "endTime": "2018-05-10T00:49:33.441Z",
    "distance": {
      "value": 14923.442689567402,
      "unit": "ft"
    },
    "fuelConsumption": null
  }
]
```

### Delete a machine

&nbsp<span class="badge badge--success">DELETE</span>  `/api/users/{leafUserId}/machines/{machineId}`

Delete a machine data

:::info Only machines created by the user can be Deleted
Machine data obtained from providers cannot be deleted
::: 

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

### Update a machine

&nbsp<span class="badge badge--success">PATCH</span>  `/api/users/{leafUserId}/machines/{machineId}`

Update a machine for a specific LeafUser. 

:::info Only machines created by the user can be updated
Machine data obtained from providers cannot be updated
::: 

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


[contact]: mailto:help@withleaf.io
