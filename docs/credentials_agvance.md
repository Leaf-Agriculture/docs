---
title: Agvance Credentials
description: Credentials - Agvance
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-the-agvance-credentials
[2]: #create-a-agvance-credentials
[3]: #delete-agvance-credentials

Form of a Agvance Credentials resource:

```json
{
  "apiKey": "str",
  "clientEnvironment": "STAGE or PRODUCTION",
  "databaseId": "str",
  "password": "str",
  "username": "str"
}
```

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

**Endpoints**

Description | Endpoints
--- | ---
[Get the Agvance credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/agvance-credentials`
[Create a Agvance credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/agvance-credentials`
[Delete Agvance credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/agvance-credentials`


## Agvance Credentials Endpoints

### Get the Agvance credentials

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/agvance-credentials`

<p align='justify'>

Get the Agvance credentials of the Leaf User based on its id and returns a JSON with the credentials. If during 
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
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "id": "str",
  "status": "str",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "clientEnvironment": "STAGE or PRODUCTION",
  "username": "str",
  "password": "str",
  "databaseId": "str",
  "sessionId": "str",
  "apiKey": "str"
}
```


### Create a Agvance credentials

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/agvance-credentials`

Create a Agvance credentials for the Leaf User.

#### Request body

```json
{
  "apiKey": "str",
  "clientEnvironment": "STAGE or PRODUCTION",
  "databaseId": "str",
  "password": "str",
  "username": "str"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "apiKey": "str",
    "clientEnvironment": "STAGE or PRODUCTION",
    "databaseId": "str",
    "password": "str",
    "username": "str"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "apiKey": "str",
    "clientEnvironment": "STAGE or PRODUCTION",
    "databaseId": "str",
    "password": "str",
    "username": "str"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{"apiKey": "str", "clientEnvironment": "STAGE or PRODUCTION", "databaseId": "str", "password": "str", "username": "str"}' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials'
  ```

  </TabItem>
</Tabs>

#### Response

A Agvance Credentials with status.

```json
{
  "id": "str",
  "status": "str",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "clientEnvironment": "STAGE or PRODUCTION",
  "username": "str",
  "password": "str",
  "databaseId": "str",
  "sessionId": "str",
  "apiKey": "str"
}
```


### Delete Agvance credentials

&nbsp<span class="badge badge--danger">POST</span> `/users/{leafUserId}/agvance-credentials`

Delete Leaf User's Agvance credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials'
  ```

  </TabItem>
</Tabs>

## Troubleshooting

With these endpoints, you can do some troubleshooting to see your credential's health.

### Events

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/agvance-credentials/events`

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials/events'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agvance-credentials/events'
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
      /agvance-credentials/events'
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