/**
 * Save or update a player based on POST params.
 * If there is no Team data in the request body, it doesn't do anything
 * If res.locals.player is there, it's an update. Otherwise we create a new Player.
 * Redirects to /player after success
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("savePlayerMW");
        next();
    };
};