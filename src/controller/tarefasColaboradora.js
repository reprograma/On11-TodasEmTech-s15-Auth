const tarefasColaboradoras = require("../models/tarefasColaboradoras")

const getAll = async (req, res) => {
      const tarefas = await tarefasColaboradoras.find()
      
res.status(200).json(tarefas)
}







module.exports = {
    getAll
}
