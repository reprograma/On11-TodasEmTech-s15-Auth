const app = require("./src/app")
const PORT = 4500 

const db = require("./src/data/database")
db.connect()

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})