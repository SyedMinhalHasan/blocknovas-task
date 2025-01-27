const express = require('express');
const router = express.Router();

//------------ Importing Controllers ------------//
const CurrencyController = require('../controllers/currencyController')

router.post('/', CurrencyController.convert);

module.exports = router;