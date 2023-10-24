---
title: Leaf Link > Magic Link
description: Leaf Link > Magic Link
sidebar_label: Magic Link
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]:  #provider-connection
[2]:  #authentication
[3]:  #file-upload
[4]:  https://docs.withleaf.io/docs/Link_provider_connection#set-up


## About
The Magic Link is the easiest way to connect your customer data with Leaf API. It offers a low-code solution to enable them to connect to data providers or upload files. The link generated in this solution controls all the steps for each functionality and its appearance can be customized too.

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/widgets/api
```

## Link generation
Use the following endpoints to generate the links. It is generated per leaf user.

** Endpoints **

| Description                             | Endpoints                                                                                     |
|-----------------------------------------|-----------------------------------------------------------------------------------------------|
| [Provider connection][1]           | <span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/provider`       |
| [Authentication][2]                | <span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/authentication` |
| [File upload][3]                   | <span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/file-upload`    |


### Provider connection

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/provider`

Creates a link for authentication across multiple providers.

:::info Setup
Make sure you have set up the provider correctly before starting. You can find more information [here][4]. 
:::

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
    "expiresIn": 900,
    "allowedProviders": ["Other"],
    "settings": {
      "backgroundColor": "#2980b9",
      "companyLogo": "logo-url",
      "headerImage": "header-url",
      "companyName": "Lorem ipsum"
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
    "expiresIn": 900,
    "allowedProviders": ["Other"],
    "settings": {
      "backgroundColor": "#2980b9",
      "companyLogo": "logo-url",
      "headerImage": "header-url",
      "companyName": "Lorem ipsum"
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
      -d '{ "expiresIn": 900, "allowedProviders": ["Other"], "settings": { "backgroundColor": "#2980b9", "companyLogo": "logo-url", "headerImage": "header-url", "companyName": "Lorem ipsum" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/provider'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
    "id": "MWE3MDg4NzItZDE5Yy22MGUxxSFlZDAtN2MzNTc3Y2Vmz",
    "leafUserId": "123e3333-1fab-1e4e-b987-00e8fbe225c9",
    "link": "https://magic-link.withleaf.io/MWE3MDg4NzItZDE5Yy22MGUxxSFlZDAtN2MzNTc3Y2Vmz",
    "expiresAt": "2010-10-10T10:10:10.000000000Z"
}
```

### Authentication

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/authentication`

Creates a link for authentication using a single provider per time.

:::info Setup
Make sure you have set up the provider correctly before starting. You can find more information [here][4]. 
:::

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/authentication'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "expiresIn": 900,
    "provider": "ClimateFieldView",
    "settings": {
      "backgroundColor": "#2980b9",
      "companyLogo": "logo-url",
      "headerImage": "header-url",
      "companyName": "Lorem ipsum"
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
    "expiresIn": 900,
    "provider": "ClimateFieldView",
    "settings": {
      "backgroundColor": "#2980b9",
      "companyLogo": "logo-url",
      "headerImage": "header-url",
      "companyName": "Lorem ipsum"
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
      -d '{ "expiresIn": 900, "provider": "ClimateFieldView", "settings": { "backgroundColor": "#2980b9", "companyLogo": "logo-url", "headerImage": "header-url", "companyName": "Lorem ipsum" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/authentication'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
    "id": "MWE3MDg4NzItZDE5Yy22MGUxxSFlZDAtN2MzNTc3Y2Vmz",
    "leafUserId": "123e3333-1fab-1e4e-b987-00e8fbe225c9",
    "link": "https://magic-link.withleaf.io/MWE3MDg4NzItZDE5Yy22MGUxxSFlZDAtN2MzNTc3Y2Vmz",
    "expiresAt": "2010-10-10T10:10:10.000000000Z"
}
```


### File upload

&nbsp<span class="badge badge--warning">POST</span> `/magic-link/user/{leafUserId}/file-upload`

Creates a link for operation files upload.

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

  const endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/file-upload'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    "expiresIn": 900,
    "settings": {
      "backgroundColor": "#2980b9",
      "companyLogo": "logo-url",
      "headerImage": "header-url",
      "companyName": "Lorem ipsum"
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

  endpoint = 'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/file-upload'
  headers = {'Authorization': f'Bearer {TOKEN}'}
    
  data = {
    "expiresIn": 900,
    "settings": {
      "backgroundColor": "#2980b9",
      "companyLogo": "logo-url",
      "headerImage": "header-url",
      "companyName": "Lorem ipsum"
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
      -d '{ "expiresIn": 900, "settings": { "backgroundColor": "#2980b9", "companyLogo": "logo-url", "headerImage": "header-url", "companyName": "Lorem ipsum" } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/file-upload'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
    "id": "MWE3MDg4NzItZDE5Yy22MGUxxSFlZDAtN2MzNTc3Y2Vmz",
    "leafUserId": "123e3333-1fab-1e4e-b987-00e8fbe225c9",
    "link": "https://magic-link.withleaf.io/MWE3MDg4NzItZDE5Yy22MGUxxSFlZDAtN2MzNTc3Y2Vmz",
    "expiresAt": "2010-10-10T10:10:10.000000000Z"
}
```


## Link customization

The links can be customized using some properties described below.
Simply fill in the `settings` property when creating the link.

<p align="center">
    <img alt="Customization" src={useBaseUrl('img/leaf-magic-link-customization.png')} />
</p>

|   | Property         | Type      | Description                                                                                      |
|---|------------------|-----------|--------------------------------------------------------------------------------------------------|
| 1 | backgroundColor  | `string`  | The application's background color in hexadecimal format, for example: `"#c0392b"` or `"#27ae60"`|
| 2 | companyLogo      | `string`  | URL for the company logo.                                                                        |
| 3 | companyName      | `string`  | The company name                                                                                 |
| 4 | headerImage      | `string`  | URL to an image that will be used as a header in the application                                 |
| 5 | showLeafUserName | `boolean` | Indicates whether the Leaf user name will be displayed or not. The default value is `false`      |

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
    "expiresIn": 900,
    "allowedProviders": ["Other"],
    "settings": {
      "backgroundColor": "#2980b9",
      "companyLogo": "logo-url",
      "headerImage": "header-url",
      "companyName": "Lorem ipsum",
      "showLeafUserName": true
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
    "expiresIn": 900,
    "allowedProviders": ["Other"],
    "settings": {
      "backgroundColor": "#2980b9",
      "companyLogo": "logo-url",
      "headerImage": "header-url",
      "companyName": "Lorem ipsum",
      "showLeafUserName": true
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
      -d '{ "expiresIn": 900, "allowedProviders": ["Other"], "settings": { "backgroundColor": "#2980b9", "companyLogo": "logo-url", "headerImage": "header-url", "companyName": "Lorem ipsum", "showLeafUserName": true } }'
      'https://api.withleaf.io/services/widgets/api/magic-link/user/{leafUserId}/provider'
  ```

  </TabItem>
</Tabs>

##### Response

``` json
{
    "id": "MWE3MDg4NzItZDE5Yy22MGUxxSFlZDAtN2MzNTc3Y2Vmz",
    "leafUserId": "123e3333-1fab-1e4e-b987-00e8fbe225c9",
    "link": "https://magic-link.withleaf.io/MWE3MDg4NzItZDE5Yy22MGUxxSFlZDAtN2MzNTc3Y2Vmz",
    "expiresAt": "2010-10-10T10:10:10.000000000Z"
}
```







