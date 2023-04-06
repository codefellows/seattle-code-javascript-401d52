'use strict';

const { sequelize, Band, BandMember } = require('../models');

beforeAll(async() => {
  await sequelize.sync();
});
afterAll(async() => {
  await sequelize.drop();
});

let bandId = null;
let memberId = null;

describe('testing our data models', () => {

  test('Can create a band', async () => {
    let newBand = await Band.create({
      name: 'Flying Monkeys',
      location: 'seattle',
      onTour: false,
      memberNum: 100,
      type: 'experimental'
    });

    bandId = newBand.id;
    expect(newBand.name).toEqual('Flying Monkeys');
    expect(newBand.id).toBeTruthy();
  });

  test('Can create a member', async () => {
    let newMember = await BandMember.create({
      name: 'Jacob',
      canSing: false,
      instrument: 'saxophone',
      numberOfLimbs: 4,
      bandId: bandId
    });

    memberId = newMember.id;
    expect(newMember.name).toEqual('Jacob');
    expect(newMember.bandId).toEqual(bandId);
  });

  test('Can fetch a member and band', async () => {
    let member = await BandMember.read(memberId, {
      include: Band.model
    });

    console.log("MEMBER WITH ASSOCIATION", member);
    expect(member.name).toEqual('Jacob');
    expect(member.Band.name).toEqual('Flying Monkeys')
  })
})
