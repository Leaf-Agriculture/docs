---
title: Weather Overview
description: Weather - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

With Leaf Weather, you can access unified weather data at a field level. Below you’ll find more about what forecasted 
and historical weather variables are available and which data sources are supported through Leaf’s API.

## Forecast

Leaf’s weather forecast service provides access to forecasted weather data for the past `5` days -  up to `10` days in the future. The data can be fetched 
daily or hourly.

### Properties

- Cloud cover
- Dew-point (2 m)
- Evapotranspiration
- Precipitation
- Rain
- Relative Humidity (2 m)
- Short Wave Radiation
- Long Wave Radiation
- Snowfall
- Sunrise
- Sunset
- Temperature (2 m)
- Soil Temperature (0 cm)
- Soil Moisture (0-1 cm; 1-3 cm; 3-9 cm; 9-27 cm; 27-81 cm)
- Wind Direction (10 m)
- Wind Gusts (10 m)
- Wind Speed (10 m)


### Data sources
| Weather Model  | National Weather Provider    | Origin Country | Resolution | Forecast Length | Update Frequency |
|----------------|------------------------------|----------------|------------|-----------------|------------------|
| ICON           | Deutscher Wetterdienst (DWD) | Germany        | 2 - 11 km  | 7.5 days        | Every 3 hours    |
| GFS            | NOAA                         | United States  | 3 - 25 km  | 16 days         | Every hour       |
| Arpege & Arome | MeteoFrance                  | France         | 1 - 40 km  | 4 days          | Every 6 hours    |
| IFS            | ECMWF                        | European Union | 44 km      | 7 days          | Every 6 hours    |
| JMA            | JMA                          | Japan          | 5 - 55 km  | 11 days         | Every 3 hours    |
| GEM            | Canadian Weather Service     | Canada         | 2.5 km     | 10 days         | Every 6 hours    |

:::info Warning
The service uses an option to provide the best forecast for any given location worldwide, based on the models available.
:::

### Availability by Weather Model

<Tabs
  defaultValue="ICON"
  values={[
    { label: 'ICON', value: 'ICON', },
    { label: 'GFS', value: 'GFS', },
    { label: 'Arpege & Arome', value: 'Arpege & Arome', },
    { label: 'IFS', value: 'IFS', },
    { label: 'JMA', value: 'JMA', },
    { label: 'GEM', value: 'GEM', },
  ]
}>

  <TabItem value="ICON">
 

  | Property            | Unit of measurement         | Description                                                                                                 |
  |---------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------|
  | meanTemperature     | Imperial: ºF; Metric: ºC    | Mean daily air temperature at 2 meters above ground.                                                        |
  | minTemperature      | Imperial: ºF; Metric: ºC    | Minimum daily air temperature at 2 meters above ground.                                                     |
  | maxTemperature      | Imperial: ºF; Metric: ºC    | Maximum daily air temperature at 2 meters above ground.                                                     |
  | meanSoilTemperature | Imperial: ºF; Metric: ºC    | Mean surface temperature (0 cm deep), which can be water or land.                                           |
  | minSoilTemperature  | Imperial: ºF; Metric: ºC    | Minimum surface temperature (0 cm deep), which can be water or land.                                        |
  | maxSoilTemperature  | Imperial: ºF; Metric: ºC    | Maximum surface temperature (0 cm deep), which can be water or land.                                        |
  | soilMoisture        | m³/m³                       | Average soil water content as volumetric mixing ratio at 0-1, 1-3, 3-9, 9-27 and 27-81 cm depths.           |
  | sunrise             | iso8601                     | Sunrise time.                                                                                               |
  | sunset              | iso8601                     | Sunset time.                                                                                                |
  | maxWindspeed        | Imperial: mph, Metric: km/h | Maximum wind speed on a day.                                                                                |
  | maxWindgusts        | Imperial: mph, Metric: km/h | Maximum wind gusts on a day.                                                                                | 
  | windDirection       | º                           | Dominant wind direction.                                                                                    |
  | evapotranspiration  | Imperial: inch, Metric: mm  | Daily sum of ET₀ Reference Evapotranspiration of a well watered grass field.                                |
  | rainSum             | Imperial: inch, Metric: mm  | Sum of daily rain.                                                                                          |
  | snowfallSum         | Imperial: inch, Metric: cm  | Sum of daily snowfall.                                                                                      |
  | precipitationSum    | Imperial: inch, Metric: mm  | Sum of daily precipitation (including rain, showers and snowfall).                                          |
  | dewpoint            | Imperial: ºF, Metric: ºC    | Dew point temperature at 2 meters above ground.                                                             |
  | longwaveRadiation   | W/m²                        | Longwave radiation refers to thermal or infrared radiation emitted by the Earth back into space.            |
  | shortwaveRadiation  | W/m²                        | Shortwave radiation is often quantified as solar irradiation incident on the Earth's atmosphere or surface. |
  | cloudcover          | %                           | Total cloud cover as an area fraction.                                                                      |
  | relativeHumidity    | %                           | Relative humidity at 2 meters above ground.                                                                 |

  
:::tip
  Sunrise and sunset variables are only available for daily forecast. Dew point, longwave radiation, shortwave radiation, cloud cover, soil moisture and relative humidity are only available for hourly forecast. The other variables have their corresponding values in both hourly and daily.
:::

  </TabItem>

  <TabItem value="GFS">
 

  | Property            | Unit of measurement         | Description                                                                                                 |
  |---------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------|
  | meanTemperature     | Imperial: ºF; Metric: ºC    | Mean daily air temperature at 2 meters above ground.                                                        |
  | minTemperature      | Imperial: ºF; Metric: ºC    | Minimum daily air temperature at 2 meters above ground.                                                     |
  | maxTemperature      | Imperial: ºF; Metric: ºC    | Maximum daily air temperature at 2 meters above ground.                                                     |
  | sunrise             | iso8601                     | Sunrise time.                                                                                               |
  | sunset              | iso8601                     | Sunset time.                                                                                                |
  | maxWindspeed        | Imperial: mph, Metric: km/h | Maximum wind speed on a day.                                                                                |
  | maxWindgusts        | Imperial: mph, Metric: km/h | Maximum wind gusts on a day.                                                                                | 
  | windDirection       | º                           | Dominant wind direction.                                                                                    |
  | evapotranspiration  | Imperial: inch, Metric: mm  | Daily sum of ET₀ Reference Evapotranspiration of a well watered grass field.                                |
  | rainSum             | Imperial: inch, Metric: mm  | Sum of daily rain.                                                                                          |
  | snowfallSum         | Imperial: inch, Metric: cm  | Sum of daily snowfall.                                                                                      |
  | precipitationSum    | Imperial: inch, Metric: mm  | Sum of daily precipitation (including rain, showers and snowfall).                                          |
  | dewpoint            | Imperial: ºF, Metric: ºC    | Dew point temperature at 2 meters above ground.                                                             |
  | longwaveRadiation   | W/m²                        | Longwave radiation refers to thermal or infrared radiation emitted by the Earth back into space.            |
  | shortwaveRadiation  | W/m²                        | Shortwave radiation is often quantified as solar irradiation incident on the Earth's atmosphere or surface. |
  | cloudcover          | %                           | Total cloud cover as an area fraction.                                                                      |
  | relativeHumidity    | %                           | Relative humidity at 2 meters above ground.                                                                 |

:::tip
  Sunrise and sunset variables are only available for daily forecast. Dew point, longwave radiation, shortwave radiation, cloud cover and relative humidity are only available for hourly forecast. The other variables have their corresponding values in both hourly and daily.
:::

  </TabItem>

  <TabItem value="Arpege & Arome">

  | Property            | Unit of measurement         | Description                                                                                                 |
  |---------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------|
  | meanTemperature     | Imperial: ºF; Metric: ºC    | Mean daily air temperature at 2 meters above ground.                                                        |
  | minTemperature      | Imperial: ºF; Metric: ºC    | Minimum daily air temperature at 2 meters above ground.                                                     |
  | maxTemperature      | Imperial: ºF; Metric: ºC    | Maximum daily air temperature at 2 meters above ground.                                                     |
  | sunrise             | iso8601                     | Sunrise time.                                                                                               |
  | sunset              | iso8601                     | Sunset time.                                                                                                |
  | maxWindspeed        | Imperial: mph, Metric: km/h | Maximum wind speed on a day.                                                                                |
  | maxWindgusts        | Imperial: mph, Metric: km/h | Maximum wind gusts on a day.                                                                                | 
  | windDirection       | º                           | Dominant wind direction.                                                                                    |
  | evapotranspiration  | Imperial: inch, Metric: mm  | Daily sum of ET₀ Reference Evapotranspiration of a well watered grass field.                                |
  | snowfallSum         | Imperial: inch, Metric: cm  | Sum of daily snowfall.                                                                                      |
  | precipitationSum    | Imperial: inch, Metric: mm  | Sum of daily precipitation (including rain, showers and snowfall).                                          |
  | dewpoint            | Imperial: ºF, Metric: ºC    | Dew point temperature at 2 meters above ground.                                                             |
  | longwaveRadiation   | W/m²                        | Longwave radiation refers to thermal or infrared radiation emitted by the Earth back into space.            |
  | shortwaveRadiation  | W/m²                        | Shortwave radiation is often quantified as solar irradiation incident on the Earth's atmosphere or surface. |
  | cloudcover          | %                           | Total cloud cover as an area fraction.                                                                      |
  | relativeHumidity    | %                           | Relative humidity at 2 meters above ground.                                                                 |

:::tip
  Sunrise and sunset variables are only available for daily forecast. Dew point, longwave radiation, shortwave radiation, cloud cover and relative humidity are only available for hourly forecast. The other variables have their corresponding values in both hourly and daily.
:::

  </TabItem>

  <TabItem value="IFS">

  | Property            | Unit of measurement         | Description                                                                                                |
  |---------------------|-----------------------------|------------------------------------------------------------------------------------------------------------|
  | meanTemperature     | Imperial: ºF; Metric: ºC    | Mean daily air temperature at 2 meters above ground.                                                       |
  | minTemperature      | Imperial: ºF; Metric: ºC    | Minimum daily air temperature at 2 meters above ground.                                                    |
  | maxTemperature      | Imperial: ºF; Metric: ºC    | Maximum daily air temperature at 2 meters above ground.                                                    |
  | meanSoilTemperature | Imperial: ºF; Metric: ºC    | Mean surface temperature (0 cm deep), which can be water or land.                                          |
  | minSoilTemperature  | Imperial: ºF; Metric: ºC    | Minimum surface temperature (0 cm deep), which can be water or land.                                       |
  | maxSoilTemperature  | Imperial: ºF; Metric: ºC    | Maximum surface temperature (0 cm deep), which can be water or land.                                       |  
  | sunrise             | iso8601                     | Sunrise time.                                                                                              |
  | sunset              | iso8601                     | Sunset time.                                                                                               |
  | maxWindspeed        | Imperial: mph, Metric: km/h | Maximum wind speed on a day.                                                                               |
  | maxWindgusts        | Imperial: mph, Metric: km/h | Maximum wind gusts on a day.                                                                               | 
  | windDirection       | º                           | Dominant wind direction.                                                                                   |
  | evapotranspiration  | Imperial: inch, Metric: mm  | Daily sum of ET₀ Reference Evapotranspiration of a well watered grass field.                               |
  | rainSum             | Imperial: inch, Metric: mm  | Sum of daily rain.                                                                                         |
  | snowfallSum         | Imperial: inch, Metric: cm  | Sum of daily snowfall.                                                                                     |
  | precipitationSum    | Imperial: inch, Metric: mm  | Sum of daily precipitation (including rain, showers and snowfall).                                         |
  | dewpoint            | Imperial: ºF, Metric: ºC    | Dew point temperature at 2 meters above ground.                                                            |
  | cloudcover          | %                           | Total cloud cover as an area fraction.                                                                     |
  | relativeHumidity    | %                           | Relative humidity at 2 meters above ground.                                                                |

:::tip
  Sunrise and sunset variables are only available for daily forecast. Dew point, cloud cover and relative humidity are only available for hourly forecast. The other variables have their corresponding values in both hourly and daily.
:::


  </TabItem>

   <TabItem value="JMA">

  | Property            | Unit of measurement         | Description                                                                                                 |
  |---------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------|
  | meanTemperature     | Imperial: ºF; Metric: ºC    | Mean daily air temperature at 2 meters above ground.                                                        |
  | minTemperature      | Imperial: ºF; Metric: ºC    | Minimum daily air temperature at 2 meters above ground.                                                     |
  | maxTemperature      | Imperial: ºF; Metric: ºC    | Maximum daily air temperature at 2 meters above ground.                                                     |
  | sunrise             | iso8601                     | Sunrise time.                                                                                               |
  | sunset              | iso8601                     | Sunset time.                                                                                                |
  | maxWindspeed        | Imperial: mph, Metric: km/h | Maximum wind speed on a day.                                                                                |
  | windDirection       | º                           | Dominant wind direction.                                                                                    |
  | evapotranspiration  | Imperial: inch, Metric: mm  | Daily sum of ET₀ Reference Evapotranspiration of a well watered grass field.                                |
  | snowfallSum         | Imperial: inch, Metric: cm  | Sum of daily snowfall.                                                                                      |
  | precipitationSum    | Imperial: inch, Metric: mm  | Sum of daily precipitation (including rain, showers and snowfall).                                          |
  | dewpoint            | Imperial: ºF, Metric: ºC    | Dew point temperature at 2 meters above ground.                                                             |
  | longwaveRadiation   | W/m²                        | Longwave radiation refers to thermal or infrared radiation emitted by the Earth back into space.            |
  | shortwaveRadiation  | W/m²                        | Shortwave radiation is often quantified as solar irradiation incident on the Earth's atmosphere or surface. |
  | cloudcover          | %                           | Total cloud cover as an area fraction.                                                                      |
  | relativeHumidity    | %                           | Relative humidity at 2 meters above ground.                                                                 |

:::tip
  Sunrise and sunset variables are only available for daily forecast. Dew point, longwave radiation, shortwave radiation, cloud cover and relative humidity are only available for hourly forecast. The other variables have their corresponding values in both hourly and daily.
:::

  </TabItem>

  <TabItem value="GEM">

  | Property            | Unit of measurement         | Description                                                                                                 |
  |---------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------|
  | meanTemperature     | Imperial: ºF; Metric: ºC    | Mean daily air temperature at 2 meters above ground.                                                        |
  | minTemperature      | Imperial: ºF; Metric: ºC    | Minimum daily air temperature at 2 meters above ground.                                                     |
  | maxTemperature      | Imperial: ºF; Metric: ºC    | Maximum daily air temperature at 2 meters above ground.                                                     |
  | sunrise             | iso8601                     | Sunrise time.                                                                                               |
  | sunset              | iso8601                     | Sunset time.                                                                                                |
  | maxWindspeed        | Imperial: mph, Metric: km/h | Maximum wind speed on a day.                                                                                |
  | maxWindgusts        | Imperial: mph, Metric: km/h | Maximum wind gusts on a day.                                                                                | 
  | windDirection       | º                           | Dominant wind direction.                                                                                    |
  | evapotranspiration  | Imperial: inch, Metric: mm  | Daily sum of ET₀ Reference Evapotranspiration of a well watered grass field.                                |
  | rainSum             | Imperial: inch, Metric: mm  | Sum of daily rain.                                                                                          |
  | snowfallSum         | Imperial: inch, Metric: cm  | Sum of daily snowfall.                                                                                      |
  | precipitationSum    | Imperial: inch, Metric: mm  | Sum of daily precipitation (including rain, showers and snowfall).                                          |
  | dewpoint            | Imperial: ºF, Metric: ºC    | Dew point temperature at 2 meters above ground.                                                             |
  | longwaveRadiation   | W/m²                        | Longwave radiation refers to thermal or infrared radiation emitted by the Earth back into space.            |
  | shortwaveRadiation  | W/m²                        | Shortwave radiation is often quantified as solar irradiation incident on the Earth's atmosphere or surface. |
  | cloudcover          | %                           | Total cloud cover as an area fraction.                                                                      |
  | relativeHumidity    | %                           | Relative humidity at 2 meters above ground.                                                                 |

  
:::tip
  Sunrise and sunset variables are only available for daily forecast. Dew point, longwave radiation, shortwave radiation, cloud cover and relative humidity are only available for hourly forecast. The other variables have their corresponding values in both hourly and daily.
:::

  </TabItem>    

  </Tabs>


## Historical Data

Leaf's historical weather service provides access to data from 1940 onwards when available. The data can 
be fetched daily or hourly. Please note, historical weather data from less than 5 days ago is unavailable. If you’re wanting historical weather data within the last 5 days, you can use the forecast service to get this information. 

### Properties

- Cloud cover
- Dew-point (2 m)
- Evapotranspiration
- Precipitation
- Rain
- Relative Humidity (2 m)
- Short Wave Radiation
- Long Wave Radiation
- Snowfall
- Sunrise
- Sunset
- Temperature (2 m)
- Soil Temperature (0 - 7 cm)
- Soil Moisture (0-7 cm; 7-28 cm; 28-100 cm; 100-255 cm)
- Wind Direction (10 m)
- Wind Gusts (10 m)
- Wind Speed (10 m)

### Data sources
| Reanalysis Model |    Region     | Spatial Resolution | Temporal Resolution | Data Availability | Update Frequency        |
|:----------------:|:-------------:|:------------------:|:-------------------:|:-----------------:|-------------------------|
|       ERA5       |    Global     |   0.25° (~25 km)   |       Hourly        |  1940 to present  | Daily with 5 days delay |
|    ERA5-Land     |    Global     |   0.1° (~11 km)    |       Hourly        |  1950 to present  | Daily with 5 days delay |


### Availability by Weather Model

<Tabs
  defaultValue="ERA5"
  values={[
    { label: 'ERA5', value: 'ERA5', },
    { label: 'ERA5-Land', value: 'ERA5-Land', },
  ]
}>

  <TabItem value="ERA5">
 

  | Property            | Unit of measurement         | Description                                                                                                 |
  |---------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------|
  | meanTemperature     | Imperial: ºF; Metric: ºC    | Mean daily air temperature at 2 meters above ground.                                                        |
  | minTemperature      | Imperial: ºF; Metric: ºC    | Minimum daily air temperature at 2 meters above ground.                                                     |
  | maxTemperature      | Imperial: ºF; Metric: ºC    | Maximum daily air temperature at 2 meters above ground.                                                     |
  | meanSoilTemperature | Imperial: ºF; Metric: ºC    | Mean surface temperature (0 cm deep), which can be water or land.                                           |
  | minSoilTemperature  | Imperial: ºF; Metric: ºC    | Minimum surface temperature (0 cm deep), which can be water or land.                                        |
  | maxSoilTemperature  | Imperial: ºF; Metric: ºC    | Maximum surface temperature (0 cm deep), which can be water or land.                                        |
  | soilMoisture        | m³/m³                       | Average soil water content as volumetric mixing ratio at 0-7, 7-28, 28-100 and 100-255 cm depths.           | 
  | sunrise             | iso8601                     | Sunrise time.                                                                                               |
  | sunset              | iso8601                     | Sunset time.                                                                                                |
  | maxWindspeed        | Imperial: mph, Metric: km/h | Maximum wind speed on a day.                                                                                |
  | maxWindgusts        | Imperial: mph, Metric: km/h | Maximum wind gusts on a day.                                                                                | 
  | windDirection       | º                           | Dominant wind direction.                                                                                    |
  | evapotranspiration  | Imperial: inch, Metric: mm  | Daily sum of ET₀ Reference Evapotranspiration of a well watered grass field.                                |
  | rainSum             | Imperial: inch, Metric: mm  | Sum of daily rain.                                                                                          |
  | snowfallSum         | Imperial: inch, Metric: cm  | Sum of daily snowfall.                                                                                      |
  | precipitationSum    | Imperial: inch, Metric: mm  | Sum of daily precipitation (including rain, showers and snowfall).                                          |
  | dewpoint            | Imperial: ºF, Metric: ºC    | Dew point temperature at 2 meters above ground.                                                             |
  | longwaveRadiation   | W/m²                        | Longwave radiation refers to thermal or infrared radiation emitted by the Earth back into space.            |
  | shortwaveRadiation  | W/m²                        | Shortwave radiation is often quantified as solar irradiation incident on the Earth's atmosphere or surface. |
  | cloudcover          | %                           | Total cloud cover as an area fraction.                                                                      |
  | relativeHumidity    | %                           | Relative humidity at 2 meters above ground.                                                                 |

  
:::tip
  Sunrise and sunset variables are only available for daily forecast. Dew point, longwave radiation, shortwave radiation, cloud cover, soil moisture and relative humidity are only available for hourly historical. The other variables have their corresponding values in both hourly and daily.
:::

  </TabItem>

  <TabItem value="ERA5-Land">
 

  | Property            | Unit of measurement         | Description                                                                                                 |
  |---------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------|
  | meanTemperature     | Imperial: ºF; Metric: ºC    | Mean daily air temperature at 2 meters above ground.                                                        |
  | minTemperature      | Imperial: ºF; Metric: ºC    | Minimum daily air temperature at 2 meters above ground.                                                     |
  | maxTemperature      | Imperial: ºF; Metric: ºC    | Maximum daily air temperature at 2 meters above ground.                                                     |
  | meanSoilTemperature | Imperial: ºF; Metric: ºC    | Mean surface temperature (0 cm deep), which can be water or land.                                           |
  | minSoilTemperature  | Imperial: ºF; Metric: ºC    | Minimum surface temperature (0 cm deep), which can be water or land.                                        |
  | maxSoilTemperature  | Imperial: ºF; Metric: ºC    | Maximum surface temperature (0 cm deep), which can be water or land.                                        |
  | soilMoisture        | m³/m³                       | Average soil water content as volumetric mixing ratio at 0-7, 7-28, 28-100 and 100-255 cm depths.           |
  | sunrise             | iso8601                     | Sunrise time.                                                                                               |
  | sunset              | iso8601                     | Sunset time.                                                                                                |
  | maxWindspeed        | Imperial: mph, Metric: km/h | Maximum wind speed on a day.                                                                                |
  | maxWindgusts        | Imperial: mph, Metric: km/h | Maximum wind gusts on a day.                                                                                | 
  | windDirection       | º                           | Dominant wind direction.                                                                                    |
  | evapotranspiration  | Imperial: inch, Metric: mm  | Daily sum of ET₀ Reference Evapotranspiration of a well watered grass field.                                |
  | rainSum             | Imperial: inch, Metric: mm  | Sum of daily rain.                                                                                          |
  | snowfallSum         | Imperial: inch, Metric: cm  | Sum of daily snowfall.                                                                                      |
  | precipitationSum    | Imperial: inch, Metric: mm  | Sum of daily precipitation (including rain, showers and snowfall).                                          |
  | dewpoint            | Imperial: ºF, Metric: ºC    | Dew point temperature at 2 meters above ground.                                                             |
  | longwaveRadiation   | W/m²                        | Longwave radiation refers to thermal or infrared radiation emitted by the Earth back into space.            |
  | shortwaveRadiation  | W/m²                        | Shortwave radiation is often quantified as solar irradiation incident on the Earth's atmosphere or surface. |
  | cloudcover          | %                           | Total cloud cover as an area fraction.                                                                      |
  | relativeHumidity    | %                           | Relative humidity at 2 meters above ground.                                                                 |

:::tip
  Sunrise and sunset variables are only available for daily forecast. Dew point, longwave radiation, shortwave radiation, cloud cover, soil moisture and relative humidity are only available for hourly historical. The other variables have their corresponding values in both hourly and daily.
:::

  </TabItem>

  </Tabs>