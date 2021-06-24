require("dotenv").config()

const jwt = require("jsonwebtoken")

const mongoose = require("mongoose")

const connect = () =>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
        .then(console.log("Data base conectada com sucesso"))
        .catch(err=> console.error)
}

module.exports = { connect }