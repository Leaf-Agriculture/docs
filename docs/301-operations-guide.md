---
title: Operations
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
https://leafagriculture.com.br/?oauth_token=TOKEN&oauth_verifier=CODE
```

Paste it in the environment variable `jd_response_url`.

[quickstart]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[johndeere]: https://medium.com/leaf-agriculture/how-to-use-leafs-api-to-retrieve-machinery-data-from-john-deere-fb1ba331d089
[climate]: https://medium.com/leaf-agriculture/how-to-use-leafs-api-to-retrieve-machinery-data-from-climate-fieldview-dda921f40291
[oauth2]: https://www.oauth.com/
