/**
 * Loads the players of a team from the database based on :teamid
 * The result is saved to res.locals.players
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getPlayersForTeamMW");

        res.locals.players = [
            {
                id: 1,
                name: "DeAndre Hopkins",
                age: 28,
                jersey_number: 10,
                team: "Arizona Cardinals",
                position: "WR",
                bio: "DeAndre Hopkins is an American football wide receiver for the Arizona Cardinals..."
            },
            {
                id: 2,
                name: "Kyler Murray",
                age: 24,
                jersey_number: 1,
                team: "Arizona Cardinals",
                position: "QB",
                bio: "Kyler Murray is an American football quarterback for the Arizona Cardinals..."
            }
        ]

        next();
    };
};