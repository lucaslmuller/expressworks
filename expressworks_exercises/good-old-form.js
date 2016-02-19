var express = require('express');
var app = express();
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))

app.set('views', process.argv[3], 'templates')
app.set('view engine', 'jade')

app.post('/form', function(req, res){
    res.end(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2]);