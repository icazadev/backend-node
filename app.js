require('dotenv').config()
const Server = require('./models/server')


// instance server
const server = new Server()
server.listen()
