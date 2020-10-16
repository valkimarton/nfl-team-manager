/**
 * Loads a player from the database based on the :playerid
 * The result is saved to res.locals.player
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getPlayerMW");
        next();
    };
};