---
title: General Setup Information
---

# Pagination

All endpoints that return a list of resources are paginated. You can select the size of the page and which page to get by using the query parameters `size` and `page`.

- `size` - Defines the size of the page. Defaults to 20. Max size is 100.
- `page` - Defines which page to fetch, considering each page has `size` elements. The first page is page 0. Defaults to 0.


# Date format

All the dates follow ISO 8601 format. Specifically, all the dates should be in "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'".
