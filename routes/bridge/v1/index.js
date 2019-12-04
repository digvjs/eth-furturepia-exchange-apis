var express = require('express');
var router = express.Router();
const { validateBody, schemas } = require('../../../services/validator');
var exchangesController = require('../../../controllers/exchangesController');

router.post('/exchange/token', validateBody(schemas.bridge.tokenExchange), exchangesController.exchangeToken);

module.exports = router;
