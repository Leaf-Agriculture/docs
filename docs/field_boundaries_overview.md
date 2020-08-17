---
title: Overview
---

## Overview

Leaf's Field Boundaries API help you to operate with Field related data from all major machine brands.
With this API you can synchronize fields stored on our back-end with existing fields in many platforms
like John Deere and Climate FieldView. Besides, we provide easy endpoints to deal with the geometries
of field boundaries.

We provide a [quickstart Postman
collection](https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection)
so you can get started.

To make calls to Leaf's API, you will need a Leaf account. If you don't have
one yet, please create your Leaf account and get your token.

You can integrate with many different companies, and you only have to do it once
for each user. To connect, you just choose the company you wish to connect to
and follow these 3 steps:

1. Get the authentication URL of company you want to connect to
1. Get yours and your user's tokens
1. Add credentials to Leaf

Now you can opt to connect to more companies or Create a Leaf User and attach
these credentials, so that Leaf can represent your user internally and you can
query specifically for them and their data.

**All set!**

Leaf automatically detects existing fields in brand's platforms. Also, this API
is well integrated with Leaf's Operations Data API. Operations performed in the
fields will automatically be bind to the fields you create with this API

It is important to know some concepts before using this API. It deals with data
from Season, Grower, Farm, Field and File (operations).

- Fields is the central concept in this API. Every Field has boundaries which
  is the geometry that defines its borders.
- Most Fields are part of a Farm and every Farm can have one or more Fields.
- Farms can be grouped together into Growers.
- A Season makes a relation among a Field, a Crop and a start and end dates.
- Files or Operations are the results of operations in a given Field.

