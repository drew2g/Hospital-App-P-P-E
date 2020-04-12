import Establishment from '../../models';

/**
 * @swagger
 *
 * paths:
 *   /establishment/:id:
 *     get:
 *       description: get an establishment
 *       parameters:
 *       - in: path
 *         name: id   # Note the name is the same as in the path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The Establishment ID
 *       responses:
 *         "200":
 *           description: returns the Establishment
 *         "404":
 *           description: Establishment not found
 *
 */

export default async ({ params: { id } }, res) => {
  try {
    const establishment = await Establishment.findByPk(id);
    if (!establishment) {
      return res.send({
        id: 'NotFoundError',
        status: '404',
        code: 'NotFoundError',
        title: 'NotFoundError',
        detail: `Establishment #${id} does not exists`,
      });
    }
    return res.send({ establishment });
  } catch (error) {
    return res.send({ error });
  }
};
