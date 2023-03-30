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
[7]: #get-a-product
[8]: #get-operation-matching-products


## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/beta/api
```

See below the REST resources and their endpoints available in this service.

## Products (Beta)

### Resources

This feature has the following endpoints available:

| Description                            | Endpoints                                                                                                   |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [Get all products][2]                  | <span class="badge badge--success">GET</span> `/users/{leafUserId}/products`                                |
| [Get all products normalized][3]       | <span class="badge badge--success">GET</span> `/users/products`                                             |
| [Search for products][4]               | <span class="badge badge--success">GET</span> `/users/{leafUserId}/products/search`                         |
| [Get a product][7]                     | <span class="badge badge--success">GET</span> `/users/products/{id}`                                        |
| [Get a operation matching products][8] | <span class="badge badge--success">GET</span> `/users/users/{leafUserId}/products/matching/operations/{id}` |


### Get all products

&nbsp<span class="badge badge--success">GET</span>  `/users/{leafUserId}/products`

List the existing products used by a leaf user.

| Parameter (to filter by)    | Values                                                                                                                                                                                    |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`                      | part of the product name                                                                                                                                                                  |
| `page`                      | an integer specifying the page being fetched (default is 0)                                                                                                                               |
| `size`                      | an integer specifying the size of the page (max is 100)                                                                                                                                   |
| `sort`                      | the sorting order of the results; can be multivalue, the former takes precedence over the later; can also specify order as `asc` or `desc` with `asc` being the default. Example: id,desc |


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


### Search for products

&nbsp<span class="badge badge--success">GET</span>  `/beta/products/search`

Search for products by name, partial values are supported.


| Parameter (to filter by) | Values                                                          |
|--------------------------|-----------------------------------------------------------------|
| `name`                   | part of the product name to be searched **(required)**          |
| `maxResults`             | the number of results that should be returned (max value is 20) |


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
    "id": "fb9f237d-456d-4c6e-b5f6-ed7be5e536a8",
    "name": "Roundhouse 1 EC",
    "registration": "34704-1129",
    "distributor": null,
    "registrant": "Loveland Products, Inc.",
    "productType": null,
    "formulationType": null,
    "labelProvider": "AGRIAN",
    "productPageUrl": "https://www.agrian.com/labelcenter/results.cfm?d=47856",
    "labels": []
  },
  {
    "id": "4b3d011f-dedb-4b5e-8209-a2b3badaf383",
    "name": "Roundup PowerMAX Herbicide",
    "registration": "524-549",
    "distributor": null,
    "registrant": "Bayer CropScience",
    "productType": null,
    "formulationType": null,
    "labelProvider": "AGRIAN",
    "productPageUrl": "https://www.agrian.com/labelcenter/results.cfm?d=85214",
    "labels": []
  },
  ....
]
```

### Get a product

&nbsp<span class="badge badge--success">GET</span>  `/beta/products/{id}`

Get a product by its id. The data is obtained from different product databases.

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

  const endpoint ='https://api.withleaf.io/services/beta/api/products/{id}'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/users/products/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/products/{id}'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
    "id": "4b3d011f-dedb-4b5e-8209-a2b3badaf383",
    "name": "Roundup PowerMAX Herbicide",
    "registration": "524-549",
    "distributor": null,
    "registrant": "Bayer CropScience",
    "productType": null,
    "formulationType": null,
    "labelProvider": "AGRIAN",
    "productPageUrl": "https://www.agrian.com/labelcenter/results.cfm?d=85214",
    "labels": []
}
```

### Get matching products from an operation

&nbsp<span class="badge badge--success">GET</span>  `/users/{leafUserId}/products/matching/operations/{id}`

Get the standard products that best match the products from a Field Operation. Information such as registration number and labels can be obtained from [this endpoint][7] using the `id`.

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

  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/products/matching/operations/{id}'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/products/matching/operations/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/products/matching/operations/{id}'
  ```

  </TabItem>
</Tabs>


#### Response

```json
[
  {
    "id": "37159c45-4c1f-48e4-aa87-90b34cc6e789",
    "name": "ams",
    "productId": "e5b91778-0714-4e1f-850c-b458d1bdc7ed",
    "matchDetails": {
      "status": "PREDICTED",
      "rate": 14.354036
    }
  },
  {
    "id": "7fb70242-498b-42c1-92c3-a7d2361d2125",
    "name": "counter",
    "productId": "a85c1d0d-b673-46aa-a3a3-31cb65f57598",
    "matchDetails": {
      "status": "PREDICTED",
      "rate": 8.6226015
    }
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
