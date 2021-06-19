const mongoose = require('mongoose');

const colaboradorasSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    email: { type: String },
    password: { type: String },
    
},{
    versionKey: false
});

// Bearer TOKEN_JWT_AQUI

const colaboradoras = mongoose.model('colaboradoras', colaboradorasSchema);

module.exports = colaboradoras;