---
title: Irrigation Overview
description: Irrigation - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

Irrigation information from different providers is available in the Leaf API. Data may include the field boundaries, as-applied irrigation and equipment like pivot and sensors.

## Irrigation data

It will provide a representation of all irrigated area by existent irrigation equipment systems. The information is summarized by day and split by depth, which represent the amount of water for each multipolygon geometry from the report.


## Irrigated field

It relates the field boundaries and the as-applied irrigation performed, showing the area covered by the irrigation and the different amount of water in each zones or angles, represent by multipolygon geometries. The geometries are clipped by the field boundary geometry displaying the information restricted by the given field.