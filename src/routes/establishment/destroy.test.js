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

  it('should delete an establishment', () =>
    request
      .delete(`/establishment/${id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toHaveProperty(
          'message',
          `Establishment ${id} was successfuly destroyed`
        );
      }));

  it(`should return 404 because no establishment with id ${wrongId} exists`, () =>
    request
      .delete(`/establishment/${wrongId}`)
      .expect('Content-Type', /json/)
      .expect(404, {
        id: 'NotFoundError',
        status: '404',
        code: 'NotFoundError',
        title: 'NotFoundError',
        detail: `Establishment #${wrongId} does not exists`,
      }));
});
