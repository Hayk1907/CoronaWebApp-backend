const io = require('../index');

io.on('connection', socket => {
  socket.on('CREATE_USER', user => {
    socket.emit('NEW_PACIENT', user);
  });
});
