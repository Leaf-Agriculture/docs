---
title: Sample responses
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

This page shows and describes sample responses from Leaf API, along with a list 
of what properties you can expect for each type of data.

## File Summary
The file summary is available in the `/files` endpoint (`summary` property) or directly in the `/file/{id}/summary` endpoint.

### Sample File response

The `summary` property content is describe in the Sample File Summary response.
```json
{
    "id":"uuid",
    "provider":"provider name",
    "fields":[],
    "sizeInBytes":4426,
    "originalFile":"abc.com",
    "rawGeojson":"abc.com",
    "standardGeojson":"abc.com",
    "zippedPNGs":"abc.com",
    "leafUserId":"uuid",
    "apiOwnerUsername":"email",
    "summary":{},
    "sourceFiles":[],
    "status":"processed",
    "origin":"provider or Leaf",
    "createdTime":"2020-09-19T11:25:26.373Z"
}
```

### Sample File Summary response

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

This is an example of a summary for a `planted` operation

```json
{
    "type": "Feature",
    "properties": {
        "operationType": "planted",
        "totalArea": 211298.68845022016,
        "totalDistance": 1793508.95051323,
        "crop": [
            "soybeans"
        ],
        "appliedRate": {
            "average": 152235.69362161282,
            "standardDeviation": 1446.4547060388043,
            "min": 148920,
            "max": 155550
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
```

  </TabItem>
  <TabItem value="applied">

This is an example of a summary for an `applied` operation

```json
{
    "type": "Feature",
    "properties": {
        "operationType": "applied",
        "totalArea": 98.11548521943185,
        "totalDistance": 923.1952198163497,
        "elevation": {
            "average": 3579.098245614035,
            "standardDeviation": 0.24458107805320856,
            "min": 3578.4,
            "max": 3579.4
        },
        "speed": {
            "average": 5.5215025133731075,
            "standardDeviation": 0.9140115076581806,
            "min": 0.46975645422935486,
            "max": 5.9949870109558105
        },
        "varieties": [
            "28-0-0 uan @ 15 gal/ac;agrotain plus @ 1.2 lb/ac"
        ],
        "appliedRate": {
            "average": 15.313431449583275,
            "standardDeviation": 0.784159426410524,
            "min": 13.699999835692575,
            "max": 17.240000758669623
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
```

  </TabItem>
  <TabItem value="harvested">

This is an example of a summary for a `harvested` operation

```json
{
    "type": "Feature",
    "properties": {
        "operationType": "harvested",
        "totalArea": 131638.75702051684,
        "totalDistance": 19194.943013290438,
        "crop": [
            "corn"
        ],
        "elevation": {
            "average": 997.3065734135084,
            "standardDeviation": 0.007117242229043312,
            "min": 997.11987092,
            "max": 997.31344047
        },
        "yieldVolume": {
            "average": 146.87739844750854,
            "standardDeviation": 1.4224859211087542,
            "min": 143.61394414,
            "max": 150.38259505
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
```
  </TabItem>
  <TabItem value="tillage">

This is an example of a summary for a `tillage` operation

```json
{
    "type": "Feature",
    "properties": {
        "operationType": "tillage",
        "totalArea": {
            "value": 6594.502815780667,
            "unit": "m2"
        },
        "totalDistance": {
            "value": 1774.5659387950793,
            "unit": "ft"
        },
        "speed": {
            "avg": 3.0622076624084937,
            "min": 1.327,
            "max": 3.076172333,
            "unit": "m/sec"
        },
        "startTime": "2016-09-13T20:33:13.982+00:00",
        "endTime": "2016-09-13T20:36:10.393+00:00",
        "elevation": {
            "avg": 303.16601516492074,
            "min": 303.166,
            "max": 303.166015625,
            "unit": "m"
        },
        "tillageDepthTarget": {
            "avg": 152.4,
            "min": 152.4,
            "max": 152.4,
            "unit": "mm"
        },
        "machinery": [
            {
                "name": "machine1",
                "type": "machine",
                "serialNumber": "serial",
                "brand": "unknown"
            },
            {
                "name": "implement1",
                "type": "implement",
                "brand": "brand"
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
```  
  </TabItem>
 </Tabs>

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

This is an example of a summary for a `planted` operation

  ```json
{
    "type": "Feature",
    "properties": {
        "totalDistance": {
            "value": 57358.032123869874,
            "unit": "ft"
        },
        "startTime": "2017-10-16T13:44:18.232+00:00",
        "endTime": "2017-10-16T13:48:51.620+00:00",
        "totalArea": {
            "value": 13321.838881812788,
            "unit": "m2"
        },
        "elevation": {
            "avg": 977.0246474907251,
            "min": 972.03542784,
            "max": 984.38861026,
            "unit": "ft"
        },
        "crop": [
            "corn"
        ],
        "operationType": "planted",
        "seedRate": {
            "avg": 36299.73813341886,
            "min": 0,
            "max": 40040,
            "unit": "seeds/ac"
        },
        "totalPlanted": {
            "value": 119494,
            "unit": "seeds"
        },
        "varieties": [
            {
                "name": "variety1",
                "rate": {
                    "avg": 36299.73813341886,
                    "min": 0,
                    "max": 40040,
                    "unit": "seeds/ac",
                    "minTarget": 36000,
                    "maxTarget": 36000,
                    "avgTarget": 36000
                },
                "area": {
                    "value": 13321.838881812788,
                    "unit": "m2"
                },
                "totalPlanted": {
                    "value": 119494,
                    "unit": "seeds"
                }
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
```

  </TabItem>
  <TabItem value="applied">

This is an example of a summary for an `applied` operation

  ```json
{
    "type": "Feature",
    "properties": {
        "totalDistance": {
            "value": 18438.707685163776,
            "unit": "ft"
        },
        "speed": {
            "avg": 10.663143473019328,
            "min": 2.8856468200683594,
            "max": 11.497848510742188,
            "unit": "mi/hr"
        },
        "startTime": "2019-04-29T00:24:53.085+00:00",
        "endTime": "2019-04-29T00:52:19.331+00:00",
        "totalArea": {
            "value": 122599.17343819344,
            "unit": "m2"
        },
        "elevation": {
            "avg": 3577.9149279050043,
            "min": 3576.9,
            "max": 3579.3,
            "unit": "ft"
        },
        "products": [
            {
                "name": "Agrotain Advanced",
                "rate": {
                    "unit": "gal/ac",
                    "value": 2.5
                },
                "totalApplied": {
                    "value": 75.73698585115766,
                    "unit": "gal"
                },
                "area": {
                    "value": 122599.17343819344,
                    "unit": "m2"
                }
            },
            {
                "name": "Carrier",
                "rate": {
                    "unit": "gal/ac",
                    "value": 11.9609375
                },
                "totalApplied": {
                    "value": 362.3541416816324,
                    "unit": "gal"
                },
                "area": {
                    "value": 122599.17343819344,
                    "unit": "m2"
                }
            },
            {
                "name": "28-0-0 UAN",
                "rate": {
                    "unit": "lb/ac",
                    "value": 160
                },
                "totalApplied": {
                    "value": 4847.16709447409,
                    "unit": "lb"
                },
                "area": {
                    "value": 122599.17343819344,
                    "unit": "m2"
                }
            }
        ],
        "crop": [],
        "operationType": "applied",
        "appliedRate": {
            "avg": 15.746140809254529,
            "min": 4.499999771231767,
            "max": 328.4000097549022,
            "unit": "gal/ac"
        },
        "totalApplied": {
            "value": 477,
            "unit": "gal"
        },
        "machinery": [
            {
                "name": "machine1",
                "type": "implement"
            },
            {
                "name": "machine2",
                "type": "machine",
                "serialNumber": "uuid"
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
```

  </TabItem>
  <TabItem value="harvested">

This is an example of a summary for a `harvested` operation

  ```json
{
    "type": "Feature",
    "properties": {
        "totalDistance": {
            "value": 27394.78562568333,
            "unit": "ft"
        },
        "startTime": "2017-10-27T08:59:58.745+00:00",
        "endTime": "2017-10-27T09:40:32.915+00:00",
        "totalArea": {
            "value": 76335.46255179477,
            "unit": "m2"
        },
        "elevation": {
            "avg": 997.30687879,
            "min": 997.30687879,
            "max": 997.30687879,
            "unit": "ft"
        },
        "crop": [
            "corn"
        ],
        "operationType": "harvested",
        "wetMass": {
            "avg": 7.15352037886247,
            "min": 0,
            "max": 14.634439304317173,
            "unit": "lb"
        },
        "totalWetMass": {
            "value": 160668.06770924715,
            "unit": "lb"
        },
        "wetMassPerArea": {
            "avg": 8517.674223072148,
            "min": 0,
            "max": 67224.74050786,
            "unit": "lb/ac"
        },
        "wetVolume": {
            "avg": 0.1277414353368298,
            "min": 0,
            "max": 0.26132927329137806,
            "unit": "bu"
        },
        "totalWetVolume": {
            "value": 2869.072637665174,
            "unit": "bu"
        },
        "wetVolumePerArea": {
            "avg": 152.10132541200264,
            "min": 0,
            "max": 1200.4417947832142,
            "unit": "bu/ac"
        },
        "harvestMoisture": {
            "avg": 16.952365983971504,
            "min": 3.11,
            "max": 18.99,
            "unit": "percentage"
        },
        "varieties": [
            {
                "harvestMoisture": {
                    "avg": 16.952365983971504,
                    "min": 3.11,
                    "max": 18.99,
                    "unit": "percentage"
                },
                "wetMass": {
                    "value": 160668.06770924715,
                    "unit": "lb"
                },
                "wetMassPerArea": {
                    "value": 2.104763138105457,
                    "unit": "lb/ac"
                },
                "wetVolume": {
                    "value": 2869.072637665174,
                    "unit": "bu"
                },
                "area": {
                    "value": 76335.46255179477,
                    "unit": "m2"
                },
                "name": "variety"
            },
            {
                "harvestMoisture": {
                    "avg": 16.952365983971504,
                    "min": 3.11,
                    "max": 18.99,
                    "unit": "percentage"
                },
                "wetMass": {
                    "value": 160668.06770924715,
                    "unit": "lb"
                },
                "wetMassPerArea": {
                    "value": 2.104763138105457,
                    "unit": "lb/ac"
                },
                "wetVolume": {
                    "value": 2869.072637665174,
                    "unit": "bu"
                },
                "area": {
                    "value": 76335.46255179477,
                    "unit": "m2"
                },
                "name": "variety"
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
```
  </TabItem>
  <TabItem value="tillage">

This is an example of a summary for a `tillage` operation

   ```json
{
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
        "machinery": [
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
```  
  </TabItem>
 </Tabs>


### Properties

Select the tab you want to see: `planted`, `applied`, `harvested`, or `tillage`.

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
  | -               | -              | - |
  | crop            | *  | list of string | 
  | seedRate        | *  | dict |
  | operationType   | *  | string `planted` |
  | totalArea       | *  | dict |
  | elevation       | *  | dict |
  | totalDistance   | *  | dict |
  | varieties       | ** | list of varietyInfo objects |
  | seedRateTarget  | ** | dict |
  | seedDepth       | ** | dict |
  | machinery       | ** | list of machineInfo objects |
  | speed           | ** | dict |
  | totalPlanted    | ** | dict (number of seeds) |

  
  \* = Always in response  
  \*\* = Usually in response but not required to pass tests



  </TabItem>

  <TabItem value="applied">

  | key | presence | type |
  | - | - | - |
  | appliedRate         | *  | dict |
  | operationType       | *  | string `applied` |
  | elevation           | *  | dict |
  | totalDistance       | *  | dict |
  | totalArea           | *  | dict |
  | products            | *  | list of productInfo objects  |
  | crop                | * | list of string |
  | appliedRateTarget   | ** | dict |
  | machinery           | ** | list of machineInfo objects |
  | speed               | ** | dict |
  | totalApplied        | ** | dict |



  \* = Always in response  
  \*\* = Usually in response but not required to pass tests

  </TabItem>


  <TabItem value="harvested">


  | key | presence | type |
  | - | - | - |
  | elevation         | *  | dict |
  | totalDistance     | *  | dict |
  | harvestMoisture   | *  | dict |
  | operationType     | *  | string `harvested` |
  | totalArea         | *  | dict |
  | wetMass           | *  | dict | 
  | wetMassPerArea    | *  | dict |
  | wetVolume         | *  | dict |
  | wetVolumePerArea  | *  | dict |
  | totalWetVolume    | *  | dict |
  | totalWetMass      | *  | dict |
  | crop              | *  | list of string |
  | dryMass           | ** | dict |
  | dryMassPerArea    | ** | dict |
  | dryVolume         | ** | dict |
  | dryVolumePerArea  | ** | dict |
  | speed             | ** | dict |
  | varieties         | ** | list of varietyInfo objects |
  | machinery         | ** | list of machineInfo objects |

  \* = Always in response  
  \*\* = Usually in response but not required to pass tests



  </TabItem>
  <TabItem value="tillage">


  | key | presence | type |
  | - | - | - |
  | elevation         | *  | dict |
  | totalDistance     | *  | dict |
  | operationType     | *  | string `tillage` |
  | totalArea         | *  | dict |
  | crop              | *  | list of string |
  | tillageDepthTarget| *  | dict |
  | tillageDepthActual| ** | float |
  | speed             | ** | dict |
  | machinery         | ** | list of machineInfo objects |


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
  | wetVolume         | * | float       | bu or L        | wet volume harvested in that point |
  | wetVolumePerArea  | * | float       | bu/ac or L/ha  | wet volume harvested in that point divided by area |
  | variety           | ** | string      | -              | The variety of seed being harvested |
  | speed             | ** | float       | ft/s or m/s    | Speed of machine at point |
  | heading           | ** | float       | degrees        | Heading of machine at point |
  | machinery         | ** | list of machineInfo objects        | -              | name of machine & implement |
  | dryMass           | ** | float       | lb or kg       | dry mass harvested in that point |
  | dryMassPerArea    | ** | float       | lb/ac or kg/ha | dry mass harvested in that point divided by area |
  | dryVolume         | ** | float       | bu or L        | dry volume harvested in that point |
  | dryVolumePerArea  | ** | float       | bu/ac or L/ha  | dry volume harvested in that point divided by area |
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
