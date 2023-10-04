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


| Parameter (to filter by) | values                                                                                        |
|--------------------------|-----------------------------------------------------------------------------------------------|
| endTime                  | Local date. Returns operations until the endTime                                              |
| startTime                | Local date. Returns operations from the startTime onward                                      |
| model                    | Weather model data: `icon`, `gfs`, `ifs`, `jma`, `gem` or `arpegeArome`. The default is `gfs` |
| units                    | System of units: `imperial` or `metric`. The default is `metric`                              |

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
        {
          "time": "2023-07-21T00:00:00",
          "value": 28.8
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 28.1
        },
        ....
      ],
      "unit": "ºC"
    },
    "meanSoilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 25.3
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 25.1
        },
        ....
      ],
      "unit": "°C"
    },
    "minSoilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 18.7
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 17.2
        },
        ....
      ],
      "unit": "°C"
    },
    "maxSoilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 28.9
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 27.9
        },
        ....
      ],
      "unit": "°C"
    },
    "sunrise": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": "2023-07-21T10:52"
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": "2023-07-22T10:53"
        },
        ....
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "cm"
    },
    "precipitationSum": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "cm"
    },
    "maxWindspeed": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 15.2
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 19.9
        },
        ....
      ],
      "unit": "km/h"
    },
    "evapotranspiration": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 3.76
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 4.93
        },
        ....
      ],
      "unit": "mm"
    },
    "processedTime": "2023-07-21T13:01:11.662397",
    "rainSum": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "maxWindgusts": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 27.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 24.1
        },
        ....
      ],
      "unit": "km/h"
    },
    "meanTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 25.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 23.6
        },
        ....
      ],
      "unit": "ºC"
    },
    "minTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 21.1
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 18.9
        },
        ....
      ],
      "unit": "ºC"
    },
    "sunset": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": "2023-07-22T01:11"
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": "2023-07-23T01:10"
        },
        ....
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 350.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 332.0
        },
        ....
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


| Parameter (to filter by) | values                                                                                        |
|--------------------------|-----------------------------------------------------------------------------------------------|
| endTime                  | Local date. Returns operations until the endTime                                              |
| startTime                | Local date. Returns operations from the startTime onward                                      |
| model                    | Weather model data: `icon`, `gfs`, `ifs`, `jma`, `gem` or `arpegeArome`. The default is `gfs` |
| units                    | System of units: `imperial` or `metric`. The default is `metric`                              |

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
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "soilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 28.2
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 27.9
        },
        ....
      ],
      "unit": "°C"
    },
    "soilMoisture 0-1": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.1
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.1
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 1-3": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.2
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.2
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 3-9": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.3
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.3
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 9-27": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.4
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.4
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 27-81": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.5
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.5
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "longwaveRadiation": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 563.8
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 642.3
        },
        ....
      ],
      "unit": "W/m²"
    },
    "dewpoint": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 22.6
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 22.6
        },
        ....
      ],
      "unit": "ºC"
    },
    "windgusts": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 9.4
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 5.8
        },
        ....
      ],
      "unit": "km/h"
    },
    "snowfall": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "evapotranspiration": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.11
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.04
        },
        ....
      ],
      "unit": "mm"
    },
    "shortwaveRadiation": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 146.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 2.0
        },
        ....
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 51.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 100.0
        },
        ....
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "relativeHumidity": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 75.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 80.0
        },
        ....
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 27.4
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 26.3
        },
        ....
      ],
      "unit": "ºC"
    },
    "windspeed": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 3.1
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 5.7
        },
        ....
      ],
      "unit": "km/h"
    },
    "windDirection": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 234.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 72.0
        },
        ....
      ],
      "unit": "km/h"
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


| Parameter (to filter by) | values                                                                                         |
|--------------------------|------------------------------------------------------------------------------------------------|
| endTime                  | Local date. Returns operations until the endTime                                               |
| startTime                | Local date. Returns operations from the startTime onward                                       |
| model                    | Weather model data: `icon`, `gfs`, `ifs`, `jma`, `gem` or `arpegeArome`. The default is `gfs`  |
| units                    | System of units: `imperial` or `metric`. The default is `metric`                               |

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
        {
          "time": "2023-07-21T00:00:00",
          "value": 28.8
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 28.1
        },
        ....
      ],
      "unit": "ºC"
    },
    "meanSoilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 25.3
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 25.1
        },
        ....
      ],
      "unit": "°C"
    },
    "minSoilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 18.7
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 17.2
        },
        ....
      ],
      "unit": "°C"
    },
    "maxSoilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 28.9
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 27.9
        },
        ....
      ],
      "unit": "°C"
    },
    "sunrise": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": "2023-07-21T10:52"
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": "2023-07-22T10:53"
        },
        ....
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "cm"
    },
    "precipitationSum": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "cm"
    },
    "maxWindspeed": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 15.2
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 19.9
        },
        ....
      ],
      "unit": "km/h"
    },
    "evapotranspiration": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 3.76
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 4.93
        },
        ....
      ],
      "unit": "mm"
    },
    "processedTime": "2023-07-21T13:01:11.662397",
    "rainSum": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "maxWindgusts": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 27.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 24.1
        },
        ....
      ],
      "unit": "km/h"
    },
    "meanTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 25.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 23.6
        },
        ....
      ],
      "unit": "ºC"
    },
    "minTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 21.1
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 18.9
        },
        ....
      ],
      "unit": "ºC"
    },
    "sunset": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": "2023-07-22T01:11"
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": "2023-07-23T01:10"
        },
        ....
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 350.0
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 332.0
        },
        ....
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

### Get Hourly Forecast for lat/lon

&nbsp<span class="badge badge--success">GET</span> `/weather/forecast/hourly/{lat},{lon}`

Get hourly forecasted weather data for lat/lon by Leaf User and field. If dates are not set on the endpoint, the response 
will return forecast data for the next seven days by default.


| Parameter (to filter by) | values                                                                                         |
|--------------------------|------------------------------------------------------------------------------------------------|
| endTime                  | Local date. Returns operations until the endTime                                               |
| startTime                | Local date. Returns operations from the startTime onward                                       |
| model                    | Weather model data: `icon`, `gfs`, `ifs`, `jma`, `gem` or `arpegeArome`. The default is `gfs`  |
| units                    | System of units: `imperial` or `metric`. The default is `metric`                               |


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
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "soilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 28.7
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 27.9
        },
        ....
      ],
      "unit": "°C"
    },
    "soilMoisture 0-1": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.1
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.1
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 1-3": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.2
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.2
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 3-9": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.3
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.3
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 9-27": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.4
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.4
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 27-81": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.5
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.5
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "longwaveRadiation": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 563.8
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 642.3
        },
        ....
      ],
      "unit": "W/m²"
    },
    "dewpoint": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 22.6
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 22.6
        },
        ....
      ],
      "unit": "ºC"
    },
    "windgusts": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 9.4
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 5.8
        },
        ....
      ],
      "unit": "km/h"
    },
    "snowfall": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "evapotranspiration": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.11
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.04
        },
        ....
      ],
      "unit": "mm"
    },
    "shortwaveRadiation": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 146.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 2.0
        },
        ....
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 51.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 100.0
        },
        ....
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "relativeHumidity": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 75.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 80.0
        },
        ....
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 27.4
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 26.3
        },
        ....
      ],
      "unit": "ºC"
    },
    "windspeed": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 3.1
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 5.7
        },
        ....
      ],
      "unit": "km/h"
    },
    "windDirection": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 234.0
        },
        {
          "time": "2023-07-21T01:00:00",
          "value": 72.0
        },
        ....
      ],
      "unit": "km/h"
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


### Get Daily Historical

&nbsp<span class="badge badge--success">GET</span> `/users/{leafUserId}/weather/historical/field/{fieldId}/daily`

Get daily historical weather data by Leaf User and field. If the dates are not defined in the endpoint, the response 
will return data from the last seven days by default.

Please note, historical weather data from less than 5 days ago is unavailable. If you’re wanting historical weather data within the last 5 days, you can use the forecast service to get this information. 


| Parameter (to filter by) | values                                                             |
|--------------------------|--------------------------------------------------------------------|
| endTime                  | Local date. Returns operations until the endTime                   |
| startTime                | Local date. Returns operations from the startTime onward           |
| model                    | Historical model data: `era5` or `era5Land`. The default is `era5` |
| units                    | System of units: `imperial` or `metric`. The default is `metric`   |

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
        {
          "time": "2023-07-14T00:00:00",
          "value": 31.9
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 32.0
        },
        ....
      ],
      "unit": "ºC"
    },
    "meanSoilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 25.3
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 25.1
        },
        ....
      ],
      "unit": "°C"
    },
    "minSoilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 18.7
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 17.2
        },
        ....
      ],
      "unit": "°C"
    },
    "maxSoilTemperature": {
      "values": [
        {
          "time": "2023-07-21T00:00:00",
          "value": 28.9
        },
        {
          "time": "2023-07-22T00:00:00",
          "value": 27.9
        },
        ....
      ],
      "unit": "°C"
    },
    "sunrise": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": "2023-07-14T10:47"
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": "2023-07-15T10:48"
        },
        ....
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "cm"
    },
    "precipitationSum": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.3
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 0.2
        },
        ....
      ],
      "unit": "mm"
    },
    "maxWindspeed": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 14.1
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 13.5
        },
        ....
      ],
      "unit": "km/h"
    },
    "evapotranspiration": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 4.51
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 3.62
        },
        ....
      ],
      "unit": "mm"
    },
    "processedTime": "2023-07-21T16:50:17.965109",
    "rainSum": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.3
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 0.2
        },
        ....
      ],
      "unit": "mm"
    },
    "maxWindgusts": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 26.3
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 25.8
        },
        ....
      ],
      "unit": "km/h"
    },
    "meanTemperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 28.1
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 26.8
        },
        ....
      ],
      "unit": "ºC"
    },
    "minTemperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 26.1
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 23.2
        },
        ....
      ],
      "unit": "ºC"
    },
    "sunset": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": "2023-07-15T01:15"
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": "2023-07-16T01:14"
        },
        ....
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 206.0
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 209.0
        },
        ....
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


| Parameter (to filter by) | values                                                             |
|--------------------------|--------------------------------------------------------------------|
| endTime                  | Local date. Returns operations until the endTime                   |
| startTime                | Local date. Returns operations from the startTime onward           |
| model                    | Historical model data: `era5` or `era5Land`. The default is `era5` |
| units                    | System of units: `imperial` or `metric`. The default is `metric`   |


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
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "soilMoisture 0-7": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.1
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.1
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 7-28": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.2
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.2
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 28-100": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.3
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.3
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 100-255": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.4
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.4
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "longwaveRadiation": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 563.8
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 642.3
        },
        ....
      ],
      "unit": "W/m²"
    },
    "dewpoint": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 23.4
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 23.3
        },
        ....
      ],
      "unit": "ºC"
    },
    "windgusts": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 17.6
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 19.1
        },
        ....
      ],
      "unit": "km/h"
    },
    "snowfall": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "evapotranspiration": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.18
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.08
        },
        ....
      ],
      "unit": "mm"
    },
    "shortwaveRadiation": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 176.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 40.0
        },
        ....
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 9.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 5.0
        },
        ....
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "soilTemperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 30.2
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 29.8
        },
        ....
      ],
      "unit": "ºC"
    },
    "relativeHumidity": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 61.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 62.0
        },
        ....
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 31.9
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 31.4
        },
        ....
      ],
      "unit": "ºC"
    },
    "windspeed": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 7.7
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 6.4
        },
        ....
      ],
      "unit": "km/h"
    },
    "windDirection": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 233.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 223.0
        },
        ....
      ],
      "unit": "km/h"
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
| endTime                  | Local date. Returns operations until the endTime                    |
| startTime                | Local date. Returns operations from the startTime onward            |
| model                    | Historical model data: `era5` or `era5Land`. The default is `era5`  |
| units                    | System of units: `imperial` or `metric`. The default is `metric`    |

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
        {
          "time": "2023-07-14T00:00:00",
          "value": 31.9
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 32.0
        },
        ....
      ],
      "unit": "ºC"
    },
    "meanSoilTemperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 25.3
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 25.1
        },
        ....
      ],
      "unit": "°C"
    },
    "minSoilTemperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 18.7
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 17.2
        },
        ....
      ],
      "unit": "°C"
    },
    "maxSoilTemperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 28.6
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 27.9
        },
        ....
      ],
      "unit": "°C"
    },
    "sunrise": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": "2023-07-14T10:47"
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": "2023-07-15T10:48"
        },
        ....
      ],
      "unit": "iso8601"
    },
    "snowfallSum": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "cm"
    },
    "precipitationSum": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.3
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 0.2
        },
        ....
      ],
      "unit": "mm"
    },
    "maxWindspeed": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 14.1
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 13.5
        },
        ....
      ],
      "unit": "km/h"
    },
    "evapotranspiration": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 4.51
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 3.62
        },
        ....
      ],
      "unit": "mm"
    },
    "processedTime": "2023-07-21T16:50:17.965109",
    "rainSum": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.3
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 0.2
        },
        ....
      ],
      "unit": "mm"
    },
    "maxWindgusts": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 26.3
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 25.8
        },
        ....
      ],
      "unit": "km/h"
    },
    "meanTemperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 28.1
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 26.8
        },
        ....
      ],
      "unit": "ºC"
    },
    "minTemperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 26.1
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 23.2
        },
        ....
      ],
      "unit": "ºC"
    },
    "sunset": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": "2023-07-15T01:15"
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": "2023-07-16T01:14"
        },
        ....
      ],
      "unit": "iso8601"
    },
    "windDirection": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 206.0
        },
        {
          "time": "2023-07-15T00:00:00",
          "value": 209.0
        },
        ....
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


### Get Hourly Historical for lat/lon

&nbsp<span class="badge badge--success">GET</span> `/weather/historical/hourly/{lat},{lon}`

Get hourly historical weather data for lat/lon by Leaf User and field. If the dates are not defined in the endpoint, the response 
will return data from the last seven days by default.


| Parameter (to filter by) | values                                                              |
|--------------------------|---------------------------------------------------------------------|
| endTime                  | Local date. Returns operations until the endTime                    |
| startTime                | Local date. Returns operations from the startTime onward            |
| model                    | Historical model data: `era5` or `era5Land`. The default is `era5`  |
| units                    | System of units: `imperial` or `metric`. The default is `metric`    |


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
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "soilMoisture 0-7": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.1
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.1
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 7-28": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.2
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.2
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 28-100": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.3
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.3
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "soilMoisture 100-255": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.4
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.4
        },
        ....
      ],
      "unit": "m³/m³"
    },
    "longwaveRadiation": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 563.8
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 642.3
        },
        ....
      ],
      "unit": "W/m²"
    },
    "dewpoint": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 23.4
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 23.3
        },
        ....
      ],
      "unit": "ºC"
    },
    "windgusts": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 17.6
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 19.1
        },
        ....
      ],
      "unit": "km/h"
    },
    "snowfall": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "evapotranspiration": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.18
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.08
        },
        ....
      ],
      "unit": "mm"
    },
    "shortwaveRadiation": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 176.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 40.0
        },
        ....
      ],
      "unit": "W/m²"
    },
    "processedTime": "str",
    "cloudcover": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 9.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 5.0
        },
        ....
      ],
      "unit": "%"
    },
    "precipitation": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 0.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 0.0
        },
        ....
      ],
      "unit": "mm"
    },
    "soilTemperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 30.2
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 29.8
        },
        ....
      ],
      "unit": "ºC"
    },
    "relativeHumidity": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 61.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 62.0
        },
        ....
      ],
      "unit": "%"
    },
    "temperature": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 31.9
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 31.4
        },
        ....
      ],
      "unit": "ºC"
    },
    "windspeed": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 7.7
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 6.4
        },
        ....
      ],
      "unit": "km/h"
    },
    "windDirection": {
      "values": [
        {
          "time": "2023-07-14T00:00:00",
          "value": 233.0
        },
        {
          "time": "2023-07-14T01:00:00",
          "value": 223.0
        },
        ....
      ],
      "unit": "km/h"
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

:::info Warning
If there is no data available at that time/day, the property will be returned as _null_.
:::
