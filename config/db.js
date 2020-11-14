const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hvpyuy', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;