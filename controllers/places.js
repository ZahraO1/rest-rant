const router = require('express').Router()
const places = require('../models/places')

//displays the /places page
router.get('/',(req,res)=>{
    //puttin {places} inside
     res.render('places/index',{places})
})

//New
router.get('/new',(req,res)=>{
  res.render('places/new')
})

//Create
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic){
    //if image is not presented, a default image will be shown
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if(!req.body.city){
    req.body.city = 'Anytown'
  }
  if(!req.body.state){
    req.body.state='USA'
  }
  //pushes the body information to an array in located in /models/places.js
  places.push(req.body)
  res.redirect('/places')
})

//exporting an express.Router()
module.exports=router