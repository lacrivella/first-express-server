const express = require('express');
const app = express();
const itemRoutes = require('./routes/items');

app.use(express.json());

app.use(itemRoutes);

module.exports = app;