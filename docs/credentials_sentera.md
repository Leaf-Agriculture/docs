---
title: Sentera Credentials
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
  "accessToken": "str",
  "refreshToken": "str",
  "privateKey": "str",
  "publicKey": "str",
  "status": "str" 
}
```

**Endpoints**

Description | Endpoints
--- | ---
[Get the Sentera credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/sentera-credentials`
[Create a Sentera credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/sentera-credentials`
[Delete Sentera credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/sentera-credentials`


## Sentera Credentials Endpoints

### Get the Sentera credentials

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/sentera-credentials`

Get the Sentera credentials of the Leaf User based on its `id` and returns a JSON with the credentials.


#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', }
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
A Sentera credentials resources as a JSON. 


### Create a Sentera credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/sentera-credentials`  

Create a Sentera credentials for the Leaf User. 

#### Request examples
A Sentera credentials.

```json
{
  "accessToken": "str",
  "refreshToken": "str",
  "publicKey": "str",
  "privateKey": "str"
}
```

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', }
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "accessToken": "str", 
    "refreshToken": "str", 
    "privateKey": "str", 
    "publicKey": "str"
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
    "accessToken": "str", 
    "refreshToken": "str", 
    "privateKey": "str", 
    "publicKey": "str"
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
-d '{ "accessToken": "str","refreshToken": "str","privateKey":"str", "publicKey":"str"}' \
'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'
  ```

  </TabItem>
</Tabs>

#### Response 
A Sentera Credentials with status.

### Delete Sentera credentials
&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/sentera-credentials`

Delete Leaf User's Sentera credentials.

#### Request examples
<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', }
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
