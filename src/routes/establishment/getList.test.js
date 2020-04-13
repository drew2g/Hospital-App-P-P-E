import sequelize from '../../services';
import request, { hospitals } from '../../utils/jest';
import { Establishment } from '../../models';

describe('get /establishment/', () => {
  beforeAll(async () => {
    console.log([hospitals.northflight, hospitals.saintJoseph]);
    await Establishment.truncate();
    await Establishment.bulkCreate([
      hospitals.northflight,
      hospitals.saintJoseph,
    ]);
  });

  afterAll(() => Promise.all([sequelize.close()]));

  it('should return a list of establishments', () =>
    request
      .get('/establishment/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({ body }) => {
        console.log(body);
        // expect(body.establishments[0]).toHaveProperty('id');
        // expect(body.establishments[0]).toHaveProperty(
        //   'name',
        //   hospitals.northflight.name
        // );
        // expect(body.establishments[0]).toHaveProperty(
        //   'currentNeed',
        //   hospitals.northflight.currentNeed
        // );
        // expect(body.establishments[0]).toHaveProperty(
        //   'currentRelief',
        //   hospitals.northflight.currentRelief
        // );
        // expect(body.establishments[0]).toHaveProperty(
        //   'totalRelief',
        //   hospitals.northflight.totalRelief
        // );
        // expect(body.establishments[0]).toHaveProperty(
        //   'lat',
        //   hospitals.northflight.lat
        // );
        // expect(body.establishments[0]).toHaveProperty(
        //   'lng',
        //   hospitals.northflight.lng
        // );
        // expect(body.establishments[0]).toHaveProperty(
        //   'city',
        //   hospitals.northflight.city
        // );
        // expect(body.establishments[0]).toHaveProperty(
        //   'state',
        //   hospitals.northflight.state
        // );
        // expect(body.establishments[0]).toHaveProperty(
        //   'country',
        //   hospitals.northflight.country
        // );
        // expect(body.establishments[0]).toHaveProperty(
        //   'isActive',
        //   hospitals.northflight.isActive
        // );
      }));
});
