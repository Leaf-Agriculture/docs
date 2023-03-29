---
title: Weather Overview
description: Weather - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

As a first option, we will use [Open-meteo][meteo] as a weather data provider. This is an open-source 
product and it can be deployed on our infrastructure without additional fees and is already allowed for 
commercial use.
[meteo]: https://open-meteo.com/

## Historical Data

The availability of this data will be daily and/or hourly.

Properties


|             Term             |           Leaf           |              Open-meteo               | Agromonitoring |       DTN CleanAg        |
|:----------------------------:|:------------------------:|:-------------------------------------:|:--------------:|:------------------------:|
|      Tempeture 2m (min)      |      tempeture.min       |          temperature_2m_min           | main.temp_min  |       air_temp_min       |
|      Tempeture 2m (max)      |      tempeture.max       |          temperature_2m_max           | main.temp_max  |       air_temp_max       |
|      Tempeture 2m (avg       |      tempeture.avg       |          temperature_2m_mean          |   main.temp    |       air_temp_avg       |
|       Dew point (min)        |       dewpoint.min       |        dewpoint_2m :stopwatch:        |       -        |      dew _point_min      |
|       Dew point (max)        |       dewpoint.max       |        dewpoint_2m :stopwatch:        |       -        |      dew_point_max       |
|       Dew point (avg)        |       dewpoint.avg       |        dewpoint_2m :stopwatch:        |       -        |      dew_point_avg       |
|   Cloud cover total (min)    |      cloudcover.min      |        cloudcover :stopwatch:         |   clouds.all   |     cloud_cover_min      |
|   Cloud cover total (max)    |      cloudcover.max      |        cloudcover :stopwatch:         |   clouds.all   |     cloud_cover_max      |
|   Cloud cover total (avg)    |      cloudcover.avg      |        cloudcover :stopwatch:         |   clouds.all   |     cloud_cover_avg      |
|  Evapotranspiration (total)  | evapotranspiration.total |      et0_fao_evapotranspiration       |       -        |        pet_period        |
|   Relative humidity (min)    |   relativehumidity.min   |    relativehumidity_2m :stopwatch:    |       -        |  relative_humidity_min   |
|   Relative humidity (max)    |   relativehumidity.max   |    relativehumidity_2m :stopwatch:    |       -        |  relative_humidity_max   |
|   Relative humidity (avg)    |   relativehumidity.avg   |    relativehumidity_2m :stopwatch:    |       -        |  relative_humidity_avg   |
|     Wind Speed 10m (min)     |    windspeed_10m.min     |       windspeed_10m :stopwatch:       |   wind.speed   |      wind_speed_min      |
|     Wind Speed 10m (max)     |    windspeed_10m.max     |       windspeed_10m :stopwatch:       |   wind.speed   |      wind_speed_max      |
|     Wind Speed 10m (avg)     |    windspeed_10m.avg     |       windspeed_10m :stopwatch:       |   wind.speed   |      wind_speed_avg      |
|     Wind Gust 10m (max)      |    windspeed_10m.max     |           windgusts_10m_max           |   wind.gust    |      wind_gust_max       |
| Dominant Wind Direction 10m  |      winddirection       |      winddirection_10m_dominant       |    wind.deg    |            -             |
|     Precipitation (sum)      |   precipitation.total    |           precipitation_sum           |       -        |    precip_acc_period     |
|          Rain (sum)          |        rain.total        |               rain_sum                |       -        |    liquid_acc_period     |
|        Snowfall (sum)        |            -             |             snowfall_sum              |       -        |     snow_acc_period      |
|  Shortwave radiation (min)   |            -             |    shortwave_radiation :stopwatch:    |       -        | short_wave_radiation_min |
|  Shortwave radiation (max)   |            -             |    shortwave_radiation :stopwatch:    |       -        | short_wave_radiation_max |
|  Shortwave radiation (avg)   |            -             |    shortwave_radiation :stopwatch:    |       -        | short_wave_radiation_avg |
| Soil tempeture 0-7 cm (min)  |            -             | soil_temperature_0_to_7cm :stopwatch: |       -        |            -             |
| Soil tempeture 0-7 cm (max)  |            -             | soil_temperature_0_to_7cm :stopwatch: |       -        |            -             |
| Soil tempeture 0-7 cm (avg)  |            -             | soil_temperature_0_to_7cm :stopwatch: |       -        |            -             |

:stopwatch: Available **only** Hourly

## Data Source


| Reanalysis Model  |    Region     | Spatial Resolution | Temporal Resolution | Data Availability | Update frequency        |
|:-----------------:|:-------------:|:------------------:|:-------------------:|:-----------------:|-------------------------|
|    [ERA5][ERA]    |    Global     |   0.25° (~25 km)   |       Hourly        |  2020 to present  | Daily with 5 days delay |

[ERA]: https://cds.climate.copernicus.eu/cdsapp#!/dataset/reanalysis-era5-single-levels?tab=overview

## Forecast

Service that provides access to forecast meteorological data of at least 10 days, to use them in the planning of field 
operations, estimation of nitrogen and complementary information such as the GDD (Growing degree days).

