---
title: Overview
---

For Leaf to be able to access, standardize, process and return files, you just
have to create a Leaf User and connect them to a data provider.

Connecting a Leaf User to a data provider means that you will be attaching the user
token to the Leaf User so that Leaf can access their data on a given provider.
To get said token, we will need to go through the data provider's authentication
flow, which varies by data provider.

To make things easy, we have created a section for the data providers
authentication flow. After the end of each of any of this sections, the goal
is to have the user's token, so you can attach to the Leaf User and Leaf can
return clean, aggregated, and standardized data in a simple JSON response.

The same Leaf User can be attached to as many providers as they have accounts in.

A simple use-case: typically, a Leaf User is a grower. So let's say your
application wants to use Leaf to access the grower data in a standardized way.
Your application, the grower and Leaf will go through the provider authentication
flow so the grower can grant rights to access their data.

This authentication flow has to be done only once, since Leaf will manage the
tokens and refresh them when needed.

<!-- Another use-case would be an agronomist that has access to more than one grower's -->

So, choose the provider's you want to connect your users to and let's see how
each these providers authentication flow is.

After that, you can create a Leaf User, attach the tokens and start querying for
standardized data in a simple JSON response.


## Integrate with John Deere

We made this very easy on one of our blog posts, you just need to follow Steps 3
and 4 and you are all set.

Check our blog post on [How to use Leaf’s API to retrieve Machinery Data from John Deere.][jd]
[jd]: https://medium.com/leaf-agriculture/how-to-use-leafs-api-to-retrieve-machinery-data-from-john-deere-fb1ba331d089


## Integrate with Climate Field View

We made this very easy on one of our blog posts, you just need to follow Steps 3
and 4 and you are all set.

Check our blog Post on [How to use Leaf’s API to retrieve Machinery Data from Climate Field View.][cfv]
[cfv]: https://medium.com/leaf-agriculture/how-to-use-leafs-api-to-retrieve-machinery-data-from-climate-fieldview-dda921f40291
