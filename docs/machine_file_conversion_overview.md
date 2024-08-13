---
title: Machine File Conversion Overview
description: Machine File Conversion - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://docs.withleaf.io/docs/user_management_overview
[2]: https://docs.withleaf.io/docs/field_boundary_management_overview
[3]: https://docs.withleaf.io/docs/machine_file_conversion_overview
[4]: https://docs.withleaf.io/docs/operations_overview/
[5]: https://docs.withleaf.io/docs/converters_overview
[6]: https://docs.withleaf.io/docs/provider-authentication-overview
[7]: https://docs.withleaf.io/docs/machine_file_conversion_sample_output
[8]: https://docs.withleaf.io/docs/operations_sample_output

:::info requires Leaf User
Before you begin importing data, you will need a Leaf User. You’ll be able to attach provider credentials and manually upload data to the Leaf User. If you don't have a Leaf User or you have not connected it with any provider yet, see the **[Leaf user overview][1]**
:::

:::info operations require boundaries
You first need boundaries in order for operations to be created. Please refer to **[field boundary management][2]** for more information on creating boundaries. If you do not have boundaries in your account, Leaf will still translate these machine files into summary data, but it will not create operations.
:::

## Ways to import machine data into Leaf
Machine files can be imported via Leaf two ways:
1. **Uploading the files manually to Leaf:** Manual file upload functionality can be useful for your customers if they’re not yet connected to a cloud account through their machinery provider. We provide a manual process or a pre-built file upload widget through Leaf Link to allow your end users to upload various machine file formats via Leaf, which we then process for you into a consistent file format. See previous section for getting started with [manual file upload][5]
2. **Connecting to a provider:** Leaf will immediately start to pool machine data from the authorized account and monitor new files to keep them updated. See previous section for getting started with [provider authentication][6].


## How does Leaf process machine files?
All files move through the following process:
- Raw proprietary format machine files are converted to a `rawGeojson`.
- The `rawGeojson` gets standardized to become a `standardGeojson`(Leaf’s proprietary format). The `standardGeojson` is also cleaned by default.
- `Operations` and `operation summaries` are created by merging machine files based on field boundaries and configuration settings (see [operations][4] for more information).


File processing time will vary depending on the amount of data being processed on  initial upload or sync. You should start to see data processing within a few minutes. After that, processing will happen continuously in the background every 24 hours. 

Once Leaf has processed files into a file summary, you will receive summarized information, such as averages, standard deviations, maximum and minimum values ​​for important properties, and more. This summary is usually used to get general information about the operation without the need to download and open the standardGeojson file. For example, you can display the area of the operation, how much was harvested and the date it happened, all without opening large files.

### Summary geometry
Leaf API generates a geometry that best represents the coverage of an operation and makes it available in the operation summary.
The geometry is created based on the buffer of the operation points.

<p align="center">
    <img alt="Geometries algorithm" width="70%" src={useBaseUrl('img/summary_geometry.png')} />
</p>


## Machine file summary vs operation summary
**Machine file summary:** Basic information of files derived from the point data, processed and cleaned by Leaf. Data outputs will vary by task (planted, applied, harvested, tillage). You’ll find some sample responses [here][7].

**Operation summary:** The output of files merged to a field boundary that are processed and cleaned by Leaf. You’ll find some sample responses [here][8].

## Why does Leaf merge files?
Since one single operation can be represented in several (sometimes hundreds of) files by the provider,
Leaf provides an auto-merge feature, which will identify files that
belong to the same operation (planting, for example) and same field boundary and 
automatically merge them into a single operation. This works for both integrations and manual file uploads. Please keep in mind that merging files is processing-heavy and can take some time to finish. This process runs every 4 hours.

<img alt="Field example" src={useBaseUrl('img/machine-file-vs-operation.png')} />