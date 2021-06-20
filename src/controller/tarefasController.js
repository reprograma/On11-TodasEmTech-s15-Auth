const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const tarefas = require("../models/tarefas")

const getAll = (req, res) => {
  const authHeader = req.get('authorization')
  const token = authHeader.split(' ')[1]

  if(!authHeader) {
    return res.status(401).json("Token inválido")
  }

  jwt.verify(token, SECRET, err => {
    if(err) {
      return res.status(401).send("Não Autorizado")
    } 
    tarefas.find(function (err, tarefas){
      res.status(200).send(tarefas);
    })
  })
}

module.exports = {
  getAll
}