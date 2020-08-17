---
title: User Management
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About
All HTTP methods should be prepended by this service's endpoint:

```
https://a.agrigate.io/services/usermanagement/api
```

See below the REST resources and their endpoints available in this service.

#### Leaf Users Resources

Form of a Leaf user:

```json
{
  "id": "UUID",
  "apiOwnerUsername": "str",
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str",
  "somarCredentials":  {"Object"},
  "trimbleCredentials":  {"Object"},
  "cnhiCredentials":  {"Object"},
  "johnDeereCredentials":  {"Object"},
  "ravenCredentials":  {"Object"},
  "climatempoCredentials":  {"Object"},
  "climateFieldViewCredentials": {"Object"}
}
```

Endpoints:

```
GET    /users/{id}
GET    /users/
```

#### John Deere Credentials

Form of a John Deere Credentials:

```
GET    /credentials/{id}
GET    /credentials/
```

#### Climate FieldView Credentials

Form of a John Deere Credentials:

This service has the following enpoints.

```
GET    /users/{id}
GET    /users/
```

Trimble Credentials

This service has the following enpoints.

```
GET    /users/{id}
GET    /users/
```

CNHI Credentials 

This service has the following enpoints.


```
GET    /users/{id}
GET    /users/
```


## Endpoints

### `GET /users/{id}`
Get a Leaf User.

Gets a Leaf User based on your "id_token" and return a JSON response with your id and other atributes.

```json
{
    "id": "UUID",
    "apiOwnerUsername": "str",
    "name": "str",
    "email": "help@withleaf.io",
    "phone": "str",
    "address": "str",
    "somarCredentials":  {"Object"},
    "trimbleCredentials":  {"Object"},
    "cnhiCredentials":  {"Object"},
    "johnDeereCredentials":  {"Object"},
    "ravenCredentials":  {"Object"},
    "climatempoCredentials":  {"Object"},
    "climateFieldViewCredentials": " {"Object"}
}
```


<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/users/{{leaf-user-id}}'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://{{url}}/services/usermanagement/api/users/{{leaf-user-id}}'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://{{url}}/services/usermanagement/api/users/{{leaf-user-id}}'
  ```

  </TabItem>
</Tabs>


### `GET /users`
Get all Leaf User.

Gets all Leaf Users and return a JSON list response with your id and other atributes of all the users.


```json
[{
    "id": "UUID",
    "apiOwnerUsername": "str",
    "name": "str",
    "email": "help@withleaf.io",
    "phone": "str",
    "address": "str",
    "somarCredentials":  {"Object"},
    "trimbleCredentials":  {"Object"},
    "cnhiCredentials":  {"Object"},
    "johnDeereCredentials":  {"Object"},
    "ravenCredentials":  {"Object"},
    "climatempoCredentials":  {"Object"},
    "climateFieldViewCredentials": " {"Object"}
}]

```

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/users/'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  axios.get(endpoint, { headers })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://{{url}}/services/usermanagement/api/users/'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  response = requests.get(endpoint, headers=headers)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://{{url}}/services/usermanagement/api/users/'
  ```

  </TabItem>
</Tabs>


### `POST users/`
Creates a Leaf User.

#### Request body

```json
{
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str",
}
```

Besides the four properties of the example above, if you already have created
credentials for some provider like John Deere, you can add an entry like the
following, specifying the id of the credentials object previously created, so
it will be bind to the Leaf User being created.

```json
  "johnDeereCredentials": {
    "id": "UUID"
  }
```

#### Response
A Leaf User with the id assigned to it.

```json
{
  "id": "UUID",
  "name": "str",
  "email": "help@withleaf.io",
  "phone": "str",
  "address": "str",
}
```


<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  const axios = require('axios')
  const TOKEN = 'YOUR_TOKEN'

  const endpoint = 'https://{{url}}/services/usermanagement/api/users'
  const headers = { 'Authorization': `Bearer ${TOKEN}` }

  const data = {
    id: "UUID",
    name: "str",
    email: "help@withleaf.io",
    phone: "str",
    address: "str"
  }

  axios.post(endpoint, { headers, data })
      .then(res => console.log(res.data))
      .catch(console.error)
  ```

  </TabItem>
  <TabItem value="py">

  ```py
  import requests

  TOKEN = 'YOUR_TOKEN'

  endpoint = 'https://{{url}}/services/usermanagement/api/users/'
  headers = {'Authorization': f'Bearer {TOKEN}'}

  data = {
    'name': 'str",
    'email': 'help@withleaf.io',
    'phone': 'str',
    'address': 'str',
  }

  response = requests.get(endpoint, headers=headers, json=data)
  print(response.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      -d '{ "name": "str", "email": "help@withleaf.io", "phone": "str", "address": "str"}'
      'https://{{url}}/services/usermanagement/api/users'
  ```

  </TabItem>
</Tabs>


### `GET   john-deere-credentials/{id}`

To add your user's John Deere credentials, you will first need to have your clientKey and clientSecret from John Deere.

If you don't have these yet, please register as a John Deere developer.. After registering and confirming your email, click on your profile image, then on "Applications" and you will be taken to a new page. On this new page, click "Add Application". After that, you can see your "App ID" and "Shared Secret" on your app's details. These are what we are referring here as "clientKey" and "clientSecret" respectively.

**Get Your key and secret**

To get your user's tokenId, tokenSecretKey and organization, you have to get your user's permission to access the service.

To do so, we will generate an authentication link for them. For that, send a
POST to https://gknk1zjl3b.execute-api.us-west-2.amazonaws.com/api/get_url

containing a json like this:
{"client_key": "YOUR_APP'S", "client_secret": "YOUR_APP'S"}

You will receive a json containing an url like this:
{"authorization_url": "https://my.deere.com/consentToUseOfData?oauth_token=f2cf"}

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  var request = require('request');
  
  var headers = {
      'Content-type': 'application/json'
  };
  
  var dataString = '{
      "client_key": "YOUR_APPS",
      "client_secret": "YOUR_APPS"
  }';
  
  var options = {
      url: 'https://gknk1zjl3b.execute-api.us-west-2.amazonaws.com/api/get_url',
      method: 'POST',
      headers: headers,
      body: dataString
  };
  
  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }
  }
  
  request(options, callback);
  returns json like this
  
  {"authorization_url": "https://my.deere.com/consentToUseOfData?oauth_token=f2cf"}
  ```

  </TabItem>
  <TabItem value="py">

  ```py
    import requests
     
     url = 'https://gknk1zjl3b.execute-api.us-west-2.amazonaws.com/api/get_url'
     json = {
         "client_key": "YOURS",
         "client_secret": "YOURS"
     }
     res = requests.post(url=url, json=json)
     print(res.json())
     returns json like this
     
     {"authorization_url": "https://my.deere.com/consentToUseOfData?oauth_token=f2cf"}
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -X GET \
      -H 'Authorization: Bearer YOUR_TOKEN' \
      'https://{{url}}/services/usermanagement/api/users/'
  ```

  </TabItem>
</Tabs>  

**Get User's token id and token secret key**

You will redirect your user to this url, so that they can log in to his account and authorize your app to use their credentials. Once they log in, you will receive a response url. You will use it in the next step, to get your user's "oauth_token" and "oauth_token_secret", that we call "tokenId" and "tokenSecretKey" respectively.

Now, just send a
POST to https://gknk1zjl3b.execute-api.us-west-2.amazonaws.com/api/get_token

with this json:
{"client_key": "YOUR_APP'S", "response_url": "YOUR_RESPONSE_URL"}

You will receive a json like this:
{"oauth_token": "YOUR_USER'S", "oauth_token_secret": "YOUR_USER'S"}

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
  var request = require('request');
  
  var headers = {
      'Content-type': 'application/json'
  };
  
  var dataString = '{
      "client_key": "YOURS",
      "client_secret": "YOURS",
      "token_id": "YOUR USERS",
      "token_secret_key": "YOUR USERS"
  }';
  
  var options = {
      url: 'https://ivlsjyyip6.execute-api.us-west-2.amazonaws.com/api/organizations',
      method: 'POST',
      headers: headers,
      body: dataString
  };
  
  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }
  }
  
  request(options, callback);
```

  </TabItem>
  <TabItem value="py">

  ```py
    import requests
    
    url = 'https://ivlsjyyip6.execute-api.us-west-2.amazonaws.com/api/organizations'
    json = {
        "client_key": "YOURS",
        "client_secret": "YOURS",
        "token_id": "YOUR USERS",
        "token_secret_key": "YOUR USERS"
    }
    res = requests.post(url=url, json=json)
    print(res.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -XPOST  \
  -H "Content-type: application/json"  \
  -d '{
      "client_key": "YOURS",
      "client_secret": "YOURS",
      "token_id": "YOUR USERS",
      "token_secret_key": "YOUR USERS"
  }' 'https://ivlsjyyip6.execute-api.us-west-2.amazonaws.com/api/organizations'
  ```

  </TabItem>
</Tabs>  

**Get User's organization id**

Now, the last thing needed is your user's organization.
To get it, just send a
POST to https://ivlsjyyip6.execute-api.us-west-2.amazonaws.com/api/organizations

with this json:
{
"client_key": "{{client_key}}",
"client_secret": "{{client_secret}}",
"token_id": "{{token_id}}",
"token_secret_key": "{{token_secret_key}}"
}

You will receive a json like this:
{
  "total": 1,
  "values": [{
    "@type": "Organization",
    "name": "USERS ORG NAME",
    "type": "customer",
    "member": true,
    "id": "THIS IS THE ID YOU WILL NEED"
  }]
}

Once you have these, adding John Deere credentials to a user is a simple process. Just follow the add John Deere credentials section.

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
  ]
}>
  <TabItem value="js">

  ```js
 ar request = require('request');
 
 var headers = {
     'Content-type': 'application/json'
 };
 
 var dataString = '{
     "client_key": "YOURS",
     "client_secret": "YOURS",
     "token_id": "YOUR USERS",
     "token_secret_key": "YOUR USERS"
 }';
 
 var options = {
     url: 'https://ivlsjyyip6.execute-api.us-west-2.amazonaws.com/api/organizations',
     method: 'POST',
     headers: headers,
     body: dataString
 };
 
 function callback(error, response, body) {
     if (!error && response.statusCode == 200) {
         console.log(body);
     }
 }
 
 request(options, callback);

returns a json like this

{  
    "total": 1,  
    "values": [{  
        "@type": "Organization",   
        "name": "USERS ORG NAME",  
        "type": "customer",  
        "member": true,  
        "id": "THIS IS THE ID YOU WILL NEED"  
    }]  
}
```

  </TabItem>
  <TabItem value="py">

  ```py
    import requests
    
    url = 'https://ivlsjyyip6.execute-api.us-west-2.amazonaws.com/api/organizations'
    json = {
        "client_key": "YOURS",
        "client_secret": "YOURS",
        "token_id": "YOUR USERS",
        "token_secret_key": "YOUR USERS"
    }
    res = requests.post(url=url, json=json)
    print(res.json())
  ```

  </TabItem>
  <TabItem value="sh">

  ```sh
  curl -XPOST  \
  -H "Content-type: application/json"  \
  -d '{
      "client_key": "YOURS",
      "client_secret": "YOURS",
      "token_id": "YOUR USERS",
      "token_secret_key": "YOUR USERS"
  }' 'https://ivlsjyyip6.execute-api.us-west-2.amazonaws.com/api/organizations'
  ```

  </TabItem>
</Tabs>  
  
:::tip
Please don't hesitate to [contact][contact] us to schedule a demo, ask a question, request sample data, or suggest a feature!
:::

[contact]: mailto:connect@leafagriculture.com.br
