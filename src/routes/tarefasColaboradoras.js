const express = require("express")
const router = express.Router()
const controller = require("../controller/tarefasColaboradora")
const verify = require("../controller/colaboradorasController").verifyJwt
router.get("/", verify, controller.getAll)



module.exports = router;