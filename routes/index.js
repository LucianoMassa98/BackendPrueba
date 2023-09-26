const express = require('express');
const tareasRouter = require('./tareas.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/tareas', tareasRouter);
}
module.exports = routerApi;
