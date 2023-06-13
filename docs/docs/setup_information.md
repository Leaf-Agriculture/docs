---
title: General Setup Information
description: General Setup Information
---

## Customer Sandbox

All new accounts created in Leaf will be linked to the Sandbox environment, this is basically a restricted testing 
environment. Currently accounts in this environment will be limited to creating only five 
[leaf users][leaf]. 

:::tip Upgrade
To upgrade your account, contact [sales][sales].
:::

[leaf]: https://docs.withleaf.io/docs/user_management_overview
[sales]: https://withleaf.io/products/pricing/

## Pagination

All endpoints that return a list of resources are paginated. You can select the size of the page and which page to get by using the query parameters `size` and `page`.

- `size` - Defines the size of the page. Defaults to 20. Max size is 100.
- `page` - Defines which page to fetch, considering each page has `size` elements. The first page is page 0. Defaults to 0.


## Date format

All the dates follow ISO 8601 format. Specifically, all the dates should be in the format "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".


## File archiving 

Be default, our API archive the files to a slower storage after 180 days without access. The file will be available again only upon a support request.


## File size

Currently, our API have a 3 gigabytes limit for file uploads. This is applied in the file upload [endpoint](machine_file_conversion_endpoints.md/#upload-a-file) 


## Error codes

Service | Endpoint | Message | HTTP Status | Reason
--- | --- | --- | --- | --- 
Field Operations | [Upload a file](machine_file_conversion_endpoints.md/#upload-a-file) | Bad Request | 400 | The uploaded file is bigger than 3 GB <!-- not standartized -->






