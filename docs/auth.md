---
title: Authentication
---

## Create an account
To access our API, you just have to register using this [link][1]. After confirming your email, you will be able to request an access token
through this endpoint:

```
https://a.agrigate.io/api/authenticate
```

You will receive an access token as response.

**All set!** Include this token in your calls and you will have access to Leaf's
API. The token lasts for 8h. After that, just make the same request to the same
endpoint and you will get a new access token. The examples below show you how to
login.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
<TabItem value="js">

```js
const axios = require('axios')

const endpoint = 'https://a.agrigate.io/api/authenticate'

const data = { username: 'username', password: 'password' }

axios.post(endpoint, { data })
    .then(res => console.log(res.data))
    .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
import requests

endpoint = 'https://a.agrigate.io/api/authenticate'

json = {
    'username': 'username',
    'password': 'password'
}

res = requests.post(endpoint, json=json)
print(res.json())
```

</TabItem>
<TabItem value="sh">

```bash
curl -X POST \
    -H 'Content-Type: application/json' \
    -d '{ "username": "username", "password": "password" }' \
    'https://a.agrigate.io/api/authenticate'
```

</TabItem>
</Tabs>

This request will return your access token to Leaf's API:

```json
{
  "id_token" : "YOUR_TOKEN"
}
```


[1]: https://leafagriculture.com.br/registration/
