---
title: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Leaf Quickstart

This quickstart tutorial is written help you quickly experience and start building with Leaf.
First, please [register on our website](https://withleaf.io/register/) to receive your credentials.
We've included sample data in your account so you can begin querying data via Leaf immediately.

:::tip Leaf's Postman collection
Below you'll find instructions using curl and python, and we've also built a [Postman](https://www.postman.com/) collection to accompany this tutorial. Please find it here: [Leaf Postman collection](https://github.com/Leaf-Agriculture/Leaf-API-Postman-Collection)
:::

## Authentication

After creating and confirming your account, the first step is to authenticate
with your email and password to retrieve a Leaf token. This token is what we'll
use in subsequent steps to talk to the API. Be sure to keep a copy of this token
for the remaining steps.

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
{ label: 'JavaScript', value: 'js', },
]
}>

  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/api/authenticate"

data = {'username':'your email', 'password':'your password', 'rememberMe':'true'}

headers = {'Content-Type': 'application/json'}

response = requests.request("POST", url, headers=headers, json=data)
```

  </TabItem>
  <TabItem value="sh">

```shell
curl -X POST \
   -H 'Content-Type: application/json' \
   -d '{ "username":"username", "password":"password", "rememberMe":"true" }' \
   'https://api.withleaf.io/api/authenticate'
```

  </TabItem>
  <TabItem value="js">

```js
const axios = require("axios");

const endpoint = "https://api.withleaf.io/api/authenticate";

const data = { username: "username", password: "password", rememberMe: "true" };

axios
  .post(endpoint, { data })
  .then((res) => console.log(res.data))
  .catch(console.error);
```

  </TabItem>
</Tabs>

This request will return your access token to Leaf's API:

```json
{
  "id_token": "YOUR_LEAF_TOKEN"
}
```

_Note: Your Leaf Token lasts for 30 days with "rememberMe": "true" in the
json. If you want it to last only 24h, feel free to set "rememberMe" to "false"._  
_After expiration, just make the same request to the same endpoint and you will
get a new access token. _

## Get sample Field with attached operations

Inside your account, we've created a sample LeafUser and populated it with data.
Let's take a look at the fields endpoint to see the sample field:

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
]
}>

  <TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
    'https://api.withleaf.io/services/fields/api/fields'
```

  </TabItem>

  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/services/fields/api/fields"
headers = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}

response = requests.request("GET", url, headers=headers)
```

  </TabItem>
</Tabs>

It returns an Array (List) with with JSON objects representing the Fields and you can see that there are operations IDs attached.
You can expect the following responses.

<Tabs
defaultValue="200"
values={[
{ label: '200', value: '200', },
{ label: '401', value: '401', },
]
}>

  <TabItem value="200">

```json
[
  {
    "id": "SAMPLE_FIELD",
    "leafUserId": "50b382f5-710d-48c6-80cd-87383db3398f",
    "area": {
      "value": 36.01639410786629,
      "unit": "ha"
    },
    "boundaries": ["882110d5-07b1-4b95-8689-c4da8a837e04"],
    "type": "ORIGINAL",
    "createdTime": "2022-03-27T00:57:56.762904Z",
    "updatedTime": "2022-03-27T00:57:56.762904Z",
    "sources": []
  }
]
```

  </TabItem>

  <TabItem value="401">

```json
{
  "type": "https://www.jhipster.tech/problem/problem-with-message",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not Authenticated",
  "path": "/services/fields/api/fields",
  "message": "error.http.401"
}
```

  </TabItem>
</Tabs>

In the next section will be explained how to get the operations by those ids.

## Get all sample operation files

Next, let's look at operations data. 'Operations' refers to the data collected
when a machine and any implements performed an operation on a farm. This command
will list operations files available across your whole account:

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
]
}>

  <TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
    'https://api.withleaf.io/services/operations/api/files'
```

  </TabItem>
  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/services/operations/api/files"

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_LEAF_TOKEN'
}

response = requests.request("GET", url, headers=headers)
```

  </TabItem>
</Tabs>

You can expect after a successful call an Array (List) of files in the **operations** property from the response object.

<Tabs
defaultValue="200"
values={
[
{ label: '200', value: '200', },
{ label: '401', value: '401', },
]
}>

  <TabItem value="200">

```json
{
  "message": "SUCCESS",
  "operations": [
    {
      "id": "75aac67f-2190-4d5d-a556-d692ef930f6f",
      "fileName": "mergedFile",
      "provider": "Leaf",
      "fields": [],
      "standardGeojson": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/328ac434-ae2c-4bad-b749-d4c322218bb2.json",
      "zippedPNGs": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/13524c53-45fb-42f3-bb9c-fd2037d91580.zip",
      "leafUserId": "50b382f5-710d-48c6-80cd-87383db3398f",
      "apiOwnerUsername": "string",
      "summary": {
        "type": "Feature",
        "properties": {
          "elevation": {
            "average": 194.15977795080636,
            "standardDeviation": 3.4336183513103755,
            "min": 188.3,
            "max": 360.9
          },
          "harvestMoisture": {
            "average": 16.081799920456646,
            "standardDeviation": 2.8065718377203943,
            "min": 0,
            "max": 23.72
          },
          "yieldVolume": {
            "average": 0.12224952048974526,
            "standardDeviation": 0.015954333578747166,
            "min": 0.07542910422963155,
            "max": 0.15970622921592703
          },
          "operationType": "harvested",
          "totalDistance": 181050.94820477773,
          "speed": {
            "average": 3.4574422996293532,
            "standardDeviation": 0.9372111357375735,
            "min": 0,
            "max": 6.690000057220459
          },
          "crop": ["corn"],
          "totalArea": 330765.8910826785
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [-89.834466, 39.719631],
                [-89.834503, 39.719698],
                [-89.834532, 39.719758],
                [-89.83471, 39.72636],
                [-89.834647, 39.726401],
                [-89.834643, 39.726403],
                [-89.834634, 39.726407],
                [-89.834624, 39.726411],
                [-89.834615, 39.726414],
                [-89.829956, 39.72758],
                [-89.829946, 39.727569],
                [-89.829938, 39.727552],
                [-89.829936, 39.727543],
                [-89.829935, 39.727534],
                [-89.829872, 39.72007],
                [-89.829872, 39.720012],
                [-89.829879, 39.71978],
                [-89.829888, 39.71968],
                [-89.829892, 39.719679],
                [-89.829948, 39.719672],
                [-89.831934, 39.719643],
                [-89.832978, 39.719637],
                [-89.834465, 39.719631],
                [-89.834466, 39.719631]
              ]
            ]
          ]
        }
      },
      "sourceFiles": [
        "97e0fdaf-e029-45c3-9108-1a524e2e764f",
        "cc209032-5003-4a17-80f3-2af99e2715a5"
      ],
      "status": "processed",
      "origin": "automerged",
      "createdTime": "2020-10-14T16:45:54Z",
      "updatedTime": "2020-10-14T16:46:18Z"
    }
  ]
}
```

  </TabItem>

  <TabItem value="401">

```json
{
  "type": "https://www.jhipster.tech/problem/problem-with-message",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not Authenticated",
  "path": "/services/operations/api/files",
  "message": "error.http.401"
}
```

  </TabItem>
</Tabs>

## Get specific sample operation file

Now that you have a file ID, you can query for the operations data itself and a
summary as well.

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
]
}>

  <TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
    'https://api.withleaf.io/services/operations/api/files/{id}'
```

  </TabItem>
  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/services/operations/api/files/{file_id}"

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_LEAF_TOKEN'
}

response = requests.request("GET", url, headers=headers)
```

</TabItem>
</Tabs>

You can expect a object that contains the requested file.

<Tabs
defaultValue="200"
values={
[
{ label: '200', value: '200', },
{ label: '401', value: '401', },
]
}>

  <TabItem value="200">

```json
{
  "id": "75aac67f-2190-4d5d-a556-d692ef930f6f",
  "fileName": "mergedFile",
  "provider": "Leaf",
  "fields": [],
  "standardGeojson": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/328ac434-ae2c-4bad-b749-d4c322218bb2.json",
  "zippedPNGs": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/13524c53-45fb-42f3-bb9c-fd2037d91580.zip",
  "leafUserId": "50b382f5-710d-48c6-80cd-87383db3398f",
  "apiOwnerUsername": "string",
  "summary": {
    "type": "Feature",
    "properties": {
      "elevation": {
        "average": 194.15977795080636,
        "standardDeviation": 3.4336183513103755,
        "min": 188.3,
        "max": 360.9
      },
      "harvestMoisture": {
        "average": 16.081799920456646,
        "standardDeviation": 2.8065718377203943,
        "min": 0,
        "max": 23.72
      },
      "yieldVolume": {
        "average": 0.12224952048974526,
        "standardDeviation": 0.015954333578747166,
        "min": 0.07542910422963155,
        "max": 0.15970622921592703
      },
      "operationType": "harvested",
      "totalDistance": 181050.94820477773,
      "speed": {
        "average": 3.4574422996293532,
        "standardDeviation": 0.9372111357375735,
        "min": 0,
        "max": 6.690000057220459
      },
      "crop": ["corn"],
      "totalArea": 330765.8910826785
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [-89.834466, 39.719631],
            [-89.834503, 39.719698],
            [-89.834532, 39.719758],
            [-89.83471, 39.72636],
            [-89.834647, 39.726401],
            [-89.834643, 39.726403],
            [-89.834634, 39.726407],
            [-89.834624, 39.726411],
            [-89.834615, 39.726414],
            [-89.829956, 39.72758],
            [-89.829946, 39.727569],
            [-89.829938, 39.727552],
            [-89.829936, 39.727543],
            [-89.829935, 39.727534],
            [-89.829872, 39.72007],
            [-89.829872, 39.720012],
            [-89.829879, 39.71978],
            [-89.829888, 39.71968],
            [-89.829892, 39.719679],
            [-89.829948, 39.719672],
            [-89.831934, 39.719643],
            [-89.832978, 39.719637],
            [-89.834465, 39.719631],
            [-89.834466, 39.719631]
          ]
        ]
      ]
    }
  },
  "sourceFiles": [
    "97e0fdaf-e029-45c3-9108-1a524e2e764f",
    "cc209032-5003-4a17-80f3-2af99e2715a5"
  ],
  "status": "processed",
  "origin": "automerged",
  "createdTime": "2020-10-14T16:45:54Z",
  "updatedTime": "2020-10-14T16:46:18Z"
}
```

  </TabItem>

  <TabItem value="401">

```json
{
  "type": "https://www.jhipster.tech/problem/problem-with-message",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not Authenticated",
  "path": "/services/operations/api/files/75aac67f-2190-4d5d-a556-d692ef930f6f",
  "message": "error.http.401"
}
```

  </TabItem>
</Tabs>

## Get sample operation file summary

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
]
}>

  <TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
    'https://api.withleaf.io/services/operations/api/files/{id}/summary'
```

  </TabItem>
  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/services/operations/api/files/{file_id}/summary"

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_LEAF_TOKEN'
}

response = requests.request("GET", url, headers=headers)
```

  </TabItem>
</Tabs>

You can expect a object that contains the summary from the file.

<Tabs
defaultValue="200"
values={
[
{ label: '200', value: '200', },
{ label: '401', value: '401', },
]
}>

  <TabItem value="200">

```json
{
  "type": "Feature",
  "properties": {
    "totalDistance": 181050.94820477773,
    "speed": {
      "average": 3.4574422996293532,
      "standardDeviation": 0.9372111357375735,
      "min": 0,
      "max": 6.690000057220459
    },
    "harvestMoisture": {
      "average": 16.081799920456646,
      "standardDeviation": 2.8065718377203943,
      "min": 0,
      "max": 23.72
    },
    "elevation": {
      "average": 194.15977795080636,
      "standardDeviation": 3.4336183513103755,
      "min": 188.3,
      "max": 360.9
    },
    "crop": ["corn"],
    "yieldVolume": {
      "average": 0.12224952048974526,
      "standardDeviation": 0.015954333578747166,
      "min": 0.07542910422963155,
      "max": 0.15970622921592703
    },
    "operationType": "harvested",
    "totalArea": 330765.8910826785
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [-89.834466, 39.719631],
          [-89.834503, 39.719698],
          [-89.834532, 39.719758],
          [-89.83471, 39.72636],
          [-89.834647, 39.726401],
          [-89.834643, 39.726403],
          [-89.834634, 39.726407],
          [-89.834624, 39.726411],
          [-89.834615, 39.726414],
          [-89.829956, 39.72758],
          [-89.829946, 39.727569],
          [-89.829938, 39.727552],
          [-89.829936, 39.727543],
          [-89.829935, 39.727534],
          [-89.829872, 39.72007],
          [-89.829872, 39.720012],
          [-89.829879, 39.71978],
          [-89.829888, 39.71968],
          [-89.829892, 39.719679],
          [-89.829948, 39.719672],
          [-89.831934, 39.719643],
          [-89.832978, 39.719637],
          [-89.834465, 39.719631],
          [-89.834466, 39.719631]
        ]
      ]
    ]
  }
}
```

  </TabItem>

  <TabItem value="401">

```json
{
  "type": "https://www.jhipster.tech/problem/problem-with-message",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not Authenticated",
  "path": "/services/operations/api/files/75aac67f-2190-4d5d-a556-d692ef930f6f/summary",
  "message": "error.http.401"
}
```

  </TabItem>
</Tabs>

## Get sample operation file image

You may have already noticed that we're seeing a lot of operations files for
this one field and the timestamps span just a few days. This is because we're
looking at multiple files output from a machine that effectively represent one
large operation - a harvest. Before we talk about merging these pieces into a
single operation, let's look at an image from one of the pieces:

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
]
}>

  <TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
    'https://api.withleaf.io/services/operations/api/files/{id}/images'
```

  </TabItem>
  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/services/operations/api/files/{file_id}/images"

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_LEAF_TOKEN'
}

response = requests.request("GET", url, headers=headers)
```

  </TabItem>
</Tabs>

You can expect an Array (List) of objects that contains the property, ramp and url for the images.

<Tabs
defaultValue="200"
values={
[
{ label: '200', value: '200', },
{ label: '401', value: '401', },
]
}>

  <TabItem value="200">

```json
[
  {
    "property": "distance",
    "ramp": {
      "35%": [255, 40, 0],
      "100%": [0, 130, 0],
      "45%": [255, 150, 0],
      "0%": [200, 0, 0],
      "55%": [255, 240, 0],
      "65%": [0, 230, 0],
      "75%": [0, 190, 0],
      "nv": [0, 0, 0, 0]
    },
    "url": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/0ee21eaf-9c7f-4686-9250-6b490a764824.png"
  },
  {
    "property": "heading",
    "ramp": {
      "35%": [255, 40, 0],
      "100%": [0, 130, 0],
      "45%": [255, 150, 0],
      "0%": [200, 0, 0],
      "55%": [255, 240, 0],
      "65%": [0, 230, 0],
      "75%": [0, 190, 0],
      "nv": [0, 0, 0, 0]
    },
    "url": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/98e5e0ff-8968-4d9a-a68b-da9406f489c3.png"
  },
  {
    "property": "speed",
    "ramp": {
      "35%": [255, 40, 0],
      "100%": [0, 130, 0],
      "45%": [255, 150, 0],
      "0%": [200, 0, 0],
      "55%": [255, 240, 0],
      "65%": [0, 230, 0],
      "75%": [0, 190, 0],
      "nv": [0, 0, 0, 0]
    },
    "url": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/f0819831-3dbb-4574-85d0-f68abf520988.png"
  },
  {
    "property": "elevation",
    "ramp": {
      "35%": [255, 40, 0],
      "100%": [0, 130, 0],
      "45%": [255, 150, 0],
      "0%": [200, 0, 0],
      "55%": [255, 240, 0],
      "65%": [0, 230, 0],
      "75%": [0, 190, 0],
      "nv": [0, 0, 0, 0]
    },
    "url": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/7591ead8-3d1a-4b24-a178-32d9254481e5.png"
  },
  {
    "property": "harvestMoisture",
    "ramp": {
      "35%": [255, 40, 0],
      "100%": [0, 130, 0],
      "45%": [255, 150, 0],
      "0%": [200, 0, 0],
      "55%": [255, 240, 0],
      "65%": [0, 230, 0],
      "75%": [0, 190, 0],
      "nv": [0, 0, 0, 0]
    },
    "url": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/b4c5e394-f9f9-426f-b709-4f5fc70319ad.png"
  },
  {
    "property": "wetMass",
    "ramp": {
      "35%": [255, 40, 0],
      "100%": [0, 130, 0],
      "45%": [255, 150, 0],
      "0%": [200, 0, 0],
      "55%": [255, 240, 0],
      "65%": [0, 230, 0],
      "75%": [0, 190, 0],
      "nv": [0, 0, 0, 0]
    },
    "url": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/a9482943-deeb-4b0b-a3d7-9030b4c2ff66.png"
  },
  {
    "property": "yieldVolume",
    "ramp": {
      "35%": [255, 40, 0],
      "100%": [0, 130, 0],
      "45%": [255, 150, 0],
      "0%": [200, 0, 0],
      "55%": [255, 240, 0],
      "65%": [0, 230, 0],
      "75%": [0, 190, 0],
      "nv": [0, 0, 0, 0]
    },
    "url": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/fde37b73-7328-4080-91c6-b7a69f01e9ed.png"
  },
  {
    "property": "equipmentWidth",
    "ramp": {
      "35%": [255, 40, 0],
      "100%": [0, 130, 0],
      "45%": [255, 150, 0],
      "0%": [200, 0, 0],
      "55%": [255, 240, 0],
      "65%": [0, 230, 0],
      "75%": [0, 190, 0],
      "nv": [0, 0, 0, 0]
    },
    "url": "https://leaf-onboarding.s3.us-west-2.amazonaws.com/sample/f2556966-e2c5-4a6e-ba46-852553763035.png"
  }
]
```

  </TabItem>

  <TabItem value="401">

```json
{
  "type": "https://www.jhipster.tech/problem/problem-with-message",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not Authenticated",
  "path": "/services/operations/api/files/75aac67f-2190-4d5d-a556-d692ef930f6f/images",
  "message": "error.http.401"
}
```

  </TabItem>
</Tabs>

## Get sample merged operation file

A single strip appears in that image which is no mistake. It's also not as
useful as seeing the whole operation across the whole field! To solve this, we
allow you to request a merge of operations data and produce images for data of
the same type and timeframe. The sample data already includes a merged file.

Let's take a look at that merged harvesting image which is colored to indicate
the range of wet mass collected. First, let's find the merged file by simply
adding a parameter to filter to origin=merged

<!-- A single strip appears in that image which is no mistake. It's also not as
useful as seeing the whole operation across the whole field! To solve this,
we automatically merge data and produce images for data of the same type and
timeframe.

Let's take a look at the automatically merged harvesting image which is colored
to indicate the range of wet mass collected. To find the auto-merged files, just
add a parameter to filter to origin=automerged: -->

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
]
}>

  <TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
    'https://api.withleaf.io/services/operations/api/files?origin=merged'
```

  </TabItem>
  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/services/operations/api/files?origin=merged"

payload = {}
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_LEAF_TOKEN'
}

response = requests.request("GET", url, headers=headers, data = payload)
```

  </TabItem>
</Tabs>

<Tabs
defaultValue="200"
values={
[
{ label: '200', value: '200', },
{ label: '401', value: '401', },
]
}>

  <TabItem value="200">

```json
{
  "message": "All set! If your credentials are correct, your files are being processed by Leaf and will be available in a few minutes",
  "operations": []
}
```

  </TabItem>

  <TabItem value="401">

```json
{
  "type": "https://www.jhipster.tech/problem/problem-with-message",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not Authenticated",
  "path": "/services/operations/api/files",
  "message": "error.http.401"
}
```

  </TabItem>
</Tabs>

And finally, use that file ID to retrieve a list of images, one for each
operation property. From this response, you can load one of the sample images as the same way described in the section **Get sample operation file image**

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
]
}>

  <TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
    'https://api.withleaf.io/services/operations/api/files/{id}/images'
```

  </TabItem>
  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/services/operations/api/files/{file_id}/images"

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_LEAF_TOKEN'
}

response = requests.request("GET", url, headers=headers)
```

  </TabItem>
</Tabs>

## Get sample satellite imagery

Finally, let's take a look at some satellite imagery. Using data from Sentinel-2,
we produce NDVI images for fields you define to be monitored. First we'll list
the fields being monitored from the satellite service:

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
]
}>

  <TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
    'https://api.withleaf.io/services/satellite/api/fields/'
```

  </TabItem>
  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/services/satellite/api/fields"

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_LEAF_TOKEN'
}

response = requests.request("GET", url, headers=headers)
```

  </TabItem>
</Tabs>

The response will return an Array (List) of available fields being monitored from the satellite service.

<Tabs
defaultValue="200"
values={
[
{ label: '200', value: '200', },
{ label: '401', value: '401', },
]
}>

  <TabItem value="200">

```json
[
  {
    "externalId": "ab7890nmh5693",
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [-89.83466863632202, 39.726580599966866],
            [-89.83469009399414, 39.71951688444436],
            [-89.82966899871826, 39.71956639898719],
            [-89.8298192024231, 39.7278183260755],
            [-89.83466863632202, 39.726580599966866]
          ]
        ]
      ]
    },
    "providers": ["sentinel"]
  },
  {
    "externalId": "ab7890nmh5692",
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [-89.83466863632202, 39.726580599966866],
            [-89.83469009399414, 39.71951688444436],
            [-89.82966899871826, 39.71956639898719],
            [-89.8298192024231, 39.7278183260755],
            [-89.83466863632202, 39.726580599966866]
          ]
        ]
      ]
    },
    "providers": ["sentinel"]
  }
]
```

  </TabItem>

  <TabItem value="401">

```json
{
  "type": "https://www.jhipster.tech/problem/problem-with-message",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not Authenticated",
  "path": "/services/satellite/api/fields",
  "message": "error.http.401"
}
```

  </TabItem>
</Tabs>

And then we can pull up the sample NDVI image of the sample field like this:

<Tabs
defaultValue="sh"
values={[
{ label: 'cURL', value: 'sh', },
{ label: 'Python', value: 'py', },
]
}>

  <TabItem value="sh">

```shell
curl -X GET \
    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
    'https://api.withleaf.io/services/satellite/api/fields/{sat_externalId}/processes'
```

  </TabItem>
  <TabItem value="py">

```py
import requests

url = "https://api.withleaf.io/services/satellite/api/fields/{sat_externalId}/processes"

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_LEAF_TOKEN'
}

response = requests.request("GET", url, headers=headers)
```

  </TabItem>
</Tabs>

<Tabs
defaultValue="200"
values={
[
{ label: '200', value: '200', },
{ label: '401', value: '401', },
]
}>

  <TabItem value="200">

```json
[
  {
    "id": 38873523,
    "date": "2022-03-14T17:02:27.623Z",
    "clouds": 0.0,
    "bucketName": "sentinel-s2-l2a",
    "bucketKey": "tiles/15/T/YE/2022/3/14/0",
    "bucketRegion": "eu-central-1",
    "status": "SUCCESS",
    "coverage": 100.0,
    "images": [
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/NDVI.png",
        "type": "png",
        "resolution": null
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B06.tif",
        "type": "tif",
        "resolution": 20.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B01.tif",
        "type": "tif",
        "resolution": 60.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/NDVI_color.tif",
        "type": "tif_colorized",
        "resolution": 10.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B05.tif",
        "type": "tif",
        "resolution": 20.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/NDVI.tif",
        "type": "tif",
        "resolution": 10.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/RGB.tif",
        "type": "tif_colorized",
        "resolution": 10.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B8A.tif",
        "type": "tif",
        "resolution": 60.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B07.tif",
        "type": "tif",
        "resolution": 20.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/NDVI_absolute.png",
        "type": "png",
        "resolution": null
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/RGB.png",
        "type": "png",
        "resolution": null
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B08.tif",
        "type": "tif",
        "resolution": 10.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B09.tif",
        "type": "tif",
        "resolution": 20.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B04.tif",
        "type": "tif",
        "resolution": 10.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B03.tif",
        "type": "tif",
        "resolution": 10.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B12.tif",
        "type": "tif",
        "resolution": 20.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B11.tif",
        "type": "tif",
        "resolution": 20.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/B02.tif",
        "type": "tif",
        "resolution": 10.0
      },
      {
        "url": "https://monitoredfields-prd-imagesbucket-1l67seopwr9ra.s3.eu-central-1.amazonaws.com/249866/tiles/15/T/YE/2022/3/14/0/NDVI_relative.png",
        "type": "png",
        "resolution": null
      }
    ],
    "processedTimestamp": "2022-03-29T21:15:53.365Z",
    "provider": "sentinel"
  }
]
```

  </TabItem>

  <TabItem value="401">

```json
{
  "type": "https://www.jhipster.tech/problem/problem-with-message",
  "title": "Unauthorized",
  "status": 401,
  "detail": "Not Authenticated",
  "path": "/services/satellite/api/fields/ab7890nmh5693/processes",
  "message": "error.http.401"
}
```

  </TabItem>
</Tabs>
