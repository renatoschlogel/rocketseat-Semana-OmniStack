const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://renato:renato@cluster0-14h8x.mongodb.net/omnistack8?retryWrites=true&w=majority', {
   useNewUrlParser: true 
});

server.use(express.json()); // para trabalhar com Json 
server.use(routes);

server.listen(3333);
