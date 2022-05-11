//import react
const React = require('react')
//import the Def function from default.jsx
const Def = require('./default')

function home(){
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

//exporting the home function
module.exports = home