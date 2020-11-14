/**
 * Loads the players of a team from the database based on :teamid
 * The result is saved to res.locals.players
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const PlayerModel = requireOption(objectrepository, 'PlayerModel');

    return function (req, res, next) {
        console.log("getPlayersForTeamMW");

        if (typeof res.locals.team === 'undefined') {
            return next();
        }

        PlayerModel.find({ _team: res.locals.team._id }, (err, players) => {
            if (err) {
                return next(err);
            }

            res.locals.players = players;
            return next();
        });
    };
};