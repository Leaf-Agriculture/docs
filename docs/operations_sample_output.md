---
title: Sample responses
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

This page shows and describes sample responses from Leaf API, along with a list of what properties you can expect for
each type of data.

## Field Operations

A Field Operation processed by Leaf's API returns a list of content that contains most of the basic info related to the
authenticated user, and also the Field Boundaries and File Operations attached to each other by the background
processing.

Here's an example of a Field Operation

```json
{
  "id": "uuid",
  "apiOwnerUsername": "leaf@withleaf.io",
  "leafUserId": "uuid",
  "startTime": "yyyy-MM-ddTHH:mm:ss.SZ",
  "endTime": "yyyy-MM-ddTHH:mm:ss.SZ",
  "updatedTime": "yyyy-MM-ddTHH:mm:ss.SZ",
  "type": "string",
  "files": [
    "uuid"
  ],
  "fields": [
    {
      "id": "uuid",
      "coverage": "float"
    }
  ],
  "providers": [
    "string"
  ]
}
```

Field operations have many features that can be accessed via `/featureName` added to the base url, ranging from the
standardized data to the operation units. Here's a sample response of each of these features.

### Field Operations Standard Geojson

Here's an example of a standard geojson from a Field Operation

```json
{
  "standardGeojson": "URL"
}
```

### Field Operations Summary

Here's an example of a summary from a Field Operation. It's important to mention that the output displayed in the Field
Operation Summary is heavily impacted by the `opeartionType` property.

<Tabs defaultValue="harvested"
values={[
{ label: 'Planted', value: 'planted', }, 
{ label: 'Harvested', value: 'harvested', },
{ label: 'Applied', value: 'applied', },
{ label: 'Tillage', value: 'tillage', },
]
}>

  <TabItem value="planted">

This is an example of a summary for a "planted" operation

  ```json
{
  "type": "Feature",
  "properties": {
    "totalDistance": {
      "value": "float",
      "unit": "string"
    },
    "speed": {
      "avg": "float",
      "min": "float",
      "max": "float",
      "unit": "string/hr"
    },
    "startTime": "yyyy-MM-ddTHH:mm:ss.SZ",
    "endTime": "yyyy-MM-ddTHH:mm:ss.SZ",
    "totalArea": {
      "value": "float",
      "unit": "string"
    },
    "elevation": {
      "avg": "float",
      "min": "float",
      "max": "float",
      "unit": "string"
    },
    "products": [
      {
        "name": "string",
        "rate": {
          "unit": "string/ac",
          "value": "float"
        },
        "totalApplied": {
          "value": "float",
          "unit": "string"
        },
        "area": {
          "value": "float",
          "unit": "string"
        }
      },
      {
        "name": "string",
        "rate": {
          "unit": "string/ac",
          "value": "float"
        },
        "totalApplied": {
          "value": "float",
          "unit": "string"
        },
        "area": {
          "value": "float",
          "unit": "string"
        }
      }
    ],
    "crop": [],
    "operationType": "string",
    "appliedRate": {
      "avg": "float",
      "min": "float",
      "max": "float",
      "unit": "string"
    },
    "totalApplied": {
      "value": "int",
      "unit": "string"
    },
    "machinery": [
      {
        "name": "string",
        "type": "string",
        "serialNumber": "string",
        "brand": "string Deere"
      },
      {
        "name": "string",
        "type": "string",
        "brand": "string"
      }
    ]
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [
            -89.80434894561768,
            40.47791686563837
          ],
          [
            -89.80756759643555,
            40.4757623387113
          ],
          [
            -89.80746030807495,
            40.47302011353734
          ],
          [
            -89.80475664138794,
            40.47070219301965
          ],
          [
            -89.80080842971802,
            40.47068586935202
          ],
          [
            -89.79797601699828,
            40.472709973879255
          ],
          [
            -89.7978687286377,
            40.47569704893722
          ],
          [
            -89.80117321014404,
            40.47808008455794
          ],
          [
            -89.80434894561768,
            40.47791686563837
          ]
        ]
      ]
    ]
  }
}
```

  </TabItem>
  <TabItem value="harvested">

  ```json
{
        "type": "Feature",
        "properties": {
            "totalDistance": {
                "value": "double",
                "unit": "string"
            },
            "speed": {
                "avg": "double",
                "min": "double",
                "max": "double",
                "unit": "string"
            },
            "startTime": "yyyy-MM-ddTHH:mm:ss.SZ",
            "endTime": "yyyy-MM-ddTHH:mm:ss.SZ",
            "totalArea": {
                "value": "double",
                "unit": "string"
            },
            "elevation": {
                "avg": "double",
                "min": "double",
                "max": "double",
                "unit": "string"
            },
            "crop": [
                "string"
            ],
            "operationType": "string",
            "wetMass": {
                "avg": "double",
                "min": "double",
                "max": "double",
                "unit": "string"
            },
            "totalWetMass": {
                "value": "double",
                "unit": "string"
            },
            "wetMassPerArea": {
                "avg": "double",
                "min": "double",
                "max": "double",
                "unit": "string"
            },
            "wetVolume": {
                "avg": "double",
                "min": "double",
                "max": "double",
                "unit": "string"
            },
            "totalWetVolume": {
                "value": "double",
                "unit": "string"
            },
            "wetVolumePerArea": {
                "avg": "double",
                "min": "double",
                "max": "double",
                "unit": "string"
            },
            "harvestMoisture": {
                "avg": "double",
                "min": "double",
                "max": "double",
                "unit": "string"
            },
            "varieties": [
                {
                    "harvestMoisture": {
                        "avg": "double",
                        "min": "double",
                        "max": "double",
                        "unit": "string"
                    },
                    "wetMass": {
                        "value": "double",
                        "unit": "string"
                    },
                    "wetMassPerArea": {
                        "value": "double",
                        "unit": "string"
                    },
                    "wetVolume": {
                        "value": "double",
                        "unit": "string"
                    },
                    "area": {
                        "value": "double",
                        "unit": "string"
                    },
                    "name": "string"
                }
            ],
            "machinery": [
                {
                    "name": "string",
                    "type": "string",
                    "brand": "string"
                },
                {
                    "name": "string",
                    "type": "string",
                    "serialNumber": "string",
                    "brand": "string"
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
  <TabItem value="planted">

  ```json
    {
    "type": "Feature",
    "properties": {
        "totalDistance": {
            "value": "double",
            "unit": "string"
        },
        "speed": {
            "avg": "double",
            "min": "double",
            "max": "double",
            "unit": "string"
        },
        "startTime": "yyyy-MM-ddTHH:mm:ss.SZ",
        "endTime": "yyyy-MM-ddTHH:mm:ss.SZ",
        "totalArea": {
            "value": "double",
            "unit": "string"
        },
        "elevation": {
            "avg": "double",
            "min": "double",
            "max": "double",
            "unit": "string"
        },
        "crop": [
            "string"
        ],
        "operationType": "string",
        "seedRate": {
            "avg": "double",
            "min": "double",
            "max": "double",
            "unit": "string/ac"
        },
        "totalPlanted": {
            "value": "int",
            "unit": "string"
        },
        "varieties": [
            {
                "name": "string",
                "rate": {
                    "avg": "double",
                    "min": "double",
                    "max": "double",
                    "unit": "seeds/ac",
                    "minTarget": "double",
                    "maxTarget": "double",
                    "avgTarget": "double"
                },
                "area": {
                    "value": "double",
                    "unit": "string"
                },
                "totalPlanted": {
                    "value": "int",
                    "unit": "string"
                }
            }
        ],
        "machinery": [
            {
                "name": "string",
                "type": "string",
                "brand": "string"
            },
            {
                "name": "string",
                "type": "string",
                "serialNumber": "string",
                "brand": "string"
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
  <TabItem value="planted">

  ```json
    {
  "type": "Feature",
  "properties": {
    "totalDistance": {
      "value": "float",
      "unit": "string"
    },
    "speed": {
      "avg": "float",
      "min": "float",
      "max": "float",
      "unit": "string"
    },
    "startTime": "yyyy-MM-ddTHH:mm:ss.SZ",
    "endTime": "yyyy-MM-ddTHH:mm:ss.SZ",
    "totalArea": {
      "value": "float",
      "unit": "string"
    },
    "elevation": {
      "avg": "float",
      "min": "float",
      "max": "float",
      "unit": "string"
    },
    "crop": [],
    "operationType": "string",
    "tillageDepthTarget": {
      "avg": "float",
      "min": "float",
      "max": "float",
      "unit": "string"
    },
    "machinery": [
      {
        "name": "string",
        "type": "string",
        "_class": "string"
      },
      {
        "name": "string",
        "type": "string",
        "_class": "string"
      }
    ]
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [
            -89.80434894561768,
            40.47791686563837
          ],
          [
            -89.80756759643555,
            40.4757623387113
          ],
          [
            -89.80746030807495,
            40.47302011353734
          ],
          [
            -89.80475664138794,
            40.47070219301965
          ],
          [
            -89.80080842971802,
            40.47068586935202
          ],
          [
            -89.79797601699828,
            40.472709973879255
          ],
          [
            -89.7978687286377,
            40.47569704893722
          ],
          [
            -89.80117321014404,
            40.47808008455794
          ],
          [
            -89.80434894561768,
            40.47791686563837
          ]
        ]
      ]
    ]
  }
}
  ```
  </TabItem>
  </Tabs>

###Field Operations Images 

Here is an example of Images from Field Operations.

```json

[
    {
        "property": "string",
        "ramp": {
            "0%": ["int", "int", "int"],
            "35%": ["int", "int", "int"],
            "45%": ["int", "int", "int"],
            "55%": ["int", "int", "int"],
            "65%": ["int", "int", "int"],
            "75%": ["int", "int", "int"],
            "100%": ["int", "int", "int"],
            "nv": ["int", "int", "int"]
        },
        "url": "URL"
      }
]
```

###Field Operations Units 

Here is an example of Units from the numerical properties of the Field Operations.


```json
{
    "elevation": "string",
    "area": "string",
    "equipmentWidth": "string",
    "distance": "string",
    "heading": "string",
    "seedRateTarget": "string",
    "seedRate": "string",
    "speed": "string"
}

```