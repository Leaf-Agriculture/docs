---
title: Magic Link Endpoints
description: Leaf Link > Magic Link
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-all-provider-magic-links
[2]: #get-a-provider-magic-link
[3]: #create-a-provider-magic-link
[4]: #delete-a-provider-magic-link

[5]: #get-all-authentication-magic-links
[6]: #get-an-authentication-magic-link
[7]: #create-an-authentication-magic-link
[8]: #delete-an-authentication-magic-link

[9]: #get-all-file-upload-magic-links
[10]: #get-a-file-upload-magic-link
[11]: #create-a-file-upload-magic-link
[12]: #delete-a-file-upload-magic-link

[13]:  /docs/Link_provider_connection#set-up

[14]: #create-a-provider-magic-link-1
[15]: #create-an-authentication-magic-link-1
[16]: #create-a-file-upload-magic-link-1

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/widgets/api
```

## Magic Link

### Provider

This is a link to authenticate with multiple providers.

** Endpoints **

| Description                       | Endpoints                                                                               |
|-----------------------------------|-----------------------------------------------------------------------------------------|
| [Get all provider Magic Links][1]  | <span class="badge badge--success">GET</span> `/magic-link/provider`                    |
| [Get a provider Magic Link][2]    | <span class="badge badge--success">GET</span> `/magic-link/provider/{magicLinkId}`      |
| [Create a provider Magic Link][3] | <span class="badge badge--warning">POST</span> `/magic-link/users/{leafUserId}/provider` |
| [Delete a provider Magic Link][4] | <span class="badge badge--danger">DELETE</span> `/magic-link/provider/{magicLinkId}`    |

#### Get all provider Magic Link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/provider`

Get all created links for authentication across multiple providers.

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


#### Get a provider Magic Link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/provider/{magicLinkId}`

Get a created link for authentication across multiple providers.

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

#### Create a provider Magic Link

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/users/{leafUserId}/provider`

:::info Provider application info
Make sure you set up your provider application first. More info [here][13].
:::

Creates a link for authentication across multiple providers.

- `allowedProviders`: the list of providers allowed in the authentication process. It can be one or more of the following: `JohnDeere`, `ClimateFieldView`, `CNHI`, `AgLeader`, `Trimble`, `RavenSlingshot`, and `Stara`.
- `expiresIn`: an integer number for the expiration time, in seconds. This parameter is optional and the default value is `900` (minimum) and the maximum is the equivalent to 1 year.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/provider'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/provider'
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
      'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/provider'
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

#### Delete a provider Magic Link

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

This is a link to authenticate with a single provider.

** Endpoints **

| Description                              | Endpoints                                                                                     |
|------------------------------------------|-----------------------------------------------------------------------------------------------|
| [Get all authentication Magic Links][5]   | <span class="badge badge--success">GET</span> `/magic-link/authentication`                    |
| [Get an authentication Magic Link][6]    | <span class="badge badge--success">GET</span> `/magic-link/authentication/{magicLinkId}`      |
| [Create an authentication Magic Link][7] | <span class="badge badge--warning">POST</span> `/magic-link/users/{leafUserId}/authentication` |
| [Delete an authentication Magic Link][8] | <span class="badge badge--danger">DELETE</span> `/magic-link/authentication/{magicLinkId}`    |

#### Get all authentication Magic Links

&nbsp<span class="badge badge--success">GET</span> `/magic-link/authentication`

Get all created links for authentication with a single provider.

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


#### Get an authentication Magic Link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/authentication/{magicLinkId}`

Get a created link for authentication with a single provider.

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

#### Create an authentication Magic Link
&nbsp<span class="badge badge--warning">POST</span> `/magic-link/users/{leafUserId}/authentication`

:::info Provider application info
Make sure you set up your provider application first. More info [here][13].
:::

Creates a link for authentication with a single provider.

- `provider`: the provider to be used in the authentication process. It can be: `JohnDeere`, `ClimateFieldView`, `CNHI`, `AgLeader`, `Trimble`, `RavenSlingshot`, or `Stara`.
- `expiresIn`: an integer number for the expiration time, in seconds. This parameter is optional and the default value is `900` (minimum) and the maximum is the equivalent to 1 year.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/authentication'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/authentication'
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
      'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/authentication'
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

#### Delete an authentication Magic Link

&nbsp<span class="badge badge--danger">DELETE</span> `/magic-link/authentication/{magicLinkId}`

Delete a link for authentication with a single provider.

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

This is a link to upload machine files.

** Endpoints **

| Description                           | Endpoints                                                                                  |
|---------------------------------------|--------------------------------------------------------------------------------------------|
| [Get all file upload Magic Links][9]   | <span class="badge badge--success">GET</span> `/magic-link/file-upload`                    |
| [Get a file upload Magic Link][10]    | <span class="badge badge--success">GET</span> `/magic-link/file-upload/{magicLinkId}`      |
| [Create a file upload Magic Link][11] | <span class="badge badge--warning">POST</span> `/magic-link/users/{leafUserId}/file-upload` |
| [Delete a file upload Magic Link][12] | <span class="badge badge--danger">DELETE</span> `/magic-link/file-upload/{magicLinkId}`    |

#### Get all file upload Magic Links

&nbsp<span class="badge badge--success">GET</span> `/magic-link/file-upload`

Get all file upload created links.

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


#### Get a file upload Magic Link

&nbsp<span class="badge badge--success">GET</span> `/magic-link/file-upload/{magicLinkId}`

Get a file upload created link.

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

#### Create a file upload Magic Link

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/users/{leafUserId}/file-upload`

Creates a file upload link.

- `expiresIn`: an integer number for the expiration time, in seconds. This parameter is optional and the default value is `900` (minimum) and the maximum is the equivalent to 1 year.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/file-upload'
  const headers = { 'Authorization': `Bearer ${TOKEN}`}
  
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
  
  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/file-upload'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
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
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "expiresIn": int, "settings": { "backgroundColor": "codeColor", "headerImage": "URL", "companyLogo": "URL", "companyName": "companyName", "showLeafUserName": "boolean", "disconnectEnabled": "boolean" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/file-upload'
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

#### Delete a file upload Magic Link

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

## Magic Link with Leaf User Creation

This option enables the creation of Leaf users automatically during the Magic Link creation process. The uniqueness of leaf users can be achieved using a mandatory external identifier, the `externalId`, which can be an ID already used in your application.

** Endpoints **

| Description                               | Endpoints                                                                   |
|-------------------------------------------|-----------------------------------------------------------------------------|
| [Create a Provider Magic Link][14]        | <span class="badge badge--warning">POST</span> `/magic-link/provider`       |
| [Create an Authentication Magic Link][15] | <span class="badge badge--warning">POST</span> `/magic-link/authentication` |
| [Create a File Upload Magic Link][16]     | <span class="badge badge--warning">POST</span> `/magic-link/file-upload`    |

### Create a Provider Magic Link

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/provider`

:::info Provider application info
Make sure you set up your provider application first. More info [here][13].
:::

Creates a link for authentication across multiple providers. The leaf user will be created during this process based on the `externalId`.

- `provider`: the provider to be used in the authentication process. It can be: `JohnDeere`, `ClimateFieldView`, `CNHI`, `AgLeader`, `Trimble`, `RavenSlingshot`, or `Stara`.
- `expiresIn`: an integer number for the expiration time, in seconds. This parameter is optional and the default value is `900` (minimum) and the maximum is the equivalent to 1 year.
- `externalId`: the client side user unique ID
- `name`: it will be the name of the leaf user that we will be created. Updates in this property must be done in the Leaf user endpoints.
- `email`: it will be the email of the leaf user that we will be created. Updates in this property must be done in the Leaf user endpoints.

:::info
The `name` and `email` parameters are optional, they will fill in the leaf user information that we will create, when they are not informed, we will fill in the name and email with the `externalId` information.
:::

##### Request body

``` json
{
  "name": "user_name",
  "email": "user_email",
  "externalId": "external_id",
  "expiresIn": 900,
  "allowedProviders": [
    "provider_name"
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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/provider'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "name": "user_name",
    "email": "user_email",
    "externalId": "external_id",
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/provider'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "name": "user_name",
    "email": "user_email",
    "externalId": "external_id",
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
      -d '{ "name": "user_name", "email": "user_email", "externalId": "external_id", "expiresIn": int, "allowedProviders": ["providerName"], "settings": { "backgroundColor": "codeColor", "headerImage": "URL", "companyLogo": "URL", "companyName": "companyName", "showLeafUserName": "boolean", "disconnectEnabled": "boolean" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/provider'
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

### Create an Authentication Magic Link

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/authentication`

:::info Provider application info
Make sure you set up your provider application first. More info [here][13].
:::

Creates a link for authentication with a single provider. The leaf user will be created during this process based on the `externalId`.

- `provider`: the provider to be used in the authentication process. It can be: `JohnDeere`, `ClimateFieldView`, `CNHI`, `AgLeader`, `Trimble`, `RavenSlingshot`, or `Stara`.
- `expiresIn`: an integer number for the expiration time, in seconds. This parameter is optional and the default value is `900` (minimum) and the maximum is the equivalent to 1 year.
- `externalId`: the client side user unique ID
- `name`: it will be the name of the leaf user that we will be created. Updates in this property must be done in the Leaf user endpoints.
- `email`: it will be the email of the leaf user that we will be created. Updates in this property must be done in the Leaf user endpoints.

:::info
The `name` and `email` parameters are optional, they will fill in the leaf user information that we will create, when they are not informed, we will fill in the name and email with the `externalId` information.
:::

##### Request body

``` json
{
  "name": "user_name",
  "email": "user_email",
  "externalId": "external_id",
  "expiresIn": 900,
  "provider": "provider_name"
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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/authentication'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "name": "user_name",
    "email": "user_email",
    "externalId": "external_id",
    "expiresIn": int,
    "provider": "provider_name",
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/authentication'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "name": "user_name",
    "email": "user_email",
    "externalId": "external_id",
    "expiresIn": int,
    "provider": "provider_name",
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
      -d '{ "name": "user_name", "email": "user_email", "externalId": "external_id", "expiresIn": int, "provider": "provider_name", "settings": { "backgroundColor": "codeColor", "headerImage": "URL", "companyLogo": "URL", "companyName": "companyName", "showLeafUserName": "boolean", "disconnectEnabled": "boolean" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/authentication'
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

### Create a File Upload Magic Link

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/file-upload`

Create a file upload link. The leaf user will be created during this process based on the `externalId`.

- `expiresIn`: an integer number for the expiration time, in seconds. This parameter is optional and the default value is `900` (minimum) and the maximum is the equivalent to 1 year.
- `externalId`: the client side user unique ID
- `name`: it will be the name of the leaf user that we will be created. Updates in this property must be done in the Leaf user endpoints.
- `email`: it will be the email of the leaf user that we will be created. Updates in this property must be done in the Leaf user endpoints.

:::info
The `name` and `email` parameters are optional, they will fill in the leaf user information that we will create, when they are not informed, we will fill in the name and email with the `externalId` information.
:::

##### Request body

``` json
{
  "name": "user_name",
  "email": "user_email",
  "externalId": "external_id",
  "expiresIn": 900
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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/file-upload'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "name": "user_name",
    "email": "user_email",
    "externalId": "external_id",
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

  axios.post(endpoint, { headers, data })
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
    
  data = {
    "name": "user_name",
    "email": "user_email",
    "externalId": "external_id",
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
  
  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "user_name", "email": "user_email", "externalId": "external_id", "expiresIn": int, "settings": { "backgroundColor": "codeColor", "headerImage": "URL", "companyLogo": "URL", "companyName": "companyName", "showLeafUserName": "boolean", "disconnectEnabled": "boolean" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/file-upload'
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
| 6 | disconnectedEnabled | `boolean` | **Only enabled for provider and authentication Magic Link**. Enables the option for the user to choose to disconnect from the provider at the end of the authentication process. It can be `true` or `false`. The default is `false`. |

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/provider'
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/provider'
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
      'https://api.withleaf.io/services/widgets/api/magic-link/users/{leafUserId}/provider'
  ```

  </TabItem>
</Tabs>







