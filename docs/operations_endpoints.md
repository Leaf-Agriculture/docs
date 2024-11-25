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
[3]: #get-the-operations-summary
[4]: #get-operations-images
[5]: #get-the-operations-units
[6]: https://docs.withleaf.io/docs/alerts_overview/
[7]: https://docs.withleaf.io/docs/alerts_events/#operation-events
[8]: #get-operations-images-v2
[9]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-filtered-geojson
[10]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-images-v2
[11]: #reprocess-an-operation
[12]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-standard-geojson
[13]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-filtered-geojson
[14]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-summary
[15]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-images
[16]: #get-operations-geotiff-images
[17]: #crop-operation-by-field
[18]: #get-the-operations-standardgeojson
[19]: #get-the-operations-filteredgeojson
[20]: https://docs.withleaf.io/docs/configurations_overview/#operationsfilteredgeojson
[21]: #get-files-from-an-operation
[22]: #get-the-operations-machines
[23]: #get-the-operations-implements
[24]: #get-the-operations-operators
[25]: https://docs.withleaf.io/docs/beta_assets_endpoints#get-a-machine
[26]: https://docs.withleaf.io/docs/beta_assets_endpoints#get-an-implement
[27]: https://docs.withleaf.io/docs/beta_assets_endpoints#get-an-operator
[28]: #get-the-operations-sessions
[29]: https://docs.withleaf.io/docs/configurations_overview/#enableOperationsSession
[30]: https://docs.withleaf.io/docs/configurations_overview/#enableGeoparquetOutput
[31]: #get-the-operations-standardgeoparquet
[32]: #get-the-operations-filteredgeoparquet
[sample_summary]: https://docs.withleaf.io/docs/operations_sample_output#field-operations-summary
[sample_units]: https://docs.withleaf.io/docs/operations_sample_output#field-operations-units
[postman]: https://github.com/Leaf-Agriculture/Leaf-API-Postman-Collection
[files_sample]: https://docs.withleaf.io/docs/machine_file_conversion_sample_output#machine-file-sample]

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/operations/api
```

This service has the following endpoints available:

| Description                                   | Endpoints                                                                             |
|-----------------------------------------------|---------------------------------------------------------------------------------------|
| [Get all operations][1]                       | <span class="badge badge--success">GET</span> `/operations`                           |
| [Get an operation][2]                         | <span class="badge badge--success">GET</span> `/operations/{id}`                      |
| [Get the operation's summary][3]              | <span class="badge badge--success">GET</span> `/operations/{id}/summary`              |
| [Get the operation's standardGeojson][18]     | <span class="badge badge--success">GET</span> `/operations/{id}/standardGeojson`      |
| [Get the operation's standardGeoParquet][31]  | <span class="badge badge--success">GET</span> `/operations/{id}/standardGeoparquet`   |
| [Get the operation's filteredGeojson][19]     | <span class="badge badge--success">GET</span> `/operations/{id}/filteredGeojson`      |
| [Get the operation's filteredGeoParquet][32]  | <span class="badge badge--success">GET</span> `/operations/{id}/filteredGeoparquet`   |
| [Get operation's images][4]                   | <span class="badge badge--success">GET</span> `/operations/{id}/images`               |
| [Get operation's images V2][8]                | <span class="badge badge--success">GET</span> `/operations/{id}/imagesV2`             |
| [Get operation's geotiff images][16]          | <span class="badge badge--success">GET</span> `/operations/{id}/geotiffImages`        |
| [Get the operation's units][5]                | <span class="badge badge--success">GET</span> `/operations/{id}/units`                |
| [Get the operation's machines][22]            | <span class="badge badge--success">GET</span> `/operations/{id}/machines`             |
| [Get the operation's implements][23]          | <span class="badge badge--success">GET</span> `/operations/{id}/implements`           |
| [Get the operation's operators][24]           | <span class="badge badge--success">GET</span> `/operations/{id}/operators`            |
| [Get the operation's sessions][28]            | <span class="badge badge--success">GET</span> `/operations/{id}/sessions`             |
| [Crop operation by field][17]                 | <span class="badge badge--warning">POST</span> `/operations/cropOperationByField`     |
| [Reprocess an operation][11]                  | <span class="badge badge--warning">POST</span> `/operations/{id}/reprocess`           |
| [Get files from an operation][21]             | <span class="badge badge--success">GET</span> `/operations/{id}/files`                |

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


### Get the operation's summary

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


### Get the operation's standardGeojson

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/standardGeojson`

Get the standardGeojson file URL relative to the operation.

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
  "standardGeojson": "URL",
  "downloadStandardGeojson": "URL"
}
```

### Get the operation's standardGeoparquet

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/standardGeoparquet`

Get the standard GeoParquet file URL relative to the operation.

:::tip
To use this option, [enableGeoparquetOutput][30] configuration must be enabled.
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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/standardGeoparquet'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/standardGeoparquet'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/standardGeoparquet'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "downloadStandardGeoparquet": "URL"
}
```

### Get the operation's filteredGeojson

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/filteredGeojson`

Get the filteredGeojson file URL relative to the operation.

:::tip
To use this option, the [operationsFilteredGeojson][20] configuration must be enabled.
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
  "filteredGeojson": "URL",
  "downloadFilteredGeojson": "URL"
}
```

### Get the operation's filteredGeoparquet

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/filteredGeoparquet`

Get the filtered GeoParquet file URL relative to the operation.

:::tip
To use this option, the [operationsFilteredGeojson][20] and [enableGeoparquetOutput][30] configuration must be enabled.
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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/filteredGeoparquet'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/filteredGeoparquet'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/filteredGeoparquet'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "downloadFilteredGeoparquet": "URL"
}
```

### Get operation's images

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
    "url": "URL",
    "downloadUrl": "URL"
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


### Get operation's images V2

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
    "url": "URL",
    "downloadUrl": "URL"
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
    "url": "URL",
    "downloadUrl": "URL"
  },
  {
    "property": "wetVolumePerArea",
    "url": "URL",
    "downloadUrl": "URL"
  },
  {
    "property": "dryMassPerArea",
    "url": "URL",
    "downloadUrl": "URL"
  },
  {
    "property": "dryVolumePerArea",
    "url": "URL",
    "downloadUrl": "URL"
  }
]
```


### Get the operation's units

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

### Get the operation's machines

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/machines`

Gets the machines used in the given operation. The IDs returned can be used to fetch more information about the machine in the [Get a machine endpoint][25].

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/machines'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/machines'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/machines'
  ```

  </TabItem>
</Tabs>


#### Response
```json
{
    "machines": [
        "77385069-7666-4867-8d72-72c2584e2b4e",
        "baad537c-69e3-4d86-a99b-92d5b716b574"
    ]
}
```

### Get the operation's implements

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/implements`

Gets the implements used in the given operation. The IDs returned can be used to fetch more information about the implement in the [Get an implement endpoint][26].

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/implements'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/implements'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/implements'
  ```

  </TabItem>
</Tabs>


#### Response
```json
{
    "implements": [
        "1190bc0d-e94c-407a-8aba-ac4c6a1cd29b"
    ]
}
```

### Get the operation's operators

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/operators`

Gets the operators that performed the given operation. The IDs returned can be used to fetch more information about the operator in the [Get an operator endpoint][27].

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/operators'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/operators'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/operators'
  ```

  </TabItem>
</Tabs>


#### Response
```json
{
    "operators": [
        "f2f4723a-2bfe-472b-b6f7-7874c8500208"
    ]
}
```

### Get the operation's sessions

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/sessions`

Get compiled machine, implement and operator data for a management view with total area covered and working hours.

:::info Important
It requires the [`enableOperationsSession` configuration][29] enabled to create this data.
Currently, this information is only available for John Deere operations.
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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/sessions'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/sessions'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/sessions'
  ```

  </TabItem>
</Tabs>


#### Response
```json
[
  {
    "machineId": "uuid",
    "serialNumber": "SERIALNUMBER001",
    "sessions": [
      {
        "id": "sessionId",
        "startTime": "2023-11-29T11:03:42.000Z",
        "endTime": "2023-11-29T20:58:36.000Z",
        "operator": {
          "id": "operatorId",
          "name": "SIDINEY BATISTA"
        },
        "area": {
          "value": 18.215,
          "unit": "ha"
        }
      }
    ]
  },
  {
    "machineId": "uuid",
    "serialNumber": "SERIALNUMBER002",
    "sessions": [
      {
        "id": "sessionId",
        "startTime": "2010-10-10T10:10:10.000000000Z",
        "endTime": "2010-10-10T10:10:10.000000000Z",
        "operator": {
          "id": "uuid",
          "name": "Operator A"
        },
        "area": {
          "value": 26.019,
          "unit": "ha"
        }
      }
    ]
  },
  {
    "machineId": "machineId",
    "serialNumber": "1RW9640DKNA075787",
    "sessions": [
      {
        "id": "sessionId",
        "startTime": "2010-10-10T10:10:10.000000000Z",
        "endTime": "2010-10-10T10:10:10.000000000Z",
        "operator": {
          "id": "uuid",
          "name": "Operator A"
        },
        "implement": {
          "id": "uuid",
          "name": "Implement 1"
        },
        "area": {
          "value": 39.410,
          "unit": "ha"
        }
      }
    ]
  }
]
```


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

### Get files from an operation

&nbsp<span class="badge badge--success">GET</span>  `/operations/{id}/files`

Allow the user to fetch all files resources that were aggregated to generate an Field Operation.

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

  const endpoint ='https://api.withleaf.io/services/operations/api/operations/{id}/files'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/operations/{id}/files'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/operations/{id}/files'
  ```

  </TabItem>
</Tabs>

#### Response

Check our [sample response](files_sample) to have complete represention on the expected output.

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
