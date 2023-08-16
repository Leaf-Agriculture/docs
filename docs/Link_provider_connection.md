---
title: Leaf Provider Connection / Authentication Link
description: Leaf Provider Connection / Authentication Link
sidebar_label: Leaf Provider Connection / Authentication Link
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]:  https://withleaf.io/account/quickstart
[2]:  /docs/authentication
[3]: https://developer.deere.com/#/applications
[4]: /docs/user_management_overview
[5]: https://www.developer.cnhindustrial.com/dashboard/
[6]: https://docs.withleaf.io/docs/Link_endpoints#api-key
[7]:  #reference


[jd]: https://withleaf.io/en/whats-new/john-deere-authentication-with-leaf/
[cfv]: https://withleaf.io/en/whats-new/climate-fieldview-authentication-with-leaf/
[cnhi]: https://withleaf.io/en/whats-new/cnhi-authentication-with-leaf/
[agleader]: https://withleaf.io/en/whats-new/agleader-authentication-with-leaf/
[trimble]: https://withleaf.io/en/whats-new/trimble-authentication-with-leaf/

[provider-apiKey]: #apikey
[provider-companyLogoUrl]: #companylogourl
[provider-companyName]: #companyname
[provider-leafUser]: #leafuser
[provider-darkmode]: #isdarkmode

[provider-providersconnected]: #providersconnected
[provider-providerwidgetstatus]: #providerwidgetstatus



## Overview
Leaf's Provider Connection / Authentication Link is a widget that you can install with minimal setup and a few lines of code. This widget enables your customers to connect their existing provider accounts, which associates it with their Leaf User.

<p align="center">
    <img alt="File upload widget" width="75%" src={useBaseUrl('img/leaf-provider-connection.png')} />
</p>

:::caution Beta
This is a beta feature.
:::



## Get started

### 1. Sign in with a Leaf account
You will need a Leaf account. If you don't have one yet, you can create it [here][1].

### 2. Get to know the Leaf user entity
All control of connected providers is done at the Leaf user level (usually it represents the user of your application), so it's important to know more about it [here][4].

### 3. Create the user application tokens
Since the connection is at Leaf user level, the widget uses a different authentication method.
We will required to create an API key for each Leaf user. This will ensure that the Leaf user only accesses its own resources.

The endpoints to manage those application tokens are [here][6].

## Set up
To use the widget you will need to enable the providers. Don't worry, you only need to set it up once.


### John Deere
To enable John Deere as a provider in the widget you need your application already registed with John Deere. You can find more info on how to create a developer account [here][jd].

#### Redirect URI
The first step is to add our widget URL in the "Redirect URI" section:

```markup
https://widget.withleaf.io
```

In the [My applications][3] page, select your application and edit it to add the URL here
<p align="center">
    <img alt="File upload widget" width="50%" src={useBaseUrl('img/leaf-provider-connection-jd-redirect-uri.png')} />
</p>

#### Application info
To allow the users to authenticate with John Deere, you will need to send your application info to this endpoint
&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/app-keys/JohnDeere/{appName}/{clientEnvironment}`

For John Deere, it is necessary to inform the:
- `clientKey` (Application Id)
- `clientSecret` (Secret)

You can set the `appName` and the `clientEnvironment`as the environment your application is enabled on John Deere: `STAGE` or `PRODUCTION`.

Here is a request example:
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


### Climate FieldView
To enable Climate FieldView as a provider in the widget you need your application credentials from Climate. You can find more info on how to create a developer account [here][cfv].

#### Application info
To allow the users to authenticate with Climate FieldView, you will need to send your application info to this endpoint
&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/app-keys/ClimateFieldView/{appName}`

For Climate FieldView, it is necessary to inform the:
- `apiKey`
- `clientId`
- `clientSecret`

You can set the `appName`.

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

  const endpoint ='https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/LeafWidget'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    apiKey: "string",
    clientId: "string",
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/LeafWidget'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    apiKey: "string",
    clientId: "string",
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
      -d '{ "apiKey": "string", "clientId": "string", "clientSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/ClimateFieldView/LeafWidget'
  ```

  </TabItem>
</Tabs>


### CNHi
To enable CNHi as a provider in the widget you need your application credentials from CNHi. You can find more info on how to create a developer account [here][cnhi].

#### OAuth Callback URL
The first step is to add our widget URL in the "App OAuth Callback URL(s)" section:

```markup
https://widget.withleaf.io
```

In the [Developer Dashboard][5] page, select your application and edit it to add the URL here
<p align="center">
    <img alt="File upload widget" width="50%" src={useBaseUrl('img/leaf-provider-connection-cnhi-callback-url.png')} />
</p>

#### Application info
To allow the users to authenticate with CNHi, you will need to send your application info to this endpoint
&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/app-keys/CNHI/{appName}/{clientEnvironment}`

For CNHi, it is necessary to inform the:
- `clientId` (Client Id)
- `clientSecret` (Client Secret)
- `subscriptionKey` (Primary SubscriptionKey)

You can set the `appName` and the `clientEnvironment` as the environment your application is enabled on CNHi: `STAGE` or `PRODUCTION`.

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

  const endpoint ='https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/LeafWidget/PRODUCTION'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    clientId: "string",
    clientSecret: "string",
    subscriptionKey: "string"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/LeafWidget/PRODUCTION'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    clientId: "string",
    clientSecret: "string",
    subscriptionKey: "string"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "clientId": "string", "clientSecret": "string", "subscriptionKey": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/CNHI/LeafWidget/PRODUCTION'
  ```

  </TabItem>
</Tabs>

### AgLeader
To enable AgLeader as a provider in the widget you need your application credentials from AgLeader. You can find more info on how to create a developer account [here][agleader].

#### Application info
To allow the users to authenticate with AgLeader, you will need to send your application info to this endpoint
&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/app-keys/AgLeader/{appName}`

For AgLeader, it is necessary to inform the:
- `privateKey`
- `publicKey`

You can set the `appName`.

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

  const endpoint ='https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/LeafWidget'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    privateKey: "string",
    publicKey: "string"
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/LeafWidget'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    privateKey: "string",
    publicKey: "string"
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "privateKey": "string", "publicKey": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/AgLeader/LeafWidget'
  ```

  </TabItem>
</Tabs>


### Trimble
To enable Trimble as a provider in the widget you need your application credentials from Trimble. You can find more info on how to create a developer account [here][trimble].


#### Authentication Callback URL
The first step is make sure our widget URL is registered in the "Authentication Callback URLs" section. It may be necessary to contact Trimble to request the change.

```markup
https://widget.withleaf.io
```

#### Application info
To allow the users to authenticate with Trimble, you will need to send your application info to this endpoint
&nbsp<span class="badge badge--warning">POST</span> `/usermanagement/api/app-keys/Trimble/{appName}`

For Trimble, it is necessary to inform the:
- `applicationName`
- `clientId`
- `clientSecret`

You can set the `appName`.

Here is a request example:
<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', }
  ]}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/LeafWidget'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    applicationName: "string",
    clientId: "string",
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

  endpoint = 'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/LeafWidget'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    applicationName: "string",
    clientId: "string",
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
      -d '{ "applicationName": "string", "clientId": "string", "clientSecret": "string" }'
      'https://api.withleaf.io/services/usermanagement/api/app-keys/Trimble/LeafWidget'
  ```

  </TabItem>
</Tabs>




## Tutorial

### Angular

:::tip
[Here](https://codesandbox.io/p/sandbox/providers-connection-angular-5826s8?file=/src/app/app.component.html:1,1) you can run a live use case demo!
It will only be necessary to replace your information in the .html component.
:::

To add this Leaf widget in an Angular application, you can use the `@withleaf/leaf-link-angular` library, which is a JavaScript library that provides all Leaf UI Widgets.
Here are the general steps to get started:

1. Install the @withleaf/leaf-link-angular package using `npm`:

```shell
npm i @withleaf/leaf-link-angular
```

2. Import the library in your component or module file:

```js
import { ProvidersModule } from '@withleaf/leaf-link-angular';
```

3. Add the component to the HTML. Make sure you already created the Leaf user [API key][6] (`apiKey`), you need to inform it and the Leaf user ID (`leafUser`) in the required properties in the HTML component. Just add it to the container div.
Check all the properties available on the reference [here][7].
```js
<div class="content" role="main">
  <providers 
    apiKey="Your_API_Key"
    leafUser="Your_Leaf_User"
    title="Your_Title"
    companyName="Your_Company_Name"
    companyLogo="Your_Company_Logo"
  ></providers>
</div>
```

### React

:::tip
[Here](https://codesandbox.io/s/providers-connection-react-7mrp3c?file=/src/App.tsx) you can run a live use case demo!
It will only be necessary to replace your information in the App.tsx file.
:::

To add this Leaf widget in a React application, you can use the `@withleaf/leaf-link-react` library, which is a JavaScript library that provides all Leaf UI Widgets.
Here are the general steps to get started:

1. Install the @withleaf/leaf-link-react package using `npm`:

```shell
npm i @withleaf/leaf-link-react
```

2. Import the component in your `*.tsx` file:

```js
import { Providers } from '@withleaf/leaf-link-react';
```

3. Add the component to the HTML. Make sure you already created the Leaf user [API key][6] (`apiKey`), you need to inform it and the Leaf user ID (`leafUser`) in the required properties in the HTML component.
Check all the properties available on the reference [here][7].
```js
function App() {
  return (
        <Providers
          isDarkMode={true/false}
          companyName={companyName}
          companyLogo={companyLogoUrl}
          leafUser={leafUserId}
          apiKey={apiKey}
        />
   );
}
```


## Reference
### Property Overview

| Name                                      | Type   | Summary                                   |
|-------------------------------------------|--------|-------------------------------------------|
| [apiKey][provider-apiKey]                 | String | The authentication API Key                |
| [companyLogoUrl][provider-companyLogoUrl] | String | Customization: a link to the company logo |
| [companyName][provider-companyName]       | String | Customization: the name of the company    |
| [isDarkMode*][provider-darkmode]          | Boolean| Enable/disable the dark mode              |
| [leafUser][provider-leafUser]             | String | The Leaf User ID                          |

\* Only available in the React version


#### Property Details

#### apiKey
The `apiKey` is the authentication key that will allow the use of the widget.
It can be created and managed [here][6].

#### companyLogoUrl
The URL to the company logo. It will be displayed in the landing screen. It can be a `PNG`, `JPEG` or `SVG`.

#### companyName
The company name. It will be displayed in the landing screen and in each reference about the customer.

#### leafUser
The Leaf User ID. Check [this page][4] for more info about the Leaf User.

#### isDarkMode
Toggles dark mode on and off. The default value is `false`. It is only available for React.


### Hooks Overview

Leaf Link also have hooks that can improve the developer experience when using the widgets.

| Name                    | Type                                               | Description                                                                                                            |
|-------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [providersConnected][provider-providersconnected]      | `Array<{ provider: string; createdTime: string }>` | Provide the array of the provider connected and also the createdTime - available after finish the connection process   |
| [providerWidgetStatus][provider-providerwidgetstatus]    | `{ code: number; message: string }`                | Provide the status code and the message from the current widget Status                                                 |


#### Hooks Details

##### providersConnected
Provide the array of the provider connected and also the createdTime. It will be available after finish the connection process.


##### providerWidgetStatus
Provide the status code and the message from the current widget Status:

###### Status Codes

| Code | Message |
|------|----------|
| -1   | Error    |
|  0   | Started  |
|  1   | Done     |

#### How to use it

##### React

```js
import { Leaf } from '@withleaf/leaf-link-react';
```

`{ Leaf }` import is the context that handle with the providers data.

Considering you have a custom component that need to handle or just receive the data updates from Provider Widget:

```js

import { useLeaf } from '@withleaf/leaf-link-react';

export const MyComponent = () => {
    // Import the states from the hook
    const { providerWidgetStatus, providersConnected } = useLeaf();

    return (
        <>
            <div>
                <p data-testid='hook-title' style={{fontSize: '22px',}}>
                    {' '}
                    Hook State Example
                </p>
                <p data-testid='status'>
                    <span style={{fontWeight: 'bold', }} >
                        Status Code:
                    </span>{' '}
                    {providerWidgetStatus.code} |{' '}
                    <span style={{ fontWeight: 'bold', }} >
                        Status Message:
                    </span>{' '}
                    {providerWidgetStatus.message}
                </p>
            </div>
            <hr />
            <div>
                {providersConnected.length === 0 ? (
                    <p>Providers List is empty</p>
                ) : (
                    <>
                        {providersConnected.map((provider, index) => (
                            <>
                                <p data-testid={`${provider.provider}-testid`}>
                                    {' '}
                                    Provider: <span>{provider.provider}</span>
                                </p>
                                <p>
                                    {' '}
                                    Created Time: <span>{provider.createdTime}</span>
                                </p>
                            </>
                        ))}
                    </>
                )}
            </div>
        </>
    );
};
```

Then, wrap your component in the hook as a children

```js
import { Leaf, Providers } from '@withleaf/leaf-link-react'

const Example = () => {
    return (
        <Leaf>
            <MyComponent />
            <Providers
                isDarkMode={true}
                companyName={'My Company Name'}
                companyLogo={'url'}
                leafUser={'myLeafUser'}
                apiKey={'myApiKey'}
                locale={'locale'}
            />
        </Leaf>
    );
};
```

From your top-level component can pass the current data to all components below, no matter how deep.

This variables will be updated every time the Provider update the steps i.e move from one step to other. 

###### Tips

The way that the developer get the updated value from the hook can be different depending the of the application, personal preferences or the way it is architected. We suggest the following with `useMemo` but it can be also implemented with `useEffect`.
`useMemo` runs the function and caches its result, which will only be recomputed if any value in the dependency array changes. It helps optimize performance by avoiding unnecessary recalculations.

**Example**

```js
useMemo(() => {
  //Something you want to update, as a state from the component.
}, [providerConnected, providerWidgetStatus])
```