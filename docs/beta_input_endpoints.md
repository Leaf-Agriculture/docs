---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: #get-all-varieties
[3]: #get-all-products


## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/beta/api/input
```

See below the REST resources and their endpoints available in this service.

## Input (BETA)

### Input Resources

This feature has the following endpoints available:

Description | Endpoints
--- | ---
[Get all Varieties][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/varieties`
[Get all Products][2] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/products`


### Get All Varieties

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/varieties`

Get all varieties from a leaf user.

#### Example:
| Parameter (to filter by) | Values
| - | - |
| `name` | text |
| `crops` |  array text (["str, str"])|

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)
- `sort`, the sorting order of the results; can be multivalue, the former takes precedence over the later; can also specify order as `asc` or `desc` with `asc` being the default. Example: id,desc

For more request examples see [Leaf Postman collection](https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection)

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

  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/varieties'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/varieties'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/varieties'
  ```

  </TabItem>
</Tabs>

#### Response

The response is a json list with all the varieties

```json
[
  {
    "id": "UUID",
    "leafUserId": "UUID",
    "name": "str",
    "crops": "[str, str]"
  },
  {
    "id": "UUID",
    "leafUserId": "UUID",
    "name": "str",
    "crops": "[str, str]"
  }
]
```

### Get All Products
&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/products`

Get all products from a leaf user.

#### Example:
| Parameter (to filter by) | Values
| - | - |
| `name` | text |
You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)
- `sort`, the sorting order of the results; can be multivalue, the former takes precedence over the later; can also specify order as `asc` or `desc` with `asc` being the default. Example: id,desc

For more request examples see [Leaf Postman collection](https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection)

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

The response is a json list with all the products

```json
[
  {
    "id": "UUID",
    "leafUserId": "UUID",
    "name": "str"
  },
  {
    "id": "UUID",
    "leafUserId": "UUID",
    "name": "str"
  }
]
```
[contact]: mailto:help@withleaf.io
