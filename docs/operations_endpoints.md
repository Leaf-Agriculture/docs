---
title: Field Operations Endpoints
description: Field Operations - Endpoints
sidebar_label: Endpoints
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
[6]: https://docs.withleaf.io/docs/alerts_overview/
[7]: https://docs.withleaf.io/docs/alerts_events/#operation-events
[8]: #get-an-operations-images-v2
[9]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-filtered-geojson
[10]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-images-v2
[11]: #reprocess-an-operation
[12]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-standard-geojson
[13]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-filtered-geojson
[14]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-summary
[15]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-images
[16]: #get-operations-geotiff-images
[17]: #crop-operation-by-field
[18]: #get-an-operations-standardgeojson
[19]: #get-an-operations-filteredgeojson
[sample_summary]: https://docs.withleaf.io/docs/operations_sample_output#field-operations-summary
[sample_units]: https://docs.withleaf.io/docs/operations_sample_output#field-operations-units
[postman]: https://github.com/Leaf-Agriculture/Leaf-API-Postman-Collection

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/operations/api
```

This service has the following endpoints available:

| Description                              | Endpoints                                                                          |
|------------------------------------------|------------------------------------------------------------------------------------|
| [Get all operations][1]                  | <span class="badge badge--success">GET</span> `/operations`                        |
| [Get an operation][2]                    | <span class="badge badge--success">GET</span> `/operations/{id}`                   |
| [Get an operation summary][3]            | <span class="badge badge--success">GET</span> `/operations/{id}/summary`           |
| [Get an operation's standardGeojson][18] | <span class="badge badge--success">GET</span> `/operations/{id}/standardGeojson`   |
| [Get an operation's filteredGeojson][19] | <span class="badge badge--success">GET</span> `/operations/{id}/filteredGeojson`   |
| [Get operation's images][4]              | <span class="badge badge--success">GET</span> `/operations/{id}/images`            |
| [Get operation's images V2][8]           | <span class="badge badge--success">GET</span> `/operations/{id}/imagesV2`          |
| [Get operation's geotiff images][16]     | <span class="badge badge--success">GET</span> `/operations/{id}/geotiffImages`     |
| [Get an operation's units][5]            | <span class="badge badge--success">GET</span> `/operations/{id}/units`             |
| [Crop operation by field][17]            | <span class="badge badge--warning">POST</span> `/operations/cropOperationByField`  |
| [Reprocess an operation][11]             | <span class="badge badge--warning">POST</span> `/operations/{id}/reprocess`        |

For easily testing these endpoints, we recommend using our Postman [collection][postman].

### Get all operations

&nbsp<span class="badge badge--success">GET</span>  `/operations`

Gets a paged list of operations that belong to the current logged in user. It is
possible to filter the results by passing some query parameters. They are listed
below.

| Parameter (to filter by)  | Values                                                                            |
|---------------------------|-----------------------------------------------------------------------------------|
| `leafUserId`              | uuid of one of your users                                                         |
| `provider`                | `CNHI`, `JohnDeere`, `Trimble`, `ClimateFieldView`, `AgLeader`, `Stara` or `Leaf` |
| `startTime`               | ISO 8601 date. Returns operations from the startTime onward                       |
| `updatedTime`             | ISO 8601 date. Returns operations from the updatedTime onward                     |
| `endTime`                 | ISO 8601 date. Returns operations until the endTime                               |
| `operationType`           | `applied`, `planted`, `harvested` or `tillage`                                    |
| `fieldId`                 | the field where the operation happened                                            |

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)
- `sort`, the sorting order of the results; can be multi-value, where the first value to be passed will have preference in ordering over the next ones; you can also specify the order as `asc` or `desc` with `asc` being the default. Example: id, desc
  - Valid values for sorting are: id, leafUserId, startTime, endTime, type and updatedTime.

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
    "id": "5c8fdb34-4dc4-4b96-bfd5-53e6206ce971",
    "apiOwnerUsername": "test",
    "leafUserId": "7494c90e-28b8-4bb2-9ede-95c1cc894349",
    "startTime": "2015-04-18T19:31:27Z",
    "endTime": "2015-04-18T19:58:50Z",
    "updatedTime": "2021-08-24T16:00:15.062Z",
    "type": "planted",
    "files": [
        "a10b85c2-ac2e-4b0f-8e65-74edbd2ca53e",
        "759e1b62-dc69-4332-b618-6449a37470fa"
    ],
    "fields": [
      {
        "id": "0071484f-4a75-4190-9fd0-f5995d241c2c"
      }
    ],
    "providers": [
      "providerName"
    ]
  },
  ....
]
```


### Get an operation

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}`

Gets a single operation by its id.

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
  "id": "5c8fdb34-4dc4-4b96-bfd5-53e6206ce971",
  "apiOwnerUsername": "test",
  "leafUserId": "7494c90e-28b8-4bb2-9ede-95c1cc894349",
  "startTime": "2015-04-18T19:31:27Z",
  "endTime": "2015-04-18T19:58:50Z",
  "updatedTime": "2021-08-24T16:00:15.062Z",
  "type": "planted",
  "files": [
      "a10b85c2-ac2e-4b0f-8e65-74edbd2ca53e",
      "759e1b62-dc69-4332-b618-6449a37470fa"
  ],
  "fields": [
    {
      "id": "0071484f-4a75-4190-9fd0-f5995d241c2c"
    }
  ],
  "providers": [
    "providerName"
  ]
}
```


### Get an operation summary

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/summary`

Gets the summary, if available, for the operation id.

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

[Here's a link with sample responses][sample_summary] for "planted", "applied", "harvested" and "tillage" operations.


### Get an operation's standardGeojson

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/standardGeojson`

Get the standardGeojson file relative to the operation.

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/standardGeojson'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/standardGeojson'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/standardGeojson'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "standardGeojson": "URL"
}
```


### Get an operation's filteredGeojson

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/filteredGeojson`

Get the filteredGeojson file relative to the operation.

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/filteredGeojson'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/filteredGeojson'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/filteredGeojson'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "filteredGeojson": "URL"
}
```


### Get an operation's images

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/images`

Gets a list of PNG images generated from the operation's properties.

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
    "url": "string"
  },
  ....
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


### Get an operation's images V2

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/imagesV2`

Gets a list of PNG images generated from the operation's properties with improvements in the generation process. These images are based on the [filteredGeojson][9].

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/imagesV2'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/imagesV2'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/imagesV2'
  ```

  </TabItem>
</Tabs>


#### Response

```json
[
  {
    "property": "string",
    "legend": {
      "ranges": [
        {
          "colorCode": "#C80000",
          "max": 20,
          "min": 0
        },
        {
          "colorCode": "#FF2800",
          "max": 50,
          "min": 20
        },
        {
          "colorCode": "#FF9600",
          "max": 100,
          "min": 50
        },
        {
          "colorCode": "#FFF000",
          "max": 250,
          "min": 100
        },
        {
          "colorCode": "#00E600",
          "max": 340,
          "min": 250
        },
        {
          "colorCode": "#00BE00",
          "max": 480,
          "min": 340
        },
        {
          "colorCode": "#008200",
          "max": 570,
          "min": 480
        }
      ]
    },
    "extent": {
      "xmin": 0,
      "xmax": 0,
      "ymin": 0,
      "ymax": 0
    },
    "url": "URL"
  }
]
```

The `property` refers to the property extracted from operations' data to generate the
image.

The `legend` represents the values distributed in 7 classes, classified by the quantile and symbolized by the standard color ramp.

The `extent` is the coordinates of the image, mainly used for plotting images in map applications.

More information [here][10].



### Get operation's geotiff images

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/geotiffImages`

Gets a list of TIFF images generated from the operation's properties with improvements in the generation process. These images are based on the [filteredGeojson][9].

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/geotiffImages'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/geotiffImages'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/geotiffImages'
  ```

  </TabItem>
</Tabs>


#### Response

```json
[
  {
    "property": "distance",
    "url": "https://image-url.tif"
  },
  {
    "property": "wetVolumePerArea",
    "url": "https://image-url.tif"
  },
  {
    "property": "dryMassPerArea",
    "url": "https://image-url.tif"
  },
  {
    "property": "dryVolumePerArea",
    "url": "https://image-url.tif"
  }
]
```


### Get an operation's units

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/units`

Gets the operations's properties and their units.

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
</Tabs>


#### Response

[Here's a link with sample responses][sample_units] for "planted", "applied", "harvested" and "tillage" operations.

These properties vary depending on the operationType, but you can expect the same,
standardized keys, across different providers.

Units usually don't change for the same Leaf User, since the providers units
configuration is based on their location. But keep in mind that it's best to
always take the units into consideration, just to be sure.




### Crop operation by field

&nbsp<span class="badge badge--warning">POST</span>  `/operations/cropOperationByField`

This endpoint can be used to remove points from the operation standardGeojson that are outside of the field geometry.

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

```json
{
    "id": "1162a1c6-9872-4d7f-9833-5d48add8eed4",
    "message": "Sent operation to be processed.",
    "leafFileId": "33020f03-5889-4c0f-b465-7a7e2c03a91d"
}
```

You could monitor the processing status using the `leafFileId` by our [Alerts Service][6].

### Reprocess an operation

&nbsp<span class="badge badge--warning">POST</span>  `/operations/{id}/reprocess`

Allows reprocessing an operation already created, starting from the merge step. The [standardGeoJSON][12], [filteredGeoJSON][13], [summary][14] and [images][15] will be updated.

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/reprocess'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/reprocess'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.post(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/reprocess'
  ```

  </TabItem>
</Tabs>

You could monitor the processing status by our [Alerts Service][6].


## Alerts

With Alerts you can be notified when something happens or changes instead of needing to repeatedly query for changes. 
Leaf Alerts support events that happen within Leaf and events that happen within supported 3rd party software. 


### List of Operations Events

Leaf Operations Service can Alert you on these events: [list of Operations Events][7]
