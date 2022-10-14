---
title: Sharing
description: Sharing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: #get-apiowner-sharing-relation
[2]: #get-apiowner-sharing-relation-status
[3]: #create-an-apiowner-sharing-relation
[4]: #update-an-apiowner-sharing-relation-status
[5]: #get-leafuser-permissions
[6]: #create-a-leafuser-permissions
[7]: #update-leafuser-permissions
[8]: #delete-leafuser-sharing-permissions
[9]: /docs/docs/field_boundaries_endpoints#get-all-fields


## About
The Leaf API allows the Api owner to grant permission to access some resources for other Api owners. The access is controled at the Leaf user level and always starts from the Api owner who owns the data.

### How it works

#### Scenario
The Api Owner A wants to grant permission to Api Owner B to read their fields.

<p align="left">
  <img alt="How it works" width="75%" src={useBaseUrl('img/sharing_scenario.png')} />
</p>

#### 1 - Sharing Relation  
<img alt="Sharing Relation" width="50%" src={useBaseUrl('img/sharing_relation.png')} />  

The first step is to create a relation between the Api Owners, from who owns the data - the sender (Api Owner A) to the receiver (Api Owner B). Check the endpoint [Create an ApiOwner sharing relation][3].  

The receiver Api owner (Api Owner B) must confirm the relationship [changing the relation status][4] to `ALLOWED`.

This relationship status can be [changed][4] in the future by both sides, but once the sender blocks the relationship, the receiver will not be able to access the data, nor to reactivate the sharing relation status.

*This step is only necessary once, that is, it is not necessary to repeat this step for new integrations with the same receiver.*  

#### 2 - Permissions   
<img alt="Sharing permission" width="50%" src={useBaseUrl('img/sharing_permission.png')} />

In this step, permissions are granted on the resources of each Leaf user. More info [here][6].  

Note that at this time only the `READ` permission type and the `FIELDS` resource are available.

:::tip Organizations
Organization-level sharing is not supported yet, but the permission can be granted or revoked at the same time the Leaf user is added or removed from the organization.
:::

#### 3 - Access   
At the end of these steps, the Api Owner B will be able to visualize the fields from the shared Leaf user, using the already existing field endpoints, like [this][9].
<img alt="Sharing result" width="50%" src={useBaseUrl('img/sharing_result.png')} />


## Endpoints

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Get ApiOwner sharing relation][1] | <span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}`
[Get ApiOwner sharing relation status][2] | <span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{targetApiOwner}/status`
[Create an ApiOwner sharing relation][3] | <span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/receiver`
[Update an ApiOwner sharing relation status][4] | <span class="badge badge--warning">PATCH</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{targetApiOwner}`
[Get LeafUser permissions][5] | <span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{TargetApiOwner}/users-permissions/{LeafUserId}`
[Create a LeafUser permissions][6] | <span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions`
[Update LeafUser permissions][7] | <span class="badge badge--warning">PATCH</span> `/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{LeafUserId}/{RESOURCE}`
[Delete LeafUser sharing permissions][8] | <span class="badge badge--danger">DELETE</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{ReceiverApiOwner}/users-permissions/{LeafUserId}`


### Get ApiOwner sharing relation

&nbsp<span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}`

Get all Api owners relation based on the relation role: `SENDER` or `RECEIVER`.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver'
  ```

  </TabItem>
</Tabs>

#### Response
A list of all sharing relations.
```json
[
  {
    "senderApiOwner": "{senderApiOwner}",
    "receiverApiOwner": "{receiverApiOwner}",
    "status": "ALLOWED"
  }
]
```  

### Get ApiOwner sharing relation status
&nbsp<span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{targetApiOwner}/status`

Get the relation status based in the relation role (`SENDER` or `RECEIVER`).

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/status'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/status'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/status'
  ```

  </TabItem>
</Tabs>

#### Response
A string with one of the following values: `PENDING`, `ALLOWED` or `BLOCKED`.

```json
"PENDING"
```

### Create an ApiOwner sharing relation
&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/receiver`

Create a sharing relation between the Api owners.

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

  const endpoint ='https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
      receiverApiOwner: "{ReceiverApiOwner}"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'receiverApiOwner': "{ReceiverApiOwner}"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "receiverApiOwner": "{ReceiverApiOwner}" }'
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "senderApiOwner": "{senderApiOwner}",
  "receiverApiOwner": "{receiverApiOwner}",
  "status": "PENDING"
}
```

### Update an ApiOwner sharing relation status
&nbsp<span class="badge badge--warning">PATCH</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{targetApiOwner}`

Update the sharing relation status. The values available are `ALLOWED` or `BLOCKED`.

After the sender creates a relationship, the recevier must approve it by changing the status from `PENDING` to `ALLOWED`.
Both Api Owners can block the relation, but once locked by the sender, there is no way for the receiver to change it again.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/status'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/status'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/status'
  ```

  </TabItem>
</Tabs>

#### Response  

```json
{
    "senderApiOwner": "{senderApiOwner}",
    "receiverApiOwner": "{receiverApiOwner}",
    "status": "ALLOWED"
}
```

### Get LeafUser permissions
&nbsp<span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{TargetApiOwner}/users-permissions/{LeafUserId}`

Get all permissions granted to a receiver Api Owner for a Leaf user.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{LeafUserId}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{LeafUserId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{LeafUserId}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "permissions": {
        "FIELDS": [
            "READ"
        ]
    }
}
```

### Create a LeafUser permissions
&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions`

Grants permission to a receiver for a given Leaf user resource.

*Note: shared Leaf users (from other Api Owner) are not available for grant permissions*

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

  const endpoint ='https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    leafUserId: "{LeafUserId}",
    permissions: {
        FIELDS: ["READ"]
        }
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'leafUserId': "{LeafUserId}",
    'permissions': {
        'FIELDS': ["READ"]
        }
    }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "leafUserId": "{LeafUserId}", "permissions": { "FIELDS": ["READ"] } }'
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "leafUserId": "{LeafUserId}",
  "permissions": {
    "FIELDS": [
      "READ"
    ]
  }
}
```

### Update LeafUser permissions
&nbsp<span class="badge badge--warning">PATCH</span> `/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{LeafUserId}/{RESOURCE}`

Update the permissions granted to the receiver Api Owner.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/status'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/status'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/status'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "leafUserId": "{LeafUserId}",
  "permissions": {
    "FIELDS": [
      "READ"
    ]
  }
}
```

### Delete LeafUser sharing permissions
&nbsp<span class="badge badge--danger">DELETE</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{TargetApiOwner}/users-permissions/{LeafUserId}`

Deletes a permission.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{LeafUserId}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{LeafUserId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{LeafUserId}'
  ```

  </TabItem>
</Tabs>