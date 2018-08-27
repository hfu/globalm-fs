# globalm-fs
Global Map feature stream (PoC: proof of concept)

## Background
I want to create a feature stream (NDJSON of GeoJSON features) from Global Map data from [Global Map data archives](https://github.com/globalmaps).

## Install
```sh
$ git clone git@github.com:hfu/globalm-fs.git
$ cd globalm-fs
$ npm install
```

## Usage
```sh
$ nano config/default.hjson
$ node index.js
```

## See also
- [node-fetch](https://github.com/bitinn/node-fetch)
- [shapefile](https://github.com/mbostock/shapefile)
