---
title: Leaf Link > Endpoints
description: Leaf Link > Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: https://withleaf.io/en/whats-new/agleader-authentication-with-leaf/
[2]: #get-all-agleader-app-information
[3]: #get-an-agleader-app-information
[4]: #create-an-agleader-app-information
[5]: #update-an-agleader-app-information
[6]: #delete-an-agleader-app-information

[7]: https://withleaf.io/en/whats-new/climate-fieldview-authentication-with-leaf/
[8]: #get-all-climate-fieldview-app-information
[9]: #get-a-climate-fieldview-app-information
[10]: #create-a-climate-fieldview-app-information
[11]: #update-a-climate-fieldview-app-information
[12]: #delete-a-climate-fieldview-app-information

[13]: https://withleaf.io/en/whats-new/john-deere-authentication-with-leaf/
[14]: #get-all-cnhi-app-information
[15]: #get-a-cnhi-app-information
[16]: #create-a-cnhi-app-information
[17]: #update-a-cnhi-app-information
[18]: #delete-a-cnhi-app-information

[19]: https://withleaf.io/en/whats-new/cnhi-authentication-with-leaf/
[20]: #get-all-john-deere-app-information
[21]: #get-a-john-deere-app-information
[22]: #create-a-john-deere-app-information
[23]: #update-a-john-deere-app-information
[24]: #delete-a-john-deere-app-information

[25]: https://withleaf.io/en/whats-new/trimble-authentication-with-leaf/
[26]: #get-all-trimble-app-information
[27]: #get-a-trimble-app-information
[28]: #create-a-trimble-app-information
[29]: #update-a-trimble-app-information
[30]: #delete-a-trimble-app-information

[31]: #get-all-leaf-user-api-keys
[32]: #create-a-leaf-user-api-key
[33]: #revoke-a-leaf-user-api-key

[34]: https://docs.withleaf.io/docs/Link_provider_connection#oauth-callback-url
[35]: https://docs.withleaf.io/docs/Link_provider_connection#redirect-uri
[36]: https://docs.withleaf.io/docs/Link_provider_connection#authentication-callback-url

[37]: https://withleaf.io/en/whats-new/raven-slingshot-integration-with-leaf/
[38]: #get-all-raven-slingshot-app-information
[39]: #get-a-raven-slingshot-app-information
[40]: #create-a-raven-slingshot-app-information
[41]: #update-a-raven-slingshot-app-information
[42]: #delete-a-raven-slingshot-app-information

[43]: https://docs.withleaf.io/docs/provider-authentication-overview#provider-scopes

[44]: https://withleaf.io/en/tutorials/stara-authentication-with-leaf/
[45]: #get-all-stara-app-information
[46]: #get-a-stara-app-information
[47]: #create-a-stara-app-information
[48]: #update-a-stara-app-information
[49]: #delete-a-stara-app-information


## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

## API key
The API keys are the required authentication info for the Leaf widgets. It is created at a Leaf user level.

** Endpoints **

| Description                             | Endpoints                                                  |
|-----------------------------------------|------------------------------------------------------------|
| [Get all Leaf user API keys][31]        | <span class="badge badge--success">GET</span> `/api-keys`  |
| [Create a Leaf user API key][32]        | <span class="badge badge--warning">POST</span> `/api-keys` |
| [Revoke a Leaf user API key][33]        | <span class="badge badge--danger">DELETE</span> `/api-keys`|


### Get all Leaf user API keys

&nbsp<span class="badge badge--success">GET</span> `/api-keys`

Get all API keys from a Leaf user.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-keys?leafUserId={leafUserId}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-keys?leafUserId={leafUserId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-keys?leafUserId={leafUserId}'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
[
    {
        "id": "uuid",
        "key": "xxxx...xxxx",
        "leafUserId": "uuid",
        "expiresAt": "2024-04-25T18:32:25.530259",
        "description": "test",
        "valid": true
    },
    {
        "id": "uuid",
        "key": "xxxx...xxxx",
        "leafUserId": "uuid",
        "expiresAt": "2024-04-25T18:36:37.965906",
        "description": "test",
        "revokedAt": "2023-04-26T21:27:55.674731",
        "valid": false
    }
]
```



### Create a Leaf user API key

&nbsp<span class="badge badge--warning">POST</span> `/api-keys`

Creates a Leaf user API key.

#### Request body
It is requires few properties:
``` json
{
  "leafUserId": "string",
  "expiresIn": int,
  "description": "string"
}
```
- `leafUserId`: leaf user Id
- `expiresIn`: time to expiration, in seconds. The minimum allowed value is `900` (15 minutes). The default value is one year.
- `description`: description to identify the API Key


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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-keys'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    leafUserId: "string",
    expiresIn: 900,
    description: "string"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-keys'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    leafUserId: "string",
    expiresIn: 900,
    description: "string"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "leafUserId": "string", "expiresIn": 900, "description": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/api-keys'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
    "key": "xxxxxxx",
    "expiresAt": "2024-04-25T18:36:37.965906",
    "valid": true
}
```


### Revoke a Leaf user API key

&nbsp<span class="badge badge--danger">DELETE</span> `/api-keys`

Revokes a Leaf user API key.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-keys/{apiKeyId}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-keys/{apiKeyId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-keys/{apiKeyId}'
  ```

  </TabItem>
</Tabs>




## Providers application info
This section is about your application information from the provider, basically related to the required properties for each one, like the client ID, keys, and secrets.

:::tip Provider setup
Setting up the provider application information is mandatory to use the provider in the authentication widgets/links from Leaf Link.
:::

### AgLeader

To enable AgLeader as a provider in the widget you need to have your application already registered with AgLeader. You can find more info on how to create a developer account [here][1].

** Endpoints **

| Description                             | Endpoints                                                                      |
|-----------------------------------------|--------------------------------------------------------------------------------|
| [Get all AgLeader app information][2]   | <span class="badge badge--success">GET</span> `/app-keys/AgLeader`             |
| [Get an AgLeader app information][3]     | <span class="badge badge--success">GET</span> `/app-keys/AgLeader/{appName}`   |
| [Create an AgLeader app information][4]  | <span class="badge badge--warning">POST</span> `/app-keys/AgLeader/{appName}`  |
| [Update an AgLeader app information][5]  | <span class="badge badge--warning">PUT</span> `/app-keys/AgLeader/{appName} `  |
| [Delete an AgLeader app information][6]  | <span class="badge badge--danger">DELETE</span> `/app-keys/AgLeader/{appName}` |


#### Get all AgLeader app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/AgLeader`

Get all AgLeader app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  }
]
```


#### Get an AgLeader app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/AgLeader/{appName}`

Get an AgLeader app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "PRODUCTION",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
}
```


#### Create an AgLeader app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/AgLeader/{appName}`

Create an AgLeader app information.

##### Request body

``` json
{
  "privateKey": "string",
  "publicKey": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "privateKey": "string",
    "publicKey": "string"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "privateKey": "string",
    "publicKey": "string"
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "privateKey": "string", "publicKey": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  ```

  </TabItem>
</Tabs>

#### Update an AgLeader app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/AgLeader/{appName}`

Update an AgLeader app information.

##### Request body

``` json
{
  "privateKey": "string",
  "publicKey": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "privateKey": "string",
    "publicKey": "string"
  }

  axios.put(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "privateKey": "string",
    "publicKey": "string"
  }
  
  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "privateKey": "string", "publicKey": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  ```

  </TabItem>
</Tabs>


#### Delete an AgLeader app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/AgLeader/{appName}`

Delete an AgLeader app information.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/{appName}'
  ```

  </TabItem>
</Tabs>




### Climate FieldView

To enable Climate FieldView as a provider in the widget you need to have your application already registered with Climate FieldView. You can find more info on how to create a developer account [here][7].

** Endpoints **

| Description                                      | Endpoints                                                                              |
|--------------------------------------------------|----------------------------------------------------------------------------------------|
| [Get all Climate FieldView app information][8]   | <span class="badge badge--success">GET</span> `/app-keys/ClimateFieldView`             |
| [Get a Climate FieldView app information][9]     | <span class="badge badge--success">GET</span> `/app-keys/ClimateFieldView/{appName}`   |
| [Create a Climate FieldView app information][10] | <span class="badge badge--warning">POST</span> `/app-keys/ClimateFieldView/{appName}`  |
| [Update a Climate FieldView app information][11] | <span class="badge badge--warning">PUT</span> `/app-keys/ClimateFieldView/{appName} `  |
| [Delete a Climate FieldView app information][12] | <span class="badge badge--danger">DELETE</span> `/app-keys/ClimateFieldView/{appName}` |


#### Get all Climate FieldView app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/ClimateFieldView`

Get all Climate FieldView app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  }
]
```


#### Get a Climate FieldView app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/ClimateFieldView/{appName}`

Get a Climate FieldView app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "PRODUCTION",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
}
```


#### Create a Climate FieldView app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/ClimateFieldView/{appName}`

Create a Climate FieldView app information.

##### Request body

``` json
{
  "apiKey": "string",
  "clientId": "string",
  "clientSecret": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "apiKey": "string",
    "clientId": "string",
    "clientSecret": "string"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "apiKey": "string",
    "clientId": "string",
    "clientSecret": "string"
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "apiKey": "string", "clientId": "string", "clientSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  ```

  </TabItem>
</Tabs>

##### Scopes
If any additional permission is required during the authentication process, use the `scopes` parameter to require it as displayed below:

``` json
{
  "apiKey": "string",
  "clientId": "string",
  "clientSecret": "string",
  "scopes": ["string"]
}
```

Check the allowed values in this [scopes table][43].

#### Update a Climate FieldView app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/ClimateFieldView/{appName}`

Update a Climate FieldView app information.

##### Request body

``` json
{
  "apiKey": "string",
  "clientId": "string",
  "clientSecret": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "apiKey": "string",
    "clientId": "string",
    "clientSecret": "string"
  }

  axios.put(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "apiKey": "string",
    "clientId": "string",
    "clientSecret": "string"
  }
  
  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "apiKey": "string", "clientId": "string", "clientSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  ```

  </TabItem>
</Tabs>


#### Delete a Climate FieldView app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/ClimateFieldView/{appName}`

Delete a Climate FieldView app information.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/{appName}'
  ```

  </TabItem>
</Tabs>




### CNHI

To enable CNHI as a provider in the widget you need to have your application already registered with CNHI. You can find more info on how to create a developer account [here][19].

**Integration requirements**
```markup
https://widget.withleaf.io
```
The Leaf widget URL must be registered as a valid "App OAuth Callback URL(s)" in your CNHi application. Check [this section][34] for more information.

** Endpoints **

| Description                         | Endpoints                                                                                       |
|-------------------------------------|-------------------------------------------------------------------------------------------------|
| [Get all CNHI app information][14]  | <span class="badge badge--success">GET</span> `/app-keys/CNHI`                                  |
| [Get a CNHI app information][15]    | <span class="badge badge--success">GET</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`    |
| [Create a CNHI app information][16] | <span class="badge badge--warning">POST</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`   |
| [Update a CNHI app information][17] | <span class="badge badge--warning">PUT</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`    |
| [Delete a CNHI app information][18] | <span class="badge badge--danger">DELETE</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`  |


#### Get all CNHI app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/CNHI`

Get all CNHI app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "STAGE or PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "STAGE or PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  }
]
```


#### Get a CNHI app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`

Get a CNHI app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "STAGE or PRODUCTION",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
}
```


#### Create a CNHI app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`

Create a CNHI app information.

##### Request body

``` json
{
  "clientId": "string",
  "clientSecret": "string",
  "subscriptionKey": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "clientId": "string",
    "clientSecret": "string",
    "subscriptionKey": "string"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "clientId": "string",
    "clientSecret": "string",
    "subscriptionKey": "string"
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "clientId": "string", "clientSecret": "string", "subscriptionKey": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  ```

  </TabItem>
</Tabs>

#### Update a CNHI app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`

Update a CNHI app information.

##### Request body

``` json
{
  "clientId": "string",
  "clientSecret": "string",
  "subscriptionKey": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "clientId": "string",
    "clientSecret": "string",
    "subscriptionKey": "string"
  }

  axios.put(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "clientId": "string",
    "clientSecret": "string",
    "subscriptionKey": "string"
  }
  
  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "clientId": "string", "clientSecret": "string", "subscriptionKey": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  ```

  </TabItem>
</Tabs>


#### Delete a CNHI app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`

Delete a CNHI app information.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}'
  ```

  </TabItem>
</Tabs>




### John Deere

To enable John Deere as a provider in the widget you need to have your application already registered with John Deere. You can find more info on how to create a developer account [here][13].

**Integration requirements**
```markup
https://widget.withleaf.io
```
The Leaf widget URL must be registered as a valid "Redirect URI" in your John Deere application. Check [this section][35] for more information.

** Endpoints **

| Description                               | Endpoints                                                                                           |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [Get all John Deere app information][20]  | <span class="badge badge--success">GET</span> `/app-keys/JohnDeere`                                 |
| [Get a John Deere app information][21]    | <span class="badge badge--success">GET</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`   |
| [Create a John Deere app information][22] | <span class="badge badge--warning">POST</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`  |
| [Update a John Deere app information][23] | <span class="badge badge--warning">PUT</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`   |
| [Delete a John Deere app information][24] | <span class="badge badge--danger">DELETE</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}` |


#### Get all John Deere app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/JohnDeere`

Get all John Deere app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "STAGE or PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "STAGE or PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  }
]
```


#### Get a John Deere app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`

Get a John Deere app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "STAGE or PRODUCTION",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
}
```


#### Create a John Deere app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`

Create a John Deere app information.

##### Request body

``` json
{
  "clientKey": "string",
  "clientSecret": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "clientKey": "string",
    "clientSecret": "string"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "clientKey": "string",
    "clientSecret": "string"
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "clientKey": "string", "clientSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  ```

  </TabItem>
</Tabs>

#### Update a John Deere app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`

Update a John Deere app information.

##### Request body

``` json
{
  "clientKey": "string",
  "clientSecret": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "clientKey": "string",
    "clientSecret": "string"
  }

  axios.put(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "clientKey": "string",
    "clientSecret": "string"
  }
  
  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "clientKey": "string", "clientSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  ```

  </TabItem>
</Tabs>

##### Scopes
If any additional permission is required during the authentication process, use the `scopes` parameter to require it as displayed below:

``` json
{
  "clientKey": "string",
  "clientSecret": "string",
  "scopes": ["string"]
}
```

Check the allowed values in this [scopes table][43].


#### Delete a John Deere app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`

Delete a John Deere app information.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}'
  ```

  </TabItem>
</Tabs>




### Trimble

To enable Trimble as a provider in the widget you need to have your application already registered with Trimble. You can find more info on how to create a developer account [here][25].

**Integration requirements**
```markup
https://widget.withleaf.io
```
The Leaf widget URL must be registered as a valid "Authentication Callback URL" in your Trimble application. Check [this section][36] for more information.

** Endpoints **

| Description                            | Endpoints                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------|
| [Get all Trimble app information][26]  | <span class="badge badge--success">GET</span> `/app-keys/Trimble`             |
| [Get a Trimble app information][27]    | <span class="badge badge--success">GET</span> `/app-keys/Trimble/{appName}`   |
| [Create a Trimble app information][28] | <span class="badge badge--warning">POST</span> `/app-keys/Trimble/{appName}`  |
| [Update a Trimble app information][29] | <span class="badge badge--warning">PUT</span> `/app-keys/Trimble/{appName} `  |
| [Delete a Trimble app information][30] | <span class="badge badge--danger">DELETE</span> `/app-keys/Trimble/{appName}` |


#### Get all Trimble app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/Trimble`

Get all Trimble app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  }
]
```


#### Get a Trimble app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/Trimble/{appName}`

Get a Trimble app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "PRODUCTION",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
}
```


#### Create a Trimble app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/Trimble/{appName}`

Create a Trimble app information.

##### Request body

``` json
{
  "applicationName": "string",
  "clientId": "string",
  "clientSecret": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "applicationName": "string",
    "clientId": "string",
    "clientSecret": "string"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "applicationName": "string",
    "clientId": "string",
    "clientSecret": "string"
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "applicationName": "string", "clientId": "string", "clientSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  ```

  </TabItem>
</Tabs>

#### Update a Trimble app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/Trimble/{appName}`

Update a Trimble app information.

##### Request body

``` json
{
  "applicationName": "string",
  "clientId": "string",
  "clientSecret": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "applicationName": "string",
    "clientId": "string",
    "clientSecret": "string"
  }

  axios.put(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "applicationName": "string",
    "clientId": "string",
    "clientSecret": "string"
  }
  
  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "applicationName": "string", "clientId": "string", "clientSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  ```

  </TabItem>
</Tabs>


#### Delete a Trimble app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/Trimble/{appName}`

Delete a Trimble app information.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/{appName}'
  ```

  </TabItem>
</Tabs>




### Raven Slingshot

To enable Raven Slingshot as a provider in the widget you need to have your application already registered with Raven Slingshot. You can find more info on how to create a developer account [here][37].

** Endpoints **

| Description                            | Endpoints                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------|
| [Get all Raven Slingshot app information][38]  | <span class="badge badge--success">GET</span> `/app-keys/RavenSlingshot`             |
| [Get a Raven Slingshot app information][39]    | <span class="badge badge--success">GET</span> `/app-keys/RavenSlingshot/{appName}`   |
| [Create a Raven Slingshot app information][40] | <span class="badge badge--warning">POST</span> `/app-keys/RavenSlingshot/{appName}`  |
| [Update a Raven Slingshot app information][41] | <span class="badge badge--warning">PUT</span> `/app-keys/RavenSlingshot/{appName} `  |
| [Delete a Raven Slingshot app information][42] | <span class="badge badge--danger">DELETE</span> `/app-keys/RavenSlingshot/{appName}` |


#### Get all Raven Slingshot app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/RavenSlingshot`

Get all Raven Slingshot app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  }
]
```


#### Get a Raven Slingshot app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/RavenSlingshot/{appName}`

Get a Raven Slingshot app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "PRODUCTION",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
}
```


#### Create a Raven Slingshot app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/RavenSlingshot/{appName}`

Create a Raven Slingshot app information.

##### Request body

``` json
{
    "apiKey": "string",
    "sharedSecret": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "apiKey": "string",
    "sharedSecret": "string"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "apiKey": "string",
    "sharedSecret": "string"
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "apiKey": "string", "sharedSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  ```

  </TabItem>
</Tabs>

#### Update a Raven Slingshot app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/RavenSlingshot/{appName}`

Update a Raven Slingshot app information.

##### Request body

``` json
{
  "apiKey": "string",
  "sharedSecret": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "apiKey": "string",
    "sharedSecret": "string"
  }

  axios.put(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "apiKey": "string",
    "sharedSecret": "string"
  }
  
  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "apiKey": "string", "sharedSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  ```

  </TabItem>
</Tabs>


#### Delete a Raven Slingshot app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/RavenSlingshot/{appName}`

Delete a Raven Slingshot app information.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/RavenSlingshot/{appName}'
  ```

  </TabItem>
</Tabs>


### Stara

To enable Stara as a provider in the widget you need to have your application already registered with Stara. You can find more info on how to create a developer account [here][44].

:::info
Stara is not yet available in Link Angular
:::


** Endpoints **

| Description                            | Endpoints                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------|
| [Get all Stara app information][45]  | <span class="badge badge--success">GET</span> `/app-keys/Stara`             |
| [Get a Stara app information][46]    | <span class="badge badge--success">GET</span> `/app-keys/Stara/{appName}`   |
| [Create a Stara app information][47] | <span class="badge badge--warning">POST</span> `/app-keys/Stara/{appName}`  |
| [Update a Stara app information][48] | <span class="badge badge--warning">PUT</span> `/app-keys/Stara/{appName}`   |
| [Delete a Stara app information][49] | <span class="badge badge--danger">DELETE</span> `/app-keys/Stara/{appName}` |


#### Get all Stara app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/Stara`

Get all Stara app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
  }
]
```


#### Get a Stara app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/Stara/{appName}`

Get a Stara app information from the API Owner.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  ```

  </TabItem>
</Tabs>


##### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "PRODUCTION",
  "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'"
}
```


#### Create a Stara app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/Stara/{appName}`

Create a Stara app information.

##### Request body

``` json
{
    "user": "string",
    "pwd": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "user": "string",
    "pwd": "string"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "user": "string",
    "pwd": "string"
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "accessTokenClient": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  ```

  </TabItem>
</Tabs>

#### Update a Stara app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/Stara/{appName}`

Update a Stara app information.

##### Request body

``` json
{
  "accessTokenClient": "string"
}
```

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "user": "string",
    "pwd": "string"
  }

  axios.put(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "user": "string",
    "pwd": "string"
  }
  
  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "accessTokenClient": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  ```

  </TabItem>
</Tabs>


#### Delete a Stara app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/Stara/{appName}`

Delete a Stara app information.

##### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Stara/{appName}'
  ```

  </TabItem>
</Tabs>
