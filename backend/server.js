const express = require('express');

const server = express();

server.get("/", function(require, response)
{
    return response.send("ok")
}

);

server.listen(8080, function(){
    console.log("server start");
});