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
  defaultValue="planted"
  values={[
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Harvest', value: 'harvested', },
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

This is an example of an automatically merged harvest operation

  ```json
  {
       "id": "126c6e75-24c1-48da-83d3-79c280bc6665",
       "provider": "Leaf",
       "standardGeojson": "https://climate-prd-bucket-etko4ab64ih6.s3.us-west-2.amazonaws.com/fa07628e-a9b1-4422-a9ea-68cfd79ef0e5.json",
       "leafUserId": "1f351aa6-c05a-473a-89ba-d63a87d9b302",
       "apiOwnerUsername": "leafdemos",
       "summary": {
           "type": "Feature",
           "properties": {
               "totalDistance": 181050.9482047307,
               "speed": {
                   "average": 3.4574422996293532,
                   "standardDeviation": 0.9372111357375735,
                   "min": 0.0,
                   "max": 6.690000057220459
               },
               "harvestMoisture": {
                   "average": 16.081799920456646,
                   "standardDeviation": 2.8065718377203943,
                   "min": 0.0,
                   "max": 23.72
               },
               "elevation": {
                   "average": 194.15977795080636,
                   "standardDeviation": 3.4336183513103755,
                   "min": 188.3,
                   "max": 360.9
               },
               "crop": [
                   "corn"
               ],
               "yieldVolume": {
                   "average": 0.12224952048974526,
                   "standardDeviation": 0.015954333578747166,
                   "min": 0.07542910422963155,
                   "max": 0.15970622921592703
               },
               "operationType": "harvested",
               "totalArea": 330765.8910826785
           },
           "geometry": {
               "type": "MultiPolygon",
               "coordinates": [
                   [
                       [
                           [
                               -89.834466,
                               39.719631
                           ],
                           [
                               -89.834503,
                               39.719698
                           ],
                           [
                               -89.834532,
                               39.719758
                           ],
                           [
                               -89.83471,
                               39.72636
                           ],
                           [
                               -89.834647,
                               39.726401
                           ],
                           [
                               -89.834643,
                               39.726403
                           ],
                           [
                               -89.834634,
                               39.726407
                           ],
                           [
                               -89.834624,
                               39.726411
                           ],
                           [
                               -89.834615,
                               39.726414
                           ],
                           [
                               -89.829956,
                               39.72758
                           ],
                           [
                               -89.829946,
                               39.727569
                           ],
                           [
                               -89.829938,
                               39.727552
                           ],
                           [
                               -89.829936,
                               39.727543
                           ],
                           [
                               -89.829935,
                               39.727534
                           ],
                           [
                               -89.829872,
                               39.72007
                           ],
                           [
                               -89.829872,
                               39.720012
                           ],
                           [
                               -89.829879,
                               39.71978
                           ],
                           [
                               -89.829888,
                               39.71968
                           ],
                           [
                               -89.829892,
                               39.719679
                           ],
                           [
                               -89.829948,
                               39.719672
                           ],
                           [
                               -89.831934,
                               39.719643
                           ],
                           [
                               -89.832978,
                               39.719637
                           ],
                           [
                               -89.834465,
                               39.719631
                           ],
                           [
                               -89.834466,
                               39.719631
                           ]
                       ]
                   ]
               ]
           }
       },
       "sourceFiles": [
           "00587e63-8756-4231-bad1-c8ba5b263e42",
           "c942cf69-1df3-4fb4-a05b-e8dff4a04b8c",
           "b55f49c5-d97d-43e4-a4b3-b026215d8674",
           "f842bed2-a6ed-43a2-bc1f-c886159761d2",
           "0a4a822a-bd2f-4cb3-815f-40efb1391b6c",
           "3bb7d8d9-7a95-4fb5-91ca-40002264dd8c",
           "d992a0ce-4773-4909-a54d-da5d87c04d8f",
           "fb1e91b4-440f-4db8-8cbb-d2f199f25dd3",
           "da89ae23-9507-4bba-9d3b-22dc920180f9",
           "05c5d341-85ce-49fc-abd3-38c99cd66edf",
           "100d43c9-8eaf-43de-bcd6-eb6405a9e75d",
           "c2e50557-9289-40ce-bf5e-02411fad2ca1",
           "68604ad1-17d3-4017-91df-b51a3b9d18dc",
           "89c2488e-185e-4a0e-918c-8bc1c71ac49a",
           "691774a2-2ad8-4901-a9c8-5cfcdea0f9fd",
           "3b0f54e7-60f1-4743-a857-2f50a6c46b83",
           "465f5442-fd16-43d3-9591-d6b264e661e4",
           "df7d07d0-a648-468f-bc9f-92a153293504",
           "8ab0eeba-0079-4832-a349-6e455065fb97",
           "fd25f5f7-57d2-4f83-8ed6-4ac17371a1b9",
           "a16fc6fc-5569-434d-89fa-87ba2eaebaaf",
           "ff515f0d-ec95-42a1-a7b2-3198bade599d",
           "e126c5e0-47e6-42a3-8e3b-bb3b51e8559c",
           "dd42d407-6612-404d-abc1-cb27be425e9a",
           "dba31603-d33f-42ab-b654-67e0fb1adab6",
           "e7928c2d-c55c-4c6c-9814-8d788d2501a4",
           "28397761-83ab-426b-a1a8-d536afe1d815",
           "bbd61f38-a4ab-4df4-a106-cdac1608e0c1",
           "d947f7a1-83ac-4cc7-b5f4-f93c30202ccb",
           "a1018af5-fe8f-4e0c-b9e9-74b38e5a39d3",
           "524448b4-2a81-4f67-ae7d-419b764b1c52",
           "af42a0cd-d9b5-45fe-aeba-0b51a8a53712",
           "a7b67a58-977a-40b2-85a5-259f280c62bb",
           "7b0a7990-a670-4f5e-b0d7-8e8738106143",
           "6fb1d344-ab93-4408-9f7a-f667885c908a",
           "3e90c79e-7ed9-4c52-9aa7-5a355322b127",
           "8d6a42ec-9a13-4bb1-8f14-443d9f05dcae",
           "e7460aba-5c36-4c50-8235-a7deccd19357",
           "e2522148-dfdc-42ae-8129-aa970763a6ec",
           "b53e40cb-11dd-4c31-9142-aa79829fd444",
           "0752d3b6-f25b-481a-be92-1477a78995b5",
           "80bff7cd-9d32-4148-8da3-37e6bee70603",
           "a07344cd-f8c1-47ea-b01f-cba3e1203dcc",
           "db60c182-08ce-4be5-9532-b42328f727c7",
           "8e71feac-fb83-417d-9138-5da00b522623",
           "93396d9a-12ac-456a-93c7-4af3410543f1",
           "97e0521c-7259-459d-9cb8-4b10ce7878f0",
           "bd8a32e7-7ef7-4038-8f30-046f15fae7cb",
           "bd0bd796-e9fa-43ac-be18-966d84f9c85f",
           "cfcedc1d-c56a-4661-8e86-7e73c7d48469",
           "1764f73d-981e-4676-91b9-1739ea106a1f",
           "4760ed5c-ffb1-4aec-95af-d6f62c7c214a",
           "a189cc9f-aa64-4f04-9c19-b7ea1b05abc3",
           "903f1946-fb06-460c-9da6-ce7c31086e92",
           "04ee92a4-8ae0-4ff1-9257-b65d0fd6f928",
           "d408ac60-7ac8-452b-9e73-ceeefb747897",
           "c9828e28-aa61-4c64-a6f6-88880bb74d32",
           "be70ad19-e14c-4163-8498-4eb0aa747636",
           "9dcdec88-06a2-4d5c-b8cb-0405df84384e",
           "9f15c94a-fe9b-47e6-b8e3-de17167fc8d1",
           "d5b265f8-df1a-4d41-a0a1-cdd6350ef645",
           "3df9b40e-06e3-4b79-8d79-149ff48f6527",
           "1fb34c32-7ce0-4bd1-a6fa-7017c672ceab",
           "64623ca3-9151-440e-88a3-a1276d2fa9a0",
           "64e9d2dc-33ce-417a-89b1-000a1a896718",
           "98f019ef-00cf-4963-a360-e5a1f538a1ca",
           "e73465bc-c7d0-4d1e-ac4d-a03f7c7b7b87",
           "60969558-7ae8-4a97-8bbd-88463967b429",
           "197e03d0-68f2-46c1-bf12-1f40d588f32a",
           "e8bcbe96-08b8-4acc-be87-bb80dee36469",
           "0ca6cf9f-a789-47c8-9d83-1ed5d08f90eb",
           "ce760b28-e4ed-4df4-818e-95ac90e0b9fa",
           "6bf800b3-7b5c-4ab7-acf1-25faf4ea88aa",
           "aab51df7-5021-4a8f-96a6-0adb18042562",
           "0411677e-6a96-4b6e-b15e-5887a0ec32cb",
           "2daeeba9-1ef7-433a-8c3b-67d709f915c9",
           "8ef8f2f5-c157-44c6-bbae-1a8a1e700ec1",
           "6b24b493-be50-443f-9daf-2cc12cef4de5",
           "9256f86b-cbd8-4230-92c0-5cd480667776",
           "ee6d8ed0-6725-4fa6-be12-35632ea183fe",
           "da710448-f1c8-419e-b390-139d76e3fb2d",
           "909e9ec6-c20d-42ea-962c-40b4eb574dbc",
           "570b46bf-826d-47c3-aa56-8b832c594b21",
           "a6cec30c-e8ec-4e8d-bba6-f0f4c53cb7c8",
           "1642a0fe-9917-43fa-bac7-e10afcb81fc0",
           "3226e908-fd8c-48f1-b6ab-e43b924bb207",
           "14297f8a-3b2e-4f5e-9209-e17ff196e80d",
           "077b7028-2cb4-4902-8e59-410f2d192f29",
           "d8d6f8c5-78c0-44e2-9e51-ea1d8f7af685",
           "53299133-fc29-48bf-80bc-8e520e36a9d6"
       ],
       "status": "processed",
       "origin": "automerged",
       "createdTime": "2020-10-29T21:16:30.692",
       "updatedTime": "2020-10-29T21:18:12.866",
       "operationStartTime": "2019-10-02T20:23:33.4",
       "operationEndTime": "2019-10-23T03:04:41.4"
   },
  ```
  </TabItem>
</Tabs>


<!-- ### Operation Maps

Here is a sample Harvest Map you can get with Leaf

<img alt="Sample Harvest Map" src={useBaseUrl('img/sample_harvest_map.png')} width="200" /> -->
