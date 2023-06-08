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
[9]: https://docs.withleaf.io/docs/alerts_events#operation-events
[10]: #get-all-batches
[11]: #merge-files
[12]: #get-a-files-units
[13]: #retry-a-batch
[14]: https://docs.withleaf.io/docs/machine_file_conversion_sample_output#machine-file-sample
[15]: #get-a-file-status
[16]: https://docs.withleaf.io/docs/user_management_endpoints#create-a-leaf-user
[17]: https://docs.withleaf.io/docs/user_management_endpoints#providers-credentials-endpoints
[18]: https://docs.withleaf.io/docs/machine_file_conversion_crops_table
[19]: https://docs.withleaf.io/docs/machine_file_conversion_sample_output#summary-response-sample
[sample_units]: https://docs.withleaf.io/docs/machine_file_conversion_sample_output#machine-files-units
[20]: https://docs.withleaf.io/docs/machine_file_conversion_endpoints#get-all-files
[21]: https://docs.withleaf.io/docs/machine_file_conversion_endpoints#get-batch-upload
[22]: https://docs.withleaf.io/docs/machine_file_conversion_endpoints#get-a-file

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
| [Upload a file][7]       | <span class="badge badge--warning">POST</span> `/batch`             |
| [Get a batch][8]         | <span class="badge badge--success">GET</span> `/batch/{id}`         |
| [Get all batches][10]    | <span class="badge badge--success">GET</span> `/batch`              |
| [Retry a batch][13]      | <span class="badge badge--warning">PUT</span> `/batch/{id}/retry`   |
| [Merge files][11]        | <span class="badge badge--warning">POST</span> `/files/merge`       |
| [Get a file status][15]  | <span class="badge badge--success">GET</span> `/files/{id}/status`  |


For easily testing these endpoints, we recommend using our Postman [collection][1].


:::info requires Leaf User with credentials
To have access to operation files, you will need a Leaf User with valid credentials
from the provider you want to access data. If you don't have a Leaf User or you
have not connected it with any provider yet, see **[how to create a Leaf User][16]**
or **[how to add credentials to a Leaf User][17]** for each of the providers.
:::



### Get all files

&nbsp<span class="badge badge--success">GET</span>  `/files`

Gets a paged list of files that belong to the current logged in user. It is
possible to filter the results by passing some query parameters. They are listed
below.

| Parameter (to filter by) | Values                                                                                                                                                                                                                                                                                                                                                   |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `leafUserId`             | uuid of one of your users                                                                                                                                                                                                                                                                                                                                |
| `provider`               | `CNHI`, `JohnDeere`, `Trimble`, `ClimateFieldView`, `AgLeader` or `Leaf`                                                                                                                                                                                                                                                                                 |
| `status`                 | `processed`, `failed` or `processing`                                                                                                                                                                                                                                                                                                                    |
| `origin`                 | `provider`, `automerged`, `merged` or `uploaded`                                                                                                                                                                                                                                                                                                         |
| `organizationId`         | the provider organizationId (only available for John Deere)                                                                                                                                                                                                                                                                                              |
| `batchId`                | uuid of the upload response (only available for uploaded files)                                                                                                                                                                                                                                                                                          |
| `createdTime`            | ISO 8601 date. Returns operations from the createdTime onward                                                                                                                                                                                                                                                                                            |
| `startTime`              | ISO 8601 date. Returns operations from the startTime onward                                                                                                                                                                                                                                                                                              |
| `endTime`                | ISO 8601 date. Returns operations until the endTime                                                                                                                                                                                                                                                                                                      |
| `operationType`          | `applied`, `planted` or `harvested`                                                                                                                                                                                                                                                                                                                      |
| `minArea`                | a number (Double) representing the minimum area (square meters) of the operations to be returned                                                                                                                                                                                                                                                         |
| `sort`                   | Sorting order of the results. Can be multivalue, the former takes precedence over the later. Can also specify order as `asc` or `desc` with `asc` being the default. Example: id,desc. The paramerters accepeted are: `id`, `fileName`, `createdTime`, `updatedTime`, `origin`, `leafUserId`, `sizeInBytes`, `provider`, `organizationId`, `fileFormat`. |

Also, for `operationType`: `harvested` we can process the yield properties related to the operation using the 
crop density and standard moisture available in this [table][18].

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (max is 100)

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
[Here's a link with sample responses][14] for "planted", "applied", "harvested" and "tillage" operation files.

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

[Here's a link with sample responses][14] for "planted", "applied", "harvested" and "tillage" operation files.

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

[Here's a link with sample responses][19] for "planted", "applied", "harvested" and "tillage" operation files.


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

[Here's a link with sample responses][sample_units] for "planted", "applied", "harvested" and "tillage" operation files.

These properties vary depending on the operationType, but you can expect the same,
standardized keys, across different providers.

Units usually don't change for the same Leaf User, since the providers units
configuration is based on their location. But keep in mind that it's best to
always take the units into consideration, just to be sure.

### Upload a file

&nbsp<span class="badge badge--warning">POST</span> `/batch`

Creates a new file in Leaf. The file must be sent as a zip.

This endpoint accepts a .zip of operation files, detects which files are in the 
.zip, and returns the ID of the process, which can in turn be used to retrieve 
the ID's of the files being processed.


:::info File size limit of 3 GB

Currently, our upload endpoints accepts files with the maximum size limited to 3 gigabytes.

:::


This endpoint receives two required URL parameters, a `leafUserId` and `provider` 

A `provider` can be set as one of the following:

```
Other
ClimateFieldView
CNHI
JohnDeere
Trimble
AgLeader
Farmobile
PrecisionPlanting
```

If provider is set to "Other", Leaf will detect which files are 
present in the .zip file and process them accordingly.

Leaf will detect files present in the uploaded .zip and create file ids for the files that are detected in the uploaded .zip. These  files can then be accessed individually by their file ID, batch ID, or their associated field boundary.

Expected file structures from each provider are listed below. Very often these default file structures are edited by users. In these cases Leaf attempts to automatically repair the file structure and find all necessary files within any uploaded .zip.


The following file formats from each provider are supported:

#### JohnDeere

| File Format | Monitor Model             | Details                                         |
|-------------|---------------------------|-------------------------------------------------|
| GS3         | GreenStar 3 – 2630        | `/GS3_2630/profile/RCD/EIC/global.ver`          |
| Gen4        | Gen 4 - 4600/4630         | `/JD-Data/log/user defined name/*.jdl`          |
| Shapefile   | Exported from MyJohnDeere | Shapefile with extra metadata in a `.json` file |

##### Expected file structure

GreenStar 4 (4600+) 
```bash
jd-data
└── log
   └── *.jdl
```

GreenStar 3 (2630) 
```bash
GS3_2630
└── RCD
   └── EIC
      └── global.ver
        └── documentation
              └── ...
                 ├── *.fdd
                 └── *.fdl
```

Green Star 2 (2600)  
```bash
...
└── RCD
   ├── *.fdd
   └── *.fdl
```

#### Climate FieldView

| File Format | Monitor Model                    | Details                                         |
|-------------|----------------------------------|-------------------------------------------------|
| dat         | All files from Climate FieldView | A zip with `.dat` files                         |

##### Expected file structure

20|20 SeedSense Generation 1 and Generation 2
```bash
...
├── harvest_*.dat – Harvest data
├── field_map_*.dat – Planting data
└── liquid_map_*.dat - AsApplied spraying data
```

20|20 SeedSense Generation 3
```bash
...
└── *.2020
```

#### CNHI

| File Format | Monitor Model                    | Details                                         |
|-------------|----------------------------------|-------------------------------------------------|
| CN1         | CaseIH monitors or exported from CNH Connects | `/file.cn1/index.vy1`                           |

##### Expected file structure

Voyager 2
```bash
*.cn1
└── ...
   └── *.vy1
```

#### AgLeader

| File Format | Monitor Model                           | Details                                |
|-------------|-----------------------------------------|----------------------------------------|
| yld         | YM2000, PFAdvantage & other OEM systems | A zip with `.yld` files                |
| ilf         | INTEGRA / Insight / Edge                | A zip with `.ilf` files                |
| agdata      | INTEGRA / VERSA / COMPASS               | A zip with `.agdata` files             |

##### Expected file structure
AgLeader Integra (versions 3.5+), Versa
```bash
...
├── *.agdata
└── *.agsetup
```

AgLeader Edge, Insight, and Integra (version 3.4)
```bash
...
└── *.ilf
```

AgLeader PF Advantage, PF 3000, PF 3000 Pro, YM2000 
```bash
...
└── *.yld
```

#### Trimble

| File Format | Monitor Model                    | Details                                         |
|-------------|----------------------------------|-------------------------------------------------|
| AgData      | FMX and CFX monitors             | `/AgData/`                                      |
| AgGPS       | TMX and GFX monitors             | `/AgGPS/`                                       |

##### Expected file structure
GFX-750, TMX-2050 
```bash
Agdata
├── Fields
   └── *.agf
├── implements
   └── *.agi
├── prescriptions
   └── *.agm
├── Tasks
   └── *.agt
├── Users
   └── *.agu
└── vehicles
   └── *.agv
```


CFX-750, FMX  
```bash
AgGPS
└── Data
   └── "Grower"
      └── Farm
        └── field
          └── "Task"
            ├── *.cpg
            ├── *.dbf
            ├── *.shp
            └── *.shx
```

#### Precision Planting (beta)

| File Format | Monitor Model                           | Details                                |
|-------------|-----------------------------------------|----------------------------------------|
| PP2020      | 20\|20                                  | A zip with `.2020` files.              |

##### Expected file structure

20|20 SeedSense Generation 1 and Generation 2
```bash
...
├── harvest_*.dat – Harvest data
├── field_map_*.dat – Planting data
└── liquid_map_*.dat - AsApplied spraying data
```

20|20 SeedSense Generation 3
```bash
...
└── *.2020
```

#### ISOXML
##### Expected file structure
```bash
TASKDATA
├── *.XML
└── *.bin
```

#### CLAAS
##### Expected file structure
```bash
TASKDATA
├── *.XML
└── *.bin
```

#### Kuhn
##### Expected file structure
```bash
TASKDATA
├── *.XML
└── *.bin
```

#### Kverneland Group
##### Expected file structure
```bash
TASKDATA
├── *.XML
└── *.bin
```

#### Müller-Elektronik
##### Expected file structure
```bash
TASKDATA
├── *.XML
└── *.bin
```

#### Teknomika
##### Expected file structure
```bash
TASKDATA
├── *.XML
└── *.bin
```

#### Topcon Precision Agriculture
##### Expected file structure
```bash
TASKDATA
├── *.XML
└── *.bin
```

#### Farmobile

| File Format | Details                                                                                                                                                             |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GeoJSON     | GeoJSON files exported from Farmobile. Since GeoJSON files do not contain information on the units used, we assume the default units from Farmobile are being used. |



#### Other

| File Format | Details                                                                                                                                           |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Shapefile   | Shapefiles exported from SMS. Since Shapefiles do not contain information on the units used, we assume the default units from SMS are being used. |

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

  files = {'file': open('shapefile.zip', 'rb')}
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
      'https://api.withleaf.io/services/operations/api/batch' \
      'provider=JohnDeere&leafUserId=id'
  ```

  </TabItem>
</Tabs>

#### Response

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

This id can then be queried to retrieve on [Get batch][21] to get the individual file ID's. 
Then you can query each of the files individually with 
[Get a File][22] or all of them, filtering by `batchId`, on
[Get all Files][20].


#### Batch status

The *status* key will evolve accordingly to the following states:

| Status    | Description                                                                                        |
|-----------|----------------------------------------------------------------------------------------------------|
| RECEIVED  | Is the default state for every batch created                                                       |
| PROCESSED | When all the files included in the batch were processed, and at least one file have status SUCCESS |
| FAILED    | The batch did not generated any leaf files with status SUCCESS                                     |

The messages with FAILED status have the key *statusDetails*. The statusDetails are just informative and should not be used programatically.

```json
{
    "id": "c21e6495-3e39-4c5f-b35c-d33fa06c25d8",
    "leafUserId": "fc7c52ad-d228-4332-9e18-de979a293457",
    "fileName": "Climate.zip",
    "size": 8652951,
    "provider": "Other",
    "status": "FAILED",
    "statusDetails": "No operation found. Check file format before re-trying or contact support. Check file format before re-trying or contact support", 
    "uploadTimestamp": "2021-03-12T19:50:55.567755Z"
}
```

The following status can be present on *statusDetails*:

| Status                                                                                       | Description                                                                           |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| No valid files found                                                                         | Unable to find a valid file based on supported extensions and expected file structure |
| Leaf internal error. Please contact Support                                                  | Internal error that need to be reported                                               |
| Files found but unable to read. Please check file format before re-trying or contact Support | A valid file was found but could not be converted                                     |


### Get Batch upload

&nbsp<span class="badge badge--success">GET</span> `/batch/{batch_id}`

Once you've uploaded files, you can then query these files individually, merge the files, or query for them 
via [Get all Files][21].
You can also query the batch upload ID to see a list of files generated in the upload and a status of the upload with this endpoint.

#### Request examples

<Tabs
  defaultValue="py"
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

  const endpoint = 'https://api.withleaf.io/services/operations/api/batch/{batch_id}'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/batch/{batch_id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```
  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/batch/{batch_id}'
  ```

  </TabItem>
</Tabs>

#### Response

```json 
{
  "id": "9b561906-efac-43a3-9378-641e3698da5d",
  "leafUserId": "1481bc9b-cdc7-45c1-9f0e-592da6306dfe",
  "provider": "Other",
  "status": "PROCESSED",
  "leafFiles": [
    "f14203df-4144-43b7-a383-2ed321f395ce",
    "810b1475-cb49-437b-8658-d29038ce2fa4"
  ]
}
```



### Get all Batches

&nbsp<span class="badge badge--success">GET</span> `/batch`

Once you've uploaded files, you can then query these files individually, merge the files, or query for them 
via [Get all Files][20].
You can also query the batch upload ID to see a list of files generated in the upload and a status of the upload with this endpoint.

#### Request examples

<Tabs
  defaultValue="py"
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

  const endpoint = 'https://api.withleaf.io/services/operations/api/batch'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/batch'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```
  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/batch'
  ```

  </TabItem>
</Tabs>

#### Response

```json 
[
  {
    "id": "9e47ae29-6a84-4a9c-9e5f-01802f6dceea",
    "leafUserId": "5ded9409-c99f-4379-9173-c01b1631f274",
    "provider": "Other",
    "status": "PROCESSED",
    "leafFiles": [
      "74d5aeb6-9a0e-43c6-986c-a5f17eecbddc",
      "475fcad3-b534-409d-8c8b-cec4dabd1b8b"
    ]
  }
]
```



### Retry a batch

&nbsp<span class="badge badge--warning">PUT</span> `/batch/{id}/retry`

If a batch upload does not complete as expected, this endpoint allows you to try again. This action will reprocess the fragments of uploaded data that didn't succeed processing before, keeping existing converted files unaffected.

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

  const endpoint = 'https://api.withleaf.io/services/operations/api/batch/{id}/retry'
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

  endpoint = 'https://api.withleaf.io/services/operations/api/batch/{id}/retry'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.put(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/batch/{id}/retry'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
    "id": "36d8551f-409d-41f2-94b4-04c9fe16289b",
    "leafUserId": "089bb77b-2415-43df-a246-6c0a5937c774",
    "fileName": "filename.zip",
    "size": 8652951,
    "provider": "Other",
    "status": "RECEIVED",
    "uploadTimestamp": "2021-03-12T19:50:55.567755Z"
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

Leaf Operations Service can Alert you on these events: [list of Operations Events][9]
