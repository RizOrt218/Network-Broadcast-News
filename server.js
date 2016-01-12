const net = require( 'net' );
const host = 'localhost';
const port = 9999;
const username = require( './username' );

var chatters = [];

const server = net.createServer( (client) => {
  client.setEncoding( 'utf8' );
  var id = 2000;
  //what client will get when they get connected
  client.write('This is your server, Welcome!\n Enter username: ');

  //when a client has been connected
  process.stdout.write('Connected to: '+ chatters.length +'\n');

  //trying to create an array to track who's connecting
  chatters.push( client );

  //when client types something it'll return to other clients
  client.on('data', function (data) {
    if( client.hasOwnProperty( 'username' ) === false ) {
      console.log( 'no username' );
      client.username = data.toUpperCase().trim();
    }

    for(var i = 0; i < chatters.length; i++) {

      //this avoids recieving data from current chatter
      //while current chatter sends out data to others
      if( chatters[i] !== client ) {
        chatters[i].write( data )
        console.log( chatters[i] );
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
