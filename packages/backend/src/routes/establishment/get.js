import { Establishment } from '../../models';

/**
 * @swagger
 *
 * paths:
 *   /establishment/:id:
 *     get:
 *       description: get an establishment
 *       parameters:
 *       - in: path
 *         name: id   # Note the id is the same as in the path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The Establishment ID
 *       responses:
 *         "200":
 *           description: returns the Establishment
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: "#/components/schemas/Establishment"
 *         "404":
 *           description: Establishment not found
 *
 */

export default async ({ params: { id } }, res) => {
  try {
    const establishment = await Establishment.findByPk(id);
    if (!establishment) {
      return res.status(404).send({
        id: 'NotFoundError',
        status: '404',
        code: 'NotFoundError',
        title: 'NotFoundError',
        detail: `Establishment #${id} does not exists`,
      });
    }
    return res.send({ establishment });
  } catch (error) {
    // to change later because it expose the db model
    return res.status(400).send({ error });
  }
};
