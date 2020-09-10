---
title: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

Using Leaf's Satellite service you will be able to easily implement a satellite imagery program and compare the field health evolution over time.
Leaf's service uses Sentinel-2 data which has the highest resolution publicly available and revisits each field every 3 to 5 days.

<img alt="Field example" src={useBaseUrl('img/fieldovertime.png')} />

This API accepts field boundary polygons and returns processed, cropped, and color-corrected RGB and NDVI images every time there is a new image available.
We also provide information like percent cloud coverage of the field, the data coverage percentage, and the Sentinel tile source for each image as well.

We generate a total of 18 images for each intersected field: A GeoTiff for each band from Sentinel and processed RGB and NDVI images.
The following table shows all the images with its resolutions and types:

| Name              | Resolution | Type          |
|:------------------|:-----------|:--------------|
| B01.tif           | 60 meters  | tif           |
| B02.tif           | 10         | tif           |
| B03.tif           | 10         | tif           |
| B04.tif           | 10         | tif           |
| B05.tif           | 20         | tif           |
| B06.tif           | 20         | tif           |
| B07.tif           | 20         | tif           |
| B08.tif           | 10         | tif           |
| B09.tif           | 60         | tif           |
| B10.tif           | 60         | tif           |
| B11.tif           | 20         | tif           |
| B12.tif           | 20         | tif           |
| NDVI.png          | NULL       | png           |
| NDVI.tif          | 10         | ndvi          |
| NDVI_color.tif    | 10         | tif_colorized |
| NDVI_absolute.png | NULL       | png           |
| RGB.png           | NULL       | png           |
| RGB.tif           | 10         | tif_colorized |

PNG files do not have resolution because they are scaled up by 800%.

We generate a colorized `NDVI_color.tif` using a custom-built color ramp. See
the image below. If you prefer to use your own ramp, we recommend using `NDVI.tif`,
which is a pre calculated NDVI file. You can import it into any GIS software,
like [QGis][4], and use it as you please.

The difference between `NDVI_color.png` and `NDVI_absolute.png` is that for the
first one we first normalize the data between the min/max of the data before
coloring it. For the second one we apply the color ramp as is. In practical terms
the normalized version will have it's lowest values as a bright red and its
highest values as a bright green (see example image below). The absolute version
will have the value at `-1` as the bright red and the value `1` as the bright
green with the colors interpolated in between.

<img alt="NDVI example" src={useBaseUrl('img/ndviexample.png')} />

Currently, our Satellite service runs without a relationship between our Field Services, and the User Management Services.
However, we are working to integrate it into the `leafUser` hierarchy, and the Fields Service.

See the [Satellite API Reference][satellite_endpoints] for more information.

[satellite_endpoints]: satellite_endpoints.md
[4]: https://www.qgis.org/en/site/
