const express = require('express');
const counterApp = express();
const count = 0;

counterApp.use(express.static(__dirname + "/public"));

counterApp.post("/increment", function(response, next) {
    
    response.send(respose.json(count));
});

counterApp.post("/decrement", function(requestAnimationFrame, response, next) {
    response.send('counter' - '1');
});

counterApp.get("/value", function(requestAnimationFrame, response, next) {
    response.send("Looking good!");
});

counterApp.listen(3000, function() {
    console.log('My server is listening on port 3000!')
});



