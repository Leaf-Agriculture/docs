---
title: Overview
---

Leaf's system can be customized to present different behaviours across services. This is done using Configurations.

All Api Owners start with a default configuration set. These configurations can be changed, but they can not be deleted or set to `null`.

Leaf Users do not start with Configuration, but they inherit the configurations from the Api Owner. A custom configuration can be set for a Leaf User. Configurations set for a Leaf User won't be changed if the Api Owner's configuration changes. On the other hand, configurations not set for the Leaf User will reflect changes from the Api Owner's configurations. Leaf User's Configurations can be deleted or have values set to `null`, in which case the values are inherited from the Api Owner.

Currently, available configurations are:

- `operationsSummaryCreation` - If set to `true`, Leaf will generate a summary of each operation when processing them, to be attached to the related fields. If set to `false`, Leaf won't create summaries when processing operations. The default value is `true`.
- `operationsImageCreation` - If set to `true`, Leaf will generate images of operations when processing them. If set to `false`, Leaf won't create the images. The default value is `true`.
- `fieldsAutoSync` - If set to `true`, Leaf will automatically synchronize provider's fields. If set to `false`, synchronizations must be manually required via endpoint. The default value is `true`.
