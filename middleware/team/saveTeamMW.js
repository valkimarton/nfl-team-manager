/**
 * Save or update a team based on POST params.
 * If there is no Team data in the request body, it doesn't do anything
 * If res.locals.team is there, it's an update. Otherwise we create a new Team.
 * Redirects to /team after success
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("saveTeamMW");
        next()
    };
};