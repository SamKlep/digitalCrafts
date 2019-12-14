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

//var biz = {name: "The Squeezed Apple"}; 
//var q = "INSERT INTO albums \
  //VALUES (default, ${name})";
//db.result(q, biz)
  //.then(function (result) {
    //console.log(result);
  //});

  db.result("INSERT INTO songs \
  VALUES (13, 'I like crunchy soft', '5:33', 2, 9)")
  .then(function (result) {
    console.log(result);
  });

  pgp.end();