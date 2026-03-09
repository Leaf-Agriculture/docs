---
title: Supported File Formats
description: Supported file formats, expected folder structures, and preparation guidelines for manual file upload
sidebar_label: Supported File Formats
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## File requirements

**All files must be uploaded as ZIP files.** Leaf will extract and process the contents automatically.

Maximum file size: 3 GB

### Folder structure requirements

**ZIP folders directly from your monitor -- don't manually collect files.** Each equipment manufacturer uses specific folder names and structures that must remain intact. When creating your ZIP file:

- ZIP the entire folder as it exists on your monitor or USB drive
- Keep folder names exactly as they appear (e.g., `TASKDATA`, `RCD`, `AgData`)
- Preserve the complete folder hierarchy
- Don't create new folders, rename folders, or move files around

Leaf expects these specific structures and will look for files in the correct locations.

### Nested ZIP support

Leaf will look up to two levels deep inside nested ZIP files. This means you can:

- Upload a single ZIP containing multiple folders
- Upload a ZIP that contains other ZIP files inside it (up to 2 levels of nesting)

:::info Best practice: Use original monitor files
**Upload files directly from your monitor when possible.** Original monitor files contain richer data and process more reliably than exported shapefiles.

If you're using Ag Leader SMS, export the original files from your monitor rather than creating shapefile exports from SMS. The native monitor files preserve more detail and reduce processing issues.
:::

## Preparing your files

**Important:** ZIP the folder directly from your monitor or USB drive as-is. Do not try to manually gather or collect individual files into a new folder. Leaf expects specific file and folder structures for each equipment type, and these structures must remain intact.

### John Deere

**GreenStar 2 (2600)**

Expected structure:

```
RCD
├── *.fdd
└── *.fdl
```

Locate the `RCD` folder on your USB drive, ZIP it, and upload.

**GreenStar 3 (2630)**

Expected structure:

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

Locate the `GS3_2630` or `RCD` folder on your USB drive, ZIP it with the complete folder hierarchy, and upload.

**GreenStar 4 (Gen 4 - 4600/4630)**

Expected structure:

```
JD-Data
└── log
   └── *.jdl
```

Locate the `JD-Data` folder, ZIP it, and upload.

**MyJohnDeere shapefile exports**

- Supported, but native monitor files are preferred when available

### Climate FieldView

These are the same 20|20 monitors also listed under Precision Planting below.

**20|20 SeedSense Generation 1 and Generation 2**

Expected structure:

```
├── harvest_*.dat (harvest data)
├── field_map_*.dat (planting data)
└── liquid_map_*.dat (as-applied spraying data)
```

**20|20 SeedSense Generation 3**

Expected structure:

```
└── *.2020
```

Locate the folder containing these files, ZIP it, and upload.

### CNHI (Case IH / New Holland)

**Pro 700 / IntelliView IV (Voyager 2)**

Expected structure:

```
<name>.cn1/
├── index.vy1
└── (other data files)
```

The `.cn1` folder contains all the operation data. Locate it on your monitor or USB drive, ZIP the entire folder, and upload.

**Pro 1200 / IntelliView 12 (ISOXML)**

Expected structure:

```
TASKDATA
├── TASKDATA.XML
└── *.bin
```

Locate the `TASKDATA` folder, ZIP it (keeping the folder name), and upload.

### Ag Leader

**INTEGRA (v3.5+), VERSA, or COMPASS**

Expected structure:

```
├── *.agdata
└── *.agsetup
```

Both files must be present together. Locate the folder containing both files, ZIP it, and upload.

**Edge, Insight, or INTEGRA (v3.4)**

Expected structure:

```
└── *.ilf
```

Locate the folder containing `.ilf` files, ZIP it, and upload.

**PF Advantage, PF 3000, PF 3000 Pro, YM2000**

Expected structure:

```
└── *.yld
```

Locate the folder containing `.yld` files, ZIP it, and upload.

**SMS exports**: If you must export from SMS, use the native monitor files above instead of shapefiles. Original monitor files give better results. See the [shapefile exports section](#shapefile-exports) below if you need to use SMS exports.

### Trimble

**FMX or CFX monitors (AgData format)**

Expected structure:

```
AgData
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

Locate the `AgData` folder, ZIP it with the complete folder structure, and upload.

**GFX-750, TMX-2050 monitors (AgGPS format - shapefiles)**

Expected structure:

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

Locate the operation folder, ZIP it, and upload.

### Precision Planting

These are the same 20|20 monitors also listed under Climate FieldView above.

**20|20 SeedSense Generation 1 and Generation 2**

Expected structure:

```
├── harvest_*.dat (harvest data)
├── field_map_*.dat (planting data)
└── liquid_map_*.dat (as-applied spraying data)
```

**20|20 SeedSense Generation 3**

Expected structure:

```
└── *.2020
```

Locate the folder containing these files, ZIP it, and upload.

### Raven Slingshot

**Raven FMIS**

Expected structure:

```
├── *.xml (field/task data)
└── *.tab (tabular data)
```

Both `.xml` and `.tab` files should be present. ZIP the folder containing them and upload.

**Raven JDP**

Expected structure:

```
└── *.jdp
```

Locate the folder containing `.jdp` files, ZIP it, and upload.

### ISOXML equipment

Supported brands: CLAAS, Kuhn, Kverneland Group, Müller-Elektronik, Teknomika, Topcon

Expected structure:

```
TASKDATA
├── *.XML
└── *.bin
```

Locate the `TASKDATA` folder from your monitor, ZIP it (keeping the folder name), and upload.

**Important:** The folder must be named `TASKDATA` - do not rename it.

### Farmobile

GeoJSON files exported from Farmobile. ZIP the exported files and upload. Since GeoJSON files do not contain unit information, Leaf assumes the default units from Farmobile.

## Shapefile exports

Generic shapefiles can be uploaded from SMS (Ag Leader), Raven Slingshot, Topcon, and other systems. **Original monitor files are strongly preferred** when available -- they contain richer data and process more reliably.

### Shapefile requirements

Expected structure:

```
shapefile.zip
├── *.shp (required - geometry data)
├── *.dbf (required - attribute data)
├── *.shx (required - shape index)
├── *.prj (required - projection information)
└── *.cpg (optional - character encoding)
```

**Important:**

- All four required files (`.shp`, `.dbf`, `.shx`, `.prj`) must be present -- Leaf will not detect the shapefile without them
- All files must share the same base name (e.g., `field_harvest.shp`, `field_harvest.dbf`, `field_harvest.shx`, `field_harvest.prj`)
- Place all files at the root level of the ZIP -- don't nest them inside subfolders

### Recognized column names

Your `.dbf` file must include columns that Leaf can map to the correct properties. Shapefile column names are often truncated to 10 characters, so many recognized names reflect that truncation.

**Harvest operations:**

- **Crop**: `Crop`, `Crop_Type`, `Product_Pr`
- **Moisture**: `Moisture`, `Moisture__`, `MOISTURE`
- **Yield**: `Yld_Vol_We`, `Yield_Mass`, `WetMass`

Leaf will calculate missing dry/wet yield properties automatically when a crop column is present.

**Planting operations:**

- **Crop**: `Crop`, `Crop_Type`, `Product_Pr`
- **Seed rate**: `seedRate`, `SeedCount`, `Rt_Apd_Ct_`

**Application operations:**

- **Applied rate**: `AppliedRat`, `Rt_Apd_Liq`, `actualRate`
- **Product**: `Product`, `product`, `Products`

If your column names don't match any recognized name, contact Leaf Support.

### Exporting from SMS (Ag Leader)

If original monitor files aren't available and you need to export from Ag Leader SMS, you can use our [SMS export templates (ZIP)](/sms-export-templates/sms_export_templates_Feb2025.zip) for harvest, planting, and application exports.

1. In SMS Project Workspace, right-click the operation you want to export
2. Select **Export** and click the paper icon for "Export to a Generic File Format"
3. Choose **Generic** and **Shape** as the file type
4. Click **Export Selections and Settings** to configure which columns are included. You can also rename columns here. For example, to include Crop in harvest files: select Property, choose the Product Management Item Type, add Crop Type to the Selected Items list, and rename the Item Name to "Crop"

   <img src={useBaseUrl('img/sms_export_selections_settings.png')} alt="Export Selections and Settings dialog" width="50%" />

5. Save to your Desktop or Documents folder
6. You'll get four files: `.shp`, `.dbf`, `.prj`, and `.shx`
7. Select all four files, right-click, and compress them into a ZIP file
8. Upload the ZIP file

## Common issues

**"Upload failed" errors**

- Confirm your file is uploaded as a ZIP (all uploads must be ZIP files)
- Check that your ZIP contains all required components for your file type
- Verify the file size is under 3 GB
- For shapefiles, confirm your `.dbf` file includes the required columns for your operation type

**Missing or incomplete data**

- Verify you've maintained the original folder structure from your monitor
- Don't rename folders (e.g., keep `TASKDATA`, `RCD`, `AgData` as-is)
- ZIP the complete folder directly - don't manually collect or move files
- For ISOXML files, the `TASKDATA` folder must contain both `*.XML` and `*.bin` files in their original structure
- For Ag Leader INTEGRA, both `*.agdata` and `*.agsetup` files must be in their original folder
- Check that files aren't nested too deeply (Leaf looks up to 2 levels deep in nested ZIPs)

**Processing errors**

- If files fail to process, double-check the folder structure matches what's expected for your equipment
- Make sure you haven't manually reorganized, gathered files into new folders, or flattened the folder hierarchy

Contact support if your file format isn't listed here or if you encounter upload issues.
