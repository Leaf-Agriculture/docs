---
title: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

Alerts are how your application gets to know about an event on Leaf as soon as
it happens. This event can be a new satellite image for one of your clients' 
fields, a new processed operation file, and many others.

To be alerted of these events, you are going to use Webhooks. Webhooks are 
user-defined HTTP callbacks. You send us a server URL (the address of
the callback) specifying what for what events you want to receive updates about 
and when they do happen we send a (HTTP) message to the URL you registered with us.

The following image shows how events are sent to your webhook. On the left, its
the representation of a webhook registration. On the right, a satellite image
is processed at any time, then the webhooks system sends a POST request to the
registered webhook.

<img alt="Field example" src={useBaseUrl('img/alerts_flow.png')} />

Check the "Overview" page of a specific service, section "Events", to know what
events from that service are available to webhooks.

See the [Alerts API Reference][alerts_endpoints] for information on how to
register, get and delete webhooks.



[alerts_endpoints]: alerts_endpoints.md
