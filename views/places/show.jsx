const React = require('react')
const Def = require('../default')

function show(data){
    return(
        <Def>
            <main>
                <div>
                    <img src={`${data.place.pic}`} alt="image" />
                </div>
                <div>
                    <h1>{data.place.name}</h1>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                    <h2>Description</h2>
                    <p>Located in {data.place.city}, {data.place.state} serving {data.place.cuisines}</p>
                </div>
                <div>
                    <hr />
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
                
                {/*Edit button*/}
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                
                {/*delete button*/}
                {/*_method comes from methodOverride from the npm method-override*/}
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    {/* <input type="hidden" name="_method" value="DELETE"/> */}
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                    {/* <input type="submit" value="DELETE" /> */}
                </form>
            </main>
        </Def>
    )
}

module.exports = show