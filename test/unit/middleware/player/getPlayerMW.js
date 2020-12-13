var expect = require('chai').expect;
var getPlayertMW = require('../../../../middleware/player/getPlayerMW');

describe('getPlayerMW middleware ', function () {

  it('should set res.locals.player to player from db', function (done) {
    const mw = getPlayertMW({
      PlayerModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({_id: '99'});
          cb(null, 'playerMock');
        }
      }
    });

    const resMock = {
      locals: {}
    };

    mw({
      params:{
        playerid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.eql(undefined);
      expect(resMock.locals).to.be.eql({player: 'playerMock'}); 
      done();
    });
  });

  it('should call next with error when problem occurs in db', function (done) {
    const mw = getPlayertMW({
      PlayerModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({_id: '99'});
          cb('hiba', 'playerMock');
        }
      }
    });

    const resMock = {
      locals: {}
    };

    mw({
      params:{
        playerid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.eql('hiba');
      done();
    });
  });

  it('should call next when no player found in db', function (done) {
    const mw = getPlayertMW({
      PlayerModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({_id: '99'});
          cb(undefined, null);
        }
      }
    });

    const resMock = {
      locals: {}
    };

    mw({
      params:{
        playerid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.eql(undefined);
      expect(resMock.locals).to.be.eql({}); 
      done();
    });
  });
});