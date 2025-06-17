---
title: Configurations
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

## Overview 

Leaf's system can be heavily customized to pull and process data differently across APIs and Leaf Users. This customization is achieved using **Configurations** – settings that control data ingestion, processing, and output formats.

Configurations can be applied to multiple APIs, including field and field boundaries, machine files, and field operations. Some configurations, like `organizationDataSync` and `customDataSync`, affect all APIs.

:::info
Configuration changes are **not** applied retroactively.  If you update a configuration and need to reprocess data, you can use the [Reprocess Operation](operations_endpoints.md#reprocess-an-operation) endpoint. 
:::


### Configuration Levels

Configurations can be set at two levels:

1.  **API Owner Level:** Every API Owner account starts with a default set of configurations (detailed below). These defaults can be changed, but they cannot be deleted or set to `null`.
2.  **Leaf User Level:** You can set specific configurations for individual Leaf Users (representing growers, regions, etc.). This allows granular control over how a specific user's data is synchronized or processed.

**Inheritance:** If a configuration is *not* explicitly set for a Leaf User, that user automatically inherits the configuration from the API Owner. However, once a configuration *is* set at the Leaf User level, it will **not** change even if the API Owner's configuration is subsequently modified.

### Available Configurations

| API                                             |Configurations                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 
|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| [ Data Synchronization ](#data-synchronization)                  | [organizationDataSync](#organizationdatasync), [customDataSync](#customdatasync), [fieldsAutoSync](#fieldsautosync), [operationsAutoSync](#operationsautosync), [implementsAutoSync](#implementsautosync), [machinesAutoSync](#machinesautosync), [operatorsAutoSync](#operatorsautosync), [productsAutoSync](#productsautosync), [zonesAutoSync](#zonesautosync), [syncPartnerData](#syncpartnerdata)                                                                                                                                                                                                                                                                                                                                                                                            | 
| [Field Boundary Management](#field-boundary-management) | [automaticFixBoundary](#automaticfixboundary), [fieldsAttachIntersection](#fieldsattachintersection), [fieldsAutoMerge](#fieldsautomerge), [fieldsAutoSync](#fieldsautosync), [fieldsMergeIntersection](#fieldsmergeintersection)                                                                                                                                                                                                                                                                                                                                                                                                                         | 
| [Machine File Conversion ](#machine-file-conversion)    | [cleanupStandardGeojson](#cleanupstandardgeojson), [originalOperationData](#originaloperationdata), [unitMeasurement](#unitmeasurement), [enableOutsideFieldGeojson](#enableoutsidefieldgeojson), [enableGeoparquetOutput](#enablegeoparquetoutput), [plantedOperationsCropOptional](#plantedoperationscropoptional)                                                                                                                                                                                                                                                                                                                                                    | 
| [Field Operations ](#field-operations)                  | [cleanupStandardGeojson](#cleanupstandardgeojson), [fieldOperationCreation](#fieldoperationcreation), [operationsAutoSync](#operationsautosync), [operationsFilteredGeojson](#operationsfilteredgeojson), [operationsRemoveOutliers](#operationsremoveoutliers), [operationsOutliersLimit](#operationsoutlierslimit), [operationsMergeRange](#operationsmergerange), [operationsMergeRangeHarvested](#operationsmergerangeharvested), [operationsProcessingRange](#operationsprocessingrange), [splitOperationsByField](#splitoperationsbyfield), [splitOperationsByProvider](#splitoperationsbyprovider), [splitOperationsByTillType](#splitoperationsbytilltype), [summarizeByProductEntry](#summarizebyproductentry), [unitMeasurement](#unitmeasurement), [enableOutsideFieldGeojson](#enableoutsidefieldgeojson), [enableOperationsSession](#enableoperationssession), [enableGeoparquetOutput](#enablegeoparquetoutput), [plantedOperationsCropOptional](#plantedoperationscropoptional)  | 
| [ Field Operations Images ](#field-operations-image-generation)                | [operationsImageCreation](#operationsimagecreation), [operationsImageAsGeoTiff](#operationsimageasgeotiff), [operationsImageAttributeCreation](#operationsimageattributecreation),                                                                                                                                                                                                                                                                                                                                                                                              | 
| [ Irrigation ](#irrigation)                  | [irrigationProcessingRange](#irrigationprocessingrange)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 


## Data Synchronization

### fieldsAutoSync
Default: `true`

Enable this setting to have Leaf automatically synchronize field boundary data from your connected providers. If disabled (`false`), you must manually trigger synchronization via the [Manual Sync endpoint][19].

### operationsAutoSync
Default: `true`

Enable this setting to have Leaf automatically synchronize operation data from your connected providers.


### customDataSync
Default: `true`

Enable this setting to initially fetch field boundaries in [`PREVIEW` mode][10]. This avoids fetching full data for all provider fields, allowing you to selectively [choose which fields][11] to fetch completely later. For some providers, this also affects fetching associated operation files. When changing this from `true` to `false`, previously previewed fields can be fully processed using the [Manual Sync endpoint][19].


### organizationDataSync
Default: `ALL`

Control how Leaf syncs data across organizations within a provider account. Set to `ALL` to sync data from all organizations. Set to `SELECTED_ONLY` to sync only from organizations explicitly marked as `SELECTED` via the Organization Sync endpoints.

### syncPartnerData
Default: `false`

Enable (`true`) this setting to fetch shared or partner data (e.g., from John Deere Operations Center partnerships or AgLeader shared accounts), provided the necessary permissions are granted. If disabled (`false`), Leaf only fetches data from the directly connected account, ignoring shared data even if permissions allow it.


### implementsAutoSync
Default: `false`

Enable this setting to have Leaf automatically synchronize implement data from your connected providers.

### machinesAutoSync
Default: `false`

Enable this setting to have Leaf automatically synchronize machine data from your connected providers.

### operatorsAutoSync
Default: `false`

Enable this setting to have Leaf automatically synchronize operator data from your connected providers.

### productsAutoSync
Default: `false`

Enable this setting to have Leaf automatically fetch input/product data (currently applies to John Deere).

### zonesAutoSync
Default: `false`

Enable this setting to have Leaf automatically synchronize zone data from your connected providers.


## Field Boundary Management
### automaticFixBoundary
Default: `true`

Enable this setting to have Leaf automatically attempt to correct invalid field boundary geometries received from providers. See [Automatic Geometry Fix][13] for more details.

#### fieldsAttachIntersection
Default: `0.01`

Set the minimum intersection percentage required to link an operation to a field. Leaf links the operation if the intersection area is greater than this value. Enter a value between 0 and 100 (e.g., `1` for 1%, `0.01` for 0.01%). `0.01` represents the smallest possible overlap.

### fieldsAutoMerge
Default: `false`

Enable this setting to have Leaf automatically merge fields that meet the intersection threshold defined by the `fieldsMergeIntersection` configuration.

### fieldsAutoSync
Default: `true`

Enable this setting to have Leaf automatically synchronize field boundaries from your connected providers. If set to `false`, you must manually trigger synchronization using the [sync fields endpoint][19].

### fieldsMergeIntersection
Default: `0.01`

Define the minimum intersection percentage required to merge two fields. When fields meet this threshold and `fieldsAutoMerge` is enabled, Leaf creates a new field of type `MERGED` representing the intersection. The original fields remain inactive for historical reference. Enter a value between 0 and 100 (`0.01` is the minimum).


## Machine File Conversion
### cleanupStandardGeojson
Default: `true`

Enable this setting to have Leaf automatically remove points marked as invalid (see [Valid Points](machine_file_conversion_sample_output.md#valid-points)) from the `standardGeoJSON` file output.



### originalOperationData
Default: `true`

Enable this setting to include non-standard properties (like original farm name, field name, grower, and operation type provided by the source) in the File summary output. This does not affect the `standardGeoJSON` or Field Operation summary outputs.

```json
"originalOperationData": {
    "originalOperationFarm": "Farm Green",
    "originalOperationField": "Field A",
    "originalOperationGrower": "Grower",
    "originalOperationType": "SowingAndPlanting"
}
```

### unitMeasurement
Default: `[Your Preferred System]`

Choose the unit system (Metric, Imperial, or Default) for summary, `standardGeoJSON`, and `filteredGeoJSON` outputs in Machine Files and Field Operations. `METRIC` and `IMPERIAL` convert measurements accordingly. `DEFAULT` uses the units provided by the original data source. Using `METRIC` or `IMPERIAL` ensures consistency across your data. See the [Units of Measurement page][12] for specific unit conversions.

### enableOutsideFieldGeojson
Default: `false`

Enable this setting to capture machine file points that fall outside defined field boundaries when `splitOperationsByField` is active. Normally, these points are discarded. When enabled, you can retrieve these points using the [outsideFieldGeoJSON endpoint][15]. This applies to both Machine File Conversion and Field Operations.



### enableGeoparquetOutput
Default: `false`

Enable this setting to generate vector point file outputs (like `standardGeoJSON`) in GeoParquet format in addition to GeoJSON. GeoParquet offers faster processing and reduced storage. This setting applies to data processed after it's enabled (no historical conversion). This applies to both Machine File Conversion and Field Operations.

### plantedOperationsCropOptional
Default: `required`

Enable this setting to make the crop value in the summary option. We will ignore the value and pass through the original entry. This applies to both Machine File Conversion and Field Operations.

```json
{
    "standardGeoJson": {
        "planted": {
            "crop": "optional"
        }
    }
}
```

## Field Operations
These configurations can be enabled with the use of Leaf Field Operations. Field Operations require an active boundary to be present so Leaf can merge the machine files with the field boundaries to create Field Operations.

### cleanupStandardGeojson
Default: `true`

Enable this setting to have Leaf automatically remove points marked as invalid from the `standardGeoJSON` file output during Field Operation processing. [See this section for more information](#cleanupstandardgeojson)

### summarizeByProductEntry
Default: `true`

Enable this setting to aggregate product application data in the Field Operation summary. Leaf groups entries with the same product name, summing `area` and `totalApplied` and averaging the `rate`. This applies only to application-type operations.

### fieldOperationCreation
Default: `true`

Enable this setting to allow Leaf to automatically create [Field Operations][2] by merging relevant machine files associated with an active field boundary.

### operationsAutoSync
Default: `true`

Enable this setting to have Leaf automatically synchronize operation data from your connected providers.

### operationsFilteredGeojson
Default: `true`

Enable this setting to allow filtering of [Field Operations][2] data based on various criteria (see [Filtered GeoJSON][7]). 




### operationsRemoveOutliers
Default: `true`

Enable this setting to remove outlier points from the `filteredGeojson` output for harvest operations. Leaf identifies outliers based on harvest volume values falling outside the standard deviation threshold set by `operationsOutliersLimit`. Requires `operationsFilteredGeojson` to be enabled. See [Outliers][5] for more details.

### operationsOutliersLimit
Default: `3`

Set the standard deviation threshold for identifying outliers when `operationsRemoveOutliers` is enabled. For example, the default value `3` removes points where the harvest volume is more than 3 standard deviations from the mean. See [Outliers][5] for more details.

### operationsMergeRange
Default: `5` days

Define the time window (in days) used to group machine files into a single non-harvest Field Operation. Files within this range for the same field, crop, and operation type are merged.

### operationsMergeRangeHarvested
Default: `21` days

Define the time window (in days) used to group machine files into a single harvest Field Operation. Files within this range for the same field and crop are merged.

### operationsProcessingRange
Default: `[Set as needed]` (Typically 12 months)

Specify the lookback period (in months) for fetching and processing operations data from providers. Leaf will only process operations created or updated within this timeframe.

### splitOperationsByField
Default: `true`

Enable this setting to create separate Field Operations for each distinct Leaf Field Boundary that intersects with the machine data. If disabled, data intersecting multiple boundaries might be combined into a single operation.

### splitOperationsByProvider
Default: `true`

Enable this setting to group machine files by provider *in addition to* field, operation type, crop, and date when creating Field Operations. If disabled (`false`), Leaf merges data from different providers into the same Field Operation if other criteria match.

### splitOperationsByTillType
Default: `false`

Enable this setting to create separate Field Operations for each unique `tillType` found within tillage machine data. If disabled, different tillage types might be combined into a single operation.

### unitMeasurement
Default: `[Your Preferred System]`

[See this section for more information](#unitmeasurement)

### enableOutsideFieldGeojson
Default: `false`

[See this section for more information](#enableoutsidefieldgeojson)

### enableOperationsSession
Default: `false`

Enables a new view of the field operation data, compiled by operator, implement and machines used in the operation. The information can be accessed in the [field operation session endpoint][17].

### plantedOperationsCropOptional
Default: `required`

Enable this setting to make the crop value in the summary option. We will ignore the value and pass through the original entry. This applies to both Machine File Conversion and Field Operations.

```json
{
    "standardGeoJson": {
        "planted": {
            "crop": "optional"
        }
    }
}
```


## Field Operations Image Generation

### operationsImageCreation
Default: `false`

Enable this setting for Leaf to generate [Operations Images][8].

### operationsImageAsGeoTiff
Default: `false`

Enable this setting to allow Leaf to generate the images of operations in GeoTIFF format. The data can be accessed in this [endpoint][9]. 


### operationsImageAttributeCreation
Customize which Operations Images are generated by setting the corresponding attribute flags to `true`.

```json
"operationsImageAttributeCreation": {
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

## Irrigation

### irrigationProcessingRange
Default: `12` months

Specify the lookback period (in months) for fetching and processing irrigation activities from providers. Leaf will only process irrigation data that occurred within this timeframe.

