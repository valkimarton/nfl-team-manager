/**
 * Loads a player from the database based on the :playerid
 * The result is saved to res.locals.player
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const PlayerModel = requireOption(objectrepository, 'PlayerModel');

    return function (req, res, next) {

        PlayerModel.findOne(
            {
                _id: req.params.playerid
            },
            (err, player) => {
                if (err || !player) {
                    return next(err);
                }
                res.locals.player = player;
                return next();
            });
    };
};