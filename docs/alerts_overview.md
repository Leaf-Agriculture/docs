---
title: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

our service works like this... retries... create and delete, how user is 
notified, how long they have to wait, what type of events... 

image of the flow? (change image "alerts_flow" in /img)

<img alt="Field example" src={useBaseUrl('img/alerts_flow.png')} />

(I think a great image would be also examplifying an use case. For example, 
show numbered steps of the user (simplified below):)

1. create webhook
1. farmer harvests and the operation comes to Leaf
1. Leaf process, standardizes the data
1. Leaf creates the alert and send to your webhook
1. Your application knows automatically and can notify user.

...

See the [Alerts API Reference][alerts_endpoints] for more information.

[alerts_endpoints]: alerts_endpoints.md
