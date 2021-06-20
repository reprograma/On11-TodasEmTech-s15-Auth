require('dotenv').config()
const mongoose = require('mongoose')

const connect = () => {mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })

  let db = mongoose.connection;

  db.on("error", console.log.bind(console, "connection error:"))

  db.once("open", () => console.log("conexão feita com sucesso."))
}

module.exports = { connect }