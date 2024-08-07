---
title: Agrimatics Credentials
description: Credentials - Agrimatics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-the-agrimatics-credentials
[2]: #create-an-agrimatics-credentials
[3]: #delete-agrimatics-credentials

Form of an Agrimatics Credentials resource:

```json
{
  "clientId": "str",
  "clientSecret": "str",
  "accessToken": "str",
  "environment": "STAGE"
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
[Get the Agrimatics credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/agrimatics-credentials`
[Create an Agrimatics credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/agrimatics-credentials`
[Delete Agrimatics credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/agrimatics-credentials`


## Agrimatics Credentials Endpoints

### Get the Agrimatics credentials

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/agrimatics-credentials`

<p align='justify'>

Get the Agrimatics credentials of the Leaf User based on its id and returns a JSON with the credentials. If during 
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
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials'
  ```

  </TabItem>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials'
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
  "accessToken": "str",
  "refreshToken": "str",
  "publicKey": "str",
  "privateKey": "str"
}
```


### Create an Agrimatics credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/agrimatics-credentials`  

Create an Agrimatics credentials for the Leaf User.

#### Request body

```json
{
  "clientId": "str",
  "clientSecret": "str",
  "accessToken": "str",
  "environment": "STAGE"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "clientId": "str",
    "clientSecret": "str",
    "accessToken": "str",
    "environment": "STAGE"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "clientId": "str",
    "clientSecret": "str",
    "accessToken": "str",
    "environment": "STAGE"
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
-d '{ "clientId": "str", "clientSecret": "str", "accessToken": "str", "environment": "STAGE" }' \
'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials'
  ```

  </TabItem>
</Tabs>

#### Response

An Agrimatics Credentials with status.

```json
{
  "id": "str",
  "status": "str",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "accessToken": "str",
  "refreshToken": "str",
  "publicKey": "str",
  "privateKey": "str"
}
```

### Delete Agrimatics credentials
&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/agrimatics-credentials`

Delete Leaf User's Agrimatics credentials.

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
  ]
}>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials'
  ```

  </TabItem>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
</Tabs>

## Troubleshooting

With these endpoints, you can do some troubleshooting to see your credential's health.

### Events

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/agrimatics-credentials/events`

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials/events'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agrimatics-credentials/events'
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
      /agrimatics-credentials/events'
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
