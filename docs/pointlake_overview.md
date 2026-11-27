---
title: Pointlake Overview
description: Pointlake - Overview
sidebar_label: Overview
---

<!-- the following links are referenced throughout this document -->
[1]: https://docs.withleaf.io/docs/pointlake_endpoints
[2]: https://docs.withleaf.io/docs/operations_overview
[3]: https://docs.withleaf.io/docs/authentication

## Overview

Leaf Pointlake is a powerful SQL-based analytics service that allows you to query and analyze agricultural point data at scale. It provides direct SQL access to your field operations data, enabling complex spatial queries, aggregations, and analytics across your entire dataset.

## Key Features

- **SQL-Based Queries**: Use standard SQL (Spark SQL) to query your agricultural data
- **Spatial Operations**: Perform geospatial queries using functions like `ST_Intersects`, `ST_GeomFromText`, and more
- **Cross-Field Analytics**: Analyze data across multiple fields, regions, or your entire operation
- **Integration with External Data**: Join your point data with external datasets like SSURGO soil data
- **H3 Hexagon Aggregations**: Use H3 spatial indexing for efficient bucketing and visualization
- **States/Counties Data**: Query data by geographic boundaries using built-in states and counties tables

## Available Tables

The Pointlake service provides access to the following tables:

| Table | Description |
|-------|-------------|
| `leaf.pointlake.points` | Main table containing all field operation points |
| `states_counties` | Reference table with US state and county boundaries |
| `leaf.dev.ssurgo` | Soil survey data (SSURGO) for soil-based analytics |

## Points Table Schema

The `points` table contains the following key columns:

| Column | Type | Description |
|--------|------|-------------|
| `geometry` | Geometry | Point location (WKT format) |
| `timestamp` | Timestamp | When the operation occurred |
| `operationType` | String | Type of operation: `planted`, `harvested`, `applied`, `tillage` |
| `crop` | String | Crop type |
| `leafUserId` | String | Associated Leaf user |
| `apiOwnerUsername` | String | API owner |
| `seedRate` | Double | Seed rate (for planting operations) |
| `wetMassPerArea` | Double | Wet mass per area (for harvest operations) |
| `elevation` | Double | Elevation at the point |

## Use Cases

### Regional Analytics
Query operations data by state, county, or custom geographic boundaries to understand regional patterns and trends.

### Soil-Based Analysis
Join your field operations with SSURGO soil data to analyze how different soil types affect yields and optimize inputs.

### Yield Analysis
Correlate planting data with harvest data to understand seed rate vs. yield relationships across your fields.

### Custom Aggregations
Create custom aggregations using H3 hexagons for visualization and analysis at any resolution.

## Getting Started

1. Ensure you have a valid [authentication token][3]
2. Use the [Pointlake endpoints][1] to query your data
3. Start with simple queries and build up to more complex analytics

:::info SQL Engine
Pointlake uses Spark SQL as the query engine. Refer to the [Spark SQL documentation](https://spark.apache.org/docs/latest/sql-ref.html) for syntax details.
:::
