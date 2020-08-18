---
title: Overview
---


Leaf's Field Boundaries API helps you import, export, create, and manage with Field Boundaries from all major agriculture brands.
With this API you can synchronize fields across many platforms (e.g. John Deere and Climate FieldView), query different types of data from multiple providers by a boundary (imagery, machine operations, weather, etc.), and manage inconsistent boundaries from multiple providers. 

We provide a [quickstart Postman
collection](https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection)
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
query for them and their data.

**All set!**

Leaf automatically detects existing fields in each company's platform. This API
works together with Leaf's Operations Data API. Operations performed in the
fields will automatically be bound to the fields you create with this Field Boundaries API.

Leaf uses a Grower/Farm/Field hierarchy to store data. Below please find a breakdown of these concepts and how they relate to one another:

- Fields are the central concept of this API. Every Field has boundaries which
  is the geometry that defines its borders. 
- Most Fields are part of a Farm and every Farm can have one or more Fields.
- Farms can be grouped together under a Grower.
- A Grower (also known as Leaf User) is the data owner entity to which credentials are attached. 
- A Season makes a relation among a Field, a Crop and a start and end dates.
- Files or Operations are the results of operations in a given Field.
