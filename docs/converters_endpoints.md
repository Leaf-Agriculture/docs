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
| [Upload a file][7]       | <span class="badge badge--warning">POST</span> `/batch`             |
| [Get a batch][8]         | <span class="badge badge--success">GET</span> `/batch/{id}`         |
| [Get all batches][10]    | <span class="badge badge--success">GET</span> `/batch`              |
| [Retry a batch][13]      | <span class="badge badge--warning">PUT</span> `/batch/{id}/retry`   |
| [Get a file status][15]  | <span class="badge badge--success">GET</span> `/files/{id}/status`  |


To easily test these endpoints, we recommend using our Postman [collection][1].


:::info requires Leaf User
You will need a Leaf User to manually upload files. If you don't have a Leaf User, see the [Leaf user overview](/docs/user_management_overview)
:::

### Upload a file

&nbsp<span class="badge badge--warning">POST</span> `/batch`

Creates a new file in Leaf. The file must be sent as a zip.

This endpoint accepts a .zip of operation files, detects which files are in the 
.zip, and returns the ID of the process, which can in turn be used to retrieve 
the ID's of the files being processed.


:::info File size limit of 3 GB

Currently, our upload endpoints accepts files with the maximum size of 3 gigabytes.

:::


This endpoint receives two required URL parameters, a `leafUserId` and `provider` 

A `provider` can be set as one of the following:

```
AgLeader
ClimateFieldView
CNHI
Farmobile
JohnDeere
Trimble
PrecisionPlanting
Other
```

If provider is set to "Other", Leaf will detect which files are 
present in the .zip file and process them accordingly.

Leaf will detect files present in the uploaded .zip and create file ids for the files that are detected in the uploaded .zip. These  files can then be accessed individually by their file ID, batch ID, or their associated field boundary.

Expected file structures from each provider are listed below. Very often these default file structures are edited by users. In these cases Leaf attempts to automatically repair the file structure and find all necessary files within any uploaded .zip.


The following file formats from each provider are supported:

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

#### Farmobile

| File Format | Details                                         |
|-------------|-------------------------------------------------|
| GeoJSON     | GeoJSON files exported from Farmobile. Since GeoJSON files do not contain information on the units used, we assume the default units from Farmobile are being used.|



#### JohnDeere

| File Format | Monitor Model | Details                                         |
|------------ | -------------------------------- | ------------------------------------------------|
| GS3         | GreenStar 3 – 2630               | `/GS3_2630/profile/RCD/EIC/global.ver`          |
| Gen4        | Gen 4 - 4600/4630                | `/JD-Data/log/user defined name/*.jdl`          |
| Shapefile   | Exported from MyJohnDeere        | Shapefile with extra metadata in a `.json` file |

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

#### Other

| File Format | Details                                         |
|-------------|-------------------------------------------------|
| Shapefile   | Shapefiles exported from SMS. Since Shapefiles do not contain information on the units used, we assume the default units from SMS are being used.|

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
[Get a File](#get-a-file) or all of them, filtering by `batchId`, on
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

| Status                                                                                       | Description                                                                           |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| No valid files found                                                                         | Unable to find a valid file based on supported extensions and expected file structure |
| Leaf internal error. Please contact Support                                                  | Internal error that need to be reported                                               |
| Files found but unable to read. Please check file format before re-trying or contact Support | A valid file was found but could not be converted                                     |


### Get Batch upload

&nbsp<span class="badge badge--success">GET</span> `/batch/{batch_id}`

Once you've uploaded files, you can then query these files individually, merge the files, or query for them 
via [Get all Files](#get-all-files).
You can also query the batch upload ID to see a list of files generated in the upload and a status of the upload with this endpoint.


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



### Get all Batches

&nbsp<span class="badge badge--success">GET</span> `/batch`

Once you've uploaded files, you can then query these files individually, merge the files, or query for them 
via [Get all Files](#get-all-files).
You can also query the batch upload ID to see a list of files generated in the upload and a status of the upload with this endpoint.


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



### Retry a batch

&nbsp<span class="badge badge--warning">PUT</span> `/batch/{id}/retry`

If a batch upload does not complete as expected, this endpoint allows you to try again. This action will reprocess the fragments of uploaded data that didn't succeed processing before, keeping existing converted files unaffected.

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

##### Response

Returns a single JSON object, similar to the upload endpoint response:

```json
{
    "id": "uuid",
    "leafUserId": "uuid",
    "fileName": "filename.zip",
    "size": 8652951,
    "provider": "Other",
    "status": "RECEIVED",
    "uploadTimestamp": "2021-03-12T19:50:55.567755Z"
}
```


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


:::info Please note
Once you have finished setting up manual file upload, refer to **[machine file conversion](/docs/machine_file_conversion_overview)**
next
:::