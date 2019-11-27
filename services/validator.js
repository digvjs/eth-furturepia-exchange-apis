const Joi = require('joi');

module.exports = {

  validateBody: (schema) => { 
    return (req, res, next) => { 
      const result = Joi.validate(req.body, schema);
      if (result.error) { 
        return res.status(400).json(result.error);
      }

      if (!req.value) { req['value'] = {}; }
      req.value['body'] = result.value;
      next();
    }
  },

  schemas: {

    /** For account routes */
    account: {

        createAccount: Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required()
        }),

        getAccount: Joi.object().keys({
            username: Joi.string().required()
        }),

        getTokenBalance: Joi.object().keys({
            account: Joi.string().required()
        }),

        transfer: Joi.object().keys({
            from: Joi.string().required(),
            from_pwd: Joi.string().required(),
            to: Joi.string().required(),
            amount: Joi.number(),
            memo: Joi.required(),
            memo_key: Joi.string().required()
        }),

        transferToken: Joi.object().keys({
            from: Joi.string().required(),
            wif: Joi.string().required(),
            to: Joi.string().required(),
            amount: Joi.number(),
            symbol_name: Joi.string().required(),
            memo: Joi.required(),
            memo_key: Joi.string().required()
        }),

    },

  }
}