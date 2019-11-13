const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => {
    console.log('event received: ', data);
    client.broadcast.emit('event', data);
  });
});
server.listen(process.env.PORT || 4001);