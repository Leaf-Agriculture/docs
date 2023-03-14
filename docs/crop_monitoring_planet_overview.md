---
title: Planet Overview
description: Planet Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


<p align='justify'>

Leaf provides an integration with Planet, fetching PlanetScope images from a back-fill and forward-fill specified by 
the user. PlanetScope provides numerus categories of products from different satellite sensors 
called `itemTypes`  and 
for each one, we have different `assetType`. For now, we only support
`PSOrthoTile`  and the assets `analytic_5b`  (18 images), `analytic_sr` (12 images)  and `udm2`. Being these images 
between RBG, NDVI, NDRE GeoTiffs and Multiband images. For more information on those assets check the 
[documentation](https://developers.planet.com/docs/data/psorthotile/#available-asset-types).


Also, Leaf handles all the subscription process internally, in order to bring foward-filled images as area 
available from Planet. 

The following table shows all the images with its resolutions and types:
(TIFs are EPSG:4326, PNGs are EPSG:3857).

</p>

|       Name        | Resolution (m) |        Type         | Projection |
|:-----------------:|:--------------:|:-------------------:|:----------:|
|     NDVI.png      |      NULL      |      png NDVI       | EPSG:3857  |
|     NDRE.png      |      NULL      |      png NDRE       | EPSG:3857  |
|      RGB.png      |      NULL      |       png RGB       | EPSG:3857  |
|   multi_band.tif   |       3        |     multi  band     | EPSG:4326  |
|     NDVI.tif      |       3        | tif raw NDVI values | EPSG:4326  |
|  NDVI_color.tif   |       3        |  tif colored NDVI   | EPSG:4326  |
|     NDRE.tif      |       3        | tif raw NDRE values | EPSG:4326  |
|  NDRE_color.tif   |       3        |  tif colored NDRE   | EPSG:4326  |
|      RGB.tif      |       3        |       tif RGB       | EPSG:4326  |
|     blue.tif      |       3        |     single band     | EPSG:4326  |
|     green.tif     |       3        |     single band     | EPSG:4326  |
|      red.tif      |       3        |     single band     | EPSG:4326  |
|      nir.tif      |       3        |     single band     | EPSG:4326  |
|   rededge.tif *   |       3        |     single band     | EPSG:4326  |
| NDVI_relative.png |      NULL      |  png relative NDVI  | EPSG:3857  |
| NDVI_absolute.png |      NULL      |  png absolute NDVI  | EPSG:3857  |
| NDRE_relative.png |      NULL      |  png relative NDRE  | EPSG:3857  |
| NDRE_absolute.png |      NULL      |  png absolute NDRE  | EPSG:3857  |

<p align='justify'>

_* The red edge image will be available by using the `assetType`: `analitic_5b` (red edge band) where the default value is 
`analitic_sr` which are images with atmospheric reflectance correction._

See the [Crop Monitoring API Reference][crop_monitoring_endpoints] for more information.

</p>

[crop_monitoring_endpoints]: crop_monitoring_endpoints.md

### Available asset types

#### analytic_sr

Atmospherically corrected surface reflectance GeoTiff product.

| File           | Band name      |
|:---------------|:---------------|
| blue.tif       | Blue           |
| green.tif      | Green          |
| red.tif        | Red            |
| nir.tif        | Near-infrared  |


#### analytic_5b

<p align='justify'>

Radiometrically calibrated GeoTiff product suitable for analytic applications. Has 5 analytic bands, including red-edge.

</p>

| File           | Band name      |
|:---------------|:---------------|
| blue.tif       | Blue           |
| green.tif      | Green          |
| red.tif        | Red            |
| rededge.tif    | Red-Edge       |
| nir.tif        | Near-infrared  |

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

## PSOrthoTile
More info at [Planet documentation][planet_psorthotile].

[planet_psorthotile]: https://developers.planet.com/docs/data/psorthotile/

