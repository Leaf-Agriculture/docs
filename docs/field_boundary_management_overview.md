---
title: Field Boundary Management Overview
description: Field Boundary Management - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://docs.withleaf.io/docs/field_boundary_management_endpoints#create-a-field

With Leaf, you can sync, export, create, and manage Field Boundaries from all major agriculture brands.

## Getting started
To help you get started, we’ve created a [quickstart Postman collection][1].

To make calls to Leaf's field API, you will first need to go through the previous documentation steps from Leaf registration/authentication to provider authentication. Once you’ve successfully connected a provider, you can manage the field boundary endpoints on the next page. 


## How field data is structured
<img alt="Field example" src={useBaseUrl('img/field_boundaries_001.png')} />

- Leaf uses a Grower/Farm/Field hierarchy to organize data.
- A grower (also known as Leaf User) is the data owner entity to which credentials are attached.
- Farm(s) can be grouped together under a Grower and Field(s) can be grouped under a Farm
- Each field is tied to a field ID and its field boundary is tied to a boundary ID, which is the central concept for organizing boundary data. There can only be one active boundary per field.
- Machine Files that Leaf merges into Operations are the results of operational tasks performed in a given Field.


## FAQs
Can I use the fields and boundaries from my app/platform instead of connecting it from a provider? 
- Yes, you can [manually create boundaries][2] from geoJSONs with a POST call for a Leaf User.
