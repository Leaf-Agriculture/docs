---
title: Raven Slingshot Credentials
description: Credentials - Raven Slingshot
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-the-raven-slingshot-credentials
[2]: #create-a-aven-slingshot-credentials
[3]: #delete-aven-slingshot-credentials

Form of a Raven Slingshot Credentials resource:

```json
{
  "apiKey": "str",
  "accessKey": "str",
  "sharedSecret": "str",
  "status": "str" 
}
```

**Endpoints**

Description | Endpoints
--- | ---
[Get the Raven Slingshot credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/raven-slingshot-credentials`
[Create a Raven Slingshot credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/raven-slingshot-credentials`
[Delete Raven Slingshot credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/raven-slingshot-credentials`

## Raven Slingshot Credentials Endpoints

### Get the Raven Slingshot credentials
&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/raven-slingshot-credentials`  

Get the Raven Slingshot credentials of the Leaf User based on its `id` and returns a JSON with the credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-slingshot-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-slingshot-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-slingshot-credentials'
  ```

  </TabItem>
</Tabs>

#### Response
A Raven Slingshot credentials resources as a JSON. 


### Create a Raven Slingshot credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/raven-slingshot-credentials`  

Create a Raven Slingshot credentials for the Leaf User. 


#### Request examples

A Raven Slingshot credentials.

```json
{
    "apiKey": "str",
    "accessKey": "str",
    "sharedSecret": "str"
}
```

<Tabs
  defaultValue="sh"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'cURL', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-slingshot-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "apiKey": "str",
    "accessKey": "str",
    "sharedSecret": "str"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-slingshot-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "apiKey": "str",
    "accessKey": "str",
    "sharedSecret": "str"
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
-d '{ "apiKey": "str", "accessKey": "str", "sharedSecret": "str" }' \
'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-slingshot-credentials'
  ```

  </TabItem>
</Tabs>

#### Response 
A Raven Slingshot Credentials with status.



### Delete Raven Slingshot credentials
&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/raven-slingshot-credentials`  

Delete Leaf User's Raven Slingshot credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-slingshot-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-slingshot-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-slingshot-credentials'
  ```

  </TabItem>
</Tabs>