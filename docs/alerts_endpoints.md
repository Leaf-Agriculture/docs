---
title: Alerts Endpoints
description: Alerts - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- The following links are referenced throughout this document -->
[1]: #create-a-webhook
[2]: #get-a-webhook
[3]: #get-all-webhooks
[4]: #delete-a-webhook
[7]: #get-failed-calls-for-webhooks

[5]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[6]: alerts_authentication.md


All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/alerts/api/alerts
```

This service has the following endpoints available:

| Description                        | Endpoints                                                              |
|------------------------------------|------------------------------------------------------------------------|
| [Create a webhook][1]              | <span class="badge badge--warning">POST</span> `/webhooks`             |
| [Get a webhook][2]                 | <span class="badge badge--success">GET</span> `/webhooks/{id}`         |
| [Get all webhooks][3]              | <span class="badge badge--success">GET</span> `/webhooks`              |
| [Get failed calls for webhooks][7] | <span class="badge badge--success">GET</span> `/webhooks/failed-calls` |
| [Delete a webhook][4]              | <span class="badge badge--danger">DELETE</span> `/webhooks/{id}`       |

Note that currently it's not possible to update a Webhook with a single
request. If you want to update an existing Webhook resource, you have to delete
it first and then recreate it. In doing so, be aware that if the update changes
the Webhook URL, it's recommended that you keep the previous URL up and running
until you get the response from the recreation request (POST).

For easy testing of these endpoints, we recommend using our Postman [collection][5].

To understand how to verify if an incoming request comes from Leaf, see the [Authentication section][6].

---

### Create a webhook

&nbsp<span class="badge badge--warning">POST</span> `/webhooks`

Creates a webhook resource, specifying which events you want to be notified about and
where (server URL). The webhook will begin receiving
events immediately after it is created.

It's not possible to create different webhooks that listen to the same events. For example,
if you have already registered a webhook listening for `newSatelliteImages`
and try to register another one, you'll get a 400 response with error `eventRegisteredTwice`.

#### Request body

| Parameter | Type | Description
| - | - | - |
| events | enum name of the event type | They are defined in the "Events" section of the services chapters (e.g. `newSatelliteImage`) |
| name | string | The name of your webhook |
| secret | string | The secret used for HMAC authentication. We sign payload with this secret. See more [here][6] |
| url | a valid HTTP URL string | The address of your webhook server |

Example in JSON:

```json
{
  "events": [
    "newSatelliteImage"
  ],
  "name": "Satellite images listener",
  "secret": "mRyT257XpFWX",
  "url": "https://yourwebhook.com/leaf/satellite"
}
```

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]}
>
  <TabItem value="js">

  ```js
  const axios = require('axios')

  const TOKEN = 'YOUR_TOKEN'
  const headers = {'Authorization': `Bearer ${TOKEN}`}
  const endpoint = 'https://api.withleaf.io/services/alerts/api/alerts/webhooks'

  const data = { /* Your payload as specified above  */ }

  axios.post(endpoint, {headers, data})
      .then(response => console.log(response.data))
      .catch(console.error)
  ```

  </TabItem>

  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  endpoint = 'https://api.withleaf.io/services/alerts/api/alerts/webhooks'

  payload = {...}  # Your payload as specified above

  response = requests.post(endpoint, headers=headers, json=payload)
  print(response.json())
  ```

  </TabItem>

  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d 'Your paylaod as specified above'
      'https://api.withleaf.io/services/alerts/api/alerts/webhooks'
  ```
  </TabItem>
</Tabs>

#### Response
It returns a JSON containing information about the webhook created.

  ```json
  {
    "id": "UUID",
    "events": [
      "newSatelliteImage"
    ],
    "name": "Satellite images listener",
    "secret": "mRyT257XpFWX",
    "url": "https://agtech.com/leaf/satellite"
  }
  ```

If you need to test your endpoint, here is a request example so you can simulate the validation Leaf will do.

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

  const headers = {'Content-Type': 'application/json', 'accept': '*/*'}
  const endpoint = 'your-webhook-url'

  const data = {"message" : "confirmation of webhook upon registration"}

  axios.post(endpoint, {headers, data})
      .then(response => console.log(response.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  headers = {'Content-Type': 'application/json', 'accept': '*/*'}
  endpoint = 'your-webhook-url'

  payload = {"message" : "confirmation of webhook upon registration"}

  response = requests.post(endpoint, headers=headers, json=payload)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Content-Type: application/json' \
      -H 'accept: */*' \
      -d '{"message" : "confirmation of webhook upon registration"}'
      'your-webhook-url'
  ```

  </TabItem>
</Tabs>





### Get a webhook

&nbsp<span class="badge badge--success">GET</span> `/webhooks/{id}`

Retrieve a specific webhook resource by its id.



#### Sample code

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', }
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')

  const TOKEN = 'YOUR_TOKEN'
  const headers = {'Authorization': `Bearer ${TOKEN}`}
  const id = 'webhook uuid'
  const endpoint = `https://api.withleaf.io/services/alerts/api/alerts/webhooks/${id}`

  axios.get(endpoint, {headers})
      .then(response => console.log(response.data))
      .catch(console.error)
  ```

  </TabItem>

  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  id = 'webhook uuid'
  endpoint = f'https://api.withleaf.io/services/alerts/api/alerts/webhooks/{id}'

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/alerts/api/alerts/webhooks/WEBHOOK_UUID'
  ```

  </TabItem>
</Tabs>

#### Response
  ```json
  {
    "id": "UUID",
    "events": [
      "newSatelliteImage"
    ],
    "secret": "mRyT257XpFWX",
    "name": "Satellite images listener",
    "url": "https://agtech.com/leaf/satellite"
  }
  ```

### Get all webhooks

&nbsp<span class="badge badge--success">GET</span> `/webhooks`

Retrieve all Webhooks.

#### Sample code

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', }
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')

  const TOKEN = 'YOUR_TOKEN'
  const headers = {'Authorization': `Bearer ${TOKEN}`}
  const endpoint = 'https://api.withleaf.io/services/alerts/api/alerts/webhooks'

  axios.get(endpoint, {headers})
      .then(response => console.log(response.data))
      .catch(console.error)
  ```

  </TabItem>

  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  endpoint = 'https://api.withleaf.io/services/alerts/api/alerts/webhooks'

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/alerts/api/alerts/webhooks'
  ```

  </TabItem>
</Tabs>

#### Response
It returns a list of JSON objects.
  ```json
  [{
    "id": "UUID",
    "events": [
      "newSatelliteImage"
    ],
    "secret": "mRyT257XpFWX",
    "name": "Satellite images listener",
    "url": "https://agtech.com/leaf/satellite"
  }]
  ```


### Get failed calls for webhooks

&nbsp<span class="badge badge--success">GET</span> `/webhooks/failed-calls`

Retrieve all failed calls for webhooks.

#### Sample code

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', }
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')

  const TOKEN = 'YOUR_TOKEN'
  const headers = {'Authorization': `Bearer ${TOKEN}`}
  const endpoint = 'https://api.withleaf.io/services/alerts/api/alerts/webhooks/failed-calls'

  axios.get(endpoint, {headers})
      .then(response => console.log(response.data))
      .catch(console.error)
  ```

  </TabItem>

  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  endpoint = 'https://api.withleaf.io/services/alerts/api/alerts/webhooks/failed-calls'

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>

  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/alerts/api/alerts/webhooks/failed-calls'
  ```

  </TabItem>
</Tabs>

#### Response
It returns a list of JSON objects.
  ```json
  {
    "items": [
        {
          "apiOwner": "yourApiOwner",
          "createdAt": "2023-04-21T12:16:30Z",
          "url": "https://webhook.site/d76b5778-714c-46a2-b4bd-59b5455ec72d",
          "status": 502,
          "response": "<html>\r\n<head><title>502 Bad Gateway</title></head>\r\n<body bgcolor=\"white\">\r\n<center><h1>502 Bad Gateway</h1></center>\r\n<hr><center>nginx</center>\r\n</body>\r\n</html>\r\n",
          "requestBody": "{\"leafUserId\": \"5821d148-cdb1-4b85-b0ec-c0c749593fed\", \"fileId\": \"7effadbb-7b81-42ed-9c4b-ff4a45782453\", \"type\": \"automergedFileProcessingFinished\", \"timestamp\": \"2023-04-21T12:16:27.997586Z\"}"
        },
        {
          "apiOwner": "yourApiOwner",
          "createdAt": "2023-04-24T18:35:53Z",
          "url": "https://webhook.site/d56b5778-714c-46a2-b4bd-59b5455ec84d",
          "status": 502,
          "response": "<html>\r\n<head><title>502 Bad Gateway</title></head>\r\n<body bgcolor=\"white\">\r\n<center><h1>502 Bad Gateway</h1></center>\r\n<hr><center>nginx</center>\r\n</body>\r\n</html>\r\n",
          "requestBody": "{\"leafUserId\": \"cc5b4ced-ca3d-4a1a-ab08-b2ff8ef5e41e\", \"fileId\": \"8d4229b8-df8e-45af-be8d-2e7a71e8318e\", \"type\": \"automergedFileProcessingFinished\", \"timestamp\": \"2023-04-24T18:35:52.187785Z\"}"
        }
     ]
  }
  ```

### Delete a webhook

&nbsp<span class="badge badge--danger">DELETE</span> `/webhooks/{id}`

Delete a specific Webhook resource by its id. Returns 204 status code if the
delete succeeded.

:::info Warning
If you delete a Webhook resource, we no longer will send you the events the
webhook listens to.
:::

#### Sample code

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
  const headers = {'Authorization': `Bearer ${TOKEN}`}
  const id = 'webhook uuid'
  const endpoint = `https://api.withleaf.io/services/alerts/api/alerts/webhooks/${id}`

  axios.delete(endpoint, {headers})
      .then(response => console.log(response.data))
      .catch(console.error)
  ```

  </TabItem>

  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'
  headers = {'Authorization': f'Bearer {TOKEN}'}
  id = 'webhook uuid'
  endpoint = f'https://api.withleaf.io/services/alerts/api/alerts/webhooks/{id}'

  response = requests.delete(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>

  <TabItem value="sh">

  ```shell
  curl -X DELETE \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/alerts/api/alerts/webhooks/WEBHOOK_ID'
  ```

  </TabItem>
</Tabs>
