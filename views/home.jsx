//import react
const React = require('react')
//import the Def function from default.jsx
const Def = require('./default')

function home(){
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80/40/40" alt="Chia Fruit Shake"></img>
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

//exporting the home function
module.exports = home