const express = require('express');
const { validateName, validatePrice, validateDescription } = require('../middlewares');
const router = express.Router();

router.post('/', validateName, validatePrice, validateDescription, (req, res) => res.status(201).json({ message: 'Atividade cadastrada com sucesso' }));

module.exports = router;