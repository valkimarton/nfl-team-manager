/**
 * Loads the teams from the database
 * The result is saved to res.locals.teams
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const TeamModel = requireOption(objectrepository, 'TeamModel');

    return function (req, res, next) {
        console.log("getTeamListMW");
        TeamModel.find({}, (err, teams) => {
            if (err) {
                return next(err);
            }

            res.locals.teams = teams;
            return next()
        });
    };
};