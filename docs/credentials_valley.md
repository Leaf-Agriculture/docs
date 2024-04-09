---
title: Valley Credentials
description: Credentials - Valley
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-the-valley-credentials
[2]: #create-a-valley-credentials
[3]: #delete-valley-credentials



Form of a Valley Credentials resource:

```json
{
  "apid": "str",
  "initializationVector": "str",
  "key": "str",
  "username": "str",
  "password": "str"
}
```

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

**Endpoints**

Description | Endpoints
--- | ---
[Get the Valley credentials][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/valley-credentials`
[Create a Valley credentials][2] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/valley-credentials`
[Delete Valley credentials][3] | <span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/valley-credentials`


## Valley Credentials Endpoints

### Get the Valley credentials

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/valley-credentials`

<p align='justify'>

Get the Valley credentials of the Leaf User based on its id and returns a JSON with the credentials. If during background processing we detect that this credential is no longer valid, the value of the status will be changed.

</p>

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "id": "uuid",
    "status": "str",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
    "apid": "str",
    "key": "str",
    "initializationVector": "str",
    "username": "str",
}
```


### Create a Valley credentials
&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/valley-credentials`

Create a Valley credentials for the Leaf User.

#### Request body

```json
{
  "apid": "str",
  "initializationVector": "str",
  "key": "str",
  "username": "str",
  "password": "str"
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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "apid": "str",
    "initializationVector": "str",
    "key": "str",
    "username": "str",
    "password": "str"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "apid": "str",
    "initializationVector": "str",
    "key": "str",
    "username": "str",
    "password": "str"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{"apid": "str", "initializationVector": "str", "key": "str", "username": "str", "password": "str"}' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials'
  ```

  </TabItem>
</Tabs>

#### Response

A Valley credentials with status.

```json
{
    "id": "uuid",
    "status": "OK",
    "createdTime": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
    "apid": "str",
    "key": "str",
    "initializationVector": "str",
    "username": "str",
}
```


### Delete Valley credentials

&nbsp<span class="badge badge--danger">DELETE</span> `/users/{leafUserId}/valley-credentials`

Delete Leaf User's Valley credentials.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials'
  ```

  </TabItem>
</Tabs>

## Troubleshooting

With these endpoints, you can do some troubleshooting to see your credential's health.

### Events

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/valley-credentials/events`

Get the logs of the provider credential based on the LeafUserId sent.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials/events'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/valley-credentials/events'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}
      /valley-credentials/events'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "body": "string",
    "createdDate": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
    "headers": "string",
    "id": "string",
    "statusCode": "int"
  }
]
```

:::warning
The logs are available only for 30 days and once the credential is deleted or disassociated with the Leaf User, the logs are no longer available.