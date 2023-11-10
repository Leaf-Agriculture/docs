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
