---
title: Provider Organizations
description: Organizations - Endpoints
sidebar_label: Provider Organizations 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-john-deere-connected-organizations
[2]: #get-trimble-connected-organizations

## About

The endpoints described here are tools for listing organizations that have or have not granted access to Leaf.

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

**Endpoints**

| Description                                 | Endpoints                                                                                   |
|---------------------------------------------|---------------------------------------------------------------------------------------------|
| [Get John Deere Connected Organizations][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/organizations/JohnDeere` |
| [Get Trimble Connected Organizations][2]    | <span class="badge badge--success">GET</span> `/users/{leafUserId}/organizations/Trimble`   |

## Organizations List

### Get John Deere Connected Organizations

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/organizations/JohnDeere`

<p align='justify'>

Get John Deere organizations connected by Leaf User.

</p>

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/organizations/JohnDeere'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/organizations/JohnDeere'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/organizations/JohnDeere'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "connectedOrganizations": [
    {
      "id": "organization_id_1",
      "name": "Organization Name 1",
      "managementUri": "https://connections.deere.com/connections/clientKey/connections-dialog?orgId=organization_id_1"
    }
  ],
  "notConnectedOrganizations": [
    {
      "id": "organization_id_2",
      "name": "Organization Name 2",
      "managementUri": "https://connections.deere.com/connections/clientKey/connections-dialog?orgId=organization_id_2"
    }
  ]
}
```


### Get Trimble Connected Organizations

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/organizations/Trimble`

<p align='justify'>

Get Trimble organizations connected by Leaf User.

</p>

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/organizations/Trimble'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/organizations/Trimble'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/organizations/Trimble'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "managementUri": "https://www.trimbleag.com/ThirdPartyAccess/ThirdPartyAuthorizationRedirect?clientId=client_id",
  "connectedOrganizations": [
    {
      "id": "client_id",
      "name": "organization_name"
    }
  ]
}
```


