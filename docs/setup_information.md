---
title: General Setup Information
description: General Setup Information
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Pagination

All endpoints that return a list of resources are paginated. You can select the size of the page and which page to get by using the query parameters `size` and `page`.

- `size` - Defines the size of the page. Defaults to 20. Max size is 100.
- `page` - Defines which page to fetch, considering each page has `size` elements. The first page is page 0. Defaults to 0.

The `X-Total-Count` header in the response indicate the total existent items, and the `Link` header can provide the link for the first, next and last pages available:

```
<api/fields?page=1&size=20>;rel="next",
<api/fields?page=398&size=20>;rel="last",
<api/fields?page=0&size=20>;rel="first"
```

## Date format

All the dates follow ISO 8601 format. Specifically, all the dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'".


## File archiving 

By default, our API archives files to slower storage after 180 days of no access. The file will only be available again upon a support request.


## Error codes

| Service          | Endpoint                                                                          | Message     | HTTP Status | Reason                                                          |
|------------------|-----------------------------------------------------------------------------------|-------------|-------------|-----------------------------------------------------------------|
| Field Operations | [Upload a file](https://docs.withleaf.io/docs/converters_endpoints#upload-a-file) | Bad Request | 400         | The uploaded file is bigger than 3 GB <!-- not standartized --> |

## Downloading files from Leaf

To provide greater security all files provided by Leaf must be accessed using your Leaf token.

:::info
Unauthenticated or direct to S3 download links will be deprecated on December 1st, 2024. We strongly recommended that you use the authenticated download links which can be identified with the prefix `download-` and which point to api.withleaf.io.
:::


### Authentication sample

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

  const endpoint ='downloadUrl'
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

  endpoint = 'downloadUrl'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'downloadUrl'
  ```

  </TabItem>
</Tabs>




