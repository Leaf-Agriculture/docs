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
[4]: #on-click-authentication

Form of a John Deere Credentials resource:

```json
{
  "status": "str",
  "clientKey": "str",
  "clientSecret": "str",
  "tokenId": "str",
  "tokenSecretKey": "str",
  "accessToken": "str",
  "refreshToken": "str"
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
    "clientEnvironment": "STAGE or PRODUCTION"
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





## One-click authentication
This is a new, simpler and faster alternative to using John Deere credentials on Leaf API.

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/one-click-integration/JohnDeere`

Get the URL for simplified one-click authentication with John Deere.

#### Request examples

```json
{
    "clientKey": "str",
    "clientSecret": "str",
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/one-click-integration/JohnDeere'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "clientKey": "str",
    "clientSecret": "str",
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/one-click-integration/JohnDeere'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "clientKey": "str",
    "clientSecret": "str",
    "clientEnvironment": "STAGE or PRODUCTION"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/one-click-integration/JohnDeere'
      -d '{"clientKey": "str", "clientSecret": "str", "clientEnvironment": "STAGE or PRODUCTION"}' \
  ```

  </TabItem>
</Tabs>

#### Response
```json
{
    "signInUrl": "https://signin.johndeere.com/oauth2/aus...1t7/v1/authorize?response_type=code&client_id=0oa...d83&redirect_uri=https%3A%2F%2Fapi.agrigate.io%2Fservices%2Fusermanagement%2Fapi%2Fusers%2Fone-click-integration%2FJohnDeere%2Fcallback&scope=ag1+ag2+eq1+eq2+files+openid+profile+email+address+phone+offline_access&state=Naq...7Ow"
}
```

Once the consent is given all the other steps to assign the credential to the Leaf user is automated and a reply will be received saying the process was completed successfully:

```json
{
  "status": "CREDENTIAL_ASSIGNED",
  "message": "JD Credential assigned to Leaf User",
  "connectedOrganizations": [
    {
      "id": "509991",
      "name": "Connections Testing",
      "managementUri": "https://connections.deere.com/connections/0oa...5d7/connections-dialog?orgId=509991"
    }
  ],
  "notConnectedOrganizations": [
    {
      "id": "509992",
      "name": "Leaf Agriculture",
      "managementUri": "https://connections.deere.com/connections/0oa...5d7/select-organizations"
    }
  ]
}
```