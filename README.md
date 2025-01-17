# Documentation
Leaf's documentation

## About
This documentation website was built using [Docusaurus 2][1]

### Installation
```
$ npm install
```

or if you are having problems with dependency conflicts:
```
$ npm install --legacy-peer-deps
```

### Local Development
This commmand starts a local server with auto reload enabled. Every time you
save a file it will refresh the page in the browser.

```
$ npm run swizzle docusaurus-lunr-search SearchBar
$ npm start
```

### Build
The search bar only works on the production build. That is because only the
production build generates the data index that is searched. For more info,
please check [here][2].

To build it:
```
$ npm run build
$ npx http-server ./build
```


[1]: https://v2.docusaurus.io/
[2]: https://github.com/lelouch77/docusaurus-lunr-search
