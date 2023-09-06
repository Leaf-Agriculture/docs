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
[9]: https://docs.withleaf.io/docs/operations_endpoints#get-operations-geotiff-images

Leaf's system can be customized to present different behaviors across services and Leaf Users. This is done using Configurations.

All API Owners start with a default configuration set. These configurations can be changed, but they can not be deleted or set to `null`.

Custom configurations can be set for individual Leaf Users. Configurations set for a Leaf User won't be changed if the API Owner's configurations change. However, if individual Leaf User configurations are not set, they will automatically inherit the API Owner's configurations. 

*Currently, configurations are available for the following services:*

| Service                                                 | Available configurations                                                                                                                                                                                                                                                                                                                                                                                                                                       | 
|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| [Field Boundary Management](#field-boundary-management) | fieldsAttachIntersection, fieldsAutoMerge, fieldsAutoSync, fieldsMergeIntersection                                                                                                                                                                                                                                                                                                                                                                             | 
| [Machine File Conversion ](#machine-file-conversion)    | cleanupStandardGeojson, originalOperationData, generateProviderImages, geoimagesColorRamp, geoimagesProjection, geoimagesResolution, geoimagesShape                                                                                                                                                                                                                                                                                                            | 
| [Field Operations ](#field-operations)                  | cleanupStandardGeojson, fieldOperationCreation, operationsAutoSync, operationsFilteredGeojson, operationsImageAsGeoTiff, operationsRemoveOutliers, operationsOutliersLimit, operationsMergeRange, operationsMergeRangeHarvested, operationsProcessingRange, splitOperationsByField, splitOperationsByProvider, operationsImageCreation, geoimagesColorRamp, geoimagesProjection, geoimagesResolution, geoimagesShape, summarizeByProductEntry, summaryGeometry | 


### Field Boundary Management
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

#### originalOperationData
If set to `true`, it will add some non Leaf-standard properties to the File summary, such as the field name and the type of the operation, as described originally by the provider. It is not applicable to the standard GeoJSON file or the Field Operation summary.  
The default value is `false`.

```
"originalOperationData": {
    "originalOperationFarm": "Farm Green",
    "originalOperationField": "Field A",
    "originalOperationGrower": "Grower",
    "originalOperationType": "SowingAndPlanting"
}
```
#### generateProviderImages
If set to `true`, Leaf will generate property images for [files][1] fetched from providers. Uploaded files are not affected by this change. The default value is `false`.  
Not to be confused with [operationsImageCreation](#operationsimagecreation), which is specifically for [Field Operations][2].

:::tip note
All geoimage configurations are for V1 images only. We recommend using V2 for the best quality. 
:::

#### geoimagesColorRamp
The color ramp to be used when generating images of operations. It's a map from a percentage value to a list containing a color in RGB or RGBA. The last entry in the map must contain a value for the `nv` key, mapping to the color for null values. The default value is
```
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

### Field Operations
These configurations can be enabled with the use of Leaf Field Operations. This requires an active boundary to be present so Leaf can merge the machine files and create a Field Operation.

#### cleanupStandardGeojson
[See this section for more information](#cleanupstandardgeojson)

#### summarizeByProductEntry
If set to `true`, Leaf will aggregate products with the same name and display only one entry per product in the summary. 
`area` and `totalApplied` will be aggregated by the sum and the `rate` by the average. This config is only for applied data. The default value is `false`.

#### summaryGeometry
The values to be defined are `BUFFER` and `CONVEX_HULL`, that refer to the geometry calculation algorithm in the summary of the machine files. 
Buffer See the image below to understand the model of each calculation.

<p align="center">
    <img alt="Geometries algorithm" width="50%" src={useBaseUrl('img/buffer_algorithm.png')} />
</p>

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
The retroactive time period (in months) to fetch file operations from providers. The default is `12` so only operations that occurred 12 months ago to present will be processed by Leaf.

#### splitOperationsByField
If set to `true`, Leaf will split your Field Operations based on the intersection of each Leaf Field Boundary. The default value is `false`.

#### splitOperationsByProvider
If set to `true`, files will be filtered by provider in addition to the field, operation type, crop and date interval 
to create operations. If set to `false`, operations will be created regardless of the source provider. The default value is `false`.

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

