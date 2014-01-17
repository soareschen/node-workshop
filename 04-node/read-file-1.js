
var fs = require('fs')

fs.readFile('../sample/sample-1.txt', function(err, content) {
  if(err) throw err

  console.log('' + content)
})