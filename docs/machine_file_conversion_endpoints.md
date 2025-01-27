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
[2]: #get-all-files
[3]: #get-a-file
[4]: #get-a-file-summary
[5]: #get-a-files-images
[6]: #get-a-files-units
[7]: #get-a-file-status
[8]: #merge-files
[9]: https://docs.withleaf.io/docs/alerts_events#operation-events
[10]: https://docs.withleaf.io/docs/machine_file_conversion_sample_output#machine-file-sample
[11]: https://docs.withleaf.io/docs/user_management_endpoints#create-a-leaf-user
[12]: https://docs.withleaf.io/docs/user_management_endpoints#providers-credentials-endpoints
[13]: https://docs.withleaf.io/docs/machine_file_conversion_crops_table
[14]: https://docs.withleaf.io/docs/machine_file_conversion_sample_output#summary-response-sample
[15]: https://docs.withleaf.io/docs/machine_file_conversion_sample_output#machine-files-units
[16]: #get-uncovered-files
[17]: https://docs.withleaf.io/docs/operations_overview
[18]: #get-a-files-outsidefieldgeojson
[19]: #get-all-outsidefieldgeojson-files
[20]: /docs/configurations_overview#splitoperationsbyfield
[21]: /docs/configurations_overview#enableoutsidefieldgeojson-1
[22]: /docs/machine_file_conversion_sample_output#valid-points
[23]: /docs/configurations_overview#cleanupstandardgeojson-1

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/operations/api
```

This service has the following endpoints available:

| Description                        | Endpoints                                                                      |
|-----------------------------------|---------------------------------------------------------------------------------|
| [Get all files][2]                 | <span class="badge badge--success">GET</span> `/files`                         |
| [Get a file][3]                    | <span class="badge badge--success">GET</span> `/files/{id}`                    |
| [Get a file summary][4]            | <span class="badge badge--success">GET</span> `/files/{id}/summary`            |
| [Get a file's images][5]           | <span class="badge badge--success">GET</span> `/files/{id}/images`             |
| [Get a file's units][6]            | <span class="badge badge--success">GET</span> `/files/{id}/units`              |
| [Get a file status][7]             | <span class="badge badge--success">GET</span> `/files/{id}/status`             |
| [Get a file's outsideFieldGeoJSON][18] | <span class="badge badge--success">GET</span> `/files/{id}/outsideFieldGeojson` |
| [Get all outsideFieldGeoJSON files][19] | <span class="badge badge--success">GET</span> `/files/outsideFieldGeojson`     |
| [Get uncovered files][16]          | <span class="badge badge--success">GET</span> `/files/uncoveredFiles`          |
| [Merge files][8]                   | <span class="badge badge--warning">POST</span> `/files/merge`                  |


For easily testing these endpoints, we recommend using our Postman [collection][1].


:::info requires Leaf User with credentials
To have access to operation files, you will need a Leaf User with valid credentials
from the provider you want to access data. If you don't have a Leaf User or you
have not connected it with any provider yet, see **[how to create a Leaf User][11]**
or **[how to add credentials to a Leaf User][12]** for each of the providers.
:::



### Get all files

&nbsp<span class="badge badge--success">GET</span>  `/files`

Gets a paged list of files that belong to the current logged in user. It is
possible to filter the results by passing some query parameters. They are listed
below.

| Parameter (to filter by) | Values                                                                                           |
|--------------------------|--------------------------------------------------------------------------------------------------|
| `leafUserId`             | uuid of one of your users                                                                        |
| `provider`               | `CNHI`, `JohnDeere`, `Trimble`, `ClimateFieldView`, `AgLeader`, `RavenSlingshot`, `Stara` or `Leaf`                         |
| `status`                 | `processed`, `failed` or `processing`                                                            |
| `origin`                 | `provider`, `automerged`, `merged` or `uploaded`                                                 |
| `organizationId`         | the provider organizationId (only available for John Deere)                                      |
| `batchId`                | uuid of the upload response (only available for uploaded files)                                  |
| `createdTime`            | ISO 8601 date. Returns operations from the createdTime onward                                    |
| `startTime`              | ISO 8601 date. Returns operations from the startTime onward                                      |
| `updatedTime`            | ISO 8601 date. Returns operations from the updatedTime onward                                    |
| `endTime`                | ISO 8601 date. Returns operations until the endTime                                              |
| `operationType`          | `applied`, `planted`,  `harvested` or `tillage`                                                              |
| `minArea`                | a number (Double) representing the minimum area (square meters) of the operations to be returned |

Also, for `operationType`: `harvested` we can process the yield properties related to the operation using the 
crop density and standard moisture available in this [table][13].

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)
- `sort`, the sorting order of the results; can be multi-value, where the first value to be passed will take priority over the next values; you can also specify the order as `asc` or `desc` with `asc` being the default. Example: id, desc
  - Valid values for sorting are: id, fileName, createdTime, updatedTime, origin, leafUserId, sizeInBytes, provider, organizationId, fileFormat.


:::info the default value for page size is 20
If the parameters page and size are not set, the endpoint will return 20 results.
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
[Here's a link with sample responses][10] for "planted", "applied", "harvested" and "tillage" operation files.

### Get a file

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}`

Gets a single file by its id.

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

[Here's a link with sample responses][10] for "planted", "applied", "harvested" and "tillage" operation files.

### Get a file summary

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/summary`

Gets the summary, if available, for the file id.

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

[Here's a link with sample responses][14] for "planted", "applied", "harvested" and "tillage" operation files.


### Get a file's images

&nbsp<span class="badge badge--success">GET</span>  `/files/{id}/images`

Gets a list of PNG images generated from the operation's file properties.

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
</Tabs>


#### Response

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
    "url": "URL",
    "downloadUrl": "URL"
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
</Tabs>

#### Response

[Here's a link with sample responses][15] for "planted", "applied", "harvested" and "tillage" operation files.

These properties vary depending on the operationType, but you can expect the same,
standardized keys, across different providers.

Units usually don't change for the same Leaf User, since the providers units
configuration is based on their location. But keep in mind that it's best to
always take the units into consideration, just to be sure.


### Get a file status

&nbsp<span class="badge badge--success">GET</span> `/files/{id}/status`

Get status by file processing step by id.

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

  const endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/status'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/status'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
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


### Get a file's outsideFieldGeoJSON

&nbsp<span class="badge badge--success">GET</span> `/files/{id}/outsideFieldGeojson`

Gets a GeoJSON file with all points not considered in any Field Operation for that Leaf user.
This file depends on the [`splitOperationsByField`][20] and [`enableOutsideFieldGeojson`][21] configurations previously enabled.

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

  const endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/outsideFieldGeojson'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/{id}/outsideFieldGeojson'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/{id}/outsideFieldGeojson'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "fields": [
    "uuid"
  ],
  "featureCount": 21,
  "outsideFieldGeojson": "url",
  "downloadOutsideFieldGeojson": "url"
}
```

The response will show the number of points/features from the file in the property `featureCount`. The URL to get access to the file is available in the `downloadOutsideFieldGeojson` property.

This response also shows, in the `fields` property, all the fields the entire file (from where the outside points were extracted) intersects.

### Get all outsideFieldGeoJSON files

&nbsp<span class="badge badge--success">GET</span> `/files/outsideFieldGeojson`

Gets a list off all outside GeoJSON files with points not considered in any Field Operation for that Leaf user.
This information depends on the [`splitOperationsByField`][20] and [`enableOutsideFieldGeojson`][21] configurations previously enabled.

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

  const endpoint = 'https://api.withleaf.io/services/operations/api/files/outsideFieldGeojson'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/outsideFieldGeojson'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/outsideFieldGeojson'
  ```

  </TabItem>
</Tabs>

#### Response

```json
[
  {
    "id": "uuid",
    "fields": [
      "uuid"
    ],
    "featureCount": 21,
    "outsideFieldGeojson": "url",
    "downloadOutsideFieldGeojson": "url"
  }
]
```

The response will show a list of files that has outside points. For each one, the property `featureCount` will show the number of points/features from the file. The URL to get access to the file is available in the `downloadOutsideFieldGeojson` property.

This response also shows, in the `fields` property, all the fields the entire file (from where the outside points were extracted) intersects.


### Get uncovered files
&nbsp<span class="badge badge--success">GET</span> `/files/uncoveredFiles?leafUserId={leafUserId}`

Get a list of files that did not generate [Field Operations][17], as they do not intersect with any field.
The returned IDs can be consulted in the [Get a file][3] endpoint.

This endpoint requires the `leafUserId` filter.

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

  const endpoint = 'https://api.withleaf.io/services/operations/api/files/uncoveredFiles?leafUserId={leafUserId}'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/files/uncoveredFiles?leafUserId={leafUserId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/files/uncoveredFiles?leafUserId={leafUserId}'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "files": [
    "c3ad6c7b-19b8-4cd7-580a-dfab82043465",
    "c3ad6c7b-c472-49e9-aab2-7ad222843465",
    "9aa68735-5a04-42ef-0983-dbdd2bcdfa16"
  ]
}
```






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

It receives a single JSON object with the `ids` entry.

#### Request body

```json
{
  "ids": [ "id1", "id2", "so on" ]
}
```

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


#### Response

```json
{
  "id": "id",
  "status": "SENT_TO_MERGE"
}
```

After a few minutes, you can consult the result of Leaf processing over this file by
performing GET consults in this.


## Alerts

With Alerts you can be notified when something happens or changes instead of needing to repeatedly query for changes. 
Leaf Alerts support events that happen within Leaf and events that happen within supported 3rd party software. 


### List of Operations Events

Leaf Operations Service can Alert you on these events: [list of Operations Events][9]

## Troubleshooting

If a file fails to process, more information about the cause of the failure can be obtained from the [status endpoint][7], as in the example below.

```json
{
    "zippedPNGs": {
        "status": "failed",
        "message": "skipped"
    },
    "originalFile": {
        "status": "processed",
        "message": "ok"
    },
    "filteredGeojson": {
        "status": "failed",
        "message": "skipped"
    },
    "propertiesPNGs": {
        "status": "failed",
        "message": "skipped"
    },
    "summary": {
        "status": "failed",
        "message": "skipped"
    },
    "rawGeojson": {
        "status": "processed",
        "message": "ok"
    },
    "standardGeojson": {
        "status": "failed",
        "message": "no points passed the filter"
    },
    "units": {
        "status": "processed",
        "message": "ok"
    }
}
```

The outermost key indicates the conversion step at which the file passed.
The possible `status` are:

- `processed`: the step worked well.
- `failed`: the process failed at the current step.
- `skipped`: the step was skipped because a failure occurred before or a configuration prevents it from being executed.

More information is available in the `message` property and here are the most common messages:

| Message                                   | Details                                                                                                                                                                                                                     |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| no points passed the filter               | **What it means:** Our cleaning process checks every point against a set of criteria which we use to determine if the point is a [valid point](https://learn.withleaf.io/docs/machine_file_conversion_sample_output#valid-points). When you see this error message it means that no points remained after the cleaning process.<br />**Why it occurs:** In most cases, the incoming files have 0 points to process and therefore fail the criteria of even having valid points. This file is not strictly a failed file; we are intentionally canceling it given the configuration in place.<br />**What you can do:** The cleaning process can be turned on/off with the [cleanupStandardGeojson](https://learn.withleaf.io/docs/configurations_overview#cleanupstandardgeojson-1) configuration.                                                    |
| unsupported operation type: {type}        | **What it means:**  One of the first things our pipeline does is determine what operation type the file represents.  When you see this message it means the operation type detected in the file doesn’t match one of our supported types. Our supported operations are: _planting, applications, harvesting and tillage._ Examples of unsupported types include: _datacollection, datagathering, guidance and unknown_.<br />**Why it occurs:** This typically happens when files are mislabeled or involve an operation not recognized by Leaf.<br />**What you can do:** Double check with your customer what operation type the file should be.|
| missing required properties: {properties} | **What it means:** One or more required properties from the Leaf standard format weren’t identified in the file. The message lists the missing properties (e.g., _appliedRate, products, seedRate_).<br />**Why it occurs:** Often due to incomplete data or discrepancies in formatting between the uploaded file and Leaf’s expected standards and detection rules we have in place.<br />**What you can do:** Double check with your customer that the data exists with the provider and if possible send us a screenshot of the correct values.                                                                     |
| Failed to convert file on provider batch processing | **What it means:** When we are unable to extract any valid JSON from the provider files, these files are marked as failed to avoid repeated attempts. This file is not strictly a failed file.<br />**Why it occurs:** Invalid or unrecognizable data structures prevent successful extraction of JSON content.<br />**What you can do:** Make sure the original data follows the standard structure and file format like naming convention and folder structure. 

