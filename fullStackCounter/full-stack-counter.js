const express = require("express");
const serverApp = express();
const axios = require('axios');

let counter = 0;

serverApp.use(express.static(__dirname + '/public'));


serverApp.post("/increment", function(request, response) {
    counter++;
    response.send(counter.toString());
});

serverApp.post("/decrement", function(request, response) {
    counter--;
    response.send(counter.toString());
});

serverApp.get("/value", function(request, response) {
    response.send(counter.toString());
});

serverApp.listen(3000, function() {
    console.log("My Server is listening on port 3000!");
});