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

See the [Alerts API Reference][alerts_endpoints] for the specific endpoints and 
code samples on how to register, get and delete webhooks.


<img alt="Field example" src={useBaseUrl('img/alerts_flow.png')} />

(I think a great image would be also examplifying an use case. For example, 
show numbered steps of the user (simplified below):)

1. create webhook
1. farmer harvests and the operation comes to Leaf
1. Leaf process, standardizes the data
1. Leaf creates the alert and send to your webhook
1. Your application knows automatically and can notify user.

...


[alerts_endpoints]: alerts_endpoints.md
