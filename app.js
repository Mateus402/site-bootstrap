const express = require('express')
const app = express()

const Port = 4040

const cadastro = require('./routes/cadastro')
const login = require('./routes/login')


app.set('view engine', 'ejs')

app.use(express.static('public'))


app.get('/home', (req, res) => {
    res.render("index")
})

app.use(cadastro)

app.use(login)



app.listen(Port, () => {
    console.log(`Server run on localhost:${Port}`)
})