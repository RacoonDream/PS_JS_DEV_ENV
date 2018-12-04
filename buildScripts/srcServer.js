// ES5
/* var express = require('express');
var path = require('path');
var open = require('open');

var port=3000;
var app = express(); */

// ES6
import express from 'express';
//import cors from 'cors';
import { join } from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import setDefaultBrowser from 'set-default-browser';

const port=3000;
const app = express();
const compiler= webpack(config);


// configure express to use webpack
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

//app.use(cors());

app.get('/',function(req,res){
  res.sendFile(join(__dirname,'../src/index.html'));
});

app.get('users',function(req,res){
  res.json([
    {"id":1,"firstName":"Max","lastName":"Ray","email":"idk@hh.com"},
    {"id":2,"firstName":"Kochu","lastName":"TV","email":"idk@hh.com"},
    {"id":3,"firstName":"Pikachu","lastName":"poke","email":"idk@hh.com"}
  ]
  );
})

setDefaultBrowser("chrome");

app.listen(port,function(err){
  if(err){
          console.log(err);
  }
  else{
    open('http://localhost:' +port);
  }
});
