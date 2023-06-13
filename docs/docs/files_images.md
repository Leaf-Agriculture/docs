---
title: Geo Images
description: Geo Images
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: #create-images

## About

This service permits to generate images for files. It can be used to test the color ramp values.

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/images/api
```

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Create images][1] | <span class="badge badge--success">POST</span> `/images`

### Create images

&nbsp<span class="badge badge--success">POST</span>  `/images`

Gets a paged list of operations that belong to the current logged in user. It is
possible to filter the results by passing some query parameters. They are listed
below.

| Parameter | Values
| - | - |
| `colorRamp` | the ranges for the color ramp |
| `projection` | `EPSG_3857`|
| `resolution` | >0|
| `shape` | `ROUND`, `JohnDeere`, `Trimble`, `ClimateFieldView`, `AgLeader` or `Leaf`|

#### Request examples

```json
{
  "colorRamp": {
    "0%"  : [200,   0, 0],
    "35%" : [255,  40, 0],
    "45%" : [255, 150, 0],
    "55%" : [255, 240, 0],
    "65%" : [  0, 230, 0],
    "75%" : [  0, 190, 0],
    "100%": [  0, 130, 0],
    "nv"  : [  0,   0, 0, 0]
  },
  "projection": "EPSG_3857",
  "resolution": 1,
  "shape": "ROUND"
}
```

You can also pass some parameters used exclusively for paging through results.
They are:

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

The response will be the URL of new image in PNG format.

https://api.withleaf.io/services/geoimages/api/images/a84e6627-4526-4560-a0ac-47eb57865a03/harvestMoisture
