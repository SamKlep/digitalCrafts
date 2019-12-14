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

db.query('CREATE * FROM artists')
  .then(function (results) {
    results.forEach(function (artists) {
      console.log(artists.ID, artists.NAME);
    });
  });

  pgp.end()