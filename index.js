require('dotenv').config()
//setting up express app
//Dependencies
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//Defning the view engine (JSX in this case) that we will be using
app.set('views',__dirname + '/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))   //let Express know what you're going to call your static folder
app.use(methodOverride('_method'))

//Controllers and Routes
//renders home page from home.jsx in views folder
app.get('/',(req,res)=>{
    res.render('home')
})

//importing places router from controllers folder
app.use('/places',require('./controllers/places'))

//page displayes a 404 not found error if client types in wrong address
app.get('*',(req,res)=>{
    res.status(404).render("error404")
})

//starts a server and listens to port number in .env
app.listen(process.env.PORT)