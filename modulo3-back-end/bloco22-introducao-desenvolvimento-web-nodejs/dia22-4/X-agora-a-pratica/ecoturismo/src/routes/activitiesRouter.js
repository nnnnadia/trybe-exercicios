const express = require('express');
const { validateName } = require('../middlewares');
const router = express.Router();

router.post('/', validateName, (req, res) => {
  return res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = router;