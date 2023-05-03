const express = require('express')
const cors = require('cors')
const json = require('json')
const database = require('./database') 

const db = database.db
const app = express()

app.use(cors())
app.use(express.json())

app.get('/cards', (req, res) => {
    db.query("select * from TaskCards;", (err, consulta) => {
        console.log(consulta.length)
        res.send(consulta)
    })
})




app.post('/cards', (req, res) => {
    console.log(req.body)
    const dt = req.body
    const qry = "insert into TaskCards(nome,img,rating,duracao,usuario) values(?,?,?,?,?);"
    db.query(qry, [dt.nome, dt.img, dt.rating, dt.duracao, dt.usuario], (err, res) => {
       
        (typeof err == 'undefined') ? console.log('erro') : console.log(res)



})
})


app.listen(5000,()=>console.log('escutando'))