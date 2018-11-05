const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()

const server = http.createServer(app)
const io = socketio(server)

app.use('/', express.static(path.join(__dirname, 'frontend')))

io.on('connection', (socket) => {
    console.log('New socket connection', socket.id)
    socket.emit('connected')
})

server.listen(3000, () => console.log("http://localhost:3000"))