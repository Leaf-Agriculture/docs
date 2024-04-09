---
title: Irrigation Overview
description: Irrigation - Overview
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

Irrigation information from different providers is available in the Leaf API. Data may include field boundaries, as-applied irrigation and equipment like pivots and sensors.

## Irrigation data

The irrigation data represents the total irrigated area by existing irrigation equipment. The information is summarized by day and split by depth, which represents the amount of water for each multipolygon geometry.

## Irrigated field

The irrigated field shows the as-applied irrigation event within field boundaries. It shows the area covered by the irrigation event and the different amounts of water in each zone or angle, which are represented by multipolygon geometries. The irrigated geometries are clipped to the field boundary geometry, displaying the information for the given field.
