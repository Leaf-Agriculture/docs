---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

#### Leaf Users Resources

Form of a Leaf User resource:

```json
{
  "id": "UUID",
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
POST   /users
PUT    /users
DELETE /users/{id}
```

#### John Deere Credentials

Form of a John Deere Credentials resource:

```json
{
  "id": "UUID",
  "clientKey": "str",
  "clientSecret": "str",
  "tokenId": "str",
  "tokenSecretKey": "str"
}
```

Endpoints:

```
GET    /john-deere-credentials/{id}
GET    /john-deere-credentials
POST   /john-deere-credentials
DELETE /john-deere-credentials/{id}
```

#### Climate FieldView Credentials

Form of a Climate FieldView Credentials resource:

```json
{
  "id": "UUID",
  "clientId": "str",
  "clientSecret": "str",
  "apiKey": "str",
  "refreshToken": "str"
}
```

Endpoints:

```
GET    /climate-field-view-credentials/{id}
GET    /climate-field-view-credentials
POST   /climate-field-view-credentials
DELETE /climate-field-view-credentials/{id}
```

#### Trimble Credentials

Form of a Trimble Credentials resource:

```json
{
  "id": "UUID",
  "userName": "str",
  "password": "str",
  "applicationName": "str",
  "serviceIdentityId": "str"
}
```

Endpoints:

```
GET    /trimble-credentials/{id}
GET    /trimble-credentials
POST   /trimble-credentials
DELETE /trimble-credentials/{id}
```

#### CNHI Credentials

Form of a CNHI Credentials resource:

```json
{
  "id": "UUID",
  "clientId": "str",
  "clientSecret": "str",
  "refreshToken": "str"
}
```

Endpoints:

```
GET    /cnhi-credentials/{id}
GET    /cnhi-credentials
POST   /cnhi-credentials
DELETE /cnhi-credentials/{id}
```

---

## Endpoints

### `GET /users/{id}`
Get a Leaf User by its id.

#### Response
A Leaf User as a JSON object.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{id}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{id}'
  ```

  </TabItem>
</Tabs>


### `GET /users`
Get all Leaf Users.

#### Response
A JSON array containing Leaf Users.


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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users'
  ```

  </TabItem>
</Tabs>


### `POST /users`
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
A Leaf User with the id assigned to it and it's credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://api.withleaf.io/services/usermanagement/api/users'
  ```

  </TabItem>
</Tabs>


### `PUT /users`
Edits an existing Leaf User by submitting a new one.

#### Request body

```json
{
  "id": "UUID",
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str",
}
```

Note that if the existing resource has credentials and you don't include them
in the body, the new Leaf User will have no credentials. Said that, for keeping
the credentials or updating them, include in the JSON above an entry like this:

```json
  "johnDeereCredentials": {
    "id": "UUID"
  }
```

#### Response
A Leaf User with the id assigned to it and it's credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    id: "UUID",
    name: "str",
    email: "help@withleaf.io",
    phone: "str",
    address: "str"
  }

  axios.put(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.put(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://api.withleaf.io/services/usermanagement/api/users'
  ```

  </TabItem>
</Tabs>


### `DELETE /users/{id}`
Deletes an existing Leaf User by id.


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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{id}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://api.withleaf.io/services/usermanagement/api/users/{id}'
  ```

  </TabItem>
</Tabs>


### `GET  /john-deere-credentials/{id}`

Get the John Deere credentials of the user based own his id and returns a JSON with the credentials.


#### Response

```json
{
    "id": "UUID",
    "clientKey": "str",
    "clientSecret": "str",
    "tokenId": "str",
    "tokenSecretKey": "str"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/john-deere-credentials/{id}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/john-deere-credentials/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/john-deere-credentials/{id}'
  ```

  </TabItem>
</Tabs>


### `GET  /john-deere-credentials`

Gets all John Deere Credentials.

#### Response

```json
[
  {
    "id": "UUID",
    "clientKey": "str",
    "clientSecret": "str",
    "tokenId": "str",
    "tokenSecretKey": "str"
  }
]
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/john-deere-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/john-deere-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/john-deere-credentials'
  ```

  </TabItem>
</Tabs>


### `POST /john-deere-credentials`

Create a John Deere credential for the Leaf User.

#### Request body

```json
{
  "clientKey": "str",
  "clientSecret": "str",
  "tokenId": "str",
  "tokenSecretKey": "str"
}
```

#### Response
A John Deere Credentials object with the id assigned to it.

```json
{
  "id": "UUID",
  "clientKey": "str",
  "clientSecret": "str",
  "tokenId": "str",
  "tokenSecretKey": "str"
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

  const endpoint = 'https://{{url}}/services/usermanagement/api/john-deere-credentials'
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

  endpoint = 'https://{{url}}/services/usermanagement/api/john-deere-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/john-deere-credentials'
  ```

  </TabItem>
</Tabs>


### `DELETE  john-deere-credentials/{id}`

Delete a John Deere credentials by id.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/john-deere-credentials/{id}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/john-deere-credentials/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/john-deere-credentials/{id}'
  ```

  </TabItem>
</Tabs>


### `GET climate-field-credentials/{id}`

Get a Climate Field View Credentials object by its id.

#### Response

```json
{
  "id": "UUID",
  "clientId": "",
  "clientSecret": "",
  "apiKey": "",
  "refreshToken": ""
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/climate-field-view-credentials/{id}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/climate-field-view-credentials/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/climate-field-view-credentials/{id}'
  ```

  </TabItem>
</Tabs>

### `GET /climate-field-credentials`

Gets all the Climate Field View credentials.

#### Response

```json
[
  {
    "id": "UUID",
    "clientId": "",
    "clientSecret": "",
    "apiKey": "",
    "refreshToken": ""
  }
]
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/climate-field-view-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/climate-field-view-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/climate-field-view-credentials'
  ```

  </TabItem>
</Tabs>


### `DELETE /climate-field-view-credentials/{id}`
Deletes a "Climate Field View Credentials" by id.


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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/climate-field-view-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/climate-field-view-credentials/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.post(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/climate-field-view-credentials/{id}'
  ```

  </TabItem>
</Tabs>


### `POST /climate-field-credentials`
Create a Climate Field View credential for the Leaf User.

#### Request body

```json
{
  "id": "UUID",
  "clientId": "str",
  "clientSecret": "str",
  "apiKey": "str",
  "refreshToken": "str"
}
```

#### Response

A Leaf User with the id assigned to it.

```json
{
   "id": "UUID",
   "clientKey": "str",
   "clientSecret": "str",
   "tokenId": "str",
   "tokenSecretKey": "str"
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

  const endpoint = 'https://{{url}}/services/usermanagement/api/climate-field-view-credentials'
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

  endpoint = 'https://{{url}}/services/usermanagement/api/climate-field-view-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/climate-field-view-credentials'
  ```

  </TabItem>
</Tabs>


### `GET /trimble-credentials/{id}`

Get a "Trimble Credentials" resource by its id.

#### Response
A "Trimble Credentials" resource as a JSON.


<Tabs
  defaultValue="sh"
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

  const endpoint = 'https://a.agrigate.io/services/usermanagement/api/trimble-credentials/{id}'
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

  endpoint = 'https://a.agrigate.io/services/usermanagement/api/trimble-credentials/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/usermanagement/api/trimble-credentials/{id}'
  ```

  </TabItem>
</Tabs>


### `GET  /trimble-credentials`

Gets all Trimble Credentials.

#### Response
A JSON array with Trimble Credentials.


<Tabs
  defaultValue="sh"
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

  const endpoint = 'https://a.agrigate.io/services/usermanagement/api/trimble-credentials'
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

  endpoint = 'https://a.agrigate.io/services/usermanagement/api/trimble-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/usermanagement/api/trimble-credentials'
  ```

  </TabItem>
</Tabs>


### `POST /trimble-credentials`
Create a "Trimble Credentials" for the Leaf User.

#### Request body
A "Trimble Credentials" without id.

```json
{
  "userName": "str",
  "password": "str",
  "applicationName": "str",
  "serviceIdentityId": "str"
}
```

#### Response
A "Trimble Credentials" with the id assigned to it.

<Tabs
  defaultValue="sh"
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

  const endpoint = 'https://{{url}}/services/usermanagement/api/trimble-credentials'
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

  endpoint = 'https://{{url}}/services/usermanagement/api/trimble-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/trimble-credentials'
  ```

  </TabItem>
</Tabs>


### `DELETE trimble-credentials/{id}`
Delete a Trimble Credentials resource by id.

<Tabs
  defaultValue="sh"
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

  const endpoint = 'https://a.agrigate.io/services/usermanagement/api/trimble-credentials/{id}'
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

  endpoint = 'https://a.agrigate.io/services/usermanagement/api/trimble-credentials/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/usermanagement/api/trimble-credentials/{id}'
  ```

  </TabItem>
</Tabs>


### `GET /cnhi-credentials/{id}`

Get a "CNHI Credentials" resource by its id.

#### Response
A "CNHI Credentials" resource as a JSON.


<Tabs
  defaultValue="sh"
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

  const endpoint = 'https://a.agrigate.io/services/usermanagement/api/cnhi-credentials/{id}'
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

  endpoint = 'https://a.agrigate.io/services/usermanagement/api/cnhi-credentials/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/usermanagement/api/cnhi-credentials/{id}'
  ```

  </TabItem>
</Tabs>


### `GET /cnhi-credentials`

Gets all CNHI Credentials.

#### Response
A JSON array with CNHI Credentials.


<Tabs
  defaultValue="sh"
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

  const endpoint = 'https://a.agrigate.io/services/usermanagement/api/cnhi-credentials'
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

  endpoint = 'https://a.agrigate.io/services/usermanagement/api/cnhi-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/usermanagement/api/cnhi-credentials'
  ```

  </TabItem>
</Tabs>


### `POST /cnhi-credentials`
Create a "CNHI Credentials" for the Leaf User.

#### Request body
A "CNHI Credentials" without id.

```json
{
  "clientId": "",
  "clientSecret": "",
  "refreshToken": ""
}
```

#### Response
A "CNHI Credentials" with the id assigned to it.

<Tabs
  defaultValue="sh"
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

  const endpoint = 'https://{{url}}/services/usermanagement/api/cnhi-credentials'
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

  endpoint = 'https://{{url}}/services/usermanagement/api/cnhi-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/cnhi-credentials'
  ```

  </TabItem>
</Tabs>


### `DELETE cnhi-credentials/{id}`
Delete a CNHI Credentials resource by id.

<Tabs
  defaultValue="sh"
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

  const endpoint = 'https://a.agrigate.io/services/usermanagement/api/cnhi-credentials/{id}'
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

  endpoint = 'https://a.agrigate.io/services/usermanagement/api/cnhi-credentials/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/usermanagement/api/cnhi-credentials/{id}'
  ```

  </TabItem>
</Tabs>
:::tip
Please don't hesitate to [contact][contact] us to schedule a demo, ask a question, request sample data, or suggest a feature!
:::



[contact]: mailto:help@withleaf.io
