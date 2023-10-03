---
title: Field Operations Overview
description: Field Operations - Overview
sidebar_label: Overview
---


<!-- the following links are referenced throughout this document -->
[1]: https://docs.withleaf.io/docs/machine_file_conversion_overview
[2]: https://docs.withleaf.io/docs/operations_endpoints
[3]: https://docs.withleaf.io/docs/field_boundary_management_overview
[4]: https://docs.withleaf.io/docs/configurations_overview
[5]: https://docs.withleaf.io/docs/alerts_overview

:::info Start with machine file conversion
Before continuing with operations, make sure to go through **[Machine File Conversion][1]** first
:::

## Operations
Leaf operations provide a way to get unified, consistent and standardized data from tasks (planting, tillage, application and harvest) performed in a given field, across all the provider(s) you integrate.  For all operations processed through Leaf, you will receive:
- A standardGeoJson
- Filtered GeoJson (if enabled)
- Relevant images of the operation (if enabled)
- File summary


Leaf automatically processes operation files and merges them into field operations. You can find more information on how to extract operations data through the [Operations endpoint page][2].

IMPORTANT NOTE: 
- The process of creating operations starts at [Machine File Conversion][1] so please make sure you read and understand the conversion process before continuing.
- You MUST have [field boundaries][3] in order to create operations.
- It is important to set up [configurations][4] to ensure you customize your setup to your needs.
- Also, [alerts][5] should be set up (webhooks) to ensure that you are notified when there are updates to your data and that data processing is finished. 
