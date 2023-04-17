---
title: Leaf Link > Endpoints
description: Leaf Link > Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: https://withleaf.io/pt/whats-new/autenticacao-da-agleader-com-a-leaf/
[2]: #get-all-agleader-app-information
[3]: #get-a-agleader-app-information
[4]: #create-a-agleader-app-information
[5]: #update-a-agleader-app-information
[6]: #delete-a-agleader-app-information

[7]: https://withleaf.io/pt/whats-new/autenticacao-climate-fieldview-com-a-leaf/
[8]: #get-all-climate-fieldview-app-information
[9]: #get-a-climate-fieldview-app-information
[10]: #create-a-climate-fieldview-app-information
[11]: #update-a-climate-fieldview-app-information
[12]: #delete-a-climate-fieldview-app-information

[13]: https://withleaf.io/pt/whats-new/autenticacao-da-john-deere-com-a-leaf/
[14]: #get-all-cnhi-app-information
[15]: #get-a-cnhi-app-information
[16]: #create-a-cnhi-app-information
[17]: #update-a-cnhi-app-information
[18]: #delete-a-cnhi-app-information

[19]: https://withleaf.io/pt/whats-new/autenticacao-da-cnhi-com-a-leaf/
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


## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

## AgLeader

To enable AgLeader as a provider in the widget you need to have your application already registered with AgLeader. You can find more info on how to create a developer account [here][1].

** Required integration **

Soon we will add the necessary information to carry out this integration.

** Endpoints **

| Description                             | Endpoints                                                                      |
|-----------------------------------------|--------------------------------------------------------------------------------|
| [Get all AgLeader app information][2]   | <span class="badge badge--success">GET</span> `/app-keys/AgLeader`             |
| [Get a AgLeader app information][3]     | <span class="badge badge--success">GET</span> `/app-keys/AgLeader/{appName}`   |
| [Create a AgLeader app information][4]  | <span class="badge badge--warning">POST</span> `/app-keys/AgLeader/{appName}`  |
| [Update a AgLeader app information][5]  | <span class="badge badge--warning">PUT</span> `/app-keys/AgLeader/{appName} `  |
| [Delete a AgLeader app information][6]  | <span class="badge badge--danger">DELETE</span> `/app-keys/AgLeader/{appName}` |


### Get all AgLeader app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/AgLeader`

Get all AgLeader app information from the api owner.

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


#### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION"
  }
]
```


### Get a AgLeader app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/AgLeader/{appName}`

Get a AgLeader app information from the api owner.

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


#### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "PRODUCTION",
  "secrets": {
    "privateKey": "str",
    "publicKey": "str
  }
}
```


### Create a AgLeader app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/AgLeader/{appName}`

Create a AgLeader app information.

#### Request body

``` json
{
  "privateKey": "string",
  "publicKey": "string"
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

### Update a AgLeader app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/AgLeader/{appName}`

Update a AgLeader app information.

#### Request body

``` json
{
  "privateKey": "string",
  "publicKey": "string"
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


### Delete a AgLeader app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/AgLeader/{appName}`

Delete a AgLeader app information.

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




## Climate FieldView

To enable Climate FieldView as a provider in the widget you need to have your application already registered with Climate FieldView. You can find more info on how to create a developer account [here][7].

** Required integration **

Soon we will add the necessary information to carry out this integration.

** Endpoints **

| Description                                      | Endpoints                                                                              |
|--------------------------------------------------|----------------------------------------------------------------------------------------|
| [Get all Climate FieldView app information][8]   | <span class="badge badge--success">GET</span> `/app-keys/ClimateFieldView`             |
| [Get a Climate FieldView app information][9]     | <span class="badge badge--success">GET</span> `/app-keys/ClimateFieldView/{appName}`   |
| [Create a Climate FieldView app information][10] | <span class="badge badge--warning">POST</span> `/app-keys/ClimateFieldView/{appName}`  |
| [Update a Climate FieldView app information][11] | <span class="badge badge--warning">PUT</span> `/app-keys/ClimateFieldView/{appName} `  |
| [Delete a Climate FieldView app information][12] | <span class="badge badge--danger">DELETE</span> `/app-keys/ClimateFieldView/{appName}` |


### Get all Climate FieldView app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/ClimateFieldView`

Get all Climate FieldView app information from the api owner.

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


#### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION"
  }
]
```


### Get a Climate FieldView app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/ClimateFieldView/{appName}`

Get a Climate FieldView app information from the api owner.

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


#### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "PRODUCTION",
  "secrets": {
    "apiKey": "string",
    "clientId": "string",
    "clientSecret": "string"
  }
}
```


### Create a Climate FieldView app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/ClimateFieldView/{appName}`

Create a Climate FieldView app information.

#### Request body

``` json
{
  "apiKey": "string",
  "clientId": "string",
  "clientSecret": "string"
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

### Update a Climate FieldView app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/ClimateFieldView/{appName}`

Update a Climate FieldView app information.

#### Request body

``` json
{
  "apiKey": "string",
  "clientId": "string",
  "clientSecret": "string"
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


### Delete a Climate FieldView app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/ClimateFieldView/{appName}`

Delete a Climate FieldView app information.

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




## CNHI

To enable CNHI as a provider in the widget you need to have your application already registered with CNHI. You can find more info on how to create a developer account [here][13].

** Required integration **

Soon we will add the necessary information to carry out this integration.

** Endpoints **

| Description                         | Endpoints                                                                                       |
|-------------------------------------|-------------------------------------------------------------------------------------------------|
| [Get all CNHI app information][14]  | <span class="badge badge--success">GET</span> `/app-keys/CNHI`                                  |
| [Get a CNHI app information][15]    | <span class="badge badge--success">GET</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`    |
| [Create a CNHI app information][16] | <span class="badge badge--warning">POST</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`   |
| [Update a CNHI app information][17] | <span class="badge badge--warning">PUT</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`    |
| [Delete a CNHI app information][18] | <span class="badge badge--danger">DELETE</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`  |


### Get all CNHI app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/CNHI`

Get all CNHI app information from the api owner.

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


#### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "STAGE or PRODUCTION"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "STAGE or PRODUCTION"
  }
]
```


### Get a CNHI app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`

Get a CNHI app information from the api owner.

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


#### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "STAGE or PRODUCTION",
  "secrets": {
    "clientId": "string",
    "clientSecret": "string",
    "subscriptionKey": "string"
  }
}
```


### Create a CNHI app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`

Create a CNHI app information.

#### Request body

``` json
{
  "clientId": "string",
  "clientSecret": "string",
  "subscriptionKey": "string"
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

### Update a CNHI app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`

Update a CNHI app information.

#### Request body

``` json
{
  "clientId": "string",
  "clientSecret": "string",
  "subscriptionKey": "string"
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


### Delete a CNHI app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/CNHI/{appName}/{clientEnvironment}`

Delete a CNHI app information.

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




## John Deere

To enable John Deere as a provider in the widget you need to have your application already registered with John Deere. You can find more info on how to create a developer account [here][19].

** Required integration **

Soon we will add the necessary information to carry out this integration.

** Endpoints **

| Description                               | Endpoints                                                                                           |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [Get all John Deere app information][20]  | <span class="badge badge--success">GET</span> `/app-keys/JohnDeere`                                 |
| [Get a John Deere app information][21]    | <span class="badge badge--success">GET</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`   |
| [Create a John Deere app information][22] | <span class="badge badge--warning">POST</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`  |
| [Update a John Deere app information][23] | <span class="badge badge--warning">PUT</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`   |
| [Delete a John Deere app information][24] | <span class="badge badge--danger">DELETE</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}` |


### Get all John Deere app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/JohnDeere`

Get all John Deere app information from the api owner.

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


#### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "STAGE or PRODUCTION"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "STAGE or PRODUCTION"
  }
]
```


### Get a John Deere app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`

Get a John Deere app information from the api owner.

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


#### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "STAGE or PRODUCTION",
  "secrets": {
    "clientKey": "string",
    "clientSecret": "string"
  }
}
```


### Create a John Deere app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`

Create a John Deere app information.

#### Request body

``` json
{
  "clientKey": "string",
  "clientSecret": "string"
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

### Update a John Deere app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`

Update a John Deere app information.

#### Request body

``` json
{
  "clientKey": "string",
  "clientSecret": "string"
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


### Delete a John Deere app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/JohnDeere/{appName}/{clientEnvironment}`

Delete a John Deere app information.

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




## Trimble

To enable Trimble as a provider in the widget you need to have your application already registered with Trimble. You can find more info on how to create a developer account [here][25].

** Required integration **

Soon we will add the necessary information to carry out this integration.

** Endpoints **

| Description                            | Endpoints                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------|
| [Get all Trimble app information][26]  | <span class="badge badge--success">GET</span> `/app-keys/Trimble`             |
| [Get a Trimble app information][27]    | <span class="badge badge--success">GET</span> `/app-keys/Trimble/{appName}`   |
| [Create a Trimble app information][28] | <span class="badge badge--warning">POST</span> `/app-keys/Trimble/{appName}`  |
| [Update a Trimble app information][29] | <span class="badge badge--warning">PUT</span> `/app-keys/Trimble/{appName} `  |
| [Delete a Trimble app information][30] | <span class="badge badge--danger">DELETE</span> `/app-keys/Trimble/{appName}` |


### Get all Trimble app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/Trimble`

Get all Trimble app information from the api owner.

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


#### Response

``` json
[
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION"
  },
  {
    "provider": "providerName",
    "appName": "yourAppName",
    "clientEnvironment": "PRODUCTION"
  }
]
```


### Get a Trimble app information

&nbsp<span class="badge badge--success">GET</span> `/app-keys/Trimble/{appName}`

Get a Trimble app information from the api owner.

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


#### Response

``` json
{
  "provider": "providerName",
  "appName": "yourAppName",
  "clientEnvironment": "PRODUCTION",
  "secrets": {
    "applicationName": "string",
    "clientId": "string",
    "clientSecret": "string"
  }
}
```


### Create a Trimble app information

&nbsp<span class="badge badge--warning">POST</span> `/app-keys/Trimble/{appName}`

Create a Trimble app information.

#### Request body

``` json
{
  "applicationName": "string",
  "clientId": "string",
  "clientSecret": "string"
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

### Update a Trimble app information

&nbsp<span class="badge badge--warning">PUT</span> `/app-keys/Trimble/{appName}`

Update a Trimble app information.

#### Request body

``` json
{
  "applicationName": "string",
  "clientId": "string",
  "clientSecret": "string"
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


### Delete a Trimble app information

&nbsp<span class="badge badge--danger">DELETE</span> `/app-keys/Trimble/{appName}`

Delete a Trimble app information.

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





