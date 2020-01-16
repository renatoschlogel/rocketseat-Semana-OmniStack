const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://renato:renato@cluster0-14h8x.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);


// Tipo de Parametros:
// Query parms  : request.query
// Routes Param : request.params
// Body         : request.body




app.listen(3333);
