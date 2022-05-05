require('dotenv').config()
//setting up express app
const express = require('express')
const app = express()

//homepage displays a message of Hello World
app.get('/',(req,res)=>{
    res.send('Hello World')
})

//importing places router from controllers folder
app.use('/places',require('./controllers/places'))

//page displayes a 404 not found error if client types in wrong address
app.get('*',(req,res)=>{
    res.status(404).send("<h1>404 not found</h1>")
})

//starts a server and listens to port number in .env
app.listen(process.env.PORT)