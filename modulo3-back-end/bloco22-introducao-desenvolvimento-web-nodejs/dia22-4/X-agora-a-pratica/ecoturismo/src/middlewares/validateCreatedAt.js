const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;
  const dateRegExp = /[0-3]\d\/[0-1]\d\/[1-2]\d\d\d/i;
  if (!dateRegExp.test(createdAt)) return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  next();
};

module.exports = validateCreatedAt;