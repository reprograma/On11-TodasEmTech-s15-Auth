const express = require('express')
const router = express.Router()
const controller = require('../controller/colaboradoras')

//create -> POST -> save()
router.post('/', controller.criaColaboradora)

//read -> GET -> find()
router.get('/', controller.mostraColaboradora)

//update -> PATCH -> getById() ou findOne() e save()
router.patch('/:id', controller.atualizaColaboradora)
//delete -> DELETE -> getById() ou findOne() e remove()
router.delete('/:id', controller.deletaColaboradora)
module.exports = router