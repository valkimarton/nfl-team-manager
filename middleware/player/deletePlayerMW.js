/**
 * Deletes a player from the database
 * uses the entity res.locals.player
 * Redirects to /team/:teamid after successful delete
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const PlayerModel = requireOption(objectrepository, 'PlayerModel');

    return function (req, res, next) {
        console.log("deletePlayerMW");

        if (typeof res.locals.player === 'undefined') {
            return next();
        }

        res.locals.player.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/team/${res.locals.team._id}`);
        });
    };
};