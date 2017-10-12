var express = require('express');
var mySite = express();

mySite.use(express.static('./'));

mySite.listen(3000, function () {
  console.log('Example mySite listening on port 3000!');
});
