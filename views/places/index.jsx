const React = require('react')
const Def = require('../default')

function index(data){
    //data is pulled from controllers/places.js
    let placesFormatted = data.places.map((place, index)=>{
        return(
            //using bootstrap to make grids
            //bootsrap loaded in default.jsx
            <div className='col-sm-6'>
                {/*places name*/}
                <h2>
                    <a href={`/places/${index}`}> 
                        {place.name}
                    </a>
                </h2>
                
                {/* place cuisines */}
                <p className='text-center'>
                    {place.cuisines}
                </p>
                
                {/*place image*/}
                <img src ={place.pic} alt={place.name}/>
                
                {/*place location*/}
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                {/* //using bootstrap to make grids
                //bootsrap loaded in default.jsx */}
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index