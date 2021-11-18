---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: #upload-prescription-raven-slingshot
[3]: #get-prescription-raven-slingshot
[4]: #upload-prescription-climate-field-view

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


### Upload prescription to Raven Slingshot

&nbsp<span class="badge badge--success">POST</span> `/users/{leafUserId}/ravenSlingshot`

Upload a prescription using the Raven Slingshot credentials of the LeafUserId.


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

List the existing prescriptions available in the provider

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
      -d '{ "name": "str"}' \
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
    "name": "str,"
  },
  {
    "id": "str",
    "name": "str,"
  }
]
```

### Upload prescription to Climate FieldView

&nbsp<span class="badge badge--success">POST</span> `/users/{leafUserId}/climateFieldView`

Upload a prescription using the Climate FieldView credentials of the LeafUserId.


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

The response is json with the id of the file uploaded to the provider .

```json
{
  "id": "str",
  "name": "str"
}
```

[contact]: mailto:help@withleaf.io
