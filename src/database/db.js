require('dotenv').config()
const mongoose = require('mongoose')

const con = ()=> {
    mongoose.connect(process.env.DATABASE_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(console.log('Database connected'))
.catch(err => console.error)}

module.exports = {
    con
}