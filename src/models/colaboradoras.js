const mongoose = require('mongoose')

const colaboradora = new mongoose.colaboradora({
    nome: mongoose.colaboradora.Types.ObjectId,
    nome: {
        type: String,
        required: true

    }
})

module.exports = mongoose.model('colaboradoras', colaboradora )
