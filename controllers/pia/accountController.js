/**
 * -----------------------------------------------------------------------------
 * Accounts controller used to interact with futurepia accounts
 * METHODS:
 * # createAccount
 * # getAccount
 * # getTokenBalance
 * # transfer
 * # transferToken
 *
 * @author Digvijay Suryawanshi <digvijay@webiqon.com>
 * @dated 27th November 2019
 * -----------------------------------------------------------------------------
 */

const httpClient = require('../../services/httpClient');

module.exports = {
    /**
     * Create an account on futurepia blockchain
     * @param  {} req
     * @param  {} res
     * @returns json
     */
    createAccount: async (req, res) => {
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
    },
    
    /**
     * Get futurepia account details
     * @param  {} req
     * @param  {} res
     * @returns json
     */
    getAccount: async (req, res) => {
        try {
            let data = {
                "usernames": JSON.stringify([req.body.username])
            }

            let response = await httpClient.post('/api/getAccounts', data);
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
    },

    /**
     * Get token balance of given user
     * @param  {} req
     * @param  {} res
     * @returns json
     */
    getTokenBalance: async (req, res) => {
        try {
            let data = {
                "accounts": JSON.stringify([req.body.account])
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
    },
    
    /**
     * Transfer coins to another user
     * @param  {} req
     * @param  {} res
     * @returns json
     */
    transfer: async (req, res) => {
        try {
            let data = {
                "from": req.body.from,
                "from_pwd": req.body.from_pwd,
                "to": req.body.to,
                "amount": req.body.amount,
                "memo": req.body.memo,
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
    },

    /**
     * Transfer tokens to another user
     * @param  {} req
     * @param  {} res
     * @returns json
     */
    transferToken: async (req, res) => {
        try {
            let data = {
                "from": req.body.from,
                "wif": req.body.wif,
                "to": req.body.to,
                "amount": req.body.amount,
                "symbol_name": req.body.symbol_name,
                "memo": req.body.memo,
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
    },

}
