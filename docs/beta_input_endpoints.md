---
title: Beta > Input Endpoints
description: Beta - Input Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: #get-all-products
[3]: #get-all-products-normalized
[4]: #search-for-products
[5]: #get-all-varieties
[6]: #get-all-varieties-normalized

## About
All HTTP methods should be prepended by     this service's endpoint:

```
https://api.withleaf.io/services/beta/api
```

See below the REST resources and their endpoints available in this service.

## Products (Beta)

### Resources

This feature has the following endpoints available:

Description | Endpoints
--- | ---
[Get all products][2] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/products`
[Get all products normalized][3] | <span class="badge badge--success">GET</span> `/users/products`
[Search for products][4] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/products/search`

### Get all products

&nbsp<span class="badge badge--success">GET</span>  `/users/{leafUserId}/products`

List the existing products used by a leaf user.

| Parameter (to filter by) | Values
| - | - |
| `name`| part of the product name

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)
- `sort`, the sorting order of the results; can be multivalue, the former takes precedence over the later; can also specify order as `asc` or `desc` with `asc` being the default. Example: id,desc

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

The response is a JSON array containing products records.

```json
[
  {
    "id": "8e0de5a5-0888-41f3-b9af-5a03c27b04a0",
    "name": "RoundUp",
    "leafUserId": "349386f2-762a-4bcb-8675-3c97efa6d462"
  },
  {
    "id": "a885307b-e528-4e6b-a76b-a75c175f17c1",
    "name": "Atrazine",
    "leafUserId": "349386f2-762a-4bcb-8675-3c97efa6d462"
  }
]
```

### Get all products normalized

&nbsp<span class="badge badge--success">GET</span>  `/users/products`

Returns a list of the unique products with normalized name to lower case and how many related files exists.

| Parameter (to filter by) | Values
| - | - |
| `leafFileId` | UUID |
| `normalizedName`| part of the product name

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

The response is a JSON array with total of files that has the products that match the search criteria.

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

### Search for products

&nbsp<span class="badge badge--success">GET</span>  `/beta/products/search`

Search for products by name, partial values are supported.

| Parameter (to filter by) | Values
| - | - |
| `leafFileId` | UUID |
| `search`| part of the product name to be searched
| `maxResults`| the number of results that should be returned (max value is 20)

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

The response is a JSON array the products that match query.

```json
[
  {
    "name": "Roundhouse 1 EC",
    "registration": "34704-1129",
    "distributor": null,
    "registrant": "Loveland Products, Inc.",
    "productType": null,
    "formulationType": null,
    "labelProvider": "AGRIAN"
  },
  {
    "name": "Roundup PowerMAX Herbicide",
    "registration": "524-549",
    "distributor": null,
    "registrant": "Bayer CropScience",
    "productType": null,
    "formulationType": null,
    "labelProvider": "AGRIAN"
  },
  ....
]
```
## Varieties (Beta)

### Resources

This feature has the following endpoints available:

Description | Endpoints
--- | ---
[Get all varieties][5] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/varieties`
[Get all varieties normalized][6] | <span class="badge badge--success">GET</span> `/users/varieties`

### Get All Varieties

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/varieties`

Get all varieties from a leaf user.


| Parameter (to filter by) | Values
| - | - |
| `name` | text |
| `crops` | text |

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)
- `sort`, the sorting order of the results; can be multivalue, the former takes precedence over the later; can also specify order as `asc` or `desc` with `asc` being the default. Example: id,desc


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
    "id": "680ff073-18d0-4951-ba69-b2ca0b098bc3",
    "normalizedName": "corn variety 2",
    "leafFilesCount": 2,
    "crops": [
      "corn"
    ]
  },
  {
    "id": "1544de06-682d-4549-92a3-a06b2ccdc96d",
    "normalizedName": "corn variety 2 (1)",
    "leafFilesCount": 1,
    "crops": [
      "corn"
    ]
  }
]
```


### Get all varieties normalized

&nbsp<span class="badge badge--success">GET</span>  `/users/varieties`

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

  const endpoint ='https://api.withleaf.io/services/beta/api/users/varieties'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/users/varieties'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/varieties'
  ```

  </TabItem>
</Tabs>

#### Response

The response is a JSON array showing the existing varieties and how many related files exists.

```json
[
  {
    "id": "b3b6f0b8-b546-4eaa-b0f9-a82593699e84",
    "normalizedName": "corn",
    "leafFilesCount": 28,
    "crops": [
      "corn"
    ]
  },
  {
    "id": "9dc82cdc-8364-4bbd-8a0b-16d96322e71c",
    "normalizedName": "soybean variety 3",
    "leafFilesCount": 84,
    "crops": [
      "soybeans"
    ]
  }
]
```
