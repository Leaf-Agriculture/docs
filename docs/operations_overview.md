---
title: Overview
---

## Overview

Leaf's Operation Data API returns aggregated, cleaned, and standardized data
from all major machine data brands in a simple JSON response. After connecting
to a company, our Operation Data Service will immediately pool machine data and
every 30 minutes it will do a new pooling to keep files always up to date.

All files will be passed through a processing chain that includes:
- Converting different format files to a raw GeoJSON;
- Standardizing the raw GeoJSON;
- Creating images for all the relevant attributes in the file;
- Creating a summary of the file with general information, such as averages,
standard deviations, maximum and minimum values ​​for important properties, and more.

This processing may take a few minutes to complete, that's why it will happen in
background.

This service also provides an auto-merge feature, which will identify files that
are part of the same operation in the field and automatically merge them into a
new file, so you still have access to the not-merged files.

Alternatively, it is possible to manually upload files to be processed and merge
them manually if desired. Keep in mind that merging files is processing-heavy
and may take about 20 minutes to finish.

### Roadmap

Today, you can connect to these companies:

- John Deere
- Climate Field View
- CNHi
- Trimble

Coming in the third quarter of 2020:

- Raven
- AGCO

Coming in the fourth quarter of 2020:

- AgLeader
- Stara

We also provide a [Leaf Postman collection](leaf_postman)
so you can follow along easily.

[leaf_postman]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
