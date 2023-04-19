---
title: Configurations Overview
description: Configurations - Overview
sidebar_label: Overview
---

[1]: /docs/machine_file_conversion_overview
[2]: /docs/operations_overview
[3]: #operationsremoveoutliers
[4]: #operationsoutlierslimit
[5]: /docs/operations_sample_output#outliers
[6]: #operationsfilteredgeojson
[7]: /docs/operations_sample_output#field-operations-filtered-geojson
[8]: /docs/operations_sample_output#field-operations-images-v2

Leaf's system can be customized to present different behaviours across services. This is done using Configurations.

All API Owners start with a default configuration set. These configurations can be changed, but they can not be deleted or set to `null`.

Leaf Users do not start with Configuration, but they inherit the configurations from the API Owner. A custom configuration can be set for a Leaf User. Configurations set for a Leaf User won't be changed if the API Owner's configuration changes. On the other hand, configurations not set for the Leaf User will reflect changes from the API Owner's configurations. Leaf User's Configurations can be deleted or have values set to `null`, in which case the values are inherited from the API Owner.

Currently, available configurations are:

### Field Boundary Management
#### fieldsAttachIntersection
Minimum intersection percentage between a field and an operation. An intersection proportion higher than this value will make the operation to be linked to the given field. This property supports a floating point between 0 and 100. The default value is `0.01`.
#### fieldsAutoMerge
Feature automatically merges fields that passes through the intersection parameter. Default value is `true`.
#### fieldsAutoSync
If set to `true`, Leaf will automatically synchronize provider's fields. If set to `false`, synchronizations must be manually requested via endpoint. The default value is `true`.
#### fieldsMergeIntersection
Minimum intersection between two fields to merge them. A new field of type MERGED will be created based in the intersection of the fields, while the original fields will be kept. This property supports a floating point between 0 and 100. The default value is `0.01`.

### Field Operations
#### cleanupStandardGeojson
If set to `true`, Leaf will automatically remove [invalid points](machine_file_conversion_sample_output.md#valid-points) from the standardGeoJSON file for operations. The default value is `true`.
#### fieldOperationCreation
Enables the creation of [Field Operations][2]. The default is `true`.
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
#### operationsAutoSync
If set to `true`, Leaf will automatically synchronize provider's operations. The default value is `true`.
#### operationsFilteredGeojson
Enables the option to clear [Field Operations][2] data based on [some filter options][7]. Also enables the use of [operations images V2][8].
The default is `false`.
#### operationsImageCreation
If set to `true`, Leaf will generate images of operations when processing them. If set to `false`, Leaf won't create the images. The default value is `false`.
#### operationsMergeRange
Range used to consider if files are in the same operation. Default value is `5` days.
#### operationsMergeRangeHarvested
Range used to consider if harvest files are in the same operation. Default value is `21` days.
#### operationsOutliersLimit
Sets the threshold for removing outliers when the [operationsRemoveOutliers][3] configuration is enabled. The defined value will be considered to measure how many standard deviations will be considered as outliers. The default value is `3` which means that all points with harvested volume values ​​that are more than 3 standard deviations away from the mean will be removed.

More info [here][5].
#### operationsProcessingRange
The retroactive time period (in months) to fetch file operations from providers. The default is `12` so only operations that occurred 12 months ago to present will be processed by Leaf.
#### operationsRemoveOutliers
If enabled, it will remove points in the [filteredGeojson][7] based on harvest values so it is only applied to harvest type operations. The outliers will be defined based on the [operationsOutliersLimit][4] configuration. The default value is `true`.

More info [here][5].

:::tip
To use this option, [operationsFilteredGeojson][6] must be enabled.
:::
#### splitOperationsByField
If set to `true`, Leaf will split your Field Operations based on the intersection of each Leaf Field Boundary. The default value is `false`.

### Machine File Conversion
#### cleanupStandardGeojson
[See this section for more information](#cleanupstandardgeojson)
#### generateProviderImages
If set to `true`, Leaf will generate property images for [files][1] fetched from providers. Uploaded files are not affected by this change. The default value is `false`.  
Not to be confused with [operationsImageCreation](#operationsimagecreation), which is specifically for [Field Operations][2].
#### geoimagesColorRamp
[See this section for more information](#geoimagescolorramp)
#### geoimagesProjection
[See this section for more information](#geoimagesprojection)
#### geoimagesResolution
[See this section for more information](#geoimagesresolution)
#### geoimagesShape
[See this section for more information](#geoimagesshape)
#### originalOperationData
If set to `true`, it will add to the File summary some non-standard properties, such as the field name and the type of the operation, as described originally by the provider. It is not applicable to the standard GeoJSON file or the Field Operation summary.  
The default value is `false`.

```
"originalOperationData": {
    "originalOperationFarm": "Farm Green",
    "originalOperationField": "Field A",
    "originalOperationGrower": "Grower",
    "originalOperationType": "SowingAndPlanting"
}
```



