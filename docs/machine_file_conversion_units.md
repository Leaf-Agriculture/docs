---
title: Units of Measurement and Properties
description: Units of Measurement for Machine Files and Operations
sidebar_label: Units of Measurement
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


## About

This page lists the units of measurements and properties across all machine file/operation types (tillage, planting, applied, harvest). If you have any questions or feedback, reach out to our team at <help@withleaf.io>.

<Tabs
  defaultValue="metric"
  values={[
    { label: 'Metric', value: 'metric', },
    { label: 'Imperial', value: 'imperial', }
  ]
}>

  <TabItem value="metric">
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

  | Property       | Unit of measurement| Description                                                                                                         |
  |----------------|:------------------:|---------------------------------------------------------------------------------------------------------------------|
  | startTime      | -                  | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".|
  | finishTime     | -                  | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".|
  | operationType  | -                  | This field will tell you what type of operation it is e.g. "planted", "harvested", "applied" or "tillage".          |
  | crop           | -                  | Indicates the type of crop being grown where the operation is happening e.g. corn.                                  |
  | varieties      | -                  | Indicates the type of variety being grown where the operation is happening e.g. P1309WAM is a variety of corn. This property also comes with seed rate, count and area information.|
  | machinery      | -                  | Shows the type of machinery used including the name, type, brand and serial number.                                 |
  | geometry       | -                  | Shows where the operation happened and the shape of the area covered, includes geometry type and coordinates.       |
  | speed          | `km/hr`            | Kilometers per hours. How fast did the tractor travel?                                                              |
  | totalDistance  | `m`                | Meters. How far did the tractor travel?                                                                             |
  | elevation      | `m`                | Meters. What was the elevation of the landscape?                                                                    |
  | equipmentWidth | `m`                | Meters. How wide is the equipment?                                                                                  |
  | totalArea      | `ha`               | Total area covered in hectares (ha).                                                                                |

  </TabItem>

  <TabItem value="planted">

| Property     | Unit of Measurement  | Description                                                                                                                                                  |
|--------------|:----------:|----------------------------------------------------------------------------------------------------------------------|
| seedRate     | `seeds/ha` | Seeds per hectare. How many seeds were planted in an area?                                                                     |
| singulation  | `%`        | Percentage. Singulation refers to how well a meter is dropping one seed at a time.                                             |
| downForce    | `kgf`      | Kilogram-force. Downforce refers to the amount of pressure that’s been applied to a crop row to ensure planting happens at the right depth. |
| totalPlanted | `seeds`    | Number of seeds in total that have been planted.                                                                               |
| skips        | `%`        | Percentage. A skip is identified as a missing seed/plant within a row.                                                         |
| doubles      | `%`        | Percentage. A double is identified as more than one seed in the same location or close enough that they can impact each other. |

  </TabItem>

  <TabItem value="applied">

| Property        | Unit of Measurement  | Description                                                                                                   |
|-----------------|:--------------------:|---------------------------------------------------------------------------------------------------------------|
| products        | -                    | Shows which products were applied during the operation and at what rate the product was applied over an area. |
| rate            | `kg/ha`, `L/ha`      | How much of a product was applied per area? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc. |
| appliedRate     | `kg/ha`, `L/ha`      | Shows the operation applied rate of all combined products.                                                    |
| totalApplied    | `kg`, `L`            | How much product was applied in total during the operation? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc. |

Note: Rate units vary depending on the user's preferences and what type of product was used.

  </TabItem>

  <TabItem value="harvested">

| Property           | Unit of Measurement | Description                                                                                               |
|--------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------|
| totalWetMass       | `kg`                | Kilograms. What is the mass of the harvested crop (before it has been dried)?                             |
| wetMassPerArea     | `kg/ha`             | Kilograms per hectare. What is the mass of the harvested crop per area (before it has been dried)?        |
| wetVolume          | `kg`                | Kilograms. What is the volume of the harvested crop (before it has been dried)?                           |
| totalWetVolume     | `kg`                | Kilograms. What is the total volume of the harvested crop (before it has been dried)?                     |
| wetVolumePerArea   | `kg/ha`             | Kilograms per hectare. What is the volume per acre of the harvested crop (before it has been dried)?      |
| harvestMoisture    | `%`                 | What is the percentage of moisture in the crop when it’s been harvested?                                  |
| dryMass            | `kg`                | Kilograms. What is the dry mass of the harvested crop as an average, with min and max values?             |
| totalDryMass       | `kg`                | Kilograms. What is the total dry mass of the harvested crop?                                              |
| dryMassPerArea     | `kg/ha`             | Kilograms per hectare. What is the dry mass of the harvested crop per area?                               |
| dryVolume          | `kg`                | Kilograms What is the dry volume of the harvested crop as an average, with min and max values?            |
| totalDryVolume     | `kg`                | Kilograms. What is the total dry volume of the harvested crop?                                            |
| dryVolumePerArea   | `kg/ha`             | Kilograms per hectare. What is the total dry volume per area of the harvested crop?                       |

Note: Mass and volume units vary depending on the user's preferences

  </TabItem>

   <TabItem value="tillage">

| Property           | Unit of Measurement | Description                                                                    |
|--------------------|---------------------|--------------------------------------------------------------------------------|
| tillageDepthTarget |  `cm`               | Centimeters. Target depth of tillage, specifying the desired depth at which the farmer wants to turn the soil.    |

  </TabItem>
  </Tabs>

  </TabItem>

  
  <TabItem value="imperial">
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

  | Property       | Unit of measurement| Description                                                                                                         |
  |----------------|:------------------:|---------------------------------------------------------------------------------------------------------------------|
  | startTime      | -                  | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".|
  | finishTime     | -                  | All dates follow ISO 8601 format. Specifically, all dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".|
  | operationType  | -                  | This field will tell you what type of operation it is e.g. "planted", "harvested", "applied" or "tillage".          |
  | crop           | -                  | Indicates the type of crop being grown where the operation is happening e.g. corn.                                  |
  | varieties      | -                  | Indicates the type of variety being grown where the operation is happening e.g. P1309WAM is a variety of corn. This property also comes with seed rate, count and area information.|
  | machinery      | -                  | Shows the type of machinery used including the name, type, brand and serial number.                                 |
  | geometry       | -                  | Shows where the operation happened and the shape of the area covered, includes geometry type and coordinates.       |
  | speed          | `mi/hr`            | Miles per hours. How fast did the tractor travel?                                                                   |
  | totalDistance  | `ft`               | Feet. How far did the tractor travel?                                                                               |
  | elevation      | `ft`               | Feet. What was the elevation of the landscape?                                                                      |
  | equipmentWidth | `ft`               | Feet. How wide is the equipment?                                                                                    |
  | totalArea      | `ac`               | Total area covered in acres (ac).                                                                                   |

  </TabItem>

  <TabItem value="planted">

| Property     | Unit of Measurement  | Description                                                                                                                                        |
|--------------|:----------:|----------------------------------------------------------------------------------------------------------------------|
| seedRate     | `seeds/ac` | Seeds per acre. How many seeds were planted in an area?                                                              |
| singulation  | `%`        | Percentage. Singulation refers to how well a meter is dropping one seed at a time.                                   |
| downForce    | `lbf`      | Pound-force. Downforce refers to the amount of pressure that’s been applied to a crop row to ensure planting happens at the right depth. |
| totalPlanted | `seeds`    | Number of seeds in total that have been planted.                                                                               |
| skips        | `%`        | Percentage. A skip is identified as a missing seed/plant within a row.                                                         |
| doubles      | `%`        | Percentage. A double is identified as more than one seed in the same location or close enough that they can impact each other. |

  </TabItem>

  <TabItem value="applied">

| Property        | Unit of Measurement  | Description                                                                                                   |
|-----------------|:--------------------:|---------------------------------------------------------------------------------------------------------------|
| products        | -                    | Shows which products were applied during the operation and at what rate the product was applied over an area. |
| rate            | `lb/ac`, `gal/ac`    | How much of a product was applied per area? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc. |
| appliedRate     | `lb/ac`, `gal/ac`    | Shows the operation applied rate of all combined products.                                                    |
| totalApplied    | `lb`, `gal`          | How much product was applied in total during the operation? The units depend on several product-related factors, such as liquid vs solid, fertilizer vs insecticide, etc. |

Note: Rate units vary depending on the user's preferences and what type of product was used.

  </TabItem>

  <TabItem value="harvested">

| Property           | Unit of Measurement | Description                                                                                               |
|--------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------|
| totalWetMass       | `lb`                | Pounds. What is the mass of the harvested crop (before it has been dried)?                             |
| wetMassPerArea     | `lb/ac`             | Kilograms per hectare. What is the mass of the harvested crop per area (before it has been dried)?        |
| wetVolume          | `lb`, `bale`        | Kilograms. What is the volume of the harvested crop (before it has been dried)?                           |
| totalWetVolume     | `lb`, `bale`        | Kilograms. What is the total volume of the harvested crop (before it has been dried)?                     |
| wetVolumePerArea   | `lb/ac`, `bale/ac`  | Kilograms per hectare. What is the volume per acre of the harvested crop (before it has been dried)?      |
| harvestMoisture    | `%`                 | What is the percentage of moisture in the crop when it’s been harvested?                                  |
| dryMass            | `lb`                | Kilograms. What is the dry mass of the harvested crop as an average, with min and max values?             |
| totalDryMass       | `lb`                | Kilograms. What is the total dry mass of the harvested crop?                                              |
| dryMassPerArea     | `lb/ac`             | Kilograms per hectare. What is the dry mass of the harvested crop per area?                               |
| dryVolume          | `lb`, `bale`        | Kilograms What is the dry volume of the harvested crop as an average, with min and max values?            |
| totalDryVolume     | `lb`, `bale`        | Kilograms. What is the total dry volume of the harvested crop?                                            |
| dryVolumePerArea   | `lb/ac`, `bale/ac`  | Kilograms per hectare. What is the total dry volume per area of the harvested crop?                       |

Note: Mass and volume units vary depending on the user's preferences

  </TabItem>

   <TabItem value="tillage">

| Property           | Unit of Measurement | Description                                                                    |
|--------------------|---------------------|--------------------------------------------------------------------------------|
| tillageDepthTarget |  `in`               | Inches. Target depth of tillage, specifying the desired depth at which the farmer wants to turn the soil.    |

  </TabItem>
  </Tabs>

  </TabItem>


</Tabs>
