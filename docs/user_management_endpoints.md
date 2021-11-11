---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: #get-usersleafuseridjohn-deere-credentials
[2]: #post-usersleafuseridjohn-deere-credentials
[3]: #delete-usersleafuseridjohn-deere-credentials
[4]: #get-usersleafuseridclimate-field-view-credentials
[5]: #post-usersleafuseridclimate-field-view-credentials
[6]: #delete-usersleafuseridclimate-field-view-credentials
[7]: #get-usersleafuseridtrimble-credentials
[8]: #post-usersleafuseridtrimble-credentials
[9]: #delete-usersleafuseridtrimble-credentials
[10]: #get-usersleafuseridcnhi-credentials
[11]: #post-usersleafuseridcnhi-credentials
[12]: #delete-usersleafuseridcnhi-credentials
[13]: #get-usersleafuseridagleader-credentials
[14]: #post-usersleafuseridagleader-credentials
[15]: #delete-usersleafuseridagleader-credentials

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
  "trimbleCredentials":  {"Object"},
  "cnhiCredentials":  {"Object"},
  "johnDeereCredentials":  {"Object"},
  "ravenCredentials":  {"Object"},
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
  "status": "str",
  "clientKey": "str",
  "clientSecret": "str",
  "tokenId": "str",
  "tokenSecretKey": "str",
  "accessToken": "str",
  "refreshToken": "str"
}
```

Endpoints:

```
GET    /users/{leafUserId}/john-deere-credentials
POST   /users/{leafUserId}/john-deere-credentials
DELETE /users/{leafUserId}/john-deere-credentials
```

#### Climate FieldView Credentials

Form of a Climate FieldView Credentials resource:

```json
{
  "status": "str",
  "clientId": "str",
  "clientSecret": "str",
  "apiKey": "str",
  "accessToken": "str",
  "refreshToken": "str"
}
```

Endpoints:

```
GET    /users/{leafUserId}/climate-field-view-credentials
POST   /users/{leafUserId}/climate-field-view-credentials
DELETE /users/{leafUserId}/climate-field-view-credentials
```

#### Trimble Credentials

Form of a Trimble Credentials resource:

```json
{
  "status": "str",
  "userName": "str",
  "password": "str",
  "applicationName": "str",
  "serviceIdentityId": "str"
}
```

Endpoints:

```
GET    /users/{leafUserId}/trimble-credentials
POST   /users/{leafUserId}/trimble-credentials
DELETE /users/{leafUserId}/trimble-credentials
```

#### CNHI Credentials

Form of a CNHI Credentials resource:

```json
{
  "status": "str",
  "clientId": "str",
  "clientSecret": "str",
  "subscriptionKey": "str",
  "refreshToken": "str",
  "clientEnvironment": "STAGE or PRODUCTION"
}
```

Endpoints:

```
GET    /users/{leafUserId}/cnhi-credentials
POST   /users/{leafUserId}/cnhi-credentials
DELETE /users/{leafUserId}/cnhi-credentials
```

#### Raven Credentials

Form of a Raven Credentials resource:

```json
{
  "accessToken": "str",
  "refreshToken": "str",
  "clientId": "str",
  "clientSecret": "str",
  "status": "str" 
}
```

Endpoints:

```
GET    /users/{leafUserId}/raven-credentials
POST   /users/{leafUserId}/raven-credentials
DELETE /users/{leafUserId}/raven-credentials
```

#### AgLeader Credentials

Form of an AgLeader Credentials resource:

```json
{
  "accessToken": "str",
  "refreshToken": "str",
  "privateKey": "str",
  "publicKey": "str",
  "status": "str" 
}
```

Endpoints:

```
GET    /users/{leafUserId}/agleader-credentials
POST   /users/{leafUserId}/agleader-credentials
DELETE /users/{leafUserId}/agleader-credentials
```


#### Raven Slingshot Credentials

Form of a Raven Slingshot Credentials resource:

```json
{
  "apiKey": "str",
  "accessKey": "str",
  "sharedSecret": "str",
  "status": "str" 
}
```

Endpoints:

```
GET    /users/{leafUserId}/raven-slingshot-credentials
POST   /users/{leafUserId}/raven-slingshot-credentials
DELETE /users/{leafUserId}/raven-slingshot-credentials
```

---

## User Endpoints

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

  ```shell
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

  ```shell
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
    name: "str",
    email: "help@withleaf.io",
    phone: "str",
    address: "str"
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

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}' \
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

  axios.put(endpoint, data, { headers })
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
    'id': "UUID",
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

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "id": "UUID", name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}' \
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

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{id}'
  ```

  </TabItem>
</Tabs>


## John Deere Credentials Endpoints

### `GET /users/{leafUserId}/john-deere-credentials`

Get the John Deere credentials of the Leaf User based on its id and returns a JSON with the credentials. If during background processing we detect that this credential is no longer valid, the value of the status will be changed.


#### Response

```json
{
    "clientKey": "str",
    "clientSecret": "str",
    "tokenId": "str",
    "tokenSecretKey": "str",
    "accessToken": "str",
    "refreshToken": "str",
    "status": "str"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  ```

  </TabItem>
</Tabs>


### `POST /users/{leafUserId}/john-deere-credentials`

Create a John Deere credentials for the Leaf User.

#### Request body

```json
{
  "clientKey": "str",
  "clientSecret": "str",
  "accessToken": "str",
  "refreshToken": "str"
}
```

#### Response
A John Deere credentials with status.

```json
{
  "clientKey": "str",
  "clientSecret": "str",
  "tokenId": "str",
  "tokenSecretKey": "str",
  "accessToken": "str",
  "refreshToken": "str",
  "status": "str",
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "clientKey": "str",
    "clientSecret": "str",
    "accessToken": "str",
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "clientKey": "str",
    "clientSecret": "str",
    "accessToken": "str",
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
      -d '{"clientKey": "str","clientSecret": "str","accessToken": "str","refreshToken": "str"}' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  ```

  </TabItem>
</Tabs>


### `DELETE /users/{leafUserId}/john-deere-credentials`

Delete Leaf User's John Deere credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/john-deere-credentials'
  ```

  </TabItem>
</Tabs>


## Climate Field View Credentials Endpoints

### `GET /users/{leafUserId}/climate-field-view-credentials`

Get a Climate Field View credentials object by its id. If during background processing we detect that this credential is no longer valid, the value of the status will be changed.

#### Response

```json
{
  "clientId": "str",
  "clientSecret": "str",
  "apiKey": "str",
  "refreshToken": "str",
  "status": "str"
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


### `POST /users/{leafUserId}/climate-field-view-credentials`
Create a Climate Field View credentials for the Leaf User.

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

A Climate Field View credential with status.

```json
{
   "clientKey": "str",
   "clientSecret": "str",
   "tokenId": "str",
   "tokenSecretKey": "str",
   "status": "str"
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

### `DELETE /users/{leafUserId}/climate-field-view-credentials`

Delete Leaf User's Climate Field View credentials.

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


## Trimble Credentials Endpoints

### `GET /users/{leafUserId}/trimble-credentials`

Get the Trimble credentials of the Leaf User based on its id and returns a JSON with the credentials.

#### Response
A Trimble credentials resource as a JSON.


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


### `POST /users/{leafUserId}/trimble-credentials`
Create a Trimble credentials for the Leaf User.

#### Request body
A Trimble credentials.

```json
{
  "userName": "str",
  "password": "str",
  "applicationName": "str",
  "serviceIdentityId": "str"
}
```

#### Response
A Trimble credentials with status.

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


### `DELETE /users/{leafUserId}/trimble-credentials`
Delete a Leaf User's Trimble credentials.

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


## CNHI Credentials Endpoints

### `GET /users/{leafUserId}/cnhi-credentials`

Get the CNHI credentials of the Leaf User based on its id and returns a JSON with the credentials.

#### Response
A CNHI credentials resource as a JSON.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/cnhi-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/cnhi-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/cnhi-credentials'
  ```

  </TabItem>
</Tabs>


### `POST /users/{leafUserId}/cnhi-credentials`
Create a CNHI credentials for the Leaf User.

#### Request body
A CNHI credentials.

```json
{
  "clientId": "str",
  "clientSecret": "str",
  "subscriptionKey": "str",
  "refreshToken": "str",
  "clientEnvironment": "STAGE or PRODUCTION"
}
```

#### Response
A CNHI Credentials with status.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/cnhi-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "clientId": "str",
    "clientSecret": "str",
    "subscriptionKey": "str",
    "refreshToken": "str",
    "clientEnvironment": "STAGE or PRODUCTION"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/cnhi-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "clientId": "str",
    "clientSecret": "str",
    "subscriptionKey": "str",
    "refreshToken": "str",
    "clientEnvironment": "STAGE or PRODUCTION"
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
      -d '{"clientId": "str", "clientSecret": "str", "subscriptionKey": "str", "refreshToken": "str", "clientEnvironment": "STAGE or PRODUCTION"}' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/cnhi-credentials'
  ```

  </TabItem>
</Tabs>


### `DELETE /users/{leafUserId}/cnhi-credentials`
Delete Leaf User's CNHI credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/cnhi-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/cnhi-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/cnhi-credentials'
  ```

  </TabItem>
</Tabs>


## Raven Credentials Endpoints

### `GET /users/{leafUserId}/raven-credentials`

Get the Raven credentials of the Leaf User based on its id and returns a JSON with the credentials.

#### Response
A Raven credentials resource as a JSON.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-credentials'
  ```

  </TabItem>
</Tabs>


### `POST /users/{leafUserId}/raven-credentials`
Create a Raven credentials for the Leaf User.

#### Request body
A Raven credentials.

```json
{
  "clientId": "str",
  "clientSecret": "str",
  "refreshToken": "str"
}
```

#### Response
A Raven Credentials with status.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "clientId": "str",
    "clientSecret": "str",
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "clientId": "str",
    "clientSecret": "str",
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
-H 'Content-Type: application/json' \
-d '{ "clientId": "str","clientSecret": "str","refreshToken":"str"}' \
'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-credentials'
  ```

  </TabItem>
</Tabs>

### `DELETE /users/{leafUserId}/raven-credentials`
Delete Leaf User's Raven credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/raven-credentials'
  ```

  </TabItem>
</Tabs>

:::tip
Please don't hesitate to [contact][contact] us to schedule a demo, ask a question, request sample data, or suggest a feature!
:::


## AgLeader Credentials Endpoints

### `GET /users/{leafUserId}/agleader-credentials`

Get the AgLeader credentials of the Leaf User based on its id and returns a JSON with the credentials.

#### Response
A AgLeader credentials resources as a JSON. 

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  ```

  </TabItem>
</Tabs>

### `POST /users/{leafUserId}/agleader-credentials`
Create a AgLeader credentials for the Leaf User. 

#### Request body

A AgLeader credentials.

```json
{
  "accessToken": "str",
  "refreshToken": "str",
  "publicKey": "str",
  "privateKey": "str",
}
```

#### Response 

A Raven Credentials with status.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "accessToken": "str", 
    "refreshToken": "str", 
    "privateKey": "str", 
    "publicKey": "str"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "accessToken": "str", 
    "refreshToken": "str", 
    "privateKey": "str", 
    "publicKey": "str"
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
-d '{ "accessToken": "str","refreshToken": "str","privateKey":"str", "publicKey":"str"}' \
'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  ```

  </TabItem>
</Tabs>

### `DELETE /users/{leafUserId}/agleader-credentials`
Delete Leaf User's AgLeader credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/agleader-credentials'
  ```

  </TabItem>
</Tabs>


## Raven Slingshot Credentials Endpoints

### `GET /users/{leafUserId}/raven-slingshot-credentials`

Get the Raven Slingshot credentials of the Leaf User based on its id and returns a JSON with the credentials.

#### Response

A Raven Slingshot credentials resources as a JSON. 

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

### `POST /users/{leafUserId}/raven-slingshot-credentials`

Create a Raven Slingshot credentials for the Leaf User. 

#### Request body

A Raven Slingshot credentials.

```json
{
    "apiKey": "str",
    "accessKey": "str",
    "sharedSecret": "str"
}
```

#### Response 

A Raven Credentials with status.

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

### `DELETE /users/{leafUserId}/raven-slingshot-credentials`

Delete Leaf User's Raven Slingshot credentials.

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

[contact]: mailto:help@withleaf.io
