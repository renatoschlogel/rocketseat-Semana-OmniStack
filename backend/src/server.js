const express = require('express');

const server = express();

server.get('/', (req, res) =>{
    return res.send(`Ola DEV ${req.query.nome}!`);
});

server.listen(3333);
