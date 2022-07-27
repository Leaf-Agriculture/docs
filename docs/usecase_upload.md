---
title: How to upload a file and get images
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## About

This use case describes how to get the information and images from uploaded files. Follow this documentation.

### Register

To register with Leaf:

- Go to [registration link](https://withleaf.io/registration/) and create your account.
- Save your credentials to use in the next step.

## Backend
### Create server

After registered, you will need to setup a server, in this case we will use the Express Framework to create the server, the Ngrok library to be able to open our localhost port to the open internet and the Axios library to do `POST/GET` requests in our server:

```js
const express = require("express")
const app = express()
const ngrok = require("ngrok")
const axios = require("axios")
  var startTunnel = async () => {
      await ngrok.authtoken("YOUR NGROK AUTHTOKEN");
      url = await ngrok.connect(THE LOCALHOST PORT YOU WANT TO DISPOSE TO THE OPEN INTERNET);
      return url;
  };
```

Now you will need to define some routes that your server will use, in this example, we define the follow routes:
### Routes

#### Route '/main'

This route will be responsible to render our main page, in the route: '/main'.
```js
app.get("/main", (req, res) => {
  res.render(__dirname + "/views/ejs/map.ejs");
});
```
#### Route '/webhook'
This route will be the route that we will use in the process of creating our webhook in the Leaf API,
with this route we will receive the alerts from the Leaf API, and save the files id to use
it in the future. In this example, we just get 2 types of response from the Leaf API, the types:
 - uploadedFileProcessingFailed
 - uploadedFileProcessingFinished
```js
  app.post("/webhook", (req, res) => {
      if (req.body.message === "confirmation of webhook upon registration") {
          console.log("Just checking if webhook url is alive");
      }
      if (req.body.type === "uploadedFileProcessingFailed") {
          console.log("Processing failed to the file: " + req.body.fileId);
      } else if (req.body.type === "uploadedFileProcessingFinished") {
          console.log("Processing ok to the file: " + req.body.fileId);
          let content = req.body.fileId + "\n";
          fs.appendFile("./files/all.txt", content, (error) => {
              if (error) {
                  console.error(error);
              }
          });
      }
      res.status(200).send("Ok");
  }); 
```
[Here](https://leaf-agriculture.github.io/docs/docs/alerts_overview) you can see the Alerts Documentation.

#### Route '/create_token'
In this route, we will create the user token to use in the next steps. In the data object,
we need the attributes `username` and `password` that comes from a form in the front-end,
and the attribute `rememberMe` is optional.
We make a `POST` request with AXIOS to the Leaf API endpoint that is responsible to create our token,
if everything is ok, it will return an status code `200`, and the token will be saved in the `token`
variable, if anything is wrong, it will be catched by the `.catch()` function.
```js
app.post("/create_token", (req, res) => {
  let email = req.body.email.trim();
  let passwd = req.body.password.trim();
  let endpoint = "https://api.withleaf.io/api/authenticate";

  let data = {
    username: email,
    password: passwd,
    rememberMe: "true"
  };

  axios
    .post(endpoint, data)
      .then(function (response) {
        token = response.data["id_token"];
        res.json("Congrats! Login done!");
      })
      .catch((error) => {
        if (error.response.data.status === 400) {
          res.json("Oops! Login failed!");
        } else if (error.response.data.status === 401) {
            res.json("Oops! Invalid credentials!")
        }
      });
});
```
[Here](/docs/docs/authentication) you can see the Authentication Documentation.

#### Route '/create_webhook'
In this route, we will receive data from a form in the front-end, put them in a object named data and
then make a post request with AXIOS to the Leaf API endpoint that is responsible for creating
webhooks. The attributes name and events comes from the form, the attribute secret you will need
to generate, and the parameter url is created when the server start using the
function `startTunnel();` and we add the '/webhook' that is the route we defined early.
```js
app.post("/create_webhook", (req, res) => {
  let name = req.body.nome;
  let data = {
    events: [req.body.type.trim()],
    name: name,
    secret: "YOUR SECRET",
    url: url + "/webhook"
  };

  let headers = { Authorization: `Bearer ` + token };
  let endpoint = "https://api.withleaf.io/services/alerts/api/alerts/webhooks";

  axios
  .post(endpoint, data, { headers })
    .then((response) => {
      res.json('Webhook successfully created')
    })
    .catch((error) => {
      if (error.response.data.status === 400) {
        res.json("This event is already created at some webhook url.");
      }
    });
});
```
[Here](/docs/docs/alerts_endpoints#create-a-webhook) you can see the Webhook Documentation.

#### Route '/list_webhook'
In this route, we will use our token to list all our created webhooks. We need to do a `GET` request
with AXIOS to the Leaf API endpoint responsible to give us all our webhooks. And all will be
done just if our token is not undefined, in other case, it will give us the error
`'Invalid token btw, generate one first!'`.
```js
app.get("/list_webhook", (req, res) => {
  if (token != undefined) {
    let headers = { Authorization: `Bearer ` + token };
    let endpoint = "https://api.withleaf.io/services/alerts/api/alerts/webhooks";
    axios
    .get(endpoint, { headers })
      .then(function (response) {
        res.json(JSON.stringify(response.data));
      })
      .catch(console.error);
    } else {
        res.json("Invalid token btw, generate one first!");
      }
});
```
[Here](/docs/docs/alerts_endpoints#get-all-webhooks) you can see the Webhook Documentation.

#### Route '/delete_webhook/:id'
In this route, we will be able to delete a webhook that we created. The id comes from the
parameter id in the url, and we will use this parameter in the `DELETE` request that we make
with AXIOS, we also need to set our token in the header, and if everything is ok,
we will receive an status code `204`
```js
app.get("/delete_webhook/:id", (req, res) => {
    let webhook_id = req.params.id;
    const headers = { Authorization: `Bearer ` + token };
    const id = webhook_id;
    const endpoint = 'https://api.withleaf.io/services/alerts/api/alerts/webhooks/' + id;

    axios
      .delete(endpoint, { headers })
      .then((response) => console.log(response.status))
      .catch(console.error);

  res.redirect("/");
});
```
[Here](/docs/docs/alerts_endpoints#delete-a-webhook) you can see the Webhook Documentation.

#### Route '/save_file'
In this route, we will receive a file that was uploaded from the front-end, we will save it,
upload to Leaf API and then delete it. If the user token is already generated, it will follow the process, if it is undefined, it will send
back the message `'Not a valid token, create one first'`.
```js
app.post("/save_file", (req, res) => {
    if (token === undefined) {
      res.json('Not a valid token, create one first');
    } else {
      //Here we save the provider and the file that is comming from the front end,
      // we also save the file name and create a path in the server to the file.

      let provider = req.body.provider;
      let files = req.files;
      let filename = files.upload.name;
      let file_path = path.resolve(`./${files.upload.name}`);

      // Here we save the file in the path that we created, if something went wrong,
      // it will send back the error.

      files.upload.mv(file_path, (err) => {
        if (err) return res.status(500).send(err);
      });

      // Here we make a get request with axios to retrieve our Leaf User Id, that is
      // necessary for the next step.

      let endpoint = "https://api.withleaf.io/services/usermanagement/api/users/";
      let headers = { Authorization: `Bearer ` + token };

      axios
        .get(endpoint, { headers })
        .then(function (response) {
          leaf_user_id = response.data[0]["id"];
          endpoint = "https://api.withleaf.io/services/operations/api/batch";

          let headers = {
            Authorization: `Bearer ` + token,
            "Content-Type": "multipart/form-data"
          };

          // Once the Leaf User Id is set, we add it to the param object, that
          // we will use to post the file to Leaf API endpoint.

          let params = {
            provider: provider,
            leafUserId: leaf_user_id
          };

          // Create a form so we can put the file received from the front-end
          // in the request to the Leaf API endpoint.

          let form = new FormData();
          form.append("file", fs.createReadStream(file_path));

          axios
            .post(endpoint, form, { headers, params })
            .then(function (response) {
              // Delete the file received
              fs.unlink(file_path, (erro) => {
                if (erro) console.log(erro);
              });
              // Send a json to the front-end that the file
              // was uploaded to Leaf API endpoint.
              res.json("File uploaded, wait for it to be processed!");
            })
            .catch(function () {
              // If an error ocurred, send the error to the front-end.
              res.json('Error ocurred during file upload, try again with a valid file')
            }
            );
          })
          .catch(function () {
            res.json('Couldnt retrieve your token, generate one first.')
          });
      }
});
```
[Here](/docs/docs/files_endpoints) you can see the Files Documentation.

#### Route '/verify_files'
In this route, we can verify if any files that we uploaded were processed succefully. If the token is already generated it will proceed to verifying the `all.txt` file, where the files id are saved when we receive an alert in the `'/webhook'` route. If are any files id in the file, the route will return the files id in the JSON options.
```js
app.get("/verify_files", (req, res) => {
    if (token === undefined) {
      res.json(`Invalid token btw, generate one first!`);
    } else {
        fs.readFile("./files/all.txt", "utf-8", (err, data) => {
          if (err) {
            console.error(err);
          }
          if (data.length > 0) {
            let options = [];
            fs.readFile("./files/all.txt", "utf-8", (err, data) => {
                if (err) {
                  console.error(err);
                }
                data.split(/\r?\n/).forEach((line) => {
                  options.push(line);
                });
                res.json(JSON.stringify(options));
              });
          } else {
            res.json(
              'No file processed yet!'
            );
          }
        });
      }
});
```
#### Route '/detail_file/:id'
In this route, we will receive and id in the url, and we will use this id to make a `GET` request with
AXIOS in the Leaf API endpoint that is responsible to give us the content of uploaded files.
The API endpoint will give us an JSON with the information, and we will send it back to the
front-end.
```js
app.get("/detail_file/:id", (req, res) => {
    let file_id = req.params.id;
    let endpoint = "https://api.withleaf.io/services/operations/api/files/" + file_id;
    let headers = { Authorization: `Bearer ` + token };

    axios
    .get(endpoint, { headers })
    .then(function (response) {
        let data = response.data;
        res.json({ data });
    })
    .catch(console.error);
});
```
[Here](/docs/docs/files_endpoints/) you can see the Files Documentation.

#### Route '/file_images/:id'
In this route, we will be able to get the images from the Leaf API endpoint. The file id is received
from the form, in the parameter `id` and we put it in the endpoint url. When we make a `GET` request
with AXIOS, the endpoint will return an JSON with the images url and informations related to
that file id that we send in the url.
```js
app.get("/file_images/:id", (req, res) => {
    let file_id = req.params.id;
    let endpoint = "https://api.withleaf.io/services/operations/api/files/" +
        file_id +
        "/images";
    let headers = { Authorization: `Bearer ` + token };

    axios
    .get(endpoint, { headers })
    .then(function (response) {
        let data = response.data;
        res.json({ data });
    })
    .catch(console.error);
});
```
[Here](/docs/docs/files_endpoints/#get-a-files-images) is the File Images Documentation.

#### Route '/image_coordinates'
In this route, we will receive a list of images url, and we will work with it.
```js
app.post("/image_coordinates", async (req, res) => {
  let received = req.body;
  received = JSON.parse(received.dados);

  //For each link received, we will use the Probe library to get the size of an image 
  //from a url, and we will save it because we need to use it in the future to
  //get the real coordinates.

  for await (const link of received) {
    let result = await probe(link.url);
    link.width = result.width;
    link.height = result.height;
  }

  //Here we define a function getCoordintes() that will receive an array, filled with 
  //the images and its sizes, and an callback function that will be called when all 
  //the Promises are resolved.

  function getCoordinates(arr, callback) {
    var results = [];
    var expecting = arr.length;

    //For each link in the array, we will get an extra .xml file from the Leaf API
    //that contains the information that we need to calculate the real world coordinates.

    arr.forEach((e) => {
      // Get the .xml file using the https library.
      let req2 = https.get(e.url + ".aux.xml", function (res2) {
        let data = "";
        res2.on("data", function (stream) {
          data += stream;
        });
        res2.on("end", function () {
          // Parse the information from xml to json using the library xml2js
          // parser is from xml2js = new xml2js.Parser({ attrkey: "ATTR" });
          parser.parseString(data, function (error, result) {
            if (error === null) {
              // Get the necessary information from inside the JSON
              let resultado =
                result["PAMDataset"]["GeoTransform"][0].split(",");
              // This is the top left point of the image:
              let TLX = parseFloat(resultado[0].trim());
              let TLY = parseFloat(resultado[3].trim());
              //This is the bottom right point of the image:
              let BRX =
                parseFloat(resultado[0].trim()) +
                parseInt(e.width) * parseFloat(resultado[1].trim()) +
                parseInt(e.height) * resultado[2];
              let BRY =
                parseFloat(resultado[3].trim()) +
                parseInt(e.width) * parseFloat(resultado[4].trim()) +
                parseInt(e.height) * resultado[5];
              /*See image1.*/
              let x0 = (TLX * (180 / Math.PI)) / 6378137.0;
              let y0 =
                ((Math.PI * 0.5 - 2.0 * Math.atan(Math.exp(-TLY / 6378137.0))) *
                  180) /
                Math.PI;
              let x1 = (BRX * (180 / Math.PI)) / 6378137.0;
              let y1 =
                ((Math.PI * 0.5 - 2.0 * Math.atan(Math.exp(-BRY / 6378137.0))) *
                  180) /
                Math.PI;
              /*See image2.*/
              let obj = {
                1: x0 + ", " + y0,
                2: x1 + ", " + y0,
                3: x1 + ", " + y1,
                4: x0 + ", " + y1,
                5: e.url,
                6: e.type,
              };
              /*See image3.*/
              results.push(obj);
              //This part does 'expeting - 1' every forEach, and when it hits 0
              //(all the array processed) it calls the callback function.
              if (--expecting === 0) {
                callback(results);
              }
            } else {
              console.log(error);
            }
          });
        });
      });
    });
  }
  //Here we call the function, sending the array that we created with the image links
  //and sizes, and we define the function that will be called when everything is finishid,
  //in this case,the function just respond the request with an JSON containing all the data
  //needed to plot the images in the front end.
  getCoordinates(received, function (results) {
    res.json(JSON.stringify(results));
  });
});
```

### Start the server
For the last part, we need to start our server, and make the front-end!
```js
app.listen(3000, async () => {
    //Clear the all.txt file
      fs.writeFileSync('./files/all.txt', '');
    // Get the ngrok url to the open internet
      url = await startTunnel();
      console.log(url);
      console.log("Server started!");
});
```

<p align="center">
  <img alt="Image1" src={useBaseUrl('img/usecase_upload_twosides.png')} />
  <img alt="Image2" src={useBaseUrl('img/usecase_upload_x_y.png')} />
  <img alt="Image3" src={useBaseUrl('img/usecase_upload_4sides.png')} />
</p>

## Frontend
In the frontend, we will need to use just one page! We define the page in the path: `/views/ejs/map.ejs`.  
In this part of the documentation, it will be show some functions that are used in the `map.ejs` file, all this functions will be called via `onClick()` method from form buttons. It's important to say that we will use the [Mapbox API](https://docs.mapbox.com/mapbox-gl-js/api/) to display the map and images on it.

### Login
This function is called by our button that is responsible for doing the login. It will get the data from the form, and do a `POST` request with AXIOS to our backend. That will return `'Congrats! Login done!'` if the credentials are right, and another message depending on what happened wrong.
```js
function loginClick() {
            let email = $("#email").val();
            let password = $("#password").val();
            $.ajax({
                type: "POST",
                url: '/create_token',
                data: {
                    password: password,
                    email: email
                },
                success: function (response) {
                    if (response === 'Congrats! Login done!') {
                      //Here you need to disable this element and
                      //show the next one, in the case, the div responsible
                      //for creating the webhook.
                    } else {
                       //Show some message saying that the login failed.
                    }
                }
            });
        }
```

### Create Webhook
With this function, we will get the parameters from the form about the webhook, and do a `POST` request with AXIOS to our backend resonsible for creating the webhook in the Leaf API.
```js
function webhookCreateClick() {
            if ($('YOUR FORM INPUT ID').val() != false) {
                let name = $("YOUR FORM INPUT ID").val();
                let type = $("YOUR SELECT INPUT SELECTED").val();
                $('#webhook_response').text('');
                $.ajax({
                    type: "POST",
                    url: '/create_webhook',
                    data: {
                        name: name,
                        type: type
                    },
                    success: function (response) {
                        if (response === 'Webhook successfully created') {
                            //Here you need to disable this element and
                            //show the next one, in the case, the div responsible
                            //for list the webhook.
                            listWebhooks();
                        } else {
                           //Show some message saying that the webhook creation failed.
                        }
                    }
                });
            }
        }
```

### List webhooks
In this function, we will be able to list all the webhooks that our Leaf Account have. We will list them to the user just to see if the webhook that he needs is created or not.
```js
function listWebhooks() {
            let start = '<p>'
            let end = '</p>'
            $.ajax({
                type: "GET",
                url: '/list_webhook',
                success: function (response) {
                  // Here, we get the response from our backend and build a div with 
                  // <p></p> inside of it containing the type of the webhooks.
                  // Then, we call the next element, the uploadFile();
                    response = JSON.parse(response);
                    if (response.length > 0) {
                        response.forEach((e) => {
                            e.events.forEach((p) => {
                                $('YOUR DIV ID').append(start + p + end);
                            })
                        })
                    }
                    uploadFile();
                },
                error: function (response) {
                    console.log(response);
                }
            });
        };
```

### Upload a file
In this function, we will handle the upload file process. We need to intercept the form submit action and then make a `POST` with AXIOS to our backend.
```js
function uploadFile() {
            // Intercept the submit form action
            $("YOUR FORM ID").submit(function () {
                // Create a new formData, passing the real formData file to it.
                var formData = new FormData(this);
                $.ajax({
                    url: '/save_file',
                    type: 'POST',
                    processData: false,
                    contentType: false,
                    cache: false,
                    data: formData,
                    success: function (response) {
                        if (response === 'File uploaded, wait for it to be processed!') {
                           // Here you will make what you want to happen when the file 
                           // was received in the backend and everything was ok with it.
                        } else {
                          // Here you need to display some message to the user if the file 
                          // that he uploaded was not in the correct format or size.
                        }
                    },
                    error: function (response) {
                        console.log(response);
                    },
                });
            });
        };
```

### Check uploaded files
With this function, we will be able to check if the Leaf API already processed any files that we uploaded to our backend. We will build a div with links inside of it, linking to another function: `get_json()`, that will retrieve all the data we need.
```js
function checkFiles() {
            // Define the string we will build
            let start = `<a onclick="get_json(`;
            let middle = `)>`;
            let end = `</a>"`
            $.ajax({
                type: "GET",
                url: '/verify_files',
                success: function (response) {
                    if (response == 'No file processed yet!') {
                       // Display a message to your user saying that no files
                       // were processed yet
                    } else if (response == 'Invalid token btw, generate one first!') {
                       // Display a message to your user saying that he needs 
                       // to generate a token first
                    } else {
                        // See the response from the backend and build an div
                        // containing the links to check files content.
                        response = JSON.parse(response);
                        response.forEach((e) => {
                            $('YOUR DIV ID').append(`<a onClick="get_json('` + e + `');"
                            style="cursor: pointer; cursor: hand;"><p>` + e + `</a>`);
                        });
                    }
                },
                error: function (response) {
                    // Display any error that cant occur during the response from backend.
                    console.log(response);
                }
            });
        };
```

### Get JSON data from files
With this function, we will receive an id from parameter, and we will send it to our backend, so the backend will send us the follow informations:
- File details
- File images
- Images coordinates
```js
function get_json(id) {
            let file_id = id;
            var allImages = new Array();
            // With this GET request, we will send to the backend one file_id,
            // and it will return the images linked to it.
            $.ajax({
                url: "/file_images/" + file_id,
                type: 'GET',
                async: false,
                dataType: 'json',
                success: function (res) {
                    // In this response, we will get all the images that
                    // are linked to the file_id, and we will save
                    // this images url in the allImages array.
                    res.dados.forEach((e) => {
                        allImages.push({ 'url': e.url, 'type': e.property });
                    });
                }
            });

            // With this POST request, we will send to our backend all images url,
            // the operation type of that images, and with the response we will
            // build map layers.
            $.ajax({
                url: "/image_coordinates",
                type: 'POST',
                async: false,
                dataType: 'json',
                data: {
                    dados: JSON.stringify(allImages)
                },
                success: function (res) {
                    points = JSON.parse(res);
                    // Clear the actual options of layers
                    if(optionsShow.length > 0){
                        optionsShow.forEach((e) => {
                            map.removeLayer(`'` + e + `'`);
                            map.removeSource(`'` + e + `'`);
                        })
                    }
                    optionsShow = [];
                    // Creating a list of avaible images so the user can click it and
                    // display the image on the map.
                    points.forEach((e) => {
                        $('YOUR DIV TO LIST THE IMAGES TYPE').append
                        (`<a onClick="showImage('` + e[6] + `');" style="cursor: pointer;
                         cursor: hand;"><p>` + e[6] + `</a>`)
                        // Save the type of the image so the user can choose what to see
                        optionsShow.push(e[6]);
                        // Create the 4 points (x,y) real coordinates
                        // of the image, getting the points
                        // from the server response
                        let a = parseFloat(e[1].split(',')[0]);
                        let a1 = parseFloat(e[1].split(',')[1]);
                        let b = parseFloat(e[2].split(',')[0]);
                        let b1 = parseFloat(e[2].split(',')[1]);
                        let c = parseFloat(e[3].split(',')[0]);
                        let c1 = parseFloat(e[3].split(',')[1]);
                        let d = parseFloat(e[4].split(',')[0]);
                        let d1 = parseFloat(e[4].split(',')[1]);
                        // Make the map fly to the right coordinate of the images
                        map.flyTo({
                            center: [a, a1],
                            zoom: 17
                        });
                        // Add a source to the map, so we can add a layer to it
                        // e[6] has the type of the image
                        map.addSource(`'` + e[6] + `'`, {
                            'type': 'image',
                            // e[5] has the url of the image
                            'url': e[5],
                            'coordinates': [
                                [a, a1],
                                [b, b1],
                                [c, c1],
                                [d, d1]
                            ]
                        });
                        // Add a layer to the map, so we can show and hide it in the future.
                        // e[6] has the type of the image
                        map.addLayer({
                            'id': `'` + e[6] + `'`,
                            'type': 'raster',
                            'source': `'` + e[6] + `'`,
                            'paint': {
                                'raster-fade-duration': 0
                            }
                        });
                        // set the layer visibility to none
                        map.setLayoutProperty(`'` + e[6] + `'`, 'visibility', 'none');
                    });
                },
                error: function (res) {
                    console.log(res);
                }
            });

            // With this GET request, we will send an file id to the backend,
            // and it will return the data about that file. e.g summary information
            $.ajax({
                url: "/file_details/" + file_id,
                type: 'GET',
                async: false,
                dataType: 'json',
                success: function (res) {
                    // Here you can define one function to show this data
                    // in some div of your page.
                }
            })
        };
```

### Show and hide map layers
With this function, we will receive an id from the parameter, and display that image if it's hidden, and hide it if it's show.
```js
function showImage(id) {
            let visiviel = map.getLayoutProperty(`'` + id + `'`, 'visibility');
            if (visiviel === 'visible') {
                map.setLayoutProperty(`'` + id + `'`, 'visibility', 'none');
            } else {
                map.setLayoutProperty(`'` + id + `'`, 'visibility', 'visible');
            }
        }
```

### Extra
Don't forget to create an Map, a div for it and replace the `YOUR MAPBOX TOKEN`, otherwise, the map will not work!
```js
mapboxgl.accessToken = 'YOUR MAPBOX TOKEN';
        const map = new mapboxgl.Map({
            container: 'map',
            maxZoom: 20,
            minZoom: 1,
            zoom: 0,
            center: [0, 0],
            style: 'mapbox://styles/mapbox/satellite-v9'
        });

        map.on('load', () => {
        });
```
[See here](https://docs.mapbox.com/) more informations about Mapbox!

:::tip
Here you can run a live use case demo!

[![Edit webhook-leaf-api](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/webhook-leaf-api-o72lv8?fontsize=14&hidenavigation=1&theme=dark)
:::

