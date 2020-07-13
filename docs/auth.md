---
title: Authentication
---


## Create an account

To access our API, you just have to register using this [link][1].


After confirming your email, you will be able to request an access token through this endpoint:

```
https://a.agrigate.io/api/authenticate
```

You will receive an access token as response.

**All set!** Include this token in your calls and you will have access to Leaf's API.

The token lasts for 8h.
After that, just make the same request to the same endpoint and you will get a new access token.

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
var request = require('request');

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

var dataString = `{
  "username": "YOUR_EMAIL",
  "password": "YOUR_PASSWORD",
  "rememberMe": true
}`;

var options = {
    url: 'https://a.agrigate.io/api/authenticate',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('[Success] Server responded with:', body);
    } else {
      console.log('[Error] Server responded with:', body);
    }
}

request(options, callback);
```

</TabItem>
<TabItem value="py">

```py
import requests

endpoint = 'https://a.agrigate.io/api/authenticate'

json = {
    'username' : 'YOUR_EMAIL',
    'password' : 'YOUR_PASSWORD',
    'rememberMe' : 'true'
}

res = requests.post(endpoint, json=json)
print(res.json())
```

</TabItem>
<TabItem value="sh">

```bash
curl -X POST \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
-d \
'{
  "username": "YOUR_EMAIL",
  "password": "YOUR_PASSWORD",
  "rememberMe": true
 }' \
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
