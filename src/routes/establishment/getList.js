import Establishment from '../../models';

/**
 * @swagger
 *
 * paths:
 *   /establishment/:
 *     get:
 *       description: get list of Establishments
 *       responses:
 *         "200":
 *           description: returns the Establishments
 *
 */

export default async (_, res) => {
  try {
    const establishments = await Establishment.findAll({
      attributes: [
        'id',
        'name',
        'currentNeed',
        'totalRelief',
        'lat',
        'lng',
        'city',
        'state',
        'country',
        'created',
        'isActive',
      ],
      where: {
        isActive: true,
      },
      order: [
        ['name', 'ASC'],
        ['country', 'ASC'],
        ['state', 'ASC'],
        ['city', 'ASC'],
      ],
    });
    if (!establishments) {
      return res.send({
        id: 'NotFoundError',
        status: '404',
        code: 'NotFoundError',
        title: 'NotFoundError',
        detail: `Can't get any establishment.`,
      });
    }
    return res.send({
      establishments,
      count: establishments.length,
    });
  } catch (error) {
    return res.send({ error });
  }
};
