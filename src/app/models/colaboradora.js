const mongoose = require('../../database/db')
const bcrypt = require('bcryptjs')

// Definindo o schema, ou seja, os campos que teremos
const ColaboradoraSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false, // indica que ao buscar um usuario o campo password nao venha junto
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

// Funcao do mongoose - define algo antes de salvar
ColaboradoraSchema.pre('save',  async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next();
});

const Colaboradora = mongoose.model('User', ColaboradoraSchema)

module.exports = Colaboradora