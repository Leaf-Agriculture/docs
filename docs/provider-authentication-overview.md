---
title: Provider Authentication Overview
description: Provider Authentication - Overview
sidebar_label: Overview
---
<!-- the following links are referenced throughout this document -->
[1]: https://docs.withleaf.io/docs/Link_provider_connection
[2]: https://withleaf.io/en/tutorials/john-deere-authentication-with-leaf/
[3]: https://withleaf.io/en/tutorials/climate-fieldview-authentication-with-leaf/
[4]: https://withleaf.io/en/tutorials/agleader-authentication-with-leaf/
[5]: https://withleaf.io/en/tutorials/cnhi-authentication-with-leaf/
[6]: https://withleaf.io/en/tutorials/raven-slingshot-integration-with-leaf/
[7]: https://withleaf.io/en/tutorials/stara-authentication-with-leaf/
[8]: https://withleaf.io/en/tutorials/trimble-authentication-with-leaf/
[9]: https://withleaf.io/en/tutorials/sentera-integration-with-leaf/



[10]: https://docs.withleaf.io/docs/credentials_cnhi
[11]: https://docs.withleaf.io/docs/credentials_stara
[12]: https://docs.withleaf.io/docs/credentials_raven
[13]: https://docs.withleaf.io/docs/credentials_agleader
[14]: https://docs.withleaf.io/docs/credentials_raven_slingshot
[15]: https://docs.withleaf.io/docs/credentials_sentera
[16]: https://docs.withleaf.io/docs/credentials_agvance
[17]: https://docs.withleaf.io/docs/credentials_john_deere/
[18]: https://docs.withleaf.io/docs/credentials_cfv
[19]: https://docs.withleaf.io/docs/credentials_trimble
[20]: https://docs.withleaf.io/docs/integrations_endpoints
[21]: https://docs.withleaf.io/docs/credentials_lindsay
[22]: https://docs.withleaf.io/docs/credentials_valley

[23]: https://docs.withleaf.io/docs/field_boundary_management_endpoints#get-all-fields
[24]: https://docs.withleaf.io/docs/field_boundary_management_endpoints#upload-a-field-to-provider
[25]: https://docs.withleaf.io/docs/machine_file_conversion_endpoints#get-all-files
[26]: https://docs.withleaf.io/docs/beta_prescriptions_endpoints#list-prescriptions-from-john-deere
[27]: https://docs.withleaf.io/docs/beta_prescriptions_endpoints#upload-prescription-to-john-deere
[28]: https://docs.withleaf.io/docs/beta_assets_endpoints#get-all-machines
[29]: https://docs.withleaf.io/docs/beta_assets_endpoints#get-all-implements
[30]: https://docs.withleaf.io/docs/beta_assets_endpoints#get-all-operators
[31]: https://docs.withleaf.io/docs/beta_input_endpoints#get-all-products
[32]: https://docs.withleaf.io/docs/beta_input_endpoints#get-all-varieties


## About 
By the end of this section, the objective is to successfully authenticate your application and link provider credentials to Leaf, enabling you to start integrating standardized data from major agricultural providers. Ultimately you'll want your customers to be able to integrate their (user-permissioned) data from their providers into your application. So in order to set this up at the user level, you'll need to attach the user token from the provider to the Leaf User. 

TIP: Once you get to the stage of building the user authentication UI for your customers integrating their providers, we recommend using our pre-built [Leaf Link widget][1]. 

## Provider authentication process with Leaf
Each data provider's authentication flow is slightly different. Please refer to the tutorials below for the steps:
- [AgLeader authentication with Leaf][4]
- [Climate Fieldview authentication with Leaf][3]
- [CNHi authentication with Leaf][5]
- [John Deere authentication with Leaf][2]
- [Raven Slingshot authentication with Leaf][6]
- [Stara authentication with Leaf][7]
- [Trimble authentication with Leaf][8]
- [Integrating Sentera layers and imagery][9]
- For more crop monitoring or weather providers, head to the relevant documentation sections. If you still don't see your provider, contact us at help@withleaf.io for more information. 

This authentication flow has to be done only once in most cases. Leaf will manage the tokens and refresh them when needed.

### Provider environments 
Some providers utilize distinct environments, which Leaf categorizes as **STAGE** (also known as Sandbox or Test) and **PRODUCTION**. It's crucial to align the `clientEnvironment` setting in your Leaf credentials request with your application's status and the type of provider accounts you intend to use:

*   **STAGE:** Use this environment for development and testing. It typically requires corresponding test accounts from the provider. Real customer accounts usually won't work in this environment. Leaf often defaults to this environment.
*   **PRODUCTION:** Use this environment only when your application has received production access approval from the provider. This environment works with real customer accounts, but test/sandbox accounts often won't function here.

Ensure your application has the necessary permissions from the provider for the environment you select (especially for Production). Mismatched environments or permissions will likely result in non-functional credentials. Refer to specific provider documentation (like John Deere's or CNHI's) for details on their environment requirements and approval processes.


### Provider scopes
Some providers like John Deere and Climate FieldView keep their resources under specific permissions, which means the user needs to grant access during the authentication process mentioned before. The allowed permissions are grouped in Leaf products as described below:

| Scope              | Description                                                                                                                    |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------|
| FIELDS:READ        | Requests permission to access the [field boundaries][23] entities from the provider                                            |
| FIELDS:WRITE       | Requests permission to [create field boundary][24] entities in the provider                                                    |
| OPERATIONS:READ    | Requests permission to fetch and download [operation data and files][25] from the provider                                     |
| PRESCRIPTION:READ  | Requests permission to fetch and download [prescription data][26] and files from the provider                                  |
| PRESCRIPTION:WRITE | Requests permission to [upload prescription files][27] to the provider                                                         |
| ASSETS:READ        | Requests permission to get asset information like [machines][28], [implements][29], and [operators][30] from the provider      |
| PRODUCTS:READ      | Requests permission to get [products][31] and [varieties][32] information from the provider, like fertilizers, and chemicals   |
| ZONES:READ         | Requests permission to get zone information from the provider                                                                  |

The scopes can be used in the Leaf authentication URL helper or in the application key information from Leaf Link.

## Provider credentials endpoints

For more details about provider credentials endpoints, see below for:

- [AgLeader][13]
- [AgVance][16]
- [Climate Fielview][18]
- [CNHi][10]
- [John Deere][17]
- [Lindsay][21]
- [Raven][12]
- [Raven Slingshot][14]
- [Sentera][15]
- [Stara][11]
- [Trimble][19]
- [Valley][22]

Also, we recommend use our Providers Integrations Resources endpoint to debrief the ingested resources from the authenticated account. 
With the Providers Integrations Resources, you can access all the relevant information between the authentication and the processing of your 
resources ingested into Leaf's API. The resource summary gives you more visibility on what and how many resources are being processed. 

- [Integrations Resources][20]

Need more guidance? Contact us at `help@withleaf.io`.