require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('MeepMeep')
})

app.listen(process.env.PORT)

app.get('*',(req,res)=>{
    res.status(404).send("<h1>404 not found</h1>")
})