---
title: Leaf User Endpoints
description: Leaf User - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: #get-a-leaf-user
[2]: #get-all-leaf-users
[3]: #create-a-leaf-user
[4]: #update-a-leaf-user
[5]: #delete-a-leaf-user

[6]: #providers-credentials-endpoints

[7]: /docs/credentials_john_deere
[8]: /docs/credentials_cfv
[9]: /docs/credentials_trimble
[10]: /docs/credentials_cnhi
[11]: /docs/credentials_stara
[12]: /docs/credentials_raven
[13]: /docs/credentials_agleader
[14]: /docs/credentials_raven_slingshot
[15]: /docs/credentials_sentera
[16]: /docs/credentials_agvance


## About
To briefly recap the Leaf User overview: a Leaf User is equivalent to the end user of your application (e.g. a grower). A Leaf User provides a way to keep your customers' data organized under your API owner. As a developer, you’ll need to create a Leaf User and connect the provider(s) you wish to integrate your platform with. 

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
  "climateFieldViewCredentials": {"Object"},
  "staraCredentials": {"Object"},
  "agLeaderCredentials": {"Object"},
  "ravenSlingshotCredentials": {"Object"}
}
```

Check the [providers credentials endpoints][6] for more details about the credentials object.


The following endpoints are available:

Description | Endpoints
--- | ---
[Create a Leaf User][3] | <span class="badge badge--warning">POST</span> `/users`
[Update a Leaf User][4] | <span class="badge badge--warning">PUT</span> `/users`
[Get a Leaf User][1] | <span class="badge badge--success">GET</span> `/users/{id}`
[Get all Leaf Users][2] | <span class="badge badge--success">GET</span> `/users/`
[Delete a Leaf User][5] | <span class="badge badge--danger">DELETE</span> `/users/{id}`


## User Endpoints


### Create a Leaf User
&nbsp<span class="badge badge--warning">POST</span> `/users`

Creates a Leaf User. You will need to create a Leaf User when linking a provider for the first time.

#### Request example
```json
{
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str"
}
```

Besides the four properties of the example above, once you have created
credentials for a provider like John Deere, you can add an entry like the
following. Specifying the ID of the credentials object previously created will link it to the Leaf User being created. This will enable you to start querying farm data from the provider. Check the
 [providers credentials endpoints][6] for more details about the credentials object.

```json
  "johnDeereCredentials": {
    "id": "UUID"
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

#### Response
A Leaf User with the id assigned to it and it's credentials.

```json
{
  "id": "UUID",
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str"
}
```

### Update a Leaf User

&nbsp<span class="badge badge--warning">PUT</span> `/users`

Edits an existing Leaf User by submitting a new one.

#### Request examples

```json
{
  "id": "UUID",
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str"
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

Check the [providers credentials endpoints][6] for more details about the credentials object.

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

#### Response
A Leaf User with the `id` assigned to it and it's credentials.

```json
{
  "id": "UUID",
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str"
}
```

### Get a Leaf User

&nbsp<span class="badge badge--success">GET</span> `/users/{id}`

Get a Leaf User by its `id`. This request looks up an individual Leaf User (such as a grower) and returns the details associated with their account, including provider credentials such as ID, created date and tokens. 

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

#### Response
A Leaf User as a JSON object.
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
  "climateFieldViewCredentials": {"Object"},
  "staraCredentials": {"Object"},
  "agLeaderCredentials": {"Object"},
  "ravenSlingshotCredentials": {"Object"}
}
```  
Check the [providers credentials endpoints][6] for more details about the credentials object.

### Get all Leaf Users

&nbsp<span class="badge badge--success">GET</span> `/users`

Get all Leaf Users.

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

#### Response
A JSON array containing Leaf Users.



### Delete a Leaf User

&nbsp<span class="badge badge--danger">DELETE</span> `/users/{id}`

Deletes an existing Leaf User by `id`.

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

## Providers credentials endpoints

- [John Deere][7]
- [Climate Fielview][8]
- [Trimble][9]
- [CNHi][10]
- [Stara][11]
- [Raven][12]
- [AgLeader][13]
- [Raven Slingshot][14]
- [Sentera][15]
- [AgVance][16]


:::tip
Please don't hesitate to [contact][contact] us at help@withleaf.io to schedule a demo, ask a question, request sample data, or suggest a feature!
:::

[contact]: mailto:help@withleaf.io
