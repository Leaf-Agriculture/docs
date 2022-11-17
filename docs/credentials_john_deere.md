---
title: John Deere Credentials
description: Credentials - John Deere
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-the-john-deere-credentials
[2]: #create-a-john-deere-credentials
[3]: #delete-john-deere-credentials

Form of a John Deere Credentials resource:

```json
{
  "status": "str",
  "clientKey": "str",
  "clientSecret": "str",
  "tokenId": "str",
  "tokenSecretKey": "str",
  "accessToken": "str",
  "refreshToken": "str",
  "scopes": ["str"]
}
```

**Endpoints**

Description | Endpoints
--- | ---
[Get the John Deere credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/john-deere-credentials`
[Create a John Deere credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/john-deere-credentials`
[Delete John Deere credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/john-deere-credentials`


## John Deere Credentials Endpoints

### Get the John Deere credentials

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/john-deere-credentials`

Get the John Deere credentials of the Leaf User based on its id and returns a JSON with the credentials. If during background processing we detect that this credential is no longer valid, the value of the status will be changed.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  ```

  </TabItem>
</Tabs>

#### Response
```json
{
    "clientKey": "str",
    "clientSecret": "str",
    "tokenId": "str",
    "tokenSecretKey": "str",
    "accessToken": "str",
    "refreshToken": "str",
    "status": "str",
    "clientEnvironment": "STAGE or PRODUCTION",
    "scopes": ["str"]
}
```


### Create a John Deere credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/john-deere-credentials`

Create a John Deere credentials for the Leaf User.

#### Request examples

```json
{
  "clientKey": "str",
  "clientSecret": "str",
  "accessToken": "str",
  "refreshToken": "str",
  "clientEnvironment": "STAGE or PRODUCTION"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "clientKey": "str",
    "clientSecret": "str",
    "accessToken": "str",
    "refreshToken": "str",
    "clientEnvironment": "STAGE or PRODUCTION"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "clientKey": "str",
    "clientSecret": "str",
    "accessToken": "str",
    "refreshToken": "str",
    "clientEnvironment": "STAGE or PRODUCTION"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{"clientKey": "str","clientSecret": "str","accessToken": "str","refreshToken": "str","clientEnvironment": "STAGE or PRODUCTION"}' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  ```

  </TabItem>
</Tabs>

#### Response
A John Deere credentials with status.

```json
{
  "clientKey": "str",
  "clientSecret": "str",
  "tokenId": "str",
  "tokenSecretKey": "str",
  "accessToken": "str",
  "refreshToken": "str",
  "status": "str",
  "clientEnvironment": "STAGE or PRODUCTION"

}
```


### Delete John Deere credentials

&nbsp<span class="badge badge--danger">POST</span> `/users/{leafUserId}/john-deere-credentials`

Delete Leaf User's John Deere credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  ```

  </TabItem>
</Tabs>

## Troubleshooting
With these endpoints, you can do some troubleshooting to see your credential's health.

### Status
&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/john-deere-credentials/status`

Get the John Deere credentials status of the Leaf User based on its id and returns a JSON containing the status.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials/status'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials/status'
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
      /john-deere-credentials/status'
  ```

  </TabItem>
</Tabs>

#### Response

If the request went well and the credentials exists on our side, it will return one of this four status:

| MESSAGE                    | MEANING                                          |
|----------------------------|:-------------------------------------------------|
| OK                         | EVERYTHING IS OK                                 |
| UNAUTHENTICATED            | THE CREDENTIAL IS NO LONGER VALID                |
| MISSING_PERMISSION         | THE CREDENTIAL DON'T HAVE ENOUGH PERMISSIONS     |
| TEMPORARILY_UNAVAILABLE    | THIS IS RELATED TO THE PROVIDER API              |

### Events

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/john-deere-credentials/events`

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials/events'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials/events'
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
      /john-deere-credentials/events'
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