const React = require('react')

//the default layout 
function Def(html){
    return(
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def