const express = require('express');

const pingPong = express();

pingPong.get("/ping", function(request, response) {
    response.send("pong");
});

pingPong.listen(3001, function() {
    console.log('Port 3001 ready and listening!')
});