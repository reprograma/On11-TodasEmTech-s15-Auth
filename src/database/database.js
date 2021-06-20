require('dotenv').config()
const mongoose = require('mongoose')

const connect = () => {mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })

  let db = mongoose.connection
  db.on('error', console.log.bind(console, 'erro de conexão'))
  db.once('open', () => console.log('conexão feita, parabens'))
}

module.exports = { connect } 