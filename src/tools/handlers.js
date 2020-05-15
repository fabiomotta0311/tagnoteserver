'use strict'

const Boom = require('boom')

exports.create = (req, h) => {
    const { username } = req.payload

    if (username === 'alan') {
        h.response(Boom.badData('Este usuario já existe')).code(404).send()
    } else {
        h.response({ success: true }).code(200).send()
    }

}