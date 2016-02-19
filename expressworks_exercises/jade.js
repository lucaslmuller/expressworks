var express = require('express');
var app = express();
var fs = require("fs");

fs.readFile(process.argv[3], callback);

function callback(err, data){
    if(err){throw err}
    else {
        console.log(data);
    }
}


app.listen(process.argv[2]);