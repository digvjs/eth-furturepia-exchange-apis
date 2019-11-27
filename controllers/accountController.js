const httpClient = require('../services/httpClient');

exports.createAccount = async (req, res) => {
    try {
        let data = {
            "username": req.body.username,
            "password": req.body.password
        }

        let response = await httpClient.post('/api/createAccount', data);
        res.json({
            success: true,
            response: response
        });

    } catch (ex) {
        console.log(ex);
        res.status(400).json({
            message: ex.message
        });
    }
}

exports.getAccount = async (req, res) => {
    try {
        let data = {
            "usernames": [req.body.username]
        }

        let response = await httpClient.post('/api/createAccount', data);
        res.json({
            success: true,
            response: response
        });

    } catch (ex) {
        console.log(ex);
        res.status(400).json({
            message: ex.message
        });
    }
}

exports.getTokenBalance = async (req, res) => {
    try {
        let data = {
            "accounts": [req.body.account]
        }

        let response = await httpClient.post('/api/getTokenBalance', data);
        res.json({
            success: true,
            response: response
        });

    } catch (ex) {
        console.log(ex);
        res.status(400).json({
            message: ex.message
        });
    }
}

exports.transfer = async (req, res) => {
    try {
        let data = {
            "from": req.body.from,
            "from_pwd": req.body.from_pwd,
            "to": req.body.to,
            "amount": req.body.amount,
            "memo": req.body.meno,
            "memo_key": req.body.memo_key
        }

        let response = await httpClient.post('/api/transfer', data);
        res.json({
            success: true,
            response: response
        });

    } catch (ex) {
        console.log(ex);
        res.status(400).json({
            message: ex.message
        });
    }
}

exports.transferToken = async (req, res) => {
    try {
        let data = {
            "from": req.body.from,
            "wif": req.body.wif,
            "to": req.body.to,
            "amount": req.body.amount,
            "symbol": req.body.symbol,
            "memo": req.body.meno,
            "memo_key": req.body.memo_key
        }

        let response = await httpClient.post('/api/transferToken', data);
        res.json({
            success: true,
            response: response
        });

    } catch (ex) {
        console.log(ex);
        res.status(400).json({
            message: ex.message
        });
    }
}
