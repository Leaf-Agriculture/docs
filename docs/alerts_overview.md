---
title: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

Webhooks are user-defined HTTP callbacks. You send us a server URL (the address of
the callback) specifying what things you want to know about so when they do happen,
we tell you on that URL, by means of a HTTP request.

Those things are called "events", for example: "there's a new satellite image",
"the processing of an operations file finished", or "these credentials expired".

Check the "Overview" page of a specific service, section "Events", to know what
events from that service are available to webhooks.

See the [Alerts API Reference][alerts_endpoints] for information on how to
register, get and delete webhooks.


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
