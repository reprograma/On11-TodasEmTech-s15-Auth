const Tarefa = require('../models/tarefas');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET;

const getAll = (req, res) => {
    const header = req.get('authorization');
    const token = header.split(' ')[1];
    console.log(`Meu header é: ${token}`);

    if (!header) {
        return res.status(401).send('Erro no header');
    }

    jwt.verify(token, SECRET, function(erro) {
        if(erro) {
            return res.status(403).send('Não autorizado querido');
        }

        Tarefas.find({function (err, tarefas){
            res.status(200).send("Tarefas: ", tarefas);
        }});
    });
}

module.exports = {
    getAll
}