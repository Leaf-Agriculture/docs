---
title: Trimble Credentials
description: Credentials - Trimblee
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


[1]: #get-the-trimble-credentials
[2]: #create-a-trimble-credentials
[3]: #delete-trimble-credentials

Form of a Trimble Credentials resource:

```json
{
  "clientId": "str",
  "clientSecret": "str",
  "accessToken": "str",
  "refreshToken": "str"
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
[Get the Trimble credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/trimble-credentials`
[Create a Trimble credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/trimble-credentials`
[Delete Trimble credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/trimble-credentials`



## Trimble Credentials Endpoints

### Get the Trimble credentials
&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/trimble-credentials`  

<p align='justify'>

Get the Trimble credentials of the Leaf User based on its id and returns a JSON with the credentials. If during 
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "id": "str",
  "status": "str",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "tokenMetadata": {"scopes": ["str"]},
  "clientId": "str",
  "clientSecret": "str",
  "accessToken": "str",
  "refreshToken": "str"
}
```

### Create a Trimble credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/trimble-credentials`

Create a Trimble credentials for the Leaf User.

#### Request body

```json
{
  "clientId": "str",
  "clientSecret": "str",
  "refreshToken": "str"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "clientId": "str",
    "clientSecret": "str",
    "refreshToken": "str"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "clientId": "str",
    "clientSecret": "str",
    "refreshToken": "str"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{"clientId": "str","clientSecret": "str","refreshToken": "str"}'
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
  ```

  </TabItem>
</Tabs>


#### Response

A Trimble credentials with status.

```json
{
  "id": "str",
  "status": "str",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "tokenMetadata": {"scopes": ["str"]},
  "clientKey": "str",
  "clientSecret": "str",
  "accessToken": "str",
  "refreshToken": "str",
  "clientEnvironment": "STAGE or PRODUCTION"
}
```

### Delete Trimble credentials
&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/trimble-credentials`  

Delete Leaf User's Trimble credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
  ```

  </TabItem>
</Tabs>

## Troubleshooting

With these endpoints, you can do some troubleshooting to see your credential's health.

### Events

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/trimble-credentials/events`

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials/events'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials/events'
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
      /trimble-credentials/events'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "body": "str",
    "createdDate": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
    "headers": "str",
    "id": "str",
    "statusCode": "int"
  }
]
```

:::warning
The logs are available only for 30 days and once the credential is deleted or disassociated with the Leaf User, the logs are no longer available.