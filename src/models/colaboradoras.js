const mongoose = require("mongoose");

//schema são as propriedades que irão compor a estrutura do documento no banco de dados, aqui podemos definir os tipos de valores, nomes dos campos, entre outras configurações.

//New mongoose.Schema é o comando utilizado para que possamos criar um novo Schema do mongo chamado tarefasSchema, através do mongoose.

const colaboradorasSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true    
    },
    password:
    {
        type: String,
        required: true
    }
},
    {
    versionKey: false
    }
);

module.exports = mongoose.model("colaboradoras",colaboradorasSchema)


