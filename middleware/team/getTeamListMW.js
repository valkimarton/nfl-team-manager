/**
 * Loads the teams from the database
 * The result is saved to res.locals.teams
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getTeamListMW");
        next();
    };
};