---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- The following links are referenced throughout this document -->
[1]: #create-a-webhook
[2]: #get-a-webhook
[3]: #get-all-webhooks
[4]: #delete-a-webhook

[5]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[6]: #alerts_authentication.md


All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/alerts/api/alerts
```

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Create a webhook][1] | <span class="badge badge--warning">POST</span> `/webhooks`
[Get a webhook][2] | <span class="badge badge--success">GET</span> `/webhooks/{id}`
[Get all webhooks][3] | <span class="badge badge--success">GET</span> `/webhooks`
[Delete a webhook][4] | <span class="badge badge--danger">DELETE</span> `/webhooks/{id}`

Note that currently it's not possible to update a Webhook with a single
request. If you want to update an existing Webhook resource, you have to delete
it first and then recreate it. In doing so, be aware that if the update changes
the Webhook URL, it's recommented that you keep the previous URL up and running
until you get the response from the recreation request (POST).

For easy testing of these endpoints, we recommend using our Postman [collection][5].

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

#### Sample code

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
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

  response = requests.post(endpoint, headers=headers)
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

  <TabItem value="json">

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

  </TabItem>
</Tabs>

---

### Get a webhook

&nbsp<span class="badge badge--success">GET</span> `/webhooks/{id}`

Retrieve a specific webhook resource by its id.

#### Sample code

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
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

  <TabItem value="json">

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

  </TabItem>
</Tabs>

### Get all webhooks

&nbsp<span class="badge badge--success">GET</span> `/webhooks`

Retrieve all Webhooks.

#### Sample code

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'json', },
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

  <TabItem value="json">

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

  </TabItem>
</Tabs>


### Delete webhook

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
  endpoint = 'https://api.withleaf.io/services/alerts/api/alerts/webhooks/${id}'

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

