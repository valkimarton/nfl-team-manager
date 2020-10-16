/**
 * Loads the players of a team from the database based on :teamid
 * The result is saved to res.locals.players
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getPlayersForTeamMW");
        next();
    };
};