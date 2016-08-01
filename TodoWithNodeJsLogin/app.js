var port = 80;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var DATA = ['Item 1','Item 2', 'Item 3'];
app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json

app.get('/', function (req, res) {
  res.send('Hello World!');
});
//random Comment
app.get('/getTodo', function (req, res){
    res.send(DATA);
});

app.post('/setTodo', function (req,res){
   console.log(req.body);
   DATA = req.body;
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
