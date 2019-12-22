const express = require("express");
const bodyParser = require("body-parser");
const promise = require('bluebird')

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// pg-promise initialization options:
const initOptions = {
  // Use a custom promise library, instead of the default ES6 Promise:
  promiseLib: promise, 
};
// Database connection parameters:
const config = {
  host: 'localhost',
  port: 5432,
  database: 'todoLIst',
  user: 'postgres'
};
// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);
// Create the database instance:
const db = pgp(config);

pgp.end()

let counter = 1;
let todoList = [
  {
    id: 1,
    todo: "Implement a REST API"
  }
];

// GET /api/todos
app.get("/api/todos", function (request, response, next) {
  response.json(todoList);
});

// GET /api/todos/:id
//app.get("/api/todos/:id", function (request, response, next) {
  //let todoItem = todoList.find(function (element) {
    //return element.id.toString() === request.params.id;
  //});

  //response.json(todoItem);
//});

app.get("/api/todos/:id", function (req, response) {
  db.one(`INSERT INTO todo_items("name") VALUES(1);`)
  .then(function(result) {
    console.log(result);
    response.send(result.name);
  });
});

// POST /api/todos
app.post("/api/todos", function (request, response, next) {
  counter++;

  let todoItem = request.body;
  /*
  todoItem = {
    key1: value1,
    key2: value2,
    key3: value3,
    key4: value4
  }
  */
  todoItem = { id: counter, ...todoItem }; // note we are using the spread operator (...)

  todoList.push(todoItem);

  response.json(todoItem);
});

// PUT /api/todos/:id
app.put("/api/todos/:id", function (request, response, next) {
  let todoItem = todoList.find(function (element) {
    return element.id.toString() === request.params.id;
  });

  //   let newPropertyEntries = Object.entries(request.body)[0]; // just the first key/value pair
  //   todoItem[newPropertyEntries[0]] = newPropertyEntries[1];

  if (typeof todoItem == 'undefined') {
    response.json('you F up');
  }
  
  var newTodoData = request.body;
  var newTodoKeys = Object.keys(newTodoData); // ["todo", "todo2"]

  newTodoKeys.forEach(function (key) {
    todoItem[key] = newTodoData[key];
  });

  response.json(todoItem);
});

// DELETE /todo/:id
app.delete('/todo/:id', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(3007, function () {
  console.log("Todo List API is now listening on port 3007...");
});