const express = require('express');

const router = express.Router();

const indexController = require('../controllers/site');

router.get('/', indexController);


module.exports = router;