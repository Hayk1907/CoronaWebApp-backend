const { io } = require('../index');

io.on('connection', socket => {
  console.log('hello cocket');

  socket.on('CREATE_USER', user => {
    console.log('get data cocket');
    socket.emit('NEW_PACIENT', user);
    console.log('send data cocket');
  });
});
