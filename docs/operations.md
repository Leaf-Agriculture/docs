---
title: Operations Service
---

## Overview


Leaf's Operation Data API returns aggregated, cleaned, and standardized data from
all major machine data brands in a simple JSON response. This tutorial will walk through
how to create a Leaf user, securely authenticate with their chosen platforms, and receive
auto-updating data from all of them with a single request.


All HTTP methods should be prepended by this service's endpoint:

```
https://a.agrigate.io/services/services/operations/api
```

This service has the following endpoints available:

```
GET    /files
GET    /files/{id} 
GET    /files/convertedBetween
GET    /files/operationsBetween
GET    /files/{id}/summary
GET    /files/{id}/images
GET    /files/{x}/{y}/{z}.{ext}
POST   /files
POST   /files/merge
```

---



## Endpoints
Here we list all the available endpoints from this microservice. For easily testing this microservice, we recomend to see our [postman collection](https://github.com/Leaf-Agriculture/postman-collections).


### `GET /files`
Return paged list of files from the current logged client that matches with the query parameters passed. All parameters are optional and calling this endpoint without any will return all results. Here are the supported parameters:

- `userId`, an UUID
- `provider`, one of the following strings:
    - CNHI
    - JohnDeere
    - Trimble
    - ClimateFieldView
- `status`, one of the following string:
    - EMPTY
    - DOWNLOADED
    - CONVERTED
    - FAILED
    - GENERATED_GEOJSON
    - GENERATED_STANDARD_GEOJSON
    - GENERATED_PNGS
    - GENERATED_SUMMARY


#### Example
```bash
$ http GET /files provider==CNHI userId==SOME_USER_UUID
```

```json
[
    {
      "id": "UUID",
      "fileName": "filename.zip",
      "providerFileId": "123456789",
      "providerName": "CNHI",
      "providerId": 2,
      "originalUrl": "S3_URL",
      "rawGeojsonUrl": "S3_URL",
      "status": "FAILED",
      "leafUserId": "UUID",
      "apiOwnerUsername": "CLIENT",
      "fileType": "PRESCRIPTION",
      "convertedTime": "2020-04-23T13:56:02.68",
      "createdTime": "2020-04-16T21:14:03.518",
      "sizeInBytes": 123456789
    }
  ]
```


### `GET /files/convertedBetween`
Return paged list of files converted inside a date range. Here are the supported parameters, both are optional:

- `start`, date time. Must be in the past.
- `end`, date time. Must be in the present or past.

#### Example:
```bash
$ http GET /files/convertedBetween start==2020-04-30T13:21:08+00:00 end==2020-04-29T13:21:08+00:00
```

```json
[
    {
      "id": "UUID",
      "fileName": "filename.zip",
      "providerFileId": "123456789",
      "providerName": "CNHI",
      "providerId": 2,
      "originalUrl": "S3_URL",
      "rawGeojsonUrl": "S3_URL",
      "status": "FAILED",
      "leafUserId": "UUID",
      "apiOwnerUsername": "CLIENT",
      "fileType": "PRESCRIPTION",
      "convertedTime": "2020-04-23T13:56:02.68",
      "createdTime": "2020-04-16T21:14:03.518",
      "sizeInBytes": 123456789
    }
  ]
```


### `GET /files/operationsBetween`
Return paged list of files with operations performed inside a date range. Here are the supported parameters, both are optional:

- `start`, date time. Must be in the past.
- `end`, date time. Must be in the present or past.

#### Example:
```bash
$ http GET /files/operationsBetween start==2020-04-30T13:21:08+00:00 end==2020-04-29T13:21:08+00:00
```

```json
[
    {
      "id": "UUID",
      "fileName": "filename.zip",
      "providerFileId": "123456789",
      "providerName": "CNHI",
      "providerId": 2,
      "originalUrl": "S3_URL",
      "rawGeojsonUrl": "S3_URL",
      "status": "FAILED",
      "leafUserId": "UUID",
      "apiOwnerUsername": "CLIENT",
      "fileType": "PRESCRIPTION",
      "convertedTime": "2020-04-23T13:56:02.68",
      "createdTime": "2020-04-16T21:14:03.518",
      "sizeInBytes": 123456789
    }
  ]
```


### `POST /files/merge`
Perform a merge between two or more files. 

#### Example:
```bash
$ http POST /files/merge ids:='["ID_1", "ID_2"]'
```

If any of the file ids passed does not have the `stdGeoJsonUrl` entry, the call will result in 404. All files must have the same `leafUserId`. If not, it will result in 500.

Response sample:
```json
{
  "id": "UUID",
  "status": "string",
  "stdGeojsonUrl": "S3_URL"
}
```


### `DELETE /files/{id}`
Delete a file entry by its id.

#### Example:
```bash
$ http DELETE /files/UUID
```


### `GET /files/{id}`
Returns a file entry by its id

#### Example:
```bash
$ http GET /files/UUID
```


```json
{
  "apiOwnerUsername": "string",
  "convertedTime": "2020-04-29T20:13:42.811Z",
  "createdTime": "2020-04-29T20:13:42.811Z",
  "endTime": "2020-04-29T20:13:42.811Z",
  "fileFormat": "string",
  "fileName": "string",
  "fileType": "string",
  "id": "UUID",
  "leafUserId": "UUID",
  "originalUrl": "string",
  "pngUrl": "string",
  "providerFieldId": "string",
  "providerFileId": "string",
  "providerId": 0,
  "providerName": "string",
  "rawGeojsonUrl": "string",
  "sizeInBytes": 0,
  "startTime": "2020-04-29T20:13:42.812Z",
  "status": "string",
  "stdGeojsonUrl": "string"
}
```


### `GET /files/{id}/summary`
Returns the summary entry given for the file. The summary is a single GeoJSON feature containing the convex hull of all operation data and some statistics calculated from it.

Example:
```bash
$ http GET /files/{id}/summary
```

### `GET /files/{id}/images`
Returns the properties images for the file.

Example:
```bash
$ http GET /files/{id}/images
```


```json
[
  {
    "property": "elevation",
    "url": "PNG_URL.png"
  },
  {
    "property": "targetRate",
    "url": "PNG_URL.png"
  },
  {
    "property": "speed",
    "url": "PNG_URL.png"
  },
  {
    "property": "distance",
    "url": "PNG_URL.png"
  },
  {
    "property": "heading",
    "url": "PNG_URL.png"
  },
  {
    "property": "appliedRate",
    "url": "PNG_URL.png"
  }
]
```


Note: The image entry it was only shown on this endpoint. Also, we provide an auxiliar XML tha helps GIS tools to locate the image. You just need to request for the disere png url with the `.aux.xml` suffix.


### `GET /files/{x}/{y}/{z}.{ext}?leafUserId=1&property=speed`
Returns an image of operations in the tile x/y/z filtered by property (obligatory) and other properties, like leafUserId.

Example:
```bash
$ http GET /files/2051/3109/13.png?property=speed
```


### `POST /files`
Perform a file POST to operations-service and automatically process the received file. You will need to inform the `leafUserId` to associate this new file, the `fileFormat`, that must be one of:

```
SHAPEFILE,
ADAPTADM,
DATCLIMATE,
CN1,
TRIMBLE,
ISO11783,
GEOJSON
```

And the file `provider` as:

```
CNHI, 
JohnDeere,
Trimble,
ClimateFieldView,
Leaf
```

#### Example:
To upload an `SHAPEFILE` named `shapefile.zip`, with the provider `Leaf` for the leafUserID `b7bd056b-51c8-4433-9022-fbb2288ffbf4` you will need to perform the following curl:

```bash
$ curl --location --request POST 'https://a.agrigate.io/services/operations/api/files?' \
		'leafUserId=b7bd056b-51c8-4433-9022-fbb2288ffbf4' \
		'&provider=Leaf&fileFormat=SHAPEFILE' \
--header 'Authorization: Bearer {{YOUR_TOKEN}}' \
--form 'file=@PATH/shapefile.zip'
```

If you pass an invalid `provider`, or `fileFormat`, or `leafUserId` you will receive an HTTP 400 status response. Otherwise, you will get and 201 status and the following response:

Response sample:
```json
{
    "message": "Your file is being processed and will be available in a few minutes",
    "id": "UUID"
}
```