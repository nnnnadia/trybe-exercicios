const express = require('express');
const BookController = require('./controller');

const app = express();

app.use(express.json());

app.get('/books', BookController.getAll);

module.exports = app;