---
title: Alerts Overview
description: Alerts - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

With Alerts you can be notified when something happens or changes instead of needing to repeatedly query Leaf for changes. Leaf Alerts support events that happen within Leaf and events that happen within supported third-parties. 

Leaf Alerts are set up as webhooks. Webhooks are user-defined HTTP callbacks that are triggered by some event in a web application and make it easier to integrate different applications or third-party APIs, like Leaf.

When setting up an Alert, you provide us with a server URL (the address of the callback), an encoded secret for you to validate the authenticity of incoming webhook requests, and you specify what events you want to be notified about. When those events occur, we notify you via an HTTP request to the provided URL. Security is important and to understand how to verify if an incoming request comes from Leaf, see [Authentication and Security][alerts_auth].

Events you might want to be alerted about include:

- "A new satellite image is available."
- "The processing of an operations file is complete."
- "Credentials have expired."

The following image illustrates how events are sent to your webhook:

<img alt="Field example" src={useBaseUrl('img/alerts_flow.png')} />


Check the "Overview" page of a specific service, section "Events," to see what events from that service are available to webhooks.

See the [Alerts API Reference][alerts_endpoints] for information on how to register, get, and delete webhooks.


:::info
In case of alert delivery failures, Leaf Alerts will make new attempts at 1, 30, 60, and 240 minutes.
:::



[alerts_endpoints]: alerts_endpoints.md
[alerts_auth]: alerts_authentication.md
