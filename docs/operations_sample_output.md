---
title: Sample responses
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

This page shows and describes sample responses from Leaf API, along with a list 
of what properties you can expect for each type of data.


## Operations File

Leaf returns operation file summaries in a standardized format. Summaries use 
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
the resource, the "sources" key, that is a list of individual file ids.


### Sample response

You can move through the three tabs below to see a sample of how Leaf returns
each of the operation types.

<Tabs
  defaultValue="harvested"
  values={[
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
  ]
}>

  <TabItem value="planted">

This is an example of a summary for a "planted" operation

  ```json
{
    "id": "uuid",
    "provider": "provider name",
    "leafUserId": "uuid",
    "apiOwnerUsername": "email",
    "sourceFiles": [],
    "status": "processed",
    "origin": "provider or Leaf",
    "createdTime": "2020-10-13T12:30:49",
    "processedTime": "2020-10-13T12:38:12",
    "lastUpdated": "2020-10-13T12:38:12",
    "fieldId": "uuid",
    "files": {
        "original": "abc.com",
        "rawGeojson": "abc.com",
        "standardGeojson": "abc.com",
        "zippedPNGs": "abc.com"
    },
    "summary": {
        "operationType": "planted",
        "crop": "soybeans",
        "totalArea": {
            "value": 1032183,
            "unit": "m2"
        },
        "startTime": "2015-09-23T20:29:01",
        "endTime": "2015-09-23T20:31:46",
        "elevation": {
            "min": 220.0,
            "max": 236.0,
            "avg": 234.0,
            "unit": "m"
        },
        "speed": {
            "min": 0.0,
            "max": 9.0,
            "avg": 7.0,
            "unit": "m/s"
        },
        "totalDistance": {
            "value": 12270.32,
            "unit": "m"
        },
        "machinery": [
            {
                "machineName": "machine1", 
                "machineId": "uuid",
                "implementName": "",
                "implementId": "uuid"
            },
            {
                "machineName": "machine2",
                "machineId": "uuid",
                "implementName": "",
                "implementId": "uuid"
            }
        ],       
        "varieties": [{
            "name": "var xx",
            "description": "",
            "totalPlanted": {
                "value": 14225476,
                "unit": "seeds"
            },
            "rate": {
                "min": 15.97,
                "max": 35.12,
                "avg": 28.32,
                "minTarget": 15.5,
                "maxTarget": 35.5,
                "avgTarget": 29.0,
                "unit": "seeds/m2"
            },
            "seedDepth": {
                "min": 20.0,
                "max": 26.0,
                "avg": 24.0,
                "unit": "cm or in"
            },   
            "area": {
                "value": 502312,
                "unit": "m2"
            }
        },
        {
            "name": "var yy",
            "description": "",
            "totalPlanted": {
                "value": 14825791,
                "unit": "seeds"
            },       
            "rate": {
                "min": 14.23,
                "max": 36.10,
                "avg": 27.98,
                "minTarget": 15.5,
                "maxTarget": 35.5,
                "avgTarget": 29.0,
                "unit": "seeds/m2"
            },
            "seedDepth": {
                "min": 20.0,
                "max": 26.0,
                "avg": 24.0,
                "unit": "cm or in"
            },
            "area": {
                "value": 529871,
                "unit": "m2"
            }
        }]
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
  ```
  </TabItem>
  <TabItem value="applied">

This is an example of a summary for an "applied" operation

  ```json
{
    "id": "uuid",
    "provider": "provider name",
    "leafUserId": "uuid",
    "apiOwnerUsername": "email",
    "sourceFiles": [],
    "status": "processed",
    "origin": "provider or Leaf",
    "createdTime": "2020-10-13T20:28:31",
    "processedTime": "2020-10-13T20:39:03",
    "lastUpdated": "2020-10-13T20:39:03",
    "fieldId": "uuid",
    "files": {
        "original": "abc.com",
        "rawGeojson": "abc.com",
        "standardGeojson": "abc.com",
        "zippedPNGs": "abc.com"
    },
    "summary": {
        "operationType": "applied",
        "crop": "soybeans",
        "totalArea": {
            "value": 1032183,
            "unit": "m2"
        },
        "startTime": "2015-11-23T20:29:01",
        "endTime": "2015-11-23T20:31:46",
        "elevation": {
            "min": 220.0,
            "max": 236.0,
            "avg": 234.0,
            "unit": "m"
        },
        "speed": {
            "min": 0.0,
            "max": 9.0,
            "avg": 7.0,
            "unit": "m/s"
        },
        "totalDistance": {
            "value": 12270.32,
            "unit": "m"
        },
        "machinery": [
            {
                "machineName": "machine1", 
                "machineId": "uuid",
                "implementName": "",
                "implementId": "uuid"
            },
            {
                "machineName": "machine2",
                "machineId": "uuid",
                "implementName": "",
                "implementId": "uuid"
            }
        ],      
        "products": [{
            "name": "28-0-0 UAN",
            "description": "",
            "totalApplied": {
                "value": 7208258,
                "unit": "gal"
            },
            "rate": {
                "min": 13.32,
                "max": 15.11,
                "avg": 14.10,
                "minTarget": 13.5,
                "maxTarget": 15.5,
                "avgTarget": 14.3,                
                "unit": "gal/m2"
            },
            "area": {
                "value": 511224,
                "unit": "m2"
            }
        },
        {
            "name": "Agrotain Plus",
            "description": "",
            "totalApplied": {
                "value": 570478,
                "unit": "lb"
            },    
            "rate": {
                "min": 1.1, 
                "max": 1.3,
                "avg": 1.23,   
                "minTarget": 0.9,
                "maxTarget": 1.5,
                "avgTarget": 1.3,                             
                "unit": "lb/m2"
            },
            "area": {
                "value": 520714,
                "unit": "m2"
            }
        }]
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
  ```
  </TabItem>
  <TabItem value="harvested">

This is an example of a summary for a "harvested" operation

  ```json
{
    "id": "uuid",
    "provider": "provider name",
    "leafUserId": "uuid",
    "apiOwnerUsername": "email",
    "sourceFiles": [],
    "status": "processed",
    "origin": "provider or Leaf",
    "createdTime": "2020-10-13T20:19:01",
    "processedTime": "2020-10-13T21:25:53",
    "lastUpdated": "2020-10-13T21:25:53",
    "fieldId": "uuid",
    "files": {
        "original": "abc.com",
        "rawGeojson": "abc.com",
        "standardGeojson": "abc.com",
        "zippedPNGs": "abc.com"
    },
    "summary": {
        "operationType": "harvested",
        "crop": "soybeans",
        "totalArea": {
            "value": 1032183,
            "unit": "m2"
        },
        "startTime": "2015-12-23T20:29:01",
        "endTime": "2015-12-29T20:31:46",
        "elevation": {
            "min": 220.0,
            "max": 236.0,
            "avg": 234.0,
            "unit": "m"
        },
        "speed": {
            "min": 0.0,
            "max": 3.1,
            "avg": 4.1,
            "unit": "m/s"
        },
        "totalDistance": {
            "value": 12270.32,
            "unit": "m"
        },
        "machinery": [
            {
                "machineName": "machine1", 
                "machineId": "uuid",
                "implementName": "",
                "implementId": "uuid"
            },
            {
                "machineName": "machine2",
                "machineId": "uuid",
                "implementName": "",
                "implementId": "uuid"
            }
        ],       
        "varieties": [{
            "name": "var xx",
            "description": "",
            "wetMass": {
                "value": 238907,
                "unit": "kg"
            },
            "wetVolume": {
                "value": 123456,
                "unit": "liters"
            },
            "wetMassPerArea": {
                "value": 2.57908,
                "unit": "kg/m2"
            },       
            "wetVolumePerArea": {
                "value": 3.23456,
                "unit": "liters/m2"
            },      
            "dryMassPerArea": {
                "value": 2.5,
                "unit": "kg/m2"
            },  
            "dryVolumePerArea": {
                "value": 2.7,
                "unit": "l/m2"
            },                        
            "harvestMoisture": {
                "min": 15.0,
                "max": 22.1,
                "avg": 18.2,
                "unit": "%"
            },   
            "dryMass": {
                "value": 238907,
                "unit": "kg"
            },
            "dryVolume": {
                "value": 123456,
                "unit": "liters"
            },
            "area": {
                "value": 502312,
                "unit": "m2"
            }
        },
        {
            "name": "var yy",
            "description": "",
            "wetMass": {
                "value": 257908,
                "unit": "kg"
            },       
            "wetVolume": {
                "value": 123456,
                "unit": "liters"
            },
            "wetMassPerArea": {
                "value": 2.57908,
                "unit": "kg/m2"
            },       
            "wetVolumePerArea": {
                "value": 3.23456,
                "unit": "liters/m2"
            },            
            "harvestMoisture": {
                "min": 15.0,
                "max": 22.1,
                "avg": 18.2,
                "unit": "%"
            },
            "dryMass": {
                "value": 257908,
                "unit": "kg"
            },  
            "dryVolume": {
                "value": 123456,
                "unit": "liters"
            },
            "dryMassPerArea": {
                "value": 2.5,
                "unit": "kg/m2"
            },  
            "dryVolumePerArea": {
                "value": 2.7,
                "unit": "l/m2"
            },
            "area": {
                "value": 529871,
                "unit": "m2"
            }
        }]
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
  ```
  </TabItem>
</Tabs>


### Properties

Select the tab you want to see "planted", "applied" or "harvested"

<Tabs
  defaultValue="planted"
  values={[
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
  ]
}>

  <TabItem value="planted">


  | key             | presence       | type | 
  | -               | -              | - |
  | crop            | *  | string | 
  | seedRate        | *  | dict |
  | operationType   | *  | string "planted" |
  | totalArea       | *  | int |
  | elevation       | *  | dict |
  | variety         | ** | string |
  | seedRateTarget  | ** | dict |
  | seedDepth       | ** | dict |
  | machinery       | ** | dict |
  | speed           | ** | dict |
  | totalPlanted    | ** | int (number of seeds) |
  
  \* = Always in response  
  \*\* = Usually in response but not required to pass tests

[Here][sample_summary] you can see a sample summary as response for an operation file


  </TabItem>

  <TabItem value="applied">

  | key | presence | type |
  | - | - | - |
  | appliedRate         | *  | dict |
  | operationType       | *  | string "applied" |
  | elevation           | *  | dict |
  | totalArea           | *  | int |
  | products            | *  | dict  |
  | appliedRateTarget   | ** | dict |
  | machinery           | ** | dict |
  | speed               | ** | dict |
  | totalApplied        | ** | float |


  \* = Always in response  
  \*\* = Usually in response but not required to pass tests

  [Here][sample_summary] you can see a sample summary as response for an operation file


  </TabItem>


  <TabItem value="harvested">


  | key | presence | type |
  | - | - | - |
  | elevation         | *  | dict |
  | harvestMoisture   | *  | dict |
  | operationType     | *  | string "harvested" |
  | totalArea         | *  | int |
  | wetMass           | *  | dict | 
  | wetMassPerArea    | *  | dict |
  | wetVolume         | *  | dict |
  | wetVolumePerArea  | *  | dict |
  | totalWetVolume    | *  | float |
  | totalWetMass      | *  | float |
  | crop              | *  | string |
  | dryMass           | ** | dict |
  | dryMassPerArea    | ** | dict |
  | dryVolume         | ** | dict |
  | dryVolumePerArea  | ** | dict |
  | speed             | ** | dict |
  | variety           | ** | string |
  | machinery         | ** | dict |

  \* = Always in response  
  \*\* = Usually in response but not required to pass tests

  [Here][sample_summary] you can see a sample summary as response for an operation file



  </TabItem>
</Tabs>


## Standard Geojson

When the data is present in the original file, Leaf standardizes names and units
to create the standardGeojson.

Below we list all the properties in the standardGeojson.


### Sample Response

Each operation file returns with a "standardgeojson" URL that allows you to download a full point dataset from the operation in a standardized geojson format. Below is an example of the format of each point in these files.

<Tabs
  defaultValue="planted"
  values={[
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvested', value: 'harvested', },
  ]
}>
  
  <TabItem value="planted">

  ```json
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": 
      [
        -74.83762110788625,
        28.686604864693564
      ]
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
      "crop": "string",
      "variety": "string",
      "area": "float",
      "seedRate": "int",
      "seedRateTarget": "int",
      "seedDepth": "float",
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
      "coordinates": 
      [
        -74.83762110788625,
        28.686604864693564
      ]
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
      "crop": "string",
      "area": "float",
      "products": {
        "type": "string",
        "description": "string"
      },
      "appliedRate": "float",
      "appliedRateTarget": "float",
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
      "coordinates": 
      [
        -74.83762110788625,
        28.686604864693564
      ]
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
      "dryVolumePerArea": "float"
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
  ]
}>

  <TabItem value="planted">

  | key | presence | type | example units | description |
  | - | - | - | - | - |
  | coords          | * | Point (x,y)     | -                    | Point (x,y) |
  | timestamp       | * | string          | -                    | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z |
  | crop            | * | string          | -                    | Crop type (normalized) |
  | area            | * | float           | ft² or m²            | Area represented by point |
  | heading         | * | float           | degrees              | Heading of machine at point |
  | distance        | * | float           | ft or m              | Distance travelled since previous point |
  | elevation       | * | float           | ft or m              | Distance to sea level |
  | operationType   | * | string          | -                    | string "planted" |
  | equipmentWidth  | * | int             | ft or m              | Width of implement |
  | recordingStatus | * | Boolean         | -                    | Recording status of machine at point |
  | seedRate        | * | int             | seeds/m² or seeds/ac | The rate of seeds planted at point |
  | variety         | ** | string          | -                    | The variety of seed being planted |
  | speed           | ** | float           | ft/s or m/s          | Speed of machine at point |
  | sectionId       | ** | int             | -                    | ID of implement sensor section |
  | machinery       | ** | list of strings | -                    | name of machine & implement |
  | seedRateTarget  | ** | int             | seeds/m² or seeds/ac | The target rate of seeds to be planted at the point |
  | seedDepth       | ** | float           | cm                   | The depth at which seeds were planted at point |

  </TabItem>

  <TabItem value="applied">

  | key | presence | type | example units | description |
  | - | - | - | - | - |
  | coords            | * | Point (x,y)       | -                | Point (x,y) |
  | distance          | * | float             | ft or m          | Distance travelled since previous point |
  | heading           | * | float             | -                | Heading of machine at point |
  | elevation         | * | float             | m                | Distance to sea level |
  | area              | * | float             | ft² or m²        | Area represented by point |
  | appliedRate       | * | float             | fl.oz/ac or L/m² | The amount of product being applied at point |
  | recordingStatus   | * | Boolean           | -                | Recording status of machine |
  | timestamp         | * | string            | -                | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z |
  | operationType     | * | string            | -                | string "applied" |
  | products          | * | dict              | -                | tank mix including products and ratio |
  | equipmentWidth    | * | int               | ft or m          | Width of implement |
  | speed             | ** | float             | ft/s or m/s      | Speed of machine at point |
  | appliedRateTarget | ** | float             | fl.oz/ac or L/m² | The target amount of product to be applied at the point |
  | machinery         | ** | list of strings   | -                | Name of machine and implement |
  | sectionId         | ** | int               | -                | ID of implement sensor section |


  </TabItem>

  <TabItem value="harvested">

  | key | presence | type | example units | description |
  | - | - | - | - | - |
  | coords            | * | Point (x,y) | -              | Point x,y |
  | timestamp         | * | string      | -              | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z |
  | crop              | * | string      | -              | Crop type (normalized) |
  | area              | * | float       | ft² or m²      | Area represented by point |
  | distance          | * | float       | ft or m        | Distance travelled since previous point |
  | elevation         | * | float       | ft or m        | Distance to sea level |
  | operationType     | * | string      | -              | string "harvested" |
  | equipmentWidth    | * | float       | ft or m        | Width of implement |
  | recordingStatus   | * | Boolean     | -              | Recording status of machine |
  | harvestMoisture   | * | float       | % | float      | % moisture of harvested crop |
  | wetMass           | * | float       | lb or kg       | wet mass harvested in that point |
  | wetMassPerArea    | * | float       | lb/ac or kg/ha | wet mass harvested in that point divided by area |
  | wetVolume         | * | float       | bu or L        | wet volume harvested in that point |
  | wetVolumePerArea  | * | float       | bu/ac or L/ha  | wet volume harvested in that point divided by area |
  | variety           | ** | string      | -              | The variety of seed being harvested |
  | speed             | ** | float       | ft/s or m/s    | Speed of machine at point |
  | heading           | ** | float       | degrees        | Heading of machine at point |
  | machinery         | ** | list        | -              | name of machine & implement |
  | dryMass           | ** | float       | lb or kg       | dry mass harvested in that point |
  | dryMassPerArea    | ** | float       | lb/ac or kg/ha | dry mass harvested in that point divided by area |
  | dryVolume         | ** | float       | bu or L        | dry volume harvested in that point |
  | dryVolumePerArea  | ** | float       | bu/ac or L/ha  | dry volume harvested in that point divided by area |
  | sectionId         | ** | int         | int            | ID of implement sensor section |

  </TabItem>
</Tabs>

\* = Always in response  
\*\* = Usually in response but not required to pass tests




<!-- ### Operation Maps

Here is a sample Harvest Map you can get with Leaf

<img alt="Sample Harvest Map" src={useBaseUrl('img/sample_harvest_map.png')} width="200" /> -->


