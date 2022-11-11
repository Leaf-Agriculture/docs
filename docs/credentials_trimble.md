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
  "status": "str",
  "userName": "str",
  "password": "str",
  "applicationName": "str",
  "serviceIdentityId": "str",
  "scopes": ["str"]
}
```

**Endpoints**

Description | Endpoints
--- | ---
[Get the Trimble credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/trimble-credentials`
[Create a Trimble credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/trimble-credentials`
[Delete Trimble credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/trimble-credentials`



## Trimble Credentials Endpoints

### Get the Trimble credentials
&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/trimble-credentials`  
Get the Trimble credentials of the Leaf User based on its `id`and returns a JSON with the credentials.

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
A Trimble credentials resource as a JSON.


### Create a Trimble credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/trimble-credentials`  

Create a Trimble credentials for the Leaf User.

#### Request examples
A Trimble credentials.

```json
{
  "userName": "str",
  "password": "str",
  "applicationName": "str",
  "serviceIdentityId": "str"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "userName": "str",
    "password": "str",
    "applicationName": "str",
    "serviceIdentityId": "str"
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
    "userName": "str",
    "password": "str",
    "applicationName": "str",
    "serviceIdentityId": "str"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{"userName": "str","password": "str","applicationName": "str","serviceIdentityId": "str"}'
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/trimble-credentials'
  ```

  </TabItem>
</Tabs>


#### Response
A Trimble credentials with status.

### Delete Trimble credentials
&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/trimble-credentials`  

Delete a Leaf User's Trimble credentials.

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
