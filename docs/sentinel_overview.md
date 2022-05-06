---
title: Sentinel
---


Leaf's
service uses Sentinel-2 data which has the highest resolution publicly available
and revisits each field every 3 to 5 days.

:::success You can get historical images with Leaf.

By default, Leaf retrieves images from 30 days prior to the creation of your
field. But you can increase that to as far back in time as you want.
[Here's how](/docs/docs/satellite_endpoints#post-fields)
:::

<!--
<img alt="Field example" src={useBaseUrl('img/fieldovertime.png')} />
-->

This API accepts field boundary polygons and returns processed, cropped, and
color-corrected RGB and NDVI images every time there is a new image available.
We also provide information like percent cloud coverage of the field, the data
coverage percentage, and the Sentinel tile source for each image as well.

We generate a total of 19 images for each intersected field: A GeoTiff for each
band from Sentinel and processed RGB and NDVI images.

The following table shows all the images with its resolutions and types:
(TIFs are EPSG:4326, PNGs are EPSG:3857).

| Name              | Resolution | Type               | Projection
|:------------------|:-----------|:-------------------|:------------|
| NDVI.png          | NULL       | png ndvi           | EPSG:3857   |
| RGB.png           | NULL       | png RGB            | EPSG:3857   |
| NDVI.tif          | 10         | tif raw ndvi values| EPSG:4326   |
| NDVI_color.tif    | 10         | tif colored ndvi   | EPSG:4326   |
| RGB.tif           | 10         | tif RGB            | EPSG:4326   |
| B01.tif           | 60 meters  | single band        | EPSG:4326   |
| B02.tif           | 10         | single band        | EPSG:4326   |
| B03.tif           | 10         | single band        | EPSG:4326   |
| B04.tif           | 10         | single band        | EPSG:4326   |
| B05.tif           | 20         | single band        | EPSG:4326   |
| B06.tif           | 20         | single band        | EPSG:4326   |
| B07.tif           | 20         | single band        | EPSG:4326   |
| B08.tif           | 10         | single band        | EPSG:4326   |
| B8A.tif           | 20         | single band        | EPSG:4326   |
| B09.tif           | 60         | single band        | EPSG:4326   |
| B11.tif           | 20         | single band        | EPSG:4326   |
| B12.tif           | 20         | single band        | EPSG:4326   |
| NDVI_relative.png | NULL       | png relative ndvi  | EPSG:3857   |
| NDVI_absolute.png | NULL       | png absolute ndvi  | EPSG:3857   |

PNG files do not have resolution because they are scaled up by 800%.

We generate a colorized `NDVI_color.tif` using a custom-built color ramp. See
the image below. If you prefer to use your own ramp, we recommend using `NDVI.tif`,
which is a pre calculated NDVI file. You can import it into any GIS software,
like [QGis][4], and use it as you please.

In addition, you will get the NDVI (i.e., we call them at Leaf as `NDVI_relative.png`, `NDVI_absolute.png` and `NDVI.png`)  cut for your area of interest. The NDVI relative uses the minimum and maximum of the image of that date and, therefore, you would have a color scale to better visualize the differences of your harvest for that specific moment, whereas, the NDVI absolute and NDVI, whose range goes from `-1 `to `1`, you can make comparisons on different dates, the difference between these files are the color ramp applied (i.e., in the NDVI all the values below `0` are bright red while in the NDVI absolute the color ramp begins at `-1` as the bright red and the value `1` as the bright green inteporlated in between).

<!--
<img alt="NDVI example: Left - NDVI relative, Center - NDVI absolute, Right - NDVI" src={useBaseUrl('img/ndvi_files.png')} />
-->

Left - NDVI relative. Center - NDVI absolute. Right - NDVI.  
We recommend using the Right one (just ndvi.png)

Currently, our Satellite service runs without a relationship between our Field Services, and the User Management Services.
However, we are working to integrate it into the `leafUser` hierarchy, and the Fields Service.

See the [Satellite API Reference][satellite_endpoints] for more information.

[satellite_endpoints]: satellite_endpoints.md
[4]: https://www.qgis.org/en/site/
