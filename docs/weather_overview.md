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

Leaf’s weather forecast service provides access to forecasted weather data for up to `10` days. The data can be fetched 
daily or hourly.

### Properties

- Cloud cover
- Dew-point
- Evapotranspiration
- Precipitation
- Rain
- Relative Humidity
- Short Wave Radiation
- Snowfall
- Sunrise
- Sunset
- Temperature
- Wind Direction
- Wind Gusts
- Wind Speed


### Data sources
| Weather Model  | National Weather Provider    | Origin Country | Resolution | Forecast Length | Update Frequency |
|----------------|------------------------------|----------------|------------|-----------------|------------------|
| ICON           | Deutscher Wetterdienst (DWD) | Germany        | 2 - 11 km  | 7.5 days        | Every 3 hours    |
| GFS            | NOAA                         | United States  | 3 - 25 km  | 16 days         | Every hour       |
| Arpege & Arome | MeteoFrance                  | France         | 1 - 40 km  | 4 days          | Every 6 hours    |
| IFS            | ECMWF                        | European Union | 44 km      | 7 days          | Every 6 hours    |
| MET Nordic     | MET Norway                   | Norway         | 1 km       | 2.5 days        | Every hour       |

:::info Warning
The service uses an option to provide the best forecast for any given location worldwide, based on the models available.
:::

## Historical Data

Leaf’s historical weather service provides access to up to `10` years of historical data when available. The data can 
be fetched daily or hourly.

### Properties

- Cloud cover
- Dew-point
- Evapotranspiration
- Precipitation
- Rain
- Relative Humidity
- Short Wave Radiation
- Snowfall
- Sunrise
- Sunset
- Temperature
- Wind Direction
- Wind Gusts
- Wind Speed

### Data sources
| Reanalysis Model |    Region     | Spatial Resolution | Temporal Resolution | Data Availability | Update Frequency        |
|:----------------:|:-------------:|:------------------:|:-------------------:|:-----------------:|-------------------------|
|       ERA5       |    Global     |   0.25° (~25 km)   |       Hourly        |  2017 to present  | Daily with 5 days delay |