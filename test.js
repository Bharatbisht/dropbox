var Dropbox = require('dropbox').Dropbox;

var dbx = new Dropbox({ 
  accessToken: 'AO_-T0wz4CAAAAAAAAAAKI0nMlBeLCOQSTIzcsAhZEyDfPp7zw6Ru0B_4AbqJzMl',

  fetch
});

dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })