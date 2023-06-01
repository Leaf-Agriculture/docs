---
title: Leaf User Overview
description: Leaf User - Overview
sidebar_label: Overview
---

<!-- the following links are referenced throughout this document -->
[1]: https://docs.withleaf.io/docs/converters_overview

import useBaseUrl from '@docusaurus/useBaseUrl';

## About
For Leaf to be able to access, process and return standardized files from providers, you first need to create a ‘Leaf User’, which you’ll later connect to your customers’ preferred data provider(s). 

## What is a Leaf user?
- A Leaf User provides a way to keep your customers' data organized under your API owner. You'll attach 3rd party credentials to these entities.
- A Leaf User is equivalent to a customer/grower account. 
- The same Leaf User/grower can integrate with multiple providers via a user-authentication process for each provider. 

<img alt="Leaf user" src={useBaseUrl('img/leafuser.png')} />

## Where to next?
### If integrating a provider via Leaf’s API
Once you’ve created a Leaf User (after setting up configurations and alerts), proceed to provider authentication. There we will show you how to integrate a provider and attach the provider credentials to your Leaf User so you can start receiving standardized data via Leaf. 

### If implementing manual file upload
If you’re looking to implement manual file upload functionality for thumb drive data, click [here][1] next.

Need more guidance? Contact us at help@withleaf.io.