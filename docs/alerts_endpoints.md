---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/satellite/api
```

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Create a webhook][7] | <span class="badge badge--warning">POST</span> `/fields`
[Delete a webhook][8] | <span class="badge badge--danger">DELETE</span> `/fields/{id}`

[7]: #create-a-webhook
[8]: #delete-a-webhook

---

## Webhook Endpoints

### Create a webhook

&nbsp<span class="badge badge--warning">POST</span> `/fields`

Creates a webhook

describe describe

:::success  Note

note?

:::

Sample code

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
const TOKEN = 'example'
```

</TabItem>
<TabItem value="py">

```py
TOKEN = 'example'
```

</TabItem>
<TabItem value="sh">

```shell
curl -X POST 
```

</TabItem>
</Tabs>

---

### Update a webhook

maybe tell it's problematic and can't guarantee delivery of events so it's 
better to delete and re-create?


