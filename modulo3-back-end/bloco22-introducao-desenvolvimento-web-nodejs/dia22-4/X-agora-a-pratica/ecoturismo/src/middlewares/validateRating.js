const validateRating = (req, res, next) => {
  const { rating } = req.body.description;
  const dateRegExp = /[1-5]/i;
  if (!dateRegExp.test(rating)) return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  next();
};

module.exports = validateRating;