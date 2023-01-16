---
title: How to get satellite field images
description: How to get satellite field images
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## About

This use case describes how to get the satellite field images and display them on [Leaflet JS](https://leafletjs.com/).

### Register

To register with Leaf:

- Go to [registration link](https://withleaf.io/registration/) and create your account.
- Save your credentials to use in the next steps.

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

#### Route '/create_token'

In this route, we will create the user token to use in the next steps. In the `data` object,
we need the attributes `username` and `password` that comes from a form in the front-end,
and the attribute `rememberMe` is optional.
We make a POST request with AXIOS to the Leaf API endpoint that is responsible to create our token,
if everything is ok, it will return an status code `200`, and the token will be returned to the user,
if anything is wrong, it will be catched by the `.catch()` function.

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
      // Return ok and the token to the frontend request
      res.json({ message: "Congrats! Login done!", token: token });
    })
    .catch((error) => {
      if (error.response.data.status === 400) {
        // If something wrong happens, returns login failed.
        res.json({ message: "Oops! Login failed!", token: "" });
      } else if (error.response.data.status === 401) {
        // If the credentials are wrong, returns that.
        res.json({ message: "Oops! Invalid credentials!", token: "" });
      }
    });
});
```

[Here](//authentication) you can see the Authentication documentation.

#### Route '/monitored_fields'

In this route, we will be able to retrieve all our satellite monitored fields. First we verify if the front-end request is sending a token in the Authorization header, if yes, we do a `GET` request with AXIOS to the Leaf API endpoint responsible to give us that information and then we return it to the frontend.

```js
app.get("/monitored_fields", (req, res) => {
  if (!req.header("authorization")) {
    res.json("Invalid token, generate one first!");
  } else {
    let token = req.header("authorization");
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

In this route, we will retrieve all the images from one satellite monitored field. In the first step, we will do a `GET` request with AXIOS to the Leaf API endpoint that will return to us the information about the field selected, with this endpoint, we can get the field coordinates and send to the frontend, so we can plot the images in the right point of the map. In the second step, we will do a `GET` request with AXIOS to the Leaf API endpoint that is responsible to return the images about the field selected, after receiving the images, we will sort them by the date, and we will save in another array just the images that are of the type `NDVI_RELATIVE` or `RGB`, that are the ones we are interested now.

```js
app.post("/field_images", (req, res) => {
  if (!req.header("authorization")) {
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
                // Here we are creating an Date Object with the date string that comes
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

[Here](//satellite_endpoints#get-images-of-satellite-field) you can see the Satellite documentation.

#### Route '/create_field'

In this route, we will receive data from the frontend and make a `POST` request with AXIOS to the Leaf API endpoint responsible for creating satellite monitored fields. Before trying to reach the Leaf API endpoint, we need to verify if the GEOJSON that comes from the frontend is valid, so we will not make irregular post requests to the endpoint.
You can check [here](https://geojson.org/) more info about GEOJSON.

```js
app.post("/create_field", (req, res) => {
  if (!req.header("authorization")) {
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

[Here](//satellite_endpoints#create-a-satellite-field) you can see the Satellite documentation.

### Start the server

For the last part, we need to start our server, and make the front-end!

```js
app.listen(3000, async () => {
  console.log("Server started!");
});
```

## Frontend

In the frontend, we will use the Angular Framework!
It's important to say that we will use the [LeafletJS](https://leafletjs.com/) to display the map and images on it.

### Creating the project

To create our project, we can use this command from angular `ng new <your app name>`. This command will ask some questions about the project and them create all the files and folder structure to our project.

### Creating the component

After doing this step, we will need to create our `Map Component`, to do this you can use also this command from angular: `ng generate component <component-name>`, this will generate 3 files for your component: The CSS File for your component, the HTML file, and the TS file, where the logic will be.

In our HTML we will have three simple forms to get the information that we need, and with that information we will proccess and send to our service, that will communicate with our API, e will have one `<div>` that will contain our map, and our sidebar.

### Creating the service

To create our service that will communicate with our API, we will use the command `ng generate service <service-name>`, this will generate the file responsible.

In the next steps, it will be demonstrated how to do every step until we show the images in the map.

### Main functions

#### Initializing the forms and the map

This is our function that will be called automatically by angular when the page is started, it initializes the map with the sidebar in the function `initMap()` and also initialize the forms that we need. Don't forget that you need to set the GETTERS and SETTERS for each attribute defined below, so you can retrieve and change the value.

```js
ngOnInit(): void {
    this.initMap();
    localStorage.removeItem('token');
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    this.searchImagesForm = new FormGroup({
      fieldId: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
    });
    this.createFieldForm = new FormGroup({
      fieldId: new FormControl(''),
      daysBefore: new FormControl(''),
      bounderyType: new FormControl(''),
      fieldBoundery: new FormControl(''),
      provider: new FormControl(''),
    });
  }
```

#### Login

This function will be called by our button in the form, we need to retrieve the information from the form using the getters and then send it to our service, that will add our token to the header and send to the back-end.

```js
doLogin() {
    this.isLoading = true;
    // Using the email and password getters:
    let email = this.getEmail().value;
    let password = this.getPassword().value;
    // You could also do this way:
    // this.loginForm.get('email')!.value
    if (email === '' || password === '') {
      this.isLoading = false;
      // You can do some validations here
    } else {
      // Calling a function from our appService, sending the email and password
      // that will be redirected to the back-end.
      this.appService.login(email, password).subscribe((data) => {
        this.isLoading = false;
        this.loginMessage = data.message;
        if (data.message === 'Congrats! Login done!') {
          // Saving our token that the back-end send back to us
          // for the next steps
          this.isLogged = true;
          localStorage.setItem('token', data.token);
        } else {
          this.isLogged = false;
        }
      });
    }
  }
```

In our service, we will define the function login()

```js
login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'create_token', {
      email: email,
      password: password,
    });
  }
```

#### Load satellite monitored fields

This function is responsible to reach our backend and give us back the list of the available satellite monitored fields. After receiving them you can show it to the user to choose which one he wants to see images.

```js
loadCreatedFields() {
    this.isLoading = true;
    // Sending our token that we retrieved in the first step.
    this.appService
      .loadFields(localStorage.getItem('token')!)
      .subscribe((data) => {
        this.isLoading = false;
        this.fields = data;
      });
  }
```

In our service, we will define the function loadFields()

```js
loadFields(token: string): Observable<any> {
    // Setting our token in the Authorization header so we
    // can send it to the back-end
    let headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<any>(this.apiUrl + 'monitored_fields', { headers });
  }
```

#### Load the images for a specific field

This function is reponsible for getting the form information and send to our back-end that will return the satellite images for a specific field. After our backend return to us the list of the images, we need to retrieve the coordinates of that field from the backend response, and also the images. With the geometry, we can create a GEOJSON layer, to display the bounds of the field, and with the images we can plot them in the map.

```js
loadFieldImages() {
    this.isLoading = true;
    this.images = [];
    let fieldId = this.getFieldId()!.value;
    let startDate = this.getStartDate()!.value;
    let endDate = this.getEndDate()!.value;
    if (fieldId === '' || startDate === '' || endDate === '') {
      this.loadImagesMessage = 'You need to fill all the inputs.';
      this.isLoading = false;
    } else {
      this.appService
        .loadImages(fieldId, startDate, endDate, localStorage.getItem('token')!)
        .subscribe((data) => {
          this.isLoading = false;
          this.loadImagesMessage = '';
          if (
            data === 'No images were found for the time and field selected' ||
            data === 'Request failed with status code 404'
          ) {
            // Here you can show something to the user if no images were found
            this.images = [];
            this.loadImagesMessage = data;
          } else {
            this.images = [];
            this.images = data.images;

            // Save the field geometry from the response.
            let geometry = data.geometry[0][0];

            // Create a object containing the field coordinates to create a Leaflet Layer.
            let json = {
              type: 'Feature' as GeoJsonTypes,
              geometry: {
                type: 'Polygon',
                coordinates: [geometry],
              },
            };

            // Create a object that will define the style of the polygon
            let polygonStyle = {
              weight: 2,
              opacity: 1,
              fill: false,
              'fill-opacity': 0,
            } as L.GeoJSONOptions;

            // Clear all the bounds created in the bounds group layer
            this.bounds.clearLayers();
            // Clear all the images created in the imagens group layer
            this.imagens.clearLayers();

            // Create the geoJson layer of LeafletJS.
            let geoJsonLayer = L.geoJson(json, polygonStyle).addTo(this.bounds);

            // Saving the bounds of the field from the geoJsonLayer
            let geoBounds = geoJsonLayer.getBounds();

            // Make the map fly to the right coordintes of the field.
            this.map.flyTo(geoJsonLayer.getBounds().getCenter(), 15);

            // Checking if are any avaiable images and for each image
            // save the url of the image and the bound of the field in
            // the images array
            this.images.forEach((e: any) => {
              e.images.forEach((f: any) => {
                f.bounds = geoBounds;
                f.date = e.date.substring(11, 23);
                if (e.provider === 'sentinel') {
                  f.imgtype = f.url.split('/0/')[1].split('.')[0].split('_')[0];
                } else if (e.provider === 'planet') {
                  f.imgtype = f.url
                    .split('_SR.tif/')[1]
                    .split('.')[0]
                    .split('_')[0];
                } else {
                  f.imgtype = 'not supported';
                }
              });
              e.date = e.date.substring(0, 10);
            });
          }
        });
    }
  }
```

In our service, we will define the function loadImages()

```js
loadImages(fieldId: any, startDate: any, endDate: any, token: string): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', token);
    return this.http.post<any>(
      this.apiUrl + 'field_images',
      {
        id: fieldId,
        startDate: startDate,
        endDate: endDate,
      },
      { headers }
    );
  }
```

#### Show and hide map layers

With this function, we will receive an url from the parameter when the user clicks in the image he wants to see, and then we will display that image.

```js
function showImage(url) {
  // Clear all the images from the imagens group layer, so only one
  // image will be displayed.
  imagens.clearLayers();

  // If you remember, in the images array, we saved all the
  // images url, and the bounds of the fields. So when we receive
  // one url in the parameter, we will search the url in the array
  // and if it is a valid url, we will retrieve the bounds and then
  // display the image in the map.
  this.images.forEach((e: any) => {
    e.images.forEach((f: any) => {
      if (f.url === url) {
        L.imageOverlay(f.url, f.bounds).addTo(this.imagens);
      }
    });
  });
}
```

### Extra

In this case, we are using the LeafletJS library, so we need to create our map, and add the base layers we want. We will add a layer for the [OpenStreetMap](https://www.openstreetmap.org/) basemap, and one for the [Mapbox](https://www.mapbox.com/) basemap. To use the MapBox basemap without creating an map variable to it, we need to setup our MapBox token in one variable and then reach the mapbox url passing our token.

```js
private initMap(): void {
    // Create the Map variable.
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });

    // OpenStreetMap Layer.
    const osm = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    let token = "YOUR MAPBOX TOKEN";

    // MapBox Layer.
    const mapBox = L.tileLayer(
      'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=' +
        token,
      {
        maxZoom: 21,
        tileSize: 512,
        zoomOffset: -1,
        attribution:
          '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    osm.addTo(this.map);
    mapBox.addTo(this.map);

    // The base maps.
    const baseMaps = {
      OpenStreetMap: osm,
      MapBox: mapBox,
    };

    //Group layers for the images and the bounds.
    this.imagens = L.layerGroup().addTo(this.map);
    this.bounds = L.layerGroup().addTo(this.map);

    // Create the base maps control in the map
    const layerControl = L.control.layers(baseMaps).addTo(this.map);

    // The sidebar options
    var options: L.SidebarOptions = {
      container: 'sidebar',
      position: 'left',
    };

    // Creating the sidebar
    var sidebar = L.control.sidebar(options);

    // Adding the sidebar to the map
    this.map.addControl(sidebar);
  }
```

See [here](https://docs.mapbox.com/) more informations about Mapbox!  
See [here](https://leafletjs.com/) more informations about LeafletJS!

:::tip
[Here](https://stackblitz.com/edit/node-m3hnvp?file=README.md) you can run a live use case demo!
:::
