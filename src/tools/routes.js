'use strict'

const Joi = require('Joi')
const handlers = require('./handlers')

module.exports = [
    { method: 'GET', path: '/users', handler: function () {} },
    { method: 'GET', path: '/users/{id}', handler: function () {} },
    { 
        method: 'GET', 
        path: '/', 
        handler: function (request, h) {
            return 'Hello World! fabio';
        }
    },
    {
      method: 'POST',
      path: '/api/v1/tools',
      handlers: handlers.create,
      config: {
        validate: {
          payload: Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required()
          })
        }
      }
    }
]