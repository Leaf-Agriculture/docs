---
title: Overview
---

Leaf's File Conversion API performs conversions between the many types and (often unique) formats of farm data files.

This service allows you to access nearly all of the conversions that Leaf uses internally.

:::info 
These converters simply convert files and do not upload the result to a Leaf User, auto-merge, or generate summary data. If you'd instead like to upload a file to a Leaf User, please see **[how to upload a file to be processed](https://leaf-agriculture.github.io/docs/docs/operations_endpoints#post-files)**.
:::

### Available conversions

We currently have the following conversions available:

| From       | To                       |
|------------|--------------------------|
| geojson    | shapefile, iso11783, png |
| shapefile  | geojson                  |
| trimble    | geojson                  |
| cn1        | geojson                  |
| datclimate | geojson                  |
| adaptadm   | geojson                  |
