const net   = require( 'net' );
const host  = 'localhost';
const port  = 9999;

var chatters = [];

const server = net.createServer( (client) => {
  var username = null;

  client.setEncoding( 'utf8' );
  //readable to client when they connect
  client.write('This is your server, Welcome!\nEnter username: ');

  //prompts server when a client connected
  process.stdout.write('Connected to '+host+': '+client.remotePort+'\n');

  //trying to create an array to track who's connecting
  chatters.push( client );
  // console.log( chatters );
  //when client types something it'll return to other clients
  client.on('data', function (data) {
    if( client.hasOwnProperty( 'username' ) === false ) {
      client.username = data.toUpperCase().trim();
      username = client.username;
    }

    for(var i = 0; i < chatters.length; i++) {
      chatters[i].write( '\r'+ username +': ' + data);
    }
  }) // end of client.on

  //when client ends connection
  client.on('end', function () {
    console.log('client ended connection')
  })

}).listen(9999, () => {
  console.log( 'Server is running' );
})
