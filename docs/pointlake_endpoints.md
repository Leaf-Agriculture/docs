---
title: Pointlake Endpoints
description: Pointlake - Endpoints
sidebar_label: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: #get-all-files
[2]: #get-file-summary
[3]: #query-data

## About

All HTTP methods should be prepended by this service's endpoint:

```
https://api.withleaf.io/services/pointlake/api/v2
```

This service has the following endpoints available:

| Description                 | Endpoints                                                                   |
|-----------------------------|-----------------------------------------------------------------------------|
| [Get all files][1]          | <span class="badge badge--success">GET</span> `/files`                      |
| [Get file summary][2]       | <span class="badge badge--success">GET</span> `/files/{id}/summary`         |
| [Query data][3]             | <span class="badge badge--warning">POST</span> `/query`                     |


### Get all files

&nbsp<span class="badge badge--success">GET</span> `/files`

Gets a paged list of files available in Pointlake.

| Parameter      | Values                                    |
|----------------|-------------------------------------------|
| `leafUserId`   | UUID of one of your users                 |
| `page`         | Page number (default: 0)                  |
| `size`         | Page size (default: 20, max: 100)         |

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/pointlake/api/v2/files?leafUserId=YOUR_LEAF_USER_ID&page=0&size=100'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```python
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/pointlake/api/v2/files?leafUserId=YOUR_LEAF_USER_ID&page=0&size=100'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/pointlake/api/v2/files?leafUserId=YOUR_LEAF_USER_ID&page=0&size=100'
  ```

  </TabItem>
</Tabs>


### Get file summary

&nbsp<span class="badge badge--success">GET</span> `/files/{id}/summary`

Gets the summary for a specific file.

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/pointlake/api/v2/files/{fileId}/summary'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```python
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/pointlake/api/v2/files/{fileId}/summary'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://api.withleaf.io/services/pointlake/api/v2/files/{fileId}/summary'
  ```

  </TabItem>
</Tabs>


### Query data

&nbsp<span class="badge badge--warning">POST</span> `/query`

Execute SQL queries against your Pointlake data.

| Parameter    | Values                            |
|--------------|-----------------------------------|
| `sqlEngine`  | `SPARK_SQL` (required)            |

The request body should contain the SQL query as plain text.

#### Request examples

<Tabs
  defaultValue="sh"
  values={[
    { label: 'cURL', value: 'sh', },
    { label: 'Python', value: 'py', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://api.withleaf.io/services/pointlake/api/v2/query?sqlEngine=SPARK_SQL'
  const headers = { 
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  }

  const query = 'SELECT geometry FROM leaf.pointlake.points TABLESAMPLE(0.1 PERCENT)'

  axios.post(endpoint, query, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```python
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://api.withleaf.io/services/pointlake/api/v2/query?sqlEngine=SPARK_SQL'
  headers = {
    'Authorization': f'Bearer {TOKEN}',
    'Content-Type': 'application/json'
  }

  query = 'SELECT geometry FROM leaf.pointlake.points TABLESAMPLE(0.1 PERCENT)'

  response = requests.post(endpoint, headers=headers, data=query)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```shell
  curl -X POST \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -H 'Content-Type: application/json' \
      -d 'SELECT geometry FROM leaf.pointlake.points TABLESAMPLE(0.1 PERCENT)' \
      'https://api.withleaf.io/services/pointlake/api/v2/query?sqlEngine=SPARK_SQL'
  ```

  </TabItem>
</Tabs>


---

## Query Examples

This section provides example queries for common use cases.

### States/Counties Queries

#### Record count for states_counties table

```sql
SELECT COUNT(*) FROM states_counties
```

**Response:**
```json
[
  {
    "count(1)": 3385
  }
]
```

#### States from all points (no boundary, no leafUserId)

```sql
SELECT 
  c.state_name,
  COUNT(*) AS point_count 
FROM points p 
JOIN states_counties c ON ST_Intersects(p.geometry, c.geometry) 
GROUP BY c.state_name 
ORDER BY point_count DESC, c.state_name 
LIMIT 10
```

**Response:**
```json
[
  {
    "state_name": "IL",
    "point_count": 398380
  },
  {
    "state_name": "KS",
    "point_count": 68544
  },
  {
    "state_name": "IA",
    "point_count": 7929
  }
]
```

#### Operations/crops across all points

```sql
SELECT
  year(p.timestamp) AS op_year,
  p.operationType,
  p.crop,
  COUNT(*) AS point_count
FROM points p
GROUP BY
  year(p.timestamp),
  p.operationType,
  p.crop
ORDER BY
  op_year,
  point_count DESC
LIMIT 10
```

**Response:**
```json
[
  {
    "op_year": 2017,
    "operationType": "applied",
    "crop": null,
    "point_count": 68544
  },
  {
    "op_year": 2018,
    "operationType": "applied",
    "crop": null,
    "point_count": 398380
  },
  {
    "op_year": 2025,
    "operationType": "applied",
    "crop": null,
    "point_count": 7929
  }
]
```

#### Point counts by state/county and year/crop

```sql
SELECT 
  c.state_name,
  c.state_fips,
  c.county_name,
  year(p.timestamp) AS op_year,
  p.operationType,
  p.crop,
  COUNT(*) AS point_count 
FROM points p 
JOIN states_counties c ON ST_Intersects(p.geometry, c.geometry) 
GROUP BY
  c.state_name,
  c.state_fips,
  c.county_name,
  year(p.timestamp),
  p.operationType,
  p.crop 
ORDER BY
  op_year,
  point_count DESC,
  c.state_name,
  c.county_name 
LIMIT 10
```

**Response:**
```json
[
  {
    "state_name": "KS",
    "state_fips": "20",
    "county_name": "Harvey",
    "op_year": 2017,
    "operationType": "applied",
    "crop": null,
    "point_count": 68544
  },
  {
    "state_name": "IL",
    "state_fips": "17",
    "county_name": "Ogle",
    "op_year": 2018,
    "operationType": "applied",
    "crop": null,
    "point_count": 389860
  }
]
```

#### Point counts by state/county with boundary filter

```sql
SELECT 
  c.state_name, 
  year(p.timestamp) AS op_year, 
  p.operationType, 
  p.crop, 
  COUNT(*) AS point_count, 
  MIN(p.timestamp) AS start_time, 
  MAX(p.timestamp) AS end_time 
FROM points p 
JOIN states_counties c ON ST_Intersects(p.geometry, c.geometry) 
WHERE p.leafUserId = '{LEAF_USER_ID}' 
  AND ST_Intersects(
    p.geometry, 
    ST_GeomFromText('POLYGON((-95.0432 42.7114, -95.0434 42.7115, -95.0436 42.7115, -95.0432 42.7114))')
  ) 
GROUP BY c.state_name, year(p.timestamp), p.operationType, p.crop 
ORDER BY op_year, start_time
```

---

### Soil-Based Queries (SSURGO)

#### Soil analysis with operations data

```sql
WITH aoi AS (
  SELECT ST_Envelope_Aggr(geometry) AS box
  FROM leaf.pointlake.points
  WHERE operationType IN ('planted', 'harvested')
),
soil_filtered AS (
  SELECT /*+ BROADCAST(aoi) */
    mukey AS map_unit_key,
    muaggatt_col_1 AS map_unit_name,
    county,
    muaggatt_col_16 AS drainage_class,
    muaggatt_col_8 AS farmland_class,
    muaggatt_col_13 AS water_storage,
    ST_GeomFromText(geometry_wkt) AS raw_geom
  FROM leaf.dev.ssurgo, aoi
  WHERE ST_Intersects(ST_GeomFromText(geometry_wkt), aoi.box)
),
spatial_metrics AS (
  SELECT
    s.map_unit_key,
    AVG(CASE WHEN p.operationType = 'planted' THEN p.seedRate END) AS avg_seed_rate,
    AVG(CASE WHEN p.operationType = 'harvested' THEN p.wetMassPerArea END) AS avg_yield_rate,
    array_agg(DISTINCT CASE WHEN p.operationType = 'harvested' THEN p.crop END) AS crop_list
  FROM leaf.pointlake.points p
  JOIN soil_filtered s ON ST_Intersects(s.raw_geom, p.geometry)
  WHERE p.operationType IN ('planted', 'harvested')
  GROUP BY s.map_unit_key
),
final_calculation AS (
  SELECT 
    s.*,
    m.avg_seed_rate,
    m.avg_yield_rate,
    m.crop_list,
    ST_Intersection(s.raw_geom, a.box) AS final_geom
  FROM soil_filtered s
  CROSS JOIN aoi a
  LEFT JOIN spatial_metrics m ON s.map_unit_key = m.map_unit_key
),
result_set AS (
  SELECT
    CAST(map_unit_key AS STRING) AS map_unit_id,
    COALESCE(CONCAT(map_unit_name, ' (', farmland_class, ')'), 'Unknown Soil') AS soil_label,
    county,
    CONCAT(
      'Drainage: ', COALESCE(drainage_class, 'N/A'), 
      ' | Seed: ', ROUND(COALESCE(avg_seed_rate, 0), 0), 
      ' | Yield: ', ROUND(COALESCE(avg_yield_rate, 0), 2), 
      ' | Water Storage Capacity: ', COALESCE(water_storage, 0), 
      ' | Crops: ', CAST(COALESCE(crop_list, array()) AS STRING)
    ) AS detailed_summary,
    ROUND(ST_Area(final_geom) * 247.105, 4) AS total_acres,
    ST_AsText(final_geom) AS geometry
  FROM final_calculation
)
SELECT * FROM result_set 
WHERE total_acres > 0.001
ORDER BY total_acres DESC
```

#### Simple SSURGO query with field boundary

```sql
SELECT 
  s.mukey AS map_unit_key,
  s.muaggatt_col_1 AS soil_name,
  s.county,
  s.muaggatt_col_16 AS drainage_class,
  ROUND(ST_Area(ST_Intersection(ST_GeomFromText(s.geometry_wkt), aoi.geom)) * 247.105, 2) AS acres,
  ST_AsText(ST_Intersection(ST_GeomFromText(s.geometry_wkt), aoi.geom)) AS geometry
FROM ssurgo s
CROSS JOIN (
  SELECT ST_GeomFromText('POLYGON((-89.534 41.401, -89.528 41.401, -89.528 41.405, -89.534 41.405, -89.534 41.401))') AS geom
) AS aoi
WHERE ST_Intersects(ST_GeomFromText(s.geometry_wkt), aoi.geom)
LIMIT 5
```

---

### Points-Based Queries

#### Seed rate analysis with bucketing

```sql
SELECT
  crop,
  geometry,
  seedRate,
  AVG(seedRate) OVER (PARTITION BY crop) AS avg_sr,
  STDDEV(seedRate) OVER (PARTITION BY crop) AS std_sr,
  NTILE(5) OVER (PARTITION BY crop ORDER BY seedRate) AS bucket
FROM leaf.pointlake.points
WHERE apiOwnerUsername = 'your_username'
  AND crop = 'corn' 
  AND operationType = 'planted' 
  AND timestamp BETWEEN '2025-04-28' AND '2025-04-29'
```

:::caution Performance Note
When querying individual points, always use `LIMIT` to prevent browser/client crashes with large datasets.
:::

---

### Hexagon Aggregation Queries (H3)

#### Wet Mass per Seed - Hexagon aggregation

```sql
SELECT
  bucket AS map_unit_key,
  CONCAT(crop, ' — wet mass/seed: ', ROUND(avg_wet_mass_per_seed_in_bucket, 0), ', ', 
         ROUND(min_wet_mass_per_seed_in_bucket, 0), ' to ', ROUND(max_wet_mass_per_seed_in_bucket, 0)) AS crop,
  bucket,
  ROUND(avg_wet_mass_per_seed_in_bucket, 0) AS average_wet_mass_per_seed,
  ROUND(avg_seed_rate_in_bucket, 0) AS average_seed_rate,
  ROUND(avg_wet_mass_per_area_in_bucket, 0) AS average_wet_mass_per_area,
  ROUND(avg_elevation_in_bucket, 1) AS average_elevation,
  cells_count,
  geometries_in_bucket AS geometry
FROM (
  SELECT
    crop,
    bucket,
    collect_set(cell) AS cells_in_bucket,
    ST_UnaryUnion(ST_Collect(ST_H3ToGeom(collect_set(cell)))) AS geometries_in_bucket,
    AVG(avg_wet_mass_per_seed_in_cell) AS avg_wet_mass_per_seed_in_bucket,
    MIN(avg_wet_mass_per_seed_in_cell) AS min_wet_mass_per_seed_in_bucket,
    MAX(avg_wet_mass_per_seed_in_cell) AS max_wet_mass_per_seed_in_bucket,
    AVG(avg_seed_rate_in_cell) AS avg_seed_rate_in_bucket,
    AVG(avg_wet_mass_per_area_in_cell) AS avg_wet_mass_per_area_in_bucket,
    AVG(avg_elevation_in_cell) AS avg_elevation_in_bucket,
    COUNT(*) AS cells_count
  FROM (
    SELECT
      *,
      NTILE(5) OVER (PARTITION BY crop ORDER BY avg_wet_mass_per_seed_in_cell) AS bucket		
    FROM (
      SELECT
        planted.crop,
        planted.cell,
        avg_seed_rate_in_cell,
        avg_elevation_in_cell,
        avg_wet_mass_per_area_in_cell,
        1000.0 * avg_wet_mass_per_area_in_cell / avg_seed_rate_in_cell AS avg_wet_mass_per_seed_in_cell
      FROM (
        SELECT
          crop,
          cell,
          AVG(seedRate) AS avg_seed_rate_in_cell,
          AVG(elevation) AS avg_elevation_in_cell
        FROM (
          SELECT
            crop,
            element_at(ST_H3CellIDs(geometry, 12, false), 1) AS cell,
            seedRate,
            elevation,
            AVG(seedRate) OVER (PARTITION BY crop) AS avg_seed_rate_in_field,
            STDDEV(seedRate) OVER (PARTITION BY crop) AS stddev_seed_rate_in_field
          FROM leaf.pointlake.points
          WHERE apiOwnerUsername = 'pointlake' 
            AND operationType = 'planted' 
            AND crop = 'corn' 
            AND timestamp BETWEEN '2025-04-28' AND '2025-04-29'
        )
        WHERE seedRate BETWEEN (avg_seed_rate_in_field - 3 * stddev_seed_rate_in_field) 
                          AND (avg_seed_rate_in_field + 3 * stddev_seed_rate_in_field)
        GROUP BY crop, cell
      ) planted
      LEFT JOIN (
        SELECT
          crop,
          element_at(ST_H3CellIDs(geometry, 12, false), 1) AS cell,
          AVG(wetMassPerArea) AS avg_wet_mass_per_area_in_cell
        FROM leaf.pointlake.points
        WHERE apiOwnerUsername = 'pointlake' 
          AND operationType = 'harvested' 
          AND crop = 'corn' 
          AND timestamp BETWEEN '2025-08-20' AND '2025-10-15'
        GROUP BY crop, cell
      ) harvested
      ON planted.crop = harvested.crop AND planted.cell = harvested.cell
    )
  ) bucketed_data
  GROUP BY crop, bucket
) planted
ORDER BY crop, bucket
```

#### Wet Mass per Area - Hexagon aggregation

```sql
SELECT
  bucket AS map_unit_key,
  CONCAT(crop, ' — wet mass/area: ', ROUND(avg_wet_mass_per_area_in_bucket, 0), ', ', 
         ROUND(min_wet_mass_per_area_in_bucket, 0), ' to ', ROUND(max_wet_mass_per_area_in_bucket, 0)) AS crop,
  bucket,
  ROUND(avg_wet_mass_per_area_in_bucket, 0) AS average_wet_mass_per_area,
  ROUND(avg_elevation_in_bucket, 1) AS average_elevation,
  cells_count,
  geometries_in_bucket AS geometry
FROM (
  SELECT
    crop,
    bucket,
    collect_set(cell) AS cells_in_bucket,
    ST_UnaryUnion(ST_Collect(ST_H3ToGeom(collect_set(cell)))) AS geometries_in_bucket,
    AVG(avg_wet_mass_per_area_in_cell) AS avg_wet_mass_per_area_in_bucket,
    MIN(avg_wet_mass_per_area_in_cell) AS min_wet_mass_per_area_in_bucket,
    MAX(avg_wet_mass_per_area_in_cell) AS max_wet_mass_per_area_in_bucket,
    AVG(avg_elevation_in_cell) AS avg_elevation_in_bucket,
    COUNT(*) AS cells_count
  FROM (
    SELECT
      *,
      NTILE(5) OVER (PARTITION BY crop ORDER BY avg_wet_mass_per_area_in_cell) AS bucket		
    FROM (
      SELECT
        crop,
        element_at(ST_H3CellIDs(geometry, 12, false), 1) AS cell,
        AVG(wetMassPerArea) AS avg_wet_mass_per_area_in_cell,
        AVG(elevation) AS avg_elevation_in_cell
      FROM leaf.pointlake.points
      WHERE apiOwnerUsername = 'pointlake' 
        AND operationType = 'harvested' 
        AND crop = 'corn' 
        AND timestamp BETWEEN '2025-08-20' AND '2025-10-15'
      GROUP BY crop, cell
    )
  ) bucketed_data
  GROUP BY crop, bucket
) planted
ORDER BY crop, bucket
```

#### Seed Rate vs Harvested - Hexagon analysis

```sql
SELECT
  bucket AS map_unit_key,
  CONCAT(crop, ' — ', ROUND(min_seed_rate_in_bucket, 0), ' to ', ROUND(max_seed_rate_in_bucket, 0)) AS crop,
  bucket,
  ROUND(avg_seed_rate_in_bucket, 0) AS average_seed_rate,
  ROUND(min_seed_rate_in_bucket, 0) AS minimum_seed_rate,
  ROUND(max_seed_rate_in_bucket, 0) AS maximum_seed_rate,
  (
    SELECT
      ROUND(AVG(avg_wet_mass_per_area_in_cell), 0) AS avg_wet_mass_per_area_in_bucket
    FROM (
      SELECT
        crop,
        element_at(ST_H3CellIDs(geometry, 12, false), 1) AS cell,
        AVG(wetMassPerArea) AS avg_wet_mass_per_area_in_cell
      FROM leaf.pointlake.points
      WHERE apiOwnerUsername = 'pointlake' 
        AND operationType = 'harvested' 
        AND crop = 'corn' 
        AND timestamp BETWEEN '2025-08-20' AND '2025-10-15'
      GROUP BY crop, cell
    ) harvested
    WHERE harvested.crop = planted.crop AND array_contains(cells_in_bucket, cell)
  ) AS average_wet_mass_per_area,
  cells_count,
  geometries_in_bucket AS geometry
FROM (
  SELECT
    crop,
    bucket,
    collect_set(cell) AS cells_in_bucket,
    ST_UnaryUnion(ST_Collect(ST_H3ToGeom(collect_set(cell)))) AS geometries_in_bucket,
    AVG(avg_seed_rate_in_cell) AS avg_seed_rate_in_bucket,
    MIN(avg_seed_rate_in_cell) AS min_seed_rate_in_bucket,
    MAX(avg_seed_rate_in_cell) AS max_seed_rate_in_bucket,
    COUNT(*) AS cells_count
  FROM (
    SELECT
      *,
      NTILE(5) OVER (PARTITION BY crop ORDER BY avg_seed_rate_in_cell) AS bucket		
    FROM (
      SELECT
        crop,
        cell,
        AVG(seedRate) AS avg_seed_rate_in_cell
      FROM (
        SELECT
          crop,
          element_at(ST_H3CellIDs(geometry, 12, false), 1) AS cell,
          seedRate,
          AVG(seedRate) OVER (PARTITION BY crop) AS avg_seed_rate,
          STDDEV(seedRate) OVER (PARTITION BY crop) AS stddev_seed_rate
        FROM leaf.pointlake.points
        WHERE apiOwnerUsername = 'pointlake' 
          AND operationType = 'planted' 
          AND crop = 'corn' 
          AND timestamp BETWEEN '2025-04-28' AND '2025-04-29'
      )
      WHERE seedRate BETWEEN (avg_seed_rate - 3 * stddev_seed_rate) 
                        AND (avg_seed_rate + 3 * stddev_seed_rate)
      GROUP BY crop, cell
    )
  ) bucketed_data
  GROUP BY crop, bucket
) planted
ORDER BY crop, bucket
```

---

### Harvest Analysis Queries

#### Harvest data with statistical filtering

```sql
WITH stats AS (
  SELECT AVG(wetMassPerArea) AS avg_sr, STDDEV(wetMassPerArea) AS std_sr 
  FROM leaf.pointlake.points 
  WHERE operationType = 'harvested'
),
processed_data AS (
  SELECT 
    p.geometry,
    p.seedRate,
    p.wetMass,
    NTILE(5) OVER (ORDER BY p.seedRate) AS bucket
  FROM leaf.pointlake.points p, stats
  WHERE p.operationType = 'harvested' 
    AND p.seedRate BETWEEN (stats.avg_sr - 3 * stats.std_sr) AND (stats.avg_sr + 3 * stats.std_sr)
)
SELECT 
  ST_AsText(geometry) AS geometry,
  bucket,
  seedRate,
  wetMass
FROM processed_data
ORDER BY bucket
```

---

## Spatial Functions Reference

Pointlake supports the following spatial functions:

| Function | Description |
|----------|-------------|
| `ST_Intersects(geom1, geom2)` | Returns true if geometries intersect |
| `ST_GeomFromText(wkt)` | Creates geometry from WKT string |
| `ST_AsText(geom)` | Converts geometry to WKT string |
| `ST_Area(geom)` | Returns area of geometry |
| `ST_Intersection(geom1, geom2)` | Returns intersection of two geometries |
| `ST_Envelope_Aggr(geom)` | Returns bounding box of aggregated geometries |
| `ST_H3CellIDs(geom, resolution, full)` | Returns H3 cell IDs for geometry |
| `ST_H3ToGeom(cells)` | Converts H3 cells to geometry |
| `ST_UnaryUnion(geom)` | Returns union of geometry collection |
| `ST_Collect(geoms)` | Collects geometries into collection |
