/**
 * Save or update a team based on POST params.
 * If there is no Team data in the request body, it doesn't do anything
 * If res.locals.team is there, it's an update. Otherwise we create a new Team.
 * Redirects to /team after success
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const TeamModel = requireOption(objectrepository, 'TeamModel');

    return function (req, res, next) {
        
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.estimated === 'undefined' ||
            typeof req.body.owner === 'undefined' ||
            typeof req.body.coach === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.team === 'undefined'){
            res.locals.team = new TeamModel();
        }

        if (req.body.name === '') {
            return next(new Error('Name must not be empty!'));
        }
        if (Number.isNaN(parseInt(req.body.estimated, 10))) {
            return next(new Error('Year of estimation must be a number!'));
        }

        res.locals.team.name = req.body.name;
        res.locals.team.estimated = parseInt(req.body.estimated, 10);
        res.locals.team.owner = req.body.owner;
        res.locals.team.coach = req.body.coach;
        res.locals.team.image = req.body.image;

        res.locals.team.save((err) => {
            if (err){
                return next(err);
            }

            return res.redirect(`/team/${res.locals.team._id}`);
        });
    };
};