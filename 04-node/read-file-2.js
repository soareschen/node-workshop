
var fs = require('fs')

fs.createReadStream('../sample/sample-1.txt').pipe(process.stdout)