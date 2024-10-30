---
title: Configurations Overview
description: Configurations - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: /docs/machine_file_conversion_overview
[2]: /docs/operations_overview
[3]: #operationsremoveoutliers
[4]: #operationsoutlierslimit
[5]: /docs/operations_sample_output#outliers
[6]: #operationsfilteredgeojson
[7]: /docs/operations_sample_output#field-operations-filtered-geojson
[8]: /docs/operations_sample_output#field-operations-images-v2
[9]: /docs/operations_endpoints#get-operations-geotiff-images
[10]: /docs/field_boundary_management_endpoints#preview-mode
[11]: /docs/field_boundary_management_endpoints#enable-a-preview-field
[12]: /docs/machine_file_conversion_units
[13]: /docs/field_boundary_management_endpoints#automatic-geometry-fix
[14]: #splitoperationsbyfield
[15]: /docs/machine_file_conversion_endpoints#get-all-outsidefieldgeojson-files
[16]: #enableoutsidefieldgeojson-1
[17]: /docs/operations_endpoints#get-the-operations-sessions
[18]: /docs/provider_organizations#organizations-sync
[19]: /docs/field_boundary_management_endpoints#sync-fields-manually


Leaf's system can be customized to present different behaviors across services and Leaf Users. This is done using Configurations.

All API Owners start with a default configuration set. These configurations can be changed, but they can not be deleted or set to `null`.

Custom configurations can be set for individual Leaf Users. Configurations set for a Leaf User won't be changed if the API Owner's configurations change. However, if individual Leaf User configurations are not set, they will automatically inherit the API Owner's configurations. 

*Currently, configurations are available for the following services:*

| Service                                                 | Available configurations                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 
|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| [Field Boundary Management](#field-boundary-management) | automaticFixBoundary, customDataSync, fieldsAttachIntersection, fieldsAutoMerge, fieldsAutoSync, fieldsMergeIntersection                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 
| [Machine File Conversion ](#machine-file-conversion)    | cleanupStandardGeojson, generateProviderImages, geoimagesColorRamp, geoimagesProjection, geoimagesResolution, geoimagesShape, originalOperationData, unitMeasurement, enableOutsideFieldGeojson, filesImageAttributeCreation                                                                                                                                                                                                                                                                                                                                                    | 
| [Field Operations ](#field-operations)                  | cleanupStandardGeojson, fieldOperationCreation, operationsAutoSync, operationsFilteredGeojson, operationsImageAsGeoTiff, operationsRemoveOutliers, operationsOutliersLimit, operationsMergeRange, operationsMergeRangeHarvested, operationsProcessingRange, splitOperationsByField, splitOperationsByProvider, splitOperationsByTillType, operationsImageCreation, geoimagesColorRamp, geoimagesProjection, geoimagesResolution, geoimagesShape, summarizeByProductEntry, unitMeasurement, enableOutsideFieldGeojson, enableOperationsSession, operationsImageAttributeCreation | 
| [ Irrigation ](#irrigation)                  | irrigationProcessingRange                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 
| [ Synchronization ](#synchronization)                  | organizationsDataSync, customDataSync, fieldsAutoSync, operationsAutoSync, implementsAutoSync, machinesAutoSync, operatorsAutoSync, productsAutoSync, zonesAutoSync, syncPartnerData                                                                                                                                                                                                                                                                                                                                                                                            | 



### Field Boundary Management
#### automaticFixBoundary
If set to `true`, this configuration will attempt to correct invalid geometries obtained from providers. The default value is `false`. More information [here][13].

#### customDataSync

If set to `true`, the field boundaries will be partially obtained in [`PREVIEW` mode][10]. This prevents all provider fields from being fetched, allowing [later selection][11] of fields that will be fetched completely. For some providers, it will also affect the operation files associated with those fields. The default value is `false`. Once the config is set from `true` to `false`, the Fields fetched from a Leaf User can be `PROCESSED` using the [Manual Sync endpoint][19].

#### fieldsAttachIntersection
Minimum intersection percentage between a field and an operation. An intersection proportion higher than this value will make the operation to be linked to the given field. This property supports a floating point between 0 and 100 percent. The default value is `0.01`, which is the smallest number possible of overlap between the fields. Example: Setting this to 1 = 1%, setting this to 0.01 = 0.01%. 
#### fieldsAutoSync
If set to `true`, Leaf will automatically synchronize provider's fields. If set to `false`, synchronizations must be manually requested via endpoint. The default value is `true`.
#### fieldsAutoMerge
Feature automatically merges fields that passes through the intersection parameter. Default value is `true`. The merge intersection can be controlled by the fieldsMergeIntersection configuration.
#### fieldsMergeIntersection
Minimum intersection between two fields to merge them. A new field of type MERGED will be created based in the intersection of the fields, while the original fields will be kept for historical purposes but remain inactive. This property supports a floating point between 0 and 100. The default value is `0.01`, which is the smallest number possible of overlap between the fields.


### Machine File Conversion
#### cleanupStandardGeojson
If set to `true`, Leaf will automatically remove [invalid points](machine_file_conversion_sample_output.md#valid-points) from the standardGeoJSON file. The default value is `true`.

#### generateProviderImages
If set to `true`, Leaf will generate property images for [files][1] fetched from providers. Uploaded files are not affected by this change. The default value is `false`.  
Not to be confused with [operationsImageCreation](#operationsimagecreation), which is specifically for [Field Operations][2].

:::tip note
All geoimage configurations are for V1 images only. We recommend using V2 for the best quality. 
:::

#### geoimagesColorRamp
The color ramp to be used when generating images of operations. It's a map from a percentage value to a list containing a color in RGB or RGBA. The last entry in the map must contain a value for the `nv` key, mapping to the color for null values. The default value is

```json
{
    "0%"  : [200,   0, 0],
    "35%" : [255,  40, 0],
    "45%" : [255, 150, 0],
    "55%" : [255, 240, 0],
    "65%" : [  0, 230, 0],
    "75%" : [  0, 190, 0],
    "100%": [  0, 130, 0],
    "nv"  : [  0,   0, 0, 0]
}
```
:::tip note
This configuration has no effect over the [Field Operations Images V2](https://docs.withleaf.io/docs/operations_sample_output#field-operations-images-v2) output.
:::

#### geoimagesProjection
Projection to be used when generating images of operations. It can assume the values `EPSG:3857` and `EPSG:4326`. The default value is `EPSG:3857`.
:::tip note
This configuration has no effect over the [Field Operations Images V2](https://docs.withleaf.io/docs/operations_sample_output#field-operations-images-v2) output.
:::
#### geoimagesResolution
Resolution of the generated images of operations. The default value is `0.00001` degrees.
:::tip note
This configuration has no effect over the [Field Operations Images V2](https://docs.withleaf.io/docs/operations_sample_output#field-operations-images-v2) output.
:::
#### geoimagesShape
Shape of points to be used when generating images of operations. It can assume the values `ROUND` and `SQUARE`. The default value is `SQUARE`.
:::tip note
This configuration has no effect over the [Field Operations Images V2](https://docs.withleaf.io/docs/operations_sample_output#field-operations-images-v2) output.
:::

#### originalOperationData
If set to `true`, it will add some non Leaf-standard properties to the File summary, such as the field name and the type of the operation, as described originally by the provider. It is not applicable to the standard GeoJSON file or the Field Operation summary.  
The default value is `false`.

```json
"originalOperationData": {
    "originalOperationFarm": "Farm Green",
    "originalOperationField": "Field A",
    "originalOperationGrower": "Grower",
    "originalOperationType": "SowingAndPlanting"
}
```

#### unitMeasurement
Defines the unit of measurement of the summary, standardGeoJSON, and filteredGeoJSON for the Machine Files and Field Operations services. It supports `METRIC`, `IMPERIAL`, and `DEFAULT` - that not standardize the units and keep them as available in the files/provider (this is the default value).

The units for each option available can be found on the [Units of Measurement page][12].

#### enableOutsideFieldGeojson
[See this section for more information][16]

#### filesImageAttributeCreation

Customizes the images available for each property of operation files. To enable the generation of an image, set the value `true` to the desired property. By default, all images are disabled (`false`).
The options available are:

```json
"filesImageAttributeCreation": {
    "harvested": {
        "area": false,
        "distance": false,
        "elevation": false,
        "equipmentWidth": false,
        "harvestMoisture": false,
        "wetMass": false,
        "wetMassPerArea": false,
        "wetVolume": false,
        "wetVolumePerArea": false,
        "dryMass": false,
        "dryMassPerArea": false,
        "dryVolume": false,
        "dryVolumePerArea": false,
        "speed": false,
        "heading": false,
        "cropFlow": false,
        "proteinPercentage": false,
        "fuelRate": false,
        "fuelUsed": false
    },
    "planted": {
        "heading": false,
        "distance": false,
        "elevation": false,
        "seedRate": false,
        "area": false,
        "equipmentWidth": false,
        "speed": false,
        "seedRateTarget": false,
        "seedDepth": false,
        "fuelRate": false,
        "fuelUsed": false,
        "downForce": false,
        "singulation": false
    },
    "applied": {
        "heading": false,
        "distance": false,
        "elevation": false,
        "appliedRate": false,
        "area": false,
        "equipmentWidth": false,
        "speed": false,
        "appliedRateTarget": false,
        "fuelRate": false,
        "fuelUsed": false
    },
    "tillage": {
        "area": false,
        "heading": false,
        "distance": false,
        "elevation": false,
        "equipmentWidth": false,
        "tillageDepthTarget": false,
        "speed": false,
        "tillageDepthActual": false,
        "fuelRate": false,
        "fuelUsed": false
    }
}
```

### Field Operations
These configurations can be enabled with the use of Leaf Field Operations. This requires an active boundary to be present so Leaf can merge the machine files and create a Field Operation.

#### cleanupStandardGeojson
[See this section for more information](#cleanupstandardgeojson)

#### summarizeByProductEntry
If set to `true`, Leaf will aggregate products with the same name and display only one entry per product in the summary. 
`area` and `totalApplied` will be aggregated by the sum and the `rate` by the average. This config is only for applied data. The default value is `false`.

#### fieldOperationCreation
Enables the creation of [Field Operations][2]. The default is `true`.

#### operationsAutoSync
If set to `true`, Leaf will automatically synchronize provider's operations. The default value is `true`.

#### operationsFilteredGeojson
Enables the option to clear [Field Operations][2] data based on [some filter options][7]. Also enables the use of [operations images V2][8].
The default is `false`.

#### operationsImageAsGeoTiff
If set to `true`, Leaf will generate the images of operations in the GeoTIFF format too. The data can be accessed in this [endpoint][9]. The default value is `false`.
:::tip note
This configuration has effect **only** in the [Field Operations Images V2](https://docs.withleaf.io/docs/operations_sample_output#field-operations-images-v2) output.
:::

#### operationsRemoveOutliers
If enabled, it will remove points in the [filteredGeojson][7] based on harvest values so it is only applied to harvest type operations. The outliers will be defined based on the [operationsOutliersLimit][4] configuration. The default value is `true`.

More info [here][5].

:::tip
To use this option, [operationsFilteredGeojson][6] must be enabled.
:::

#### operationsOutliersLimit
Sets the threshold for removing outliers when the [operationsRemoveOutliers][3] configuration is enabled. The defined value will be considered to measure how many standard deviations will be considered as outliers. The default value is `3` which means that all points with harvested volume values ​​that are more than 3 standard deviations away from the mean will be removed.

More info [here][5].

#### operationsMergeRange
Range used to consider if files are part of the same operation. Default value is `5` days.

#### operationsMergeRangeHarvested
Range used to consider if harvest files are part of the same operation. Default value is `21` days.

#### operationsProcessingRange
The retroactive period (in months) to fetch file operations from providers. The default is `12` so only operations that were created or updated within the past 12 months will be processed by Leaf.

#### splitOperationsByField
If set to `true`, Leaf will split your Field Operations based on the intersection of each Leaf Field Boundary. The default value is `false`.

#### splitOperationsByProvider
If set to `true`, files will be filtered by provider in addition to the field, operation type, crop and date interval 
to create operations. If set to `false`, operations will be created regardless of the source provider. The default value is `false`.

#### splitOperationsByTillType
If set to `true`, it will separate tillage operations by the `tillType` property, generating different Field Operations for each different existing tillage type. The default value is `false`.

#### operationsImageCreation
If set to `true`, Leaf will generate images of operations when processing them. If set to `false`, Leaf won't create the images. The default value is `false`.

:::tip note
This configuration has no effect over the [Field Operations Images V2](https://docs.withleaf.io/docs/operations_sample_output#field-operations-images-v2) output.
:::


#### geoimagesColorRamp
[See this section for more information](#geoimagescolorramp)

#### geoimagesProjection
[See this section for more information](#geoimagesprojection)

#### geoimagesResolution
[See this section for more information](#geoimagesresolution)

#### geoimagesShape
[See this section for more information](#geoimagesshape)

#### unitMeasurement
[See this section for more information](#unitMeasurement)

#### enableOutsideFieldGeojson
Machine files can have points outside the field boundaries, these points are normally discarded when creating a Field Operation with the [`splitOperationsByField`][14] configuration enabled. If set to `true`, this configuration will allow fetch the points, for each machine file, not considered in any Field Operation for a Leaf user. The default value is `false`. A list of all files with points outside boundaries can be fetched using the [outsideFieldGeoJSON endpoint][15].

#### enableOperationsSession
If  set to `true`, it enables a new view of the field operation data, compiled by operator, implement and machines used in the operation. The information can be accessed in the [field operation session endpoint][17]. The default is `false`.

#### operationsImageAttributeCreation

Customizes the images available for each property of Field Operations. To enable the generation of an image, set the value `true` to the desired property. By default, all images are disabled (`true`).
The options available are:

```json
"operationsImageAttributeCreation": {
    "harvested": {
        "area": true,
        "distance": true,
        "elevation": true,
        "equipmentWidth": true,
        "harvestMoisture": true,
        "wetMass": true,
        "wetMassPerArea": true,
        "wetVolume": true,
        "wetVolumePerArea": true,
        "dryMass": true,
        "dryMassPerArea": true,
        "dryVolume": true,
        "dryVolumePerArea": true,
        "speed": true,
        "heading": true,
        "cropFlow": true,
        "proteinPercentage": true,
        "fuelRate": true,
        "fuelUsed": true
    },
    "planted": {
        "heading": true,
        "distance": true,
        "elevation": true,
        "seedRate": true,
        "area": true,
        "equipmentWidth": true,
        "speed": true,
        "seedRateTarget": true,
        "seedDepth": true,
        "fuelRate": true,
        "fuelUsed": true,
        "downForce": true,
        "singulation": true
    },
    "applied": {
        "heading": true,
        "distance": true,
        "elevation": true,
        "appliedRate": true,
        "area": true,
        "equipmentWidth": true,
        "speed": true,
        "appliedRateTarget": true,
        "fuelRate": true,
        "fuelUsed": true
    },
    "tillage": {
        "area": true,
        "heading": true,
        "distance": true,
        "elevation": true,
        "equipmentWidth": true,
        "tillageDepthTarget": true,
        "speed": true,
        "tillageDepthActual": true,
        "fuelRate": true,
        "fuelUsed": true
    }
}
```

### Irrigation

#### irrigationProcessingRange
The retroactive time period (in months) to fetch irrigation activities from providers. The default is `12` so only irrigation data that occurred 12 months ago to present will be processed by Leaf.

### Synchronization

#### organizationsDataSync

If set to `ALL`, Leaf will fetch and process data from all organizations within the provider account. If set to `SELECTED_ONLY`, Leaf will only fetch and process data from the organizations were the organization status has been set to `SELECTED`. Setting the status of an organization is done using the Organization Sync endpoints.  The dafault value is `ALL`.

#### syncPartnerData
If set to `true`, Leaf will fetch shared/partner data from John Deere and AgLeader shared accounts that have granted the required permissions. If set to `false`, only the directly connected  account data will be fetched, even if the permissions allow access to shared data/organizations. The default value is `true`.

#### customDataSync
If set to `true`, the field boundaries will be partially obtained in [`PREVIEW` mode][10]. This prevents all provider fields from being fetched, allowing [later selection][11] of fields that will be fetched completely. For some providers, it will also affect the operation files associated with those fields. The default value is `false`.

#### fieldsAutoSync
If set to `true`, Leaf will automatically synchronize provider's fields. If set to `false`, synchronizations must be manually requested via endpoint. The default value is `true`.

#### operationsAutoSync
If set to `true`, Leaf will automatically synchronize provider's operations. The default value is `true`.

#### implementsAutoSync
If set to `true`, Leaf will automatically synchronize provider's implements. The default value is `false`.

#### machinesAutoSync
If set to `true`, Leaf will automatically synchronize provider's machines. The default value is `false`.

#### operatorsAutoSync
If set to `true`, Leaf will automatically synchronize provider's operators. The default value is `false`.

#### productsAutoSync
If set to `true`, Leaf will automatically fetch John Deere inputs/products. The default value is `false`.

#### zonesAutoSync
If set to `true`, Leaf will automatically synchronize provider's zones. The default value is `false`.

