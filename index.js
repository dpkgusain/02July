const path = require(`path`);
const express = require(`express`);
const app = express();
const PORT = 8080;
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);

console.log(io);
console.log(socketio);

io.on('connection',()=>{
     console.log('Connection is established');
})

// serving static files
app.use('/', express.static(path.join(__dirname, 'public')));



app.listen(PORT, () =>{
     console.log(`http://localhost:` + PORT);
});