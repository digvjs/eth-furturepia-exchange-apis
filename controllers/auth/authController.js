/**
* -----------------------------------------------------------------------------
* Accounts controller used to interact with futurepia accounts
* METHODS:
* # login
* # register
* # logout
*
* @author Digvijay Suryawanshi <digvijay@webiqon.com>
* @dated 28th November 2019
* -----------------------------------------------------------------------------
*/

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const {
    JWT_PASSPHRASE: jwtSecret
} = process.env;

module.exports = {
    
    login: async (req, res) => {
        
        try {
            const { wallet_id, password } = req.body;
            
            User.findOne({ where: { wallet_id: wallet_id }}).then((user) => {
                if (user) {
                    bcrypt.compare(password, user.password).then(match => {
                        if (match) {
                            // Create a token
                            let payload = { id: user.id, wallet_id: user.wallet_id, email: user.email };
                            const token = jwt.sign(payload, jwtSecret, { expiresIn: '2d' });
                            
                            res.json({
                                status: true,
                                user: user,
                                token: token,
                                message: 'login successful.'
                            });
                            
                        } else {
                            res.status(401).json({ message: 'Invalid credentials.' });
                        }
                        
                    }).catch(err => {
                        res.status(500).json({ message: err.message });
                    });
                    
                } else {
                    res.status(401).json({
                        message: "Invalid credentials."
                    });
                }
                
            });
            
        } catch (ex) {
            res.status(400).json({
                message: ex.message
            })
        }
        
    },
    
    /**
    * Create new user
    * @param  {} req
    * @param  {} res
    * @returns json
    */
    register: async (req, res) => {
        
        try {
            User.findOne({ where: { wallet_id: req.body.wallet_id }}).then((data) => {
                if (data) {
                    res.status(400).json({
                        message: "Wallet ID '" + req.body.wallet_id + "' is taken, use another one."
                    })
                }
            });
            
            User.findOne({ where: { email: req.body.email }}).then((data) => {
                if (data) {
                    res.status(400).json({
                        message: "User already present with email '" + req.body.email + "'."
                    });
                }
            });
            
            let user = await User.create(req.body)
            .catch(err => { 
                console.log('Error: ', err);
                res.status(400).json({
                    message: err.message
                })
            });
            
            res.json({
                status: true,
                user: user,
                message: 'User created successfully!'
            })
            
        } catch (ex) {
            res.status(400).json({
                message: ex.message
            })
        }
        
    },
    
    /**
     * @param  {} req
     * @param  {} res
     * @returns json
     */
    getAuth: async (req, res) => {
        try {
            if (req.decoded) {
                User.findOne({ where: { id: req.decoded.id } })
                    .then(user => {
                        if (user) {
                            res.json({ user: user });
                        } else {
                            res.status(400).json({ message: 'User not found.' });
                        }
                    })
                    .catch(err => {
                        res.status(400).json({ message: err.message });
                    });

            } else {
                res.status(400).json({ message: 'Token Error.' });
            }
        } catch (ex) {
            res.status(400).json({ message: ex.message });
        }
    },
}