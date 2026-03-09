---
title: Precision Planting Panorama Credentials
description: Credentials - Precision Planting Panorama
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-the-panorama-credentials
[2]: #create-panorama-credentials
[3]: #delete-panorama-credentials



Form of a Panorama Credentials resource:

```json
{
  "clientId": "str",
  "username": "str",
  "password": "str",
  "organizationCode": "str",
  "refreshToken": "str",
  "clientEnvironment": "str"
}
```

:::tip
The recommended way to create Panorama credentials is through the one-click integration endpoint:
`POST /users/{leafUserId}/one-click-integration/Panorama`. This handles the Cognito token exchange and sharing handshake automatically. See the [Panorama authentication tutorial](https://withleaf.io/en/tutorials/precision-planting-panorama-authentication-with-leaf/) for a full walkthrough.
:::

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

**Endpoints**

Description | Endpoints
--- | ---
[Get the Panorama credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/panorama-credentials`
[Create Panorama credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/panorama-credentials`
[Delete Panorama credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/panorama-credentials`


## Panorama Credentials Endpoints

### Get the Panorama credentials

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/panorama-credentials`

<p align='justify'>

Get the Panorama credentials of the Leaf User based on its id and returns a JSON with the credentials. If during background processing we detect that this credential is no longer valid, the value of the status will be changed.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "id": "str",
  "status": "str",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "clientId": "str",
  "username": "str",
  "organizationCode": "str",
  "clientEnvironment": "STAGE",
  "accessToken": "str",
  "refreshToken": "str"
}
```


### Create Panorama credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/panorama-credentials`

Create Panorama credentials for the Leaf User.

#### Request body

```json
{
  "clientId": "str",
  "username": "str",
  "password": "str",
  "organizationCode": "str",
  "refreshToken": "str",
  "clientEnvironment": "STAGE" or "PRODUCTION"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "clientId": "str",
    "username": "str",
    "password": "str",
    "organizationCode": "str",
    "refreshToken": "str",
    "clientEnvironment": "STAGE"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "clientId": "str",
    "username": "str",
    "password": "str",
    "organizationCode": "str",
    "refreshToken": "str",
    "clientEnvironment": "STAGE"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{"clientId": "str", "username": "str", "password": "str", "organizationCode": "str", "refreshToken": "str", "clientEnvironment": "STAGE"}' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials'
  ```

  </TabItem>
</Tabs>

#### Response

A Panorama credentials with status.

```json
{
  "id": "str",
  "status": "str",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "clientId": "str",
  "username": "str",
  "organizationCode": "str",
  "clientEnvironment": "STAGE",
  "accessToken": "str",
  "refreshToken": "str"
}
```


### Delete Panorama credentials

&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/panorama-credentials`

Delete Leaf User's Panorama credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials'
  ```

  </TabItem>
</Tabs>

## Troubleshooting

With these endpoints, you can do some troubleshooting to see your credential's health.

### Events

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/panorama-credentials/events`

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials/events'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials/events'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/panorama-credentials/events'
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
:::