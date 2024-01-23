---
title: Planet Overview
description: Planet Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


<p align='justify'>

Leaf provides an integration with Planet, fetching PlanetScope images from a back-fill and forward-fill specified by 
the user. PlanetScope provides numerus categories of products from different satellite sensors 
called `itemTypes` and for each one, we have different `assetType`.

For now, we support `PSScene` with their respective assets `ortho_analytic_8b_sr` (13 images), `ortho_analytic_8b` (13 images), `ortho_visual` (2 images), `ortho_udm2` and `ortho_analytic_8b_xml`. 
For more information on those assets check the 
[documentation](https://developers.planet.com/docs/data/psscene/#available-asset-types).

:::tip Note
Planet will continue to publish imagery to the `PSOrthoTile` item types until June 20, 2023. This way, 
this option will remain available in Leaf until the same referenced date. 
For more information: [PSOrthoTile deprecation](https://developers.planet.com/docs/apis/data/psorthotile-deprecation/)
:::

Also, Leaf handles all the subscription process internally, in order to bring foward-filled images as area 
available from Planet.

See the [Crop Monitoring API Reference][crop_monitoring_endpoints] for more information.

</p>

[crop_monitoring_endpoints]: crop_monitoring_endpoints.md

### Available asset types

#### ortho_analytic_8b_sr

PlanetScope atmospherically corrected surface reflectance product.

| File   | Band name     |
|:-------|:--------------|
| Band 1 | Coastal Blue  |
| Band 2 | Blue          |
| Band 3 | Green I       |
| Band 4 | Green         |
| Band 5 | Yellow        |
| Band 6 | Red           |
| Band 7 | Red Edge      |
| Band 8 | Near-infrared |


#### ortho_analytic_8b

<p align='justify'>

Radiometrically-calibrated analytic image stored as 16-bit scaled radiance.

</p>

| File   | Band name     |
|:-------|:--------------|
| Band 1 | Coastal Blue  |
| Band 2 | Blue          |
| Band 3 | Green I       |
| Band 4 | Green         |
| Band 5 | Yellow        |
| Band 6 | Red           |
| Band 7 | Red Edge      |
| Band 8 | Near-infrared |


#### ortho_analytic_8b_xml

Radiometrically-calibrated analytic image metadata.

#### ortho_visual

Visual image with color-correction.

| File   | Band name     |
|:-------|:--------------|
| Band 1 | Red           |
| Band 2 | Blue          |
| Band 3 | Green         |


#### ortho_udm2

Usable data mask (Cloud 2.0).

| File   | Description     |
|:-------|:----------------|
| Band 1 | Clear map       |
| Band 2 | Snow map        |
| Band 3 | Shadow map      |
| Band 4 | Light haze map  |
| Band 5 | Heavy haze map  |
| Band 6 | Cloud map       |
| Band 7 | Confidence map  |
| Band 8 | Unusable pixels |


## PSScene

More info at [Planet documentation][planet_psscene].

[planet_psscene]: https://developers.planet.com/docs/data/psscene/