const express = require('express');

const server = express();

server.get('/', (req, res) =>{
    return res.json({mensage: "Opaaaaaa"});
});

server.listen(3333);
