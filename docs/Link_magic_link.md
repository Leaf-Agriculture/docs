---
title: Magic Link Endpoints
description: Leaf Link > Magic Link
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-all-provider-magic-link
[2]: #get-a-provider-magic-link
[3]: #create-a-provider-magic-link
[4]: #delete-a-provider-magic-link

[5]: #get-all-authentication-magic-link
[6]: #get-a-authentication-magic-link
[7]: #create-a-authentication-magic-link
[8]: #delete-a-authentication-magic-link

[9]: #get-all-file-upload-magic-link
[10]: #get-a-file-upload-magic-link
[11]: #create-a-file-upload-magic-link
[12]: #delete-a-file-upload-magic-link

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/widgets/api
```

## Magic Links

### Provider

This is a link to authenticate to multiple providers.

** Endpoints **

| Description                       | Endpoints                                                                               |
|-----------------------------------|-----------------------------------------------------------------------------------------|
| [Get all provider magic link][1]  | <span class="badge badge--success">GET</span> `/magic-link/provider`                    |
| [Get a provider magic link][2]    | <span class="badge badge--success">GET</span> `/magic-link/provider/{magicLinkId}`      |
| [Create a provider magic link][3] | <span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/provider` |
| [Delete a provider magic link][4] | <span class="badge badge--danger">DELETE</span> `/magic-link/provider/{magicLinkId}`    |

#### Get all provider magic link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/provider`

Get all links for authentication across multiple providers.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/provider'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/provider'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/widgets/api/magic-link/provider'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
[
  {
    "id": "magicLinkId",
    "link": "https://magic-link.withleaf.io/{magicLinkId}",
    "createdAt": "2023-11-02T19:17:16.494Z",
    "expiresAt": "2024-10-26T14:23:56.584Z",
    "lastAccessedAt": "2023-11-02T19:17:18.906Z",
    "leafUserId": "UUID",
    "maxUsage": 3,
    "usageCount": 0,
    "widget": "PROVIDER",
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    },
    "allowedProviders": [
      "Other"
    ]
  },
  ....
]
```


#### Get a provider magic link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/provider/{magicLinkId}`

Get a link for authentication across multiple providers.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/provider/{magicLinkId}'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/provider/{magicLinkId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/widgets/api/magic-link/provider/{magicLinkId}'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
  "id": "magicLinkId",
  "link": "https://magic-link.withleaf.io/{magicLinkId}",
  "createdAt": "2023-11-02T19:17:16.494Z",
  "expiresAt": "2024-10-26T14:23:56.584Z",
  "lastAccessedAt": "2023-11-02T19:17:18.906Z",
  "leafUserId": "UUID",
  "maxUsage": 3,
  "usageCount": 0,
  "widget": "PROVIDER",
  "settings": {
    "backgroundColor": "codeColor",
    "headerImage": "URL",
    "companyLogo": "URL",
    "companyName": "companyName",
    "showLeafUserName": "boolean",
    "disconnectEnabled": "boolean"
  },
  "allowedProviders": [
    "Other"
  ]
}
```

#### Create a provider magic link

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/provider`

Creates a link for authentication across multiple providers.

- `allowedProviders`: you will need to set the providers that you want to be allowed in the authentication process. Can be: `JohnDeere`, `ClimateFieldView`, `CNHI`, `AgLeader`, `Trimble` and `other`. The default is `other` and will allow all these providers.
- `expiresIn`: the int value set here can be from `900` to `31536000`, with the value in seconds referring to one year. The default is `900`.

##### Request body

``` json
{
  "expiresIn": int,
  "allowedProviders": [
    "providerName"
  ]
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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/provider'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "expiresIn": int,
    "allowedProviders": ["providerName"],
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    }
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/provider'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "expiresIn": int,
    "allowedProviders": ["providerName"],
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    }
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "expiresIn": int, "allowedProviders": ["providerName"], "settings": { "backgroundColor": "codeColor", "headerImage": "URL", "companyLogo": "URL", "companyName": "companyName", "showLeafUserName": "boolean", "disconnectEnabled": "boolean" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/provider'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
  "id": "magicLinkId",
  "leafUserId": "UUID",
  "link": "https://magic-link.withleaf.io/{magicLinkId}",
  "expiresAt": "2010-10-10T10:10:10.000000000Z"
}
```

#### Delete a provider magic link

&nbsp<span class="badge badge--danger">DELETE</span> `/magic-link/provider/{magicLinkId}`

Delete a link for authentication across multiple providers.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/provider/{magicLinkId}'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/provider/{magicLinkId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/widgets/api/magic-link/provider/{magicLinkId}'
  ```

  </TabItem>
</Tabs>


### Authentication

This is a link to authenticate to a single provider.

** Endpoints **

| Description                             | Endpoints                                                                                     |
|-----------------------------------------|-----------------------------------------------------------------------------------------------|
| [Get all authentication magic link][5]  | <span class="badge badge--success">GET</span> `/magic-link/authentication`                    |
| [Get a authentication magic link][6]    | <span class="badge badge--success">GET</span> `/magic-link/authentication/{magicLinkId}`      |
| [Create a authentication magic link][7] | <span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/authentication` |
| [Delete a authentication magic link][8] | <span class="badge badge--danger">DELETE</span> `/magic-link/authentication/{magicLinkId}`    |

#### Get all authentication magic link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/authentication`

Get all links for authentication from a single provider.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/authentication'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/authentication'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/widgets/api/magic-link/authentication'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
[
  {
    "id": "magicLinkId",
    "link": "https://magic-link.withleaf.io/{magicLinkId}",
    "createdAt": "2023-11-02T19:17:16.494Z",
    "expiresAt": "2024-10-26T14:23:56.584Z",
    "lastAccessedAt": "2023-11-02T19:17:18.906Z",
    "leafUserId": "UUID",
    "maxUsage": 3,
    "usageCount": 0,
    "widget": "AUTHENTICATION",
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    },
    "provider": "providerName"
  },
  ....
]
```


#### Get a authentication magic link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/authentication/{magicLinkId}`

Get a link for authentication from a single provider.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/authentication/{magicLinkId}'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/authentication/{magicLinkId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/widgets/api/magic-link/authentication/{magicLinkId}'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
  "id": "magicLinkId",
  "link": "https://magic-link.withleaf.io/{magicLinkId}",
  "createdAt": "2023-11-02T19:17:16.494Z",
  "expiresAt": "2024-10-26T14:23:56.584Z",
  "lastAccessedAt": "2023-11-02T19:17:18.906Z",
  "leafUserId": "UUID",
  "maxUsage": 3,
  "usageCount": 0,
  "widget": "AUTHENTICATION",
  "settings": {
    "backgroundColor": "codeColor",
    "headerImage": "URL",
    "companyLogo": "URL",
    "companyName": "companyName",
    "showLeafUserName": "boolean",
    "disconnectEnabled": "boolean"
  },
  "provider": "providerName"
}
```

#### Create a authentication magic link

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/authentication`

Creates a link for authentication from a single provider.

- `provider`: you will only need to define a single provider that you want to be allowed in the authentication process. Can be: `JohnDeere`, `ClimateFieldView`, `CNHI`, `AgLeader` or `Trimble`.
- `expiresIn`: the int value set here can be from `900` to `31536000`, with the value in seconds referring to one year. The default is `900`.

##### Request body

``` json
{
  "expiresIn": int,
  "provider": "providerName"
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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/authentication'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "expiresIn": int,
    "provider": "providerName",
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    }
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/authentication'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "expiresIn": int,
    "provider": "providerName",
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    }
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "expiresIn": int, "provider": "providerName", "settings": { "backgroundColor": "codeColor", "headerImage": "URL", "companyLogo": "URL", "companyName": "companyName", "showLeafUserName": "boolean", "disconnectEnabled": "boolean" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/authentication'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
  "id": "magicLinkId",
  "leafUserId": "UUID",
  "link": "https://magic-link.withleaf.io/{magicLinkId}",
  "expiresAt": "2010-10-10T10:10:10.000000000Z"
}
```

#### Delete a authentication magic link

&nbsp<span class="badge badge--danger">DELETE</span> `/magic-link/authentication/{magicLinkId}`

Delete a link for authentication from a single provider.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/authentication/{magicLinkId}'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/authentication/{magicLinkId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/widgets/api/magic-link/authentication/{magicLinkId}'
  ```

  </TabItem>
</Tabs>










### File upload

This is a link to upload a file.

** Endpoints **

| Description                           | Endpoints                                                                                  |
|---------------------------------------|--------------------------------------------------------------------------------------------|
| [Get all file upload magic link][9]   | <span class="badge badge--success">GET</span> `/magic-link/file-upload`                    |
| [Get a file upload magic link][10]    | <span class="badge badge--success">GET</span> `/magic-link/file-upload/{magicLinkId}`      |
| [Create a file upload magic link][11] | <span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/file-upload` |
| [Delete a file upload magic link][12] | <span class="badge badge--danger">DELETE</span> `/magic-link/file-upload/{magicLinkId}`    |

#### Get all file upload magic link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/file-upload`

Get all file upload links.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/file-upload'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/file-upload'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/widgets/api/magic-link/file-upload'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
[
  {
    "id": "magicLinkId",
    "link": "https://magic-link.withleaf.io/{magicLinkId}",
    "createdAt": "2023-10-30T20:47:22.630Z",
    "expiresAt": "2023-10-30T21:02:22.729Z",
    "lastAccessedAt": "2023-10-30T20:47:28.209Z",
    "leafUserId": "UUID",
    "maxUsage": 3,
    "usageCount": 0,
    "widget": "FILEUPLOAD",
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    }
  },
  ....
]
```


#### Get a file upload magic link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/file-upload/{magicLinkId}`

Get a file upload link.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/file-upload/{magicLinkId}'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/file-upload/{magicLinkId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/widgets/api/magic-link/file-upload/{magicLinkId}'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
  "id": "magicLinkId",
  "link": "https://magic-link.withleaf.io/{magicLinkId}",
  "createdAt": "2023-10-30T20:47:22.630Z",
  "expiresAt": "2023-10-30T21:02:22.729Z",
  "lastAccessedAt": "2023-10-30T20:47:28.209Z",
  "leafUserId": "UUID",
  "maxUsage": 3,
  "usageCount": 0,
  "widget": "FILEUPLOAD",
  "settings": {
    "backgroundColor": "codeColor",
    "headerImage": "URL",
    "companyLogo": "URL",
    "companyName": "companyName",
    "showLeafUserName": "boolean",
    "disconnectEnabled": "boolean"
  }
}
```

#### Create a file upload magic link

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/file-upload`

Create a file upload link.

- `expiresIn`: the int value set here can be from `900` to `31536000`, with the value in seconds referring to one year. The default is `900`.

##### Request body

``` json
{  
  "expiresIn": int
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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/file-upload'
  const headers = { 
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'multipart/form-data'
  }
  
  const data = {
    "expiresIn": int,
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    }
  }
  
  const form = new FormData()
  form.append('file', 'file.zip')
  
  axios.post(endpoint, form, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/file-upload'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  files = {'file': open('file.zip', 'rb')}
  data = {
    "expiresIn": int,
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    }
  }
  
  response = requests.post(endpoint, headers=headers, json=data, files=files)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -F 'file=file.zip' \
      -d '{ "expiresIn": int, "settings": { "backgroundColor": "codeColor", "headerImage": "URL", "companyLogo": "URL", "companyName": "companyName", "showLeafUserName": "boolean", "disconnectEnabled": "boolean" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/file-upload'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
  "id": "magicLinkId",
  "leafUserId": "UUID",
  "link": "https://magic-link.withleaf.io/{magicLinkId}",
  "expiresAt": "2010-10-10T10:10:10.000000000Z"
}
```

#### Delete a file upload magic link

&nbsp<span class="badge badge--danger">DELETE</span> `/magic-link/file-upload/{magicLinkId}`

Delete a file upload link.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/file-upload/{magicLinkId}'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/file-upload/{magicLinkId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/widgets/api/magic-link/file-upload/{magicLinkId}'
  ```

  </TabItem>
</Tabs>


## Link customization

The links can be customized using some properties described below.
Simply fill in the `settings` property when creating the link.

<p align="center">
    <img alt="Customization" src={useBaseUrl('img/leaf-magic-link-customization.png')} />
</p>

|   | Property            | Type      | Description                                                                                                                                                                                                                           |
|---|---------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | backgroundColor     | `string`  | The application's background color in hexadecimal format, for example: `"#c0392b"` or `"#27ae60"`. The default is `#F5F5F5`.                                                                                                          |
| 2 | companyLogo         | `string`  | URL for the company logo.                                                                                                                                                                                                             |
| 3 | companyName         | `string`  | The company name.                                                                                                                                                                                                                     |
| 4 | headerImage         | `string`  | URL to an image that will be used as a header in the application.                                                                                                                                                                     |
| 5 | showLeafUserName    | `boolean` | Indicates whether the Leaf user name will be displayed or not. It can be `true` or `false`. The default is `false`.                                                                                                                   |
| 6 | disconnectedEnabled | `boolean` | **Only enabled for provider and authentication magic link**. Enables the option for the user to choose to disconnect from the provider at the end of the authentication process. It can be `true` or `false`. The default is `false`. |

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/provider'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "expiresIn": int,
    "allowedProviders": ["Other"],
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    }
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/provider'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "expiresIn": int,
    "allowedProviders": ["Other"],
    "settings": {
      "backgroundColor": "codeColor",
      "headerImage": "URL",
      "companyLogo": "URL",
      "companyName": "companyName",
      "showLeafUserName": "boolean",
      "disconnectEnabled": "boolean"
    }
  }
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "expiresIn": int, "allowedProviders": ["Other"], "settings": { "backgroundColor": "codeColor", "headerImage": "URL", "companyLogo": "URL", "companyName": "companyName", "showLeafUserName": "boolean", "disconnectEnabled": "boolean" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/provider'
  ```

  </TabItem>
</Tabs>







