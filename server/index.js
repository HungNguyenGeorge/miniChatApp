const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const router = require("./router");


const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);

const io = socketio(server);

const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000', "*"],
};

io.on('connection', (socket) => {
    console.log('User connected: ', socket.id)

    socket.on("join", ({ name, room }) => {
        console.log(`${name} joined to ${room}`)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected: ', socket.id);
    })
});

app.use(router);
app.use(cors(corsOption));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});