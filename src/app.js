require('dotenv-safe').config();
const express = require("express")
const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") // informo que minha api poderá ser chamada de qualquer lugar. Por um browser, por exemplo.
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
    // como criei uma função dentro do app.use, preciso dar um "next()" para mandar ele seguir para a próxima middleware. 
    // se eu não faço isso, a requisição vai ficar travada aí.
})

module.exports = app

app.use("/", index)
app.use("/colaboradoras", colaboradoras)

module.exports = app