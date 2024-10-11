---
title: Provider Organizations
description: Organizations - Endpoints
sidebar_label: Provider Organizations 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


<!-- the following links are referenced throughout this document -->
[1]: #get-provider-organizations
[2]: #organizations-list
[3]: #organizations-sync

[4]: #get-all-provider-organizations
[5]: #get-a-provider-organization
[6]: #update-a-provider-organization-status
[7]: https://withleaf.io/en/tutorials/john-deere-authentication-with-leaf/


## About

The endpoints described here are divided into two categories. The [Organizations List][2] provides tools for listing organizations that have or have not granted access to Leaf. The [Organization Sync][3] offers tools for managing organizations to be processed, which in turn impacts associated resources such as field boundaries, operations, and assets.

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

**Endpoints**

| Description                                | Endpoints                                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [Get Provider Organizations][1]            | <span class="badge badge--success">GET</span> `/users/{leafUserId}/organizations/{provider}`                   |
| [Get All Provider Organizations][4]        | <span class="badge badge--success">GET</span> `/users/{leafUserId}/{provider}/organizations`                   |
| [Get a Provider Organization][5]           | <span class="badge badge--success">GET</span> `/users/{leafUserId}/{provider}/organizations/{provider_org_id}` |
| [Update a Provider Organization Status][6] | <span class="badge badge--success">PATCH</span> `/users/{leafUserId}/{provider}/organizations/{provider_org_id}`         |

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

## Organizations Sync 

:::info
- The `provider` property value can be only be `JohnDeere`
:::

### Resource

Here's the properties available for a Provider Organization.

```json
{
  
  "provider_org_id": "5206781", 
  "provider_org_name": "TB Farms", 
  "status": "SELECTED" 

}
```

- The `provider_org_id` property is referecing the organization id value from the provider. It should be used while managing this resource.
- The `provider_org_name` property is referecing the organization name value from the provider.
- The `status` property is refrencing to the current state of the resource. The property can have multiple values between `PREVIEW`, `SELECTED` and `BLOCKED`. 
  - If the `status` property has the value `SELECTED`, all the resources available to be fecthed from the provider will be processed.
  - If the `status` property has the value `PREVIEW`, no resources beyond the organization itsefl will be processed.
  - If the `status` property has the value `BLOCKED`, the organization does not have the required permissions in order to be processed by Leaf API, to troubleshoot this issue please review the Step 3 of the [John Deere Authentication Guide][7], once the setup is complete, the resource will be available with the `PREVIEW` status. For any additional troubleshoot options, please reach out to help@withleaf.io


### Get All Provider Organizations

With this endpoint users can check the organizations ingested from the integration process.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "provider_org_id": "01011000",
    "provider_org_name": "Leaf Organization",
    "status": "SELECTED"
  },
  {
    "provider_org_id": "123321",
    "provider_org_name": "Agriculture Organization",
    "status": "PREVIEW"
  }
]

```

### Get a Provider Organization

With this endpoint, users can select a provider organization individually.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{provider_org_id}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{provider_org_id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{provider_org_id}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "provider_org_id": "123321",
    "provider_org_name": "Agriculture Organization",
    "status": "PREVIEW"
}

```


### Patch a Provider Organization

With this endpoint, users can change the status of a provider organization. You can only change the status of a provider organization between `SELECTED` or `PREVIEW`. Also, as mentioned before, provider organizations with the `BLOCKED` status cannot be changed.  

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{provider_org_id}/{status}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.patch(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{provider_org_id}/{status}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.patch(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PATCH \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{provider_org_id}/{status}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "provider_org_id": "123321",
    "provider_org_name": "Agriculture Organization",
    "status": "PREVIEW"
}

```
