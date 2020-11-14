/**
 * Loads a team from the database based on the :teamid
 * The result is saved to res.locals.team
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const TeamModel = requireOption(objectrepository, 'TeamModel');

    return function (req, res, next) {
        console.log("getTeamMW");
        TeamModel.findOne({_id: req.params.teamid}, (err, team) => {
            if (err || !team) {
                return next(err);
            }
            
            console.log(team);
            res.locals.team = team;
            return next()
        });
    };
};