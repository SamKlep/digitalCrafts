const express = require('express');

const serverApp = express();

serverApp.use(express.static(__dirname + "/public"));

serverApp.get("/myapi/hello", function(requestAnimationFrame, response, next) {
    response.send("Whatever I want from the server");
});

serverApp.listen(3000, function() {
    console.log('My server is listening on port 3000!')
});



