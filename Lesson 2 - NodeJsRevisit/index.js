var port = 80;
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('hello World');
}); 

app.listen(port, function(){
    console.log('Example app listening on port ' + port);
});   