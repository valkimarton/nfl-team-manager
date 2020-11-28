const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Player = db.model('Player', {
    name: String,
    age: Number,
    number: Number,
    position: String,
    bio: String,
    image: String,
    _team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
});

module.exports = Player;