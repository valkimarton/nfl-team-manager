/**
 * Loads a team from the database based on the :teamid
 * The result is saved to res.locals.team
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getTeamMW");

        res.locals.team = {
            id: '1',
            name: "Arizona Cardinals",
            estimated: 1954,
            owner: "John Doe",
            coach: "Kliff Kingsbury",
            image: "https://content.sportslogos.net/logos/7/177/thumbs/kwth8f1cfa2sch5xhjjfaof90.gif"
        }

        next();
    };
};