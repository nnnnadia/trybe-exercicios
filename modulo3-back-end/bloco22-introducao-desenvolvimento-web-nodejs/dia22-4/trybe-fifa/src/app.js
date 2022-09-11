const express = require('express');
const { validateTeam, existingId } = require('./middlewares');
const teams = require('./data/teamsFile');

const app = express();

let nextId = 3;

app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const team = res.locals.team;
  res.status(200).json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = res.locals.team;
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', (req, res) => {
  const team = res.locals.team;
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(200);
});

module.exports = app;
