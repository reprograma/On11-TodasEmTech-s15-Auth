const getAll = (req, res) => {
  const authHeader = req.get("authorization");
  const token = authHeader.split(" ")[1];
  console.log("Meu header:", token);

  if (!token) {
    return res.status(401).send("erro no header");
  }

  colaboradoras.find(function (err, colaboradoras) {
    res.status(200).send(colaboradoras);
  });
};
