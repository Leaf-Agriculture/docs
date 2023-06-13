---
title: Glossary
description: Common terms you'll come across in Leaf's documentation
---

In this glossary, you’ll find a range of definitions for terms you’ll come across in Leaf’s documentation. If you need any terms clarified further, please contact us anytime at help@withleaf.io.

## Leaf product terms

| Term    | Definition                                                                                                          |
| ------------------| ------------------------- |
| Field Boundaries    | Geospatial boundary/shape/area of a field.                                                                           |
| Data Translation  \| File Conversion  | Receive data, translated by Leaf to a consistent, aggregated and standardized format, from all major machinery brands.|
| Machine Data \| Field Operations    | FieldOps data pulled from machinery providers (planting, application, harvest, tillage). Called operations in Leaf. Note: see further down, the difference between Machine File Summary and Operation Summary |
| Machine Information \| Assets | Data on machinery performance itself (serial number, hours, fuel consumption, rpm, speed and calibration).            |
| Prescriptions       | Planting and fertility recommendations. Can be sent from Leaf to Providers, not to specific machines.                |
| Crop Monitoring     | Satellite and drone images of fields based on their boundaries.                                                     |
| Weather             | Forecasted and historical field-level weather data.                                                                  |
| Leaf Connect        | Sharing data between two different companies within Leaf. Allows one API owner to access fields and operations data from another API owner. |

## More Leaf terms

| Term    | Definition                                                                                                          |
| ------------------| ------------------------- |
| API Owner                    | The company email address that you use to create a Leaf account and is used to create/store Leaf Users.                                                    |
| Leaf Token                   | A token that will allow access to Leaf for up to 30 days.                                                                                                  |
| Provider \| OEMs \| third-party platforms | The company whose platform provides data such as field boundaries, machine data, imagery etc (e.g. Climate FieldView, John Deere).          |
| Leaf User                    | A way to keep your customers' data organized under your API owner. You'll attach 3rd party credentials to these entities. A Leaf User is equivalent to a Customer/Grower account. |
| Alerts                       | Webhooks set up to send notifications of events that occur in Leaf. For example, when a new boundary is created, you'll be notified when it occurs, instead of polling (periodically requesting updates). |
| Configurations               | Configurations allow your Leaf environment to be customized to present different behaviors across our services.                                           |
| Field Merge                  | When two fields intersect, Leaf can merge them to create a new field.                                                                                      |
| Raw data                     | Data downloaded directly from a tractor monitor. (USB, Thumb Drive Data)                                                                                   |
| File Converter               | Converts raw data formats to Leaf’s standard JSON format.                                                                                                  |
| File Merge                   | Files of the same operation type within a specified date range (applied, planted, harvested, tillage) are combined into a single file.                   |
| Machine File Summary                 | Basic information of files derived from the point data, processed and cleaned by Leaf. Data outputs will vary by task (planted, applied, harvested, tillage).|
| Operation Summary            | The output of files merged to a field boundary that are processed and cleaned by Leaf.                                                                      |

## More agricultural terms

| Term    | Definition                                                                                                          |
| ------------------| ------------------------- |
| Organization | The organization is the top-level entity for a farm business such as a head office of a corporate farm |
| Grower | The grower sits under the organization level and is equivalent to a farmer. A grower is often linked to farms and fields with a hierarchy of organization > grower > farm > field |
| Farm | A Farm is a group of fields managed by a grower |
| Field | An area of open land, especially one planted with crops or pasture bound by a fence or other landmark. Note: in Leaf, the field object has no boundary but can be pulled in from a provider (e.g. field name, field ID, area) |
| Field Boundary | Geospatial boundary/shape/area of a field |
| Crop | Type of plant being grown (e.g. soybeans, corn, wheat) |
| Variety | A subtype of the crop being grown (e.g. P7326 is a variety of corn) |
| Field Operations | Tasks performed by a tractor (tillage, planting, application, harvest) |
| Tillage | The task of breaking up soil |
| Planting | The task of placing seeds in the soil |
| Application | The task of applying products to an area of a field (eg fertilizer, pesticides) |
| Harvest | The task of removing/collecting a fully mature crop |
| Implements | Implements are specialized pieces of farm equipment such as a drill, sprayer, combine or planter. |
| Layers | Additional crop or field-related data that can be pulled from a provider (Tassel count, Stand count, NDVI and RGB) |
