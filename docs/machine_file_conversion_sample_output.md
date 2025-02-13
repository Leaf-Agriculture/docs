---
title: Machine File Conversion Sample Responses
description: Machine File Conversion - Sample Responses
sidebar_label: Sample Responses
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: https://docs.withleaf.io/docs/configurations_overview#cleanupstandardgeojson

## Overview

This page shows and describes sample responses from Leaf's API, along with a list 
of what properties you can expect for each type of data.


## Machine Files

Leaf returns operation file in a standardized format. Summaries use 
the point data to derive basic information about the operation and include links 
to the original files and images of an operation. Naturally, different 
types of operations contain different properties. For instance, an `applied` 
operation will contain `appliedRate`, whereas a `harvested` operation will 
contain `wetMass` and other Yield properties. The resource below shows a typical return. A list of 
all properties is available here.

A list of the properties as well as a sample summary response for an operation 
file is included below.

An operation returned by Leaf can be an individual file or contain multiple 
individual files (uploaded, merged or uploaded).
If the operation contains more than one individual file, another key is added to 
the resource, the `"sources"` key, that is a list of individual file ids.
If the operation was created by an upload on the `/batch` endpoint, the `"batchId"`
key will be added to the resource with the corresponding uuid.


### Machine File Sample

You can move through the four tabs below to see a sample of how Leaf returns
each of the operation types.

<Tabs
  defaultValue="harvested"
  values={[
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
    { label: 'Tillage', value: 'tillage', },
  ]
}>

  <TabItem value="planted">

This is an example of a summary for a "planted" operation

  ```json
{
  "id": "69811426-ce0a-4280-a2b5-f3ca145e6fcb",
  "provider": "providerName",
  "fields": [
    "97f19b7c-45bd-40c5-b2c5-efd1d3764ab3"
  ],
  "fileFormat": "AGDATA",
  "fileName": "testFile.zip",
  "originalFile": "url",
  "downloadOriginalFile": "url",
  "rawGeojson": "url",
  "downloadRawGeojson": "url",
  "standardGeojson": "url",
  "downloadStandardGeojson": "url",
  "leafUserId": "f7f8062d-00db-4d76-9eff-51f43b82db56",
  "apiOwnerUsername": "test",
  "summary": {
    "type": "Feature",
    "properties": {
      "elevation": {
        "avg": 142.0509225092251,
        "min": 141.9,
        "max": 142.2,
        "unit": "ft"
      },
      "singulation": {
        "avg": 99.62031826568266,
        "min": 99.48125,
        "max": 99.75625,
        "unit": "prcnt"
      },
      "totalPlanted": {
        "value": 46974,
        "unit": "seeds"
      },
      "seedRate": {
        "avg": 32889.931431458586,
        "min": 31960,
        "max": 46135.3125,
        "unit": "seeds/ac"
      },
      "speed": {
        "avg": 3.913169741697417,
        "min": 0.058,
        "max": 4.258,
        "unit": "mi/hr"
      },
      "downForce": {
        "avg": 67.79335793357933,
        "min": 2,
        "max": 114,
        "unit": "lbf"
      },
      "totalFuelUsed": {
        "value": 196.25137347639,
        "unit": "gal"
      },
      "originalOperationType": "SowingAndPlanting",
      "varieties": [
        {
          "name": "variety",
          "rate": {
            "avg": 32889.931431458586,
            "min": 31960,
            "max": 46135.3125,
            "unit": "seeds/ac",
            "minTarget": 32000,
            "maxTarget": 33000,
            "avgTarget": 32890.78912254861
          },
          "area": {
            "value": 5779.886574350697,
            "unit": "m2"
          },
          "totalPlanted": {
            "value": 46974,
            "unit": "seeds"
          }
        }
      ],
      "originalOperationData": {
        "originalOperationType": "SowingAndPlanting"
      },
      "startTime": "2015-05-02T20:02:28.64Z",
      "operationType": "planted",
      "endTime": "2015-05-02T20:09:32.64Z",
      "totalDistance": {
        "value": 1555.3545326263538,
        "unit": "ft"
      },
      "crop": [
        "corn"
      ],
      "totalArea": {
        "value": 5779.886574350697,
        "unit": "m2"
      },
      "machinery": [
        {
          "name": "Challenger 745 Tractor",
          "type": "machine",
          "serialNumber": "8220203",
          "brand": "Challenger"
        },
        {
          "name": "Kinze 40.0' 16 Row Planter",
          "type": "implement",
          "brand": "Kinze"
        }
      ]
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[
        [-89.80434894561768,40.47791686563837],
        [-89.80756759643555,40.4757623387113],
        [-89.80746030807495,40.47302011353734],
        [-89.80475664138794,40.47070219301965],
        [-89.80080842971802,40.47068586935202],
        [-89.79797601699828,40.472709973879255],
        [-89.7978687286377,40.47569704893722],
        [-89.80117321014404,40.47808008455794],
        [-89.80434894561768,40.47791686563837]
      ]]]
    }
  }
}
```

  </TabItem>
  <TabItem value="applied">

This is an example of a summary for an "applied" operation

  ```json
{
    "id": "b4d1832c-c479-4dbd-bc28-1ba792b8ca33",
    "provider": "providerName",
    "fields": [
      "ebdb032c-b3a9-4116-9837-602abc23d4a0"
    ],
    "fileFormat": "SHAPEFILE",
    "fileName": "testFile.zip",
    "originalFile": "url",
    "downloadOriginalFile": "url",
    "rawGeojson": "url",
    "downloadRawGeojson": "url",
    "standardGeojson": "url",
    "downloadStandardGeojson": "url",
    "leafUserId": "e0088b35-4dec-49ea-9c52-d4a2b25d2932",
    "apiOwnerUsername": "test",
    "summary": {
      "type": "Feature",
      "properties": {
        "elevation": {
          "avg": 254.0579030350808,
          "min": 244.1,
          "max": 263.5,
          "unit": "ft"
        },
        "operationDescription": "Pre-Emerge",
        "speed": {
          "avg": 10.122365727685876,
          "min": 1.817995548248291,
          "max": 12.682278633117676,
          "unit": "mi/hr"
        },
        "tankMix": true,
        "products": [
          {
            "name": "Fastac EC",
            "type": "Component",
            "rate": {
              "unit": "floz/ac",
              "value": 3.4
            },
            "totalApplied": {
              "value": 75.40670095882788,
              "unit": "floz"
            },
            "area": {
              "value": 89753.32726801735,
              "unit": "m2"
            }
          },
          {
            "name": "Water",
            "type": "Carrier",
            "rate": {
              "unit": "gal/ac",
              "value": 15
            },
            "totalApplied": {
              "value": 332.67662187718184,
              "unit": "gal"
            },
            "area": {
              "value": 89753.32726801735,
              "unit": "m2"
            }
          }
        ],
        "originalOperationType": "CropProtection",
        "totalApplied": {
          "value": 224.45693246637688,
          "unit": "gal"
        },
        "appliedRate": {
          "avg": 14.233637596564106,
          "min": 0.2672675063127537,
          "max": 66.08990634889587,
          "unit": "gal/ac"
        },
        "originalOperationData": {
          "originalOperationType": "CropProtection"
        },
        "startTime": "2017-04-22T18:31:23.105Z",
        "operationType": "applied",
        "endTime": "2017-04-22T18:46:08.308Z",
        "totalDistance": {
          "value": 7532.9296062434005,
          "unit": "ft"
        },
        "crop": [],
        "totalArea": {
          "value": 63817.03945545471,
          "unit": "m2"
        },
        "totalFuelUsed": {
          "value": 196.25137347639,
          "unit": "gal"
        },
        "machinery": [
          {
            "name": "John Deere R Series R4030",
            "type": "machine",
            "serialNumber": "10071690",
            "brand": "John Deere"
          },
          {
            "name": "Sprayer",
            "type": "implement",
            "brand": "unknown"
          }
        ]
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [[[
          [-89.80434894561768,40.47791686563837],
          [-89.80756759643555,40.4757623387113],
          [-89.80746030807495,40.47302011353734],
          [-89.80475664138794,40.47070219301965],
          [-89.80080842971802,40.47068586935202],
          [-89.79797601699828,40.472709973879255],
          [-89.7978687286377,40.47569704893722],
          [-89.80117321014404,40.47808008455794],
          [-89.80434894561768,40.47791686563837]
        ]]]
      }
  }
}
```

  </TabItem>
  <TabItem value="harvested">

This is an example of a summary for a "harvested" operation

  ```json
{
    "id": "7b525b72-a8e7-4d34-80bb-9ea2dde87a09",
    "provider": "providerName",
    "fields": [
      "696b5df6-e401-4d13-bafe-3d2689723254"
    ],
    "fileFormat": "CN1",
    "fileName": "testFile.zip",
    "originalFile": "url",
    "downloadOriginalFile": "url",
    "rawGeojson": "url",
    "downloadRawGeojson": "url",
    "standardGeojson": "url",
    "downloadStandardGeojson": "url",
    "leafUserId": "286eeb50-8e85-4e33-9f2d-1b9dcf0e56d7",
    "apiOwnerUsername": "test",
    "summary": {
      "type": "Feature",
      "properties": {
        "totalDryMass": {
          "value": 69707.74072725822,
          "unit": "lb"
        },
        "dryVolume": {
          "avg": 0.10060462979191162,
          "min": 0.0006342037622996388,
          "max": 0.19444628348991,
          "unit": "bu"
        },
        "totalDryVolume": {
          "value": 1244.7810844153173,
          "unit": "bu"
        },
        "wetMassPerArea": {
          "avg": 11752.315810068158,
          "min": 87.79542055062868,
          "max": 40340.87999553387,
          "unit": "lb/ac"
        },
        "speed": {
          "avg": 4.926574796479164,
          "min": 2.430000066757202,
          "max": 6.389999866485596,
          "unit": "mi/hr"
        },
        "totalWetVolume": {
          "value": 1294.538978069886,
          "unit": "bu"
        },
        "originalOperationType": "Harvesting",
        "startTime": "2015-09-23T00:00:00Z",
        "totalDistance": {
          "value": 17978.417202127104,
          "unit": "ft"
        },
        "wetMass": {
          "avg": 5.859062698772619,
          "min": 0.03795335565182652,
          "max": 11.06340317250743,
          "unit": "lb"
        },
        "elevation": {
          "avg": 155.78382768932352,
          "min": 147.6,
          "max": 162.4,
          "unit": "ft"
        },
        "harvestMoisture": {
          "avg": 18.224961609957166,
          "min": 12.75,
          "max": 21.18,
          "unit": "percentage"
        },
        "dryVolumePerArea": {
          "avg": 201.7963353621763,
          "min": 1.467068855167438,
          "max": 687.8289538734305,
          "unit": "bu/ac"
        },
        "wetVolume": {
          "avg": 0.10462611962093962,
          "min": 0.0006777384937826164,
          "max": 0.19756077093763266,
          "unit": "bu"
        },
        "wetVolumePerArea": {
          "avg": 209.86278232264567,
          "min": 1.5677753669755121,
          "max": 720.3728570631048,
          "unit": "bu/ac"
        },
        "dryMassPerArea": {
          "avg": 11300.594780281874,
          "min": 82.15585588937653,
          "max": 38518.421416912104,
          "unit": "lb/ac"
        },
        "totalWetMass": {
          "value": 72494.18277191388,
          "unit": "lb"
        },
        "totalFuelUsed": {
          "value": 196.25137347639,
          "unit": "gal"
        },
        "varieties": [
          {
            "harvestMoisture": {
              "avg": 18.224961609957166,
              "min": 12.75,
              "max": 21.18,
              "unit": "percentage"
            },
            "wetMass": {
              "value": 72494.18277191388,
              "unit": "lb"
            },
            "wetMassPerArea": {
              "value": 2.904060481369501,
              "unit": "lb/ac"
            },
            "wetVolume": {
              "value": 1294.538978069886,
              "unit": "bu"
            },
            "area": {
              "value": 24963.041657357968,
              "unit": "m2"
            },
            "dryVolume": {
              "value": 1244.7810844153173,
              "unit": "bu"
            },
            "dryMassPerArea": {
              "value": 2.7924377839874155,
              "unit": "lb/ac"
            },
            "dryMass": {
              "value": 69707.74072725822,
              "unit": "lb"
            },
            "name": "Corn"
          }
        ],
        "originalOperationData": {
          "originalOperationType": "Harvesting"
        },
        "operationType": "harvested",
        "dryMass": {
          "avg": 5.6338592683470505,
          "min": 0.035515410688779774,
          "max": 10.88899187543496,
          "unit": "lb"
        },
        "endTime": "2015-09-24T00:36:55.8Z",
        "crop": [
          "corn"
        ],
        "totalArea": {
          "value": 24963.041657357968,
          "unit": "m2"
        },
        "machinery": [
          {
            "name": "Case IH X010 Series 7010",
            "type": "machine",
            "serialNumber": "8227260",
            "brand": "Case IH"
          },
          {
            "name": "Case IH Corn Head 15ft 6row",
            "type": "implement",
            "brand": "Case IH"
          }
        ]
      },
      "geometry": {
          "type": "MultiPolygon",
          "coordinates": [[[
              [-89.80434894561768,40.47791686563837],
              [-89.80756759643555,40.4757623387113],
              [-89.80746030807495,40.47302011353734],
              [-89.80475664138794,40.47070219301965],
              [-89.80080842971802,40.47068586935202],
              [-89.79797601699828,40.472709973879255],
              [-89.7978687286377,40.47569704893722],
              [-89.80117321014404,40.47808008455794],
              [-89.80434894561768,40.47791686563837]
          ]]]
      }
  }
}
```
  </TabItem>
  <TabItem value="tillage">

This is an example of a summary for a "tillage" operation

   ```json
{
  "id": "0d702772-3ff0-4031-a151-d111f2fb3b9c",
  "provider": "providerName",
  "fields": [
    "d9b35409-6014-446b-a552-07274f98a9a2"
  ],
  "fileFormat": "ISO11783",
  "fileName": "testFile.zip",
  "originalFile": "url",
  "downloadOriginalFile": "url",
  "rawGeojson": "url",
  "downloadRawGeojson": "url",
  "standardGeojson": "url",
  "downloadStandardGeojson": "url",
  "leafUserId": "577c611d-e526-4af5-bff7-263c58e6d1aa",
  "apiOwnerUsername": "test",
  "summary": {
    "type": "Feature",
    "properties": {
      "elevation": {
        "avg": 994.6466719525541,
        "min": 994.64662073,
        "max": 994.646672,
        "unit": "ft"
      },
      "tillageDepthActual": {
        "avg": 0,
        "min": 0,
        "max": 0,
        "unit": "in"
      },
      "originalOperationData": {},
      "startTime": "2016-09-13T20:33:14.786Z",
      "operationType": "tillage",
      "endTime": "2016-09-13T22:03:10.801Z",
      "totalDistance": {
        "value": 54476.663422289916,
        "unit": "ft"
      },
      "totalArea": {
        "value": 202441.90563950103,
        "unit": "m2"
      },
      "tillType": ["Closing Disk"],
      "tillageDepthTarget": {
        "avg": 6,
        "min": 6,
        "max": 6,
        "unit": "in"
      }
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[
        [-89.80434894561768,40.47791686563837],
        [-89.80756759643555,40.4757623387113],
        [-89.80746030807495,40.47302011353734],
        [-89.80475664138794,40.47070219301965],
        [-89.80080842971802,40.47068586935202],
        [-89.79797601699828,40.472709973879255],
        [-89.7978687286377,40.47569704893722],
        [-89.80117321014404,40.47808008455794],
        [-89.80434894561768,40.47791686563837]
      ]]]
    }
  }
}
```  
  </TabItem>
 </Tabs>


### Properties by Operation Type

Select the tab you want to see: "planted", "applied", "harvested", or "tillage".

<Tabs
  defaultValue="planted"
  values={
      [
        { label: 'Planted', value: 'planted', },
        { label: 'Applied', value: 'applied', },
        { label: 'Harvested', value: 'harvested', },
        { label: 'Tillage', value: 'tillage', },
      ]
   }>

  <TabItem value="planted">

  | key                   | presence | type                        | 
  |-----------------------|----------|-----------------------------|
  | crop                  | *        | string                      | 
  | seedRate              | *        | dict                        |
  | operationType         | *        | string "planted"            |
  | originalOperationType | **       | string                      |
  | totalArea             | *        | float                       |
  | elevation             | *        | dict                        |
  | varieties             | **       | dict                        |
  | seedRateTarget        | **       | dict                        |
  | seedDepth             | **       | dict                        |
  | machinery             | **       | list of machineInfo objects |
  | speed                 | **       | dict                        |
  | totalPlanted          | **       | int (number of seeds)       |
  | operationDescription  | **       | string                      |
  | downForce             | **       | dict                        |
  | singulation           | **       | dict                        |
  | totalFuelUsed         | **       | dict                        |

  \* = Always in response  
  \*\* = Usually in response but not required to pass tests



  </TabItem>

  <TabItem value="applied">

  | key                   | presence | type                        |
  |-----------------------|----------|-----------------------------|
  | appliedRate           | *        | dict                        |
  | operationType         | *        | string "applied"            |
  | originalOperationType | **       | string                      |
  | elevation             | *        | dict                        |
  | totalArea             | *        | float                       |
  | products              | *        | dict                        |
  | appliedRateTarget     | **       | dict                        |
  | machinery             | **       | list of machineInfo objects |
  | speed                 | **       | dict                        |
  | totalApplied          | **       | float                       |
  | operationDescription  | **       | string                      |
  | tankMix               | **       | boolean                     |
  | totalFuelUsed         | **       | dict                        |


  \* = Always in response  
  \*\* = Usually in response but not required to pass tests

  </TabItem>


  <TabItem value="harvested">


  | key                   | presence | type                        |
  |-----------------------|----------|-----------------------------|
  | elevation             | *        | dict                        |
  | harvestMoisture       | *        | dict                        |
  | operationType         | *        | string "harvested"          |
  | originalOperationType | **       | string                      |
  | totalArea             | *        | float                       |
  | wetMass               | *        | dict                        | 
  | wetMassPerArea        | *        | dict                        |
  | wetVolume             | *$       | dict                        |
  | wetVolumePerArea      | *$       | dict                        |
  | totalWetVolume        | *        | float                       |
  | totalWetMass          | *        | float                       |
  | crop                  | *        | string                      |
  | dryMass               | *        | dict                        |
  | dryMassPerArea        | *        | dict                        |
  | totalDryMass          | *        | dict                        |
  | dryVolume             | *        | dict                        |
  | dryVolumePerArea      | *        | dict                        |
  | totalDryVolume        | *        | dict                        |
  | speed                 | **       | dict                        |
  | varieties             | **       | dict                        |
  | machinery             | **       | list of machineInfo objects |
  | operationDescription  | **       | string                      |
  | totalFuelUsed         | **       | dict                        |

  \* = Always in response  
  \*\* = Usually in response but not required to pass tests  
    $ = Not available when the crop is *sugarcane*
  
  
  </TabItem>
  <TabItem value="tillage">


  | key                   | presence | type                        |
  |-----------------------|----------|-----------------------------|
  | elevation             | *        | dict                        |
  | operationType         | *        | string "tillage"            |
  | originalOperationType | **       | string                      |
  | totalArea             | *        | float                       |
  | tillageDepthTarget    | **       | float                       |
  | tillageDepthActual    | **       | float                       |
  | speed                 | **       | dict                        |
  | machinery             | **       | list of machineInfo objects |
  | operationDescription  | **       | string                      |
  | totalFuelUsed         | **       | dict                        |

  \* = Always in response  
  \*\* = Usually in response but not required to pass tests


  </TabItem>
  </Tabs>


## Standard Geojson

When the data is present in the original file, Leaf standardizes names and units
to create the standardGeojson.

Below we list all the properties in the standardGeojson.


### Summary Response Sample

Each operation file returns with a "standardgeojson" URL that allows you to download a full point dataset from the operation in a standardized geojson format. Below is an example of the format of each point in these files.

<Tabs
  defaultValue="planted"
  values={
      [
        { label: 'Planted', value: 'planted', },
        { label: 'Applied', value: 'applied', },
        { label: 'Harvested', value: 'harvested', },
        { label: 'Tillage', value: 'tillage', },
      ]
  }>

  <TabItem value="planted">

  ```json
  {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-74.83762110788625, 28.686604864693564]
    },
    "properties": {
        "distance": "float",
        "heading": "float",
        "speed": "float",
        "elevation": "float",
        "equipmentWidth": "float",
        "recordingStatus": "string",
        "machinery": ["string"],
        "sectionId" : "int",
        "timestamp": "string",
        "operationType": "planted",
        "originalOperationType": "name of the operation as returned by the provider",
        "crop": "string",
        "variety": "string",
        "area": "float",
        "seedRate": "int",
        "seedRateTarget": "int",
        "seedDepth": "float",
        "downForce": "float",
        "singulation": "float",
        "skips": "float",
        "doubles": "float",
        "fuelUsed": "float"
    }
  }
  ```

  </TabItem>
  <TabItem value="applied">

  ```json
  {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-74.83762110788625, 28.686604864693564]
    },
    "properties": {
        "distance": "float",
        "heading": "float",
        "speed": "float",
        "elevation": "float",
        "equipmentWidth": "float",
        "recordingStatus": "string",
        "machinery": ["string"],
        "sectionId" : "int",
        "timestamp": "string",
        "operationType": "applied",
        "originalOperationType": "name of the operation as returned by the provider",
        "crop": "string",
        "area": "float",
        "appliedRate": "float",
        "appliedRateTarget": "float",
        "fuelUsed": "float",      
        "products": [
        {
            "name": "AMS",
            "rate": {
                "value": 15
            }
        },
        {
            "name": "Counter",
            "rate": {
                "value": 20
            }
        },
        {
            "name": "Water",
            "rate": {
                "value": 9.727
                }
        }
        ]
    }
  }
  ```

  </TabItem>
  <TabItem value="harvested">

  ```json
  {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-74.83762110788625, 28.686604864693564]
    },
    "properties": {
        "distance": "float",
        "heading": "float",
        "speed": "float",
        "elevation": "float",
        "harvestMoisture": "float",
        "equipmentWidth": "float",
        "recordingStatus": "string",
        "machinery": ["string"],
        "sectionId" : "int",
        "timestamp": "string",
        "operationType": "harvested",
        "originalOperationType": "name of the operation as returned by the provider",
        "crop": "string",
        "variety": "string",
        "area": "float",
        "wetMass": "float",
        "wetVolume": "float",
        "wetMassPerArea": "float",
        "wetVolumePerArea": "float",
        "dryMass": "float",
        "dryVolume": "float",
        "dryMassPerArea": "float",
        "dryVolumePerArea": "float",
        "fuelUsed": "float"
    }
  }
  ```

  </TabItem>
  <TabItem value ="tillage">

   ```json
  {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-93.14995443980574, 41.67055240890354]
    },
    "properties": {
        "speed": "float",
        "heading": "float",
        "distance": "float",
        "tillageDepthTarget": "float",
        "tillType": ["string"],
        "recordingStatus": "string",
        "timestamp": "string",
        "operationType": "tillage",
        "originalOperationType": "name of the operation as returned by the provider",
        "equipmentWidth": "float",
        "elevation": "float",
        "area": "float",
        "fuelUsed": "float"
    }
   }
   ```
  </TabItem>
</Tabs>

### Properties


<Tabs
  defaultValue="planted"
  values={[
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
    { label: 'Tillage', value: 'tillage', },
  ]
}>

  <TabItem value="planted">

  | key                   | presence | type                        | example units        | description                                                                  |
  |-----------------------|----------|-----------------------------|----------------------|------------------------------------------------------------------------------|
  | coords                | *        | Point (x,y)                 | -                    | Point (x,y)                                                                  |
  | timestamp             | *        | string                      | -                    | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z        |
  | crop                  | *        | string                      | -                    | Crop type (normalized)                                                       |
  | area                  | *        | float                       | ft² or m²            | Area represented by point                                                    |
  | heading               | *        | float                       | degrees              | Heading of machine at point                                                  |
  | distance              | *        | float                       | ft or m              | Distance traveled since previous point                                       |
  | elevation             | *        | float                       | ft or m              | Distance to sea level                                                        |
  | operationType         | *        | string                      | -                    | string "planted"                                                             |
  | originalOperationType | **       | string                      | -                    | string                                                                       |
  | equipmentWidth        | *        | float                       | ft or m              | Width of implement                                                           |
  | recordingStatus       | **       | Boolean                     | -                    | Recording status of machine at point                                         |
  | seedRate              | *        | int                         | seeds/m² or seeds/ac | The rate of seeds planted at point                                           |
  | variety               | **       | string                      | -                    | The variety of seed being planted                                            |
  | speed                 | **       | float                       | ft/s or m/s          | Speed of machine at point                                                    |
  | sectionId             | **       | int                         | -                    | ID of implement sensor section                                               |
  | machinery             | **       | list of machineInfo objects | -                    | name of machine & implement                                                  |
  | seedRateTarget        | **       | int                         | seeds/m² or seeds/ac | The target rate of seeds to be planted at the point                          |
  | seedDepth             | **       | float                       | cm                   | The depth at which seeds were planted at point                               |
  | productIndex          | **       | int                         | -                    | Index of the applied product                                                 |
  | downForce             | **       | float                       | lbf                  | The weight detected by the down force sensor on each row that has one        |
  | singulation           | **       | float                       | %                    | The performance of each meter on the planter                                 |
  | xOffset               | **       | float                       | m                    | Vertical offset from the instrumentation sensor and the monitor GPS system   |
  | yOffset               | **       | float                       | m                    | Horizontal offset from the instrumentation sensor and the monitor GPS system |
  | fuelUsed              | **       | float                       | L or gal             | The fuel consumed                                                            |
  

  </TabItem>
  <TabItem value="applied">

  | key                   | presence | type                        | example units    | description                                                                  |
  |-----------------------|----------|-----------------------------|------------------|------------------------------------------------------------------------------|
  | coords                | *        | Point (x,y)                 | -                | Point (x,y)                                                                  |
  | distance              | *        | float                       | ft or m          | Distance traveled since previous point                                       |
  | heading               | *        | float                       | -                | Heading of machine at point                                                  |
  | elevation             | *        | float                       | m                | Distance to sea level                                                        |
  | area                  | *        | float                       | ft² or m²        | Area represented by point                                                    |
  | appliedRate           | *        | float                       | fl.oz/ac or L/m² | The amount of product being applied at point                                 |
  | recordingStatus       | * *      | Boolean                     | -                | Recording status of machine                                                  |
  | timestamp             | *        | string                      | -                | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z        |
  | operationType         | *        | string                      | -                | string "applied"                                                             |
  | originalOperationType | **       | string                      | -                | string                                                                       |
  | products              | *        | list of dicts               | -                | tank mix including products and ratio                                        |
  | equipmentWidth        | *        | float                       | ft or m          | Width of implement                                                           |
  | speed                 | **       | float                       | ft/s or m/s      | Speed of machine at point                                                    |
  | appliedRateTarget     | **       | float                       | fl.oz/ac or L/m² | The target amount of product to be applied at the point                      |
  | machinery             | **       | list of machineInfo objects | -                | Name of machine and implement                                                |
  | sectionId             | **       | int                         | -                | ID of implement sensor section                                               |
  | xOffset               | **       | float                       | m                | Vertical offset from the instrumentation sensor and the monitor GPS system   |
  | yOffset               | **       | float                       | m                | Horizontal offset from the instrumentation sensor and the monitor GPS system |
  | fuelUsed              | **       | float                       | L or gal         | The fuel consumed                                                            |

  </TabItem>
  <TabItem value="harvested">

  | key                   | presence | type                        | example units  | description                                                                  |
  |-----------------------|----------|-----------------------------|----------------|------------------------------------------------------------------------------|
  | coords                | *        | Point (x,y)                 | -              | Point x,y                                                                    |
  | timestamp             | *        | string                      | -              | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z        |
  | crop                  | *        | string                      | -              | Crop type (normalized)                                                       |
  | area                  | *        | float                       | ft² or m²      | Area represented by point                                                    |
  | distance              | *        | float                       | ft or m        | Distance traveled since previous point                                       |
  | elevation             | *        | float                       | ft or m        | Distance to sea level                                                        |
  | operationType         | *        | string                      | -              | string "harvested"                                                           |
  | originalOperationType | **       | string                      | -              | string                                                                       |
  | equipmentWidth        | *        | float                       | ft or m        | Width of implement                                                           |
  | recordingStatus       | **       | Boolean                     | -              | Recording status of machine                                                  |
  | harvestMoisture       | *        | float                       | %              | float                                                                        |
  | wetMass               | *        | float                       | lb or kg       | wet mass harvested in that point                                             |
  | wetMassPerArea        | *        | float                       | lb/ac or kg/ha | wet mass harvested in that point divided by area                             |
  | wetVolume             | *$       | float                       | bu or L        | wet volume harvested in that point                                           |
  | wetVolumePerArea      | *$       | float                       | bu/ac or L/ha  | wet volume harvested in that point divided by area                           |
  | variety               | **       | string                      | -              | The variety of seed being harvested                                          |
  | speed                 | **       | float                       | ft/s or m/s    | Speed of machine at point                                                    |
  | heading               | **       | float                       | degrees        | Heading of machine at point                                                  |
  | machinery             | **       | list of machineInfo objects | -              | name of machine & implement                                                  |
  | dryMass               | *        | float                       | lb or kg       | dry mass harvested in that point                                             |
  | dryMassPerArea        | *        | float                       | lb/ac or kg/ha | dry mass harvested in that point divided by area                             |
  | dryVolume             | *$       | float                       | bu or L        | dry volume harvested in that point                                           |
  | dryVolumePerArea      | *$       | float                       | bu/ac or L/ha  | dry volume harvested in that point divided by area                           |
  | sectionId             | **       | int                         | int            | ID of implement sensor section                                               |
  | cropFlow              | **       | float                       | lb/s           | Massic flow of the harvested crop                                            |
  | proteinPercentage     | **       | float                       | %              | Amount of protein content for the harvested product                          |
  | samplingInterval      | **       | float                       | s              | Delta time from the previous recorded feature                                |
  | xOffset               | **       | float                       | m              | Vertical offset from the instrumentation sensor and the monitor GPS system   |
  | yOffset               | **       | float                       | m              | Horizontal offset from the instrumentation sensor and the monitor GPS system |
  | fuelUsed              | **       | float                       | L or gal       | The fuel consumed                                                            |

  </TabItem>
   <TabItem value="tillage">

  | key                   | presence | type                        | example units    | description                                                                  |
  |-----------------------|----------|-----------------------------|------------------|------------------------------------------------------------------------------|
  | coords                | *        | Point (x,y)                 | -                | Point (x,y)                                                                  |
  | distance              | *        | float                       | ft or m          | Distance traveled since previous point                                       |
  | heading               | *        | float                       | -                | Heading of machine at point                                                  |
  | elevation             | *        | float                       | m                | Distance to sea level                                                        |
  | area                  | *        | float                       | ft² or m²        | Area represented by point                                                    |
  | recordingStatus       | **       | Boolean                     | -                | Recording status of machine                                                  |
  | timestamp             | *        | string                      | -                | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z        |
  | operationType         | *        | string                      | -                | string "tillage"                                                             |
  | originalOperationType | **       | string                      | -                | string                                                                       |
  | equipmentWidth        | *        | float                       | ft or m          | Width of implement                                                           |
  | tillageDepthTarget    | **       | float                       | fl.oz/ac or L/m² | The target depth                                                             |
  | speed                 | **       | float                       | ft/s or m/s      | Speed of machine at point                                                    |
  | tillageDepthActual    | **       | float                       | fl.oz/ac or L/m² | The actual depth                                                             |
  | machinery             | **       | list of machineInfo objects | -                | Name of machine and implement                                                |
  | sectionId             | **       | int                         | -                | ID of implement sensor section                                               |
  | xOffset               | **       | float                       | m                | Vertical offset from the instrumentation sensor and the monitor GPS system   |
  | yOffset               | **       | float                       | m                | Horizontal offset from the instrumentation sensor and the monitor GPS system |
  | fuelUsed              | **       | float                       | L or gal         | The fuel consumed                                                            |

  </TabItem>
</Tabs>

\* = Always in response  
\*\* = Usually in response but not required to pass tests  
$ = Not available when the crop is *sugarcane*

Despite the example units, Leaf's API will push through every unit, if the processed file contains the `required` (marked with *) properties.


### Valid points

The points in the standardGeoJSON are considered valid if all the following rules are true:

| property           | rule   |
|--------------------|--------|
| wetMass            | > 0.0  |
| wetMassPerArea     | > 0.0  |
| wetVolume          | > 0.0  |
| wetVolumePerArea   | > 0.0  |
| harvestMoisture    | > 0.0 and <100.0 |
| appliedRate        | > 0.0  |
| seedRate           | > 0.0  |
| tillageDepthActual | >= 0.0  |
| recordingStatus    | = "On" |

The API will automatically clean the invalid points when the [`cleanupStandardGeojson`][1] configuration is enabled.

### Images

Also, Leaf displays all the numerical properties across all operation types via a png file. Here's a sample response from a Leaf harvested file.

```json
[
  {
    "property": "area",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "wetMass",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "wetVolume",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "distance",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "wetVolumePerArea",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "equipmentWidth",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "wetMassPerArea",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "sectionId",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "elevation",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "harvestMoisture",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "heading",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "dryMass",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "dryMassPerArea",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "dryVolume",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  },
  {
    "property": "dryVolumePerArea",
    "ramp": {
        "0%": [200, 0, 0],
        "35%": [255, 40, 0],
        "45%": [255, 150, 0],
        "55%": [255, 240, 0],
        "65%": [0, 230, 0],
        "75%": [0, 190, 0],
        "100%": [0, 130, 0],
        "nv": [0, 0, 0, 0 ]
    },
    "url": "https://png-files-bucket-dev.s3.us-east-1.amazonaws.com/uuid.png"
  }
]
```

<!-- ### Operation Maps

Here is a sample Harvest Map you can get with Leaf

<img alt="Sample Harvest Map" src={useBaseUrl('img/sample_harvest_map.png')} width="200" /> -->

### Machine Files Units 

Here is an example of Units from the numerical properties of the Machine Files.


<Tabs defaultValue="harvested"
values={[
{ label: 'Planted', value: 'planted', }, 
{ label: 'Harvested', value: 'harvested', },
{ label: 'Applied', value: 'applied', },
{ label: 'Tillage', value: 'tillage', },
]
}>

  <TabItem value="applied">


```json
{
  "distance": "ft",
  "heading": "arcdeg",
  "speed": "mi/hr",
  "area": "m2",
  "appliedRate": "gal/ac",
  "appliedRateTarget": "gal/ac",
  "equipmentWidth": "ft",
  "elevation": "m"
}
```

</TabItem>
  <TabItem value="harvested">

```json
{
  "elevation": "ft",
  "area": "m2",
  "harvestMoisture": "percentage",
  "dryVolumePerArea": "bu/ac",
  "distance": "ft",
  "heading": "arcdeg",
  "dryVolume": "bu",
  "wetVolume": "bu",
  "wetVolumePerArea": "bu/ac",
  "dryMassPerArea": "lb/ac",
  "wetMassPerArea": "lb/ac",
  "speed": "mi/hr",
  "equipmentWidth": "ft",
  "dryMass": "lb",
  "wetMass": "lb"
}
```

  </TabItem>
  <TabItem value="planted">

```json
{
  "speed": "mi/hr",
  "distance": "ft",
  "heading": "arcdeg",
  "elevation": "ft",
  "seedRateTarget": "seeds/ac",
  "seedRate": "seeds/ac",
  "downForce": "lbf",
  "singulation": "prcnt",
  "equipmentWidth": "ft",
  "area": "m2"
}
```

  </TabItem>
  <TabItem value="tillage">

```json
{
  "distance": "ft",
  "equipmentWidth": "ft",
  "tillageDepthActual": "in",
  "tillageDepthTarget": "in",
  "elevation": "ft",
  "area": "m2"
}
```

  </TabItem>

</Tabs>
