---
title: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

Using our Satellite service, you will be able to compare the field health evolution over time. This is possible because we fetch a new image bath for each field every 3 days on average. 

<img alt="Field example" src={useBaseUrl('img/fieldovertime.png')} />

Our API returns processed, cropped, and color-corrected RGB and NDVI images. The Leaf's Satellite Service keeps an eye on newly uploaded sentinel tiles and checks them against the fields that we have stored in our database. When there is an intersection, we crop a set of images of the field from the tile, process, and made available on Satellite endpoints. We also provide informations like cloud coverage and the Sentinel tile source.

Usually, we generate a total of 17 images for each intersected field. A GeoTiff for each band from Sentinel; some utility images as well, RGB and NDVI. The following table shows all the images with its resolutions and types:

| Name           | Resolution | Type          |
|:---------------|:-----------|:--------------|
| B01.tif        | 60 meters  | tif           |
| B02.tif        | 10         | tif           |
| B03.tif        | 10         | tif           |
| B04.tif        | 10         | tif           |
| B05.tif        | 20         | tif           |
| B06.tif        | 20         | tif           |
| B07.tif        | 20         | tif           |
| B08.tif        | 10         | tif           |
| B09.tif        | 60         | tif           |
| B10.tif        | 60         | tif           |
| B11.tif        | 20         | tif           |
| B12.tif        | 20         | tif           |
| NDVI.png       | NULL       | png           |
| NDVI.tif       | 10         | ndvi          |
| NDVI_color.tif | 10         | tif_colorized |
| RGB.png        | NULL       | png           |
| RGB.tif        | 10         | tif_colorized |

PNG files do not have resolution because they are scaled up by 800%, so each pixel does not represent the correct size anymore.

We generate a colorized `NDVI_color.tif` using a custom built color ramp. See
the image below. If you want to use your own ramp, we recommend using `NDVI.tif`,
which is a pre calculated NDVI file. You can import it into any GIS software,
like [QGis][4], and use it as you please.

<img alt="NDVI example" src={useBaseUrl('img/ndviexample.png')} />

Currently, our Satellite service runs without a relationship between our Field Services and the User Management Services. However, we are working to integrate it into the `leafUser` hierarch and the Fields Service. 

See the [Satellite API Reference][satellite_endpoints] for more information.

[satellite_endpoints]: satellite_endpoints.md
[4]: https://www.qgis.org/en/site/