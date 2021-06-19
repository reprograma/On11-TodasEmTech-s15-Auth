const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({

    id: {
        type: Number
    },
    descricao: {
        type: String
    },
    dataInclusao: {
        type: Date,
        default: new Date
    },
    concluido: {
        type: Boolean,
    },
    nomeColaboradora: {
        type: String
    }

}, {
    versionKey: false
});

module.exports = mongoose.model('tarefa', tarefaSchema);

