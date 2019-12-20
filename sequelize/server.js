const express = require("express");
const app = express();
const models = require("./models");

app.get("/artist", function (req, response) {
    models.artist.findAll().then(function (artists){
        response.artist.send(artists);
    });
});

app.post("/artist", function (req, response) {
    models.artist.create({name: req.body.name, dob: req.body.dob}).then(function (artist))
})