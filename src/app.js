const http = require("http")
const express = require("express")
const app = express()

const bodyParser = require("body-parser")

app.use(express.json())

//rotas
const index = require("./routes/index")
const colaboradoras = require("./routes/colaboradoras")

//configurar body parser
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        )
        next()
   
    })

app.use("/", index)
app.use("/colaboradoras", colaboradoras)

module.exports = app