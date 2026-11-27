---
title: Leaf File Upload Link
description: Leaf File Upload Link
sidebar_label: Leaf File Upload Link
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]:  /docs/authentication
[2]:  /docs/user_management_overview
[3]:  https://docs.withleaf.io/docs/Link_endpoints#api-key
[4]:  #reference

[fileupload-apiKey]: #apikey
[fileupload-companyLogoUrl]: #companylogourl
[fileupload-companyName]: #companyname
[fileupload-leafUser]: #leafuser
[fileupload-locale]: #locale
[fileupload-filestimerange]: #filestimerange
[fileupload-isdarkmode]: #isdarkmode
[fileupload-title]: #title

[upload-leafbatchids]: #leafbatchids

## Overview
Leaf's File Upload Link is a widget that allows your customers to upload different machine file formats. These files will then get converted into a consistent output using the Leaf API.

<p align="center">
    <img alt="File upload widget" width="50%" src={useBaseUrl('img/leaf-file-upload.png')} />
</p>

### How it works
The user can add files using the file picker from the `Browse` button or drop files in the `Drag & drop` zone. Your files must be in a `zip` file.
 
During the upload, the users can see the progress of the upload and they are able to cancel the upload process for the pending files. 

:::info Requirements
In addition to being [authenticated][1], you must have at least one Leaf user created. Learn more [here][2].
:::


## Get started

### 1. Sign in with a Leaf account
You will need a Leaf account. If you don't have one yet, you can create it [here][1].

### 2. Get an access token
To use the widget you will need a Leaf token. Use our [authentication guide][2] to know how it works.


## Tutorial

### Angular

:::tip
[Here](https://codesandbox.io/p/sandbox/leaf-link-angular-file-upload-dzr965) you can run a live use case demo! 
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
import { FileUploadModule } from '@withleaf/leaf-link-angular';
```

3. Add the component to the HTML. Make sure you already created the Leaf user [API key][3] (`apiKey`); you need to specify both the Leaf User API Key and the Leaf User ID (`leafUser`) in the required properties in the HTML component.
Check all the properties available on the reference [here][4].

```js
<div class="content" role="main">
  <file-upload
    apiKey="Your_API_Key"
    leafUser="Your_Leaf_User"
    title="Your_Title"
    [filesTimeRange]="30"
    companyName="Your_Company_Name"
    companyLogo="assets/leafLogo.svg"
  ></file-upload>
</div>
```

### React

:::tip
[Here](https://codesandbox.io/s/leaf-link-react-file-upload-vvr2tj) you can run a live use case demo!
It will only be necessary to replace your information in the App.tsx file.
:::

To add this Leaf widget in a React application, you can use the `@withleaf/leaf-link-react` library, which is a JavaScript library that provides all Leaf UI Widgets.
Here are the general steps to get started:

1. Install the @withleaf.io/leaf-link-react package using `npm`:

```shell
npm i @withleaf/leaf-link-react
```

2. Import the component in your `*.tsx` file:

```js
import { FileUpload } from '@withleaf/leaf-link-react'
```

3. Add the component to the `*.tsx` file. Make sure you already created the Leaf user [API key][3] (`apiKey`); you need to specify both the Leaf User API Key and the Leaf User ID (`leafUser`) in the required properties in the tsx component. 
Check all the properties available on the reference [here][4].

```js
function App() {
  const IS_DARK_MODE: boolean = true;
  const LEAF_USER: string = "Your_Leaf_User";
  const API_KEY: string = "Your_API_Key";
  const COMPANY_NAME: string = "Your_Company";
  const COMPANY_LOGO: string = "Your_Company_Logo";
  const FILES_TIME_RANGE: number = 30;

  return (
    <FileUpload
      isDarkMode={IS_DARK_MODE}
      companyName={COMPANY_NAME}
      companyLogo={COMPANY_LOGO}
      filesTimeRange={FILES_TIME_RANGE}
      leafUser={LEAF_USER}
      apiKey={API_KEY}
    />
  );
}
```

## Reference
It is valid only for the React version.

### Property Overview

| Name                                          | Type    | Summary                                      |
|-----------------------------------------------|---------|----------------------------------------------|
| [apiKey][fileupload-apiKey]                   | String  | The authentication API Key                   |
| [companyLogoUrl][fileupload-companyLogoUrl]   | String  | Customization: a link to the company logo    |
| [companyName][fileupload-companyName]         | String  | Customization: the name of the company       |
| [filesTimeRange][fileupload-filestimerange]   | Number  | Time to get the historical of uploaded files |
| [isDarkMode][fileupload-isdarkmode]           | Boolean | Enables/disables the dark mode               |
| [leafUser][fileupload-leafUser]               | String  | The Leaf User ID                             |
| [locale][fileupload-locale]                   | String  | Forces the widget language                   |
| [title][fileupload-title]                     | String  | Customization: a link to the company logo    |



#### Property Details
#### apiKey
The `apiKey` is the authentication key that will allow the use of the widget.
It can be created and managed [here][3].

#### companyLogoUrl
The URL to the company logo. It will be displayed in the landing screen. It can be a `PNG`, `JPEG` or `SVG`.

#### companyName
The company name. It will be displayed in the landing screen and in each reference about the customer.

#### filesTimeRange
It sets the interval in days to display files already processed in the past. For example, if set to `30`, it will display the list of files sent and processed in the last 30 days.

#### isDarkMode
If set to `true`, it will enable the widget dark mode.

<p align="center">
    <img alt="Dark mode" width="30%" src={useBaseUrl('img/leaf-file-upload-dark-mode.png')} />
</p>


#### leafUser
The Leaf User ID. Check [this page][2] for more info about the Leaf User.


#### locale
By default, the widget sets the language based on the user's browser configuration, but to force a language, use this property with one of the possible values: `en_US`, `pt_BR`, `es_ES`, or `fr_FR`.


#### title
The text to display on the top of the widget.

### Hooks Overview

Leaf Link also have hooks that can improve the developer experience when using the widgets.

| Name                    | Type                                               | Description                                                                                                            |
|-------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [leafBatchIds][upload-leafbatchids]      | `Array<{ batchId: string }>` | Provide the array with the batchId of the uploaded files   |                                      |


#### Hooks Details

##### leafBatchIds
Provides the array with the `batchId` for each uploaded file. A new ID is added after each successful upload.

#### How to use it

##### Angular
Use the `getLeafBatchData` property to reference a function in your component.
```html
<div>
  <file-upload
      [apiKey]="apiKey"
      [leafUser]="leafUser"
      [title]="Your_Title"
      [filesTimeRange]="30"
      [companyName]="companyName"
      [companyLogo]="companyLogo"
      (getLeafBatchData)="yourFunctionNameHere($event)">
  </file-upload>
</div>
```

From the component, you can get the [leafBatchIds][upload-leafbatchids] array in the referenced function.

```js
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    apiKey: string = 'apiKey';
    leafUser: string = 'leafUserId';
    companyName: string = 'companyName';
    companyLogo: string = 'companyLogo';

    yourFunctionNameHere(leafBatchIds: any) {
      console.log(leafBatchIds);
    }
  }
```


##### React

In the `index.tsx` will be necessary import the component `Leaf`.

```js
import { Leaf } from '@withleaf/leaf-link-react';
```

And this component should be organized like this:

```js
<React.StrictMode>
    <Leaf>
      <App />
    </Leaf>
  </React.StrictMode>
```

Additionally, you will need to import the useLeaf function as well:

```js
import { FileUpload, useLeaf } from "@withleaf/leaf-link-react";
```

So will be necessary adjust the function in the `App.tsx` file:

```js
function App() {
  const IS_DARK_MODE: boolean = true;
  const COMPANY_NAME: string = "Your_Company";
  const LEAF_USER: string = "Your_Leaf_User_Id";
  const API_KEY: string = "Your_API_Key";
  const COMPANY_LOGO: string = YourCompanyLogo;
  const FILES_TIME_RANGE: number = 30;
  const { leafBatchIds } = useLeaf();

  useMemo(() => {
    console.log(leafBatchIds);
  }, [leafBatchIds]);
```

In this example we use the `useMemo` but you can use another hooks.