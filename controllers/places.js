const router = require('express').Router()

//displays the /places page
router.get('/',(req,res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
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
  res.send('POST /places')
})

//exporting an express.Router()
module.exports=router