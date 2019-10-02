const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://renato:renato@cluster0-14h8x.mongodb.net/omnistack9?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true 
});


app.use(express.json());
app.use(routes);


app.listen(3333);