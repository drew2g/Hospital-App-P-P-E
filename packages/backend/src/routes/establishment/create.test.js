import sequelize from '../../services';
import request, { randomEstablishment } from '../../utils/jest';
import { Establishment } from '../../models';

describe('create /establishment/', () => {
  beforeAll(async () => {
    await Establishment.truncate();
  });

  afterAll(() => Promise.all([sequelize.close()]));

  it('should create a establishment', () =>
    request
      .post('/establishment')
      .send({
        ...randomEstablishment(),
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toHaveProperty('establishment');
        expect(body.establishment).toHaveProperty(
          'name',
          'Northflight EMS Base'
        );
        expect(body.establishment).toHaveProperty('currentNeed', '750 masks');
        expect(body.establishment).toHaveProperty('currentRelief', 20);
        expect(body.establishment).toHaveProperty('totalRelief', 25);
        expect(body.establishment).toHaveProperty('isActive', true);
        expect(body.establishment).toHaveProperty('lat', 52.96857);
        expect(body.establishment).toHaveProperty('lng', 8.01663);
        expect(body.establishment).toHaveProperty('city', 'Traverse city');
        expect(body.establishment).toHaveProperty('state', 'Michigan');
        expect(body.establishment).toHaveProperty('country', 'USA');
      }));
});
