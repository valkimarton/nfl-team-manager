/**
 * Loads a player from the database based on the :playerid
 * The result is saved to res.locals.player
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getPlayerMW");

        res.locals.player =  {
            id: 1,
            name: "DeAndre Hopkins",
            age: 28,
            jersey_number: 10,
            team: "Arizona Cardinals",
            team_id: 1,
            position: "WR",
            bio: "DeAndre Hopkins is an American football wide receiver for the Arizona Cardinals..."
        };

        next();
    };
};