const express = require('express');

const routes = require('./routes');

const app = express();

// Load routes disini
app.use(routes);

module.exports = app;
