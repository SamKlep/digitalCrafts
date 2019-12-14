const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

let order = [
    {
        id: 1,
        name: 'James',
        drink: 'Coffee'
    },
    {
        id: 2,
        name: 'John',
        drink: 'Latte'
    }
];

// GET /api/orders
app.get("/api/orders", function (request, response, next) {
    response.json(order);
});

// POST method route
app.post("/api/orders", function (req, res) {
    res.send('POST request to the homepage')
  })

app.listen(3003, function () {
    console.log("Coffee API is now listening on port 3003...");
});