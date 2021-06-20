const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Colaboradora = require('../models/colaboradora')
const authConfig = process.env.SECRET

function generatorToken(params = {}) {

    // gerando o token - precisa: id do usuario; hash unico; quando vai expirar
    return jwt.sign(params, authConfig.SECRET, {
        expiresIn: 86400 //quando vai expirar
    })
}

// ROTA DE REGISTO
router.post('/register', async (req, res) => {

    // pegando o email
    const { email } = req.body

    try {
        if (await Colaboradora.findOne({ email }))
            return res.status(400).send({ error: 'O usuário existente!'})
        
        const user = await Colaboradora.create(req.body)
        
        // removendo o password
        user.password = undefined
        
        return res.send({ 
            user,
            token: generatorToken({ id: user.id })
        })

    } catch(err) {
        return res.status(400).send({ error: 'Falha no registro!' })
    }
})

// ROTA DE AUTENTICACAO
router.post('/authenticate', async (req, res)=>{

    // recebemos do usuario: email e senha
    const { email, password } = req.body

    // buscar um usuario
    const user = await Colaboradora.findOne({ email }).select('+password')

    // verificando se o usuario nao existe
    if(!user)
        return res.status(400).send({ error: 'O usuário não existe' })

    // verificando se a senha informada eh a mesma salva no banco
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha inválida!' })

    // removendo password
    user.password = undefined  

    // se logou normalmente (junto com o usuario vai o token)
    res.send({ 
        user,
        token: generatorToken({ id: user.id })
     })
})

// recuperando o app
module.exports = app => app.use('/auth', router)