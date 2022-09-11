const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const difficultyRegExp = /(?:fácil|médio|difícil)/i;
  if (!difficultyRegExp.test(difficulty)) return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  next();
};

module.exports = validateDifficulty;