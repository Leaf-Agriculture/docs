---
title: Supported File Formats
description: Supported file formats and requirements for machine file uploads
sidebar_label: Supported File Formats
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: /docs/machine_file_conversion_units
[2]: /docs/machine_file_conversion_sample_output

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

| File Format | Monitor Model |
|-------------|---------------|
| GS3 | GreenStar 3 - 2630 |
| Gen4 | Gen 4 - 4600/4630 |
| Shapefile | Exported from MyJohnDeere |

### Expected file structure

**GreenStar 4 (4600+)**
```
jd-data
└── log
   └── *.jdl
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

**GreenStar 2 (2600)**
```
...
└── RCD
   ├── *.fdd
   └── *.fdl
```

---

## Climate FieldView

| File Format | Monitor Model |
|-------------|---------------|
| dat | All files from Climate FieldView |

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

| File Format | Monitor Model |
|-------------|---------------|
| CN1 | Case IH Pro 700, equivalent to New Holland IntelliView IV |
| ISOXML | Case IH Pro 1200, equivalent to New Holland IntelliView 12 |

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

| File Format | Monitor Model |
|-------------|---------------|
| yld | YM2000, PFAdvantage & other OEM systems |
| ilf | INTEGRA / Insight / Edge |
| agdata | INTEGRA / VERSA / COMPASS |

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

| File Format | Monitor Model |
|-------------|---------------|
| AgData | FMX and CFX monitors |
| AgGPS | TMX and GFX monitors |

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

| File Format | Monitor Model |
|-------------|---------------|
| PP2020 | 20\|20 |

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

## ISOXML

Multiple providers use the ISOXML format including CLAAS, Kuhn, Kverneland Group, Müller-Elektronik, Teknomika, and Topcon Precision Agriculture.

### Expected file structure

```
TASKDATA
├── *.XML
└── *.bin
```

---

## Farmobile

| File Format | Source |
|-------------|--------|
| GeoJSON | Exported from Farmobile |

Since GeoJSON files do not contain information on the units used, Leaf assumes the default units from Farmobile.

---

## Shapefile

Shapefiles are supported from SMS (Ag Leader), Raven Slingshot, and Topcon.

### Expected file structure

Shapefiles must be uploaded as a ZIP file containing the required shapefile components:

```
shapefile.zip
├── data.shp    (required) - geometry data
├── data.dbf    (required) - attribute data
├── data.shx    (required) - shape index
├── data.prj    (optional) - projection information
└── data.cpg    (optional) - character encoding
```

All files must share the same base filename (e.g., `data.shp`, `data.dbf`, `data.shx`).

:::tip
The ZIP file should not contain subfolders. Place all shapefile components at the root level of the archive.
:::

### Unit handling

Since shapefiles do not contain unit information internally, Leaf assumes the default units from the source provider when processing the data.
