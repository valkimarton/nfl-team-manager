var expect = require('chai').expect;
var saveTeamtMW = require('../../../../middleware/team/saveTeamMW');

describe('saveTeamtMW middleware ', function () {

  it('should set res.locals.team with a team object created', function (done) {
    const mw = saveTeamtMW({
      TeamModel: {}
    });

    const resMock = {
      locals:{
        team: {
          _id: 'teamid',
          save: (cb)=>{
            cb(null);
          }
        }
      },
      redirect: (where) => {
        expect(where).to.be.eql('/team/teamid');
        done();
      }
    };

    mw({
      body: {
        name: 'name',
        estimated: '1999',
        owner: 'Mr. Owner',
        coach: 'Mr. Coach'
      },
      params:{
        teamid: '99'
      }
    },
    resMock,
    (err)=>{
    });
  });

  it('should call next(err), when there is db error', function (done) {
    const mw = saveTeamtMW({
      TeamModel: {}
    });

    const resMock = {
      locals:{
        team: {
          _id: 'teamid',
          save: (cb)=>{
            cb('hiba');
          }
        }
      },
      redirect: (where) => {
      }
    };

    mw({
      body: {
        name: 'name',
        estimated: '1999',
        owner: 'Mr. Owner',
        coach: 'Mr. Coach'
      },
      params:{
        teamid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.eql('hiba');
      done();
    });
  });

  it('should call next(err) with num error on estimated param', function (done) {
    const mw = saveTeamtMW({
      TeamModel: {}
    });

    const resMock = {
      locals:{
        team: {
          _id: 'teamid',
          save: (cb)=>{
            cb(null);
          }
        }
      },
      redirect: (where) => {
      }
    };

    mw({
      body: {
        name: 'name',
        estimated: 'NotANumber',
        owner: 'Mr. Owner',
        coach: 'Mr. Coach'
      },
      params:{
        teamid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.instanceOf(Error);
      expect(err.toString()).to.be.eql('Error: Year of estimation must be a number!');
      done();
    });
  });

  it('should call next(err) with error because name is empty', function (done) {
    const mw = saveTeamtMW({
      TeamModel: {}
    });

    const resMock = {
      locals:{
        team: {
          _id: 'teamid',
          save: (cb)=>{
            cb(null);
          }
        }
      },
      redirect: (where) => {
      }
    };

    mw({
      body: {
        name: '',
        estimated: '1999',
        owner: 'Mr. Owner',
        coach: 'Mr. Coach'
      },
      params:{
        teamid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.instanceOf(Error);
      expect(err.toString()).to.be.eql('Error: Name must not be empty!');
      done();
    });
  });

  it('should set res.locals.team with a team object created', function (done) {
    class TeamMockModel {
      save(cb) {
        resMock.locals.team = {
          _id: 'teamid'
        }
        cb(null);
      }
    }

    const mw = saveTeamtMW({
      TeamModel: TeamMockModel
    });

    const resMock = {
      locals:{

      },
      redirect: (where) => {
        expect(where).to.be.eql('/team/teamid');
        done();
      }
    };

    mw({
      body: {
        name: 'name',
        estimated: '1999',
        owner: 'Mr. Owner',
        coach: 'Mr. Coach'
      },
      params:{
        teamid: '99'
      }
    },
    resMock,
    (err)=>{
    });
  });

  it('should call next() without error when req.body.name is undefined', function (done) {
    const mw = saveTeamtMW({
      TeamModel: {}
    });

    const resMock = {
      locals:{
        team: {
          _id: 'teamid',
          save: (cb)=>{
            cb(null);
          }
        }
      }
    };

    mw({
      body: {
        estimated: '1999',
        owner: 'Mr. Owner',
        coach: 'Mr. Coach'
      },
      params:{
        teamid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.eql(undefined);
      done();
    });
  });

  it('should call next() without error when req.body.estimated is undefined', function (done) {
    const mw = saveTeamtMW({
      TeamModel: {}
    });

    const resMock = {
      locals:{
        team: {
          _id: 'teamid',
          save: (cb)=>{
            cb(null);
          }
        }
      }
    };

    mw({
      body: {
        name: 'name',
        owner: 'Mr. Owner',
        coach: 'Mr. Coach'
      },
      params:{
        teamid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.eql(undefined);
      done();
    });
  });

  it('should call next() without error when req.body.owner is undefined', function (done) {
    const mw = saveTeamtMW({
      TeamModel: {}
    });

    const resMock = {
      locals:{
        team: {
          _id: 'teamid',
          save: (cb)=>{
            cb(null);
          }
        }
      }
    };

    mw({
      body: {
        name: 'name',
        estimated: '1999',
        coach: 'Mr. Coach'
      },
      params:{
        teamid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.eql(undefined);
      done();
    });
  });

  it('should call next() without error when req.body.coach is undefined', function (done) {
    const mw = saveTeamtMW({
      TeamModel: {}
    });

    const resMock = {
      locals:{
        team: {
          _id: 'teamid',
          save: (cb)=>{
            cb(null);
          }
        }
      }
    };

    mw({
      body: {
        name: 'name',
        estimated: '1999',
        owner: 'Mr. Owner'
      },
      params:{
        teamid: '99'
      }
    },
    resMock,
    (err)=>{
      expect(err).to.be.eql(undefined);
      done();
    });
  });

}); 