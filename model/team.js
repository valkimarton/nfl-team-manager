const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Team = db.model('Team', {
    name: String,
    estimated: Number,
    owner: String,
    coach: String,
    image: String
});

module.exports = Team;