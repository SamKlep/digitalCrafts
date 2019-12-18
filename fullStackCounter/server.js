const express = require("express");
const app = express();
const promise = require('bluebird');

// pg-promise initialization options:
const initOptions = {
  // Use a custom promise library, instead of the default ES6 Promise:
  promiseLib: promise,
};
// Database connection parameters:
const config = {
  host: 'localhost',
  port: 5432,
  database: 'fullStackCounter',
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



app.use(express.static(__dirname + '/public'));

app.get("/value", function (req, response) {
  db.one("SELECT SUM(current_count) AS current_count FROM counter")
    .then(function (result) {
      console.log(result);
      response.send(result.count_sum);
    });
});

app.get("/increment", function (req, response) {
  db.one(`INSERT INTO counter("current_count") VALUES(1);
  SELECT SUM()current_count) VALUES(1); SELECT SUM(current_count) AS count_sum FROM counter`)
  .then(function(result) {
    console.log(result);
    response.send(result.count_sum);
  });
});

app.get("/reset", function (req, response) {
  db.result(`INSERT INTO counter(current_count)
  VALUES (0 - SELECT SUM(current_count)) AS count_sum FROM counter))`)
  .then(function(result) {
    response.json(0);
  })
});


app.get("/decrease", function (req, response) {
  response.send(counter.toString());
});

pgp.end();

app.listen(3006, function () {
  console.log("server listening on port 3006");
});