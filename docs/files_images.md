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


```json
[
  {
    "id": "1aa1ce7b-8bb9-4b2d-9421-d7a662cc1bb1",
    "apiOwnerUsername": "leaf",
    "leafUserId": "97770d44-62c4-48c3-8187-6be80f6de3d2",
    "startTime": "2015-04-18T19:31:27Z",
    "endTime": "2015-04-18T19:58:50Z",
    "updatedTime": "2021-08-24T16:00:15.062Z",
    "type": "planted",
    "files": [
        "8334f4bb-48de-44e2-903b-6dedd6db6683",
        "81778f58-8eed-41cc-a025-e653ea85b01e",
        "0f606bef-b529-4899-854c-9b698cd08762",
        "84fec273-b458-4be7-8feb-44204502f126",
        "92b7367b-2ffd-4a82-ba9b-5a40e8b68714"
    ],
    "fields": [
      {
        "id": "3a90d11a-70d0-4f62-b6d4-32006b1dcb6a"
      }
    ]
  }
]
```
