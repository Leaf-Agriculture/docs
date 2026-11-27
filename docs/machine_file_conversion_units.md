---
title: Units of Measurement and Properties
description: Units of Measurement for Machine Files and Operations
sidebar_label: Units of Measurement
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: https://docs.withleaf.io/docs/configurations_overview#cleanupstandardgeojson
[2]: /docs/configurations_overview#unitmeasurement

## About

This page lists the units of measurements and properties across all machine file/operation types (tillage, planting, applied, harvest). If you have any questions or feedback, reach out to our team at help@withleaf.io.

Units are determined by the [unitMeasurement][2] configuration where you can select  `IMPERIAL` or `METRIC`. The default is `DEFAULT`.


<Tabs
  defaultValue="default"
  values={[
    { label: 'Default', value: 'default', },
    { label: 'Imperial', value: 'imperial', },
    { label: 'Metric', value: 'metric', }
  ]
}>
  <TabItem value="default">

  These are the units of measurement for the `DEFAULT` configuration.

<Tabs
  defaultValue="all types"
  values={[
    { label: 'All types', value: 'all types', },
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
    { label: 'Tillage', value: 'tillage', },
  ]
}>
  <TabItem value="all types">
 

  | Property       | Unit of measurement                   | Description                                                                                            |
  |----------------|---------------------------------------|--------------------------------------------------------------------------------------------------------|
  | startTime      | -                                     | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".                                                               |
  | finishTime     | -                                     | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".                                                               |
  | operationType  | -                                     | This field will tell you what type of operation it is e.g. "planted", "harvested", "applied" or "tillage".                                                                         |
  | crop           | -                                     | Indicates the type of crop being grown where the operation is happening e.g. corn.                                                                                                 |
  | varieties      | -                                     | Indicates the type of variety being grown where the operation is happening e.g. P1309WAM is a variety of corn. This property also comes with seed rate, count and area information.|
  | machinery      | -                                     | Shows the type of machinery used including the name, type, brand and serial number.                                                                                                |
  | geometry       | -                                     | Shows where the operation happened and the shape of the area covered, includes geometry type and coordinates.                                                                      |
  | speed          | Imperial: ft/s or m/s                 | Feet or meters per second. How fast did the tractor travel?                                                                                                                        |
  | totalDistance  | Imperial: ft, Metric: m               | Feet or meters. How far did the tractor travel?                                                                                                                                    |
  | elevation      | Imperial: ft, Metric: m               | Feet or meters. What was the elevation of the landscape?                                                                                                                           |
  | equipmentWidth | Imperial: ft, Metric: m               | Feet or meters. How wide is the equipment?                                                                                                                                         |
  | totalArea      | m²                                    | Total area covered in square meters. The m² is a common area measurement that's then calculated into another number such as acres (ac) or hectares (ha).                           |


  </TabItem>

  <TabItem value="planted">
 

| Property     | Unit of Measurement  | Description                                                                                                                                                |
|--------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| seedRate     | seeds/ac, seeds/ha, lb/ac, t/ha, kg/ha | Seeds or weight of seeds per acre or hectare.                                                                                         |
| singulation  | percentage           | Percentage. Singulation refers to how well a meter is dropping one seed at a time.                                                                         |
| downForce    | Lbf or Kgf           | Pound-force or kilogram-force. Downforce refers to the amount of pressure that’s been applied to a crop row to ensure planting happens at the right depth. |
| totalPlanted | seeds                | Number of seeds in total that have been planted.                                                                                                           |
| skips        | percentage           | Percentage. A skip is identified as a missing seed/plant within a row.                                                                                     |
| doubles      | percentage           | Percentage. A double is identified as more than one seed in the same location or close enough that they can impact each other.                             |


  </TabItem>

  <TabItem value="applied">

| Property        | Unit of Measurement                    | Description                                                                                              |
|-----------------|----------------------------------------|----------------------------------------------------------------------------------------------------------|
| products        | -                                                                   | Shows which products were applied during the operation and at what rate the product was applied over an area.                                                             |
| rate            | Imperial: gal/ac, lb/ac, qt/ac, floz/ac, Metric: kg/ha, t/ha, L/ha  | How much of a product was applied per area? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc.                 |
| appliedRate     | Imperial: gal/ac, lb/ac, Metric: t/ha, L/ha                         | Shows the operation applied rate of all combined products.                                                                                                                |
| totalApplied    | Imperial: gal, lb, qt, Metric: t, L                                 | How much product was applied in total during the operation? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc. |

Note: Rate units vary depending on the user's preferences and what type of product was used

  </TabItem>

  <TabItem value="harvested">

| Property           | Unit of Measurement                 | Description                                                                                               |
|--------------------|-------------------------------------|-----------------------------------------------------------------------------------------------------------|
| totalWetMass       | Imperial: lb, Metric: t             | Pounds or tonnes. What is the mass of the harvested crop (before it has been dried)?                                  |
| wetMassPerArea     | Imperial: lb/ac, Metric: t/ha       | Pounds per acre or tonnes per hectare. What is the mass of the harvested crop per area (before it has been dried)?    |
| wetVolume          | Imperial: bu, Metric: t             | Bushels or tonnes. What is the volume of the harvested crop (before it has been dried)?                               |
| totalWetVolume     | Imperial: bu, Metric: t             | Bushels or tonnes. What is the total volume of the harvested crop (before it has been dried)?                         |
| wetVolumePerArea   | Imperial: bu/ac, Metric: t/ha       | Bushels per acre or tonnes per hectare. What is the volume per acre of the harvested crop (before it has been dried)? |
| harvestMoisture    | %                                   | What is the percentage of moisture in the crop when it’s been harvested?                                              |
| dryMass            | Imperial: lb, Metric: t             | Pounds or tonnes. What is the dry mass of the harvested crop as an average, with min and max values?                  |
| totalDryMass       | Imperial: lb, Metric: t             | Pounds or tonnes. What is the total dry mass of the harvested crop?                                                   |
| dryMassPerArea     | Imperial: lb/ac, Metric: t/ha       | Pounds per acre or tonnes per hectare. What is the dry mass of the harvested crop per area?                           |
| dryVolume          | Imperial: bu, Metric: t             | Bushels or tonnes. What is the dry volume of the harvested crop as an average, with min and max values?               |
| totalDryVolume     | Imperial: bu, Metric: t             | Bushels or tonnes. What is the total dry volume of the harvested crop?                                                |
| dryVolumePerArea   | Imperial: bu/ac, Metric: t/ha       | Bushels per acre or tonnes per hectare. What is the total dry volume per area of the harvested crop?                  |



Note: Mass and volume units vary depending on the user's preferences

  </TabItem>

   <TabItem value="tillage">

| Property           | Unit of Measurement | Description                                                                                                                 |
|--------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------|
| tillageDepthTarget | in or cm            | Inches or centimeters. Target depth of tillage, specifying the desired depth at which the farmer wants to turn the soil.    |

  </TabItem>
  </Tabs>

  
  </TabItem>





  <TabItem value="imperial">

These are the units of measurement for the `IMPERIAL` configuration.

  <Tabs
  defaultValue="all types"
  values={[
    { label: 'All types', value: 'all types', },
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
    { label: 'Tillage', value: 'tillage', },
  ]
}>

  <TabItem value="all types">
 

  | Property       | Unit of measurement                   | Description                                                                                            |
  |----------------|---------------------------------------|--------------------------------------------------------------------------------------------------------|
  | startTime      | -                                     | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".                                                               |
  | finishTime     | -                                     | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".                                                               |
  | operationType  | -                                     | This field will tell you what type of operation it is e.g. "planted", "harvested", "applied" or "tillage".                                                                         |
  | crop           | -                                     | Indicates the type of crop being grown where the operation is happening e.g. corn.                                                                                                 |
  | varieties      | -                                     | Indicates the type of variety being grown where the operation is happening e.g. P1309WAM is a variety of corn. This property also comes with seed rate, count and area information.|
  | machinery      | -                                     | Shows the type of machinery used including the name, type, brand and serial number.                                                                                                |
  | geometry       | -                                     | Shows where the operation happened and the shape of the area covered, includes geometry type and coordinates.                                                                      |
  | speed          | ft/s                                  | Feet per second. How fast did the tractor travel?                                                                                                                        |
  | totalDistance  | ft                                    | Feet. How far did the tractor travel?                                                                                                                                    |
  | elevation      | ft                                    | Feet. What was the elevation of the landscape?                                                                                                                           |
  | equipmentWidth | ft                                    | Feet. How wide is the equipment?                                                                                                                                         |
  | totalArea      | ac                                    | Total area covered in acres.                           |


  </TabItem>

  <TabItem value="planted">
 

| Property     | Unit of Measurement  | Description                                                                                                                                                |
|--------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| seedRate     | seeds/ac             | Seeds per acre. How many seeds were planted in an area?                                                                                         |
| singulation  | percentage           | Percentage. Singulation refers to how well a meter is dropping one seed at a time.                                                                         |
| downForce    | lbf                  | Pound-force. Downforce refers to the amount of pressure that’s been applied to a crop row to ensure planting happens at the right depth. |
| totalPlanted | seeds                | Number of seeds in total that have been planted.                                                                                                           |
| skips        | percentage           | Percentage. A skip is identified as a missing seed/plant within a row.                                                                                     |
| doubles      | percentage           | Percentage. A double is identified as more than one seed in the same location or close enough that they can impact each other.                             |


  </TabItem>

  <TabItem value="applied">

| Property        | Unit of Measurement         | Description                                                                                              |
|-----------------|-----------------------------|----------------------------------------------------------------------------------------------------------|
| products        | -                           | Shows which products were applied during the operation and at what rate the product was applied over an area.                                                             |
| rate            | gal/ac, lb/ac               | How much of a product was applied per area? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc.                 |
| appliedRate     | gal/ac, lb/ac               | Shows the operation applied rate of all combined products.                                                                                                                |
| totalApplied    | gal, lb                     | How much product was applied in total during the operation? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc. |

Note: Rate units vary depending on the user's preferences and what type of product was used

  </TabItem>

  <TabItem value="harvested">

| Property           | Unit of Measurement                 | Description                                                                                               |
|--------------------|-------------------------------------|-----------------------------------------------------------------------------------------------------------|
| totalWetMass       | lb                                  | Pounds. What is the mass of the harvested crop (before it has been dried)?                                  |
| wetMassPerArea     | lb/ac                               | Pounds per acre. What is the mass of the harvested crop per area (before it has been dried)?    |
| wetVolume          | bu                                  | Bushels. What is the volume of the harvested crop (before it has been dried)?                               |
| totalWetVolume     | bu                                  | Bushels. What is the total volume of the harvested crop (before it has been dried)?                         |
| wetVolumePerArea   | bu/ac                               | Bushels per acre. What is the volume per acre of the harvested crop (before it has been dried)? |
| harvestMoisture    | %                                   | What is the percentage of moisture in the crop when it’s been harvested?                                              |
| dryMass            | lb                                  | Pounds. What is the dry mass of the harvested crop as an average, with min and max values?                  |
| totalDryMass       | lb                                  | Pounds. What is the total dry mass of the harvested crop?                                                   |
| dryMassPerArea     | lb/ac                               | Pounds per acre. What is the dry mass of the harvested crop per area?                           |
| dryVolume          | bu                                  | Bushels. What is the dry volume of the harvested crop as an average, with min and max values?               |
| totalDryVolume     | bu                                  | Bushels. What is the total dry volume of the harvested crop?                                                |
| dryVolumePerArea   | bu/ac                               | Bushels per acre. What is the total dry volume per area of the harvested crop?                  |


Note: Mass and volume units vary depending on the user's preferences

  </TabItem>

   <TabItem value="tillage">

| Property           | Unit of Measurement | Description                                                                                                                 |
|--------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------|
| tillageDepthTarget | in                  | Inches. Target depth of tillage, specifying the desired depth at which the farmer wants to turn the soil.    |

  </TabItem>
  </Tabs>

  </TabItem>




  <TabItem value="metric">

These are the units of measurement for the `METRIC` configuration.

  <Tabs
  defaultValue="all types"
  values={[
    { label: 'All types', value: 'all types', },
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
    { label: 'Tillage', value: 'tillage', },
  ]
}>

  <TabItem value="all types">
 

  | Property       | Unit of measurement                   | Description                                                                                            |
  |----------------|---------------------------------------|--------------------------------------------------------------------------------------------------------|
  | startTime      | -                                     | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".                                                               |
  | finishTime     | -                                     | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".                                                               |
  | operationType  | -                                     | This field will tell you what type of operation it is e.g. "planted", "harvested", "applied" or "tillage".                                                                         |
  | crop           | -                                     | Indicates the type of crop being grown where the operation is happening e.g. corn.                                                                                                 |
  | varieties      | -                                     | Indicates the type of variety being grown where the operation is happening e.g. P1309WAM is a variety of corn. This property also comes with seed rate, count and area information.|
  | machinery      | -                                     | Shows the type of machinery used including the name, type, brand and serial number.                                                                                                |
  | geometry       | -                                     | Shows where the operation happened and the shape of the area covered, includes geometry type and coordinates.                                                                      |
  | speed          | m/s                                   | Meters per second. How fast did the tractor travel?                                                                                                                        |
  | totalDistance  | m                                     | Meters. How far did the tractor travel?                                                                                                                                    |
  | elevation      | m                                     | Meters. What was the elevation of the landscape?                                                                                                                           |
  | equipmentWidth | m                                     | Meters. How wide is the equipment?                                                                                                                                         |
  | totalArea      | ha                                    | Total area covered in hectares (ha).                           |


  </TabItem>

  <TabItem value="planted">
 

| Property     | Unit of Measurement  | Description                                                                                                                                                |
|--------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| seedRate     | seeds/ha             | Seeds per hectare. How many seeds were planted in an area?                                                                                         |
| singulation  | percentage           | Percentage. Singulation refers to how well a meter is dropping one seed at a time.                                                                         |
| downForce    | Kgf                  | Kilogram-force. Downforce refers to the amount of pressure that’s been applied to a crop row to ensure planting happens at the right depth. |
| totalPlanted | seeds                | Number of seeds in total that have been planted.                                                                                                           |
| skips        | percentage           | Percentage. A skip is identified as a missing seed/plant within a row.                                                                                     |
| doubles      | percentage           | Percentage. A double is identified as more than one seed in the same location or close enough that they can impact each other.                             |


  </TabItem>

  <TabItem value="applied">

| Property        | Unit of Measurement                    | Description                                                                                              |
|-----------------|----------------------------------------|----------------------------------------------------------------------------------------------------------|
| products        | -                                                                   | Shows which products were applied during the operation and at what rate the product was applied over an area.                                                             |
| rate            | m³/ha, L/ha, kg/ha  | How much of a product was applied per area? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc.                 |
| appliedRate     | m³/ha, L/ha, kg/ha                        | Shows the operation applied rate of all combined products.                                                                                                                |
| totalApplied    | m³, L                                 | How much product was applied in total during the operation? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc. |

Note: Rate units vary depending on the user's preferences and what type of product was used

  </TabItem>

  <TabItem value="harvested">

| Property           | Unit of Measurement                 | Description                                                                                               |
|--------------------|-------------------------------------|-----------------------------------------------------------------------------------------------------------|
| totalWetMass       | t                                   | Tonnes. What is the mass of the harvested crop (before it has been dried)?                                  |
| wetMassPerArea     | t/ha                                | Tonnes per hectare. What is the mass of the harvested crop per area (before it has been dried)?    |
| wetVolume          | m³                                  | Cubic metre. What is the volume of the harvested crop (before it has been dried)?                               |
| totalWetVolume     | m³                                  | Cubic metre. What is the total volume of the harvested crop (before it has been dried)?                         |
| wetVolumePerArea   | m³/ha                               | Cubic metre per hectare. What is the volume per acre of the harvested crop (before it has been dried)? |
| harvestMoisture    | %                                   | What is the percentage of moisture in the crop when it’s been harvested?                                              |
| dryMass            | t                                   | Tonnes. What is the dry mass of the harvested crop as an average, with min and max values?                  |
| totalDryMass       | t                                   | Tonnes. What is the total dry mass of the harvested crop?                                                   |
| dryMassPerArea     | t/ha                                | Tonnes per hectare. What is the dry mass of the harvested crop per area?                           |
| dryVolume          | m³                                  | Cubic metre. What is the dry volume of the harvested crop as an average, with min and max values?               |
| totalDryVolume     | m³                                  | Cubic metre. What is the total dry volume of the harvested crop?                                                |
| dryVolumePerArea   | m³/ha                               | Cubic metre per hectare. What is the total dry volume per area of the harvested crop?                  |



Note: Mass and volume units vary depending on the user's preferences

  </TabItem>

   <TabItem value="tillage">

| Property           | Unit of Measurement | Description                                                                                                                 |
|--------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------|
| tillageDepthTarget | cm                  | Centimeters. Target depth of tillage, specifying the desired depth at which the farmer wants to turn the soil.    |

  </TabItem>
  </Tabs>

  </TabItem>
</Tabs>