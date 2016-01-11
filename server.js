const net = require( 'net' );
const host = 'localhost';
const port = 9999;

var chatters = [];

const server = net.createServer( (client) => {

  //what client will get when they get connected
  client.write('This is your server, Welcome eeerbody');

  //when a client has been connected
  process.stdout.write('Client A connected\n');

  //trying to create an array to track who's connecting
  chatters.push( client );
  console.log( chatters.length );

  //when client types something it'll return to other clients
  client.on('data', function (data) {
    for(var i = 0; i < chatters.length; i++) {

      if( chatters[i] !== client ) {
        chatters[i].write( data )
      }

    }
  })



  //when client ends connection
  client.on('end', function () {
    console.log('client ended connection')
  })

}).listen(9999, () => {
  console.log( 'Server is running' );
})
