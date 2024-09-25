---
title: Field Operations sample responses
description: Field Operations - Sample responses
sidebar_label: Sample responses
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-filtered-geojson
[2]: https://docs.withleaf.io/docs/operations_endpoints/#get-an-operations-images-v2
[3]: https://docs.withleaf.io/docs/configurations_overview/#operationsremoveoutliers
[4]: https://docs.withleaf.io/docs/configurations_overview/#operationsoutlierslimit
[5]: https://docs.withleaf.io/docs/operations_sample_output/#field-operations-images-v2
[6]: https://docs.withleaf.io/docs/configurations_overview/#operationsfilteredgeojson
[7]: https://docs.withleaf.io/docs/operations_endpoints/#get-operations-geotiff-images
[8]: https://docs.withleaf.io/docs/configurations_overview/#operationsimageasgeotiff

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
To remove outliers in harvest data, you can use configurations to clean the filteredGeoJSON based on standard deviation.

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
      "value": 30745.25137347639,
      "unit": "ft"
    },
    "speed": {
      "avg": 11.100700864408136,
      "min": 0.9171435236930847,
      "max": 11.855757713317871,
      "unit": "mi/hr"
    },
    "startTime": "2019-06-03T23:45:53.200+00:00",
    "endTime": "2019-06-04T00:40:13.485+00:00",
    "totalArea": {
      "value": 319095.75951633806,
      "unit": "m2"
    },
    "elevation": {
      "avg": 3577.3137203166225,
      "min": 3576.1,
      "max": 3578.9,
      "unit": "ft"
    },
    "crop": [
      "corn"
    ],
    "operationType": "applied",
    "appliedRate": {
      "avg": 10.169851062412837,
      "min": 8.100000076314965,
      "max": 297.89999569339926,
      "unit": "gal/ac"
    },
    "totalApplied": {
      "value": 801.8923899434283,
      "unit": "gal"
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
    "originalOperationType": "CropOriginal",
    "machinery": [
      {
        "name": "MachineName",
        "type": "machine",
        "serialNumber": "10271080",
        "brand": "Machine"
      },
      {
        "name": "ImplementName",
        "type": "implement",
        "brand": "unknown"
      }
    ],
    "originalOperationData": {
      "originalOperationFarm": "Farm Green",
      "originalOperationField": "Field A",
      "originalOperationGrower": "Grower",
      "originalOperationType": "CropOriginal"
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

```json
{
  "type": "Feature",
  "properties": {
    "totalDistance": {
      "value": 21062.354662275786,
      "unit": "ft"
    },
    "speed": {
      "avg": 3.441336296949484,
      "min": 0.006131406407803297,
      "max": 6.3555588722229,
      "unit": "mi/hr"
    },
    "startTime": "2016-09-19T18:30:51.640+00:00",
    "endTime": "2016-09-21T21:48:25.000+00:00",
    "totalArea": {
      "value": 61820.13638528271,
      "unit": "m2"
    },
    "elevation": {
      "avg": 59.13738317757009,
      "min": 58.9,
      "max": 59.6,
      "unit": "ft"
    },
    "crop": [
      "soybeans"
    ],
    "operationType": "harvested",
    "wetMass": {
      "avg": 17.492758207524563,
      "min": 0.01,
      "max": 29.59,
      "unit": "lb"
    },
    "totalWetMass": {
      "value": 72997.28000000014,
      "unit": "lb"
    },
    "dryMass": {
      "avg": 17.112920091943007,
      "min": 0.01,
      "max": 29.59,
      "unit": "lb"
    },
    "totalDryMass": {
      "value": 71412.21554367829,
      "unit": "lb"
    },
    "wetMassPerArea": {
      "avg": 4778.532184798924,
      "min": 3.2892456102410352,
      "max": 235466.19310582182,
      "unit": "lb/ac"
    },
    "dryMassPerArea": {
      "avg": 4674.771037540907,
      "min": 3.2892456102410352,
      "max": 232434.9041830802,
      "unit": "lb/ac"
    },
    "wetVolume": {
      "avg": 0.2915459701254094,
      "min": 0.00016666666666666666,
      "max": 0.49316666666666664,
      "unit": "bu"
    },
    "totalWetVolume": {
      "value": 1216.6213333333362,
      "unit": "bu"
    },
    "dryVolume": {
      "avg": 0.28521533486571676,
      "min": 0.00016666666666666666,
      "max": 0.49316666666666664,
      "unit": "bu"
    },
    "totalDryVolume": {
      "value": 1190.2035923946364,
      "unit": "bu"
    },
    "wetVolumePerArea": {
      "avg": 79.64220307998207,
      "min": 0.05482076017068392,
      "max": 3924.4365517636966,
      "unit": "bu/ac"
    },
    "dryVolumePerArea": {
      "avg": 77.91285062568178,
      "min": 0.05482076017068392,
      "max": 3873.915069718003,
      "unit": "bu/ac"
    },
    "harvestMoisture": {
      "avg": 14.221756530074288,
      "min": 1.36,
      "max": 21.05,
      "unit": "percentage"
    },
    "varieties": [
      {
        "harvestMoisture": {
          "avg": 14.221756530074288,
          "min": 1.36,
          "max": 21.05,
          "unit": "percentage"
        },
        "wetMass": {
          "value": 72997.28000000014,
          "unit": "lb"
        },
        "wetMassPerArea": {
          "value": 1.1808010183778619,
          "unit": "lb/ac"
        },
        "wetVolume": {
          "value": 1216.6213333333362,
          "unit": "bu"
        },
        "area": {
          "value": 61820.13638528271,
          "unit": "m2"
        },
        "dryVolume": {
          "value": 1190.2035923946364,
          "unit": "bu"
        },
        "dryMassPerArea": {
          "value": 1.1551610805031989,
          "unit": "lb/ac"
        },
        "dryMass": {
          "value": 71412.21554367829,
          "unit": "lb"
        },
        "name": "Soybeans"
      }
    ],
    "originalOperationType": "Harvesting",
    "machinery": [
      {
        "name": "Case IH Soybeans Head 35.000018900000015ft 8row",
        "type": "implement",
        "brand": "Case IH"
      },
      {
        "name": "Case IH  8120",
        "type": "machine",
        "serialNumber": "8000001",
        "brand": "Case IH"
      }
    ],
    "originalOperationData": {
      "originalOperationFarm": "Farm Green",
      "originalOperationField": "Field A",
      "originalOperationGrower": "Grower",
      "originalOperationType": "CropOriginal"
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
  <TabItem value="planted">

```json
{
  "type": "Feature",
  "properties": {
    "totalDistance": {
      "value": 36273.23038351213,
      "unit": "ft"
    },
    "speed": {
      "avg": 4.632636925960638,
      "min": 0.002,
      "max": 6.537,
      "unit": "mi/hr"
    },
    "startTime": "2018-04-23T15:12:11.000+00:00",
    "endTime": "2018-04-25T17:18:04.000+00:00",
    "totalArea": {
      "value": 134795.80322644877,
      "unit": "m2"
    },
    "elevation": {
      "avg": 197.8268603561387,
      "min": 196.4,
      "max": 200,
      "unit": "ft"
    },
    "crop": [
      "corn"
    ],
    "operationType": "planted",
    "singulation": {
      "avg": 99.31269745250064,
      "min": 98.1,
      "max": 100,
      "unit": "prcnt"
    },
    "downForce": {
      "avg": 137.00726517903476,
      "min": 0,
      "max": 251,
      "unit": "lbf"
    },
    "seedRate": {
      "avg": 36590.32694115429,
      "min": 17049.590909090908,
      "max": 39031.46153846154,
      "unit": "seeds/ac"
    },
    "totalPlanted": {
      "value": 1218773,
      "unit": "seeds"
    },
    "skips": {
      "avg": 0.28672096317280454,
      "min": 0.0,
      "max": 1.9000000000000001,
      "unit": "prcnt"
    },
    "doubles": {
      "avg": 0.23668555240793204,
      "min": 0.0,
      "max": 1.4000000000000001,
      "unit": "prcnt"
    },
    "varieties": [
      {
        "name": "P1309WAM",
        "rate": {
          "avg": 36590.32694115429,
          "min": 17049.590909090908,
          "max": 39031.46153846154,
          "unit": "seeds/ac",
          "minTarget": 37000,
          "maxTarget": 37000,
          "avgTarget": 37000
        },
        "area": {
          "value": 134795.80322644877,
          "unit": "m2"
        },
        "totalPlanted": {
          "value": 1218773,
          "unit": "seeds"
        }
      }
    ],
    "originalOperationType": "SowingAndPlanting",
    "machinery": [
      {
        "name": "Tractor",
        "type": "machine",
        "serialNumber": "8000001",
        "brand": "unknown"
      },
      {
        "name": "Case IH 40.0' 22 Row Planter",
        "type": "implement",
        "brand": "Case IH"
      }
    ],
    "originalOperationData": {
      "originalOperationFarm": "Farm Green",
      "originalOperationField": "Field A",
      "originalOperationGrower": "Grower",
      "originalOperationType": "CropOriginal"
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

```json
{
  "type": "Feature",
  "properties": {
    "totalDistance": {
      "value": 185822.9781551407,
      "unit": "ft"
    },
    "startTime": "2021-12-08T17:46:13.482+00:00",
    "endTime": "2021-12-08T22:21:16.181+00:00",
    "totalArea": {
      "value": 517905.5871739836,
      "unit": "m2"
    },
    "elevation": {
      "avg": 690.4474652714705,
      "min": 681.56708538,
      "max": 702.30096826,
      "unit": "ft"
    },
    "operationType": "tillage",
    "tillType": ["Closing Disk"],
    "tillageDepthActual": {
      "avg": 0,
      "min": 0,
      "max": 0,
      "unit": "in"
    },
    "tillageDepthTarget": {
      "avg": 4,
      "min": 4,
      "max": 4,
      "unit": "in"
    },
    "machinery": [
      {
        "name": "MachineName",
        "type": "machine",
        "serialNumber": "10271080",
        "brand": "Machine"
      },
      {
        "name": "ImplementName",
        "type": "implement",
        "brand": "unknown"
      }
    ],
    "originalOperationData": {
      "originalOperationFarm": "Farm Green",
      "originalOperationField": "Field A",
      "originalOperationGrower": "Grower",
      "originalOperationType": "CropOriginal"
    }
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

The new images have considerable improvements over the previous one. They are generated with a standard fixed color ramp and the data is automatically distributed into 7 classes using **quantile** classification.

Note that the return is different from the previous version, with extent and legend attributes now available.

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

#### Field Operations GeoTIFF Images
[This endpoint][7] produces images based on the [filteredGeoJSON][1]. To access the images, besides having the data filter option active, it is required the [operationsImageAsGeoTiff][8] configuration enabled as well.

In the result we displayed a list of the GeoTIFF images for each property available.
```json

[
  {
    "property": "distance",
    "url": "https://s3-url-to-geotiff/geotiff-cca01ca7-75eb-4028-83ad-3a9af8a08667.tif"
  },
  {
    "property": "dryMass",
    "url": "https://s3-url-to-geotiff/geotiff-f1604ea5-ee0a-44a1-ac11-03a0c275cecb.tif"
  },
  {
    "property": "elevation",
    "url": "https://s3-url-to-geotiff/geotiff-45efa9d2-9f60-4704-ae91-d7edd72388bd.tif"
  },
  {
    "property": "heading",
    "url": "https://s3-url-to-geotiff/geotiff-08f2f811-55a6-4028-8197-3ca535f93b46.tif"
  },
  {
    "property": "speed",
    "url": "https://s3-url-to-geotiff/geotiff-e52c9f2f-399b-4e03-9d81-0abbacdc51f7.tif"
  },
  {
    "property": "wetMassPerArea",
    "url": "https://s3-url-to-geotiff/geotiff-184b7394-6f86-41c2-8742-fd27bfc82ffc.tif"
  },
  {
    "property": "dryVolume",
    "url": "https://s3-url-to-geotiff/geotiff-8248c5e2-5853-4f64-8b7a-3c7f3a16cfe0.tif"
  },
  {
    "property": "wetVolumePerArea",
    "url": "https://s3-url-to-geotiff/geotiff-27f721e8-7ba6-41ba-8acb-6d038c87d87d.tif"
  },
  {
    "property": "harvestMoisture",
    "url": "https://s3-url-to-geotiff/geotiff-b00a39b1-4ac6-4ba6-a5bf-e5798d9f8393.tif"
  },
  {
    "property": "dryMassPerArea",
    "url": "https://s3-url-to-geotiff/geotiff-5d027967-6488-4339-a4b6-1e2f8b25e05f.tif"
  },
  {
    "property": "fuelRate",
    "url": "https://s3-url-to-geotiff/geotiff-18f8f9e9-3e43-4074-a3d4-70098db365c9.tif"
  },
  {
    "property": "equipmentWidth",
    "url": "https://s3-url-to-geotiff/geotiff-d49900a3-ceaf-4c6f-8348-7f9977f2751d.tif"
  },
  {
    "property": "area",
    "url": "https://s3-url-to-geotiff/geotiff-1f81a342-eb2b-4623-b580-53d5296888aa.tif"
  },
  {
    "property": "wetMass",
    "url": "https://s3-url-to-geotiff/geotiff-3332529c-01d3-4c13-ac12-10341bcc3ade.tif"
  },
  {
    "property": "dryVolumePerArea",
    "url": "https://s3-url-to-geotiff/geotiff-aaf2f4ab-a0e0-4280-96a3-7df443779af8.tif"
  },
  {
    "property": "wetVolume",
    "url": "https://s3-url-to-geotiff/geotiff-69570599-76f1-49ab-b3cc-9926705da2c9.tif"
  }
]
```



### Field Operations Units 

Here is an example of Units from the numerical properties of the Field Operations.


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
