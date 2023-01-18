---
title: Crop Monitoring Overview
description: Crop Monitoring - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: /docs/sentinel_overview
[2]: /docs/planet_overview

## About

Using Leaf's Crop Monitoring service you will be able to easily implement a satellite
imagery application and compare the field health evolution over time. 

:::success You can get historical images with Leaf.

By default, Leaf retrieves images from 30 days prior to the creation of your
field. But you can increase that to as far back in time as you want.
[Here's how](/docs/crop_monitoring_endpoints#post-fields)
:::

<img alt="Field example" src={useBaseUrl('img/fieldovertime.png')} />

This API accepts field boundary polygons and returns processed, clipped, and
color-corrected RGB, NDVI, and NDRE images every time there is a new image available.
We also provide information like percent cloud coverage of the field, the data
coverage percentage, and the tile source for each image as well.

Currently, our Crop Monitoring service runs without a relationship between our Field Services, and the User Management Services.
However, we are working to integrate it into the `leafUser` hierarchy, and the Fields Service.

See the [Satellite API Reference][crop_monitoring_endpoints] for more information.

[crop_monitoring_endpoints]: crop_monitoring_endpoints.md

## Providers

Leaf currently offers access to [Sentinel-2][1] and [PlanetScope][2] images through its API.
Here is a summary comparison between the providers:

|                     |  Sentinel-2 | PlanetScope |
|---------------------|:-----------:|:-----------:|
| Spatial resolution  | 10 m - 60 m |     3 m     |
| Temporal resolution |  3 - 5 days |    1 day    |
| Spectral resolution |  12 bands   | 4 - 5* bands|

_* the number of bands will depend on the asset type requested_

For all providers, in addition to the images of the isolated bands, the RGB, NDVI, and NDRE composition are available:

<img alt="sentinel x planet rgb" src={useBaseUrl('img/sentinel_planet.png')} />