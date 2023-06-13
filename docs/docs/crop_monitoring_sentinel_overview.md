---
title: Sentinel Overview
description: Sentinel Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<p align='justify'>

Leaf's service uses Sentinel-2 data which has the highest resolution publicly available
and revisits each field every 3 to 5 days.

We generate a total of 25 images for each intersected field: a GeoTiff for each
band from Sentinel and processed RGB, NDVI, NDRE and Multiband images.

The following table shows all the images with its resolutions and types:
(TIFs are EPSG:4326, PNGs are EPSG:3857).

</p>

|       Name        | Resolution |        Type         | Projection |
|:-----------------:|:----------:|:-------------------:|:-----------|
|     NDVI.png      |    NULL    |      png NDVI       | EPSG:3857  |
|     NDRE.png      |    NULL    |      png NDRE       | EPSG:3857  |
|      RGB.png      |    NULL    |       png RGB       | EPSG:3857  |
|  multi_band.tif   |     10     |     multi band      | EPSG:4326  |
|     NDVI.tif      |     10     | tif raw NDVI values | EPSG:4326  |
|  NDVI_color.tif   |     10     |  tif colored NDVI   | EPSG:4326  |
|     NDRE.tif      |     10     | tif raw NDRE values | EPSG:4326  |
|  NDRE_color.tif   |     10     |  tif colored NDRE   | EPSG:4326  |
|      RGB.tif      |     10     |       tif RGB       | EPSG:4326  |
|      B01.tif      | 60 meters  |     single band     | EPSG:4326  |
|      B02.tif      |     10     |     single band     | EPSG:4326  |
|      B03.tif      |     10     |     single band     | EPSG:4326  |
|      B04.tif      |     10     |     single band     | EPSG:4326  |
|      B05.tif      |     20     |     single band     | EPSG:4326  |
|      B06.tif      |     20     |     single band     | EPSG:4326  |
|      B07.tif      |     20     |     single band     | EPSG:4326  |
|      B08.tif      |     10     |     single band     | EPSG:4326  |
|      B8A.tif      |     20     |     single band     | EPSG:4326  |
|      B09.tif      |     60     |     single band     | EPSG:4326  |
|      B11.tif      |     20     |     single band     | EPSG:4326  |
|      B12.tif      |     20     |     single band     | EPSG:4326  |
| NDVI_relative.png |    NULL    |  png relative NDVI  | EPSG:3857  |
| NDVI_absolute.png |    NULL    |  png absolute NDVI  | EPSG:3857  |
| NDRE_relative.png |    NULL    |  png relative NDRE  | EPSG:3857  |
| NDRE_absolute.png |    NULL    |  png absolute NDRE  | EPSG:3857  |

<p align='justify'>

PNG files do not have resolution because they are scaled up by 800%.

We generate a colorized `NDVI_color.tif`  and `NDRE_color.tif`  using a custom-built color ramp. See
the image below. If you prefer to use your own ramp, we recommend using `NDVI.tif`  or `NDRE.tif`,
which is a pre calculated index file. You can import it into any GIS software,
like [QGis][4], and use it as you please.

In addition, you will get the NDVI (i.e., we call them at Leaf as `NDVI_relative.png`, `NDVI_absolute.png` 
and `NDVI.png`) cut for your area of interest. The NDVI relative uses the minimum and maximum of the image of that 
date and, therefore, you would have a color scale to better visualize the differences of your harvest for that 
specific moment, whereas, the NDVI absolute and NDVI, whose range goes from `-1`  to `1`, you can make comparisons 
on different dates, the difference between these files are the color ramp applied (i.e., in the NDVI all the values 
below `0`  are bright red while in the NDVI absolute the color ramp begins at `-1` as the bright red and the value `1` 
as the bright green inteporlated in between). Same for NDRE.

</p>

<div align="center">
    <img alt="NDVI example: Left - NDVI relative, Center - NDVI absolute, Right - NDVI" src={useBaseUrl('img/ndvi_files.png')} />
</div>

<div align="center">
Left - NDVI relative. Center - NDVI absolute. Right - NDVI.
</div>


We recommend using the option on the right (just ndvi.png).

## Clouds

We use the cloud mask provided by Sentinel-2 to calculate the clouds coverage percentage. 


See the [Crop Monitoring API Reference][crop_monitoring_endpoints] for more information.

[crop_monitoring_endpoints]: crop_monitoring_endpoints.md
[4]: https://www.qgis.org/en/site/