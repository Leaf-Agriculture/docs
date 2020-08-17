---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://a.agrigate.io/services/fields/api
```

This service has the following endpoints available:

Field Resource
```
GET    /fields
GET    /fields/after
GET    /fields/before
GET    /fields/between
GET    /users/{leafUserId}/fields/{id}
POST   /users/{leafUserId}/fields/intersects
POST   /users/{leafUserId}/fields/disjoint
POST   /users/{leafUserId}/fields/integration
POST   /users/{leafUserId}/fields/intersect
POST   /users/{leafUserId}/fields/same
POST   /users/{leafUserId}/fields/{id}/integration
DELETE /users/{leafUserId}/fields/{id}
```

Operation Resource
```
GET    /users/{leafUserId}/fields/{fieldId}/operations
GET    /users/{leafUserId}/fields/{fieldId}/operations/{id}
```

Farm Resource
```
GET    /farms
GET    /farms/{id}
POST   /farms
PUT    /farms
DELETE /farms
```

Grower Resource
```
GET    /growers
GET    /growers/{id}
POST   /growers
PUT    /growers
DELETE /growers
```

## Endpoints
Here we list all the available endpoints from this microservice. For easily
testing it, we recommend to see our Postman [collection][1].

### `GET /fields`
Gets a paged list of Fields. It is possible to filter the results by passing some query parameters.
They are listed below.

- `leafUserId`, only matches files from this user (string).
- `operationtype`, one of the following values: `harvested`, `planted`, `applied`, `other` (string).
- `operationProvider`, filter by the provider. Currently we support the
  following providers: `CNHI`, `JohnDeere`, `Trimble` and `ClimateFieldView` (string).
- `operationCrop`, provider's identifier crop id. Requires `operationProvider` (string).
- `operationVariety` provider's identifier variety name/code. Requires `operationProvider`.
- `operationStartTime`, as ISO 8601 date to filter by the operation's start time.
- `operationEndTime`, as ISO 8601 date to filter by the operation's end time.

If some operation parameter is passed, then the response will include the entry `"files"`, otherwise
such entry won't be present.

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page

It returns a JSON object like the following:

```json
[
  {
    "id": "UUID",
    "providerName": "JohnDeere",
    "providerId": 2,
    "providerFieldId": "fbf5c2c6-3e1a-4b0b-9dd9-e5f990f8ea44",
    "providerBoundaryId": "46d8fd29-18b5-482c-85d9-06bf7aec6ed7",
    "type": "ORIGINAL",
    "leafUserId": "8a80ade8-711d-f5c7-0171-210733570007",
    "organizationId": "462114",
    "mergedFieldId": ["UUID"],
    "files": ["8c834678-72b2-4194-acd1-5ea1eae07a77"]
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [
              -93.48821327980518,
              41.77137549568163
            ],
            [
              -93.48817333680519,
              41.77143534378164
            ],
            [
              -93.48821327390516,
              41.7606885797798
            ],
            [
              -93.48821327980518,
              41.77137549568163
            ]
          ]
        ]
      ]
    },
  }
    ...
]
```

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://a.agrigate.io/services/fields/api/fields'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://a.agrigate.io/services/fields/api/fields'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/fields/api/fields'
  ```

  </TabItem>
</Tabs>

### `GET /fields/{id}`
Gets a single Field by its id.

Returns a single JSON object:

```json
{
  "id": "UUID",
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [...]
  },
  "providerName": "JohnDeere",
  "providerId": 2,
  "providerFieldId": "fbf5c2c6-3e1a-4b0b-9dd9-e5f990f8ea44",
  "providerBoundaryId": "46d8fd29-18b5-482c-85d9-06bf7aec6ed7",
  "type": "ORIGINAL",
  "leafUserId": "8a80ade8-711d-f5c7-0171-210733570007",
  "organizationId": "462114",
  }
}
```

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://a.agrigate.io/services/fields/api/fields/{id}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://a.agrigate.io/services/fields/api/fields/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/fields/api/fields/{id}'
  ```

  </TabItem>
</Tabs>

### `GET /fields/between`
Gets a list of all the fields created between the instants given with the
query parameters `start` and `end`. Both in ISO date-time format. They
respectively must be in the past and in the past or present.

### `GET /fields/before`
Gets a list of all the fields created before the instant given with the
query parameter `instant` (ISO date-time format).  It must be a time in the
past.

### `GET /fields/after`
Gets a list of all the fields created after the instant given with the query
parameter `instant` (ISO date-time format).  It must be a time in the past.

### `DELETE /users/{leafUserId}/fields/{id}`
Deletes the field with the given id.

### `POST /users/{leafUserId}/fields`
Creates a field. The `id` is optional. `geometry` and `leafUserId` are
mandatory. If no `id` is provided, then an UUID will be generated. The
Field id **can not** be updated.

### `POST /users/{leafUserId}/fields/intersect`
Gets a GeoJSON MultiPolygon corresponding to the intersection of the fields
specified by the given id's.  Such field id's goes in a list, in the request
body.

### `POST /fields/query/intersects`
Gets a list of fields that intersects with the GeoJSON MultiPolygon sent in
the request body.

### `POST /users/{leafUserId}/fields/same`
Gets a boolean value answering if the fields specified by a list of field
id's specified in the request body have the same values for their vertices, in
exactly the same order.

### `POST /users/{leafUserId}/fields/disjoint`
Gets a boolean value answering if the fields specified by a list of field
id's in the request body are disjoint.

### `POST /users/{leafUserId}/fields/integration`
Uploads fields to providers. Currently we only support Climate FieldView.
However new integrations will be added soon.

Request body format:

```json
{
  "fields": ["UUID"],
  "providers": ["ClimateFieldView"]
}
```

Response format:

```json
{
  "UUID": {
    "ClimateFieldView": {
      "id": "0cb726c8-aff0-415a-9de3-a04b627008dd"
    },
  },
}
```


### `GET /users/{userId}/fields/{fieldId}/operations`
Gets a paged list of all operation files of the field specified by the URL
parameter `fieldId`. It is possible to filter the results by passing some query
parameters.  They are listed below.

- `operationtype`, one of the following values: `harvested`, `planted`, `applied`, `other` (string).
- `provider`, filter by the provider. Currently we support the following
  providers: `CNHI`, `JohnDeere`, `Trimble` and `ClimateFieldView` (string).
- `crop`, provider's identifier crop id. Requires `operationProvider` (string).
- `variety` provider's identifier variety name/code. Requires `operationProvider`.
- `startTime`, as ISO 8601 date to filter by the operation's start time.
- `endTime`, as ISO 8601 date to filter by the operation's end time.

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page

It returns a JSON object like the following:

```json
[{
  "id": "UUID",
  "operationType": "planted",
  "startTime": "2020-06-02T10:05:00Z",
  "endTime": "2020-06-02T18:23:00Z",
  "crops": ["corn"],
  "varieties": ["corn variety"],
  "providerFileId": "string",
  "provider": "Trimble",
  "leafUserId": "UUID"
}, ...
]
```


[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://tools.ietf.org/html/rfc7946
