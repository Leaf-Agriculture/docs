---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://tools.ietf.org/html/rfc7946
[3]: #get-all-machines
[4]: #create-a-machine=
## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/beta/api
```

See below the REST resources and their endpoints available in this service.

## Products and Varieties (BETA)

### Products and Varieties Resources

This feature has the following endpoints available:

Description | Endpoints
--- | ---
[Get all products][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/products`
[Get all products normalized][2] | <span class="badge badge--success">GET</span> `/users/products`
[Search for products][3] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/products/search`
[Get all varieties][4] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/varieties`
[Get all varieties normalized][5] | <span class="badge badge--success">GET</span> `/users/varieties`

### Get all products

&nbsp<span class="badge badge--success">GET</span>  `/users/{leafUserId}/products`

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

  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/products'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```python
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/products'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/products'
  ```

  </TabItem>
</Tabs>

#### Response

The response is a JSON array containing machine records.

```json
[
  {
    "id": "fed944aa-aeb2-40ca-8f8b-1179c56812bf",
    "normalizedName": "22-0-0-6",
    "leafFilesCount": 3
  },
  {
    "id": "7bbb51ea-c937-40c9-bd0f-83ee04762068",
    "normalizedName": "c07_10gpa",
    "leafFilesCount": 16
  },
]
```

### Get all products normalized

&nbsp<span class="badge badge--success">GET</span>  `/users/products`

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

  const endpoint ='https://api.withleaf.io/services/beta/api/users/products'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```python
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/beta/api/users/products'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/products'
  ```

  </TabItem>
</Tabs>

#### Response

The response is a JSON array containing machine records.

```json
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "leafUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string"
  },
]
```

### Search for products

&nbsp<span class="badge badge--success">GET</span>  `/beta/products/search`

Get the details of machine operations files given a machine id. Some fields can be sent as query parameters to filter the machine files, such as:

| Parameter (to filter by) | Values
| - | - |
| `leafFileId` | UUID |
| `search`| part of the product name to be searched

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

  const endpoint ='https://api.withleaf.io/services/beta/api/products/search'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```python
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/beta/api/users/products/search'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/products/search'
  ```

  </TabItem>
</Tabs>

#### Response

The response is a JSON array containing machine records.

```json
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "leafUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string"
  },
]
```

[contact]: mailto:help@withleaf.io
