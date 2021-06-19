const tarefas = require("../models/tarefas")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getAll = (request,response)=>{
    const authHeader = request.get("authorization")
    const token = authHeader.split(" ")[1]
    console.log("meu header:", token)

    if (!authHeader){
        response.status(401).json({"mensagem":err.message})
    }

    jwt.verify(token,SECRET, function(erro){
        if(erro){
            response.status(403).json("não autorizado")
        }
        tarefas.find(function(err,tarefas){
            response.status(200).json(tarefas)
        })
    })
}

module.exports = {
    getAll
}