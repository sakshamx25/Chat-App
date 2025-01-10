// Node Server which will handle socket io connections
const port = process.env.PORT || 8000;
console.log(`server is running ${port}`);
const io = require('socket.io')( (port), {
    cors: {
      origin: '*',
    }
  });

const users = {};

io.on('connection', socket => {
    console.log('A user connected:', socket.id);
  
    socket.on('new-user-joined', name =>{
      console.log("New user", name);
      users[socket.id] = name;
      socket.broadcast.emit('user-joined', name);
    });
  
    socket.on('send', message => {
        socket.broadcast.emit('recieve', {message: message, name: users[socket.id]})
    });
  
    socket.on('disconnect', message => {
      socket.broadcast.emit('left', users[socket.id]);
      delete users[socket.id];
    });
  });
  