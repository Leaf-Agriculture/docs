---
title: Planet Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Leaf provides an integration with Planet, fetching PlanetScope images from a back-fill and forward-fill specified by the user.
We generate 4-5\* multi spectral bands and a total of 16-17\* images between RBG, NDVI, and NDRE GeoTiffs. PlanetScope provides numerus categories of products from different
satellite sensors called `itemTypes` and for each one, we have different `assetType`. For now, we only support `PSOrthoTile` and the assets `analytic_5b`, `analytic_sr`, and `udm2` 
for more information on those assets check the [documentation](https://developers.planet.com/docs/data/psorthotile/#available-asset-types).

Also, Leaf handles all the subscription process internally in order to bring foward-filled images as area available from Planet. 

The following table shows all the images with its resolutions and types:
(TIFs are EPSG:4326, PNGs are EPSG:3857).

| Name           | Resolution (m) | Type               | Projection
|:---------------|:---------------|:-------------------|:------------|
| NDVI.png       | NULL           | png NDVI           | EPSG:3857   |
| NDRE.png       | NULL           | png NDRE           | EPSG:3857   |
| RGB.png        | NULL           | png RGB            | EPSG:3857   |
| NDVI.tif       | 3              | tif raw NDVI values| EPSG:4326   |
| NDVI_color.tif | 3              | tif colored NDVI   | EPSG:4326   |
| NDRE.tif       | 3              | tif raw NDRE values| EPSG:4326   |
| NDRE_color.tif | 3              | tif colored NDRE   | EPSG:4326   |
| RGB.tif        | 3              | tif RGB            | EPSG:4326   |
| B01.tif        | 3              | single band        | EPSG:4326   |
| B02.tif        | 3              | single band        | EPSG:4326   |
| B03.tif        | 3              | single band        | EPSG:4326   |
| B04.tif        | 3              | single band        | EPSG:4326   |
| B05.tif *      | 3              | single band        | EPSG:4326   |
| NDVI_relative.png | NULL       | png relative NDVI   | EPSG:3857   |
| NDVI_absolute.png | NULL       | png absolute NDVI   | EPSG:3857   |
| NDRE_relative.png | NULL       | png relative NDRE   | EPSG:3857   |
| NDRE_absolute.png | NULL       | png absolute NDRE   | EPSG:3857   |

_* A fifth band will be available by using the `assetType`: `analitic_5b` (red edge band) where the default value is 
`analitic_sr` which are images with atmospheric reflectance correction. Be aware, in this case the red-edge band is the B04._

See the [Satellite API Reference][satellite_endpoints] for more information.

[satellite_endpoints]: satellite_endpoints.md

## PSOrthoTile
More info at [Planet documentation][planet_psorthotile].

### Available asset types
#### analytic_sr
Atmospherically corrected surface reflectance GeoTiff product.

| File           | Band name      |
|:---------------|:---------------|
| B01.tif        | Blue           |
| B02.tif        | Green          |
| B03.tif        | Red            |
| B04.tif        | Near-infrared  |


#### analytic_5b
Radiometrically calibrated GeoTiff product suitable for analytic applications. Has 5 analytic bands, including red-edge.

| File           | Band name      |
|:---------------|:---------------|
| B01.tif        | Blue           |
| B02.tif        | Green          |
| B03.tif        | Red            |
| B04.tif        | Red-Edge       |
| B05.tif        | Near-infrared  |

#### udm2
Usable Data Mask 2.0.

| File               |
|:-------------------|
| clear_map.tif      |
| snow_map.tif       |
| shadow_map.tif     |
| light_haze_map.tif |
| heavy_haze_map.tif |
| cloud_map.tif      |
| confidence_map.tif |

[planet_psorthotile]: https://developers.planet.com/docs/data/psorthotile/