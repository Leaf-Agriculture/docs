---
title: Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## File Conversion

If you want to allow users to upload machine files directly to your dashboard
or to convert recommendations to a machine-readable format or have another use
that requires file conversion, these converters will help.

**Roadmap**

Today, you have the option to use these converters:

- [Shapefile -> ISOXML](#shapefile---isoxml)
- [CNHI .cn1 -> GeoJSON](#cnhi---geojson)
- [Trimble -> GeoJSON](#trimble---geojson)
- [Shapefile -> GeoJSON](#shapefile---geojson)
- [GeoJSON -> Shapefile](#geojson---shapefile)

### Shapefile -> ISOXML

Send this along with your zipped shapefile

<Tabs
  defaultValue="sh"
  values={[
    { label: 'Python', value: 'python', },
    { label: 'Bash', value: 'shell', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
<TabItem value="python">

```python
import requests as req

url = 'https://a.agrigate.io/quickstart/api/files/shapefile/isoxml'
headers = {
    'Authorization': 'Bearer YOUR_TOKEN'
}
files = {'file': open('PATH/YOUR_FILE_NAME.zip','rb')}

r = req.post(url, headers=headers, files=files)
print(r.text)
```

</TabItem>
<TabItem value="shell">

```shell
curl \
-F 'file=@PATH/YOUR_FILE_NAME.zip' \
-H 'Authorization: Bearer YOUR_TOKEN' \
'https://a.agrigate.io/quickstart/api/files/shapefile/isoxml'
```

</TabItem>
<TabItem value="js">

```js
var request = require('request');

var headers = {
    'Authorization': 'Bearer YOUR_TOKEN'
};

var options = {
    url: 'https://a.agrigate.io/quickstart/api/files/shapefile/isoxml',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```

</TabItem>
</Tabs>



Returns status 200 and a TEXT link where you can download your converted file from

```json
{
  "uri": "https://leaf-isoxml.s3-us-west-2.amazonaws.com/output/3e1291e4-3026-4357-8bff-0e24feb79602.xml"
}
```

This endpoint will convert a shapefile to ISOXML to be read by a wide variety of machines.
This is commonly used for converting VRT prescription files to a machine readable format.

Note that the return is plain text, not json.

---


### CNHI -> GeoJSON

Send this along with your zipped file

<Tabs
  defaultValue="sh"
  values={[
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

<TabItem value="py">

```python
import requests as req

url = 'https://a.agrigate.io/quickstart/api/files/cnhi'
headers = {
'Authorization': 'Bearer YOUR_TOKEN'
}
files = {'file': open('PATH/YOUR_FILE_NAME.cn1.zip','rb')}

r = req.post(url, headers=headers, files=files)
print(r.text)
```
</TabItem>

<TabItem value="sh">

```shell
curl \
-F 'file=@PATH/YOUR_FILE_NAME.cn1.zip' \
-H 'Authorization: Bearer YOUR_TOKEN' \
'https://a.agrigate.io/quickstart/api/files/cnhi'
```
</TabItem>

<TabItem value="js">

```js
var request = require('request');

var headers = {
    'Authorization': 'Bearer YOUR_TOKEN'
};

var options = {
    url: 'https://a.agrigate.io/quickstart/api/files/cnhi',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
</TabItem>
</Tabs>



Returns status 200 and a link where you can download your converted file from

```json
{
  "uri": "https://cnhi-adapt-dev.s3-us-west-2.amazonaws.com/output/3190d2c5-1948-4621-92c5-6bb5c5d36ad1.json.gz"
}
```

  This endpoint will convert a CNHi .CN1 file to Leaf's geojson data model.
  To use, simply upload a zipped .CN1 folder.

---

### Trimble -> GeoJSON

We expect Trimble data to be a zipped folder containing AgData, that is files
with formats like: .agf (fields), .agi (implements), .agm (materials),
.agt (tasks) and .agv (vehicles).

Send this along with your zipped file

<Tabs
  defaultValue="sh"
  values={[
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

<TabItem value="py">

```python
import requests as req

url = 'https://a.agrigate.io/quickstart/api/files/trimble'
headers = {
'Authorization': 'Bearer YOUR_TOKEN'
}
files = {'file': open('PATH/YOUR_FILE_NAME.zip','rb')}

r = req.post(url, headers=headers, files=files)
print(r.text)
```

</TabItem>

<TabItem value="sh">

```shell
curl \
-F 'file=@PATH/YOUR_FILE_NAME.zip' \
-H 'Authorization: Bearer YOUR_TOKEN' \
'https://a.agrigate.io/quickstart/api/files/trimble'
```
</TabItem>

<TabItem value="js">

```js
var request = require('request');

var headers = {
    'Authorization': 'Bearer YOUR_TOKEN'
};

var options = {
    url: 'https://a.agrigate.io/quickstart/api/files/trimble',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```

</TabItem>
</Tabs>

Returns status 200 and a link where you can download your converted file from

```json
{
  "uri": "https://trimble-adapt-dev.s3-us-west-2.amazonaws.com/output/7fc72a96-86f6-4568-b730-a581f883509a.json.gz"
}
```

This endpoint will convert a Trimble file to Leaf's geojson data model.
To use, simply upload a zipped Trimble folder.

---

### Shapefile -> GeoJSON

Send this along with your zipped file

<Tabs
  defaultValue="sh"
  values={[
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

<TabItem value="py">

```python
import requests as req

url = 'https://a.agrigate.io/quickstart/api/converters/shapefile/geojson'
headers = {
    'Authorization': 'Bearer YOUR_TOKEN'
}
files = {'file': open('PATH/YOUR_FILE_NAME.zip','rb')}

r = req.post(url, headers=headers, files=files)
print(r.text)
```

</TabItem>
<TabItem value="sh">


```shell
curl \
-F 'file=@PATH/YOUR_FILE_NAME.zip' \
-H 'Authorization: Bearer YOUR_TOKEN' \
'https://a.agrigate.io/quickstart/api/converters/shapefile/geojson'
```

</TabItem>
<TabItem value="js">

```js
var request = require('request');

var headers = {
    'Authorization': 'Bearer YOUR_TOKEN'
};

var options = {
    url: 'https://a.agrigate.io/quickstart/api/converters/shapefile/geojson',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```

</TabItem>
</Tabs>

Returns status 200 and a TEXT link where you can download your converted (json) file from

```json
{
  "uri":
"https://converter-prod-conversionsbucket-somerandomstring.s3-us-west-2.amazonaws.com/somerandomstring.json"
}
```

The input file must be a zip file.
That is done because shapefile is a multi file standard.
It is usually a set of 4 files: .dbf, .prj, .shp and .shx.

The output file will be a GeoJSON file.

---

### GeoJSON -> Shapefile

Send this along with your (Geo)JSON

<Tabs
  defaultValue="sh"
  values={[
    { label: 'Python', value: 'py', },
    { label: 'Bash', value: 'sh', },
    { label: 'JavaScript', value: 'js', },
  ]
}>

<TabItem value="py">


```python
import requests as req

url = 'https://a.agrigate.io/quickstart/api/converters/geojson/shapefile/'
headers = {
    'Authorization': 'Bearer YOUR_TOKEN'
}
files = {'file': open('PATH/YOUR_FILE_NAME.json','rb')}

r = req.post(url, headers=headers, files=files)
print(r.text)
```

</TabItem>
<TabItem value="sh">

```shell
curl \
-F 'file=@PATH/YOUR_FILE_NAME.json' \
-H 'Authorization: Bearer YOUR_TOKEN' \
'https://a.agrigate.io/quickstart/api/converters/geojson/shapefile/'
```

</TabItem>
<TabItem value="js">

```js
var request = require('request');

var headers = {
    'Authorization': 'Bearer YOUR_TOKEN'
};

var options = {
    url: 'https://a.agrigate.io/quickstart/api/converters/geojson/shapefile/',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```

</TabItem>
</Tabs>

Returns status 200 and a TEXT link where you can download your converted file from

```json
{
  "uri":
"https://converter-prod-conversionsbucket-somerandomstring.s3-us-west-2.amazonaws.com/somerandomstring.zip"
}
```

The input file must be a .json GeoJSON file

The output file will be a zipped file.

---
