---
title: Provider Organizations
description: Organizations - Endpoints
sidebar_label: Provider Organizations 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #get-provider-organizations

## About

The endpoints described here are tools for listing organizations that have or have not granted access to Leaf.

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

**Endpoints**

| Description                     | Endpoints                                                                                         |
|---------------------------------|---------------------------------------------------------------------------------------------------|
| [Get Provider Organizations][1] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/organizations/{provider}` |

## Organizations List

### Get Provider Organizations

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/organizations/{provider}`

<p align='justify'>

Get provider connected and disconnected organizations from Leaf User.

</p>

- `provider`: can be `JohnDeere` or `Trimble`.

:::info
At Trimble it is not possible to differentiate which organizations are connected or not.
:::

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/organizations/{provider}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/organizations/{provider}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/organizations/{provider}'
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

