/**
 * Loads a team from the database based on the :teamid
 * The result is saved to res.locals.team
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getTeamMW");
        next();
    };
};