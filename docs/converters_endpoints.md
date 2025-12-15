---
title: Manual File Upload Endpoints
description: Manual File Upload - Endpoints
sidebar_label: Endpoints
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: machine_file_conversion_endpoints#get-all-files
[3]: machine_file_conversion_endpoints#get-a-file
[4]: #upload-a-file
[5]: #get-batch-upload
[6]: #get-all-batches
[7]: #retry-a-batch
[9]: user_management_overview
[10]: machine_file_conversion_overview
[11]: #batch-files-status
[12]: machine_file_conversion_endpoints#troubleshooting
[13]: supported_file_formats

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/operations/api
```

This service has the following endpoints available:

| Description                  | Endpoints                                                          |
|------------------------------|--------------------------------------------------------------------|
| [Upload a file][4]           | <span class="badge badge--warning">POST</span> `/batch`            |
| [Get a batch][5]             | <span class="badge badge--success">GET</span> `/batch/{id}`        |
| [Get all batches][6]         | <span class="badge badge--success">GET</span> `/batch`             |
| [Retry a batch][7]           | <span class="badge badge--warning">PUT</span> `/batch/{id}/retry`  |
| [Get Batch Files Status][11] | <span class="badge badge--success">GET</span> `/batch/{id}/status` |


To easily test these endpoints, we recommend using our Postman [collection][1].


:::info requires Leaf User
You will need a Leaf User to manually upload files. If you don't have a Leaf User, see the [Leaf user overview][9]
:::

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
Leaf
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

For details on supported file formats and expected file structures from each provider, see [Supported File Formats][13].

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

This id can then be queried to retrieve on [Get batch][5] to get the individual file ID's. 
Then you can query each of the files individually with 
[Get a File][3] or all of them, filtering by `batchId`, on
[Get all Files][2].


#### Batch status

The *status* key will evolve accordingly to the following states:

| Status    | Description                                                                                        |
|-----------|----------------------------------------------------------------------------------------------------|
| RECEIVED  | Is the default state for every batch created                                                       |
| PROCESSED | When all the files included in the batch were processed, and at least one file have status SUCCESS |
| FAILED    | The batch did not generated any leaf files with status SUCCESS                                     |

The messages with FAILED status have the key *statusDetails*. The `statusDetails`` is just informative and should not be used programatically.

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
via [Get all Files][2].
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

  axios.get(endpoint, { headers })
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

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```
  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
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
via [Get all Files][2].
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

### Batch Files Status

&nbsp<span class="badge badge--success">GET</span> `/batch/{id}/status`

After your batch generate the list of Leaf Files, this enpoint can be used to verify the status of each resource complied on the same response.
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

  const endpoint = 'https://api.withleaf.io/services/operations/api/batch/{id}/status'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/operations/api/batch/{id}/status'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/operations/api/batch/{id}/status'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "converted": {
    "leafFiles": [
      "06512392-8d69-4033-8127-4cc62b7176b9",
      "075fd0f6-af1a-433d-ad7a-e3e979179244"
    ]
  },
  "processing": {
    "leafFiles": [
      "9d22cbca-03ff-47e8-ac66-f6d463d206f4"
    ]
  },
  "failed": {
    "standardGeojson": {
      "leafFiles": [
        "0abca517-09f2-4d1d-9627-9cd3147e9ec3"
      ],
      "status": "failed",
      "message": "no points passed the filter"
    }
  }
}
```

The most common failed messages are listed [here][12].


:::info Please note
Once you have finished setting up manual file upload, refer to **[machine file conversion][10]**
next
:::