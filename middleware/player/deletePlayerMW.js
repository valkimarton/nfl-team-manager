/**
 * Deletes a player from the database
 * uses the entity res.locals.player
 * Redirects to /team/:teamid after successful delete
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("deletePlayerMW");
        next();
    };
};