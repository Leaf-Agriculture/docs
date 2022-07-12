---
title: How to upload a file and images
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This use case describes how to get the information and images from uploaded files.

The following steps will be necessary:

1. Register with Leaf
    - Go to [registration link](https://withleaf.io/registration/) and create your account.
    - Save your credentials to use in the next step.


2. First of all, you will need to setup a server, in this case we will use the Express Framework to create the server, the Ngrok library to be able to open our localhost port to the open internet and the Axios library to do POST/GET requests in our server:

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
    2.1 Now you will need to define some routes that your server will use, in this example, we define the follow routes:
    ```js
    This route will be responsible to render our main page, in the route: '/'.
    
    app.get("/", (req, res) => {
            res.render(__dirname + "/views/ejs/map.ejs");
    });
    ```
    ```js
    This route will be the route that we will use in the process of creating our webhook in the Leaf API,
    with this route we will receive the alerts from the Leaf API, and save the files id to use 
    it in the future. In this example, we just get 2 types of response from the Leaf API, the types:
     - uploadedFileProcessingFailed
     - uploadedFileProcessingFinished
    
   app.post("/webhook", (req, res) => {
      if (req.body.message === "confirmation of webhook upon registration") {
        console.log("Just checking if webhook url is alive");
      }
      if (req.body.type === "uploadedFileProcessingFailed") {
        console.log("Processing failed to the file: " + req.body.fileId);
      } else if (req.body.type === "uploadedFileProcessingFinished") {
        console.log("Processing ok to the file: " + req.body.fileId);
        let content = req.body.fileId + "\n";
        fs.appendFile("./files/all.txt", content, (erro) => {
          if (erro) {
            console.error(erro);
          }
        });
      }
      res.status(200).send("Ok");
    });
    ```
    [Here](https://leaf-agriculture.github.io/docs/docs/alerts_endpoints/) you can see the Alerts Documentation.
    -- Authentication
    ```js
    In this route, we will create the user token to use in the next steps. In the data object,
    we need the attributes 'username, password' that comes from a form in the front-end,
    and the attribute 'rememberMe' is optional. 
    We make a POST request with AXIOS to the Leaf API endpoint that is responsible to create our token, 
    if everything is ok, it will return an status code 200, and the token will be saved in the 'token' 
    variable, if anything is wrong, it will be catched by the '.catch()' function.
    
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
    [Here](https://leaf-agriculture.github.io/docs/docs/authentication) you can see Authentication Documentation.
    
    Create Webhooks
    ```js
    In this route, we will receive data from a form in the front-end, put them in a object named data and 
    then make a post request with AXIOS to the Leaf API endpoint that is responsible for creating 
    webhooks. The attribute name and events comes from the form, the attribute secret you will need 
    to generate, and the parameter url is created in when the server start using the
    function startTunnel(); and we add the '/webhook' that is the route that we defined early.
    
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
    
    List webhooks
    ```js
    In this route, we will use our token to list all our created webhooks. We need to do a GET request 
    with AXIOS to the Leaf API endpoint responsible to give us all our webhooks. And all will be 
    done just if our token is not undefined, in other case, it will give us the error 
    'Invalid token btw, generate one first!'.
    
    app.get("/list_webhook", (req, res) => {
      if (token != undefined) {
        let headers = { Authorization: `Bearer ` + token };
        let endpoint =
          "https://api.withleaf.io/services/alerts/api/alerts/webhooks";
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
    Delete a webhook
    ```js
    In this route, we will be able to delete a webhook that we created. The id comes from the 
    parameter id in the url, and we will use this parameter in the DELETE request that we make 
    with AXIOS, we alse need to set our token in the header, and if everything is ok, 
    we will receive an status code 204
    
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
    [Here](https://leaf-agriculture.github.io/docs/docs/alerts_endpoints#create-a-webhook) you can see the Webhook Documentation.
    
    Receive an uploaded file and post it to Leaf API
    ```js
    In this route, we will receive a file that was uploaded from the front-end, we will save it, 
    upload to Leaf API and then delete it. 
    
    If the user token is already generated, it will follow the process, if it is undefined, it will send 
    back the message 'Couldnt retrieve your token, generate one first.'. 
    
    app.post("/save_file", (req, res) => {
      if (token === undefined) {
        res.json('Not a valid token, create one first');
      } else {
      
        //Here we save the provider and the file that is comming from the front end, we also save 
        //the file name and create a path in the server to the file.
        
        let provider = req.body.provider;
        let files = req.files;
        let filename = files.upload.name;
        let file_path = path.resolve(`./${files.upload.name}`);
        
        //Here we save the file in the path that we created, if something went wrong, it will send 
        //back the error.
        
        files.upload.mv(file_path, (err) => {
          if (err) return res.status(500).send(err);
        });
        
        // Here we make a get request with axios to retrieve our Leaf User Id, that is
        // necessary for the next step.
        
        let endpoint = "https://api.withleaf.io/services/usermanagement/api/users/";
        let headers = {
          Authorization: `Bearer ` + token
        };
        axios
          .get(endpoint, { headers })
          .then(function (response) {
            leaf_user_id = response.data[0]["id"];
            endpoint = "https://api.withleaf.io/services/operations/api/batch";
    
            let headers = {
              Authorization: `Bearer ` + token,
              "Content-Type": "multipart/form-data"
            };
            
            // Once the Leaf User Id is set, we add it to the param object, that we will use to post
            // the file to Leaf API endpoint.
    
            let params = {
              provider: provider,
              leafUserId: leaf_user_id
            };
    
            // Create a form so we can put the file received from the front-end in the request to the
            // Leaf API endpoint.
    
            let form = new FormData();
            form.append("file", fs.createReadStream(file_path));
            
            axios
              .post(endpoint, form, { headers, params })
              .then(function (response) {
                console.log(response.data);
                // Delete the file received
                fs.unlink(file_path, (erro) => {
                  if (erro) console.log(erro);
                });
                // Send a json to the front-end that the file was uploaded to Leaf API endpoint.
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
    [Here](https://leaf-agriculture.github.io/docs/docs/files_endpoints) you can see the Files Documentation.
    
    Verify the files
    ```js
    In this route, we can verify if any files that we uploaded were processed succefully. If the token is already generated it will proceed to verifying the all.txt file, where the files id are saved when we receive and alert in the '/webhook' route. If are any files id in the file, the route will return the files id in the JSON options.
    
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
    Verify uploaded file content
    ```js
    In this route, we will receive and id in the url, and we will use this id to make a GET request with 
    AXIOS in the Leaf API endpoint that is responsible to give us the content of uploaded files. 
    The API endpoint will give us an JSON with the information, and we will send it back to the 
    front-end with the res.json ({ data }).
    
    app.get("/detail_file/:id", (req, res) => {
      let file_id = req.params.id;
      let endpoint =
        "https://api.withleaf.io/services/operations/api/files/" + file_id;
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
    [Here](https://leaf-agriculture.github.io/docs/docs/files_endpoints/) you can see the Files Documentation.
    
    See the images generated of an uploaded file
    ```js
    In this route, we will be able to get the images from the Leaf API endpoint. The file id is received 
    from the form, in the parameter 'id' and we put it in the endpoint url. When we make a GET request 
    with AXIOS, the endpoint will return an JSON with the images url and informations related to 
    that file id that we send in the url.
    
    app.get("/file_images/:id", (req, res) => {
      let file_id = req.params.id;
      let endpoint =
        "https://api.withleaf.io/services/operations/api/files/" +
        file_id +
        "/images";
      let headers = { Authorization: `Bearer ` + token };
    
      axios
        .get(endpoint, { headers })
        .then(function (response) {
          let dados = response.data;
          res.json({ dados });
        })
        .catch(console.error);
    });
    ```
    [Here](https://leaf-agriculture.github.io/docs/docs/files_endpoints/#get-a-files-images) is the File Images Documentation.
    
    Get the coordinates of an image.
    ```js
    In this route, we will receive a list of images url, and we will work with it.
    
    app.post("/image_coordinates", async (req, res) => {
      let received = req.body;
      received = JSON.parse(received.dados);
      
      //For each link received, we will use the Probe library to get the size of an image from a url, 
      //and we will save it because we need to use it in the future to get the real coordinates.
    
      for await (const link of received) {
        let result = await probe(link.url);
        link.width = result.width;
        link.height = result.height;
      };
      
      // Here we define a function getCoordintes() that will receive an array, filled with the images
      // and its sizes, and an callback function that will be called when all the Promises are resolved.
    
      function getCoordinates(arr, callback) {
        var results = [];
        var expecting = arr.length;
        // For each link in the array, we will get an extra .xml file from the Leaf API that contains
        // the information that we need to calculate the real world coordinates.
        arr.forEach((e) => {
        // Get the .xml file using the https library.
          let req2 = https.get(e.url + '.aux.xml', function (res2) {
            let data = '';
            res2.on('data', function (stream) {
              data += stream;
            });
            res2.on('end', function () {
            // Parse the information from xml to json using the library xml2js
            // parser is from xml2js = new xml2js.Parser({ attrkey: "ATTR" });
              parser.parseString(data, function (error, result) {
                if (error === null) {
                // Get the necessary information from inside the JSON
                  let resultado = result['PAMDataset']['GeoTransform'][0].split(',');
                  // This is the top left point of the image:
                  let TLX = parseFloat(resultado[0].trim());
                  let TLY = parseFloat(resultado[3].trim());
                  //This is the bottom right point of the image:
                  let BRX = parseFloat(resultado[0].trim()) + parseInt(e.width) * 
                  parseFloat(resultado[1].trim()) + parseInt(e.height) * resultado[2];
                  let BRY = parseFloat(resultado[3].trim()) + parseInt(e.width) * 
                  parseFloat(resultado[4].trim()) + parseInt(e.height) * resultado[5];
                  /*See image1.*/
                  let x0 = TLX * (180 / Math.PI) / 6378137.0;
                  let y0 = (Math.PI * 0.5 - 2.0 * Math.atan(Math.exp(-TLY / 6378137.0))) * 180 / Math.PI;
                  let x1 = BRX * (180 / Math.PI) / 6378137.0;
                  let y1 = (Math.PI * 0.5 - 2.0 * Math.atan(Math.exp(-BRY / 6378137.0))) * 180 / Math.PI;
                  /*See image2.*/
                  let obj = {
                    '1': x0 + ", " + y0,
                    '2': x1 + ", " + y0,
                    '3': x1 + ", " + y1,
                    '4': x0 + ", " + y1,
                    '5': e.url,
                    '6': e.type
                  }
                  /*See image3.*/
                  results.push(obj);
                  //This part does 'expeting - 1' every forEach, and when it hits 0 
                  //(all the array processed) it calls the callback function.
                  if (--expecting === 0) {
                    callback(results);
                  }
                }
                else {
                  console.log(error);
                }
              });
            });
          });
        })
      };
    // Here we call the function, sending the array that we created with the image links and sizes, 
    //and we define the function that will be called when everything is finishid, in this case, 
    //the functions just respond the request with an JSON containing all the data needed to plot the 
    //images in the front end.
      getCoordinates(received, function (results) {
        res.json(JSON.stringify(results));
      })
    });
    ```
    <p align="center">
   <img alt="Image1" src={useBaseUrl('img/usecase_upload_twosides.png')} />
   <img alt="Image2" src={useBaseUrl('img/usecase_upload_x_y.png')} />
   <img alt="Image3" src={useBaseUrl('img/usecase_upload_4sides.png')} />
   </p>
    
3. Start the server
    ```js
    For the last part, we need to start our server, and make the front-end!
    
    app.listen(3000, async () => {
      //Clear the all.txt file
      fs.writeFileSync('./files/all.txt', '');
      // Get the ngrok url to the open internet
      url = await startTunnel();
      console.log(url);
      console.log("Server started!");
    });
    ```
