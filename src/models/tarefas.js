const mongoose = require('mongoose');

//estrutura do seu model (atributos da sua entidade)
const tarefasSchema = new mongoose.Schema({
    id : { type : Number},
    descricao: { type: String },
    dataInclusao: { type: String },
    concluido: { type: Boolean },
    nomeColaboradora: { type: String }
},{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});


// Aqui fica o nome da collection salva no banco de dados.
const tarefas = mongoose.model('tarefas', tarefasSchema);

// exportar o model para ser utilizado
module.exports = tarefas;