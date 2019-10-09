const express = require('express');

const wordsController = require('../controllers/wordController');
const router = express.Router();

router.get('/words', wordsController.get_all);

module.exports = router;
