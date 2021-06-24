const mongoose = require("mongoose")
const Colaboradora = require("../models/colaboradoras")

const SECRET = process.env.SECRET

const getAll = async (req, res) => {
  const autHeader = req.get("authotization")
  
  if(!autenticado) {
    return res.status(401).send("erro no header")
  }
    colaboradoras.find(function (err, colaboradoras){
      res.status(200).send(colaboradoras)
    })     
};

const postColaboradora = async (req, res) => {
  const colaboradora = new Colaboradora({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password
  })

  const colaboraJaExiste = await Colaboradora.findOne({ nome: req.body.nome })
  if (colaboraJaExiste) {
      return res.status(409).json({ error: "Colaboradora já cadastrada!" })
  }

  try {
      const novaColaboradora = await colaboradora.save()
      res.status(201).json(novaColaboradora)
  } catch (err) {
      res.status(500).json({message:err.message})
  }
}



module.exports = {
    getAll,
    postColaboradora
}