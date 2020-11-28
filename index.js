var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('static'));

// Include all routes
require('./routes/routes')(app)

// Error handling middleware
app.use((err, req, res, next) => {
    res.end(err.toString());
    console.log(err);
});

var server = app.listen(3000, function () {
    console.log("On: 3000");
});

