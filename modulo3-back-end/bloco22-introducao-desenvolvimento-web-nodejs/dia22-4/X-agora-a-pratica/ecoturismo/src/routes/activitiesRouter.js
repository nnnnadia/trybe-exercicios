const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  return res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = router;