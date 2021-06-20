const { Router } = require("express")
const router = Router()
const controller = require("../controller/tarefasController");

router.get("/", controller.getAll);
router.post("/", controller.postTarefa);

module.exports = router;