---
title: Sentera Credentials
description: Credentials - Sentera
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-the-sentera-credentials
[2]: #create-a-sentera-credentials
[3]: #delete-sentera-credentials

Form of an Sentera Credentials resource:

```json
{
  "username": "str",
  "password": "str",
  "organizationName": "str"
}
```

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

**Endpoints**

| Description                       | Endpoints                                                                                 |
|-----------------------------------|-------------------------------------------------------------------------------------------|
| [Get the Sentera credentials][1]  | <span class="badge badge--success">GET</span> `/users/{leafUserId}/sentera-credentials`   |
| [Create a Sentera credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/sentera-credentials`  |
| [Delete Sentera credentials][3]   | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/sentera-credentials` |

## Sentera Credentials Endpoints

### Get the Sentera credentials

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/sentera-credentials`

<p align='justify'>

Get the Sentera credentials of the Leaf User based on its id and returns a JSON with the credentials. If during 
background processing we detect that this credential is no longer valid, the value of the status will be changed.

</p>

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
  ```

  </TabItem>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "id": "str",
  "status": "str",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "username": "str",
  "authToken": "str",
  "organizationId": "str",
  "organizationName": "str"
}
```

### Create a Sentera credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/sentera-credentials`  

Create a Sentera credentials for the Leaf User. 

#### Request body

```json
{
  "username": "str",
  "password": "str",
  "organizationName":"str"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "username": "str", 
    "password": "str", 
    "organizationName": "str"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "username": "str", 
    "password": "str", 
    "organizationName": "str"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
curl -X POST \
-H 'Authorization: Bearer YOUR_TOKEN' \
-H 'Content-Type: application/json' \
-d '{ "username": "str", "password": "str", "organizationName": "str"}' \
'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
  ```

  </TabItem>
</Tabs>

#### Response 

A Sentera Credentials with status.

```json
{
  "id": "str",
  "status": "str",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "username": "str",
  "authToken": "str",
  "organizationId": "str",
  "organizationName": "str"
}
```

### Delete Sentera credentials

&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/sentera-credentials`

Delete Leaf User's Sentera credentials.

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
  ```

  </TabItem>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
</Tabs>

## Troubleshooting

With these endpoints, you can do some troubleshooting to see your credential's health.

### Events

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/sentera-credentials/events`

Get the logs of the provider credential based on the LeafUserId sent.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials/events'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials/events'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}
      /sentera-credentials/events'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "body": "string",
    "createdDate": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
    "headers": "string",
    "id": "string",
    "statusCode": "int"
  }
]
```

:::warning
The logs are available only for 30 days and once the credential is deleted or disassociated with the Leaf User, the logs are no longer available.