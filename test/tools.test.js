'use strict'

const lab = exports.lab = require('lab').script()
const { expect } = require('code')

const server = require('../')

lab.describe('testes do resource tools', () => {
    lab.test('deve retornar com sucesso', async () => {
        const res = await server.inject({
            method: 'POST',
            url: '/api/v1/tools',
            payload:{
                name: 'alan2',
                description: 'sentido'
            }
        })
            expect(res.statusCode).to.equal(200)
            expect(res.result).to.equal({ success: true })
    })
    lab.test('deve retornar erro qdo o usuario for duplicado', async () => {
        const res = await server.inject({
            method: 'POST',
            url: '/api/v1/tools',
            payload:{
                name: 'alan',
                description: 'senha'
            } 
        })
        expect(res.statusCode).to.equal(422)
        expect(res.result.message).to.equal('usuario ja existe')
    })
})