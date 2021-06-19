const tarefas = require("../models/tarefas");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

const getAll = (req, res) => {
    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1];
    console.log('Meu Token:', token);

    if (!authHeader) {
        return res.status(401).send('Erro no header');
    }
    jwt.verify(token, SECRET, function (erro) {
        if (erro) {
            return res.status(403).send('Não autorizado');
        }
        tarefas.find(function (err, tarefas) {
            if (err) {
                return res.status(500).send({
                    message: err.message
                })
            }
            return res.status(200).send(tarefas)
        })
    })
};
const postTarefa = (req, res) => {

    const tarefa = new tarefas(req.body);

    tarefa.save(function (err) {
        if (err) {
            return res.status(500).send({
                message: err.message
            })
        }
        return res.status(201).send(tarefa.toJSON())
    })
};
const atualizaTarefa = async (req, res) => {
    const encontraTarefa = await tarefas.findById(req.params.id)
    if (encontraTarefa == null) {
        return res.status(404).json({
            message: 'Tarefa não encontrada!'
        })
    }
    if (req.body.concluido != null) {
        encontraTarefa.concluido = req.body.concluido
    }
    try {
        const tarefaAtualizada = await encontraTarefa.save()
        res.status(200).json(tarefaAtualizada)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
const deleteTarefa = async (req, res) => {
    const encontraTarefa = await tarefas.findById(req.params.id)
    if (encontraTarefa == null) {
        return res.status(404).json({ message: 'Tarefa não encontrada!' })
    }
    try {
        await encontraTarefa.remove()
        res.status(200).json({ message: 'Tarefa deletada com sucesso' })
    } catch (err) {
        res.status(500).json({ 
            message: err.message
         })
    }
}

module.exports = {
    getAll,
    postTarefa,
    atualizaTarefa,
    deleteTarefa
}