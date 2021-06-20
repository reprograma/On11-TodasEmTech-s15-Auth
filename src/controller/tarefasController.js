const tarefas = require("../models/tarefas");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET


const getAll = (req, res) => {
  const authHeader = req.get('authorization');
  const token = authHeader.split(' ')[1];
  console.log('Meu header:', token);

  if (!authHeader) {
    return res.status(401).send('erro no header');
  }

jwt.verify(token, SECRET, function(erro) {
    if (erro) {
      return res.status(403).send('Não autorizado');
    }

       tarefas.find(function (err, tarefas){
      res.status(200).send(tarefas)
    }) 
  })    
};

const postTarefa = (req, res) => {
  const nomeComHash = bcrypt.hashSync(req.body.nomeColaboradora, 10); //nome com Hash
  req.body.nomeColaboradora = nomeComHash;
  const tarefa = new tarefas(req.body);

  tarefa.save(function(err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }

    res.status(201).send(tarefa.toJSON())
  })
};




module.exports = {
    getAll,
    postTarefa
}
