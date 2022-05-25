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

//Show
router.get('/:id',(req,res)=>{
  let id = Number(req.params.id)
  //if id is not a number, a 404 page will render
  if(isNaN(id)){
    res.render('error404')
  }
  //if the id number is not within places array --> renders 404 error page
  else if(!places[id]){
    res.render('error404')
  }
  else{
    //places is from ./models/places.js
    res.render('places/show',{place:places[id],id})
  }
})

//Delete
router.delete('places/:id', (req,res)=>{
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }else if(!places[id]){
    res.render('error404')
  }else{
    //removes the item from the array
    places.splice(id,1)
    res.redirect('/places')
  }
})
//exporting an express.Router()
module.exports=router