const express = require("express")
const router = express.Router()
const controller = require("../controller/colaboradorasController")

router.get("/", controller.verifyJwt, controller.getAll)
router.post("/", controller.verifyJwt, controller.postColaboradora)
router.post("/login", controller.login)

module.exports = router;