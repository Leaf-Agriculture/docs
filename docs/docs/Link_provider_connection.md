---
title: Leaf Link > Provider connection widget
description: Leaf Link > Provider connection widget
sidebar_label: Provider connection widget
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]:  https://withleaf.io/account/quickstart
[2]:  /docs/authentication
[3]: https://withleaf.io/en/whats-new/john-deere-authentication-with-leaf/
[4]: https://developer.deere.com/#/applications
[5]: /docs/user_management_overview


## Overview
The Provider Connection widget allows the user to associate their Leaf user with existing provider accounts. It just needs a minimal setup and few lines of code.

<p align="center">
    <img alt="File upload widget" width="50%" src={useBaseUrl('img/leaf-provider-connection.png')} />
</p>

:::caution Beta
This is a beta feature.
:::



## Get started

### 1. Sign in with a Leaf account
You will need a Leaf account. If you don't have one yet, you can create it [here][1].

### 2. Get an access token
To use the widget you will need a Leaf token. Use our [authentication guide][2] to know how it works.

### 3. Get to know the Leaf user entity
All control of connected providers is done at the Leaf user level (usually it represents the user of your application), so it's important to know more about it [here][5].

## Set up
To use the widget you will need to enable the providers. Don't worry, you only need to set it up once.

### John Deere
To enable John Deere as a provider in the widget you need to have your application already registed with John Deere. You can find more info on how to create a developer account [here][3].

#### Redirect URI
The first step is to add our widget URL in the "Redirect URI" section:

```markup
https://widget.withleaf.io
```

In the [My applications][4] page, select your application and edit it to add the URL here
<p align="center">
    <img alt="File upload widget" width="50%" src={useBaseUrl('img/leaf-provider-connection-jd-redirect-uri.png')} />
</p>

#### Application info
We will need your `Application Id` and `Secret` so you can inform them on this endpoint.

&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}`

You can set the `appName` and the `clientEnvironment`as the environment your application is enabled on John Deere `STAGE` or `PRODUCTION`.

Here is a request example:
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

  const endpoint ='https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/LeafWidget/PRODUCTION'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    clientKey: "string",
    clientSecret: "string"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/LeafWidget/PRODUCTION'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    clientKey: "string",
    clientSecret: "string"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "clientKey": "string", "clientSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/JohnDeere/LeafWidget/PRODUCTION'
  ```

  </TabItem>
</Tabs>




## Tutorial

This widget is only available for Angular.

### Angular

To add this Leaf widget in an Angular application, you can use the `@withleaf.io/angular-ui-kit` library, which is a JavaScript library that provides all Leaf UI Widgets.
Here are the general steps to get started:

1. Install the @withleaf.io/angular-ui-kit package using `npm`:

```shell
npm i @withleaf.io/angular-ui-kit
```

2. Import the library in your component or module file:

```js
import { ProvidersModule } from '@withleaf.io/angular-ui-kit';
```

3. Add the component to the HTML. You need your Leaf token (`leafToken`) and a Leaf user ID (`leafUser`) to set the required properties in the HTML component. Just add it to the container div.
You can also customize it adding your company name (`companyName`) and company logo (`companyLogoUrl`).
```js
<div class="container">
  <leaf-providers leafToken="{yourLeafToken}" leafUser="{yourLeafUserId}"       
      companyName="{name}" companyLogoUrl="{image URL}">
  </leaf-providers>
</div>
```
