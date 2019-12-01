const httpClient = require('../httpClient');
const web3 = require('../../services/web3');

module.exports = {
    createAccount: async () => {
        try {
            let account = await web3.eth.accounts.create();
            return account;
        } catch (ex) {
            return new Error(ex.message);
        }
    },
};