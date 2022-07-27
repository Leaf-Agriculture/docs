---
title: How to get satellite field images
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## About

This use case describes how to get the satellite field images and display them on [Leaflet JS](https://leafletjs.com/).

### Register

To register with Leaf:

- Go to [registration link](https://withleaf.io/registration/) and create your account.
- Save your credentials to use in the next step.

## Backend
### Create server

After registered, you will need to setup a server, in this case we will use the Express Framework to create the server and the Axios library to do POST/GET requests in our server:

```js
const express = require("express");
const app = express();
const axios = require("axios");
```

Now you will need to define some routes that your server will use, in this example, we define the follow routes:
### Routes

#### Route '/'

This route will be responsible to render our main page, in the route: '/'.
```js
app.get("/main", (req, res) => {
  res.render(__dirname + "/views/ejs/map.ejs");
});
```

#### Route '/create_token'
In this route, we will create the user token to use in the next steps. In the `data` object,
we need the attributes `username` and `password` that comes from a form in the front-end,
and the attribute `rememberMe` is optional.
We make a POST request with AXIOS to the Leaf API endpoint that is responsible to create our token,
if everything is ok, it will return an status code `200`, and the token will be saved in the `token`
variable, if anything is wrong, it will be catched by the `.catch()` function.
```js
app.post("/create_token", (req, res) => {

  // Comes from the frontend form
  let email = req.body.email.trim();
  let passwd = req.body.password.trim();

  // Leaf API endpoint
  let endpoint = "https://api.withleaf.io/api/authenticate";

  // Data to post to endpoint
  let data = {
    username: email,
    password: passwd,
    rememberMe: "true"
  };

  axios
    .post(endpoint, data)
      .then(function (response) {
        // Save the token in the token variable
        token = response.data["id_token"];
        // Return ok to the frontend request
        res.json("Congrats! Login done!");
      })
      .catch((error) => {
        if (error.response.data.status === 400) {
          // If something wrong happens, returns login failed.
          res.json("Oops! Login failed!");
        } else if (error.response.data.status === 401) {
          // If the credentials are wrong, returns that.
            res.json("Oops! Invalid credentials!")
        }
      });
});
```
[Here](/docs/docs/authentication) you can see the Authentication documentation.

#### Route '/monitored_fields'
In this route, we will be able to retrieve all our satellite monitored fields. First we verify if the user already created a valid token, if yes, we do a `GET` request with AXIOS to the Leaf API endpoint responsible to give us that information and then we return it to the frontend.
```js
app.get("/monitored_fields", (req, res) => {
  if (!token) {
    res.json("Invalid token, generate one first!");
  } else {

    let endpoint = "https://api.withleaf.io/services/satellite/api/fields";
    let headers = { Authorization: `Bearer ` + token };

    axios
      .get(endpoint, { headers })
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        res.json("Something wrong happend during the request!");
      });
  }
});
```

#### Route '/field_images'
In this route, we will retrieve all the images from one satellite monitored field. In the first step, we will do a `GET` request with AXIOS to the Leaf API endpoint that will return to us the information about the field selected, with this endpoint, we can get the field coordinates and send to the frontend, so we can plot the images in the right point of the map. In the second step,  we will do a `GET` request with AXIOS to the Leaf API endpoint that is responsible to return the images about the field selected, after receiving the images, we will sort them by the date, and we will save in another array just the images that are of the type `NDVI_RELATIVE` or `RGB`, that are the ones we are interested now.
```js
app.post("/field_images", (req, res) => {
  if (!token) {
    res.json("Invalid token, generate one first!");
  } else {

    // This comes from the frontend form.
    let field_id = req.body.id;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;

    let endpoint =
      "https://api.withleaf.io/services/satellite/api/fields/" + field_id;
    let headers = { Authorization: `Bearer ` + token };

    let field_geometry;

    // First step
    axios
      .get(endpoint, { headers })
      .then(function (response) {
        if (response.data <= 0) {
          res.json("No images were found for the time and field selected");
        } else {

          // Get the field coordinates
          field_geometry = response.data.geometry.coordinates;

          endpoint =
            "https://api.withleaf.io/services/satellite/api" +
            "/fields/" +
            field_id +
            "/processes";

          let params = { startDate: startDate, endDate: endDate };
          headers = { Authorization: `Bearer ` + token };

          // Second step
          axios
            .get(endpoint, { headers, params })
            .then(async function (response) {
              let data_obj = [];
              data_obj = response.data;
              if (data_obj.length > 0) {

                // Here are creating an Date Object with the date string that comes
                // from the API return, so we can sort the days by the date.
                data_obj.forEach((e) => {
                  e.date = new Date(e.date);
                });

                // Sorting the days by the dates.
                let sorted_days = data_obj.sort(
                  (objA, objB) => Number(objB.date) - Number(objA.date)
                );

                // This is the variable that we will fill and return in the request.
                let providerPNG = [];

                sorted_days.forEach((e) => {
                  // Checking if the clouds coverage of that image is less than 80%.
                  if (e.clouds < 80) {
                    let day = {
                      id: e.id,
                      date: e.date,
                      clouds: e.clouds,
                      coverage: e.coverage,
                      provider: e.provider,
                      images: [],
                    };
                    // For each image of each day, we will check if the image is of
                    // the type 'NDVI_RELATIVE' or 'RGB', if yes, we push it to the
                    // providerPNG array.
                    e.images.forEach((f) => {
                      if (
                        f.type === "png" &&
                        (f.url.includes("NDVI_relative.png") ||
                          f.url.includes("RGB.png"))
                      ) {
                        day.images.push(f);
                      }
                    });
                    providerPNG.push(day);
                  }
                });

                // Checking if the length of providerPNG is greater then 0, if yes, 
                // return the images and the field geometry.
                if (providerPNG.length > 0) {
                  res.json({ geometry: field_geometry, images: providerPNG });
                } else {
                  res.json(
                    "No images were found for the time and field selected"
                  );
                }
              } else {
                res.json(
                  "No images were found for the time and field selected"
                );
              }
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  }
});
```
[Here](/docs/docs/satellite_endpoints#get-images-of-satellite-field) you can see the Satellite documentation.

#### Route '/create_field'
In this route, we will receive data from the frontend and make a `POST` request with AXIOS to the Leaf API endpoint responsible for creating satellite monitored fields. Before trying to reach the Leaf API endpoint, we need to verify if the GEOJSON that comes from the frontend is valid, so we will not make irregular post requests to the endpoint.
You can check [here](https://geojson.org/) more info about GEOJSON.
```js
app.post("/create_field", (req, res) => {
  if (!token) {
    res.json("You have to login first!");
  } else {
    // This comes from the frontend form.
    let field_name = req.body.field_name;
    let boundery_type = req.body.boundery_type;
    let field_boundery = req.body.field_boundery;
    let days_before = req.body.days_before;

    // A function to try to parse the form geojson data to a object.
    function isJsonString(str) {
      try {
        field_boundery = JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }

    if (!isJsonString(field_boundery)) {
      res.json(
        "Error during compiling your geojson, try again with valid data."
      );
    } else {
      let endpoint = "https://api.withleaf.io/services/satellite/api/fields";
      let headers = { Authorization: `Bearer ` + token };

      // Define the DATA object that we will send in the POST request to
      // Leaf API endpoint.
      const data = {
        externalId: field_name,
        daysBefore: days_before,
        providers: [],
        geometry: {
          type: boundery_type,
          coordinates: [field_boundery],
        },
      };

      // Here is the AXIOS post, we will return 'Field created' if everything
      // was ok with the data and the field was created. If something is wrong
      // we return the message 'Something wrong happened, verify your data and
      // try again!'
      axios
        .post(endpoint, data, { headers })
        .then(function (response) {
          res.json("Field created");
        })
        .catch(function (error) {
          console.log(error);
          res.json("Something wrong happened, verify your data and try again!");
        });
    }
  }
});
```
[Here](/docs/docs/satellite_endpoints#create-a-satellite-field) you can see the Satellite documentation.

### Start the server
For the last part, we need to start our server, and make the front-end!
```js
app.listen(3000, async () => {
      console.log("Server started!");
});
```

## Frontend
In the frontend, we will need to use just one page! We define the page in the path: `/views/ejs/map.ejs`.  
In this part of the documentation, it will be show some functions that are used in the `map.ejs` file, some of this functions will be called via `onClick()` method from form buttons and others with [JQuerry](https://jquery.com/). It's important to say that we will use the [LeafletJS](https://leafletjs.com/) to display the map and images on it.

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
        success: function(response) {
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

### Load satellite monitored fields
This function is responsible to reach our backend and give us back the list of the avaiable satellite monitored fields. After receiving them you can show it to the user to choose which one he wants to see images.
```js
function loadFields() {
  $.ajax({
    type: "GET",
    url: "/monitored_fields",
    success: function (response) {
      let fields = response;
      // Display this information in a list, or something like that so the user can choose.
    },
  });
}
```

### Load the images for a specific field
This function is reponsible to reach our backend in the route that is responsible for reaching out the Leaf API endpoint that returns the satellite images for a specific field. After our backend return to us the list of the images, we need to retrieve the coordinates of that field from the backend response, and also the images. With the geometry, we can create a GEOJSON layer, to display the bounds of the field, and with the images we can plot them in the map.
```js
function searchField() {
  let id = $("input#id").val();
  let startDate = $("#startDate").val();
  let endDate = $("#endDate").val();
  $.ajax({
    type: "POST",
    url: "/field_images",
    data: {
      id: id,
      startDate: startDate,
      endDate: endDate,
    },
    success: function (response) {
      if (response == "No images were found for the time and field selected") {
      } else {
        let images = response;

        // Retrieve the field geometry from the backend response.
        var geometry = images.geometry[0][0];

        // Create a object containing the field coordinates to create a Leaflet Layer.
        var json = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              geometry
            ],
          },
        };

        // Clear all the bounds created in the bounds group layer
        bounds.clearLayers();
        // Clear all the images created in the imagens group layer
        imagens.clearLayers();

        // Create the geoJson layer of LeafletJS.
        var geoJsonLayer = L.geoJson(json).addTo(bounds);

        // Saving the bounds of the field from the geoJsonLayer
        var boundsgeo = geoJsonLayer.getBounds();
        // Make the map fly to the right coordintes of the field.
        map.flyTo([geometry[0][1], geometry[0][0]], 15);

        // Checking if are any avaiable images and for each image
        // save the url of the image and the bound of the field in
        // the allImages array.
        if (images.images.length > 0) {
          images.images.forEach((e) => {
            e.images.forEach((f) => {
              let img = {
                imageUrl: f.url,
                bounds: boundsgeo,
              };
              allImages.push(img);
            });
          });
        }
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
}

```

### Show and hide map layers
With this function, we will receive an url from the parameter when the user clicks in the image he wants to see, and then we will display that image.
```js
function showImage(url) {
    // Clear all the images from the imagens group layer, so only one
    // image will be display.
    imagens.clearLayers();

    // If you remember, in the allImages array, we saved all the
    // images url, and the bounds of the fields. So when we receive
    // one url in the parameter, we will search the url in the array
    // and if it is a valid url, we will retrieve the bounds and then
    // display the image in the map.
    allImages.forEach((e) => {
        if (e.imageUrl === url) {
            L.imageOverlay(e.imageUrl, e.bounds).addTo(imagens);
        }
    })
};
```

### Extra
In this case, we are using the LeafletJS library, so we need to create or map, and add the base layers we want. We will add a layer for the [OpenStreetMap](https://www.openstreetmap.org/) basemap, and one for the [Mapbox](https://www.mapbox.com/) basemap. To use the MapBox basemap without creating an map variable to it, we need to setup our MapBox token in one variable and then reach the mapbox url passing our token.

```js
// OpenStreetMap Layer.
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; OpenStreetMap contributors'
});

var token = 'YOUR MAPBOX TOKEN';

// MapBox Layer.
var mapBox = L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?' +
    'access_token=' + token, {
        maxZoom: 21,
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © ' +
            '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

// Create the Map variable.
var map = L.map('map', {
    center: [0, 0],
    zoom: 3,
    layers: [osm, mapBox]
});

//Group layers for the images and the bounds.
var imagens = L.layerGroup().addTo(map);
var bounds = L.layerGroup().addTo(map);

// The base maps.
var baseMaps = {
    "OpenStreetMap": osm,
    "MapBox": mapBox
};

// Create the base maps control in the map
var layerControl = L.control.layers(baseMaps).addTo(map);
```
See [here](https://docs.mapbox.com/) more informations about Mapbox!  
See [here](https://leafletjs.com/) more informations about LeafletJS!

:::tip
Here you can run a live use case demo!

[![Edit satellite-field-images](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/leaf-api-sattelite-images-9hd3hb)
:::
