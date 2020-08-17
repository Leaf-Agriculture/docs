---
title: Overview
---

Leaf's Converters API performs many conversions between the different types and formats of files that are made available by data providers.

You can use this service to explore almost all the conversions that Leaf uses internally.

:::info it doesn't process the file
Unlike the Operation Data service, this service does not process and standardize the converted file. If you want a processed file, see **[how to upload a file to be processed]()**.
:::

### Available Converters

We currently have the following conversions available:

| From       | To                       |
|------------|--------------------------|
| geojson    | shapefile, iso11783, png |
| shapefile  | geojson                  |
| trimble    | geojson                  |
| cn1        | geojson                  |
| datclimate | geojson                  |
| adaptadm   | geojson                  |
