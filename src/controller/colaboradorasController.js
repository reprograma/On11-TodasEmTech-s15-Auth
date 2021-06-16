const colaboradoras = require("../models/colaboradoras")
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');


const getAll = (req, res) => {
  const authHeader = req.get('authorization');
  const token = authHeader.split(' ')[1];
  console.log('Meu header:', token);

  if (!authHeader) {
    return res.status(401).send('erro no header');
  }

/*jwt.verify(token, SECRET, function(erro) {
    if (erro) {
      return res.status(403).send('Não autorizado');
    }*/

        colaboradoras.find(function (err, colaboradoras){
      res.status(200).send(colaboradoras)
    }) 
//  })    
};

const postColaboradora = (req, res) => {
  console.log(req.body);

  let colaboradora = new colaboradoras(req.body);
    colaboradora.save(function(err){
    if (err) res.status(500).send({ message: err.message })

    res.status(201).send(colaboradora.toJSON());
  })
};




module.exports = {
    getAll,
    postColaboradora,
}
