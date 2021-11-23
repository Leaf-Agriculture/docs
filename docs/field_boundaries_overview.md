---
title: Overview
---


With Leaf, you can import, export, create, and manage Field Boundaries from all
major agriculture brands.

We provide a [quickstart Postman
collection](https://github.com/Leaf-Agriculture/Leaf-API-Postman-Collection)
to help you get started.

To make calls to Leaf's API, you will need a Leaf account. If you don't have
one yet, please create your Leaf account and get your token.

You can integrate with many different companies, and you only have to do it once
per user. To connect, you just choose the company you wish to connect to
and follow these 3 steps:

1. Get the authentication URL of company you want to connect.
1. Get your token and your user's token.
1. Add credentials to Leaf.

Now you can opt to connect more companies or Create a Leaf User and attach
these credentials so Leaf can represent your user internally and allow you to
query for them and their permissioned-data.

**All set!**

Leaf automatically detects existing fields in each company's platform. This
works together with Leaf's Operations Data. Operations performed in the
fields will automatically be bound to the fields you create with Field Boundaries.

Leaf uses a Grower/Farm/Field hierarchy to store data. Below please find a
breakdown of these concepts and how they relate to one another:

- Fields are the central concept of this section. Every Field may have boundaries, which
  are the geometries that defines its borders. A Field can have only one active boundary, that defines its current border.
- Most Fields are part of a Farm and every Farm can have one or more Fields.
- Farms can be grouped together under a Grower.
- A grower (also known as Leaf User) is the data owner entity to which credentials are attached.
- A Season makes a relation among a Field, a Crop and a start and end dates.
- Files or Operations are the results of operations in a given Field.
