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
[13]: #get-a-variety

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
| [Updated product matches][8]                 | <span class="badge badge--warning">PATCH</span> `/products/matching/operations/{operationId}/matches/{matchId}`            |
| [Get product matches historical][9]          | <span class="badge badge--success">GET</span> `/products/matching/operations/{operationId}/matches/{matchId}/historical` |


### Get all products

&nbsp<span class="badge badge--success">GET</span>  `/products`

List of products from providers (for now only for John Deere) in a Leaf User level. This way, on this endpoint the user can search for all products that are available from traditional providers (e.g. John Deere), so here we do **not include** specific providers such as Agrian and CDMS.

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
    "name": "Default product",
    "leafUserId": "8bbe50a0-992c-11ee-b9d1-0242ac120002"
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
| `maxResults`             | the number of results that should be returned (max value is 100). The default is 10 |

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
    "physicalState": "dry",
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
    "name": "CompostY",
    "registration": "00000-000",
    "registrant": "Agriscience",
    "productType": "Dry",
    "physicalState": "dry",
    "formulationType": "Dry Flowable",
    "labelProvider": "AGRIAN",
    "productPageUrl": "https://www.agrian.com/searchcenter/demonstration=00000",
    "labels": [
      {
        "name": "Label - 00-R000",
        "url": "https://www.agrian.com/pdfs/new/00000.pdf"
      },
      ....
    ],
    "activeIngredient": [
      "Roundup",
      "Glyphosate",
      ....
    ],
    "activeIngredients": [
      {
        "name": "Roundup",
        "value": "40",
        "unit": "%"
      },
      {
        "name": "Glyphosate",
        "value": "15",
        "unit": "%"
      }
    ]
  },
  {
    "id": "21f4cb76-07fa-46ca-a8cf-cfbc2f161bdf",
    "name": "Product AB",
    "registration": "0434785-2911",
    "distributor": null,
    "registrant": "Loveland Products, Inc.",
    "productType": "Insecticide Miticide",
    "formulationType": "Emulsifiable Concentrate OR Emulsion Concentrate",
    "labelProvider": "AGRIAN",
    "productPageUrl": "https://www.agrian.com/labelcenter/results.cfm?d=0000",
    "labels": [
      {
        "name": "Label",
        "url": "https://www.agrian.com/pdfs/new/00000.pdf"
      },
      ....
    ],
    "activeIngredient": [
      "13.1 - Lambda-cyhalothrin"
    ],
    "leafUserId": null,
    "carrier": null,
    "status": null,
    "providerId": null,
    "physicalState": "liquid",
    "density": {
      "value": "7.17",
      "unit": "lb/ga"
    },
    "activeIngredients": [
      {
        "name": "Lambda-cyhalothrin",
        "value": "13.1",
        "unit": "%"
      }
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

This endpoint can be used as the input validator, getting the standard products that best match the products from a Field Operation. Information such as the registration number and labels can be obtained from [this endpoint][10] using the `id`.

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
      "status": "VALIDATED"
    }
  },
  ....
]
```

### Updated product matches

&nbsp<span class="badge badge--warning">PATCH</span> `/products/matching/operations/{id}/matches/{matchId}` 

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
  
  axios.patch(endpoint, data, { headers })
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

  response = requests.patch(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PATCH \
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
    "matchDetails": {
      "score": 91,
      "status": "PREDICTED"
    }
  },
  {
    "id": "uidd-match-0002",
    "name": "Talisman",
    "productId": "uidd-prd-1003",
    "matchDetails": {
      "status": "VALIDATED"
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
    "matchId": "uidd-match-0002",
    "name": "Talisman",
    "productId": "uidd-prd-1003",
    "matchDetails": {
      "status": "PREDICTED",
      "score": 8.225217
    },
    "historicalTime": "2023-12-19T13:18:44.709Z"
  }
]
```

## Varieties


| Description                    | Endpoints                                                                             |
|--------------------------------|---------------------------------------------------------------------------------------|
| [Get all varieties][5]         | <span class="badge badge--success">GET</span> `/varieties`                            |
| [Get a variety][13]            | <span class="badge badge--success">GET</span> `/varieties/{id}`                       |
| [Get summarized varieties][11] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/varieties/summary` |
| [Search for varieties][12]     | <span class="badge badge--success">GET</span> `/varieties/search`                     |


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
    "crops": [
      "ALFALFA"
    ],
    "name": "Master Piece",
    "companyName": "Simplot",
    "status": "ACTIVE",
    "leafUserId": "028c30fa-6d2a-11ee-b962-0242ac120002",
    "provider": "JohnDeere",
    "providerId": "8e1e0920-1265-4066-8067-8ce2ce5012b2",
    "organizationId": "9999"
  },
  ....
]
```

### Get a variety

&nbsp<span class="badge badge--success">GET</span>  `/varieties/{id}`

Get a variaty by the given id.

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

  const endpoint ='https://api.withleaf.io/services/beta/api/varieties/{id}'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/varieties/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/varieties/{id}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "id": "111120cc-d0c5-40d3-a063-ca09903a0738",
  "crops": [
    "SOYBEANS"
  ],
  "providerId": "f4c43d25-0000-1000-7fc2-e1e1e1193019",
  "name": "2105 2000 mix",
  "companyName": "CHANNEL",
  "status": "ACTIVE",
  "provider": "JohnDeere",
  "leafUserId": "90a7faf4-33d3-4e35-9f46-1894ae13955d",
  "organizationId": "9999"
}
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
    "name": "corn variety 2",
    "leafUserId": "028c30fa-6d2a-11ee-b962-0242ac120002",
    "crops": [
      "corn"
    ]
  },
  {
    "id": "1544de06-682d-4549-92a3-a06b2ccdc96d",
    "name": "corn variety 2 (1)",
    "leafUserId": "8e1e0920-1265-4066-8067-8ce2ce5012b2",
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
| `name`                   | part of the variety name to be searched **(required)**                             |
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
    "crops": [
      "ALFALFA"
    ],
    "name": "Master Piece",
    "companyName": "Simplot",
    "status": "ACTIVE",
    "leafUserId": "028c30fa-6d2a-11ee-b962-0242ac120002",
    "provider": "JohnDeere",
    "providerId": "8e1e0920-1265-4066-8067-8ce2ce5012b2"
  },
  ....
]
```

## Tank Mixes


| Description                 | Endpoints                                                         |
|-----------------------------|-------------------------------------------------------------------|
| [Get all tank mixes][5]     | <span class="badge badge--success">GET</span> `/tankMixes`        |
| [Search for tank mixes][12] | <span class="badge badge--success">GET</span> `/tankMixes/search` |


### Get all tank mixes

&nbsp<span class="badge badge--success">GET</span>  `/tankMixes`

List of tank mixes available from providers (for now only for John Deere).

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

  const endpoint ='https://api.withleaf.io/services/beta/api/tankMixes'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/tankMixes'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/tankMixes'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "abc59ca6-937c-11ee-b9d1-0242ac120002",
    "name": "TankTest1",
    "providerId": "b74878dc-937c-11ee-b9d1-0242ac120002",
    "notes": null,
    "solutionRate": {
      "valueAsDouble": 5,
      "unit": "gal1ac-1",
      "vrDomainId": "vrSolutionRateLiquid"
    },
    "formulationType": "LIQUID",
    "targetCrops": [
      "PINEAPPLE"
    ],
    "carrier": {
      "id": "c0cb84d0-937c-11ee-b9d1-0242ac120002",
      "name": "Water",
      "labelProvider": "JohnDeere",
      "registrant": "GENERIC",
      "registration": null,
      "distributor": null,
      "productType": "ADDITIVE",
      "formulationType": "LIQUID",
      "productPageUrl": null,
      "labels": null,
      "activeIngredient": null,
      "carrier": true,
      "status": "ACTIVE",
      "providerId": "e0daf77e-937c-11ee-b9d1-0242ac120002",
      "leafUserId": "cd06377c-937c-11ee-b9d1-0242ac120002"
    },
    "components": [
      {
        "id": "d1fb3aac-937c-11ee-b9d1-0242ac120002",
        "name": "Brandt Big Foot SS",
        "labelProvider": "JohnDeere",
        "registrant": "Brandt Consolidated, Inc.",
        "registration": null,
        "distributor": null,
        "productType": "ADDITIVE",
        "formulationType": "DRY",
        "productPageUrl": null,
        "labels": null,
        "activeIngredient": null,
        "carrier": false,
        "status": "ACTIVE",
        "providerId": "06da2738-937d-11ee-b9d1-0242ac120002",
        "leafUserId": "cd06377c-937c-11ee-b9d1-0242ac120002"
      },
      {
        "id": "eaee0878-937c-11ee-b9d1-0242ac120002",
        "name": "Ferti-Phos Mg 0-25-0",
        "labelProvider": "JohnDeere",
        "registrant": "Fertilizer Company of Arizona, Inc.",
        "registration": null,
        "distributor": null,
        "productType": "FERTILIZER",
        "formulationType": "LIQUID",
        "productPageUrl": null,
        "labels": null,
        "activeIngredient": null,
        "carrier": true,
        "status": "ACTIVE",
        "providerId": "0e0f1c66-937d-11ee-b9d1-0242ac120002",
        "leafUserId": "cd06377c-937c-11ee-b9d1-0242ac120002"
      }
    ],
    "status": "ACTIVE",
    "provider": "JohnDeere",
    "leafUserId": "cd06377c-937c-11ee-b9d1-0242ac120002"
  },
  ....
]
```


### Search for tank mixes

&nbsp<span class="badge badge--success">GET</span>  `/tankMixes/search`

Search for tank mixes by name, partial values are supported. Tank mix from John Deere Operation Center are available at the Leaf User level.  

| Parameter (to filter by) | Values                                                                             |
|--------------------------|------------------------------------------------------------------------------------|
| `name`                   | part of the tank mix name to be searched **(required)**                            |
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

  const endpoint ='https://api.withleaf.io/services/beta/api/tankMixes/search'
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

  endpoint = 'https://api.withleaf.io/services/beta/api/tankMixes/search'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/api/tankMixes/search'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "abc59ca6-937c-11ee-b9d1-0242ac120002",
    "name": "TankTest1",
    "providerId": "b74878dc-937c-11ee-b9d1-0242ac120002",
    "notes": null,
    "solutionRate": {
      "valueAsDouble": 5,
      "unit": "gal1ac-1",
      "vrDomainId": "vrSolutionRateLiquid"
    },
    "formulationType": "LIQUID",
    "targetCrops": [
      "PINEAPPLE"
    ],
    "carrier": {
      "id": "c0cb84d0-937c-11ee-b9d1-0242ac120002",
      "name": "Water",
      "labelProvider": "JohnDeere",
      "registrant": "GENERIC",
      "registration": null,
      "distributor": null,
      "productType": "ADDITIVE",
      "formulationType": "LIQUID",
      "productPageUrl": null,
      "labels": null,
      "activeIngredient": null,
      "carrier": true,
      "status": "ACTIVE",
      "providerId": "e0daf77e-937c-11ee-b9d1-0242ac120002",
      "leafUserId": "cd06377c-937c-11ee-b9d1-0242ac120002"
    },
    "components": [
      {
        "id": "d1fb3aac-937c-11ee-b9d1-0242ac120002",
        "name": "Brandt Big Foot SS",
        "labelProvider": "JohnDeere",
        "registrant": "Brandt Consolidated, Inc.",
        "registration": null,
        "distributor": null,
        "productType": "ADDITIVE",
        "formulationType": "DRY",
        "productPageUrl": null,
        "labels": null,
        "activeIngredient": null,
        "carrier": false,
        "status": "ACTIVE",
        "providerId": "06da2738-937d-11ee-b9d1-0242ac120002",
        "leafUserId": "cd06377c-937c-11ee-b9d1-0242ac120002"
      },
      {
        "id": "eaee0878-937c-11ee-b9d1-0242ac120002",
        "name": "Ferti-Phos Mg 0-25-0",
        "labelProvider": "JohnDeere",
        "registrant": "Fertilizer Company of Arizona, Inc.",
        "registration": null,
        "distributor": null,
        "productType": "FERTILIZER",
        "formulationType": "LIQUID",
        "productPageUrl": null,
        "labels": null,
        "activeIngredient": null,
        "carrier": true,
        "status": "ACTIVE",
        "providerId": "0e0f1c66-937d-11ee-b9d1-0242ac120002",
        "leafUserId": "cd06377c-937c-11ee-b9d1-0242ac120002"
      }
    ],
    "status": "ACTIVE",
    "provider": "JohnDeere",
    "leafUserId": "cd06377c-937c-11ee-b9d1-0242ac120002"
  },
  ....
]
```
