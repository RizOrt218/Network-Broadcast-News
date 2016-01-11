const net  = require( 'net' );
const HOST = 'localhost';
const PORT = 9999;

const server = net.connect({ host: HOST , port: PORT }, () => {
  console.log( 'connected to server!' );
  process.stdin.setEncoding( 'utf8' );
  server.setEncoding( 'utf8' );

  process.stdout.write('ClientASays: ');

  process.stdin.on('data', (data) => {
    server.write( data );
  });

  //
  server.on('data', (data) => {
    process.stdout.write('\r' + data + '\nClientASays: ');
  });

  //when server ends connection
  server.on('end', function () {
    console.log('end connection')
  })

});