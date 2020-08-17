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

See below the REST resources and their endpoints available in this service.

#### Field Resource

Form of a Field:
```json
{
  "id": "UUID",
  "providerName": "JohnDeere",
  "providerFieldId": "UUID",
  "providerBoundaryId": "UUID",
  "type": "ORIGINAL",
  "leafUserId": "UUID",
  "organizationId": "str",
  "mergedFieldId": ["UUID"],
  "files": ["UUID"]
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [-93.48821327980518, 41.77137549568163],
          [-93.48817333680519, 41.77143534378164],
          [-93.48821327390516, 41.76068857977987],
          [-93.48821327980518, 41.77137549568163]
        ]
      ]
    ]
  },
}
```

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

#### Operation Resource

Form of a Operation/File:
```json
{
  "id": "UUID",
  "operationType": "planted",
  "startTime": "ISO date-time",
  "endTime": "ISO date-time",
  "crops": ["str"],
  "varieties": ["str"],
  "providerFileId": "str",
  "provider": "Trimble",
  "leafUserId": "UUID"
}
```

```
GET    /users/{leafUserId}/fields/{fieldId}/operations
GET    /users/{leafUserId}/fields/{fieldId}/operations/{id}
```


## Endpoints
Here we list all the available endpoints from this microservice. For easily
testing it, we recommend to see our Postman [collection][1].

### `GET /fields`
Gets a paged list of Fields. It is possible to filter the results by passing
some query parameters.  They are listed below.

- `leafUserId`, only matches files from this user (string).
- `operationtype`, one of the following values: `harvested`, `planted`,
  `applied`, `other` (string).
- `operationProvider`, filter by the provider. Currently we support the
  following providers: `CNHI`, `JohnDeere`, `Trimble` and `ClimateFieldView`
  (string).
- `operationCrop`, provider's identifier crop id. Requires `operationProvider`
  (string).
- `operationVariety` provider's identifier variety name/code. Requires
  `operationProvider`.
- `operationStartTime`, as ISO 8601 date to filter by the operation's start
  time.
- `operationEndTime`, as ISO 8601 date to filter by the operation's end time.

If some operation parameter is passed, then the response will include the entry
`"files"`, otherwise such entry won't be present.

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page

#### Response
A JSON array containing Fields.

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

#### Response
A single Field as a JSON object.

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

  const endpoint = 'https://a.agrigate.io/services/fields/api/users/{leafUserId}/fields/{id}'
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

  endpoint = 'https://a.agrigate.io/services/fields/api/users/{leafUserId}/fields/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/fields/api/users/{leafUserId}/fields/{id}'
  ```

  </TabItem>
</Tabs>

### `GET /fields/before`
Gets a list of all the Fields created **before** the instant given in the
query parameter `instant` (ISO date-time format).  It must be a time in the
past.

#### Response
A JSON list of Fields.

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

  const endpoint ='https://a.agrigate.io/services/fields/api/fields/before'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const param = {instant: 'END TIME'}

  axios.get(endpoint, {headers, param})
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://a.agrigate.io/services/fields/api/fields/before'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  param = {'instant': 'END TIME'}

  response = requests.get(endpoint, headers=headers, params=param)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/fields/api/fields/before?instant=<END TIME>'
  ```

  </TabItem>
</Tabs>


### `GET /fields/after`
Gets a list of all the fields created **after** the instant given in the query
parameter `instant` (ISO date-time format).  It must be a time in the past.

#### Response
A JSON list of Fields.

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

  const endpoint ='https://a.agrigate.io/services/fields/api/fields/after'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const param = {instant: 'START TIME'}

  axios.get(endpoint, {headers, param})
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://a.agrigate.io/services/fields/api/fields/after'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  param = {'instant': 'END TIME'}

  response = requests.get(endpoint, headers=headers, params=param)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/fields/api/fields/after?instant=<END TIME>'
  ```

  </TabItem>
</Tabs>


### `GET /fields/between`
Gets a list of all the Fields created **between** the instants given in the
query parameters `start` and `end`. Both in ISO date-time format. They
respectively must be in the past and in the past or present.

#### Response
A JSON list of Fields.

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

  const endpoint ='https://a.agrigate.io/services/fields/api/fields/between'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const interval = {
    start: 'START TIME',
    end: 'END TIME',
  }

  axios.get(endpoint, {headers, interval})
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://a.agrigate.io/services/fields/api/fields/between'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  interval = {
    'start': 'START TIME',
    'end': 'END TIME',
  }

  response = requests.get(endpoint, headers=headers, params=interval)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/fields/api/fields/between?start=<START TIME>&end=<END TIME>'
  ```

  </TabItem>
</Tabs>



### `DELETE /users/{leafUserId}/fields/{id}`
Deletes the field with the given id.

### `POST /users/{leafUserId}/fields`

Creates a Field for the user `leafUserId`. A resquest body must be provided
containing the an entry `"geometry"`, which represents the boundaries of the
Field being created as a GeoJSON geometry (it must be a `"MultiPolygon"`).
The entry `"id"` is optional. If no id is provided, an UUID will be generated.
The Field id CAN NOT be updated.

Request body example:

```json
{
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [-93.48821327980518, 41.77137549568163],
          [-93.48817333680519, 41.77143534378164],
          [-93.48821327390516, 41.76068857977987],
          [-93.48821327980518, 41.77137549568163]
        ]
      ]
    ]
  }
}
```

#### Response
A Field as a JSON object.

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

  const endpoint ='https://a.agrigate.io/services/fields/api/users/{leafUserId}/fields/{id}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    }
  }

  axios.get(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://a.agrigate.io/services/fields/api/users/{leafUserId}/fields/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'geometry': {
      'type': "MultiPolygon",
      'coordinates': [...]
    }
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }'
      'https://a.agrigate.io/services/fields/api/fields/users/{leafUserId}/{id}'
  ```

  </TabItem>
</Tabs>


### `POST /users/{leafUserId}/fields/intersect`
Gets a GeoJSON MultiPolygon corresponding to the intersection of the Fields
specified by the given id's. Such Field id's goes in a list, in the request
body.

Request body example:

```json
{
  "id": ["UUID1", "UUID2"]
}
```

#### Response
A JSON in the format of a GeoJSON geometry.

```json
{
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [-93.48821327980518, 41.77137549568163],
          [-93.48817333680519, 41.77143534378164],
          [-93.48821327390516, 41.76068857977987],
          [-93.48821327980518, 41.77137549568163]
        ]
      ]
    ]
  }
}
```

### `POST /fields/query/intersects`
Gets a list of fields that intersects with the GeoJSON MultiPolygon sent in
the request body.

#### Response
A JSON list of Fields.

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

  const endpoint ='https://a.agrigate.io/services/fields/api/fields/query/intersects'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    }
  }

  axios.get(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://a.agrigate.io/services/fields/api/query/intersects'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'geometry': {
      'type': "MultiPolygon",
      'coordinates': [...]
    }
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }'
      'https://a.agrigate.io/services/fields/api/fields/query/intersects'
  ```

  </TabItem>
  <TabItem value="sh">

### `POST /users/{leafUserId}/fields/same`
Gets a boolean value answering if the Fields specified by a list of Field
id's sent in the request body have the same values for their vertices, in
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

#### Response
A JSON in the followin format.

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
Gets a paged list of all operation files of the Field specified by the URL
parameter `fieldId`. It is possible to filter the results by passing some query
parameters. They are listed below.

- `operationtype`, one of the following values: `harvested`, `planted`,
  `applied`, `other` (string).
- `provider`, filter by the provider. Currently we support the following
  providers: `CNHI`, `JohnDeere`, `Trimble` and `ClimateFieldView` (string).
- `crop`, provider's identifier crop id. Requires `operationProvider` (string).
- `variety` provider's identifier variety name/code. Requires
  `operationProvider`.
- `startTime`, as ISO 8601 date to filter by the operation's start time.
- `endTime`, as ISO 8601 date to filter by the operation's end time.

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page

#### Response
A JSON array of Files.

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

  const endpoint ='https://a.agrigate.io/services/fields/api/users/{userId}/fields/{fieldId}/operations'
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

  endpoint = 'https://a.agrigate.io/services/fields/api/users/{userId}/fields/{fieldId}/operations'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://a.agrigate.io/services/fields/api/users/{userId}/fields/{fieldId}/operations'
  ```

  </TabItem>
</Tabs>



[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://tools.ietf.org/html/rfc7946
