---
title: Sample responses
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

This page shows and describes sample responses from Leaf API, along with a list 
of what properties you can expect for each type of data.


## Operation Summary

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
the resource, the `"sources"` key, that is a list of individual file ids.
If the operation was created by an upload on the `/batch` endpoint, the `"batchId"`
key will be added to the resource with the corresponding uuid.


### Sample Summary response

You can move through the three tabs below to see a sample of how Leaf returns
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
    "id": "uuid",
    "provider": "provider name",
    "leafUserId": "uuid",
    "apiOwnerUsername": "email",
    "sourceFiles": [],
    "status": "processed",
    "origin": "provider or Leaf",
    "createdTime": "2020-10-13T12:30:49",
    "fields": ["uuid"],
    "original": "abc.com",
    "rawGeojson": "abc.com",
    "standardGeojson": "abc.com",
    "zippedPNGs": "abc.com",
    "summary": {
        "type": "Feature",
        "properties": {
            "elevation": {
                "avg": 772.194895030409,
                "min": 767.21031609,
                "max": 775.38288827,
                "unit": "ft"
            },
            "totalPlanted": {
                "value": 3433593,
                "unit": "seeds"
            },
            "varieties": [
                {
                    "name": "variety1",
                    "rate": {
                        "avg": 138845.7555144055,
                        "min": 42265.36847555,
                        "max": 256056.74641452,
                        "unit": "seeds/ac",
                        "minTarget": 139996.95107651,
                        "maxTarget": 139996.95107651,
                        "avgTarget": 139996.95107651004
                    },
                    "area": {
                        "value": 100986.63117147879,
                        "unit": "m2"
                    },
                    "totalPlanted": {
                        "value": 3464790,
                        "unit": "seeds"
                    }
                }
            ],
            "totalDistance": {
                "value": 9058.425426796379,
                "unit": "ft"
            },
            "seedRate": {
                "avg": 137595.61319571827,
                "min": 42265.36847555,
                "max": 256056.74641452,
                "unit": "seeds/ac"
            },
            "crop": [
                "crop1"
            ],
            "totalArea": {
                "value": 100986.63117147879,
                "unit": "m2"
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
    "fields": ["uuid"],
    "original": "abc.com",
    "rawGeojson": "abc.com",
    "standardGeojson": "abc.com",
    "zippedPNGs": "abc.com",
    "summary": {
        "type": "Feature",
        "properties": {        
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
                    "name": "machine1", 
                    "serialNumber": "uuid",
                    "type": "machine"
                },
                {
                    "name": "implement1", 
                    "serialNumber": "uuid",
                    "type": "implement"
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
    "fields": ["uuid"],
    "original": "abc.com",
    "rawGeojson": "abc.com",
    "standardGeojson": "abc.com",
    "zippedPNGs": "abc.com",
    "summary": {
        "type": "Feature",
        "properties": {
            "elevation": {
                "avg": 784.1533510349966,
                "min": 779.62913693,
                "max": 787.06455821,
                "unit": "ft"
            },
            "harvestMoisture": {
                "avg": 12.888719743652945,
                "min": 1.0,
                "max": 15.95,
                "unit": "percentage"
            },
            "wetVolume": {
                "avg": 0.04798510370695135,
                "min": 5.321358838842975E-11,
                "max": 0.348360994170295,
                "unit": "bu"
            },
            "wetVolumePerArea": {
                "avg": 77.48316026098765,
                "min": 1.595E-7,
                "max": 1666.6666666666667,
                "unit": "bu/ac"
            },
            "totalWetMass": {
                "value": 116805.33944346363,
                "unit": "lb"
            },
            "wetMassPerArea": {
                "avg": 4648.989615659259,
                "min": 9.57E-6,
                "max": 100000.0,
                "unit": "lb/ac"
            },
            "totalWetVolume": {
                "value": 1946.75565739101,
                "unit": "bu"
            },
            "varieties": [
                {
                    "harvestMoisture": {
                        "avg": 12.888719743652945,
                        "min": 1.0,
                        "max": 15.95,
                        "unit": "percentage"
                    },
                    "wetMass": {
                        "value": 116805.33944346363,
                        "unit": "lb"
                    },
                    "wetMassPerArea": {
                        "value": 1.1487903524141723,
                        "unit": "lb/ac"
                    },
                    "wetVolume": {
                        "value": 1946.75565739101,
                        "unit": "bu"
                    },
                    "area": {
                        "value": 101676.81091506233,
                        "unit": "m2"
                    },
                    "name": "variety"
                }
            ],
            "startTime": "2016-09-19T16:45:51.002Z",
            "operationType": "harvested",
            "endTime": "2016-09-19T19:50:25.991Z",
            "totalDistance": {
                "value": 36481.33613821037,
                "unit": "ft"
            },
            "wetMass": {
                "avg": 2.8791062224170814,
                "min": 3.192815303305785E-9,
                "max": 20.9016596502177,
                "unit": "lb"
            },
            "crop": [
                "crop1"
            ],
            "totalArea": {
                "value": 101676.81091506233,
                "unit": "m2"
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
  <TabItem value="tillage">

This is an example of a summary for a "tillage" operation

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
    "fields": ["uuid"],
    "original": "abc.com",
    "rawGeojson": "abc.com",
    "standardGeojson": "abc.com",
    "zippedPNGs": "abc.com",
    "summary":{
      "type": "Feature",
      "properties": {
        "totalDistance": {
          "value": 32485.04528135762,
          "unit": "ft"
        },
        "speed": {
          "avg": 9.89216842105263,
          "min": 1.0079999999999998,
          "max": 13.6152,
          "unit": "km/hr"
        },
        "startTime": "2012-11-07T20:20:59.000+00:00",
        "endTime": "2012-11-07T21:48:38.274+00:00",
        "totalArea": {
          "value": 120718.37844703135,
          "unit": "m2"
        },
        "elevation": {
          "avg": 240.42123251182193,
          "min": 238.19576293945346,
          "max": 252.3117629394535,
          "unit": "m"
        },
        "crop": [],
        "operationType": "tillage",
        "tillageDepthTarget": {
          "avg": 5.999999999999999,
          "min": 5.999999999999999,
          "max": 5.999999999999999,
          "unit": "in"
        },
        "machinery": 
        [
          {
            "name": "8295",
            "type": "machine"
          },
          {
            "name": "16 row",
            "type": "implement"
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
 </Tabs>


### Properties

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


  | key             | presence       | type | 
  | -                    | -              | - |
  | crop                 | *  | string | 
  | seedRate             | *  | dict |
  | operationType        | *  | string "planted" |
  | totalArea            | *  | float |
  | elevation            | *  | dict |
  | variety              | ** | string |
  | seedRateTarget       | ** | dict |
  | seedDepth            | ** | dict |
  | machinery            | ** | list of machineInfo objects |
  | speed                | ** | dict |
  | totalPlanted         | ** | int (number of seeds) |
  | operationDescription | ** | string |
  
  \* = Always in response  
  \*\* = Usually in response but not required to pass tests



  </TabItem>

  <TabItem value="applied">

  | key | presence | type |
  | - | - | - |
  | appliedRate          | *  | dict |
  | operationType        | *  | string "applied" |
  | elevation            | *  | dict |
  | totalArea            | *  | float |
  | products             | *  | dict  |
  | appliedRateTarget    | ** | dict |
  | machinery            | ** | list of machineInfo objects |
  | speed                | ** | dict |
  | totalApplied         | ** | float |
  | operationDescription | ** | string |


  \* = Always in response  
  \*\* = Usually in response but not required to pass tests

  </TabItem>


  <TabItem value="harvested">


  | key | presence | type |
  | - | - | - |
  | elevation            | *  | dict |
  | harvestMoisture      | *  | dict |
  | operationType        | *  | string "harvested" |
  | totalArea            | *  | float |
  | wetMass              | *  | dict | 
  | wetMassPerArea       | *  | dict |
  | wetVolume            | *$  | dict |
  | wetVolumePerArea     | *$  | dict |
  | totalWetVolume       | *  | float |
  | totalWetMass         | *  | float |
  | crop                 | *  | string |
  | dryMass              | ** | dict |
  | dryMassPerArea       | ** | dict |
  | dryVolume            | ** | dict |
  | dryVolumePerArea     | ** | dict |
  | speed                | ** | dict |
  | variety              | ** | string |
  | machinery            | ** | list of machineInfo objects |
  | operationDescription | ** | string |

  \* = Always in response  
  \*\* = Usually in response but not required to pass tests
    \$ = Not available when the crop type is *sugarcane*

  </TabItem>
  <TabItem value="tillage">


  | key | presence | type |
  | - | - | - |
  | elevation            | *  | dict |
  | operationType        | *  | string "tillage" |
  | totalArea            | *  | float |
  | tillageDepthTarget   | *  | float |
  | tillageDepthActual   | ** | float |
  | speed                | ** | dict |
  | machinery            | ** | list of machineInfo objects |
  | operationDescription | ** | string |

  \* = Always in response  
  \*\* = Usually in response but not required to pass tests


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
        "crop": "string",
        "area": "float",
        "appliedRate": "float",
        "appliedRateTarget": "float",      
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
        "recordingStatus": "string",
        "timestamp": "string",
        "operationType": "tillage",
        "equipmentWidth": "float",
        "elevation": "float",
        "area": "float"
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
  | equipmentWidth  | * | float           | ft or m              | Width of implement |
  | recordingStatus | * | Boolean         | -                    | Recording status of machine at point |
  | seedRate        | * | int             | seeds/m² or seeds/ac | The rate of seeds planted at point |
  | variety         | ** | string          | -                    | The variety of seed being planted |
  | speed           | ** | float           | ft/s or m/s          | Speed of machine at point |
  | sectionId       | ** | int             | -                    | ID of implement sensor section |
  | machinery       | ** | list of machineInfo objects | -                    | name of machine & implement |
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
  | products          | * | list of dicts     | -                | tank mix including products and ratio |
  | equipmentWidth    | * | float             | ft or m          | Width of implement |
  | speed             | ** | float             | ft/s or m/s      | Speed of machine at point |
  | appliedRateTarget | ** | float             | fl.oz/ac or L/m² | The target amount of product to be applied at the point |
  | machinery         | ** | list of machineInfo objects   | -                | Name of machine and implement |
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
  | wetVolume         | *$ | float       | bu or L        | wet volume harvested in that point |
  | wetVolumePerArea  | *$ | float       | bu/ac or L/ha  | wet volume harvested in that point divided by area |
  | variety           | ** | string      | -              | The variety of seed being harvested |
  | speed             | ** | float       | ft/s or m/s    | Speed of machine at point |
  | heading           | ** | float       | degrees        | Heading of machine at point |
  | machinery         | ** | list of machineInfo objects        | -              | name of machine & implement |
  | dryMass           | ** | float       | lb or kg       | dry mass harvested in that point |
  | dryMassPerArea    | ** | float       | lb/ac or kg/ha | dry mass harvested in that point divided by area |
  | dryVolume         | **$ | float       | bu or L        | dry volume harvested in that point |
  | dryVolumePerArea  | **$ | float       | bu/ac or L/ha  | dry volume harvested in that point divided by area |
  | sectionId         | ** | int         | int            | ID of implement sensor section |

  </TabItem>
   <TabItem value="tillage">

  | key | presence | type | example units | description |
  | - | - | - | - | - |
  | coords             | *  | Point (x,y)       | -                | Point (x,y) |
  | distance           | *  | float             | ft or m          | Distance travelled since previous point |
  | heading            | *  | float             | -                | Heading of machine at point |
  | elevation          | *  | float             | m                | Distance to sea level |
  | area               | *  | float             | ft² or m²        | Area represented by point |
  | recordingStatus    | *  | Boolean           | -                | Recording status of machine |
  | timestamp          | *  | string            | -                | ISO 8601 date, complete and with Z. example: 2011-10-05T14:48:00.000Z |
  | operationType      | *  | string            | -                | string "tillage" |
  | equipmentWidth     | *  | float             | ft or m          | Width of implement |
  | tillageDepthTarget | *  | float             | fl.oz/ac or L/m² | The target depth |
  | speed              | ** | float             | ft/s or m/s      | Speed of machine at point |
  | tillageDepthActual | ** | float             | fl.oz/ac or L/m² | The actual depth |
  | machinery          | ** | list of machineInfo objects   | -                | Name of machine and implement |
  | sectionId          | ** | int               | -                | ID of implement sensor section |

  </TabItem>
</Tabs>

\* = Always in response  
\*\* = Usually in response but not required to pass tests
\$ = Not available when the crop type is *sugarcane*

Despite the example units, Leaf's API will push through every unit, if the processed file contains the `required` (marked with *) properties.

### Images

Also, Leaf displays all the numerical properties across all operation types via a png file. Here's a sample response from a Leaf harvested file.

```json
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
    }
]
```

<!-- ### Operation Maps

Here is a sample Harvest Map you can get with Leaf

<img alt="Sample Harvest Map" src={useBaseUrl('img/sample_harvest_map.png')} width="200" /> -->
