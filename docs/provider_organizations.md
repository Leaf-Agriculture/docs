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

| Description                                | Endpoints                                                                                                        |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [Get Provider Organizations][1]            | <span class="badge badge--success">GET</span> `/users/{leafUserId}/organizations/{provider}`                     |
| [Get All Provider Organizations][4]        | <span class="badge badge--success">GET</span> `/users/{leafUserId}/{provider}/organizations`                     |
| [Get a Provider Organization][5]           | <span class="badge badge--success">GET</span> `/users/{leafUserId}/{provider}/organizations/{provider_org_id}`   |
| [Update a Provider Organization Status][6] | <span class="badge badge--success">PATCH</span> `/users/{leafUserId}/{provider}/organizations/{provider_org_id}` |
| [Sync Provider Organizations][7]           | <span class="badge badge--success">POST</span> `/users/{leafUserId}/{provider}/organizations/sync`               |

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

The properties available for a Provider Organization are.

```json
{
  
  "providerOrgId": "520674381", 
  "providerOrgName": "Leaf Farms", 
  "status": "SELECTED",
  "managementUri": "https://connections.deere.com/connections/clientKey/connections-dialog?orgId=Leaf Farms"

}
```

- The `providerOrgId` property references the organization ID value from the provider. For example, if the John Deere organization ID is 12345, then the `providerOrgId` should be 12345.
- The `providerOrgName` property references the value of the organization name from the provider.
- The `managementUri` property references the connection between your John Deere Application and the Provider Organization. If the URL alias contains the `connections-dialog` property then the connection is establshied with your JD Application, these Organizations can be updated between `SELECTED` and `PREVIEW`, if the management URL contains the `select-organizations` property then your setup with the JD Application is not complete.
- The `status` property represents the current state of the resource. The state of the resource can be either `PREVIEW`, `SELECTED`, or `BLOCKED`. 
  - If the `status` property has the value `SELECTED`, all available resources will be fetched from the provider and processed.
  - If the `status` property has the value `PREVIEW`, no resources beyond the organization itself will be processed.
  - If the `status` property has the value `BLOCKED`, the organization does not have the required permissions or does not have the connection, which can be checked with the `managementUri` to be processed by Leaf. To troubleshoot this issue please review Step 3 of the [John Deere Authentication Guide][7], once the setup is complete, the resource will be available with the `PREVIEW` status. For any additional troubleshooting options, please reach out to help@withleaf.io


### Get All Provider Organizations

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/{provider}/organizations`

<p align='justify'>

With this endpoint users can retrieve all organizations.

</p>

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (default is 20, max is 100)

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
    "providerOrgId": "01011000",
    "providerOrgName": "Leaf Organization",
    "status": "SELECTED",
    "managementUri": "https://connections.deere.com/connections/clientKey/connections-dialog?orgId=Leaf Agriculture"
  },
  {
    "providerOrgId": "123321",
    "providerOrgName": "Agriculture Organization",
    "status": "PREVIEW",
    "managementUri": "https://connections.deere.com/connections/clientKey/connections-dialog?orgId=Agriculture Organization"
  },
  {
    "providerOrgId": "123321",
    "providerOrgName": "Agriculture Farm",
    "status": "BLOCKED",
    "managementUri": "https://connections.deere.com/connections/clientKey/select-organizations"
  }  
]

```

### Get a Provider Organization

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/{provider}/organizations`

<p align='justify'>

With this endpoint users can retrieve individual provider organizations.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{providerOrgId}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{providerOrgId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{providerOrgId}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "providerOrgId": "123321",
    "providerOrgName": "Agriculture Organization",
    "status": "PREVIEW",
    "managementUri": "https://connections.deere.com/connections/clientKey/connections-dialog?orgId=Agriculture Organization"
}

```


### Patch a Provider Organization


&nbsp<span class="badge badge--success">PATCH</span> `/users/{leafUserId}/{provider}/organizations`

<p align='justify'>

With this endpoint, users can change the status of a provider organization. You can only change the status of a provider organization between `SELECTED` or `PREVIEW`. Also, as mentioned before, provider organizations with the `BLOCKED` status cannot be changed.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{providerOrgId}/{status}'
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{providerOrgId}/{status}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.patch(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PATCH \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/{providerOrgId}/{status}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "providerOrgId": "123321",
    "providerOrgName": "Agriculture Organization",
    "status": "SELECTED",
    "managementUri": "https://connections.deere.com/connections/clientKey/connections-dialog?orgId=Agriculture Organization"
}

```


### Sync Provider Organizations

&nbsp<span class="badge badge--success">POST</span> `users/{leafUserId}/{provider}/organizations/sync`

<p align='justify'>

With this endpoint, users can sync their organizations to reflect the current setup on the Provider Account into Leaf's resources.

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

  const endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/sync'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.post(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/sync'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.post(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PATCH \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/{provider}/organizations/sync'
  ```

  </TabItem>
</Tabs>


This endpoint could be used on the following scenarios:

- When updating the Organization Connection using the `managementUri` property from the Provider Organization. Provider Organizations should have the `status` changed from `BLOCKED` to `PREVIEW` if the cnnection setup is correct, after the `/sync`.
- If the user changes the `organizationDataSync` value from `ALL` to `SELECTED_ONLY` to the specfied Leaf User.
- In case of one or more missing Provider Organizations from the List, using the endpoint will trigger the process of fethcing the latest resources avaialble.