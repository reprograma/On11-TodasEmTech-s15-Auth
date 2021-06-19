const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.postTask)
router.put("/:id", controller.putTask)
router.delete("/:id", controller.deleteTask)
 
module.exports = router