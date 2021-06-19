const mongoose = require('mongoose');

const tarefasSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    descricao: { 
        type: String 
    },
    dataInclusao: { 
        type: Date,
        required: true,
        default: new Date
    },
    concluido: {  
        type: Boolean
    },
    nomeColaboradora: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'colaboradoras'
     }
}, {
    versionKey: false
});

const tarefas = mongoose.model('tarefas', tarefasSchema);

module.exports = tarefas;