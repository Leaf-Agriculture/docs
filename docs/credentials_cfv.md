---
title: Climate FieldView Credentials
description: Credentials - Climate Field View
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


[1]: #get-the-climate-fieldview-credentials
[2]: #create-a-climate-fieldview-credentials
[3]: #delete-climate-fieldview-credentials

Form of a Climate FieldView Credentials resource:

```json
{
  "status": "str",
  "clientId": "str",
  "clientSecret": "str",
  "apiKey": "str",
  "accessToken": "str",
  "refreshToken": "str",
  "scopes": ["str"]
}
```

**Endpoints**

Description | Endpoints
--- | ---
[Get the Climate Fieldview credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/climate-field-view-credentials`
[Create a Climate Fieldview credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/climate-field-view-credentials`
[Delete Climate Fieldview  credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/climate-field-view-credentials`

## Climate Field View Credentials Endpoints

### Get the Climate Fieldview credentials
&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/climate-field-view-credentials`

Get a Climate FieldView credentials object by its `id`. If during background processing we detect that this credential is no longer valid, the value of the status will be changed.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/climate-field-view-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/climate-field-view-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/climate-field-view-credentials'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "clientId": "str",
  "clientSecret": "str",
  "apiKey": "str",
  "refreshToken": "str",
  "status": "str",
  "scopes": ["str"]
}
```

### Create a Climate Fieldview credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/climate-field-view-credentials`

Create a Climate FieldView credentials for the Leaf User.

#### Request body

```json
{
  "clientId": "str",
  "clientSecret": "str",
  "apiKey": "str",
  "refreshToken": "str"
}
```

#### Response
A Climate FieldView credential with status.

```json
{
   "clientKey": "str",
   "clientSecret": "str",
   "tokenId": "str",
   "tokenSecretKey": "str",
   "status": "str"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/climate-field-view-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "clientId": "str",
    "clientSecret": "str",
    "apiKey": "str",
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/climate-field-view-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "clientId": "str",
    "clientSecret": "str",
    "apiKey": "str",
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
      -d '{"clientId": "str","clientSecret": "str","apiKey": "str","refreshToken": "str"}' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/climate-field-view-credentials'
  ```

  </TabItem>
</Tabs>

### Delete Climate Fieldview credentials
&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/climate-field-view-credentials`  

Delete Leaf User's Climate FieldView credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/climate-field-view-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/climate-field-view-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/climate-field-view-credentials'
  ```

  </TabItem>
</Tabs>
