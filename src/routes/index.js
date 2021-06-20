const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Reprograma - On11 Semana 15 - Autenticação e Segurança",
        version: "0.0.0"
    })
})

module.exports = router