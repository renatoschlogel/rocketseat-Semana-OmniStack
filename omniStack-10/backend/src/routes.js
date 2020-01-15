const { Router } = require('express');

const routes = Router();

routes.get('/users', (request, response) => {
    console.log(request.query);

    response.json({message: 'Opa'});
});

module.exports = routes
