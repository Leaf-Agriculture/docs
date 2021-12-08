---
title: Authentication
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To access our API, you just have to register using this [link][register]. After
confirming your email, you will be able to request a token ([JWT][jwt]) through
this endpoint:

```
https://api.withleaf.io/api/authenticate
```

You will receive your Leaf Token as response.

**All set!** Include this token in your API calls and you will have access to
Leaf's API.


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

  const endpoint = 'https://api.withleaf.io/api/authenticate'

  const data = { username:'username', password:'password', rememberMe:'true'}

  axios.post(endpoint, { data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
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
</Tabs>

This request will return your access token to Leaf's API:

```json
{
  "id_token" : "YOUR_LEAF_TOKEN"
}
```

_note: Your Leaf Token lasts for 30 days with "rememberMe": "true" in the
json. If you want it to last only 24h, feel free to set "rememberMe" to "false"._  
_After expiration, just make the same request to the same endpoint and you will
get a new access token. _

[register]: https://leafagriculture.com.br/register/
[jwt]: https://tools.ietf.org/html/rfc7519
