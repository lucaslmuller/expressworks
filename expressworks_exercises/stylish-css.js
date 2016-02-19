var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.set('view engine', 'jade')

app.listen(process.argv[2]);