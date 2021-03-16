---
title: Endpoints
---


:::caution use our Uploaders endpoint
This service is currently being improved. We recommend using our 
**[uploader](http://localhost:3000/docs/docs/operations_endpoints#upload-a-file)**
endpoint, with more features such as standardization, operation images/maps and units.
:::


## About
All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/converters/api
```

This service has the following endpoints available:

```
POST   /{input}-{output}
POST   /
```

## Endpoints

List of all the available endpoints.

### `POST /{input}-{output}`
Posts a file, passed as a multipart to the service. The file will be converted from the format specified in `input` to the `output` format. All The valid combinations of input and output are described **[in this table](/docs/docs/converters_overview#available-converters)**

It is possible to link this conversion with a Leaf User created, passing his ID as a query parameter: `leafUserId`. But its use is not mandatory.

#### Example
```shell
curl -X POST \
-H 'Content-Type: multipart/form-data' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer YOUR_LEAF_TOKEN' {"type":"formData"} \
'https://api.withleaf.io/services/converters/api/geojson-shapefile?leafUserId=uuid' \
--form 'file=@path'
```

Response sample:
```json
{
    "uri": "uri to an S3 bucket",
    "message": "Success"
}
```

### `POST /`
It performs exactly the same as the previous endpoint, but, instead of passing
variables in the path, you pass them via params. Like so:

#### Example
```shell
curl -X POST \
--header 'Content-Type: multipart/form-data' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer YOUR_LEAF_TOKEN' {"type":"formData"} \
'https://api.withleaf.io/services/converters/api/?input=geojson&output=shapefile&leafUserId=uuid' \
--form 'file=@path'
```

This example is equivalent to the example in the previous endpoint. The input and output obey the same rules as well.
