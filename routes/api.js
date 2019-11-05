const express = require('express');
const router = express.Router();

const controller = require('../controller');

router.get('/some', controller.userControlelr.some);

module.exports = router;