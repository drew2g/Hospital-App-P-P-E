import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../services';
import request, { hospitals } from '../../utils/jest';
import { Establishment } from '../../models';

const id = uuidv4();
const wrongId = uuidv4();

describe('create /establishment/', () => {
  beforeAll(async () => {
    await Establishment.truncate();
    await Establishment.bulkCreate([
      {
        ...hospitals.northflight,
        id,
      },
    ]);
  });

  afterAll(() => Promise.all([sequelize.close()]));

  it('should return an establishment', () =>
    request
      .get(`/establishment/${id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({ body }) => {
        expect(body.establishment).toHaveProperty('id', id);
        expect(body.establishment).toHaveProperty(
          'name',
          hospitals.northflight.name
        );
        expect(body.establishment).toHaveProperty(
          'currentNeed',
          hospitals.northflight.currentNeed
        );
        expect(body.establishment).toHaveProperty(
          'currentRelief',
          hospitals.northflight.currentRelief
        );
        expect(body.establishment).toHaveProperty(
          'totalRelief',
          hospitals.northflight.totalRelief
        );
        expect(body.establishment).toHaveProperty(
          'lat',
          hospitals.northflight.lat
        );
        expect(body.establishment).toHaveProperty(
          'lng',
          hospitals.northflight.lng
        );
        expect(body.establishment).toHaveProperty(
          'city',
          hospitals.northflight.city
        );
        expect(body.establishment).toHaveProperty(
          'state',
          hospitals.northflight.state
        );
        expect(body.establishment).toHaveProperty(
          'country',
          hospitals.northflight.country
        );
        expect(body.establishment).toHaveProperty(
          'isActive',
          hospitals.northflight.isActive
        );
      }));

  it(`should return 404 because no establishment with id ${wrongId} exists`, () =>
    request
      .get(`/establishment/${wrongId}`)
      .expect('Content-Type', /json/)
      .expect(404, {
        id: 'NotFoundError',
        status: '404',
        code: 'NotFoundError',
        title: 'NotFoundError',
        detail: `Establishment #${wrongId} does not exists`,
      }));
});
