---
title: Machine File Conversion Endpoints
description: Machine File Conversion - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://tools.ietf.org/html/rfc7946
[3]: #get-all-files
[4]: #get-a-file
[5]: #get-a-file-summary
[6]: #get-a-files-images
[7]: #upload-a-file
[8]: #get-batch-upload
[9]: /docs/alerts_events#operation-events
[10]: #get-all-batches
[11]: #merge-files
[12]: #get-a-files-units
[13]: #retry-a-batch
[14]: machine_file_conversion_sample_output.md
[15]: #get-a-file-status

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/operations/api
```

This service has the following endpoints available:

| Description              | Endpoints                                                           |
|--------------------------|---------------------------------------------------------------------|
| [Get all files][3]       | <span class="badge badge--success">GET</span> `/files`              |
| [Get a file][4]          | <span class="badge badge--success">GET</span> `/files/{id}`         |
| [Get a file summary][5]  | <span class="badge badge--success">GET</span> `/files/{id}/summary` |
| [Get a file's images][6] | <span class="badge badge--success">GET</span> `/files/{id}/images`  |
| [Get a file's units][12] | <span class="badge badge--success">GET</span> `/files/{id}/units`   |
| [Merge files][11]        | <span class="badge badge--warning">POST</span> `/files/merge`       |
| [Get a file status][15]  | <span class="badge badge--success">GET</span> `/files/{id}/status`  |


To easily test these endpoints, we recommend using our Postman [collection][1].

:::info requires Leaf User
Before you begin importing data, you will need a Leaf User. You’ll be able to attach provider credentials and manually upload data to the Leaf User. If you don't have a Leaf User or you have not connected it with any provider yet, see the [Leaf user overview](/docs/user_management_overview)
:::

### Get all files

&nbsp<span class="badge badge--success">GET</span>  `/files`

Gets a paged list of files that belong to the current logged in user. It is
possible to filter the results by passing some query parameters. They are listed
below.

| Parameter (to filter by) | Values
| - | - |
| `leafUserId` | uuid of one of your users |
| `provider` | `CNHI`, `JohnDeere`, `Trimble`, `ClimateFieldView`, `AgLeader` or `Leaf`|
| `status` | `processed`, `failed` or `processing` |
| `origin` | `provider`, `automerged`, `merged` or `uploaded` |
| `organizationId` | the provider organizationId (only available for John Deere) |
| `batchId` | uuid of the upload response (only available for uploaded files) |
| `createdTime` | ISO 8601 date. Returns operations from the createdTime onward |
| `startTime` | ISO 8601 date. Returns operations from the startTime onward |
| `endTime` | ISO 8601 date. Returns operations until the endTime |
| `operationType` | `applied`, `planted` or `harvested` |
| `minArea` | a number (Double) representing the minimum area (square meters) of the operations to be returned |

Also, for `operationType`: `harvested` we can process the yield properties related to the operation using the 
crop density and standard moisture available in this [table](machine_file_conversion_crops_table.md).   

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

  const endpoint ='https://api.withleaf.io/services/operations/api/files'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files'
  ```

  </TabItem>
</Tabs>


#### Response

The response is a JSON with the key "operations" referring to a list of files.
[Here's a link with sample responses][14] for "planted", "applied" 
and "harvested" operation files.


```json
{
    "message": "SUCCESS",
    "operations": [OPERATION]
}    
```



### Get a file

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}`

Gets a single file by its id.

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

  const endpoint ='https://api.withleaf.io/services/operations/api/files/{id}'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}'
  ```
  </TabItem>
</Tabs>

#### Response

[Here's a link with sample responses][14] for "planted", "applied" 
and "harvested" operation files.



### Get a file summary

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/summary`

Gets the summary, if available, for the file id.


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

  const endpoint ='https://api.withleaf.io/services/operations/api/files/{id}/summary'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/summary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}/summary'
  ```

  </TabItem>
</Tabs>


#### Response

[Here's a link with sample responses][14] for "planted", "applied" 
and "harvested" operation files.





### Get a file's images

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/images`

Gets a list of PNG images generated from the operation's file properties.

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

  const endpoint ='https://api.withleaf.io/services/operations/api/files/{id}/images'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/images'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
</Tabs>


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
  ....
]
```

The `property` refers to the property extracted from files' data to generate the
image. In the example above, the image would represent the elevation.

The `ramp` is the color ramp used to generate the image. The percentages
correspond to the minimum (0%) and maximum (100%) values in the image. The
listed values correspond to RGB values used. The `nv` refers to `no value`. It
is used internally to make the image transparent on places without data.
Currently, this ramp is the same in all images processed.

We also generate an auxiliary `xml` with geographic information to handle this
image on GIS environments. You just need to append the `".aux.xml"` string to the png url.


### Get a file's units

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/units`

Gets the file's properties and their units.

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

  const endpoint ='https://api.withleaf.io/services/operations/api/files/{id}/units'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/units'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
</Tabs>

Returns a JSON like the following:

```json
{
    "distance": "ft",
    "heading": "arcdeg",
    "speed": "mi/hr",
    "elevation": "ft",
    "harvestMoisture": "prcnt",
    "wetMass": "lb",
    "yieldVolume": "bu",
    "equipmentWidth": "ft"
}
```

These properties vary depending on the operationType, but you can expect the same,
standardized keys, across different providers.

Units usually don't change for the same Leaf User, since the providers units
configuration is based on their location. But keep in mind that it's best to
always take the units into consideration, just to be sure.

### Merge files

&nbsp<span class="badge badge--warning">POST</span> `/files/merge`

Posts a merge operation to our server.

**Please note that Leaf merges files automatically, so you will not need to use this endpoint in most cases unless you wish to do so manually.**

A merge operation is performed asynchronously. This call will return immediately
with the newly created file entry, but at this point, the file is not already
processed and available. You will need to make a new `GET /files` request for the
new id and check the status. A status value of `processed` means the file is
done merging.

A merge process has some validations, the files passed must belong to
the same `leafUserId`, be of the same operation type and have the status as `processed`.
If any of those filters fail, the endpoint will result in HTTP 400 error.

It receives a single JSON object with the `ids` entry. Example:

```json
{
  "ids": [ "id1", "id2", "so on" ]
}
```

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

  const endpoint ='https://api.withleaf.io/services/operations/api/files/merge'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = { ids: [ 'id1', 'id2' ] }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/operations/api/files/merge'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {'ids': ['id1', 'id2']}

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "ids": [ "id1", "id2" ] }'
      'https://api.withleaf.io/services/operations/api/files/merge'
  ```

  </TabItem>
</Tabs>


Returns a single JSON object:

```json
{
  "id": "id",
  "status": "SENT_TO_MERGE"
}
```

After a few minutes, you can consult the result of Leaf processing over this file by
performing GET consults in this.




### Get a file status

&nbsp<span class="badge badge--success">GET</span> `/files/{id}/status`

Get status by file processing step by id.


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

  const endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/status'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.put(endpoint, data, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/status'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}/status'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "rawGeojson": {
    "status": "processed",
    "message": "ok"
  },
  "normalizedGeojson": {
    "status": "processed",
    "message": "ok"
  },
  "standardGeojson": {
    "status": "processed",
    "message": "ok"
  },
  "propertiesPNGs": {
    "status": "processed",
    "message": "ok"
  },
  "areaAndYield": {
    "status": "processed",
    "message": "ok"
  },
  "summary": {
    "status": "processed",
    "message": "ok"
  },
  "units": {
    "status": "processed",
    "message": "ok"
  },
  "originalFile": {
    "status": "processed",
    "message": "ok"
  },
  "cleanupGeojson": {
    "status": "processed",
    "message": "ok"
  }
}
```


## Alerts

With Alerts you can be notified when something happens or changes instead of needing to repeatedly query for changes. 
Leaf Alerts support events that happen within Leaf and events that happen within supported 3rd party software. 


### List of Operations Events

Leaf Operations Service can Alert you on these events: [list of Operations Events][10]
