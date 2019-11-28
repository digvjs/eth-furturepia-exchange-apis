var express = require('express');
var router = express.Router();

const pia = {
    'v1': require('./pia/v1')
};

const eth = {
    'v1': require('./eth/v1')
};

/* GET home page. */
router.get('/', (req, res) => res.send("Futurepia Microservice REST API is working"));

/* check authorization */
router.use('/api', (req, res, next) => {
    req.user = undefined;
    if (req.headers && req.headers.authorization) {
        let auth = req.headers.authorization.split(' ');
        console.log(auth);
        if(auth[0] == 'API-KEY') {
            if (auth[1] == 'TESTKEY') {
                req.authorized = true;
            }
        }
    }
    next();
});

router.use('/api/pia/v1', pia['v1']);
router.use('/api/eth/v1', eth['v1']);

module.exports = router;
