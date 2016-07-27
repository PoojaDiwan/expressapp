var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.post('/', function (req, res) {
  res.send('Got a POST request');
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
})


var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
