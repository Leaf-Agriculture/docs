---
title: Magic Link Overview
description: Leaf Link > Magic Link
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]:  /docs/Link_provider_connection#set-up

The Magic Link is the easiest way to connect your customer data with Leaf API. It offers a low-code solution to enable them to connect to data providers or upload files. The link generated in this solution controls all the steps for each functionality and its appearance can be customized too.

## Authenticate with Magic Link

<p align="center">
    <img alt="authentication" src={useBaseUrl('img/flow_authentication.png')} />
</p>

### Multiple providers

The Magic Link Provider is a feature that allows the user to authenticate with several providers using a single link. It is necessary to have previously created the respective [application info][1] for these providers.

### Single provider

The Magic Link Authentication is a feature to authenticate with only one provider at a time. It is necessary to have previously created the [application info][1] for this provider.

## Upload file with Magic Link

<p align="center">
    <img alt="file-upload" src={useBaseUrl('img/flow_file_upload.png')} />
</p>

### File upload

The Magic Link File upload is a feature that allows the user to upload machine files to the Leaf API.

