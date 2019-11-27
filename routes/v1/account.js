var express = require('express');
var router = express.Router();
const { validateBody, schemas } = require('../../services/validator');
var accountController = require('../../controllers/accountController');

router.post('/create', validateBody(schemas.account.createAccount), accountController.createAccount);
router.post('/get', validateBody(schemas.account.getAccount), accountController.getAccount);
router.post('/balance', validateBody(schemas.account.getTokenBalance), accountController.getTokenBalance);
router.post('/transfer', validateBody(schemas.account.transfer), accountController.transfer);
router.post('/transferToken', validateBody(schemas.account.transferToken), accountController.transferToken);

module.exports = router;
