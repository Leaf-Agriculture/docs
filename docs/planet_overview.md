---
title: Planet Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

### Planet Images



Additionally, to Sentinel 2 images, Leaf provides an integration with Planet, fetching PlanetScope images from a back-fill and forward-fill specified by the user.
We generate 4-5* multi spectral bands and a total of 10-11* images between RBG and NDVI GeoTiffs. PlanetScope provides numerus categories of products from different
satellite sensors called `itemTypes` and for each one of the we have many `assetType`. For now, we only support `PSOrthoTile` and the assets `analytic_5b` and `analytic_sr` 
for more information on those assets check the [documentation](https://developers.planet.com/docs/data/psorthotile/#available-asset-types).

Also, Leaf handles all the subscription process internally in order to bring foward-filled images as area available from Planet. 

The following table shows all the images with its resolutions and types:
(TIFs are EPSG:4326, PNGs are EPSG:3857).

| Name           | Resolution (m) | Type               | Projection
|:---------------|:---------------|:-------------------|:------------|
| NDVI.png       | NULL           | png ndvi           | EPSG:3857   |
| RGB.png        | NULL           | png RGB            | EPSG:3857   |
| NDVI.tif       | 3              | tif raw ndvi values| EPSG:4326   |
| NDVI_color.tif | 3              | tif colored ndvi   | EPSG:4326   |
| RGB.tif        | 3              | tif RGB            | EPSG:4326   |
| B01.tif        | 3              | single band        | EPSG:4326   |
| B02.tif        | 3              | single band        | EPSG:4326   |
| B03.tif        | 3              | single band        | EPSG:4326   |
| B04.tif        | 3              | single band        | EPSG:4326   |
| B05.tif *      | 3              | single band        | EPSG:4326   |

* A fifth band will be available by using the `assetType`: `analitic_5b` (red egde band) were the default value is 
`analitic_sr` which are images with atmospheric reflectance correction.

Currently, our Satellite service runs without a relationship between our Field Services, and the User Management Services.
However, we are working to integrate it into the `leafUser` hierarchy, and the Fields Service.

See the [Satellite API Reference][satellite_endpoints] for more information.