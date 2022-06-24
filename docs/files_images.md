---
title: Geo Images
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

| Parameter (to filter by) | Values
| - | - |
| `leafUserId` | uuid of one of your users |
| `provider` | `CNHI`, `JohnDeere`, `Trimble`, `ClimateFieldView`, `AgLeader` or `Leaf`|

#### Request examples


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
