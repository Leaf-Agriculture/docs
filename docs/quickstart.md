---
title: Quickstart
description: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


### Leaf Quickstart

This quickstart tutorial is written help you quickly experience and start building with Leaf.
First, please contact your CSM to receive your credentials.
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
  const axios = require('axios')

  const endpoint = 'https://api.withleaf.io/api/authenticate'

  const data = { username:'username', password:'password', rememberMe:'true'}

  axios.post(endpoint, { data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
</Tabs>

_note: Your Leaf Token lasts for 30 days with "rememberMe": "true" in the
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

It returns a JSON object representing the Fields and you can see that there are
operations ids attached. Next section will explain how to get the operations by
those ids.

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

And finally, use that file ID to retrieve a list of images, one for each
operation property. From this response, you can load one of the sample images:


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
      'https://api.withleaf.io/services/satellite/api/fields/{field_id}/processes'
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  url = "https://api.withleaf.io/services/satellite/api/fields/{field_id}/processes"

  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_LEAF_TOKEN'
  }

  response = requests.request("GET", url, headers=headers)
  ```

  </TabItem>
</Tabs>
