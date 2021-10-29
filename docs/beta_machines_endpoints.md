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
[Get a machine][5] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/machines/{machine_id}`
[Delete a machine][6] | <span class="badge badge--success">DELETE</span> `/users/{leafUserId}/machines/{machine_id}`
[Update a machine][7] | <span class="badge badge--success">PATCH</span> `/users/{leafUserId}/machines/{machine_id}`

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

The response is a JSON array contain machine records.

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
A new machine assigned to the given LeafUserId.

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

&nbsp<span class="badge badge--success">GET</span>  `/api/users/{leafUserId}/machines/{machine_id}`

Get the details of a given machine by its id


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
A machine record with more details

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

### Delete a machine

&nbsp<span class="badge badge--success">DELETE</span>  `/api/users/{leafUserId}/machines/{machine_id}`

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

&nbsp<span class="badge badge--success">PATCH</span>  `/api/users/{leafUserId}/machines/{machine_id}`

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
