import express from 'express';
import http from 'http';
import {Server as SocketServer} from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server,{
    cors:{
        origin: ' http://localhost:3000'
    }
});

io.on('connection', socket =>{
    console.log('Client connected');

    socket.on('message', (data) =>{ //Este es un evento el cual escucha lo que le manda el frontend
        console.log(data);
        socket.broadcast.emit('messageAll', data); //va a enviar a los usuarios que no enviaron el mensaje, el mensaje ahora al frontend
    })
})

server.listen(4000)
console.log('Server on port', 4000);