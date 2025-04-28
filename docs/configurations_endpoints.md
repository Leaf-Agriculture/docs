---
title: Configurations Endpoints
description: Configurations - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->

[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: #get-api-owners-configuration
[3]: #get-leaf-users-configuration
[4]: #create-leaf-users-configuration
[5]: #update-api-owners-configuration
[6]: #update-leaf-users-configuration
[7]: #delete-leaf-users-configuration

## About

Here we list all the available endpoints from Leaf's Configuration API. To call them easily, we recommend using [Leaf's Postman collection][1].

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/config/api
```

This service has the following endpoints available:

| Description                           | Endpoints                                                                |
| ------------------------------------- | ------------------------------------------------------------------------ |
| [Get API Owner's Configuration][2]    | <span class="badge badge--success">GET</span> `/configs`                 |
| [Get Leaf User's Configuration][3]    | <span class="badge badge--success">GET</span> `/configs/{leafUserId}`    |
| [Create Leaf User's Configuration][4] | <span class="badge badge--warning">POST</span> `/configs/{leafUserId}`   |
| [Update API Owner's Configuration][5] | <span class="badge badge--warning">PATCH</span> `/configs`               |
| [Update Leaf User's Configuration][6] | <span class="badge badge--warning">PATCH</span> `/configs/{leafUserId}`  |
| [Delete Leaf User's Configuration][7] | <span class="badge badge--danger">DELETE</span> `/configs/{leafUserId}` |

## Endpoints

### Get API Owner's Configuration

&nbsp<span class="badge badge--success">GET</span> `/configs`

Gets the configuration of the API Owner.

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
const axios = require("axios");
const TOKEN = "YOUR_TOKEN";

const endpoint = "https://api.withleaf.io/services/config/api/configs";
const headers = { Authorization: `Bearer ${TOKEN}` };

axios
  .get(endpoint, { headers })
  .then((res) => console.log(res.data))
  .catch(console.error);
```

  </TabItem>
  <TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'

endpoint = 'https://api.withleaf.io/services/config/api/configs'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

  </TabItem>
  <TabItem value="sh">

```shell
TOKEN=YOUR_TOKEN

curl -X GET \
    -H "Authorization: Bearer ${TOKEN}" \
    "https://api.withleaf.io/services/config/api/configs"
```

  </TabItem>
</Tabs>

#### Response

A JSON containing the configuration of the API Owner.

```json
{
  "apiOwnerUsername": "api-owner",
  "leafUserId": "",
  "operationsImageCreation": true,
  "fieldsAutoSync": true,
  "fieldsMergeIntersection": 0.01,
  "fieldsAttachIntersection": 0.01
}
```

### Get Leaf User's Configuration

&nbsp<span class="badge badge--success">GET</span> `configs/{leafUserId}`

Gets the configuration of a Leaf User.

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
{ label: 'JavaScript', value: 'js', }
]
}>
<TabItem value="js">

```js
const axios = require("axios");
const TOKEN = "YOUR_TOKEN";
const LEAF_USER_ID = "00000000-0000-0000-0000-000000000000";

const endpoint = `https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}`;
const headers = { Authorization: `Bearer ${TOKEN}` };

axios
  .get(endpoint, { headers })
  .then((res) => console.log(res.data))
  .catch(console.error);
```

  </TabItem>
  <TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'
LEAF_USER_ID = '00000000-0000-0000-0000-000000000000'

endpoint = f'https://api.withleaf.io/services/config/api/configs/{LEAF_USER_ID}'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.get(endpoint, headers=headers)
print(response.json())
```

  </TabItem>
  <TabItem value="sh">

```shell
TOKEN=YOUR_TOKEN
LEAF_USER_ID=00000000-0000-0000-0000-000000000000

curl -X GET \
    -H "Authorization: Bearer ${TOKEN}" \
    "https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}"
```

  </TabItem>
</Tabs>

#### Response

A JSON containing the configuration of the Leaf User.

```json
{
  "apiOwnerUsername": "api-owner",
  "leafUserId": "00000000-0000-0000-0000-000000000000",
  "operationsImageCreation": true,
  "fieldsAutoSync": true,
  "fieldsMergeIntersection": 0.01,
  "fieldsAttachIntersection": 0.01,
  "fieldsAutoMerge": true
}
```

### Create Leaf User's Configuration

&nbsp<span class="badge badge--warning">POST</span> `/configs/{leafUserId}`

Creates the Configuration for the Leaf User `leafUserId`. A request body must be provided
containing the configurations to be set. All entries are optional, any missing configuration will be inherited from the API Owner's Configuration.

Request body example:

```json
{
  "operationsImageCreation": true,
  "fieldsAutoSync": true
}
```

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
{ label: 'JavaScript', value: 'js', }
]
}>
<TabItem value="js">

```js
const axios = require("axios");
const TOKEN = "YOUR_TOKEN";
const LEAF_USER_ID = "00000000-0000-0000-0000-000000000000";

const endpoint = `https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}`;
const headers = { Authorization: `Bearer ${TOKEN}` };

const data = {
  operationsImageCreation: true,
  fieldsAutoSync: true,
};

axios
  .post(endpoint, data, { headers })
  .then((res) => console.log(res.data))
  .catch(console.error);
```

  </TabItem>
  <TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'
LEAF_USER_ID = '00000000-0000-0000-0000-000000000000'

endpoint = f'https://api.withleaf.io/services/config/api/configs/{LEAF_USER_ID}'
headers = {'Authorization': f'Bearer {TOKEN}'}

data = {
  'operationsImageCreation': True,
  'fieldsAutoSync': True
}

response = requests.post(endpoint, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="sh">

```shell
TOKEN=YOUR_TOKEN
LEAF_USER_ID=00000000-0000-0000-0000-000000000000

curl -X POST \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{ "operationsImageCreation": true, "fieldsAutoSync": true }' \
    "https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}"
```

  </TabItem>
</Tabs>

#### Response

A JSON containing the configuration of the Leaf User.

```json
{
  "apiOwnerUsername": "api-owner",
  "leafUserId": "00000000-0000-0000-0000-000000000000",
  "operationsImageCreation": true,
  "fieldsAutoSync": true,
  "fieldsMergeIntersection": 0.01,
  "fieldsAttachIntersection": 0.01,
  "fieldsAutoMerge": true
}
```

### Update API Owner's Configuration

&nbsp<span class="badge badge--warning">PATCH</span> `/configs`

Updates the specified fields of Configuration for the API Owner. A request body must be provided
containing the configurations to be set. All entries are optional.

Request body example:

```json
{
  "operationsImageCreation": true,
  "fieldsAutoSync": true
}
```

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
{ label: 'JavaScript', value: 'js', }
]
}>
<TabItem value="js">

```js
const axios = require("axios");
const TOKEN = "YOUR_TOKEN";

const endpoint = "https://api.withleaf.io/services/config/api/configs";
const headers = { Authorization: `Bearer ${TOKEN}` };

const data = {
  operationsImageCreation: true,
  fieldsAutoSync: true,
};

axios
  .patch(endpoint, data, { headers })
  .then((res) => console.log(res.data))
  .catch(console.error);
```

  </TabItem>
  <TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'

endpoint = 'https://api.withleaf.io/services/config/api/configs'
headers = {'Authorization': f'Bearer {TOKEN}'}

data = {
  'operationsImageCreation': True,
  'fieldsAutoSync': True
}

response = requests.patch(endpoint, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="sh">

```shell
TOKEN = 'YOUR_TOKEN'

curl -X PATCH \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{ "operationsImageCreation": true, "fieldsAutoSync": true }' \
    'https://api.withleaf.io/services/config/api/configs'
```

  </TabItem>
</Tabs>

#### Response

A JSON containing the configuration of the API Owner.

```json
{
  "apiOwnerUsername": "api-owner",
  "leafUserId": "",
  "operationsImageCreation": true,
  "fieldsAutoSync": true,
  "fieldsMergeIntersection": 0.01,
  "fieldsAttachIntersection": 0.01,
  "fieldsAutoMerge": true
}
```

### Update Leaf User's Configuration

&nbsp<span class="badge badge--warning">PATCH</span> `/configs/{leafUserId}`

Updates the specified fields of Configuration for the Leaf User `leafUserId`. A resquest body must be provided containing the configurations to be set. All entries are optional.

Request body example:

```json
{
  "operationsImageCreation": true,
  "fieldsAutoSync": true
}
```

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
{ label: 'JavaScript', value: 'js', }
]
}>
<TabItem value="js">

```js
const axios = require("axios");
const TOKEN = "YOUR_TOKEN";
const LEAF_USER_ID = "00000000-0000-0000-0000-000000000000";

const endpoint = `https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}`;
const headers = { Authorization: `Bearer ${TOKEN}` };

const data = {
  operationsImageCreation: true,
  fieldsAutoSync: true,
};

axios
  .patch(endpoint, data, { headers })
  .then((res) => console.log(res.data))
  .catch(console.error);
```

  </TabItem>
  <TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'
LEAF_USER_ID = '00000000-0000-0000-0000-000000000000'

endpoint = f'https://api.withleaf.io/services/config/api/configs/{LEAF_USER_ID}'
headers = {'Authorization': f'Bearer {TOKEN}'}

data = {
  'operationsImageCreation': True,
  'fieldsAutoSync': True
}

response = requests.patch(endpoint, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="sh">

```shell
TOKEN=YOUR_TOKEN
LEAF_USER_ID=00000000-0000-0000-0000-000000000000

curl -X PATCH \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{ "operationsImageCreation": true, "fieldsAutoSync": true }' \
    "https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}"
```

  </TabItem>
</Tabs>

#### Response

A JSON containing the configuration of the Leaf User.

```json
{
  "apiOwnerUsername": "api-owner",
  "leafUserId": "00000000-0000-0000-0000-000000000000",
  "operationsImageCreation": true,
  "fieldsAutoSync": true,
  "fieldsMergeIntersection": 0.01,
  "fieldsAttachIntersection": 0.01,
  "fieldsAutoMerge": true
}
```

### Delete Leaf User's Configuration

&nbsp<span class="badge badge--danger">DELETE</span> `/configs/{leafUserId}`

Deletes the Configuration from the Leaf User `leafUserId`. Until a new Configuration is created, the Leaf User will inherit all configurations from the API Owner.

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
const axios = require("axios");
const TOKEN = "YOUR_TOKEN";
const LEAF_USER_ID = "00000000-0000-0000-0000-000000000000";

const endpoint = `https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}`;
const headers = { Authorization: `Bearer ${TOKEN}` };

axios
  .delete(endpoint, { headers })
  .then((res) => console.log(res.data))
  .catch(console.error);
```

  </TabItem>
  <TabItem value="py">

```py
import requests

TOKEN = 'YOUR_TOKEN'
LEAF_USER_ID = '00000000-0000-0000-0000-000000000000'

endpoint = f'https://api.withleaf.io/services/config/api/configs/{LEAF_USER_ID}'
headers = {'Authorization': f'Bearer {TOKEN}'}

response = requests.delete(endpoint, headers=headers)
print(response.status_code)
```

  </TabItem>
  <TabItem value="sh">

```shell
TOKEN=YOUR_TOKEN
LEAF_USER_ID=00000000-0000-0000-0000-000000000000

curl -X DELETE \
    -H "Authorization: Bearer ${TOKEN}" \
    "https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}"
```

  </TabItem>
</Tabs>
