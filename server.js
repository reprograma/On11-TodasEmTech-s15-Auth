require('dontenv - safe').config();
const app = require("./src/app")
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});