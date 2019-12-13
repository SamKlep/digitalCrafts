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

db.query('SELECT * FROM artists')
  .then(function (results) {
    results.forEach(function (artists) {
      console.log(artists.ID, artists.NAME);
    });
  });

  //expects one row or errors out
 // db.one("SELECT * FROM restaurant WHERE name='R1'")
  //.then(function (r)) {
    //console.log(r.id, r.name. r.address, r.category);
  //});

  //return the raw results, useful for insert update, and deletes
  //db.result("INSERT INTO restaurant \
  //VALUES (default, 'Narf')")
  //.then(function (result) {
    //console.log(result);
  //});

  //SQL Injection
//var name = "Big Belly Burger";
//var query = `INSERT INTO restaurant \
  //VALUES (default, '${name}')"`;
//db.result(query)
  //.then(function (result) {
    //console.log(result);
  //});

  //Santitize Your Inputs
  //var q = "INSERT INTO restaurant VALUES (default, $1)";
//db.result(q, name)
  //.then(function (result) {
    //console.log(result);
  //});

 // var biz = {name: "Lard Lad Donuts"};
//var q = "INSERT INTO restaurant \
  //VALUES (default, ${name})";
//db.result(q, biz)
  //.then(function (result) {
    //console.log(result);
  //});

  //closing your connection
  //pgp.end();