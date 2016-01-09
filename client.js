const net = require( 'net' );
const host = 'localhost';
const port = 2468;

const server = net.createServer( (client) => {
  client.write('Hi there!');
});

server.listen(2468, () => {
  console.log( 'Server is running' );
})
