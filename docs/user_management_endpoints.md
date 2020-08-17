---
title: User Management
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://a.agrigate.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

#### Leaf Users Resources

Form of a Leaf user:

```json
{
  "id": "UUID",
  "apiOwnerUsername": "str",
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str",
  "somarCredentials":  {"Object"},
  "trimbleCredentials":  {"Object"},
  "cnhiCredentials":  {"Object"},
  "johnDeereCredentials":  {"Object"},
  "ravenCredentials":  {"Object"},
  "climatempoCredentials":  {"Object"},
  "climateFieldViewCredentials": {"Object"}
}
```

Endpoints:

```
GET    /users/{id}
GET    /users/
```

#### John Deere Credentials

Form of a John Deere Credentials:

```
GET    /credentials/{id}
GET    /credentials/
```

#### Climate FieldView Credentials

Form of a John Deere Credentials:

This service has the following enpoints.

```
GET    /users/{id}
GET    /users/
```

Trimble Credentials

This service has the following enpoints.

```
GET    /users/{id}
GET    /users/
```

CNHI Credentials 

This service has the following enpoints.


```
GET    /users/{id}
GET    /users/
```


## Endpoints

### `GET /users/{id}`
Get a Leaf User.

Gets a Leaf User based on your "id_token" and return a JSON response with your id and other atributes.

```json
{
    "id": "UUID",
    "apiOwnerUsername": "str",
    "name": "str",
    "email": "help@withleaf.io",
    "phone": "str",
    "address": "str",
    "somarCredentials":  {"Object"},
    "trimbleCredentials":  {"Object"},
    "cnhiCredentials":  {"Object"},
    "johnDeereCredentials":  {"Object"},
    "ravenCredentials":  {"Object"},
    "climatempoCredentials":  {"Object"},
    "climateFieldViewCredentials": " {"Object"}
}
```


<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/users/{{leaf-user-id}}'
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

  endpoint = 'https://{{url}}/services/usermanagement/api/users/{{leaf-user-id}}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://{{url}}/services/usermanagement/api/users/{{leaf-user-id}}'
  ```

  </TabItem>
</Tabs>


### `GET /users`
Get all Leaf User.

Gets all Leaf Users and return a JSON list response with your id and other atributes of all the users.


```json
[{
    "id": "UUID",
    "apiOwnerUsername": "str",
    "name": "str",
    "email": "help@withleaf.io",
    "phone": "str",
    "address": "str",
    "somarCredentials":  {"Object"},
    "trimbleCredentials":  {"Object"},
    "cnhiCredentials":  {"Object"},
    "johnDeereCredentials":  {"Object"},
    "ravenCredentials":  {"Object"},
    "climatempoCredentials":  {"Object"},
    "climateFieldViewCredentials": " {"Object"}
}]

```

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/users/'
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

  endpoint = 'https://{{url}}/services/usermanagement/api/users/'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://{{url}}/services/usermanagement/api/users/'
  ```

  </TabItem>
</Tabs>


### `POST users/`
Creates a Leaf User.

#### Request body

```json
{
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str",
}
```

Besides the four properties of the example above, if you already have created
credentials for some provider like John Deere, you can add an entry like the
following, specifying the id of the credentials object previously created, so
it will be bind to the Leaf User being created.

```json
  "johnDeereCredentials": {
    "id": "UUID"
  }
```

#### Response
A Leaf User with the id assigned to it.

```json
{
  "id": "UUID",
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str",
}
```


<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/users'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    id: "UUID",
    name: "str",
    email: "help@withleaf.io",
    phone: "str",
    address: "str"
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

  endpoint = 'https://{{url}}/services/usermanagement/api/users/'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/users'
  ```

  </TabItem>
</Tabs>


### `GET  john-deere-credentials/{id}`

Get the John Deere credentials of the user based own his id and returns a JSON with the credentials.


```json
{
    "id": "UUID",
    "apiOwnerUsername": "help@withlife.io",
    "clientKey": "str",
    "clientSecret": "str",
    "tokenId": "str",
    "tokenSecretKey": "str"
}
```

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/john-deere-credentials/{{john-deere-credentials-id}}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    id: "UUID",
    name: "str",
    email: "help@withleaf.io",
    phone: "str",
    address: "str"
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

  endpoint = 'https://{{url}}/services/usermanagement/api/john-deere-credentials/{{john-deere-credentials-id}}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/john-deere-credentials/{{john-deere-credentials-id}}'
  ```

  </TabItem>
</Tabs>

### `GET  john-deere-credentials/`

Gets all the John Deere credentials and return a JSON response with the credentials of the Leaf Users.

```json
[{
    "id": "UUID",
    "apiOwnerUsername": "help@withlife.io",
    "clientKey": "str",
    "clientSecret": "str",
    "tokenId": "str",
    "tokenSecretKey": "str"
}]
```

```json
{
    "id": "UUID",
    "apiOwnerUsername": "help@withlife.io",
    "clientKey": "str",
    "clientSecret": "str",
    "tokenId": "str",
    "tokenSecretKey": "str"
}
```

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/john-deere-credentials/'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    id: "UUID",
    name: "str",
    email: "help@withleaf.io",
    phone: "str",
    address: "str"
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

  endpoint = 'https://{{url}}/services/usermanagement/api/john-deere-credentials/'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/john-deere-credentials/'
  ```

  </TabItem>
</Tabs>

### `GET climate-field-credentials/{id}`

Get the credentials associated with the Leaf User id and returns a JSON response as the following.

```json
{
    "id": "4ddc9985-b0e9-4fe3-be36-043701fb32b0",
    "apiOwnerUsername": "gustavo.pereira@leafagriculture.com.br",
    "clientId": "",
    "clientSecret": "",
    "apiKey": "",
    "refreshToken": ""
}
```
<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/climate-field-view-credentials/{{cfv-credentials-id}}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    id: "UUID",
    name: "str",
    email: "help@withleaf.io",
    phone: "str",
    address: "str"
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

  endpoint = 'https://{{url}}/services/usermanagement/api/climate-field-view-credentials/{{cfv-credentials-id}}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/climate-field-view-credentials/{{cfv-credentials-id}}'
  ```

  </TabItem>
</Tabs>

### `GET climate-field-credentials/`

Gets all the climate field credentials and returns a JSON response as the following.

[
    {
        "id": "UUID",
        "apiOwnerUsername": "help@withleaf.io",
        "clientId": "str",
        "clientSecret": "str",
        "apiKey": "str",
        "refreshToken": "str"
    }
]

```json
{
    "id": "4ddc9985-b0e9-4fe3-be36-043701fb32b0",
    "apiOwnerUsername": "gustavo.pereira@leafagriculture.com.br",
    "clientId": "",
    "clientSecret": "",
    "apiKey": "",
    "refreshToken": ""
}
```
<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/climate-field-view-credentials/'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    id: "UUID",
    name: "str",
    email: "help@withleaf.io",
    phone: "str",
    address: "str"
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

  endpoint = 'https://{{url}}/services/usermanagement/api/climate-field-view-credentials/'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/climate-field-view-credentials/'
  ```

  </TabItem>
</Tabs>

:::tip
Please don't hesitate to [contact][contact] us to schedule a demo, ask a question, request sample data, or suggest a feature!
:::

[contact]: mailto:connect@leafagriculture.com.br
