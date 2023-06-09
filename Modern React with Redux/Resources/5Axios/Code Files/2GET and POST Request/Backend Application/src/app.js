var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routing')
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

if (!module.parent) {
    app.listen(2000);
}
console.log("Server listening in port 2000");


module.exports = app