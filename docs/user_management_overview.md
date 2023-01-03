---
title: Leaf User Overview
description: Leaf User - Overview
sidebar_label: Overview
---


import useBaseUrl from '@docusaurus/useBaseUrl';


For Leaf to be able to access, standardize, process and return files, you just
have to create a Leaf User and connect them to a data provider.

Connecting a Leaf User to a data provider means that you will be attaching the user
token to the Leaf User so that Leaf can access their data on a given provider.
To get said token, we will need to go through the data provider's authentication
flow, which varies by data provider.

To make things easy, we have created a section for the data providers
authentication flow. After the end this section, the goal
is to have the user's token, so you can attach to the Leaf User and Leaf can
return clean, aggregated, and standardized data in a simple JSON response.

The same Leaf User can be attached to as many providers as they have accounts in.

A simple use-case: typically, a Leaf User is a grower. So let's say your
application wants to use Leaf to access the grower data in a standardized way.
Your application, the grower and Leaf will go through the provider authentication
flow so the grower can grant rights to access their data.

We can emphasize right away that the Leaf User is more than an aggregator of credentials
for data providers, including multiple abstractions of how it can be interpreted within a 
hierarchy in an agricultural management system, in addition to the example cited by a Grower 
can do a parallel as shown in the diagrams below. To summarize your Leaf Users will be the entity that will manage 
all your Farm Data, where it's important to understand how to manage and use it to filter the endpoints response
by Leaf User and its providers.

<img alt="Leaf User ERD" src={useBaseUrl('img/leaf_user_diagram.png')} />

This authentication flow has to be done only once, since Leaf will manage the
tokens and refresh them when needed.

<!-- Another use-case would be an agronomist that has access to more than one grower's -->

So, choose the provider's you want to connect your users to and let's see how
each these providers authentication flow is.

After that, you can create a Leaf User, attach the tokens and start querying for
standardized data in a simple JSON response for each one of our services.


## Integrate with John Deere

We made this very easy on one of our blog posts.

Check our blog post on [John Deere authentication with Leaf][jd]
[jd]: https://withleaf.io/en/blog/john-deere-authentication-with-leaf


## Integrate with Climate Field View

We made this very easy on one of our blog posts.

Check our blog Post on [Climate Field View authentication with Leaf][cfv]
[cfv]: https://withleaf.io/en/blog/climate-fieldview-authentication-with-leaf

## Integrate with AgLeader 

We made this very easy on one of our blog posts.

Check our blog Post on [AgLeader Authentication with Leaf][agleader]
[agleader]: https://withleaf.io/en/blog/agleader-authentication-with-leaf

## Integrate with CNHi

We made this very easy on one of our blog posts.

Check our blog Post on [CNHi authentication with Leaf][cnhi]
[cnhi]: https://withleaf.io/en/blog/cnhi-authentication-with-leaf
