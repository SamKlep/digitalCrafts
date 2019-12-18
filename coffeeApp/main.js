const express = require("express");
const bodyParser = require("body-parser");
const promise = require('bluebird');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// pg-promise initialization options:
const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise,
};
// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'coffeeApp',
    user: 'postgres'
};
// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);
// Create the database instance:
//function handleQuery() {
//db.query(query);
//pgp.end();
//}
const db = pgp(config);

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

GET / api / orders
app.get("/api/orders", function (request, response, next) {
    response.json(order);
});

//app.get("/api/orders", function (req, response) {
//  db.one("SELECT SUM(current_count) AS current_count FROM counter")
//    .then(function (result) {
//      console.log(result);
//    response.send(result.count_sum);
//});
//});

// POST method route
app.post("/api/orders", function (req, res) {
    res.send('POST request to the homepage')
})

app.listen(3004, function () {
    console.log("Coffee API is now listening on port 3004...");
});