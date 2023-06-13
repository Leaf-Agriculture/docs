---
title: Leaf Link > File upload widget
description: Leaf Link > File upload widget
sidebar_label: File upload widget
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]:  /docs/authentication
[2]:  /docs/user_management_overview


## Overview
This widget allows the user to upload different machine files formats for conversion using the Leaf API.

<p align="center">
    <img alt="File upload widget" width="50%" src={useBaseUrl('img/leaf-file-upload.png')} />
</p>

:::caution Beta
This is a beta feature.
:::

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
import { LeafFileUploadModule } from '@withleaf.io/angular-ui-kit';
```

3. Add the component to the HTML. You need your Leaf token (`leafToken`) and a Leaf user ID (`leafUser`) to set the required properties in the HTML component. Just add it to the container div.

```js
<div class="container">
  <leaf-file-upload leafToken="{yourLeafToken}" leafUser="{yourLeafUserId}">       
  </leaf-file-upload>
</div>
```

:::tip
[Here](https://stackblitz.com/edit/leaf-widgets-angular-upload?file=README.md) you can run a live use case demo!
:::
