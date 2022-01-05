---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: #get-all-fields
[3]: #get-a-field
[4]: #create-a-field
[5]: #get-all-operations-of-a-field
[6]: #get-an-operation-of-a-field
[7]: #get-fields-by-geometry-deprecated
[8]: #get-intersection-of-fields
[9]: #delete-a-field
[10]: #get-all-boundaries-from-field
[11]: #get-a-boundary-from-field
[12]: #get-active-boundary-from-field
[13]: #update-active-boundary-from-field
[14]: #get-all-farms
[15]: #get-a-farm
[16]: #get-all-growers
[17]: #get-a-grower
[18]: crops
[19]: #get-fields-by-geometry 


## About
Here we list all the available endpoints from Fields API. For easily
calling them, we recommend using [Leaf's Postman collection][1].

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/fields/api
```

There is a [REST resources](#rest-resources) section if you want to check it out.

This service has the following endpoints available:

Description | Endpoints
--- | ---
[Get all fields][2] | <span class="badge badge--success">GET</span> `/fields`
[Get a field][3] | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}`
[Create a field][4] | <span class="badge badge--warning">POST</span> `/users/{id}/fields`
[Get all operations of a field][5] | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}/operations`
[Get an operation of a field][6] | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}/operations/{id}`
[Get fields by geometry (deprecated)][7] | <span class="badge badge--warning">POST</span> `/fields/query/intersects`
[Get fields by geometry][15] | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields/intersects`
[Get intersection of fields][8] | <span class="badge badge--warning">POST</span> `/users/{id}/fields/intersect`
[Delete a field][9] | <span class="badge badge--danger">DELETE</span> `/users/{id}/fields/{id}`
[Get all boundaries from field][10] | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries`
[Get a boundary from field][11] | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}`
[Get active boundary from field][12] | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundary`
[Update active boundary from field][12] | <span class="badge badge--warning">PUT</span> `users/{leafUserId}/fields/{fieldId}/boundary`
[Get all farms][14] | <span class="badge badge--success">GET</span> `/farms`
[Get a farm][15] | <span class="badge badge--success">GET</span> `/users/{id}/farms/{id}`
[Get all growers][16] | <span class="badge badge--success">GET</span> `/growers`
[Get a grower][17] | <span class="badge badge--success">GET</span> `/growers/{id}`

## Endpoints

### Get all fields

&nbsp<span class="badge badge--success">GET</span> `/fields`

Gets a paged list of Fields. It is possible to filter the results by passing
some query parameters.

- `type`, only matches fields with this type (string).
- `provider`, only matches fields from this provider (string).
- `leafUserId`, only matches fields from this user (string).
- `page`, an integer specifying the page being fetched.
- `size`, an integer specifying the size of the page (defaults to 20).

These last two parameters are used exclusively for paging through results.


#### Response
A JSON array containing Fields.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/fields/api/fields'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/fields'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/fields'
  ```

  </TabItem>
  <TabItem value="res">

  ```json
  [
    {
      "id": "3031c20d-4331-4a24-bac0-c27087fc901f",
      "name": "str",
      "leafUserId": "5db46916-54a0-4b38-a9b1-d8e00673db63",
      "providerName": "JohnDeere",
      "providerFieldName": "Right side by the lake",
      "providerId": 2,
      "providerFieldId": "48926e0d-9bb7-4618-9214-3c2bf50d9ac2",
      "providerBoundaryId": "5bfab976-df1b-44c7-ab83-ee5befdd45af",
      "organizationId": "469039",
      "type": "ORIGINAL",
      "farmId": 1530952,
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                  -48.62195051987687,
                  -27.35030179570155
              ],
              [
                  -48.62099028904954,
                  -27.351783623790567
              ],
              [
                  -48.61883379300156,
                  -27.349906320545184
              ],
              [
                  -48.619777930574806,
                  -27.34842446734229
              ],
              [
                  -48.62195051987687,
                  -27.35030179570155
              ]
            ]
          ]
        ]
      }
    }
  ]
  ```

  </TabItem>
</Tabs>


### Get a field

&nbsp<span class="badge badge--success">GET</span> `/users/{id}/fields/{id}`

Gets a single Field by its id.

#### Response
A single [Field](#field-resource) as a JSON object.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
  ```

  </TabItem>
</Tabs>

### Create a field

&nbsp<span class="badge badge--warning">POST</span> `/users/{id}/fields`

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
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    }
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'
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

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }'
      'https://api.withleaf.io/services/fields/api/fields/users/{leafUserId}/{id}'
  ```

  </TabItem>
</Tabs>

### Get all operations of a field

&nbsp<span class="badge badge--success">GET</span> `/users/{id}/fields/{id}/operations`

Gets a paged list of all operation files of the Field and Leaf User specified in
the URL.

It is possible to filter the results by passing some query
parameters. They are listed below.

| Parameter (to filter by) | Type | Description
| - | - | - |
| operationType | String "harvested", "planted", "applied" or "other" | retrieve operations of given type
| provider | String "CNHI", "JohnDeere", "Trimble" or "ClimateFieldView" | retrieve operations of given provider
| origin | String "provider", "automerged", "merged" or "uploaded" | retrieve operations of given origin
| crop | String name of the crop, like "corn" or "soybeans". Entire crop list available [here][18] | retrieve operations with this crop.
| startTime | ISO 8601 datetime format | retrieve operations that started after this date
| endTime | ISO 8601 datetime format | retrieve operations that ended before this date

You can also pass some parameters used exclusively for paging through results.
They are:

- `page`, an integer specifying the page being fetched (default is 0)
- `size`, an integer specifying the size of the page (default is 20, max is 100)

#### Response
A JSON array of Files.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations'
  ```

  </TabItem>
</Tabs>


### Get an operation of a field

&nbsp<span class="badge badge--success">GET</span> `/users/{id}/fields/{id}/operations/{id}`

Gets a single Operation File of a field by its id.

#### Response
A single Operation File.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'cURL', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'
  ```

  </TabItem>
</Tabs>

### Get Fields by geometry (deprecated)

&nbsp<span class="badge badge--warning">POST</span> `/fields/query/intersects`

Use [this endpoint](#get-fields-by-geometry) instead.

Gets a list of fields that intersect with the GeoJSON MultiPolygon sent in
the request body.

#### Response
A JSON list of Fields.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON sample response', value: 'json', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/fields/api/fields/query/intersects'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    }
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">


  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/query/intersects'
  headers = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}

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

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }'
      'https://api.withleaf.io/services/fields/api/fields/query/intersects'
  ```

  </TabItem>

  <TabItem value="json">

  ```shell
  [
    {
      "id": "id",
      "leafUserId": "uuid",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [-89.84388470649719,39.71943436012731],
              [-89.84392762184143,39.72439389620628],
              [-89.83936786651611,39.725392361998416],
              [-89.83928203582764,39.71951688444436],
              [-89.84388470649719,39.71943436012731]
            ]
          ]
        ]
      },
      "type": "MERGED",
      "sources": []
    }
  ]
  ```

  </TabItem>
</Tabs>

### Get Fields by geometry 

&nbsp<span class="badge badge--warning">POST</span> `/users/{leafUserId}/fields/intersects`

Gets a list of fields that intersect with the GeoJSON MultiPolygon sent in
the request body. The minimum intersection percentage is given by 
`intersectionThreshold`, its default value is 0.01%.

#### Response
A JSON list of Fields.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON sample response', value: 'json', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/intersects'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    },
    'intersectionThreshold': 25.7
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">


  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/intersects'
  headers = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}

  data = {
    'geometry': {
      'type': "MultiPolygon",
      'coordinates': [...]
    },
    'intersectionThreshold': 25.7
  }

  response = requests.post(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "coordinates": [...] }, "intersectionThreshold": 25.7 }'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/intersects'
  ```

  </TabItem>

  <TabItem value="json">

  ```shell
  [
    {
      "id": "id",
      "leafUserId": "uuid",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [-89.84388470649719,39.71943436012731],
              [-89.84392762184143,39.72439389620628],
              [-89.83936786651611,39.725392361998416],
              [-89.83928203582764,39.71951688444436],
              [-89.84388470649719,39.71943436012731]
            ]
          ]
        ]
      },
      "type": "MERGED",
      "sources": []
    }
  ]
  ```

  </TabItem>
</Tabs>

### Get intersection of fields

&nbsp<span class="badge badge--warning">POST</span> `/users/{id}/fields/intersect`

Gets a GeoJSON MultiPolygon corresponding to the intersection of the Fields
specified by the given id's. Such Field id's goes in a list, in the request
body.

#### Response
A JSON in the format of a GeoJSON geometry.


<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON sample response', value: 'json', },
  ]
}>
  <TabItem value="js">

  ```js
  var axios = require('axios');
  var data = JSON.stringify(["id1","id2"]);

  var config = {
    method: 'post',
    url: 'https://api.withleaf.io/services/fields/api/users/{id}/fields/intersect',
    headers: {
      'Authorization': 'Bearer YOUR_LEAF_TOKEN',
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  ```

  </TabItem>
  <TabItem value="py">


  ```py
  import requests

  url = "https://api.withleaf.io/services/fields/api/users/{id}/fields/intersect"

  payload = "[\"id1\", \"id2\"]"
  headers = {
    'Authorization': 'Bearer YOUR_LEAF_TOKEN',
    'Content-Type': 'application/json'
  }

  response = requests.request("POST", url, headers=headers, data = payload)
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl --location --request \
  POST 'https://api.withleaf.io/services/fields/api/users/{id}/fields/intersect' \
  --header 'Authorization: Bearer YOUR_LEAF_TOKEN' \
  --header 'Content-Type: application/json' \
  --data-raw '["id1", "id2"]'
  ```

  </TabItem>

  <TabItem value="json">

  ```json
  {
      "type": "MultiPolygon",
      "coordinates": [
          [
              [
                  [-89.84388470649719,39.71943436012731],
                  [-89.84392762184143,39.72439389620628],
                  [-89.83936786651611,39.725392361998416],
                  [-89.83928203582764,39.71951688444436],
                  [-89.84388470649719,39.71943436012731]
              ]
          ]
      ]
  }
  ```

  </TabItem>
</Tabs>


<!-- ### POST /users/{id}/fields/same` --
<!-- response needs to be a json, not documenting for now -->
<!-- Gets a boolean value answering if the Fields specified by a list of Field
id's sent in the request body have the same values for their vertices, in
exactly the same order. -->


<!-- ### POST /users/{id}/fields/disjoint` --
<!-- response needs to be a json, not documenting for now -->
<!-- Gets a boolean value answering if the fields specified by a list of field
id's in the request body are disjoint.

#### Response
true or false

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  var axios = require('axios');
  var data = JSON.stringify(["id1","id2"]);

  var config = {
    method: 'post',
    url: 'https://api.withleaf.io/services/fields/api/users/{id}/fields/disjoint',
    headers: {
      'Authorization': 'Bearer YOUR_LEAF_TOKEN',
      'Content-Type': 'application/json'
    },
    data : data
  };
  ```

  </TabItem>
  <TabItem value="py">


  ```py
  import requests

  url = "https://api.withleaf.io/services/fields/api/users/{id}/fields/disjoint"

  payload = "[\"id1\", \"id2\"]\n"
  headers = {
    'Authorization': 'Bearer YOUR_LEAF_TOKEN',
    'Content-Type': 'application/json'
  }

  response = requests.request("POST", url, headers=headers, data = payload)
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl --location --request \
  POST 'https://api.withleaf.io/services/fields/api/users/{id}/fields/disjoint' \
  --header 'Authorization: Bearer YOUR_LEAF_TOKEN' \
  --header 'Content-Type: application/json' \
  --data-raw '["id1", "id2"]'
  ```

  </TabItem>
</Tabs> -->



<!-- ### POST /users/{id}/fields/integration
Uploads fields to providers. Currently we only support Climate FieldView.
New integrations will come soon.

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
``` -->

### Delete a field

&nbsp<span class="badge badge--danger">DELETE</span> `/users/{id}/fields/{id}`

Deletes the field with the given id.

### Get all boundaries from field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/boundaries`

Gets a list of boundaries from a field.

#### Response
A list of [Boundary](#boundary-resource) as a JSON object.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}/boundaries'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}/boundaries'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}/boundaries'
  ```

  </TabItem>
    <TabItem value="res">

  ```json
  [
      {
          "id": "90060545-d448-493a-965f-625a17916067",
          "status": "ACTIVE",
          "geometry": {
              "type": "MultiPolygon",
              "coordinates": [
                  [
                      [
                          [
                              -89.84392762184143,
                              39.72439389620628
                          ],
                          [
                              -89.84388470649719,
                              39.71943436012731
                          ],
                          [
                              -89.83928203582764,
                              39.71951688444436
                          ],
                          [
                              -89.83936786651611,
                              39.725392361998416
                          ],
                          [
                              -89.84392762184143,
                              39.72439389620628
                          ]
                      ]
                  ]
              ]
          },
          "area": {
              "value": 23.659422807502747,
              "unit": "ha"
          }
      }
  ]
  ```
  </TabItem>
</Tabs>

### Get a boundary from field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}`

Gets a single Boundary from a field by its id.

#### Response
A single [Boundary](#boundary-resource) as a JSON object.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}'
  ```

  </TabItem>
</Tabs>

### Get active boundary from field

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/fields/{fieldId}/boundary`

Gets the active Boundary from a field.

#### Response
A single [Boundary](#boundary-resource) as a JSON object.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  ```

  </TabItem>
</Tabs>

### Update active boundary from field

&nbsp<span class="badge badge--warning">PUT</span> `/users/{leafUserId}/fields/{fieldId}/boundary`

Updates the active boundary of field `fieldId`. The previous active boundary is not deleted, but set as inactive.

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
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    geometry: {
      type: "MultiPolygon",
      coordinates: [...]
    }
  }

  axios.put(endpoint, data, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'geometry': {
      'type': "MultiPolygon",
      'coordinates': [...]
    }
  }

  response = requests.put(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X PUT \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }'
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/boundary'
  ```

  </TabItem>
</Tabs>

### Get all farms

&nbsp<span class="badge badge--success">GET</span> `/farms`

Gets a paged list of all Farms. It is possible to pass some query parameters.

- `provider`, only matches Farms from this provider (string)
- `leafUserId`, only matches Farms from this Leaf User (UUID)
- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page (defaults to 20)

The parameters are used exclusively for paging through results.

#### Response
A JSON array containing Farms.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/fields/api/farms'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/farms'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/farms'
  ```

  </TabItem>
  <TabItem value="res">

  ```json
  [
    {
      "id": 1538766,
      "name": "name",
      "providerId": 2,
      "providerName": "JohnDeere",
      "providerFarmId": "00000000-0000-0000-0000-000000000000",
      "leafUserId": "00000000-0000-0000-0000-000000000000",
      "fieldIds": ["00000000-0000-0000-0000-000000000000"],
      "growerId": 12345
    }
  ]
  ```

  </TabItem>
</Tabs>

### Get a farm

&nbsp<span class="badge badge--success">GET</span> `/users/{id}/farms/{id}`

Gets a single Farm by its id.

#### Response
A single Farm as a JSON object.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms/{id}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/users/{leafUserId}/farms/{id}'
  ```

  </TabItem>
  <TabItem value="res">

  ```json
  {
    "id": 1551010,
    "name": "name",
    "providerName": "JohnDeere",
    "providerFarmId": "00000000-0000-0000-0000-000000000000",
    "leafUserId": "00000000-0000-0000-0000-000000000000",
    "fieldIds": ["00000000-0000-0000-0000-000000000000"],
    "growerId": 123
  }
  ```

  </TabItem>
</Tabs>

### Get all growers

&nbsp<span class="badge badge--success">GET</span> `/growers`

Gets a paged list of all Growers. Use the following parameters for paging
through results.

- `provider`, only matches Growers from this provider (string)
- `leafUserId`, only matches Growers from this Leaf User (UUID)
- `page`, an integer specifying the page being fetched
- `size`, an integer specifying the size of the page (defaults to 20)

#### Response
A JSON array containing Growers.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint ='https://api.withleaf.io/services/fields/api/growers'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/growers'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/growers'
  ```

  </TabItem>
  <TabItem value="res">

  ```json
  [
    {
      "id": 2345,
      "leafUserId": "UUID",
      "providerName": "str",
      "providerOrganizationId": "str",
      "providerCompanyId": "str",
      "providerUserId": "str",
      "providerGrowerId": "str",
      "farmIds": [4534]
    }
  ]
  ```

  </TabItem>
</Tabs>


### Get a grower

&nbsp<span class="badge badge--success">GET</span> `/growers/{id}`

Gets a single Grower by its id.

#### Response
A single Grower as a JSON object.

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
    { label: 'JSON Response', value: 'res', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/fields/api/growers/{id}'
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

  endpoint = 'https://api.withleaf.io/services/fields/api/growers/{id}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/fields/api/growers/{id}'
  ```

  </TabItem>
  <TabItem value="res">

  ```json
  {
    "id": 2345,
    "leafUserId": "UUID",
    "providerName": "str",
    "providerOrganizationId": "str",
    "providerCompanyId": "str",
    "providerUserId": "str",
    "providerGrowerId": "str",
    "farmIds": [4534]
  }
  ```

  </TabItem>
</Tabs>

## REST Resources

See below the REST resources and their endpoints.

### Field Resource

A field might have one or neither of the following keys: 
- a "mergedFieldId" key or
- a "sources" key

A Field will only have one of the previous keys if it is either a field that 
has been merged with other one(s) or if it is a result of a merge. Leaf merges
fields that have any sort of overlap. This makes it easier for you to query 
operations from a field by querying by the merged field. Because a field might 
exist in multiple providers, Leaf detects that and creates a single field that 
you can query for - and you can still query by the individual fields too.

**`geometry` and `area` are deprecated keys** that contains the geometry of the active boundary and its area, respectively.

```json
{
  "id": "UUID",
  "providerName": "str",
  "providerFieldName": "str",
  "providerFieldId": "str",
  "providerFieldName": "str",
  "providerBoundaryId": "UUID",
  "type": "ORIGINAL",
  "leafUserId": "UUID",
  "organizationId": "str",
  "mergedFieldId": ["UUID"],
  "files": ["UUID"],
  "boundaries": ["UUID"],
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
  "area": {
    "value": double,
    "unit": "ha"
  }
}
```

| Description | Endpoints
| - | - |
[Get all fields][2] | <span class="badge badge--success">GET</span> `/fields`
[Get a field][3] | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}`
[Create a field][4] | <span class="badge badge--warning">POST</span> `/users/{id}/fields`
[Get fields by geometry][7] | <span class="badge badge--warning">POST</span> `/fields/query/intersects`
[Get intersection of fields][8] | <span class="badge badge--warning">POST</span> `/users/{id}/fields/intersect`
[Delete a field][9] | <span class="badge badge--danger">DELETE</span> `/users/{id}/fields/{id}`

### Boundary Resource

Every Field at Leaf can have 0 or many boundaries. Fields created via Leaf's endpoints must have at least one boundary. Only one boundary may be active, the others are inactive boundaries. Boundaries cannot be deleted or have its geometry updated. Every update generates a new Boundary, and Leaf keeps a history of all seen Boundaries.

Each boundary has a `status` and `providerStatus`.

- `status` - Represents the current status of the boundary:
  - `ACTIVE` - If the boundary was created at Leaf, it is the active boundary. If it is from a provider,
 this boundary exists at the provider and is the active boundary there.
  - `INACTIVE` - If the boundary was created at Leaf, it is an inactive boundary. If it is from a provider, this boundary exists at the provider and is inactive there.
  - `OUTDATED_ON_PROVIDER` - The boundary is from a provider. The boundary once existed on the provider exactly as it is in that boundary, but it was edited (e.g. has a new geometry but the same provider boundary id).
  - `DELETED_ON_PROVIDER` - The boundary is from a provider. The boundary once existed on the provider, but it was deleted. The user won't find that boundary in the provider.

- `providerStatus` - Is the status of the boundary on the provider.
  - `ACTIVE` - The boundary is the active boundary in the provider.
  - `INACTIVE` - The boundary is inactive in the provider.

`providerStatus`, just like the geometry, is a static attribute. In case this attribute is changed at the provider, the boundary's `status` is updated and a new boundary is created with the updated `providerStatus` in order to maintain history.

```json
{
  "id": "UUID",
  "status": "ACTIVE",
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [
            -89.84392762184143,
            39.72439389620628
          ],
          [
            -89.84388470649719,
            39.71943436012731
          ],
          [
            -89.83928203582764,
            39.71951688444436
          ],
          [
            -89.83936786651611,
            39.725392361998416
          ],
          [
            -89.84392762184143,
            39.72439389620628
          ]
        ]
      ]
    ]
  },
  "area": {
    "value": double,
    "unit": "ha"
  }
}
```

| Description | Endpoints
| - | - |
[Get all boundaries from field][10] | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries`
[Get a boundary from field][11] | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundaries/{boundaryId}`
[Get active boundary from field][12] | <span class="badge badge--success">GET</span> `users/{leafUserId}/fields/{fieldId}/boundary`
[Update active boundary from field][13] | <span class="badge badge--warning">PUT</span> `users/{leafUserId}/fields/{fieldId}/boundary`

### Operation Resource

```json
{
  "id": "UUID",
  "operationType": "harvested|planted|applied",
  "startTime": "ISO date-time",
  "endTime": "ISO date-time",
  "crops": ["str"],
  "varieties": ["str"],
  "providerFileId": "str",
  "provider": "Trimble",
  "origin": "provider|merged|automerged|uploaded",
  "leafUserId": "UUID"
}
```

| Description | Endpoints
| - | - |
[Get all operations of a field][5] | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}/operations`
[Get an operation of a field][6] | <span class="badge badge--success">GET</span> `/users/{id}/fields/{id}/operations/{id}`

### Farm Resource

```json
{
  "id": "long",
  "name": "str",
  "providerName": "str",
  "providerFarmName": "str",
  "providerFarmId": "UUID",
  "leafUserId": "UUID",
  "growerId": "long",
  "fieldIds": ["UUID"]
}
```

| Description | Endpoints
| - | - |
[Get all farms][14] | <span class="badge badge--success">GET</span> `/farms`
[Get a farm][15] | <span class="badge badge--success">GET</span> `/users/{id}/farms/{id}`


### Grower Resource

```json
{
  "id": 2345,
  "leafUserId": "UUID",
  "providerName": "str",
  "providerOrganizationId": "str",
  "providerCompanyId": "str",
  "providerUserId": "str",
  "providerGrowerId": "str",
  "farmIds": [4534]
}
```

| Description | Endpoints
| - | - |
[Get all growers][16] | <span class="badge badge--success">GET</span> `/growers`
[Get a grower][17] | <span class="badge badge--success">GET</span> `/growers/{id}`
