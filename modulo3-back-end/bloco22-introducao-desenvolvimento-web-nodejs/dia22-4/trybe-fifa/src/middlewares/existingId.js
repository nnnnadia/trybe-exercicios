const teams = require('../data/teamsFile');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.locals.team = team;
    next();
  } else {
    res.sendStatus(400);
  }
};

module.exports = existingId;