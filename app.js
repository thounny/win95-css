//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

var favicon = require("serve-favicon");
var path = require("path");

app.use(favicon(path.join(__dirname, "/public", "favicon.gif")));



app.listen(3000);