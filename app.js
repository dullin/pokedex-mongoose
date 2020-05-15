var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

const Pokemon = require("./models/Pokemon")
const routes = require("./routes")

mongoose
  .connect("mongodb://localhost:27017/pokedex", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected')
  })

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", routes);



module.exports = app;
