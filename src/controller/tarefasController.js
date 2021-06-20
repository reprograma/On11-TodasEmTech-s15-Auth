const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const tarefas = require("../models/tarefas")

const getAll = (req, res) => {
  const authHeader = req.get('authorization');
  const token = authHeader.split(' ')[1];

  if(!authHeader) {
    return res.status(401).json("Erro no Header, Token inválido");
  }

  jwt.verify(token, SECRET, err => {
    if(err) {
      return res.status(401).send("Não Autorizado")
    } 
    tarefas.find(function (err, tarefas){
      res.status(200).send(tarefas);
    })
  });
}

module.exports = {
  getAll,
}

//sinto muito não ter feito mais nesse exercício, tenho passado por dias difíceis, estou entregando o básico para não perder mais um prazo, prometo caprichar no meu projeto final para exercitar de forma mais completa os aprendizados desta semana, obrigada Tereza por tudo que nos ensinou e pelo carinho, torço muito pelo seu sucesso! <3 