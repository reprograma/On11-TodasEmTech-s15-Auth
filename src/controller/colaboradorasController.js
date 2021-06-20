const colaboradoras = require("../models/colaboradoras")
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const verifyJwt = (req, res, next) => {
  const authHeader = req.get('authorization');
  if (!authHeader) {
    return res.status(401).send('erro no header');
  }
  const token = authHeader.split(' ')[1];
  console.log('Meu header:', token);


 jwt.verify(token, SECRET, function(erro){
   if(erro){
     return res.status(401).send("Nao autorizado");
   }
   next()
 })

        
};

const getAll = (req, res) => {
  colaboradoras.find(function (err, colaboradoras){
    res.status(200).send(colaboradoras)
  })     
}
const postColaboradora = (req, res) => {
  console.log(req.body);
  const senhaComHash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = senhaComHash;
  const colaboradora = new colaboradoras(req.body);

    colaboradora.save(function(err){
    if (err) res.status(500).send({ message: err.message })

    res.status(201).send(colaboradora.toJSON());
  })
};

const login = (req, res) => {
  colaboradoras.findOne({ email: req.body.email }, function(error, colaboradora) {
    if (!colaboradora) {
      return res.status(404).send(`Não existe colaboradora com o email ${req.body.email}`);
    }
    const senhaValida = bcrypt.compareSync(req.body.password, colaboradora.password);

    if(!senhaValida) {
      return res.status(403).send(`Que senha é essa?`)
    }

const token = jwt.sign({ email: req.body.email }, SECRET);


res.status(200).json(token)
  });
}



module.exports = {
  getAll,
  postColaboradora,
  login,
  verifyJwt
}
