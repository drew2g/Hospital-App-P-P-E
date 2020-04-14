import sequelize from '../../services';
import request, { hospitals } from '../../utils/jest';
import { Establishment } from '../../models';

describe('get /establishment/', () => {
  beforeAll(async () => {
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
        expect(body).toHaveProperty('count', 2);
        expect(body).toHaveProperty('establishments');

        expect(body).toHaveProperty(
          'establishments.0.id',
          hospitals.saintJoseph.id
        );
        expect(body).toHaveProperty(
          'establishments.0.name',
          hospitals.saintJoseph.name
        );
        expect(body.establishments[0]).toHaveProperty(
          'currentNeed',
          hospitals.saintJoseph.currentNeed
        );
        expect(body.establishments[0]).toHaveProperty(
          'currentRelief',
          hospitals.saintJoseph.currentRelief
        );
        expect(body.establishments[0]).toHaveProperty(
          'totalRelief',
          hospitals.saintJoseph.totalRelief
        );
        expect(body.establishments[0]).toHaveProperty(
          'lat',
          hospitals.saintJoseph.lat
        );
        expect(body.establishments[0]).toHaveProperty(
          'lng',
          hospitals.saintJoseph.lng
        );
        expect(body.establishments[0]).toHaveProperty(
          'city',
          hospitals.saintJoseph.city
        );
        expect(body.establishments[0]).toHaveProperty(
          'state',
          hospitals.saintJoseph.state
        );
        expect(body.establishments[0]).toHaveProperty(
          'country',
          hospitals.saintJoseph.country
        );
        expect(body.establishments[0]).toHaveProperty(
          'isActive',
          hospitals.saintJoseph.isActive
        );
      }));
});
