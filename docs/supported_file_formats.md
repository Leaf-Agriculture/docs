---
title: Supported File Formats
description: Supported file formats and requirements for machine file uploads
sidebar_label: Supported File Formats
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[1]: machine_file_conversion_units
[2]: machine_file_conversion_sample_output

## Overview

Leaf supports machine files from various providers and formats. This page details the supported file formats and expected file structures for each.

For information on output properties and units per operation type, see [Units of Measurement][1] and [Sample Responses][2].

:::info File size limit
Currently, our upload endpoints accept files with a maximum size of 3 gigabytes.
:::

## Supported Formats

| Provider | File Format | Monitor/Source |
|----------|-------------|----------------|
| John Deere | GS3 | GreenStar 3 - 2630 |
| John Deere | Gen4 | Gen 4 - 4600/4630 |
| John Deere | Shapefile | Exported from MyJohnDeere |
| Climate FieldView | dat | All Climate FieldView files |
| CNHI | CN1 | Case IH Pro 700, New Holland IntelliView IV |
| CNHI | ISOXML | Case IH Pro 1200, New Holland IntelliView 12 |
| AgLeader | yld | YM2000, PFAdvantage & other OEM systems |
| AgLeader | ilf | INTEGRA / Insight / Edge |
| AgLeader | agdata | INTEGRA / VERSA / COMPASS |
| Trimble | AgData | FMX and CFX monitors |
| Trimble | AgGPS | TMX and GFX monitors |
| Precision Planting | PP2020 | 20\|20 |
| CLAAS | ISOXML | ISOXML format |
| Kuhn | ISOXML | ISOXML format |
| Kverneland Group | ISOXML | ISOXML format |
| Müller-Elektronik | ISOXML | ISOXML format |
| Teknomika | ISOXML | ISOXML format |
| Topcon | ISOXML | ISOXML format |
| Farmobile | GeoJSON | Exported from Farmobile |
| Other | Shapefile | SMS, Raven Slingshot, Topcon |

---

## John Deere

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| GS3 | GreenStar 2 - 2600, GreenStar 3 - 2630 | Harvest, planting, and applied data in .fdd/.fdl files |
| Gen4 | Gen 4 - 4600/4630 | Harvest, planting, and applied data in .jdl log files |
| Shapefile | Exported from MyJohnDeere | Harvest, planting, and applied data with .json metadata |

### Expected file structure

**GreenStar 2 (2600)**
```
...
└── RCD
   ├── *.fdd
   └── *.fdl
```

**GreenStar 3 (2630)**
```
GS3_2630
└── RCD
   └── EIC
      └── global.ver
        └── documentation
              └── ...
                 ├── *.fdd
                 └── *.fdl
```

**GreenStar 4 (4600+)**
```
jd-data
└── log
   └── *.jdl
```

---

## Climate FieldView

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| dat | All files from Climate FieldView | Harvest, planting, and applied data (harvest_*.dat, field_map_*.dat, liquid_map_*.dat) |

### Expected file structure

**20|20 SeedSense Generation 1 and Generation 2**
```
...
├── harvest_*.dat – Harvest data
├── field_map_*.dat – Planting data
└── liquid_map_*.dat - AsApplied spraying data
```

**20|20 SeedSense Generation 3**
```
...
└── *.2020
```

---

## CNHI

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| CN1 | Case IH Pro 700, equivalent to New Holland IntelliView IV | Harvest, planting, applied, and tillage data in .vy1 files |
| ISOXML | Case IH Pro 1200, equivalent to New Holland IntelliView 12 | Harvest, planting, applied, and tillage data in TASKDATA.XML + .bin files |

### Expected file structure

**Voyager 2**
```
*.cn1
└── ...
   └── *.vy1
```

**ISOXML**
```
TASKDATA
├── TASKDATA.XML
└── *.bin
```

---

## AgLeader

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| yld | YM2000, PFAdvantage & other OEM systems | Yield/harvest data in .yld files |
| ilf | INTEGRA / Insight / Edge | Harvest, planting, applied, and tillage data in .ilf files |
| agdata | INTEGRA / VERSA / COMPASS | Harvest, planting, applied, and tillage data in .agdata files |

### Expected file structure

**AgLeader Integra (versions 3.5+), Versa**
```
...
├── *.agdata
└── *.agsetup
```

**AgLeader Edge, Insight, and Integra (version 3.4)**
```
...
└── *.ilf
```

**AgLeader PF Advantage, PF 3000, PF 3000 Pro, YM2000**
```
...
└── *.yld
```

---

## Trimble

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| AgData | FMX and CFX monitors | Harvest, planting, applied, and tillage data in .ag* files |
| AgGPS | TMX and GFX monitors | Harvest, planting, applied, and tillage data as shapefiles |

### Expected file structure

**GFX-750, TMX-2050**
```
Agdata
├── Fields
│   └── *.agf
├── implements
│   └── *.agi
├── prescriptions
│   └── *.agm
├── Tasks
│   └── *.agt
├── Users
│   └── *.agu
└── vehicles
   └── *.agv
```

**CFX-750, FMX**
```
AgGPS
└── Data
   └── "Grower"
      └── Farm
        └── field
          └── "Task"
            ├── *.cpg
            ├── *.dbf
            ├── *.shp
            └── *.shx
```

---

## Precision Planting

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| PP2020 | 20\|20 | Harvest, planting, and applied data in .2020 files |

### Expected file structure

**20|20 SeedSense Generation 1 and Generation 2**
```
...
├── harvest_*.dat – Harvest data
├── field_map_*.dat – Planting data
└── liquid_map_*.dat - AsApplied spraying data
```

**20|20 SeedSense Generation 3**
```
...
└── *.2020
```

---

## CLAAS

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| ISOXML | ISOXML format | Harvest, planting, applied, and tillage data in TASKDATA.XML + .bin files |

### Expected file structure

```
TASKDATA
├── *.XML
└── *.bin
```

---

## Kuhn

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| ISOXML | ISOXML format | Harvest, planting, applied, and tillage data in TASKDATA.XML + .bin files |

### Expected file structure

```
TASKDATA
├── *.XML
└── *.bin
```

---

## Kverneland Group

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| ISOXML | ISOXML format | Harvest, planting, applied, and tillage data in TASKDATA.XML + .bin files |

### Expected file structure

```
TASKDATA
├── *.XML
└── *.bin
```

---

## Müller-Elektronik

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| ISOXML | ISOXML format | Harvest, planting, applied, and tillage data in TASKDATA.XML + .bin files |

### Expected file structure

```
TASKDATA
├── *.XML
└── *.bin
```

---

## Teknomika

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| ISOXML | ISOXML format | Harvest, planting, applied, and tillage data in TASKDATA.XML + .bin files |

### Expected file structure

```
TASKDATA
├── *.XML
└── *.bin
```

---

## Topcon

| File Format | Monitor Model | Details |
|-------------|---------------|---------|
| ISOXML | ISOXML format | Harvest, planting, applied, and tillage data in TASKDATA.XML + .bin files |

### Expected file structure

```
TASKDATA
├── *.XML
└── *.bin
```

---

## Farmobile

| File Format | Source | Details |
|-------------|--------|---------|
| GeoJSON | Exported from Farmobile | Operation data in GeoJSON format (default Farmobile units assumed) |

Since GeoJSON files do not contain information on the units used, Leaf assumes the default units from Farmobile.

---

## Shapefile

Shapefiles are supported from SMS (Ag Leader), Raven Slingshot, Topcon, and other providers assuming they meet the file structure and attribute conventions.

### Expected file structure

Shapefiles must be uploaded as a ZIP file containing the required shapefile components:

```
shapefile.zip
├── *.shp    (required) - geometry data
├── *.dbf    (required) - attribute data (crop, yield, moisture, area, etc.)
├── *.shx    (required) - shape index
├── *.prj    (optional) - projection information
└── *.cpg    (optional) - character encoding
```

All shapefile components must share the same base filename.

:::tip
The ZIP file should not contain subfolders. Place all shapefile components at the root level of the archive.
:::

### Required Properties by Operation Type

Leaf supports various input column names for shapefiles. For each operation-specific required property, the following column names are supported: 


#### Operation-Specific Properties

<Tabs
  defaultValue="harvested"
  values={[
    { label: 'Harvested', value: 'harvested' },
    { label: 'Planted', value: 'planted' },
    { label: 'Applied', value: 'applied' },
  ]}>

<TabItem value="harvested">

| Leaf Property | Supported Input Column Names |
|---------------|-----------------------------------|
| crop | crop, Crop\_Type, Crop, CROP\_NM, cropid, CropID, Product\_Pr |
| harvestMoisture | Moisture\_\_, moisture, Moisture, MOISTURE, 013A |
| wetMass | WetMass, wetMass, Harvest\_We |
| wetMassPerArea | Yield\_Mass, Yld\_Mass\_W |
| wetVolume | wetVolume |
| wetVolumePerArea | Yld\_Vol\_We, Yield\_\_Wet, WET\_YIELD |


</TabItem>

<TabItem value="planted">

| Leaf Property | Supported Input Column Names |
|---------------|-----------------------------------|
| crop | crop, Crop\_Type, Crop, CROP\_NM, cropid, CropID, Product\_Pr |
| seedRate | seedRate, AmntPerAc, SeedCount, Seed Count, Rt\_Apd\_Ct\_, SeedFlow\_k, SeedFlow\_\_, SeedFlow\_s, Seed\_Cnt\_\_, AVE\_SEEDS |

</TabItem>

<TabItem value="applied">

| Leaf Property | Supported Input Column Names |
|---------------|-----------------------------------|
| appliedRate | Liq\_Rt\_ga, AppliedRat, Rt\_Apd\_Liq, Rt\_Apd\_Ms\_, actualRate |
| products | product, products, Product, Products |

</TabItem>


</Tabs>

To include additional column names please contact support. 

### Unit handling

Since shapefiles do not contain unit information internally, Leaf assumes the default units from the source provider when processing the data.
