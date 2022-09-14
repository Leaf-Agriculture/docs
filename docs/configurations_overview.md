---
title: Overview
---

[1]: /docs/docs/files_overview
[2]: /docs/docs/operations_overview

Leaf's system can be customized to present different behaviours across services. This is done using Configurations.

All Api Owners start with a default configuration set. These configurations can be changed, but they can not be deleted or set to `null`.

Leaf Users do not start with Configuration, but they inherit the configurations from the Api Owner. A custom configuration can be set for a Leaf User. Configurations set for a Leaf User won't be changed if the Api Owner's configuration changes. On the other hand, configurations not set for the Leaf User will reflect changes from the Api Owner's configurations. Leaf User's Configurations can be deleted or have values set to `null`, in which case the values are inherited from the Api Owner.

Currently, available configurations are:

#### operationsImageCreation
If set to `true`, Leaf will generate images of operations when processing them. If set to `false`, Leaf won't create the images. The default value is `false`.
#### geoimagesResolution
Resolution of the generated images of operations. The default value is `0.00001`.
#### geoimagesShape
Shape of points to be used when generating images of operations. It can assume the values `ROUND` and `SQUARE`. The default value is `SQUARE`.
#### geoimagesProjection
Projection to be used when generating images of operations. It can assume the values `EPSG:3857` and `EPSG:4326`. The default value is `EPSG:3857`.
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
#### fieldsAutoSync
If set to `true`, Leaf will automatically synchronize provider's fields. If set to `false`, synchronizations must be manually requested via endpoint. The default value is `true`.
#### fieldsMergeIntersection
Minimum intersection between two fields to merge them. A new field of type MERGED will be created based in the intersection of the fields, while the original fields will be kept. This property supports a floating point between 0 and 100. The default value is `0.01`.
#### fieldsAttachIntersection
Minimum intersection percentage between a field and an operation. An intersection proportion higher than this value will make the operation to be linked to the given field. This property supports a floating point between 0 and 100. The default value is `0.01`. 
#### operationsMergeRange
Range used to consider if files are in the same operation. Default value is `5` days.
#### operationsMergeRangeHarvested
Range used to consider if harvest files are in the same operation. Default value is `21` days.
#### fieldsAutoMerge
Feature automatically merges fields that passes through the intersection parameter. Default value is `true`
#### operationsAutoSync
If set to `true`, Leaf will automatically synchronize provider's operations. The default value is `true`.
#### cleanupStandardGeojson
If set to `true`, Leaf will automatically remove [invalid points](files_sample_output.md#valid-points) from the standardGeoJSON file for operations. The default value is `true`.
#### splitOperationsByField
If set to `true`, Leaf will split your Field Operations based on the intersection of each Leaf Field Boundary. The default value is `false`.
#### originalOperationData
If set to `true`, it will return non-standarlized original data from the file, such as the field name and the type of the operation, as described by the provider. The default value is `false`.

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
Not to be confused with [operationsImageCreation](#operationsImageCreation), which is specifically for [Field Operations][2]. 


#### operationsProcessingRange
Defines the retroactive time period (in months) to fetch file operations from providers, that is, if the value is `6`, only operations that occurred 6 months ago will be processed by Leaf. The default value is `12`.