---
title: Beta > Input Endpoints
description: Beta - Input Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: #get-all-products
[3]: #get-summarized-products
[4]: #search-for-products
[5]: #get-all-varieties
[6]: #get-a-product
[7]: #get-matching-products-from-an-operation
[8]: #updated-product-matches
[9]: #get-product-matches-historical
[10]: https://docs.withleaf.io/docs/beta_input_endpoints#get-a-product
[11]: #get-summarized-varieties
[12]: #search-for-varieties

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/beta/api
```

See below the REST resources and their endpoints available in this service.

## Products

**Endpoints**

| Description                                  | Endpoints                                                                                                                |
|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [Get all products][2]                        | <span class="badge badge--success">GET</span> `/products`                                                                |
| [Get summarized products][3]                 | <span class="badge badge--success">GET</span> `/users/{leafUserId}/products/summary`                                     |
| [Search for products][4]                     | <span class="badge badge--success">GET</span> `/products/search`                                                         |
| [Get a product][6]                           | <span class="badge badge--success">GET</span> `/products/{id}`                                                           |
| [Get matching products from an operation][7] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/products/matching/operations/{operationId}`           |
| [Updated product matches][8]                 | <span class="badge badge--warning">PUT</span> `/products/matching/operations/{operationId}/matches/{matchId}`            |
| [Get product matches historical][9]          | <span class="badge badge--success">GET</span> `/products/matching/operations/{operationId}/matches/{matchId}/historical` |


### Get all products

&nbsp<span class="badge badge--success">GET</span>  `/products`

List of products from providers (for now only for John Deere) in a Leaf User level. This way, on this endpoint the user can search for all products that are available from traditional providers (e.g. John Deere), so here we do not include specific providers such as Agrian and CDMS.

| Parameter (to filter by) | Values                                                                                                                                                                                                                              |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `leafUserId`             | uuid of one of your users                                                                                                                                                                                                           |
| `provider`               | `JohnDeere`                                                                                                                                                                                                                         |
| `size`                   | an integer specifying the size of the page (max is 100)                                                                                                                                                                             |
| `page`                   | an integer specifying the page being fetched (default is 0)                                                                                                                                                                         |
| `sort`                   | the sorting order of the results; can be multi-value, where the first value to be passed will take priority over the next values; you can also specify the order as `asc` or `desc` with `asc` being the default. Example: id, desc |

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

  const endpoint ='https://api.withleaf.io/services/beta/api/products'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/products'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/products'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "07b3f270-8af8-11ee-b9d1-0242ac120002",
    "name": "Propiconazole",
    "registrant": "Tide International USA,Inc.",
    "productType": "Chemical",
    "labelProvider": "JohnDeere",
    "providerId": "020c55f6-8af8-11ee-b9d1-0242ac120002",
    "formulationType": "DRY",
    "leafUserId": "fb6fcda4-8af7-11ee-b9d1-0242ac120002",
    "registration": "0084229-00011-AA-0000000",
    "status": "ACTIVE",
    "carrier": true
  },
  ....
]
```


### Get summarized products

&nbsp<span class="badge badge--success">GET</span>  `/users/{leafUserId}/products/summary`

List of products extracted from machine file.

| Parameter (to filter by)    | Values                                                                                                                                                                                                                              |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`                      | part of the product name                                                                                                                                                                                                            |
| `page`                      | an integer specifying the page being fetched (default is 0)                                                                                                                                                                         |
| `size`                      | an integer specifying the size of the page (max is 100)                                                                                                                                                                             |
| `sort`                      | the sorting order of the results; can be multi-value, where the first value to be passed will take priority over the next values; you can also specify the order as `asc` or `desc` with `asc` being the default. Example: id, desc |

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

  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/products/summary'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/products/summary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/products/summary'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "leafFilesCount": 1,
    "normalizedName": "CompostX"
  },
  ....
]
```


### Search for products

&nbsp<span class="badge badge--success">GET</span>  `/products/search`

Search for products by name, partial values are supported. Agrian and CDMS products are currently available to everyone, and John Deere products from the Operation Center at the Leaf User level.  

| Parameter (to filter by) | Values                                                                             |
|--------------------------|------------------------------------------------------------------------------------|
| `name`                   | part of the product name to be searched **(required)**                             |
| `maxResults`             | the number of results that should be returned (max value is 20). The default is 10 |

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

  endpoint = 'https://api.withleaf.io/services/beta/api/products/search'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/products/search'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "7d85c556-0ac5-4f0b-b7cc-b35ac559af8f",
    "name": "CompostX",
    "registration": "00000-00-00000",
    "registrant": "Leaf Company, LLC",
    "productType": "Dry",
    "formulationType": "Dry Flowable",
    "labelProvider": "CDMS",
    "productPageUrl": "https://www.cdms.net/ldat/",
    "labels": [
      {
        "name": "meE2000.pdf",
        "url": "https://www.cdms.net/ldat/meE2000.pdf"
      },
      ....
    ],
    "activeIngredient": [
      "Urea",
      "Calcium",
      ....
    ]
  },
  {
    "id": "81ffe756-1fd0-4d97-b2ec-e33b5232f507",
    "name": "GameOn",
    "registration": "62719-724",
    "registrant": "Corteva Agriscience",
    "productType": "Dry",
    "formulationType": "Dry Flowable",
    "labelProvider": "AGRIAN",
    "productPageUrl": "https://www.agrian.com/labelcenter/results.cfm?d=21666",
    "labels": [
      {
        "name": "Label - 03-R0718",
        "url": "https://www.agrian.com/pdfs/current/Badge_X2_FungicideBactericide_Label1p.pdf"
      },
      ....
    ],
    "activeIngredient": [
      "Roundup",
      "Glyphosate",
      ....
    ]
  },
  ....
]
```

### Get a product

&nbsp<span class="badge badge--success">GET</span>  `/products/{id}`

Get a product by its id. The data is obtained from different product databases.

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

  endpoint = 'https://api.withleaf.io/services/beta/api/products/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/products/{id}'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "id": "81ffe756-1fd0-4d97-b2ec-e33b5232f507",
  "name": "GameOn",
  "registration": "62719-724",
  "registrant": "Corteva Agriscience",
  "productType": "Dry",
  "formulationType": "Dry Flowable",
  "labelProvider": "AGRIAN",
  "productPageUrl": "https://www.agrian.com/labelcenter/results.cfm?d=21666",
  "labels": [
    {
      "name": " Label - 03-R0718 ",
      "url": "https://www.agrian.com/pdfs/current/Badge_X2_FungicideBactericide_Label1p.pdf"
    },
    ....
  ]
}
```

### Get matching products from an operation

&nbsp<span class="badge badge--success">GET</span>  `/products/matching/operations/{operationId}`

Get the standard products that best match the products from a Field Operation. Information such as the registration number and labels can be obtained from [this endpoint][10] using the `id`.

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

  const endpoint ='https://api.withleaf.io/services/beta/api/products/matching/operations/{operationId}'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/products/matching/operations/{operationId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/products/matching/operations/{operationId}'
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
      "score": 14.354036
    }
  },
  {
    "id": "7fb70242-498b-42c1-92c3-a7d2361d2125",
    "name": "counter",
    "productId": "a85c1d0d-b673-46aa-a3a3-31cb65f57598",
    "matchDetails": {
      "status": "PREDICTED",
      "score": 8.6226015
    }
  },
  ....
]
```

### Updated product matches

&nbsp<span class="badge badge--warning">PUT</span> `/products/matching/operations/{id}/matches/{matchId}` 

Updated Leaf predictions or approves them.

#### Request body

To approve Leaf prediction:

```json
{
  "status": "VALIDATED"
}
```

Or, to change prediction:

```json
{
  "productId": "expectedProductID"
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

  const endpoint = 'https://api.withleaf.io/services/beta/api/products/matching/operations/{operationId}/matches/{matchId}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  
  const data = {
    status: "VALIDATED"
  }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```python
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/beta/api/products/matching/operations/{operationId}/matches/{matchId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  
  data = {
    status: "VALIDATED"
  }

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "status": "VALIDATED" }' \
      'https://api.withleaf.io/services/beta/api/products/matching/operations/{operationId}/matches/{matchId}'
  ```

  </TabItem>
</Tabs>


#### Response

```json
[
  {
    "id": "uidd-match-0001",
    "name": "Ta35",
    "productId": "uidd-prd-1001",
    "matchDetail": {
      "score": 91,
      "status": "predicted"
    }
  },
  {
    "id": "uidd-match-0002",
    "name": "Talisman",
    "productId": "uidd-prd-1003",
    "matchDetail": {
      "status": "validated"
    }
  }
]
```

### Get product matches historical

&nbsp<span class="badge badge--success">GET</span> `/products/matching/operations/{operationId}/matches/{matchId}/historical`

Get a product's change history.

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

  const endpoint ='https://api.withleaf.io/services/beta/api/products/matching/operations/{operationId}/matches/{matchId}/historical'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/products/matching/operations/{operationId}/matches/{matchId}/historical'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/products/matching/operations/{operationId}/matches/{matchId}/historical'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "productId": "uidd-prd-1002",
    "score": 99,
    "historicalTime": "2010-10-10T01:01:01"
  }
]
```

## Varieties


| Description                    | Endpoints                                                                             |
|--------------------------------|---------------------------------------------------------------------------------------|
| [Get all varieties][5]         | <span class="badge badge--success">GET</span> `/varieties`                            |
| [Get summarized varieties][11] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/varieties/summary` |
| [Search for varieties][12]     | <span class="badge badge--success">GET</span> `/users/varieties/search`               |


### Get all varieties

&nbsp<span class="badge badge--success">GET</span>  `/varieties`

List of varieties available from providers (for now only for John Deere).

| Parameter (to filter by) | Values                                                                                                                                                                                                                              |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `leafUserId`             | uuid of one of your users                                                                                                                                                                                                           |
| `provider`               | `JohnDeere`                                                                                                                                                                                                                         |
| `size`                   | an integer specifying the size of the page (max is 100)                                                                                                                                                                             |
| `page`                   | an integer specifying the page being fetched (default is 0)                                                                                                                                                                         |
| `sort`                   | the sorting order of the results; can be multi-value, where the first value to be passed will take priority over the next values; you can also specify the order as `asc` or `desc` with `asc` being the default. Example: id, desc |

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

  const endpoint ='https://api.withleaf.io/services/beta/api/varieties'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/varieties'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/varieties'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "1299",
    "cropName": "SOYBEANS",
    "leafUserId": "028c30fa-6d2a-11ee-b962-0242ac120002",
    "registrant": "Curry Seed",
    "provider": "JohnDeere",
    "providerId": "8e1e0920-1265-4066-8067-8ce2ce5012b2",
    "status": "ACTIVE"
  },
  ....
]
```


### Get summarized varieties

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/varieties/summary`

List of varieties extracted from machine file.

| Parameter (to filter by) | Values                                                                                                                                                                                                                              |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`                   | part of the product name                                                                                                                                                                                                            |
| `crops`                  | desired crop name                                                                                                                                                                                                                   |
| `page`                   | an integer specifying the page being fetched (default is 0)                                                                                                                                                                         |
| `size`                   | an integer specifying the size of the page (max is 100)                                                                                                                                                                             |
| `sort`                   | the sorting order of the results; can be multi-value, where the first value to be passed will take priority over the next values; you can also specify the order as `asc` or `desc` with `asc` being the default. Example: id, desc |

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

  const endpoint ='https://api.withleaf.io/services/beta/api/users/{leafUserId}/varieties/summary'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/users/{leafUserId}/varieties/summary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/users/{leafUserId}/varieties/summary'
  ```

  </TabItem>
</Tabs>

#### Response

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
  },
  ....
]
```

### Search for varieties

&nbsp<span class="badge badge--success">GET</span>  `/varieties/search`

Search for varieties by name, partial values are supported. Varieties from John Deere Operation Center are available at the Leaf User level.  

| Parameter (to filter by) | Values                                                                             |
|--------------------------|------------------------------------------------------------------------------------|
| `name`                   | part of the product name to be searched **(required)**                             |
| `maxResults`             | the number of results that should be returned (max value is 20). The default is 10 |
| `crop`                   | the name of the crop of the varieties of interest                                  |

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

  const endpoint ='https://api.withleaf.io/services/beta/api/varieties/search'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/varieties/search'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/varieties/search'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "1299",
    "cropName": "SOYBEANS",
    "leafUserId": "028c30fa-6d2a-11ee-b962-0242ac120002",
    "registrant": "Curry Seed",
    "provider": "JohnDeere",
    "providerId": "8e1e0920-1265-4066-8067-8ce2ce5012b2",
    "status": "ACTIVE"
  },
  ....
]
```
