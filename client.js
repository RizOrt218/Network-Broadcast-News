const net  = require( 'net' );
const HOST = 'localhost';
const PORT = 9999;

const server = net.connect({ host: HOST , port: PORT }, () => {

  process.stdin.setEncoding( 'utf8' );
  server.setEncoding( 'utf8' );

  //client.write('This is your server, Welcome!\nEnter username: ');
  server.on('data', (data) => {
    process.stdout.write( data );
  });

  //when client inputs a data, this outputs in serverside
  process.stdin.on('data', (data) => {
    server.write(data);
  });

  //when server ends connection
  server.on('end', function () {
    console.log('end connection')
  })
});