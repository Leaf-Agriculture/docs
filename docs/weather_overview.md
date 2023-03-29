---
title: Weather Overview
description: Weather - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


## Forecast

The Forecast service provides access to forecast weather data for up to `10` days. The data can be fetched daily or hourly.

### Properties

- Temperature
- Sunrise
- Sunset
- Snowfall
- Precipitation
- Evapotranspiration
- Rain
- Wind Speed
- Wind Gusts
- Wind Direction
- Dew-point
- Short Wave Radiation
- Cloud cover
- Relative Humidity


### Data sources
| Weather Model  | National Weather Provider    | Origin Country | Resolution | Forecast Length | Update frequency |
|----------------|------------------------------|----------------|------------|-----------------|------------------|
| ICON           | Deutscher Wetterdienst (DWD) | Germany        | 2 - 11 km  | 7.5 days        | Every 3 hours    |
| GFS            | NOAA                         | United States  | 3 - 25 km  | 16 days         | Every hour       |
| Arpege & Arome | MeteoFrance                  | France         | 1 - 40 km  | 4 days          | Every 6 hours    |
| IFS            | ECMWF                        | European Union | 44 km      | 7 days          | Every 6 hours    |
| MET Nordic     | MET Norway                   | Norway         | 1 km       | 2.5 days        | Every hour       |
| GEM            | Canadian Weather Service     | Canada         | 2.5 km     | 10 days         | Every 6 hours    |


## Historical Data
The Historical service provides access to historical weather data for up to `10` years ago. The data can be fetched daily or hourly.

### Properties

- Temperature
- Sunrise
- Sunset
- Snowfall
- Precipitation
- Evapotranspiration
- Rain
- Wind Speed
- Wind Gusts
- Wind Direction
- [Dew-point
- Short Wave Radiation
- Cloud cover
- Relative Humidity]()

### Data sources
| Reanalysis Model |    Region     | Spatial Resolution | Temporal Resolution | Data Availability | Update frequency        |
|:----------------:|:-------------:|:------------------:|:-------------------:|:-----------------:|-------------------------|
|      ERA5        |    Global     |   0.25° (~25 km)   |       Hourly        |  2020 to present  | Daily with 5 days delay |
