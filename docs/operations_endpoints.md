---
title: Endpoints
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
[9]: #get-a-files-images
[10]: alerts_events#operation-events
[11]: #get-all-batches
[12]: #merge-files
[13]: #get-a-files-units
[sample_summary]: operations_sample_output

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/operations/api
```

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Get all files][3] | <span class="badge badge--success">GET</span> `/files`
[Get a file][4] | <span class="badge badge--success">GET</span> `/files/{id}`
[Get a file summary][5] | <span class="badge badge--success">GET</span> `/files/{id}/summary`
[Get a file's images][6] | <span class="badge badge--success">GET</span> `/files/{id}/images`
[Get a file's units][13] | <span class="badge badge--success">GET</span> `/files/{id}/units`
[Upload a file][7] | <span class="badge badge--warning">POST</span> `/batch`
[Get a batch][8] | <span class="badge badge--success">GET</span> `/batch/{id}`
[Get all batches][11] | <span class="badge badge--success">GET</span> `/batch`
[Merge files][12] | <span class="badge badge--warning">POST</span> `/files/merge`

For easily testing these endpoints, we recommend using our Postman [collection][1].


:::info requires Leaf User with credentials
To have access to operation files, you will need a Leaf User with valid credentials
from the provider you want to access data. If you don't have a Leaf User or you
have not connected it with any provider yet, see **[how to create a Leaf User]()**
or **[how to add credentials to a Leaf User]()**.
:::

---

### Get all files

&nbsp<span class="badge badge--success">GET</span>  `/files`

Gets a paged list of files that belong to the current logged in user. It is
possible to filter the results by passing some query parameters. They are listed
below.

| Parameter (to filter by) | Values
| - | - |
| `leafUserId` | uuid of one of your users |
| `provider` | `CNHI`, `JohnDeere`, `Trimble`, `ClimateFieldView` or `Leaf`|
| `status` | `processed`, `failed` or `processing` |
| `origin` | `provider`, `automerged`, `merged` or `uploaded` |
| `organizationId` | the provider organizationId (only available for John Deere) |
| `createdTime` | ISO 8601 date. Returns operations from the createdTime onward |
| `operationStartTime` | ISO 8601 date. Returns operations from the operationStartTime onward |
| `operationEndTime` | ISO 8601 date. Returns operations until the operationEndTime |
| `operationType` | `applied`, `planted` or `harvested` |
| `minArea` | a number (Double) representing the minimum area (square meters) of the operations to be returned |



You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page

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
[Here's a link with sample responses][sample_summary] for "planted", "applied" 
and "harvested" operation files.


```json
{
    "message": "SUCCESS",
    "operations": [OPERATION]
}    
```

---

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

[Here's a link with sample responses][sample_summary] for "planted", "applied" 
and "harvested" operation files.

---

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

[Here's a link with sample responses][sample_summary] for "planted", "applied" 
and "harvested" operation files.



---

### Get a file's images

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/images`

Gets a list of PNG images generated from the operation's file properties.

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
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}/images'
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

  The `property` refers to the property extracted from files' data to generate the
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

### Get a file's units

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/units`

Gets the file's properties and their units.

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
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}/units'
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
      "yieldVolume": "bu",
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


---

### Upload a file

&nbsp<span class="badge badge--warning">POST</span> `/batch`

Posts/creates a new file in Leaf. The file must be sent as a zip.

This endpoint accepts a .zip of operation files, detects which files are in the 
.zip, and returns the ID of the process, which can in turn be used to retrieve 
the ID's of the files being processed.

This endpoint receives two required URL parameters, a `leafUserId` and `provider` 

A `provider` can be set as one of the following:

```
Other
ClimateFieldView
CNHI
JohnDeere
Trimble
```

If provider is set to "Other", Leaf will detect which files are 
present in the .zip file and process them accordingly.

Leaf will detect files present in the uploaded .zip and 
create/return one file id for each file that is detected. These individual files 
can then be accessed individually by their ID, or via their associated field 
boundary.

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

  const endpoint ='https://api.withleaf.io/services/operations/api/batch'

  const headers = {
    'Authorization': `Bearer ${TOKEN}`
    'Content-Type': 'multipart/form-data'
  }

  const params = {
    provider: 'JohnDeere',
    leafUserId: 'id'
  }

  const form = new FormData()
  form.append('file', 'shapefile.zip')

  axios.post(endpoint, form, { headers, params })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/operations/api/batch'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  files = {'file': open('shapefile.zip')}
  params = {
    'provider': 'JohnDeere',
    'leafUserId': 'id'
  }

  response = requests.post(endpoint, headers=headers, files=files, params=params)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -F 'file=shapefile.zip' \
      'https://api.withleaf.io/services/operations/api/batch?' \
      'provider=JohnDeere&leafUserId=id'
  ```

  </TabItem>
</Tabs>

##### Response

Returns a single JSON object, as shown below:

```json
{
    "id": "996aea67-52bc-4d4b-9b77-028756dc0ee9",
    "leafUserId": "ede8f781-1d55-4b2d-83a1-6785ddab6e1d",
    "fileName": "Climate.zip",
    "size": 8652951,
    "provider": "Other",
    "status": "RECEIVED",
    "uploadTimestamp": "2021-03-12T19:50:55.567755Z"
}
```

This id can then be queried to retrieve on [Get batch][8] to get the individual file ID's. 
Then you can query each of the files individually with 
[Get a File](#get-a-file) or all of them, filtering by `createdDate`, on 
[Get all Files](#get-all-files).


#### Batch status

The *status* key will evolve accordingly to the following states:

Status | Description
--- | ---
RECEIVED | Is the default state for every batch created
PROCESSED | When all the files included in the batch were processed, and at least one file have status SUCCESS
FAILED | The batch did not generated any leaf files with status SUCCESS

The messages with FAILED status have the key *statusDetails*. The statusDetails are just informative and should not be used programatically.

```json
{
    "id": "996aea67-52bc-4d4b-9b77-028756dc0ee9",
    "leafUserId": "ede8f781-1d55-4b2d-83a1-6785ddab6e1d",
    "fileName": "Climate.zip",
    "size": 8652951,
    "provider": "Other",
    "status": "FAILED",
    "statusDetails": "No operation found. Check file format before re-trying or contact support. Check file format before re-trying or contact support", 
    "uploadTimestamp": "2021-03-12T19:50:55.567755Z"
}
```

The following status can be present on *statusDetails*:

Status | Description
--- | ---
Failed to open Zip file | It means that the file uploaded is not a valid zip
No operation found | We could not identify any **valid** machinery file inside the zip uploaded 
No operation discovered | When we can't find any machinery file inside the batch
Error extracting files from batch | When an error internal to our API happened

---

### Get Batch upload

Once you've uploaded files, you can then query these files individually, merge the files, or query for them 
via [Get all Files](#get-all-files).
You can also query the batch upload ID to see a list of files generated in the upload and a status of the upload with this endpoint.


<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="py">

  ```python
  import requests

  url = "https://api.withleaf.io/services/operations/api/batch/{batch_id}/"

  headers = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}

  response = requests.request("GET", url, headers=headers)

  print(response.text)
  ```

  </TabItem>
</Tabs>

##### Response:

When you query a batch upload ID, you will receive a single JSON object:

```json 
{
    "id": "f893c921-0f38-4f39-9f3e-be765ac61df0",
    "leafUserId": "bdf5f624-fb9b-4294-949c-29e979f0ce5a",
    "provider": "Other",
    "status": "PROCESSED",
    "leafFiles": [
        "8334f4bb-48de-44e2-903b-6dedd6db6683",
        "81778f58-8eed-41cc-a025-e653ea85b01e",
        "0f606bef-b529-4899-854c-9b698cd08762",
        "84fec273-b458-4be7-8feb-44204502f126",
        "92b7367b-2ffd-4a82-ba9b-5a40e8b68714",
        "90e7e130-8f33-4752-b8f4-3a132246f047",
        "cb97857e-61b0-4fbe-a5c1-1083cfa6738f",
        "0cded205-7734-40fb-8906-b82d36e35845",
        "dc24d491-983c-4ebe-b961-8c749943529f",
        "67af8697-47bc-4886-935f-5880d1eba31d",
        "8b7d8b7b-e682-4c3e-aee2-3b7713cc81a4",
        "e5067ed3-8463-43b9-a8a5-3b3c1eee44bc",
        "b9d30d3a-0207-410f-81da-afb31a1b36cb",
        "eace9b90-a520-4c4c-af89-4c3fd5da68fa",
        "6ea55c68-203f-448b-9e7f-dcd014c31cc3"
    ]
}
```


---

### Get all Batches

Once you've uploaded files, you can then query these files individually, merge the files, or query for them 
via [Get all Files](#get-all-files).
You can also query the batch upload ID to see a list of files generated in the upload and a status of the upload with this endpoint.


<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="py">

  ```python
  import requests

  url = "https://api.withleaf.io/services/operations/api/batch"

  headers = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}

  response = requests.request("GET", url, headers=headers)

  print(response.text)
  ```

  </TabItem>
</Tabs>

##### Response:

When you query a batch upload ID, you will receive a JSON with list of batches:

```json 
[
  {
      "id": "f893c921-0f38-4f39-9f3e-be765ac61df0",
      "leafUserId": "bdf5f624-fb9b-4294-949c-29e979f0ce5a",
      "provider": "Other",
      "status": "PROCESSED",
      "leafFiles": [
          "8334f4bb-48de-44e2-903b-6dedd6db6683",
          "81778f58-8eed-41cc-a025-e653ea85b01e",
          "0f606bef-b529-4899-854c-9b698cd08762",
          "84fec273-b458-4be7-8feb-44204502f126",
          "92b7367b-2ffd-4a82-ba9b-5a40e8b68714",
          "90e7e130-8f33-4752-b8f4-3a132246f047",
          "cb97857e-61b0-4fbe-a5c1-1083cfa6738f",
          "0cded205-7734-40fb-8906-b82d36e35845",
          "dc24d491-983c-4ebe-b961-8c749943529f",
          "67af8697-47bc-4886-935f-5880d1eba31d",
          "8b7d8b7b-e682-4c3e-aee2-3b7713cc81a4",
          "e5067ed3-8463-43b9-a8a5-3b3c1eee44bc",
          "b9d30d3a-0207-410f-81da-afb31a1b36cb",
          "eace9b90-a520-4c4c-af89-4c3fd5da68fa",
          "6ea55c68-203f-448b-9e7f-dcd014c31cc3"
      ]
  }
]
```


---


### Merge files

&nbsp<span class="badge badge--warning">POST</span> `/files/merge`

Posts a merge operation to our server.

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
    { label: 'JSON Response', value: 'json', },
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
  <TabItem value="json">

  Returns a single JSON object:

  ```json
  {
    "id": "id",
    "status": "SENT_TO_MERGE"
  }
  ```

  After a few minutes, you can consult the result of Leaf processing over this file by
  performing GET consults in this.

  </TabItem>
</Tabs>






\* = Always in response  
\*\* = Usually in response but not required to pass tests

## Alerts

With Alerts you can be notified when something happens or changes instead of needing to repeatedly query for changes. 
Leaf Alerts support events that happen within Leaf and events that happen within supported 3rd party software. 


### List of Operations Events

Leaf Operations Service can Alert you on these events: [list of Operations Events][10]
