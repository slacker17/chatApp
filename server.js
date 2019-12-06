// Inicializadores
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

// Path / redirecciona al archivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

// Variable contador de conexiones
var connections = 0;

// Evento connection (cuando se conecta un cliente)
io.on('connection', (socket) => {
    console.log("Un usuario se ha conectado"); // Impresion en consola (debug)
    socket.on('disconnect', () => {
        console.log("A user disconnected");    // Impresion en consola (debug)
    });
    // Mensaje en consola (debug)
    socket.on('chat-message', function(msg){
      console.log('message: ' + msg.message);
    });
    // Se envia el mensaje a los clientes
    socket.on('chat-message', (msg) => {
        socket.broadcast.emit('chat-message', msg);
    });
    // Se emite el evento cuando alguien se ha conectado (notificaion)
    socket.on('joined', (user) => {
        connections += 1; // Aumentamos contador de conexiones
        socket.broadcast.emit('joined', user);
        io.emit('connections', connections);
    });
    // Se emite el evento cuando alguien se ha desconectado (notificaion)
    socket.on('leave', (user) => {
        connections -= 1; // Reducimos contador de conexiones
        socket.broadcast.emit('leave', user);
        io.emit('connections', connections);
    });
    // Evento cuando un usuario esta escribiendo
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });
    // Evento cuando un usuario deja de escribir
    socket.on('stopTyping', () => {
        socket.broadcast.emit('stopTyping', '');
    });
});

// Corremos el servidor en el puerto 3000 (listening)
http.listen(3000, () => {
    console.log('Listening on port *: 3000'); // Impresion en consola (debug)
});
