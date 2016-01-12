module.exports = (function () {
  var newUsers = [];

  var getUsername = function ( data ) {
    process.stdin( data );
    console.log( data );
  }

  return getUsername;
}())