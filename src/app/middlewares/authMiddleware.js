const jwt = require('jsonwebtoken')
const authConfig = process.env.SECRET

module.exports = (req, res, next) => {

    // busca o header de autenticacao
    const authHeader = req.headers.authorization

    // verificar se o token foi informado
    if(!authHeader)
        return res.status(401).send({ error: 'Token não informado!'})
    
    // verificar se o token esta no formato correto
    // formato esperado: Bearer fjkasjflasjdfljsa9qefdwroiwe
    const parts = authHeader.split(' ')

    // verificando se tem as duas partes
    if(!parts.length === 2)
        return res.status(401).send({ error: 'Erro de token!'})

    // se as duas partes existirem, desestruturar
    const [ scheme, token ] = parts

    // verificar se no scheme tem a palavar Bearer
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token malformado!' })

    // verificacao final
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err)
            return res.status(401).send({ error: 'Token inválido!'})

        req.userId = decoded.id

        return next()
    })
}