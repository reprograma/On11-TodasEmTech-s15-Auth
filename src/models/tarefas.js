const mongoose = require('mongoose');

const marcasSchema = new mongoose.Schema({
    id : { type : Number},
    descricao: { type: String },
    dataInclusao: { type: String },
    concluido: { type: Boolean },
    nomeMarca: { type: String },
    password: { type: String }
    
},{
    versionKey: false
});

const marcas = mongoose.model('marcas', marcasSchema);

module.exports = marcas;
