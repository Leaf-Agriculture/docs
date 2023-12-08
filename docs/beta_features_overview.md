---
title: Beta Features Overview
description: Beta Features - Overview
sidebar_label: Overview
---
<!-- the following links are referenced throughout this document -->

The beta features contain experimental features that we are working on but can be used by Leaf customers.
The services available in this section may be updated as we release improvements.

Currently, we are working in the following features:

## Machines

This product fetches and stores machine data such as serial number, fuel consumption and start/stop time from providers.
 
Currently, we are obtaining data from the following providers:
* CNHI
* JohnDeere
* Stara

:::info Implement Data
    Implement Data is only available for customers with John Deere credentials 
:::
## Prescriptions

What are prescriptions in agriculture? Prescriptions are usually used to apply inputs at variable rates across a field, applying only the amount needed for each area. For example, a prescription could be based on soil sample results or crop monitoring data, and instructs a machine where to best distribute lime, potassium or other products that can improve soil quality or crop health.

Leaf helps organize the data flow for prescriptions. 

Our supported providers are:
* ClimateFieldView
* John Deere
* Raven Slingshot
* CNHI

Note: The prescription should be included as a zip file containing a valid shapefile with least **three** file extentions (**shp**, **dbf** and **shx**) with the same naming.


## Layers

You can now get layers (e.g. tassel count, stand count, NVDI, and RGB) via Leaf’s Sentera integration. Layers are used to display crop monitoring information geospatially on a farm map so that any variance in a crop can be visualized, usually at a field level. 

Our supported providers are:
* Sentera


## Input

This resource will search, in the operation's files, varieties of harvested/planted crops and applied products and 
store this data. For products, data from Agrian and CDMS will also be made available globally, so that all customers can access it.



