const marcas = require("../models/tarefas")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

const getAll = (req, res) =>{
    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1];
    console.log('Meu Header:', token);

    if (!authHeader) {
      return res.status(401).send('erro no header');
    }


jwt.verify(token, SECRET, function(erro){
    if (erro) {
        return res.status(403).send('Não autorizado!');
    }

    marcas.find(function(err, marcas){
         res.status(200).send(marcas)
  
    })
})

};

const postMarca = (req, res)=>{
    const senhaComHash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = senhaComHash;
    const marca = new marcas(req.body);

    marca.save(function(err) {
        if (err) {
          res.status(500).send({ message: err.message })
        }
    
        res.status(201).send(marca.toJSON())
    })
};

const loginMarca = (req, res) => {
    marcas.findOne({ email: req.body.email }, function(error, marca) {
      if (!marca) {
         return res.status(404).send(`Não existe marca com o email ${req.body.email}`);
      }
  
      const senhaValida = bcrypt.compareSync(req.body.password, marca.password);
      
      if (!senhaValida) {
        return res.status(403).send(`senha incorreta!`);
      }
  
      const token = jwt.sign({ email: req.body.email }, SECRET);
  
        return res.status(200).send(token);
    });
  }


module.exports = {
    getAll,
    postMarca,
    loginMarca
}