---
title: Overview
description: Files - Overview
---

## Overview

Leaf's Operation Data API returns aggregated, cleaned, and standardized data
from all major machine data brands in a simple JSON response. This tutorial will
walk through how to create a Leaf user, securely authenticate with their chosen
platforms, and receive auto-updating data from all of them with a single request.

We also provide a [quickstart][quickstart] Postman collection so you can follow
along easily.

To make calls to Leaf's API, you will need a Leaf account. If you don't have one
yet, please create your Leaf account and get your token.

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

Leaf automatically detects and starts processing new files. You can access in
"Get Operation Files".

### Roadmap
Today, you can to connect to these companies:

- John Deere ([Medium][johndeere])
- Climate FieldView ([Medium][climate])
- CNHi
- Trimble

Coming in the third quarter of 2020:

- Raven
- AGCO

Coming in the fourth quarter of 2020:

- AgLeader
- Stara

### John Deere
This section will show you how you can integrate Leaf's API with you John Deere
account and start using our operations service. Grab our [quickstart][quickstart]
Postman collection and follow along!

#### 1. Get John Deere auth URL

In Step 1 we will be generating tokens from John Deere. The goal In step 2 is we
will get our John Deere `token_id` and `token_secret`.

##### Token Verifier

In step 1 we will get a temporary "token verifier" from John Deere that confirms
an user’s authentication of your application to access their John Deere data and
generate credentials. We get that verifier by going through their authentication
flow ([OAuth2][oauth2]). Before generating the authentication URL, please:

- Update current value of `jd_client_key` to your app's client key on John Deere
- Update current value of `jd_client_secret` to your app's client secret on John
Deere
- Update current value of `jd_callback_url` to your app's callback_url on John
Deere

Then, to generate the authentication URL your application will send to your user
so they can authorize access to their account files you can use the included
step 2 in the Postman Collection. Change `client_key` and `client_ secret`
variables to yours received from John Deere when you created an app on your
developer account with them and `redirect_uri` to a uri the "token verifier"
will be sent after the user authorizes your application. Hit _Send_.

Redirect your user to the url included in the response.

They will authenticate and be redirected to the `redirect_url`.

Copy the entire url you were redirected to. It looks like:

```
https://withleaf.io/?oauth_token=TOKEN&oauth_verifier=CODE
```

Paste it in the environment variable `jd_response_url`.

#### 2. Get John Deere Tokens

After updating the `jd_response_url` in Postman you can submit your credentials
and receive your tokens.

Hit _Send_

`token_id` and `token_secret_key` will be automatically transferred to
`jd_token_id` and `jd_token_secret` environment variables and will be used in
the next step.

#### 3. Add John Deere credentials

Now we can create a Developer-User pair credentials ID that will allow you to
access your user’s John Deere data. We first add the John Deere credentials to
Leaf API.

Hit _Send_

All the info needed has already been filled automatically in Step 2.

An `id` for the credentials you just created will be returned. This `id` will
be automatically transferred to the value of `jd_credentials_id` to be used in
the next step.

### Climate FieldView
Grab our [quickstart][quickstart] Postman collection and follow along!

#### 1. Get Climate FieldView auth URL

We will be generating a url to redirect your user to authenticate with Climate.

Update environment variables `cfv_client_id` and `cfv_client_secret` to your
Climate FieldView developer account credentials.

Update environment variable `cfv_redirect_url` to your application's backend

Redirect your user to the script's output url.

They will authenticate and be redirected to the `redirect_uri`.

A code will be sent to that `cfv_redirect_url`. We will need this code Step 2.

Copy the code value.

note: this code expires after 1 minute.

Paste code value to environment variable `cfv_code`

#### 2. Get Climate FieldView tokens

Hit "Send"

A lot of information will be returned. The important ones are `access_token`
and `refresh_token`. These will be automatically transferred to
`cfv_access_token` and `cfv_refresh_token` environment variables and will be
used in the next step.

#### 3. Add Climate FieldView credentials

Now we can create a Developer-User pair credentials ID that will allow you to
access your user’s Climate data. We first add the Climate credentials to Leaf
API, to do that: Hit "Send"

An `id` for the credentials you just created will be returned. This `id` will
be automatically transferred to the value of `cfv_credentials_id` to be used in
the next step.

### Leaf User

#### Create Leaf User

Now we have to attach credentials to a Leaf User. To do so, we can create a
Leaf user and attach our John Deere and/or Climate FieldView credentials via
the credentials id. We can also attach credentials from other companies to this
same user to query all available data by Grower/Farm/Field regardless of brand.

Update (optional) fields "address", "email", "name" and "phone" with your
user's information.

We have automatically included our `jd_credentials_id` to this call and
attached it to this user.

Hit "Send"

Along with other information returned, there is an "id". This "id" is the
`leaf_user_id` that will be used in the next (final) Step to query and access
files.

#### Update Leaf User

To update a Leaf User, let's say to add another provider credentials or change
the user's address, we can use this PUT request. Since this method overwrites,
remember to send all the user's information along with the information you want
to add or update. For example, if you want to add John Deere credentials to a
user that already has ClimateFieldView credentials, remember to specify both
credentials ids.

#### Get specific Leaf User

Get specific Leaf User With this endpoint you can query all information on a
specific Leaf User, such as their address, email, credentials, etc. To do so,
update the value of the environment variable `leaf_user_id` to the Leaf User id
you want to query.

#### Gel all Leaf Users

Get all Leaf Users With this endpoint you can query all information on all your
Leaf Users, such as their address, email, credentials, etc. Just hit 'send'.

### Query Operations by Field
To query all operations that happened in a specific field (step 2), we first
need to create that field (step 1). Then, Leaf will automatically detect
operations of that field based on the operations' and on the field's
coordinates. This process usually takes about 30 minutes.

#### 1. Create Field

Here we need to specify a leafUserId (that will be the Leaf User owner of that
field), a externalId (that will be the name we give to the field) and the
geojson geometry of the field (location). After creating the field we can query
it (step 2)

#### 2. Get operations' ids by Field

To query all operations that happened in a specific field, just update the
environment variable `field_external_id` to the field id you want to query
files.

### Merge Operation Files

#### 1. Merge files

Merging files with Leaf is a very simple process. You just have to list, in the
request json body, the ids of the files you want to merge. Make sure the
operations are of the same type (`APPLIED` or `HARVESTED` or `PLANTED`), so the
results are consistent.

After that, just hit "send" and an id for that merged file will be returned.
You can query that file as any other. It will be listed when you query for all
files and can also be queried specifically by its id

#### 2. Query & access specific file

You can query a merged file as any other. It will be listed when you query for
all files and can also be queried specifically by its id. So this request is
the same as seen on "Get Operation Files". You just have to update the
environment variable "id" to the id of the merged file.

Keep in mind that merging files is processing-heavy and may take about 20
minutes to finish.


[quickstart]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[johndeere]: https://medium.com/leaf-agriculture/how-to-use-leafs-api-to-retrieve-machinery-data-from-john-deere-fb1ba331d089
[climate]: https://medium.com/leaf-agriculture/how-to-use-leafs-api-to-retrieve-machinery-data-from-climate-fieldview-dda921f40291
[oauth2]: https://www.oauth.com/
