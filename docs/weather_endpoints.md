---
title: Weather Endpoints
description: Weather - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: https://github.com/Leaf-Agriculture/Leaf-API-Postman-Collection
[2]: #get-daily-forecast
[3]: #get-hourly-forecast
[4]: #get-daily-historical
[5]: #get-hourly-historical

## About

Here we list all the available endpoints from Weather API. For easily calling them, 
we recommend using [Leaf's Postman collection][1].

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/weather/api
```

This service has the following endpoints available:

| Description              | Endpoints                                                                                                    |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| [Get Daily Forecast][2]  | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/daily`   |
| [Get Hourly Forecast][3] | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly`  |
| [Get Daily Historical][4]   | <span class="badge badge--warning">POST</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/daily`   |
| [Get Hourly Historical][5]  | <span class="badge badge--warning">PATCH</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/hourly` |

## Endpoints

### Get Daily Forecast

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/daily`

Get daily forecast by leaf user and field

#### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/daily'
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

  endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/daily'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/daily'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "type": "Feature",
  "properties": {
    "maxTemperature": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "sunrise": {
      "values": [
        "time": "str",
        "value": "str"
      ]
    },
    "snowfallSum": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "precipitationSum": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "maxWindspeed": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "processedTime": "str",
    "rainSum": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "maxWindgusts": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "meanTemperature": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "minTemperature": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "sunset": {
      "values": [
        "time": "str",
        "value": "str"
      ]
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ]
    }
  },
  "geometry": {
    "type": "str",
    "coordinates": [
      0,
      0
    ]
  }
}
```  

### Get Hourly Forecast

Get hourly forecast by leaf user and field

#### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly'
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

  endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "type": "Feature",
  "properties": {
    "rain": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "dewpoint": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "windgusts": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "snowfall": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "shortwaveRadiation": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "precipitation": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "relativeHumidity": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "temperature": {
      "values": [
        "time": "str",
        "value": int
      ]
    }
  },
  "geometry": {
    "type": "str",
    "coordinates": [
      0,
      0
    ]
  }
}
```  

### Get Daily Historical

Get daily historical by leaf user and field

#### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/daily'
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

  endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/daily'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/daily'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "type": "Feature",
  "properties": {
    "maxTemperature": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "sunrise": {
      "values": [
        "time": "str",
        "value": "str"
      ]
    },
    "snowfallSum": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "precipitationSum": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "maxWindspeed": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "processedTime": "str",
    "rainSum": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "maxWindgusts": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "meanTemperature": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "minTemperature": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "sunset": {
      "values": [
        "time": "str",
        "value": "str"
      ]
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ]
    }
  },
  "geometry": {
    "type": "str",
    "coordinates": [
      0,
      0
    ]
  }
}
```  


### Get Hourly Historical

Get hourly historical by leaf user and field

#### Request examples

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

  const endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/hourly'
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

  endpoint = 'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/hourly'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/users/{leafUserId}/weather/historical/field/{fieldId}/hourly'
  ```

  </TabItem>
</Tabs>


#### Response

```json
{
  "type": "Feature",
  "properties": {
    "precipitation": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "rain": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "windgusts": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "dewpoint": {
      "values": [
        "time": "str",
        "value": int
      ]
    }
    "snowfall": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "processedTime": "str",
    "relativeHumidity": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "temperature": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "windspeed": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "shortwaveRadiation": {
      "values": [
        "time": "str",
        "value": int
      ]
    },
    "cloudcover": {
      "values": [
        "time": "str",
        "value": int
      ]
    }
  },
  "geometry": {
    "type": "str",
    "coordinates": [
      0,
      0
    ]
  }
}
```  


