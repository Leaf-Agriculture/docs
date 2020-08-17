---
title: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

Welcome to Leaf's Documentation!

Food and Agriculture developers use Leaf's API to access clean, standardized,
and aggregated Farm data from all major sources. Use the  getting started
section below  to help you access sample farm data quickly, easily, and securely.
We have implementation examples in cURL, NodeJS and Python!

Getting Started

Leaf's API abstracts and standardizes across agricultural data sources to make
things easy for you. There are just a few concepts that you need to get started
and we provide sample data within new Leaf accounts to help you learn quickly.


:::tip
Below you'll find instructions using curl and python, but you may also follow
along using our [Leaf Postman collection](https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection)
if you're familiar.
:::

## Authentication
After creating and confirming your account, the first step is to authenticate with your email and password to retrieve an API token. This token is what we'll use in subsequent steps to talk to the API. Be sure to keep a copy of this token for the remaining steps.


<Tabs
  defaultValue="sh"
  values={[
    { label: 'Bash', value: 'sh', },
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="py">

  ```py
  import requests

  # this is comment 1
  ''' this is comment two '''

  url = "https://a.agrigate.io/api/authenticate"

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
     'https://a.agrigate.io/api/authenticate'
  ```

  </TabItem>
</Tabs>

## Get sample Field
Inside your account, we've created a sample LeafUser and populated it with data.
Let's take a look at the fields endpoint to see the sample field:

<Tabs
  defaultValue="sh"
  values={[
    { label: 'Bash', value: 'sh', },
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
      'https://a.agrigate.io/services/satellite/api/fields'
  ```

  </TabItem>

  <TabItem value="py">

  ```py
  import requests

  url = "https://a.agrigate.io/services/fields/api/fields"
  headers = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}

  response = requests.request("GET", url, headers=headers)
  ```

  </TabItem>
</Tabs>

## Get all sample operation files
Next, let's look at operations data. 'Operations' refers to the data collected
when a machine and any implements performed an operation on a farm. This command
will list operations files available across your whole account:

<Tabs
  defaultValue="sh"
  values={[
    { label: 'Bash', value: 'sh', },
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files'
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  url = "https://a.agrigate.io/services/operations/api/files"

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
    { label: 'Bash', value: 'sh', },
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files/{id}'
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  url = "https://a.agrigate.io/services/operations/api/files/{file_id}"

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
    { label: 'Bash', value: 'sh', },
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files/{id}/summary'
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  url = "https://a.agrigate.io/services/operations/api/files/{file_id}/summary"

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
    { label: 'Bash', value: 'sh', },
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files/{id}/images'
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  url = "https://a.agrigate.io/services/operations/api/files/{file_id}/images"

  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_LEAF_TOKEN'
  }

  response = requests.request("GET", url, headers=headers)
  ```

  </TabItem>
</Tabs>

## Get sample auto-merged operation file
A single strip appears in that image which is no mistake. It's also not as
useful as seeing the whole operation across the whole field! To solve this,
we automatically merge data and produce images for data of the same type and
timeframe.

Let's take a look at the automatically merged harvesting image which is colored
to indicate the range of wet mass collected. To find the auto-merged files, just
add a parameter to filter to origin=automerged:

:::warning
review
:::


<Tabs
  defaultValue="sh"
  values={[
    { label: 'Bash', value: 'sh', },
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files?origin=automerged'
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  url = "https://a.agrigate.io/services/operations/api/files?origin=automerged"

  payload = {}
  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_LEAF_TOKEN'
  }

  response = requests.request("GET", url, headers=headers, data = payload)
  ```

  </TabItem>
</Tabs>

And finally, use that file ID to retrieve the image:


<Tabs
  defaultValue="sh"
  values={[
    { label: 'Bash', value: 'sh', },
    { label: 'Python', value: 'py', },
  ]
}>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \
      'https://a.agrigate.io/services/operations/api/files/{id}/images'
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  url = "https://a.agrigate.io/services/operations/api/files/{file_id}/images"

  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_LEAF_TOKEN'
  }

  response = requests.request("GET", url, headers=headers)
  ```

  </TabItem>
</Tabs>
