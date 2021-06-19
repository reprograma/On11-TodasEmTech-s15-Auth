const express = require("express")
const router = express.Router()
const controller = require("../controller/tarefasController")

router.get("/", controller.getAll)
router.post("/", controller.postTarefa)
router.patch("/:id", controller.atualizaTarefa)
router.delete("/:id", controller.deleteTarefa)

module.exports = router;