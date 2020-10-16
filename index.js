var express = require('express');
var app = express();

app.use(express.static('static'));

/**
 * Include all routes
 */
require('./routes/routes')(app)

var server = app.listen(3000, function () {
    console.log("On: 3000");
});