---
title: Field Operations sample responses
description: Field Operations sample responses
sidebar_label: Sample responses
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: #field-operations-filtered-geojson
[2]: /docs/operations_endpoints#get-an-operations-images-v2
[3]: /docs/configurations_overview#operationsremoveoutliers
[4]: /docs/configurations_overview#operationsoutlierslimit
[5]: #field-operations-images-v2
[6]: /docs/configurations_overview#operationsfilteredgeojson

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

### Field Operations Standard GeoJSON

Here's an example of a standard geojson from a Field Operation

```json
{
  "standardGeojson": "URL"
}
```

### Field Operations Filtered GeoJSON

:::tip
To use this option, the [operationsFilteredGeojson][6] configuration must be enabled.
:::

Here's an example of a filtered geojson from a Field Operation that can be access from the `/operations/{id}/filteredGeojson`endpoint.

```json
{
  "filteredGeojson": "URL"
}
```

The filtered GeoJSON is the file that went through the data cleaning process, removing the points with the following criteria:

- `speed` less than `0.5 m/s` (for all operation types)

The generated files will be used as a basis for generating [new operations images][5].

#### Outliers
This is a option for cleaning the filteredGeoJSON based on standard deviation to remove outliers on harvest data.

<img alt="Outliers" src={useBaseUrl('img/outliers_removal.png')} />

All points with the harvested volume value far `3` standard deviation from the mean will be excluded. This is the default value and can be changed in the [`operationsOutliersLimit`][4]  configuration. 

To disable the removal of outliers just use the [`operationsRemoveOutliers`][3] configuration.

### Field Operations Summary


Here's an example of a summary from a Field Operation. It's important to mention that the output displayed in the Field
Operation Summary is heavily impacted by the `operationType` property.

You can move through the four tabs below to see a sample of how Leaf returns
each of the operation types.


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
    "type": "Feature",
    "properties": {
        "totalDistance": {
            "value": 39998.476721850704,
            "unit": "ft"
        },
        "speed": {
            "avg": 5.670968743270067,
            "min": 0.22369356453418732,
            "max": 7.471364498138428,
            "unit": "mi/hr"
        },
        "startTime": "2019-07-01T23:26:29.275+00:00",
        "endTime": "2019-07-02T00:57:15.775+00:00",
        "totalArea": {
            "value": 361905.1377764531,
            "unit": "m2"
        },
        "elevation": {
            "avg": 3577.9913495529217,
            "min": 3577.1,
            "max": 3579.4,
            "unit": "ft"
        },
        "products": [
            {
                "name": "Carrier",
                "rate": {
                    "unit": "gal/ac",
                    "value": 6.0
                },
                "totalApplied": {
                    "value": 536.5700964642404,
                    "unit": "gal"
                },
                "area": {
                    "value": 361905.1377764531,
                    "unit": "m2"
                }
            },
            {
                "name": "Agrotain Plus",
                "rate": {
                    "unit": "lb/ac",
                    "value": 1.2
                },
                "totalApplied": {
                    "value": 107.31401929284804,
                    "unit": "lb"
                },
                "area": {
                    "value": 361905.1377764531,
                    "unit": "m2"
                }
            },
            {
                "name": "28-0-0 UAN",
                "rate": {
                    "unit": "gal/ac",
                    "value": 15.0
                },
                "totalApplied": {
                    "value": 1341.4252411606008,
                    "unit": "gal"
                },
                "area": {
                    "value": 361905.1377764531,
                    "unit": "m2"
                }
            }
        ],
        "crop": [],
        "operationType": "applied",
        "appliedRate": {
            "avg": 15.815142468307542,
            "min": 0.010000000330896932,
            "max": 442.09001203078185,
            "unit": "gal/ac"
        },
        "totalApplied": {
            "value": 1414,
            "unit": "gal"
        },
        "machinery": [
            {
                "name": "Agco Rogator RG1300",
                "type": "machine",
                "serialNumber": "10276680",
                "brand": "Agco"
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
```

  </TabItem>
  <TabItem value="harvested">

```json
{
    "type": "Feature",
    "properties": {
        "totalDistance": {
            "value": 33277.419952513315,
            "unit": "ft"
        },
        "speed": {
            "avg": 4.297550131597641,
            "min": 0.0,
            "max": 7.842694282531738,
            "unit": "mi/hr"
        },
        "startTime": "2015-10-06T23:51:23.040+00:00",
        "endTime": "2015-10-07T17:09:26.040+00:00",
        "totalArea": {
            "value": 58926.234671233884,
            "unit": "m2"
        },
        "elevation": {
            "avg": 165.5691147167663,
            "min": 58.6,
            "max": 195.3,
            "unit": "ft"
        },
        "crop": [
            "corn"
        ],
        "operationType": "harvested",
        "wetMass": {
            "avg": 11.810479659859125,
            "min": 0.031766114277891125,
            "max": 58.95,
            "unit": "lb"
        },
        "totalWetMass": {
            "value": 165960.86018034007,
            "unit": "lb"
        },
        "wetMassPerArea": {
            "avg": 11397.635987349213,
            "min": 189.17227229135673,
            "max": 646492.91259439,
            "unit": "lb/ac"
        },
        "wetVolume": {
            "avg": 0.21090142249748436,
            "min": 5.672520406766272E-4,
            "max": 1.0526785714285716,
            "unit": "bu"
        },
        "totalWetVolume": {
            "value": 2963.5867889346546,
            "unit": "bu"
        },
        "wetVolumePerArea": {
            "avg": 203.5292140598074,
            "min": 3.3780762909170847,
            "max": 11544.516296328393,
            "unit": "bu/ac"
        },
        "harvestMoisture": {
            "avg": 15.38852974665528,
            "min": 6.05,
            "max": 18.16,
            "unit": "percentage"
        },
        "varieties": [
            {
                "harvestMoisture": {
                    "avg": 15.38852974665528,
                    "min": 6.05,
                    "max": 18.16,
                    "unit": "percentage"
                },
                "wetMass": {
                    "value": 165960.86018034007,
                    "unit": "lb"
                },
                "wetMassPerArea": {
                    "value": 2.816417188477808,
                    "unit": "lb/ac"
                },
                "wetVolume": {
                    "value": 2963.5867889346546,
                    "unit": "bu"
                },
                "area": {
                    "value": 58926.234671233884,
                    "unit": "m2"
                },
                "name": "Corn"
            }
        ],
        "machinery": [
            {
                "name": "Case IH Corn Head 20.000010800000002ft 8row",
                "type": "implement",
                "brand": "Case IH"
            },
            {
                "name": "Case IH  8120",
                "type": "machine",
                "serialNumber": "8000001",
                "brand": "Case IH"
            },
            {
                "name": "Case IH Corn Head 20ft 12row",
                "type": "implement",
                "brand": "Case IH"
            },
            {
                "name": "Case IH X120 Series 8120",
                "type": "machine",
                "serialNumber": "8220490",
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
```

  </TabItem>
  <TabItem value="planted">

```json
{
    "type": "Feature",
    "properties": {
        "totalDistance": {
            "value": 6955.050663505276,
            "unit": "ft"
        },
        "speed": {
            "avg": 5.35279209039548,
            "min": 0.007,
            "max": 6.087,
            "unit": "mi/hr"
        },
        "startTime": "2019-05-20T18:57:17.000+00:00",
        "endTime": "2019-05-20T20:20:57.800+00:00",
        "totalArea": {
            "value": 38768.74107320113,
            "unit": "m2"
        },
        "elevation": {
            "avg": 194.6993220338983,
            "min": 193.9,
            "max": 196.4,
            "unit": "ft"
        },
        "crop": [
            "corn"
        ],
        "operationType": "planted",
        "seedRate": {
            "avg": 36504.86707336483,
            "min": 35265.833333333336,
            "max": 40372.63888888889,
            "unit": "seeds/ac"
        },
        "singulation": {
            "avg": 1195.02,
            "min": 1194.8,
            "max": 1195.24,
            "unit": "prcnt"
        },
        "downForce": {
            "avg": 743.875,
            "min": 687.75,
            "max": 800.0,
            "unit": "lbf"
        },
        "totalPlanted": {
            "value": 349713,
            "unit": "seeds"
        },
        "varieties": [
            {
                "name": "P1309WAM",
                "rate": {
                    "avg": 36496.60675550211,
                    "min": 35265.833333333336,
                    "max": 40372.63888888889,
                    "unit": "seeds/ac",
                    "minTarget": 36000.0,
                    "maxTarget": 36500.0,
                    "avgTarget": 36499.98903434779
                },
                "area": {
                    "value": 38768.74107320113,
                    "unit": "m2"
                },
                "totalPlanted": {
                    "value": 349634,
                    "unit": "seeds"
                }
            }
        ],
        "machinery": [
            {
                "name": "Case IH 60.0' 36 Row Planter",
                "type": "implement",
                "brand": "Case IH"
            },
            {
                "name": "Tractor",
                "type": "machine",
                "serialNumber": "8000001",
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
```

  </TabItem>
  <TabItem value="tillage">

```json
{
    "type": "Feature",
    "properties": {
        "totalDistance": {
            "value": 103.77677982560607,
            "unit": "ft"
        },
        "speed": {
            "avg": 4.0806,
            "min": 2.8979999999999997,
            "max": 5.788799999999999,
            "unit": "km/hr"
        },
        "startTime": "2015-10-06T23:51:23.040+00:00",
        "endTime": "2015-10-07T17:09:26.040+00:00"
        "totalArea": {
            "value": 192.82356654418942,
            "unit": "m2"
        },
        "elevation": {
            "avg": 227.78039022623696,
            "min": 227.61552355957028,
            "max": 227.91652355957032,
            "unit": "m"
        },
        "crop": [ ],
        "operationType": "tillage",
        "tillageDepthTarget": {
            "avg": 14.999999999999998,
            "min": 14.999999999999998,
            "max": 14.999999999999998,
            "unit": "in"
        },
        "machinery": [
            {
                "name": "Tractor",
                "type": "machine"
            },
            {
                "name": "A008800104203027",
                "type": "implement"
            }
        ]
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [ -86.09008958619441, 39.946016818914664 ],
                    [ -86.09012910819442, 39.946018315914664 ],
                    [ -86.09016866119443, 39.946019965914665 ],
                    [ -86.09019500919443, 39.94602120091467 ],
                    [ -86.09035699819445, 39.94602920691468 ],
                    [ -86.09035401319444, 39.94603098191469 ],
                    [ -86.09034872219445, 39.946030863914686 ],
                    [ -86.09033498219445, 39.946030421914685 ],
                    [ -86.09008958619441, 39.946016818914664 ]
                ]
            ]
        ]
    }
}
```

  </TabItem>

</Tabs>


### Field Operations Images 

Here is an example of Images from Field Operations.

```json

[
    {
        "property": "string",
        "ramp" : {
				"0%" : [ 200, 0, 0 ],
				"35%" : [ 255, 40, 0 ],
				"45%" : [ 255, 150, 0 ],
				"55%" : [ 255, 240, 0 ],
				"65%" : [ 0, 230, 0 ],
				"75%" : [ 0, 190, 0 ],
				"100%" : [ 0, 130, 0 ],
				"nv" : [ 0, 0, 0, 0 ]
			},
        "url": "URL"
      }
]
```



#### Field Operations Images V2
[This endpoint][2] version produces images based on the [filteredGeoJSON][1], therefore it will be active whenever the data filter option is active.

The new images have considerable improvements over the previous one. They are generated with a standard fixed color ramp and the data is automatically distributed into 7 classes using **quatile** classification.

Note that the return is different from the previous version, with the option of extent and legend available.

```json

[
    {
        "property": "string",
        "legend": {
            "ranges": [
                {
                    "colorCode": "#C80000",
                    "max": 20,
                    "min": 0
                },
                {
                    "colorCode": "#FF2800",
                    "max": 50,
                    "min": 20
                },
                {
                    "colorCode": "#FF9600",
                    "max": 100,
                    "min": 50
                },
                {
                    "colorCode": "#FFF000",
                    "max": 250,
                    "min": 100
                },
                {
                    "colorCode": "#00E600",
                    "max": 340,
                    "min": 250
                },
                {
                    "colorCode": "#00BE00",
                    "max": 480,
                    "min": 340
                },
                {
                    "colorCode": "#008200",
                    "max": 570,
                    "min": 480
                }
            ]
        },
        "extent": {
            "xmin": 0.0,
            "xmax": 0.0,
            "ymin": 0.0,
            "ymax": 0.0
        },
        "url": "URL"
      }
]
```

If the `filteredGeoJSON` fails to process, images will continue to be generated from the `standardGeoJSON`.

:::tip
Important: once active, the images will be available for access only via the [`/imagesV2`][2] endpoint.  
:::

### Field Operations Units 

Here is an example of Units from the numerical properties of the Field Operations.


```json
{
    "elevation": "ft",
    "area": "m2",
    "harvestMoisture": "percentage",
    "equipmentWidth": "ft",
    "distance": "ft",
    "heading": "arcdeg",
    "wetVolume": "bu",
    "wetVolumePerArea": "bu/ac",
    "wetMass": "lb",
    "wetMassPerArea": "lb/ac",
    "speed": "mi/hr"
}
```
