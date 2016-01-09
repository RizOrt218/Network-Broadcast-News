const net  = require( 'net' );
const host = 'localhost';
const port = 2468;

const server = net.connect({host: host, port: port}, () => {
  console.log( 'connected to server!' );
  server.setEncoding( 'utf8' );
  process.stdin.setEncoding( 'utf8' );

  process.stdout.write('RizziSays: ');

  process.stdin.on('data', (data) => {
    server.write( data );
  });

  server.on('data', (data) => {
    process.stdout.write('\r' + data + '\nRizzySays: ');
  });

});