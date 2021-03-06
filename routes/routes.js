
const renderMW = require('../middleware/common/renderMW');
const getPlayerMW = require('../middleware/player/getPlayerMW');
const getPlayersForTeamMW = require('../middleware/player/getPlayersForTeamMW');
const savePlayerMW = require('../middleware/player/savePlayerMW');
const deletePlayerMW = require('../middleware/player/deletePlayerMW');
const getTeamMW = require('../middleware/team/getTeamMW');
const getTeamListMW = require('../middleware/team/getTeamListMW');
const saveTeamMW = require('../middleware/team/saveTeamMW');

const TeamModel = require('../model/team');
const PlayerModel = require('../model/player');

module.exports = function (app) {
    const objectRepository = {
        TeamModel: TeamModel,
        PlayerModel: PlayerModel
    };

    app.use('/teams/new',
        saveTeamMW(objectRepository),
        renderMW(objectRepository, 'new_team'));
    app.use('/team/edit/:teamid',
        getTeamMW(objectRepository),
        saveTeamMW(objectRepository),
        renderMW(objectRepository, 'new_team'));
    app.get('/team/:teamid',
        getTeamMW(objectRepository),
        getPlayersForTeamMW(objectRepository),
        renderMW(objectRepository, 'team'));

    app.use('/player/:teamid/new',
        getTeamListMW(objectRepository),
        getTeamMW(objectRepository),
        savePlayerMW(objectRepository),
        renderMW(objectRepository, 'new_player'));
    app.use('/player/:teamid/edit/:playerid',
        getTeamListMW(objectRepository),
        getTeamMW(objectRepository),
        getPlayerMW(objectRepository),
        savePlayerMW(objectRepository),
        renderMW(objectRepository, 'new_player'));
    app.get('/player/:teamid/del/:playerid',
        getTeamMW(objectRepository),
        getPlayerMW(objectRepository),
        deletePlayerMW(objectRepository),
        renderMW(objectRepository, 'team'));
    app.get('/player/:teamid/:playerid',
        getTeamMW(objectRepository),
        getPlayerMW(objectRepository),
        renderMW(objectRepository, 'player'));
    
    app.get('/',
        getTeamListMW(objectRepository),
        renderMW(objectRepository, 'index'));
};