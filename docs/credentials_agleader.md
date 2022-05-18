---
title: AgLeader Credentials
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-the-agleader-credentials
[2]: #create-a-agleader-credentials
[3]: #delete-agleader-credentials

Form of an AgLeader Credentials resource:

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
[Get the AgLeader credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/agleader-credentials`
[Create a AgLeader credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/agleader-credentials`
[Delete AgLeader credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/agleader-credentials`


## AgLeader Credentials Endpoints

### Get the AgLeader credentials

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/agleader-credentials`

Get the AgLeader credentials of the Leaf User based on its `id` and returns a JSON with the credentials.


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
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  ```

  </TabItem>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
</Tabs>

#### Response
A AgLeader credentials resources as a JSON. 


### Create a AgLeader credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/agleader-credentials`  

Create a AgLeader credentials for the Leaf User. 

#### Request examples
A AgLeader credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
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
'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  ```

  </TabItem>
</Tabs>

#### Response 
A AgLeader Credentials with status.

### Delete AgLeader credentials
&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/agleader-credentials`

Delete Leaf User's AgLeader credentials.

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
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  ```

  </TabItem>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
</Tabs>
