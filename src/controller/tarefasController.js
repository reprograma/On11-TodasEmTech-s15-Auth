const tarefas = require("../models/tarefas")
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken")

const getAll = (req, res) => {
    const authHeader = req.get("authorization")
    console.log(authHeader)

    if (!authHeader) {
        return res.status(401).send("Header Authorization não é válido!");
    }

    const token = authHeader.split(" ")[1]
    console.log(token)

    jwt.verify(token, SECRET, function (erro) {
        if (erro) {
            return res.status(403).send("Token inválido!")
        }

        const tarefa = tarefas.find()
        res.status(200).json(tarefa)
    })
}


const getById = (req, res) => {
    const authHeader = req.get("authorization")

    if (!authHeader) {
        return res.status(401).send("Header não encontrado")
    }

    const token = authHeader.split(" ")[1]

    jwt.verify(token, SECRET, (err) => {
        if (err) {
            return res.status(403).send("Token inválido")
        }

        const id = req.params.id
        tarefas.find({ id }, (err, tarefas) => {
            if (err) {
                return res.status(424).send({ message: err.message })
            } else {
                return res.status(200).send(tarefas)
            }
        })
    })
}


const postTask = (req, res) => {
    const authHeader = req.get("authorization")

    if (!authHeader) {
        return res.status(401).send("Header inválido!!!")
    }

    const token = authHeader.split(" ")[1]

    jwt.verify(token, SECRET, (err) => {
        if (err) {
            return res.status(403).send("Token inválido")
        }
        
        const tarefa = new tarefas(req.body)
        const newTarefa = tarefa.save()
        res.status(201).json({
            message: "Tarefa cadastrada com sucesso!",
            newTarefa 
        })
    })
}


const putTask = (req, res) => {
    const { id } = req.params
    const body = req.body
    const update = { new: true }

    const tafera = taferas.findByIdAndUpdate(id, body, update)
    return res.status(200).json({
        message: "Tarefa atualizada com sucesso!",
        tarefa
    })
}


const deleteTask = (req, res) => {
    const authHeader = req.get("authorization")

    if (!authHeader) {
        return res.status(401).send("Header não encontrado")
    }

    const token = authHeader.split(" ")[1]

    jwt.verify(token, SECRET, (err) => {
        if (err) {
            return res.status(403).send("Este token não é válido")
        }

        const tarefa = tarefas.findById(req.params.id)
        tarefa.remove()
        return res.status(200).json({ message: 'Tarefa deletada com sucesso' })

    });
};



module.exports = {
    getAll,
    getById,
    postTask,
    putTask,
    deleteTask
};