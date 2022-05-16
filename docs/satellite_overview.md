---
title: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: sentinel_overview
[2]: planet_overview

## About

Using Leaf's Satellite service you will be able to easily implement a satellite
imagery application and compare the field health evolution over time. 

:::success You can get historical images with Leaf.

By default, Leaf retrieves images from 30 days prior to the creation of your
field. But you can increase that to as far back in time as you want.
[Here's how](/docs/docs/satellite_endpoints#post-fields)
:::

<img alt="Field example" src={useBaseUrl('img/fieldovertime.png')} />

This API accepts field boundary polygons and returns processed, cropped, and
color-corrected RGB and NDVI images every time there is a new image available.
We also provide information like percent cloud coverage of the field, the data
coverage percentage, and the tile source for each image as well.

Currently, our Satellite service runs without a relationship between our Field Services, and the User Management Services.
However, we are working to integrate it into the `leafUser` hierarchy, and the Fields Service.

See the [Satellite API Reference][satellite_endpoints] for more information.

[satellite_endpoints]: satellite_endpoints.md

## Providers

Leaf currently offers access to [Sentinel-2][1] and [PlanetScope][2] images through its API.
Here is a summary comparison between the providers:

|                     |  Sentinel-2 | PlanetScope |
|---------------------|:-----------:|:-----------:|
| Spatial resolution  | 10 m - 60 m |     3 m     |
| Temporal resolution |  3 - 5 days |    1 day    |
| Spectral resolution |  12 bands   | 4 - 5* bands|

_* the number of bands will depend on the asset type requested_

For all providers, in addition to the images of the isolated bands, the RGB and NDVI composition are available:

<img alt="sentinel x planet rgb" src={useBaseUrl('img/sentinel_planet.png')} />