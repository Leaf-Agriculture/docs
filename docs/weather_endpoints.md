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
[6]: #get-daily-forecast-for-latlon
[7]: #get-hourly-forecast-for-latlon
[8]: #get-daily-historical-for-latlon
[9]: #get-hourly-historical-for-latlon

## About

Here we list all the available endpoints from Leaf's Weather API. For an easy way to call them, 
we recommend using [Leaf's Postman collection][1].

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/weather/api
```

This service has the following endpoints available:

| Description                             | Endpoints                                                                                                     |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------|
| [Get Daily Forecast][2]                 | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/daily`    |
| [Get Hourly Forecast][3]                | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly`   |
| [Get Daily Forecast for lat/long][6]    | <span class="badge badge--success">GET</span> `/weather/forecast/daily/{lat},{lon}`                           |
| [Get Hourly Forecast for lat/long][7]   | <span class="badge badge--success">GET</span> `/weather/forecast/hourly/{lat},{lon}`                          |
| [Get Daily Historical][4]               | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/daily`  |
| [Get Hourly Historical][5]              | <span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/hourly` |
| [Get Daily Historical for lat/long][8]  | <span class="badge badge--success">GET</span> `/weather/historical/daily/{lat},{lon}`                         |
| [Get Hourly Historical for lat/long][9] | <span class="badge badge--success">GET</span> `/weather/historical/hourly/{lat},{lon}`                        |

:::info Note
Daily data endpoints are limited to a request of one year (366 days), so `endTime` - `startTime` <= 366. Hourly data endpoints are limited to an interval of 30 days per request, so `endTime` - `startTime` <= 30.
:::

## Endpoints

### Get Daily Forecast

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/daily`

Get daily forecasted weather data by leaf user and field. If dates are not set on the endpoint, 
the response will return forecast data for the next seven days by default.


| Parameter (to filter by) | values                                                                  |
|--------------------------|-------------------------------------------------------------------------|
| endTime                  | ISO 8601 date. Returns operations until the endTime                     |
| startTime                | ISO 8601 date. Returns operations from the startTime onward             |
| model                    | Weather model data: `icon`, `gfs`, `ifs`, `jma`, `gem` or `arpegeArome` |
| units                    | System of units: `imperial` or `metric`. The default is `imperial`      |

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
      ],
      "unit": "ºF"
    },
    "sunrise": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "precipitationSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "maxWindspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "processedTime": "str",
    "rainSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "maxWindgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "meanTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "minTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "sunset": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      -89.64355775454169,
      39.802794365611476
    ]
  }
}
```  

### Get Hourly Forecast

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/forecast/field/{fieldId}/hourly`

Get hourly forecasted weather data by Leaf User and field. If dates are not set on the endpoint, the response 
will return forecast data for the next seven days by default.


| Parameter (to filter by) | values                                                                  |
|--------------------------|-------------------------------------------------------------------------|
| endTime                  | ISO 8601 date. Returns operations until the endTime                     |
| startTime                | ISO 8601 date. Returns operations from the startTime onward             |
| model                    | Weather model data: `icon`, `gfs`, `ifs`, `jma`, `gem` or `arpegeArome` |
| units                    | System of units: `imperial` or `metric`. The default is `imperial`      |

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
      ],
      "unit": "inch"
    },
    "dewpoint": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "windgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "snowfall": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "shortwaveRadiation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "relativeHumidity": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "windspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      -89.64355775454169,
      39.802794365611476
    ]
  }
}
```


### Get Daily Forecast for lat/lon

&nbsp<span class="badge badge--success">GET</span> `/weather/forecast/daily/{lat},{lon}`

Get daily forecasted weather data for lat/lon by leaf user and field. If dates are not set on the endpoint, 
the response will return forecast data for the next seven days by default.


| Parameter (to filter by) | values                                                                  |
|--------------------------|-------------------------------------------------------------------------|
| endTime                  | ISO 8601 date. Returns operations until the endTime                     |
| startTime                | ISO 8601 date. Returns operations from the startTime onward             |
| model                    | Weather model data: `icon`, `gfs`, `ifs`, `jma`, `gem` or `arpegeArome` |
| units                    | System of units: `imperial` or `metric`. The default is `imperial`      |
| lat                      | Latitude must be in the range of -90 to 90                              |
| lon                      | Longitude must be in the range of -180 to 180                           |

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

  const endpoint = 'https://api.withleaf.io/services/weather/api/weather/forecast/daily/{lat},{lon}'
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

  endpoint = 'https://api.withleaf.io/services/weather/api/weather/forecast/daily/{lat},{lon}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/weather/forecast/daily/{lat},{lon}'
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
      ],
      "unit": "ºF"
    },
    "sunrise": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "precipitationSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "maxWindspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "processedTime": "str",
    "rainSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "maxWindgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "meanTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "minTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "sunset": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      {lat},
      {lon}
    ]
  }
}
```  

### Get Hourly Forecast for lat/lon

&nbsp<span class="badge badge--success">GET</span> `/weather/forecast/hourly/{lat},{lon}`

Get hourly forecasted weather data for lat/lon by Leaf User and field. If dates are not set on the endpoint, the response 
will return forecast data for the next seven days by default.


| Parameter (to filter by) | values                                                                  |
|--------------------------|-------------------------------------------------------------------------|
| endTime                  | ISO 8601 date. Returns operations until the endTime                     |
| startTime                | ISO 8601 date. Returns operations from the startTime onward             |
| model                    | Weather model data: `icon`, `gfs`, `ifs`, `jma`, `gem` or `arpegeArome` |
| units                    | System of units: `imperial` or `metric`. The default is `imperial`      |
| lat                      | Latitude must be in the range of -90 to 90                              |
| lon                      | Longitude must be in the range of -180 to 180                           |


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

  const endpoint = 'https://api.withleaf.io/services/weather/api/weather/forecast/hourly/{lat},{lon}
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

  endpoint = 'https://api.withleaf.io/services/weather/api/weather/forecast/hourly/{lat},{lon}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/weather/forecast/hourly/{lat},{lon}'
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
      ],
      "unit": "inch"
    },
    "dewpoint": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "windgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "snowfall": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "shortwaveRadiation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "relativeHumidity": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "windspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      {lat},
      {lon}
    ]
  }
}
```  


### Get Daily Historical

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/daily`

Get daily historical weather data by Leaf User and field. If the dates are not defined in the endpoint, the response 
will return data from the last seven days by default.

Please note, historical weather data from less than 5 days ago is unavailable. If you’re wanting historical weather data within the last 5 days, you can use the forecast service to get this information. 


| Parameter (to filter by) | values                                                                  |
|--------------------------|-------------------------------------------------------------------------|
| endTime                  | ISO 8601 date. Returns operations until the endTime                     |
| startTime                | ISO 8601 date. Returns operations from the startTime onward             |
| model                    | Historical model data: `era5` or `era5Land`                             |
| units                    | System of units: `imperial` or `metric`. The default is `imperial`      |

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
      ],
      "unit": "ºF"
    },
    "sunrise": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "precipitationSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "maxWindspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "processedTime": "str",
    "rainSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "maxWindgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "meanTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "minTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "sunset": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      -89.64355775454169,
      39.802794365611476
    ]
  }
}
```  


### Get Hourly Historical

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/hourly`

Get hourly historical weather data by Leaf User and field. If the dates are not defined in the endpoint, the response 
will return data from the last seven days by default.


| Parameter (to filter by) | values                                                              |
|--------------------------|---------------------------------------------------------------------|
| endTime                  | ISO 8601 date. Returns operations until the endTime                 |
| startTime                | ISO 8601 date. Returns operations from the startTime onward         |
| model                    | Historical model data: `era5` or `era5Land`                         |
| units                    | System of units: `imperial` or `metric`. The default is `imperial`  |


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
    "rain": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "dewpoint": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "windgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "snowfall": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "shortwaveRadiation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "relativeHumidity": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "windspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      -89.64355775454169,
      39.802794365611476
    ]
  }
}
```


### Get Daily Historical for lat/lon

&nbsp<span class="badge badge--success">GET</span> `/weather/historical/daily/{lat},{lon}`

Get daily historical weather data for lat/lon by Leaf User and field. If the dates are not defined in the endpoint, the response 
will return data from the last seven days by default.

Please note, historical weather data from less than 5 days ago is unavailable. If you’re wanting historical weather data within the last 5 days, you can use the forecast service to get this information. 


| Parameter (to filter by) | values                                                              |
|--------------------------|---------------------------------------------------------------------|
| endTime                  | ISO 8601 date. Returns operations until the endTime                 |
| startTime                | ISO 8601 date. Returns operations from the startTime onward         |
| model                    | Historical model data: `era5` or `era5Land`                         |
| units                    | System of units: `imperial` or `metric`. The default is `imperial`  |
| lat                      | Latitude must be in the range of -90 to 90                          |
| lon                      | Longitude must be in the range of -180 to 180                       |

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

  const endpoint = 'https://api.withleaf.io/services/weather/api/weather/historical/daily/{lat},{lon}'
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

  endpoint = 'https://api.withleaf.io/services/weather/api/weather/historical/daily/{lat},{lon}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/weather/historical/daily/{lat},{lon}'
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
      ],
      "unit": "ºF"
    },
    "sunrise": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "precipitationSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "maxWindspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "processedTime": "str",
    "rainSum": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "maxWindgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "meanTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "minTemperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "sunset": {
      "values": [
        "time": "str",
        "value": "str"
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "°"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      {lat},
      {lon}
    ]
  }
}
```  


### Get Hourly Historical for lat/lon

&nbsp<span class="badge badge--success">GET</span> `/weather/historical/hourly/{lat},{lon}`

Get hourly historical weather data for lat/lon by Leaf User and field. If the dates are not defined in the endpoint, the response 
will return data from the last seven days by default.


| Parameter (to filter by) | values                                                              |
|--------------------------|---------------------------------------------------------------------|
| endTime                  | ISO 8601 date. Returns operations until the endTime                 |
| startTime                | ISO 8601 date. Returns operations from the startTime onward         |
| model                    | Historical model data: `era5` or `era5Land`                         |
| units                    | System of units: `imperial` or `metric`. The default is `imperial`  |
| lat                      | Latitude must be in the range of -90 to 90                          |
| lon                      | Longitude must be in the range of -180 to 180                       |


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

  const endpoint = 'https://api.withleaf.io/services/weather/api/weather/historical/hourly/{lat},{lon}'
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

  endpoint = 'https://api.withleaf.io/services/weather/api/weather/historical/hourly/{lat},{lon}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/weather/api/weather/historical/hourly/{lat},{lon}'
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
      ],
      "unit": "inch"
    },
    "dewpoint": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "windgusts": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "snowfall": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "evapotranspiration": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "shortwaveRadiation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "inch"
    },
    "relativeHumidity": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "ºF"
    },
    "windspeed": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    },
    "windDirection": {
      "values": [
        "time": "str",
        "value": int
      ],
      "unit": "mph"
    }
  },
  "geometry": {
    "type": "Point",
    "coordinates": [
      {lat},
      {lon}
    ]
  }
}
```  

:::info Warning
If there is no data available at that time/day, the property will be returned as _null_.
:::
