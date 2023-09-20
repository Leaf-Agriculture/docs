---
title: Leaf Connect
description: Leaf Connect
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: #get-api-owner-sharing-relation
[2]: #get-api-owner-sharing-relation-status
[3]: #create-an-api-owner-sharing-relation
[4]: #update-an-api-owner-sharing-relation-status
[5]: #get-leafuser-permissions
[6]: #create-a-leafuser-permissions
[7]: #update-leafuser-permissions
[8]: #delete-leafuser-sharing-permissions
[9]: /docs/field_boundary_management_endpoints#get-all-fields
[10]: /docs/field_boundary_management_overview
[11]: /docs/operations_overview
[12]: /docs/beta_assets_endpoints
[13]: #invalidate-receivers-tokens


## About
The Leaf API allows an API Owner to grant permission to access [Field Boundaries][10], [Field Operations][11] and [Machine Data Files][12] to other API Owners. The access is controlled at the Leaf user level by the API account that owns the data.

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api

```


### How it works

#### Scenario
API Owner A wants to grant permission to API Owner B to read their fields.


#### 1 - Sharing Relation  
The first step is to create a relationship between the API Owners, from who owns the data - the sender (API Owner A) to the receiver (API Owner B). Check the endpoint [Create an API Owner sharing relation][3].  

The receiver API Owner (API Owner B) must confirm the relationship [changing the relation status][4] to `ALLOWED`.

This relationship status can be [changed][4] in the future by both sides, but once the sender blocks the relationship, the receiver will not be able to access the data, nor to reactivate the sharing relation status.

*This step is only necessary once, that is, it is not necessary to repeat this step for new integrations with the same receiver.*  

#### 2 - Permissions   
In this step, permissions are granted for the resources of each Leaf user. More info [here][6].  

**Note**: This permission is `READ` only and `FIELDS` and `OPERATIONS` resources are available.

:::tip Company
Company-level sharing is not supported, but the permission can be granted or revoked at the same time the Leaf user is added or removed from the company.
:::

#### 3 - Access   
At the end of these steps, API Owner B will be able to visualize the fields, operations and/or machine data files from the shared Leaf user, using the existing field/operations/machine data files endpoints, like [this one][9].


## Endpoints

This service has the following endpoints available:

| Description                                      | Endpoints                                                                                                                                                               |
|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Get API Owner sharing relation][1]              | <span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}`                                                          |
| [Get API Owner sharing relation status][2]       | <span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{targetApiOwner}/status`                                  |
| [Create an API Owner sharing relation][3]        | <span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/receiver`                                                               |
| [Update an API Owner sharing relation status][4] | <span class="badge badge--warning">PATCH</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{targetApiOwner}`                                       |
| [Get LeafUser permissions][5]                    | <span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{TargetApiOwner}/users-permissions/{leafUserId}`          |
| [Create a LeafUser permissions][6]               | <span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}`             |
| [Update LeafUser permissions][7]                 | <span class="badge badge--warning">PATCH</span> `/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}/{RESOURCE}` |
| [Invalidate receiver's tokens][13]               | <span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{TargetApiOwner}/invalidate-tokens`                      |
| [Delete LeafUser sharing permissions][8]         | <span class="badge badge--danger">DELETE</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{ReceiverApiOwner}/users-permissions/{leafUserId}`      |

### Get API Owner sharing relation

&nbsp<span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}`

Get all API Owners relation based on the relation role: `SENDER` or `RECEIVER`.

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

```json
[
  {
    "senderApiOwner": "{senderApiOwner}",
    "receiverApiOwner": "{receiverApiOwner}",
    "status": "ALLOWED"
  }
]
```  

### Get API Owner sharing relation status
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

### Create an API Owner sharing relation
&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/receiver`

Create a sharing relation between the API Owners.

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

### Update an API Owner sharing relation status
&nbsp<span class="badge badge--warning">PATCH</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{targetApiOwner}`

Update the sharing relation status. The values available are `ALLOWED` or `BLOCKED`.

After the sender creates a relationship, the recevier must approve it by changing the status from `PENDING` to `ALLOWED`.
Both API Owners can block the relation, but once locked by the sender, there is no way for the receiver to change it again.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  const data = { 'status': 'ALLOWED or BLOCKED}

  axios.patch(endpoint, data, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'status': 'ALLOWED or BLOCKED'
  }

  response = requests.patch(endpoint, json=data, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PATCH \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "status": "ALLOWED or BLOCKED" }' 
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}'
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
&nbsp<span class="badge badge--success">GET</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{TargetApiOwner}/users-permissions/{leafUserId}`

Get all permissions granted to a receiver API Owner for a Leaf user.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "permissions": {
    "FIELDS": {
      "actions": [
        "READ"
      ]
    }
  }
}
```

### Create a LeafUser permissions

&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}`

Grants permission to a receiver for a given Leaf user resource.

*Note: shared Leaf users (from other API Owner) are not available for grant permissions*

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

  const endpoint ='https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
      "permissions": {
        "FIELDS": {
          "actions": [
            "READ"
          ]
        },
        "OPERATIONS": {
          "actions": [
            "READ"
          ],
          "types": [
            "PLANTED"
          ]
        }
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
      "permissions": {
        "FIELDS": {
          "actions": [
            "READ"
          ]
        },
        "OPERATIONS": {
          "actions": [
            "READ"
          ],
          "types": [
            "PLANTED"
          ]
        }
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
      -d '{"permissions":{"FIELDS":{"actions":["READ"]},"OPERATIONS":{"actions":["READ"],"types":["PLANTED"]}}}'
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "leafUserId": "{leafUserId}",
  "permissions": {
    "FIELDS": {
      "actions": [
        "READ"
      ]
    },
    "OPERATIONS": {
      "actions": [
        "READ"
      ],
      "types": [
        "PLANTED"
      ]
    }
  }
}
```

#### Availability

| Resource     | Actions   | Types                             |
|--------------|-----------|-----------------------------------|
| `FIELD`      | `READ`    | -                                 |
| `OPERATIONS` | `READ`    | `APPLIED`, `HARVESTED`, `PLANTED` |

### Update LeafUser permissions
&nbsp<span class="badge badge--warning">PATCH</span> `/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}/{RESOURCE}`

Update the permissions granted to the receiver API Owner.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}/OPERATIONS'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    "actions": [
      "READ"
    ],
    "types": [
      "PLANTED", "HARVESTED"
    ]
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}/OPERATIONS'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    "actions": [
      "READ"
    ],
    "types": [
      "PLANTED", "HARVESTED"
    ]
  }

  response = requests.patch(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PATCH \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{"actions":["READ"],"types":["PLANTED", "HARVESTED"]}' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}/OPERATIONS'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "leafUserId": "{leafUserId}",
  "permissions": {
    "FIELDS": {
      "actions": [
        "READ"
      ]
    },
    "OPERATIONS": {
      "actions": [
        "READ"
      ],
      "types": [
        "PLANTED", "HARVESTED"
      ]
    }
  }
}
```

#### Availability

| Resource     | Actions   | Types                             |
|--------------|-----------|-----------------------------------|
| `FIELD`      | `READ`    | -                                 |
| `OPERATIONS` | `READ`    | `APPLIED`, `HARVESTED`, `PLANTED` |



### Invalidate receiver's tokens

&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/{TargetApiOwner}/invalidate-tokens`

Invalidate the receiver's tokens created before the **current** date and time.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/{TargetApiOwner}/invalidate-tokens'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.POST(endpoint, { headers})
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/{TargetApiOwner}/invalidate-tokens'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.post(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PATCH \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/{TargetApiOwner}/invalidate-tokens'
  ```

  </TabItem>
</Tabs>


### Delete LeafUser sharing permissions

&nbsp<span class="badge badge--danger">DELETE</span> `/usermanagement/api/api-owners/sharing-relation/{RelationRole}/users-permissions/{leafUserId}`

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.delete(endpoint, { headers})
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/api-owners/sharing-relation/receiver/{ReceiverApiOwner}/users-permissions/{leafUserId}'
  ```

  </TabItem>
</Tabs>
