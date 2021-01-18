---
title: Sample responses
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

### Overview

You can always check the `JSON Response` tab on each of our documented
endpoints, but here is a more detailed list of sample outputs.

### Operations JSON sample

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

  ```json
  {
       "id": "7481ddef-aeeb-430f-b076-2c40da1118b0",
       "provider": "ClimateFieldView",
       "sizeInBytes": 1014992,
       "originalFile": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/2fc02897-3d22-4a6d-be27-5cff467f3c2b.zip",
       "rawGeojson": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/10618be7-067d-46b2-9910-31b24f7d447e.json",
       "standardGeojson": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/77f136ae-d126-4a43-b742-4735fd98cd15.json",
       "leafUserId": "1f351aa6-c05a-473a-89ba-d63a87d9b302",
       "apiOwnerUsername": "leafdemos",
       "summary": {
           "type": "Feature",
           "properties": {
               "totalDistance": 16332.22799257624,
               "speed": {
                   "average": 4.971254464285714,
                   "standardDeviation": 1.8614336338617365,
                   "min": 0.0,
                   "max": 22.375
               },
               "elevation": {
                   "average": 198.52098214285715,
                   "standardDeviation": 0.5825870746480669,
                   "min": 197.9,
                   "max": 199.8
               },
               "varieties": [
                   "a6499"
               ],
               "crop": [
                   "corn"
               ],
               "seedRateActual": {
                   "average": 36848.14630850318,
                   "standardDeviation": 239.58622953371074,
                   "min": 36120.90909090909,
                   "max": 37332.5
               },
               "operationType": "planted",
               "totalArea": 789722.596123788,
               "machineSpecification": {
                   "machineDescription": "Case IH MX255 Tractor",
                   "implementDescription": "CNH 40.0' 24 Row Planter",
                   "implementWidth": 40
               }
           },
           "geometry": {
               "type": "MultiPolygon",
               "coordinates": [
                   [
                       [
                           [
                               -89.81542008016667,
                               39.70494972116667,
                               198.3
                           ],
                           [
                               -89.83448664183334,
                               39.71958522833334,
                               199.4
                           ],
                           [
                               -89.83448667233333,
                               39.719585982,
                               199.4
                           ],
                           [
                               -89.834561782,
                               39.72639424783333,
                               198.4
                           ],
                           [
                               -89.83391027566668,
                               39.7265945855,
                               198.2
                           ],
                           [
                               -89.83377310816668,
                               39.72662854166666,
                               198.1
                           ],
                           [
                               -89.83370422316666,
                               39.72664485916666,
                               198.1
                           ],
                           [
                               -89.83366982933333,
                               39.726652982666664,
                               198.1
                           ],
                           [
                               -89.83363526666666,
                               39.72665951133333,
                               198.1
                           ],
                           [
                               -89.83356540233332,
                               39.7266725425,
                               198.0
                           ],
                           [
                               -89.83353063066667,
                               39.726679017833334,
                               198.0
                           ],
                           [
                               -89.83349588133333,
                               39.72668446683333,
                               198.0
                           ],
                           [
                               -89.833460171,
                               39.72668880933334,
                               198.0
                           ],
                           [
                               -89.8334243805,
                               39.7266923895,
                               198.0
                           ],
                           [
                               -89.83339248400002,
                               39.72669496983334,
                               198.0
                           ],
                           [
                               -89.83333600250002,
                               39.72669921166666,
                               198.0
                           ],
                           [
                               -89.83330866400001,
                               39.72670107416666,
                               198.0
                           ],
                           [
                               -89.83317310533333,
                               39.72670451,
                               198.0
                           ],
                           [
                               -89.83314757666668,
                               39.72670436233333,
                               198.0
                           ],
                           [
                               -89.83312376633333,
                               39.72669795683333,
                               198.0
                           ],
                           [
                               -89.83310413883333,
                               39.726685550166664,
                               198.0
                           ],
                           [
                               -89.81542008016667,
                               39.70494972116667,
                               198.3
                           ]
                       ]
                   ]
               ]
           }
       },
       "sourceFiles": [],
       "status": "processed",
       "origin": "provider",
       "createdTime": "2020-10-29T19:46:18.889",
       "operationStartTime": "2019-05-18T16:25:19",
       "operationEndTime": "2019-05-18T17:45:06"
   }
  ```
  </TabItem>
  <TabItem value="applied">

  ```json
  {
       "id": "11e8df30-df5c-4373-8dc1-fb275cdd3ea4",
       "provider": "ClimateFieldView",
       "sizeInBytes": 24249,
       "originalFile": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/19e9fe2e-399c-4735-b4b1-9b052840e2f5.zip",
       "rawGeojson": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/a839e3ce-1f6d-4268-8c52-3c8b97605797.json",
       "standardGeojson": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/14aa028a-72f0-473a-8fc8-e2b3edef7c3f.json",
       "leafUserId": "1f351aa6-c05a-473a-89ba-d63a87d9b302",
       "apiOwnerUsername": "leafdemos",
       "summary": {
           "type": "Feature",
           "properties": {
               "totalDistance": 10900.947723655045,
               "speed": {
                   "average": 10.33722442338795,
                   "standardDeviation": 1.5361860364425932,
                   "min": 0.3355403244495392,
                   "max": 11.497848510742188
               },
               "elevation": {
                   "average": 3577.9168289290683,
                   "standardDeviation": 0.6729413774132946,
                   "min": 3576.9,
                   "max": 3578.9
               },
               "varieties": [
                   "28-0-0 uan @ 160 lb/ac;agrotain advanced @ 2.5 gal/ac;bicep ii magnum @ 32 fl oz/ac;fs optique @ 20 fl oz/ac;roundup powermax (usa) @ 16 fl oz/ac;sharpen powered by kixor @ 1 fl oz/ac"
               ],
               "appliedRate": {
                   "average": 14.757733806861584,
                   "standardDeviation": 0.3157623349195758,
                   "min": 13.899999643744623,
                   "max": 15.599999476023033
               },
               "operationType": "applied",
               "totalArea": 319471.8942196931,
               "machineSpecification": {
                   "machineDescription": "Agco Rogator RG1300",
                   "implementDescription": "Sprayer",
                   "implementWidth": 1440.0000000000002
               }
           },
           "geometry": {
               "type": "MultiPolygon",
               "coordinates": [
                   [
                       [
                           [
                               -89.83382833,
                               39.7196395,
                               3578.8
                           ],
                           [
                               -89.83443583,
                               39.71966733,
                               3578.8
                           ],
                           [
                               -89.8345205,
                               39.71968466,
                               3578.6
                           ],
                           [
                               -89.83451283,
                               39.7264885,
                               3577.8
                           ],
                           [
                               -89.830103,
                               39.7274895,
                               3577.2
                           ],
                           [
                               -89.83005766,
                               39.7274995,
                               3577.2
                           ],
                           [
                               -89.830019,
                               39.72750716,
                               3577.2
                           ],
                           [
                               -89.82999183,
                               39.72751166,
                               3577.3
                           ],
                           [
                               -89.82997116,
                               39.72751383,
                               3577.3
                           ],
                           [
                               -89.82993383,
                               39.72020166,
                               3578.6
                           ],
                           [
                               -89.82993866,
                               39.71975133,
                               3578.2
                           ],
                           [
                               -89.82996366,
                               39.71968966,
                               3578.1
                           ],
                           [
                               -89.83382833,
                               39.7196395,
                               3578.8
                           ]
                       ]
                   ]
               ]
           }
       },
       "sourceFiles": [],
       "status": "processed",
       "origin": "provider",
       "createdTime": "2020-10-29T19:44:57.723",
       "operationStartTime": "2019-04-29T00:24:52.084",
       "operationEndTime": "2019-04-29T00:43:03.276"
   }
  ```
  </TabItem>
  <TabItem value="harvested">

This is an example of a harvest operation

  ```json
    {
        "id": "e43bd5e9-af5e-4308-9660-3d6b984bc9e0",
        "fileName": "CFV.zip",
        "provider": "Leaf",
        "fileType": "application/zip",
        "fileFormat": "DATCLIMATE",
        "sizeInBytes": 17912399,
        "originalFile": "https://jh-operations-bucket-dev.s3.us-east-1.amazonaws.com/21f599e2-dc97-4deb-b28e-d8315c3ed388",
        "rawGeojson": "https://jh-operations-bucket-dev.s3.us-east-1.amazonaws.com/cbcde683-bc51-4c2b-9fe7-6dfae8106f4f.json",
        "standardGeojson": "https://jh-operations-bucket-dev.s3.us-east-1.amazonaws.com/b482ded5-cb0f-45f3-8d56-e84602f5b27f.json",
        "zippedPNGs": "https://jh-operations-bucket-dev.s3.us-east-1.amazonaws.com/ac09fca5-722e-4365-ab25-0e78c053fba4.zip",
        "leafUserId": "8db0222a-55cb-4800-89bd-c2fac15ce59c",
        "apiOwnerUsername": "performance@sharklasers.com",
        "summary": {
            "type": "Feature",
            "properties": {
                "totalDistance": 172726.19222699953,
                "speed": {
                    "average": 3.5310160105458483,
                    "standardDeviation": 0.6868389733225092,
                    "min": 0.0,
                    "max": 6.5
                },
                "harvestMoisture": {
                    "average": 16.407919130257493,
                    "standardDeviation": 1.2766912700121953,
                    "min": 2.1,
                    "max": 23.72
                },
                "area": {
                    "average": 1.865480066941145,
                    "standardDeviation": 0.39311447833909835,
                    "min": 0.0,
                    "max": 3.499098631992061
                },
                "wetYield": {
                    "average": 272.8080731767406,
                    "standardDeviation": 492.0749888114936,
                    "min": 0.0,
                    "max": 107010.43640530533
                },
                "dryYield": {
                    "average": 269.61061020935534,
                    "standardDeviation": 482.6412637085761,
                    "min": 0.0,
                    "max": 105098.17890267797
                },
                "elevation": {
                    "average": 194.16036147323732,
                    "standardDeviation": 3.5702955956670968,
                    "min": 188.3,
                    "max": 360.9
                },
                "crop": [
                    "corn"
                ],
                "yieldVolume": {
                    "average": 0.12352397209739822,
                    "standardDeviation": 0.014312745441719761,
                    "min": 0.08580549853858234,
                    "max": 0.15600968107194277
                },
                "operationType": "harvested",
                "totalArea": 331306.34935449826
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": 
                [[[
                    [-89.83464717864990, 39.72653109046034],
                    [-89.83460426330566, 39.719582903826925],
                    [-89.82986211776732, 39.71961591349449],
                    [-89.82994794845581, 39.727636794303365],
                    [-89.83464717864990, 39.72653109046034]
                ]]]
            }
        },
        "sourceFiles": [],
        "status": "processed",
        "origin": "uploaded",
        "createdTime": "2021-01-14T20:15:37.884",
        "operationStartTime": "2019-10-02T20:23:38.2",
        "operationEndTime": "2019-10-23T03:04:34.8"
    }
  ```
  </TabItem>
</Tabs>


<!-- ### Operation Maps

Here is a sample Harvest Map you can get with Leaf

<img alt="Sample Harvest Map" src={useBaseUrl('img/sample_harvest_map.png')} width="200" /> -->
