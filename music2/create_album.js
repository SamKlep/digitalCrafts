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

var biz = {name: "The Squeezed Apple"}; 
var q = "INSERT INTO albums \
  VALUES (2, ${name}, 1998, 'Epic','Grunge', 4)";
db.result(q, biz)
  .then(function (result) {
    console.log(result);
  });

  //db.result("INSERT INTO albums \
  //VALUES (2, 'The Squeezed Apple', 1998, 'Epic','Grunge', 4)")
  //.then(function (result) {
    //console.log(result);
  //});

  pgp.end();