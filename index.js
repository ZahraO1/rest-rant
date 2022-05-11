require('dotenv').config()
//setting up express app
const express = require('express')
const app = express()

//Defning the view engine (JSX in this case) that we will be using
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())


//renders home page from home.jsx in views folder
app.get('/',(req,res)=>{
    res.render('home')
})

//importing places router from controllers folder
app.use('/places',require('./controllers/places'))

//page displayes a 404 not found error if client types in wrong address
app.get('*',(req,res)=>{
    res.status(404).send("<h1>404 not found</h1>")
})

//starts a server and listens to port number in .env
app.listen(process.env.PORT)