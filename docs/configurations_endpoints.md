---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: #get-api-owner-config
[3]: #get-leaf-user-config
[4]: #create-leaf-user-config
[5]: #update-api-owner
[6]: #update-leaf-user-config
[7]: #delete-leaf-user-config

## About
Here we list all the available endpoints from Configuration API. For easily
calling them, we recommend using [Leaf's Postman collection][1].

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/config/api
```

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Get Api Owner's Configuration][2] | <span class="badge badge--success">GET</span> `/configs`
[Get Leaf User's Configuration][3] | <span class="badge badge--success">GET</span> `/configs/{leafUserId}`
[Create Leaf User's Configuration][4] | <span class="badge badge--warning">POST</span> `/configs/{leafUserId}`
[Update Api Owner's Configuration][5] | <span class="badge badge--warning">PATCH</span> `/configs/{leafUserId}`
[Update Leaf User's Configuration][6] | <span class="badge badge--warning">PATCH</span> `/configs/{leafUserId}`
[Delete Leaf User's Configuration][7] | <span class="badge badge--warning">DELETE</span> `/configs/{leafUserId}`

## Endpoints

### Get Api Owner's Configuration

&nbsp<span class="badge badge--success">GET</span> `/configs`

Gets the configuration of the Api Owner.

#### Response
A JSON containing the configuration of the Api Owner.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/config/api/configs'
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
      "https://api.withleaf.io/service/configs/api/configs"
  ```

  </TabItem>
  <TabItem value="res">

  ```json
  {
    "apiOwnerUsername": "api-owner",
    "leafUserId": "",
    "operationsImageCreation": true,
    "fieldsAutoSync": true
  }
  ```

  </TabItem>
</Tabs>


### Get Leaf User's Configuration

&nbsp<span class="badge badge--success">GET</span> `configs/{leafUserId}`

Gets the configuration of a Leaf User.

#### Response
A JSON containing the configuration of the Leaf User.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'
  const LEAF_USER_ID = '00000000-0000-0000-0000-000000000000'

  const endpoint = `https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}`
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
  <TabItem value="res">

  ```json
  {
    "apiOwnerUsername": "api-owner",
    "leafUserId": "00000000-0000-0000-0000-000000000000",
    "operationsImageCreation": true,
    "fieldsAutoSync": true
  }
  ```

  </TabItem>
</Tabs>

### Create Leaf User's Configuration

&nbsp<span class="badge badge--warning">POST</span> `/configs/{leafUserId}`

Creates the Configuration for the Leaf User `leafUserId`. A request body must be provided
containing the configurations to be set. All entries are optional, any missing configuration will be inherited from the Api Owner's Configuration.

Request body example:

```json
{
  "operationsImageCreation": true,
  "fieldsAutoSync": true
}
```


#### Response
A JSON containing the configuration of the Leaf User.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'
  const LEAF_USER_ID = '00000000-0000-0000-0000-000000000000'

  const endpoint = `https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}`
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "operationsImageCreation": true,
    "fieldsAutoSync": true
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
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
    'operationsImageCreation': true,
    'fieldsAutoSync': true
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
      -d '{ "operationsImageCreation": true, "fieldsAutoSync": true }' \
      "https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}"
  ```

  </TabItem>
  <TabItem value="res">

  ```json
  {
    "apiOwnerUsername": "api-owner",
    "leafUserId": "00000000-0000-0000-0000-000000000000",
    "operationsImageCreation": true,
    "fieldsAutoSync": true
  }
  ```

  </TabItem>
</Tabs>

### Update Api Owner's Configuration

&nbsp<span class="badge badge--success">PATCH</span> `/configs`

Updates the specified fields of Configuration for the Api Owner. A resquest body must be provided
containing the configurations to be set. All entries are optional.

Request body example:

```json
{
  "operationsImageCreation": true,
  "fieldsAutoSync": true
}
```

#### Response
A JSON containing the configuration of the Api Owner.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/config/api/configs'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "operationsImageCreation": true,
    "fieldsAutoSync": true
  }

  axios.patch(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/config/api/configs'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'operationsImageCreation': true,
    'fieldsAutoSync': true
  }

  response = requests.patch(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  TOKEN = 'YOUR_TOKEN'

  curl -X PATCH \
      -H 'Authorization: Bearer ${TOKEN}' \
      -d '{ "operationsImageCreation": true, "fieldsAutoSync": true }' \
      'https://api.withleaf.io/services/config/api/configs'
  ```

  </TabItem>
  <TabItem value="res">

  ```json
  {
    "apiOwnerUsername": "api-owner",
    "leafUserId": "",
    "operationsImageCreation": true,
    "fieldsAutoSync": true
  }
  ```

  </TabItem>
</Tabs>


### Update Leaf User's Configuration

&nbsp<span class="badge badge--success">PATCH</span> `/configs/{leafUserId}`

Updates the specified fields of Configuration for the Leaf User `leafUserId`. A resquest body must be provided containing the configurations to be set. All entries are optional.

Request body example:

```json
{
  "operationsImageCreation": true,
  "fieldsAutoSync": true
}
```

#### Response
A JSON containing the configuration of the Leaf User.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'cURL', value: 'sh', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'
  const LEAF_USER_ID = '00000000-0000-0000-0000-000000000000'

  const endpoint = `https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}`
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "operationsImageCreation": true,
    "fieldsAutoSync": true
  }

  axios.patch(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
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
    'operationsImageCreation': true,
    'fieldsAutoSync': true
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
      -H 'Authorization: Bearer ${TOKEN}' \
      -d '{ "operationsImageCreation": true, "fieldsAutoSync": true }' \
      'https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}'
  ```

  </TabItem>
  <TabItem value="res">

  ```json
  {
    "apiOwnerUsername": "api-owner",
    "leafUserId": "00000000-0000-0000-0000-000000000000",
    "operationsImageCreation": true,
    "fieldsAutoSync": true
  }
  ```

  </TabItem>
</Tabs>


### Delete Leaf User's Configuraiton

&nbsp<span class="badge badge--warning">DELETE</span> `/configs/{leafUserId}`

Deletes the Configuration from the Leaf User `leafUserId`. Until a new Configuration is created, the Leaf User will inherit all configurations from the Api Owner.

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
  const LEAF_USER_ID = '00000000-0000-0000-0000-000000000000'

  const endpoint = `https://api.withleaf.io/services/config/api/configs/${LEAF_USER_ID}`
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
  LEAF_USER_ID = '00000000-0000-0000-0000-000000000000'

  endpoint = f'https://api.withleaf.io/services/config/api/configs/{LEAF_USER_ID}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
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
