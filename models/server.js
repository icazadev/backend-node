const express = require('express')
const cors = require('cors')


class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        // Middlewares
        this.middlewares()

        // Routes
        this.routes()
    }


    middlewares() {
        // public directory
        this.app.use( express.static('public') )

        // configure access
        this.app.use( cors() )

        // configure type info wich our backend will receive
        this.app.use( express.json() )
    }

    
    routes() {
        // user endpoints
        this.app.use('/api/user', require('../routes/user'))
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('listening on port ' + this.port)
        } )
    }
}


module.exports = Server