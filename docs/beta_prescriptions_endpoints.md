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
[4]: #upload-prescription-to-cnhi
[5]: #list-prescriptions-from-cnhi
[6]: #list-prescriptions-from-john-deere
[7]: #upload-prescription-to-john-deere
[8]: #upload-prescription-to-climate-fieldview
[9]: /docs/field_boundary_management_endpoints#get-all-growers
[10]: #download-prescription-from-john-deere
[11]: #upload-prescription-to-trimble
[12]: #upload-prescription-to-agleader

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/beta/prescription/api
```

See below the REST resources and their endpoints available in this service.

## Prescription (BETA)

This feature has the following endpoints available:

| Description                                   | Endpoints                                                                              |
|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [Upload prescription to Raven Slingshot][2]   | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/ravenSlingshot`    |
| [List prescriptions from Raven Slingshot][3]  | <span class="badge badge--success">GET</span> `/users/{leafUserId}/ravenSlingshot`     |
| [Lists prescriptions from John Deere][6]      | <span class="badge badge--success">GET</span> `/users/{leafUserId}/johnDeere`          |
| [Upload prescription to John Deere][7]        | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/johnDeere`         |
| [Download prescription from John Deere][10]   | <span class="badge badge--success">GET</span> `/users/{leafUserId}/johnDeere/download` |
| [Upload prescription to CNHi][4]              | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/cnhi`              |
| [List prescriptions from CNHi][5]             | <span class="badge badge--success">GET</span> `/users/{leafUserId}/cnhi`               |
| [Upload prescription to Climate FieldView][8] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/climateFieldView`  |
| [Upload prescription to Trimble][11]          | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/trimble`           |
| [Upload prescription to AgLeader][12]         | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/agleader`          |

### Upload prescription to Raven Slingshot

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/ravenSlingshot`

Upload a prescription using the Raven Slingshot credentials of the LeafUserId.

The file to be uploaded needs to be .zip and contain one of each of the following file extension: shp, dbf, shx; and all files must have the same name. The zip file cannot contain subfolders.

#### Example:

A zip file named “prescription_rx_map”, containing the following files:
- prescription_rx_map.shp
- prescription_rx_map.dbf
- prescription_rx_map.shx

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

  const endpoint ='https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/ravenSlingshot'

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

  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/ravenSlingshot'
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
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/ravenSlingshot'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "id": "str",
  "name": "str"
}
```

### List prescriptions from Raven Slingshot

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/ravenSlingshot`

List the existing prescriptions available in the provider.

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
  const endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/ravenSlingshot'
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
  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/ravenSlingshot'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/ravenSlingshot'
  ```

  </TabItem>
</Tabs>


#### Response

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

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/johnDeere`

Upload a prescription using the John Deere credentials of the LeafUserId.

There is a required request parameter called organizationId for this endpoint to work.
This property should be the id of the organization at JohnDeere.

The file to be uploaded needs to be .zip and have a folder called "Rx" containing one of each of the following file extension: shp, dbf, shx; and all files must have the same name. The zip file cannot contain subfolders.

#### Example:

A .zip file named “prescription_rx_map”, having a parent folder called "Rx", containing the following files:
- Rx/
  - prescription_rx_map.shp
  - prescription_rx_map.dbf
  - prescription_rx_map.shx

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

  const endpoint ='https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'

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

  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
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
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "id": "str",
  "name": "str"
}
```


### List prescriptions from John Deere

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/johnDeere`

List the existing prescriptions available in the provider.

There is a required request parameter called organizationId for this endpoint to work.
This property should be the id of the organization at JohnDeere.

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
  const endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
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
  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/johnDeere?organizationId={organizationId}'
  ```

  </TabItem>
</Tabs>


#### Response

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


### Download prescription from John Deere

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/johnDeere/download`

Download a prescription related to a file ID using the LeafUserId's John Deere credentials. This file ID is relative 
to the one available from the **John Deere side**.

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

  const endpoint ='https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/johnDeere/download?fileId={fileId}'

  const headers = {
    'Authorization': `Bearer ${TOKEN}`
    'Content-Type': 'multipart/form-data'
  }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/johnDeere/download?fileId={fileId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/johnDeere/download?fileId={fileId}'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "fileUrl": "url_to_download"
}
```




### Upload prescription to CNHi

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/cnhi`

Upload a prescription using the CNHi credentials of the LeafUserId.

<p align='justify'>

You can get the company Id from the [grower endpoints][9] using the property `providerOrganizationId`.

</p>

The file to be uploaded must be a .zip and contain each of the following file extension: shp, dbf and shx. 
All files must have the same name. The zip file cannot contain subfolders.

#### Example:

A .zip file named “prescription_map” containing the following files:
- prescription_map.shp
- prescription_map.dbf
- prescription_map.shx

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

  const endpoint ='https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/cnhi?companyId={companyId}'

  const headers = {
    'Authorization': `Bearer ${TOKEN}`
    'Content-Type': 'multipart/form-data'
  }

  const form = new FormData()
  form.append('file', 'prescription_map.zip')

  axios.post(endpoint, form, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/cnhi?companyId={companyId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  files = {'file': open('prescription_map.zip')}

  response = requests.post(endpoint, headers=headers, files=files)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -F 'file=prescription_map.zip' \
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/cnhi?companyId={companyId}'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "id": "str",
  "name": "str"
}
```


### List prescriptions from CNHi

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/cnhi`

List the existing prescriptions available in the provider.

<p align='justify'>

You can get the company Id from the [grower endpoints][9] using the property `providerOrganizationId`.

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
  const endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/cnhi?companyId={companyId}'
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
  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/cnhi?companyId={companyId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/cnhi?companyId={companyId}'
  ```

  </TabItem>
</Tabs>


#### Response

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

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/climateFieldView`

Upload a prescription using the Climate FieldView credentials of the LeafUserId.

The file to be uploaded needs to be .zip and contain one of each of the following file extension: shp, dbf, shx; and all files must have the same name. The zip file cannot contain subfolders.

#### Example:

A zip file named “prescription_rx_map”, containing the following files:
- prescription_rx_map.shp
- prescription_rx_map.dbf
- prescription_rx_map.shx

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

  const endpoint ='https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/climateFieldView'

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

  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/climateFieldView'
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
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/climateFieldView'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "id": "str",
  "name": "str"
}
```

### Upload prescription to Trimble

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/trimble`

Upload a prescription using the Trimble credentials of the LeafUserId.

The file to be uploaded needs to be .zip and contain one of each of the following file extension: shp, dbf, shx; and all files must have the same name. The zip file cannot contain subfolders.

Also, in Raven's case the user must fill the `rateAttribute` and `rateUnit` as required parameters within the URL. An optional parameter is the `fileName`.

The `rateAttribute` must contain the name of the column from the Shapefile.

The `rateUnit` must contain one the values in the table below

| `rateUnit`  |
|-------------|
| gal/ac      |
| l/ha        |
| lbs/ac      |
| ton/ac      |
| kg/ha       |
| t/ha        |
| kS/ac       |
| kS/ha       |
| lbs(N)/ac   |
| kg(N)/ha    |
| S/ha        |
| S/ha        |

#### Example:

A zip file named “prescription_rx_map”, containing the following files:
- prescription_rx_map.shp
- prescription_rx_map.dbf
- prescription_rx_map.shx

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

  const endpoint ='https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/trimble?rateAttribute={}&rateUnit={}'

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

  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/trimble?rateAttribute={}&rateUnit={}'
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
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/trimble?rateAttribute={}&rateUnit={}'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "id": "str",
  "name": "str"
}
```


### Upload prescription to AgLeader

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/agleader`

Upload a prescription using the AgLeader credentials of the LeafUserId.

The file to be uploaded needs to be .zip and contain one of each of the following file extension: shp, dbf, shx; and all files must have the same name. The zip file cannot contain subfolders.

#### Example:

A zip file named “prescription_rx_map”, containing the following files:
- prescription_rx_map.shp
- prescription_rx_map.dbf
- prescription_rx_map.shx

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

  const endpoint ='https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/agleader'

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

  endpoint = 'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/agleader'
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
      'https://api.withleaf.io/services/beta/prescription/api/users/{leafUserId}/agleader'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "id": "str",
  "name": "str"
}
```

[contact]: mailto:help@withleaf.io
