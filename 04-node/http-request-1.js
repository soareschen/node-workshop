
'use strict'

var http = require('http')

http.request('http://nodejs.org', function(response) {
  if(response.statusCode == 200) {
    response.pipe(process.stdout)
  } else {
    console.log('Server returned non-success status code', response.statusCode)
  }
}).end()