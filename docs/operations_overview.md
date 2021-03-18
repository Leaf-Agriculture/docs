---
title: Overview
---

Leaf's Operation Data API returns clean, aggregated, and standardized data
from all major machine data brands in a simple JSON response. 

You can access user-permissoned files in two ways:

1. Connecting to the company that holds your users' files. Our Operation Data 
Service will immediately pool machine data from the authorized account and 
monitor new files to keep them updated

2. Uploading the files directly to Leaf.

:::info requires Leaf User
You will need a Leaf User to retrieve operations images, summary, and 
standardized files. You can add files by having a Leaf User with valid 
credentials from the provider you want to access data or you can upload data 
manually. If you don't have a Leaf User or you have not connected it with any 
provider yet, see **[how to create a Leaf User](#)** and 
**[how to add credentials to a Leaf User]()**.
:::

All files will be passed through a processing chain that includes:
- Converting raw proprietary format files to a `rawGeojson`;
- Standardizing the `rawGeojson` to a `standardGeojson`;
- Creating images for all the numerical attributes in the file;
- Creating a summary of the file with summary information, such as averages,
standard deviations, maximum and minimum values ​​for important properties, and 
more. This summary is usually used to have general information about the 
operation without the need to download and open the standardGeojson file. For
example, you can display the area of the operation, how much was harvested and
the date it happened, all without opening big files.

This processing may take a few minutes to complete and happens continuously
in the background.

Since one single operation can be represented in several (sometimes hundreds of) files by the provider,
this service also provides an auto-merge feature, which will identify files that
belong to the same operation (planting, for example) and same field and 
automatically merge them into a new file.

Alternatively, it is possible to manually upload files to be processed and merge
them manually if desired. Please keep in mind that merging files is processing-heavy
and may take about 20 minutes to finish.

:::info Merging operation files with Leaf
Learn more about how to merge files into operations in our blog:  [Merging operation files with Leaf] [https://medium.com/leaf-agriculture/merge-of-files-into-operations-1e62726df64d]
:::

When manually uploading (in a zip), you can select which provider the files
inside the zip came from. If you are unsure or you know that there are files 
from more than one provider, Leaf can automatically detect, detach and process
each file. 

Currently, Leaf is able to (detect and) process files from the following
providers and formats:

- John Deere:
    - Gen 4
    - GS3
    - Shapefile
    - ADM (Adapt Data Format)
- Climate Field View:
    - .dat (Climate Field View proprietary)
    - Shapefile
- CNHi
    - .cn1
    - Shapefile
- Trimble
    - .agt (Trimble proprietary)
    - Shapefile

:::info File processing
We are always improving our processing. If you have any doubts or suggestions, 
we will be happy to help at help@withleaf.io
:::


We also provide our [Leaf Postman collection][leaf_postman_url] so you can follow
along easily.


[leaf_postman_url]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
