/**
 * Save or update a player based on POST params.
 * If there is no Team data in the request body, it doesn't do anything
 * If res.locals.player is there, it's an update. Otherwise we create a new Player.
 * Redirects to /player after success
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const PlayerModel = requireOption(objectrepository, 'PlayerModel');

    return function (req, res, next) {
        console.log("savePlayerMW");
        
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.age === 'undefined' ||
            typeof req.body.number === 'undefined' ||
            typeof req.body.position === 'undefined' ||
            typeof req.body.bio === 'undefined' ||
            typeof res.locals.team === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.player === 'undefined') {
            res.locals.player = new PlayerModel();
        }

        if (Number.isNaN(parseInt(req.body.age, 10))) {
            return next(new Error('Age must be a number!'));
        }
        if (Number.isNaN(parseInt(req.body.number, 10))) {
            return next(new Error('Jersey number must be a number!'));
        }

        res.locals.player.name = req.body.name;
        res.locals.player.age = parseInt(req.body.age, 10);
        res.locals.player.number = parseInt(req.body.number, 10);
        res.locals.player.position = req.body.position;
        res.locals.player.bio = req.body.bio;
        res.locals.player._team = res.locals.team._id;

        res.locals.player.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/player/${res.locals.player._team}/${res.locals.player._id}`);
        });
    };
};