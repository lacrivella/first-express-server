const express = require('express');
const app = express();
const itemRoutes = require('./routes/items');

app.use(express.json());

const pathWay = '/api/v1/birds';

app.use(pathWay, itemRoutes);

module.exports = app;