const express = require("express")
const cors = require("cors")
const db = requite("./data/database")
const index = require("./routes/index")
const colaboradoras = require("./routes/colaboradoras")
const tarefas = require("./routes/tarefas")

const app = express()
db.connect()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        )
        next()
    })

app.use("/", index)
app.use("/colaboradoras", colaboradoras)
app.use("/tarefas", tarefas)

module.exports = app