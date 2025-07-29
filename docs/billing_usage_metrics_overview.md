---
title: Usage Monitoring overview
description: Monitor and track your API usage across different services and features
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

Monitor and track your usage of Leaf's services. Usage tracking measures data processing activities - not API access. You have unlimited API calls to retrieve your processed data.

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/billingapplication/api
```

### What Gets Tracked

Each service tracks area differently with these product identifiers:

| Product ID | What It Tracks | When to Use |
|------------|----------------|-------------|
| `FIELDS_BOUNDARY` | Boundary processing during contract period | Field boundary usage monitoring and billing |
| `AUDIT_FIELDS_BOUNDARY` | Current total boundary area | Understanding field portfolio size |
| `OPERATIONS_FILE` | Machine files uploaded/synced | Raw machine data processing usage monitoring and billing |
| `OPERATIONS_OPERATION` | Operations from files intersecting boundaries | Field-specific operations usage monitoring and billing |
| `SATELLITE_PROCESS_PLANET` | Planet satellite imagery processing | Planet satellite usage monitoring and billing|
| `SATELLITE_PROCESS_SENTINEL` | Sentinel satellite imagery processing | Sentinel satellite usage monitoring and billing|

You pay for Leaf to process your data, not access it. Once processed, you have unlimited API access.

Area is counted when Leaf successfully processes your data (not during uploads or if processing fails). Deleted boundaries count in the current contract term only.

### Contracts

Contracts are automatically generated when you start using Leaf services. Each contract tracks usage for one product type (like `FIELDS_BOUNDARY` or `OPERATIONS_FILE`) with annual cycles.

**Finding Your Contracts**: Call `GET /billing/contracts` to see available contracts with their IDs and tracked services.

### API Owner vs Leaf User Level Tracking

- **API Owner Level**: Shows unique spatial area across all users (removes overlaps)
- **Leaf User Level**: Shows individual user processing (includes overlaps, used for billing)

The difference between these totals indicates spatial overlap - useful for identifying data duplication across your organization.

[contact]: mailto:help@withleaf.io 