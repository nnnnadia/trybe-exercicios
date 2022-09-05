const express = require('express');

const app = express();

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities/:id', (req, res) => {
  const { params } = req;
  const requestedActivity = activities.find(activity => activity.id === +params.id);
  res.status(200).json(requestedActivity);
});

app.get('/myActivities', (_req, res) => {
  res.status(200).json(activities);
});

app.get('/filter/myActivities', (req, res) => {
  const { query } = req;
  const filteredActivities = activities
    .filter(activity => activity.status === query.status)
  res.status(200).json(filteredActivities);
});

module.exports = app;