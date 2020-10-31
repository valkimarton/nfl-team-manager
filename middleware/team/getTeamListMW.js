/**
 * Loads the teams from the database
 * The result is saved to res.locals.teams
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getTeamListMW");

        res.locals.teams = [
            {
                id: '1',
                name: "Arizona Cardinals",
                estimated: 1954,
                owner: "John Doe",
                coach: "Kliff Kingsbury",
                image: "https://content.sportslogos.net/logos/7/177/thumbs/kwth8f1cfa2sch5xhjjfaof90.gif"
            },
            {
                id: '2',
                name: "Seattle Seahawks",
                estimated: 1956,
                owner: "John Doe",
                coach: "Pete Caroll",
                image: "https://content.sportslogos.net/logos/7/180/thumbs/pfiobtreaq7j0pzvadktsc6jv.gif"
            },
            {
                id: '3',
                name: "San Francisco 49ers",
                estimated: 1935,
                owner: "John Doe",
                coach: "Kyle Shanahan",
                image: "https://content.sportslogos.net/logos/7/179/thumbs/17994552009.gif"
            }
        ]

        next();
    };
};