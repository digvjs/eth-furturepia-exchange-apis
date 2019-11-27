var express = require('express');
var router = express.Router();
var accountController = require('../../controllers/accountController');

router.post('/create', accountController.createAccount);
router.post('/get', accountController.getAccount);
router.post('/balance', accountController.getTokenBalance);
router.post('/transfer', accountController.transfer);
router.post('/transferToken', accountController.transferToken);

module.exports = router;
