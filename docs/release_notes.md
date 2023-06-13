---
title: Release notes
description: Release Notes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]:  /docs/crop_monitoring_endpoints#create-a-satellite-field
[2]:  /docs/machine_file_conversion_sample_output#valid-points
[3]:  /docs/configurations_overview
[4]:  /docs/machine_file_conversion_endpoints#get-a-file
[5]:  /docs/machine_file_conversion_sample_output#operation-summary
[6]:  /docs/beta_assets_endpoints#create-a-machine
[7]:  /docs/machine_file_conversion_sample_output#standard-geojson
[8]:  /docs/beta_assets_endpoints
[9]:  /docs/alerts_events/#field-boundary-events
[10]: /docs/planet_overview#udm2
[11]: /docs/credentials_john_deere#one-click-authentication
[12]: /docs/beta_layers_endpoints#
[13]: /docs/operations_sample_output#field-operations-filtered-geojson
[14]: /docs/operations_sample_output#field-operations-images-v2
[15]: /docs/configurations_overview#operationsfilteredgeojson
[16]: https://withleaf.io/en/whats-new

We’re moving to monthly release notes, you’ll find them in our blog’s ‘What’s New’ section [here][16]. If you'd like to stay up to date with news from Leaf, make sure to follow us on social media!

### 2.115.0
*2023-02-16*

**Agvance integration**
New integration available. Agvance Grower, Farm, Field, and boundaries will be available in our Field Boundary Management service.

**Crop monitoring**
- The satellite image bands are now grouped into a single tif file `multiband.tif`, available for all providers.

**Field operations**
- Fixed the unit of measure for cotton operation files (John Deere), now calculated based on bales.

### 2.113.0
*2023-01-19*

**Stara integration**
New integrations available for Stara. Machine Files, Field Operations, Field Boundaries and Machines are services available for this provider.

### 2.110.0
*2022-12-08*

**Additional planting properties**
- New properties available for planted operations.
The `downForce` and `singulation` properties, when available, will be present in the standardGeojson, summary and images of operations.

### 2.106.0
*2022-10-13*

**Yield cleaning**
- There is now a [configuration][15] to enable the use of [new cleanup step][13].


### 2.105.0
*2022-10-05*

**Yield cleaning**
- Harvest data can now go through a new cleanup step based on the removal of outliers. More info [here][13].
- We also improved the operations images. More info [here][14].


### 2.100.0
*2022-08-31*

**Beta**
- Layers upload  
There is now an option to upload layer files directly to Climate FieldView via Leaf API. Currently, only RGB GeoTIFF files are supported. More info [here][12].

### 2.98.0
*2022-08-16*

**Machine file conversion**
- New properties `dryMass` `dryMassPerArea` `dryVolume` and `dryVolumePerArea` for dry Yield are available in the operation [summary][5] and in the [standard][7] GeoJSON. 

### 2.92.0
*2022-07-05*

**Crop Monitoring**
- Usable Data Mask 2.0 (UDM2) is now available for Planet  
The mask images are available through the Planet `udm2` asset type.  More info [here][10].


### 2.91.0
*2022-06-29*

**Crop Monitoring**
- NDRE images 
Normalized difference red edge (NDRE) index is now available for Sentinel and Planet.  

**Machine file conversion**
- Added support for Avoirdupois ounce unit of measure.     

### 2.89.0
*2022-06-14*

**Machine file conversion**
- **[beta]** Added support for 20|20 files from Precision Planting      

**Fields**
- New filter available in the fields and farms GET endpoints
It is now possible to filter fields by farm and farms by grower.     


### 2.88.0
*2022-06-07*

**Beta**
- Machines      
Deprecated property `createdAt` in [Machines][8]. Use `createdTime` to obtain the creation time instead.

**Fields**  
- Fixing alerts related to creating and updating field boundaries  
There was an issue interpreting updates from a provider. More information about alerts [here][9].

### 2.87.0
*2022-05-24*

**Machine file conversion**
- Added support for ISOXML files

### 2.86.0
*2022-05-24*

**Machine file conversion**
- New properties on the Standard GeoJSON  
Optional properties: `cropFlow`, `productIndex`, `proteinPercentage`, `samplingInterval`, `xOffset` and `yOffset`.  
More information [here][7].

### 2.85.0
*2022-05-17*

**Machine file conversion**
- Machine list available in the operation files  
The new property `machine` list all machine ids under the files entity (not to be confused with `machinery` property available in the summary).
More information [here][5].

**Beta**
- Machines      
The properties `vin`, `model`, `make`, `category` and `modelYear` are now also available in the [Machine POST endpoint][6].


### 2.84.0
*2022-05-11*

**Machine file conversion**
- New config available: `splitOperationsByField`    
If set to `true`, Leaf will split your Field Operations based on the intersection of each Leaf Field Boundary. The default value is `false`. 
Check all the configurations available [here][3].

### 2.83.0
*2022-05-03*

**Beta**
- Machines   
New machine properties available: `vin`, `model`, `make`, `category` and `modelYear`.
The `vin` property can be used to query.


### 2.82.0
*2022-04-26*

**Machine file conversion**
- Sugar cane  
Leaf API now also support sugar cane files. Be aware that volume measurements will not be available for this crop type.

- New config available: `operationsAutoSync`    
If set to `true` (default), Leaf will automatically synchronize provider's operations.  
Check all the configurations available [here][3].


### 2.81.0
*2022-04-20*

**Machine file conversion**
- New config available: `cleanupStandardGeojson`   
If set to `true` (default), Leaf will automatically remove [invalid points][2] from the standardGeoJSON file for operations.  
Check all the configurations available [here][3].

- `(0,0)` point removed  
All `(0,0)` points are now automatically removed in our converters.
  
**Crop monitoring**  
- Planet: new asset type available    
Leaf API now also supports PlanetScope's `analytics_5b` asset type which has 5 bands: Red, Green, Blue, Red-Edge and Near infrared.  
You can check our [documentation][1]  for how to filter images by different asset types.


