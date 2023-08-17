---
title: Provider Authentication Overview
description: Provider Authentication - Overview
sidebar_label: Overview
---
<!-- the following links are referenced throughout this document -->
[1]: https://docs.withleaf.io/docs/Link_provider_connection
[2]: https://withleaf.io/en/whats-new/john-deere-authentication-with-leaf/
[3]: https://withleaf.io/en/whats-new/climate-fieldview-authentication-with-leaf/
[4]: https://withleaf.io/en/whats-new/agleader-authentication-with-leaf/
[5]: https://withleaf.io/en/whats-new/cnhi-authentication-with-leaf/
[6]: https://withleaf.io/en/whats-new/raven-slingshot-integration-with-leaf/
[7]: https://withleaf.io/en/whats-new/stara-authentication-with-leaf/
[8]: https://withleaf.io/en/whats-new/trimble-authentication-with-leaf/
[9]: https://withleaf.io/en/whats-new/sentera-integration-with-leaf/



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

## About 
By the end of this section, the objective is to successfully authenticate your application and link provider credentials to Leaf, enabling you to start integrating standardized data from major agricultural providers. Ultimately you’ll want your customers to be able to integrate their (user-permissioned) data from their providers into your application. So in order to set this up at the user level, you’ll need to attach the user token from the provider to the Leaf User. 

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

## Provider credentials endpoints
For more details about provider credentials endpoints, see below for:
- [AgLeader][13]
- [AgVance][16]
- [Climate Fielview][18]
- [CNHi][10]
- [John Deere][17]
- [Raven][12]
- [Raven Slingshot][14]
- [Sentera][15]
- [Stara][11]
- [Trimble][19]

Also, we recommend use our Providers Integrations Resources endpoint to debrief the ingested resources from the authenticated account. 
- [Integrations Resources][20]

Need more guidance? Contact us at help@withleaf.io.