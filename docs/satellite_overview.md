---
title: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

Using our Satellite service, you will be able to compare the field health evolution over time.

<img alt="Field example" src={useBaseUrl('img/fieldovertime.png')} />

Our API returns processed, cropped, and color-corrected RGB and NDVI images. The Leaf's Satellite Service keeps an eye on newly uploaded sentinel tiles and checks them against the fields that we have stored in our database. When there is an intersection, we crop a set of images of the field from the tile, process, and made available on Satellite endpoints.

See the [Satellite API Reference][satellite_endpoints] for more information.

[satellite_endpoints]: satellite_endpoints.md