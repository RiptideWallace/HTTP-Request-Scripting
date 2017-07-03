module.exports = function getHTML(options, callback) {



  var https = require('https');
  var buf = "";

  var requestOptions = options;


console.log('Making a GET Request to the Server');
https.get(requestOptions, function (response) {

    response.setEncoding('utf8');
    console.log('The data is available');

    response.on('data', function (chunk) {
      buf += chunk;
      console.log('Chunk Recieved. Length: ', chunk.length);

    });

    response.on('end', function() {
      console.log('Response stream complete');
      console.log(buf);
    });

  });


}



