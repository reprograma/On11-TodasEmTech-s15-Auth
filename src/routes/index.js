const { Router } = require("express")
const router = Router()
const {author, version} = require('../../package.json')

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Reprograma - On11 Semana 15 - Auth",
        author,
        version
    })
})

module.exports = router