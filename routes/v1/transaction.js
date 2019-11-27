var express = require('express');
var router = express.Router();
const { validateBody, schemas } = require('../../services/validator');
var transactionController = require('../../controllers/transactionController');

router.post('/getBlock', validateBody(schemas.trx.getBlock), transactionController.getBlock);

module.exports = router;
