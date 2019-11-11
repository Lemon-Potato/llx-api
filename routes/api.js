const express = require('express');
const router = express.Router();

const controller = require('../controller');

router.get('/some', controller.userControlelr.some);

// 正式开工
router.get('/auth/getRuleMenu', controller.authControlelr.getRuleMenu);
router.get('/auth/addUserRule', controller.authControlelr.addUserRule);
router.get('/auth/getAllRule', controller.authControlelr.getAllRule);
router.get('/auth/getAllGroup', controller.authControlelr.getAllGroup);
router.get('/auth/getGroupInfo', controller.authControlelr.getGroupInfo);


module.exports = router;