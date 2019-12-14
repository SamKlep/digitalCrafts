const promise = require('bluebird')

// pg-promise initialization options:
const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise, 
};

// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'music',
    user: 'postgres'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);
// Create the database instance:
const db = pgp(config);

var biz = {name: "Fruit Evanglists"}; 
var q = "INSERT INTO artists \
  VALUES (5, ${name})";
db.result(q, biz)
  .then(function (result) {
    console.log(result);
  });

  //db.result("INSERT INTO artists \
  //VALUES (5, 'Fruit Evanglists')")
  //.then(function (result) {
    //console.log(result);
  //});

  pgp.end();