---
title: Overview
---

:::caution use our Uploaders endpoint
This service is currently under maintenance and will be updated on February 15th. We recommend using our 
**[uploader](http://localhost:3000/docs/docs/operations_endpoints#upload-a-file)**
endpoint, with more features such as standardization, operation images/maps and units.
:::


Leaf's File Conversion API performs conversions between the many types and (often unique) formats of farm data files.

This service allows you to access nearly all of the conversions that Leaf uses internally.

:::info 
These converters simply convert files and do not upload the result to a Leaf User, auto-merge, or generate summary data. If you'd instead like to upload a file to a Leaf User, please see **[how to upload a file to be processed](https://leaf-agriculture.github.io/docs/docs/operations_endpoints#post-files)**.
:::

### Available conversions

We currently have the following conversions available:

| From       | To                       |
|------------|--------------------------|
| geojson    | shapefile, png           |
| shapefile  | geojson                  |
| trimble    | geojson                  |
| cn1        | geojson                  |
| datclimate | geojson                  |
| adaptadm   | geojson                  |
