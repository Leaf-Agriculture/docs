---
title: Beta > Prescriptions Endpoints
description: Beta - Prescriptions Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: #upload-prescription-to-raven-slingshot
[3]: #list-prescriptions-from-raven-slingshot
[4]: #upload-prescription-to-climate-fieldview
[5]: #list-prescriptions-from-john-deere
[6]: #upload-prescription-to-john-deere


## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/beta/prescriptions/api
```

See below the REST resources and their endpoints available in this service.

## Prescription (BETA)

### Prescription Resources

This feature has the following endpoints available:

Description | Endpoints
--- | ---
[Upload prescription to Raven Slingshot][2] | <span class="badge badge--success">POST</span> `/users/{leafUserId}/ravenSlingshot`
[List prescriptions from Raven Slingshot][3] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/ravenSlingshot`
[Upload prescription to Climate FieldView][4] | <span class="badge badge--success">POST</span> `/users/{leafUserId}/climateFieldView`
[Lists prescriptions from John Deere][5] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/johnDeere`
[Upload prescription to John Deere][6] | <span class="badge badge--success">POST</span> `/users/{leafUserId}/johnDeere`



### Upload prescription to Raven Slingshot

&nbsp<span class="badge badge--success">POST</span> `/users/{leafUserId}/ravenSlingshot`

Upload a prescription using the Raven Slingshot credentials of the LeafUserId.

The file to be uploaded needs to be .zip and contain one of each of the following file extension: shp, dbf, shx; and all files must have the same name. The zip file cannot contain subfolders.

#### Example:

A zip file named “prescription_rx_map”, containing the following files:
- prescription_rx_map.shp
- prescription_rx_map.dbf
- prescription_rx_map.shx

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

  const endpoint ='https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/ravenSlingshot'

  const headers = {
    'Authorization': `Bearer ${TOKEN}`
    'Content-Type': 'multipart/form-data'
  }

  const form = new FormData()
  form.append('file', 'prescription_rx_map.zip')

  axios.post(endpoint, form, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/ravenSlingshot'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  files = {'file': open('prescription_rx_map.zip')}

  response = requests.post(endpoint, headers=headers, files=files)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -F 'file=prescription_rx_map.zip' \
      'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/ravenSlingshot'
  ```

  </TabItem>
</Tabs>


#### Response

The response is json with the id of the file uploaded to the provider .

```json
{
  "id": "str",
  "name": "str"
}
```

### List prescriptions from Raven Slingshot

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/ravenSlingshot`

List the existing prescriptions available in the provider.

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
  const endpoint = 'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/ravenSlingshot'
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
  endpoint = 'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/ravenSlingshot'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/ravenSlingshot'
  ```

  </TabItem>
</Tabs>


#### Response
A json array of prescriptions available in this provider 

```json
[
  {
    "id": "str",
    "name": "str"
  },
  {
    "id": "str",
    "name": "str"
  }
]
```

### Upload prescription to Climate FieldView

&nbsp<span class="badge badge--success">POST</span> `/users/{leafUserId}/climateFieldView`

Upload a prescription using the Climate FieldView credentials of the LeafUserId.

The file to be uploaded needs to be .zip and contain one of each of the following file extension: shp, dbf, shx; and all files must have the same name. The zip file cannot contain subfolders.

#### Example:

A zip file named “prescription_rx_map”, containing the following files:
- prescription_rx_map.shp
- prescription_rx_map.dbf
- prescription_rx_map.shx

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

  const endpoint ='https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/climateFieldView'

  const headers = {
    'Authorization': `Bearer ${TOKEN}`
    'Content-Type': 'multipart/form-data'
  }

  const form = new FormData()
  form.append('file', 'prescription_rx_map.zip')

  axios.post(endpoint, form, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/climateFieldView'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  files = {'file': open('prescription_rx_map.zip')}

  response = requests.post(endpoint, headers=headers, files=files)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -F 'file=prescription_rx_map.zip' \
      'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/climateFieldView'
  ```

  </TabItem>
</Tabs>


#### Response

The response is json with the id of the file uploaded to the provider.

```json
{
  "id": "str",
  "name": "str"
}
```

### List prescriptions from John Deere

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/johnDeere`

List the existing prescriptions available in the provider.

There is a required request param called organizationId for this endpoint to work.
This property should be the id of the organization at JohnDeere.

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
  const endpoint = 'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
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
  endpoint = 'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
  ```

  </TabItem>
</Tabs>


#### Response
A json array of prescriptions available in this provider.

```json
[
  {
    "id": "str",
    "name": "str"
  },
  {
    "id": "str",
    "name": "str"
  }
]
```
### Upload prescription to John Deere

&nbsp<span class="badge badge--success">POST</span> `/users/{leafUserId}/johnDeere`

Upload a prescription using the John Deere credentials of the LeafUserId.

There is a required request param called organizationId for this endpoint to work.
This property should be the id of the organization at JohnDeere.

The file to be uploaded needs to be .zip and have a folder called "Rx" containing one of each of the following file extension: shp, dbf, shx; and all files must have the same name. The zip file cannot contain subfolders.

#### Example:

A .zip file named “prescription_rx_map”, having a parent folder called "Rx", containing the following files:
- Rx/
  - prescription_rx_map.shp
  - prescription_rx_map.dbf
  - prescription_rx_map.shx

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

  const endpoint ='https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'

  const headers = {
    'Authorization': `Bearer ${TOKEN}`
    'Content-Type': 'multipart/form-data'
  }

  const form = new FormData()
  form.append('file', 'prescription_rx_map.zip')

  axios.post(endpoint, form, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  files = {'file': open('prescription_rx_map.zip')}

  response = requests.post(endpoint, headers=headers, files=files)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -F 'file=prescription_rx_map.zip' \
      'https://api.withleaf.io/services/beta/prescriptions/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
  ```

  </TabItem>
</Tabs>


#### Response

The response is json with the id of the file uploaded to the provider.

```json
{
  "id": "str",
  "name": "str"
}
```
[contact]: mailto:help@withleaf.io
