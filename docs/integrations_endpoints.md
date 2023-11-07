---
title: Integrations Endpoints
description: Integrations - Endpoints
sidebar_label: Provider Integrations 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- The following links are referenced throughout this document -->
[1]: #get-integrations-resources


[5]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[6]: https://docs.withleaf.io/docs/alerts_authentication


All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/integrations/api
```

This service has the following endpoints available:

| Description                        | Endpoints                                                              |
|------------------------------------|------------------------------------------------------------------------|
| [Get Integrations Resources][1]    | <span class="badge badge--success">GET</span> `/resources`            |



For easy testing of these endpoints, we recommend using our Postman [collection][5].

To understand how to verify if an incoming request comes from Leaf, see the [Authentication section][6].

---

### Get Integrations Resources

&nbsp<span class="badge badge--success">GET</span> `/resources`

Gets a paged list of Fields. It is possible to filter the results by passing
some query parameters.

- `provider`, only matches fields from this provider (string).
- `leafUserId`, only matches fields from this user (string).
- `page`, an integer specifying the page being fetched.
- `size`, an integer specifying the size of the page (defaults to 20).

These last two parameters are used exclusively for paging through results.

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

  const endpoint ='https://api.withleaf.io/services/integrations/api/resources'
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

  endpoint = 'https://api.withleaf.io/services/integrations/api/resources'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/integrations/api/resources'
  ```

  </TabItem>
</Tabs>

#### Response

```json
{
  "message": "SUCCESS",
  "summaries": [
    {
      "provider": "JohnDeere",
      "leafUserId": "UUID",
      "growers": 12,
      "farms": 12,
      "fields": 100,
      "syncReferenceTime": "2023-08-30T18:39:33.230612Z"
    },
    {
      "provider": "ClimateFieldView",
      "leafUserId": "UUID",
      "farms": 12,
      "fields": 100,
      "syncReferenceTime": "2023-08-30T18:39:33.230612Z"
    },
    ....
  ]
}
```

:::tip FMIS Structure Warning
Each provider has its own implementation of the FMIS structure which you can check on the table below.
:::

#### FMIS Structure Table

This table contains the FMIS properties available for the Integrations Resources responses.

| Provider           | Grower                        | Farm                          | Field               |
|--------------------|-------------------------------|-------------------------------|---------------------|
| `JohnDeere`        | :white_check_mark:            | :white_check_mark:            | :white_check_mark:  |
| `ClimateFieldView` | :heavy_multiplication_x:      | :white_check_mark:            | :white_check_mark:  |
| `CNHI`             | :white_check_mark:            | :white_check_mark:            | :white_check_mark:  |
| `Trimble`          | :white_check_mark:            | :white_check_mark:            | :white_check_mark:  |
| `Stara`            | :heavy_multiplication_x:      | :heavy_multiplication_x:      | :white_check_mark:  |
| `Raven`            | :white_check_mark:            | :white_check_mark:            | :white_check_mark:  |
| `AgVance`          | :white_check_mark:            | :white_check_mark:            | :white_check_mark:  |
