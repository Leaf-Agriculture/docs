---
title: Sample responses
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

### Overview

You can always check the `JSON Response` tab on each of our documented
endpoints, but here is a more detailed list of sample outputs.

### Operations summary sample response

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
    "provider": "provider name as string in our convention",
    "leafUserId": "uuid",
    "apiOwnerUsername": "email",
    "sourceFiles": [],
    "status": "processed",
    "origin": "provider or Leaf",
    "createdTime": "2020-10-13T12:30:49 (until seconds, no ms)",
    "processedTime": "2020-10-13T12:38:12",
    "fieldId": "uuid",
    "fieldName": "South river by the barn",
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
        "machinery": ["machine1", "machine2"],        
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
    "provider": "provider name as string in our convention",
    "leafUserId": "uuid",
    "apiOwnerUsername": "email",
    "sourceFiles": [],
    "status": "processed",
    "origin": "provider or Leaf",
    "createdTime": "2020-10-13T12:30:49 (until seconds, no ms)",
    "processedTime": "2020-10-13T12:38:12",
    "fieldId": "uuid",
    "fieldName": "South river by the barn",
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
        "machinery": ["machine1", "machine2"],        
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
    "provider": "provider name as string in our convention",
    "leafUserId": "uuid",
    "apiOwnerUsername": "email",
    "sourceFiles": [],
    "status": "processed",
    "origin": "provider or Leaf",
    "createdTime": "2020-10-13T12:30:49 (until seconds, no ms)",
    "processedTime": "2020-10-13T12:38:12",
    "fieldId": "uuid",
    "fieldName": "South river by the barn",
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
        "machinery": ["machine1", "machine2"],        
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


<!-- ### Operation Maps

Here is a sample Harvest Map you can get with Leaf

<img alt="Sample Harvest Map" src={useBaseUrl('img/sample_harvest_map.png')} width="200" /> -->


