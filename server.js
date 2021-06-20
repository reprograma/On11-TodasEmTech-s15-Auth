const express = require('express')
const cors = require('cors')
const port = 3030

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('OK')
})

// repassa para o controller o app
require('./src/app/controllers/colaboradoraController')(app)
require('./src/app/controllers/projectController')(app)

app.listen(port)