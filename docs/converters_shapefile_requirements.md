---
title: Shapefile Requirements
description: Manual File Upload - Shapefile Requirements
sidebar_label: Shapefile Requirements
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: /docs/converters_endpoints
[2]: /docs/machine_file_conversion_sample_output
[3]: /docs/machine_file_conversion_units

## Overview

Leaf supports shapefile uploads from SMS (Ag Leader), Raven Slingshot, and Topcon. When you upload a shapefile, Leaf automatically detects the operation type and maps your DBF column names to standardized Leaf properties based on common naming conventions.

Since shapefiles do not contain unit information, Leaf assumes the default units from the provider.

:::info File size limit
Currently, our upload endpoints accept files with a maximum size of 3 gigabytes.
:::

## File Structure Requirements

Shapefiles must be uploaded as a ZIP file containing the following required components with the same base filename:

| File Extension | Description | Required |
|----------------|-------------|----------|
| `.shp` | Shape format - stores geometry | Yes |
| `.dbf` | dBASE format - stores attribute data | Yes |
| `.shx` | Shape index format | Yes |
| `.prj` | Projection format - coordinate system info | No |
| `.cpg` | Code page - character encoding | No |

**Example ZIP structure:**
```
harvest_data.zip
├── harvest_data.shp
├── harvest_data.dbf
└── harvest_data.shx
```

:::tip
The ZIP file should not contain subfolders. Place all shapefile components at the root level of the archive.
:::

## Supported Operation Types

Leaf processes shapefiles into four operation types:

- **Harvested** - Grain harvest and yield data
- **Planted** - Planting and seeding operations
- **Applied** - Chemical and fertilizer applications
- **Tillage** - Tillage operations

The operation type is determined by the attributes present in your shapefile's DBF file.

## Attribute Requirements

Below are the common DBF column names that Leaf recognizes for each operation type. Your shapefile should include the **required attributes** for Leaf to successfully process the file. **Optional attributes** enhance the output data but are not required.

:::info Column name matching
Leaf uses flexible column name matching. The column names listed below are common conventions, but Leaf may recognize variations. Column names are case-insensitive.
:::

<Tabs
  defaultValue="harvested"
  values={[
    { label: 'Harvested', value: 'harvested', },
    { label: 'Planted', value: 'planted', },
    { label: 'Applied', value: 'applied', },
    { label: 'Tillage', value: 'tillage', },
  ]
}>

<TabItem value="harvested">

### Harvested Operation

**Required Attributes:**

| Common Input Column Names | Maps to Leaf Property | Type | Units |
|---------------------------|----------------------|------|-------|
| YIELD, Yld, DryYield, YLDMASSDR, DryMassPerArea | dryMassPerArea | float | lb/ac, kg/ha |
| MOISTURE, Moist, HarvestMoist, HrvstMoist | harvestMoisture | float | % |
| MASS, WetMass, YLDMASSWT, WetMassPerArea | wetMass / wetMassPerArea | float | lb, kg |
| WETVOL, WetVolume, WetVolumePerArea | wetVolume / wetVolumePerArea | float | bu, L |
| DRYVOL, DryVolume, DryVolumePerArea | dryVolume / dryVolumePerArea | float | bu, L |
| ELEV, Elevation | elevation | float | ft, m |
| CROP, Product, Commodity | crop | string | - |

**Optional Attributes:**

| Common Input Column Names | Maps to Leaf Property | Type | Units |
|---------------------------|----------------------|------|-------|
| DISTANCE, Dist | distance | float | ft, m |
| SPEED, Spd, GroundSpeed | speed | float | mi/hr, km/hr |
| WIDTH, SwathWdth, SWATHWIDTH, HeaderWidth | equipmentWidth | float | ft, m |
| VARIETY, Hybrid | variety | string | - |
| HEADING, Head, Direction | heading | float | degrees |

</TabItem>

<TabItem value="planted">

### Planted Operation

**Required Attributes:**

| Common Input Column Names | Maps to Leaf Property | Type | Units |
|---------------------------|----------------------|------|-------|
| SEEDRATE, SeedRt, Population, Rate | seedRate | int | seeds/ac, seeds/m² |
| CROP, Product | crop | string | - |
| ELEV, Elevation | elevation | float | ft, m |
| AREA | area | float | ft², m² |

**Optional Attributes:**

| Common Input Column Names | Maps to Leaf Property | Type | Units |
|---------------------------|----------------------|------|-------|
| VARIETY, Hybrid | variety | string | - |
| DEPTH, SeedDepth, PlantDepth | seedDepth | float | in, cm |
| DOWNFORCE, DownF | downForce | float | lbf |
| SINGULATION, Sing | singulation | float | % |
| SPEED, Spd | speed | float | mi/hr |
| TARGETRATE, SeedRateTarget | seedRateTarget | int | seeds/ac |

</TabItem>

<TabItem value="applied">

### Applied Operation

**Required Attributes:**

| Common Input Column Names | Maps to Leaf Property | Type | Units |
|---------------------------|----------------------|------|-------|
| RATE, AppRate, AppliedRate, AppldRate | appliedRate | float | gal/ac, L/ha, fl.oz/ac |
| ELEV, Elevation | elevation | float | ft, m |
| AREA | area | float | ft², m² |
| PRODUCT, Chemical, ProductName | products.name | string | - |

**Optional Attributes:**

| Common Input Column Names | Maps to Leaf Property | Type | Units |
|---------------------------|----------------------|------|-------|
| TARGETRATE, RateTarget | appliedRateTarget | float | gal/ac, L/ha |
| SPEED, Spd | speed | float | mi/hr |
| WIDTH, BoomWidth, SprayWidth | equipmentWidth | float | ft, m |
| DISTANCE, Dist | distance | float | ft, m |

</TabItem>

<TabItem value="tillage">

### Tillage Operation

**Required Attributes:**

| Common Input Column Names | Maps to Leaf Property | Type | Units |
|---------------------------|----------------------|------|-------|
| ELEV, Elevation | elevation | float | ft, m |
| AREA | area | float | ft², m² |

**Optional Attributes:**

| Common Input Column Names | Maps to Leaf Property | Type | Units |
|---------------------------|----------------------|------|-------|
| DEPTH, TillDepth, ActualDepth | tillageDepthActual | float | in, cm |
| TARGETDEPTH, DepthTarget | tillageDepthTarget | float | in, cm |
| SPEED, Spd | speed | float | mi/hr |
| DISTANCE, Dist | distance | float | ft, m |

</TabItem>

</Tabs>

## Geometry Requirements

- Shapefiles should contain **Point** or **Polygon** geometries
- All geometries are automatically projected to **WGS 84 (EPSG:4326)** during processing
- If your shapefile includes a `.prj` file, Leaf will use it to correctly reproject the data

## Unit Handling

Since shapefiles do not store unit information internally, Leaf assumes default units based on the provider:

- **SMS (Ag Leader)**: Uses Ag Leader's default units
- **Raven Slingshot**: Uses Raven's default units
- **Topcon**: Uses Topcon's default units

For detailed information about units in Leaf's output, see [Machine File Conversion Units][3].

## Tips for Best Results

1. **Use consistent column naming** - Stick to common conventions like `YIELD`, `MOISTURE`, `SEEDRATE` for best auto-detection
2. **Include all required attributes** - Ensure your shapefile contains the required columns for your operation type
3. **Export with projection info** - Include a `.prj` file to ensure accurate coordinate transformation
4. **Verify data quality** - Check that numeric columns contain valid numbers and are not empty
5. **Keep ZIP structure flat** - Place all shapefile components at the root level of the ZIP archive

## Related Resources

- [Manual File Upload Endpoints][1] - How to upload shapefiles via the API
- [Machine File Conversion Sample Output][2] - See example output from processed files
- [Machine File Conversion Units][3] - Detailed unit information
