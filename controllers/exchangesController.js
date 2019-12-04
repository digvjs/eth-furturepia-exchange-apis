/**
* -----------------------------------------------------------------------------
* Accounts controller used to interact with futurepia accounts
* METHODS:
* # exchangeToken
*
* @author Digvijay Suryawanshi <digvijay@webiqon.com>
* @dated 04th December 2019
* -----------------------------------------------------------------------------
*/

const httpClient = require('../../services/httpClient');
const ExchangeOrder = require('../models/ExchangeOrder');
const Transaction = require('../models/Transaction');

module.exports = {
    /**
     * @param  {} req
     * @param  {} res
     * @returns JSON
     */
    exchangeToken: async (req, res) => {
        try {
            // TODO

            // Find tokens by ID

            // Add an entry into OrderExchange model with status processing & exchange rate as 1

            // Transfer the source token from user wallet to admin wallet
            // If success add the transaction in DB

            // Transfer the needed token from admin wallet to user wallet
            // If success add the transaction in DB

            // If any error occurs, revert the amount & update OrderExchange model status to fail with comment
            // Else update OrderExchange status to success with comment


            // Return response

        } catch (ex) {
            console.log(ex);
            res.status(400).json({ message: ex.message });
        }
    },
}