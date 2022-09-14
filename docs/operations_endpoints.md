---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: #get-all-operations
[2]: #get-an-operation
[3]: #get-an-operation-summary
[4]: #get-an-operations-images
[5]: #get-an-operations-units
[6]: /docs/docs/alerts_overview
[7]: /docs/docs/alerts_events#operation-events
[sample_summary]: files_sample_output


## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/operations/api
```

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Get all operations][1] | <span class="badge badge--success">GET</span> `/operations`
[Get an operation][2] | <span class="badge badge--success">GET</span> `/operations/{id}`
[Get an operation summary][3] | <span class="badge badge--success">GET</span> `/operations/{id}/summary`
[Get an operation's images][4] | <span class="badge badge--success">GET</span> `/operations/{id}/images`
[Get an operation's units][5] | <span class="badge badge--success">GET</span> `/operations/{id}/units`

For easily testing these endpoints, we recommend using our Postman [collection][1].

### Get all operations

&nbsp<span class="badge badge--success">GET</span>  `/operations`

Gets a paged list of operations that belong to the current logged in user. It is
possible to filter the results by passing some query parameters. They are listed
below.

| Parameter (to filter by) | Values
| - | - |
| `leafUserId` | uuid of one of your users |
| `provider` | `CNHI`, `JohnDeere`, `Trimble`, `ClimateFieldView`, `AgLeader` or `Leaf`|
| `startTime` | ISO 8601 date. Returns operations from the startTime onward |
| `updatedTime` | ISO 8601 date. Returns operations from the updatedTime onward |
| `endTime` | ISO 8601 date. Returns operations until the endTime |
| `operationType` | `applied`, `planted` or `harvested` |
| `fieldId` | the field where the operation happened |

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)

:::info the default value for page size is 20
If the parameters page and size are not set, the endpoint will return 20 results.
:::

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```python
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/operations/api/operations'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations'
  ```

  </TabItem>
</Tabs>


#### Response


```json
[
  {
    "id": "1aa1ce7b-8bb9-4b2d-9421-d7a662cc1bb1",
    "apiOwnerUsername": "leaf",
    "leafUserId": "97770d44-62c4-48c3-8187-6be80f6de3d2",
    "startTime": "2015-04-18T19:31:27Z",
    "endTime": "2015-04-18T19:58:50Z",
    "updatedTime": "2021-08-24T16:00:15.062Z",
    "type": "planted",
    "files": [
        "8334f4bb-48de-44e2-903b-6dedd6db6683",
        "81778f58-8eed-41cc-a025-e653ea85b01e",
        "0f606bef-b529-4899-854c-9b698cd08762",
        "84fec273-b458-4be7-8feb-44204502f126",
        "92b7367b-2ffd-4a82-ba9b-5a40e8b68714"
    ],
    "fields": [
      {
        "id": "3a90d11a-70d0-4f62-b6d4-32006b1dcb6a"
      }
    ]
  }
]
```

---


### Get an operation

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}`

Gets a single operation by its id.

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}'
  ```
  </TabItem>
</Tabs>

#### Response


```json
{
  "id": "1aa1ce7b-8bb9-4b2d-9421-d7a662cc1bb1",
  "apiOwnerUsername": "leaf",
  "leafUserId": "97770d44-62c4-48c3-8187-6be80f6de3d2",
  "startTime": "2015-04-18T19:31:27Z",
  "endTime": "2015-04-18T19:58:50Z",
  "updatedTime": "2021-08-24T16:00:15.062Z",
  "type": "planted",
  "files": [
      "8334f4bb-48de-44e2-903b-6dedd6db6683",
      "81778f58-8eed-41cc-a025-e653ea85b01e",
      "0f606bef-b529-4899-854c-9b698cd08762",
      "84fec273-b458-4be7-8feb-44204502f126",
      "92b7367b-2ffd-4a82-ba9b-5a40e8b68714"
  ],
  "fields": [
    {
      "id": "3a90d11a-70d0-4f62-b6d4-32006b1dcb6a"
    }
  ]
}
```

---

### Get an operation summary

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/summary`

Gets the summary, if available, for the operation id.


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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/summary'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/summary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/summary'
  ```

  </TabItem>
</Tabs>


#### Response

[Here's a link with sample responses][sample_summary] for "planted", "applied" 
and "harvested" operations.

---


### Get an operation's images

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/images`

Gets a list of PNG images generated from the operation's properties.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/images'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/images'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/images'
  ```

  </TabItem>
  <TabItem value="json">

  Returns a JSON list of the following format:

  ```json
  [
    {
      "property": "elevation",
      "ramp": {
        "0%":   [200,   0, 0],
        "35%":  [255,  40, 0],
        "45%":  [255, 150, 0],
        "55%":  [255, 240, 0],
        "65%":  [  0, 230, 0],
        "75%":  [  0, 190, 0],
        "100%": [  0, 130, 0],
        "nv":   [  0,   0, 0, 0]
      },
      "url": "string"
    },
    ...
  ]
  ```

  The `property` refers to the property extracted from operations' data to generate the
  image. In the example above, the image would represent the elevation.

  The `ramp` is the color ramp used to generate the image. The percentages
  correspond to the minimum (0%) and maximum (100%) values in the image. The
  listed values correspond to RGB values used. The `nv` refers to `no value`. It
  is used internally to make the image transparent on places without data.
  Currently, this ramp is the same in all images processed.

  We also generate an auxiliary `xml` with geographic information to handle this
  image on GIS environments. You just need to append the `".aux.xml"` string to the png url.

  </TabItem>
</Tabs>


---

### Get an operation's units

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/units`

Gets the operations's properties and their units.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/units'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/units'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/units'
  ```

  </TabItem>
  <TabItem value="json">

  Returns a JSON like the following:

  ```json
  {
      "distance": "ft",
      "heading": "arcdeg",
      "speed": "mi/hr",
      "elevation": "ft",
      "harvestMoisture": "prcnt",
      "wetMass": "lb",
      "dryVolume": "bu",
      "equipmentWidth": "ft"
  }
  ```

These properties vary depending on the operationType, but you can expect the same,
standardized keys, across different providers.

Units usually don't change for the same Leaf User, since the providers units
configuration is based on their location. But keep in mind that it's best to
always take the units into consideration, just to be sure.

  </TabItem>
</Tabs>

### Crop operation by field

&nbsp<span class="badge badge--warning">POST</span>  `/operations/cropOperationByField`

This endpoint can be used to remove points from the operation standardGeojson that are outside of the field geometry.


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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/cropOperationByField'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }
  const data = { 'id': 'operationId' }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/cropOperationByField'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {'id': 'operationId'}

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "id": "operationId"}' \
      'https://api.withleaf.io/services/operations/api/operations/cropOperationByField'
  ```

  </TabItem>
</Tabs>


#### Response

Returns a single JSON object:

```json
{
    "id": "163982a0-d4e8-49a0-9572-9079e17f7c7d",
    "message": "Sent operation to be processed.",
    "leafFileId": "8924ca07-4168-4f15-83ec-37dd344888f6"
}
```

You could monitor the processing status using the `leafFileId` by our [Alerts Service][6].

---

## Alerts

With Alerts you can be notified when something happens or changes instead of needing to repeatedly query for changes. 
Leaf Alerts support events that happen within Leaf and events that happen within supported 3rd party software. 


### List of Operations Events

Leaf Operations Service can Alert you on these events: [list of Operations Events][7]
