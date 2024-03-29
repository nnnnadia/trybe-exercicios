const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');

const app = express();

app.use(express.json());
app.use('/activities', activitiesRouter);

module.exports = app;