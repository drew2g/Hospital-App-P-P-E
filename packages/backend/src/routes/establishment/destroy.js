import { Establishment } from '../../models';

/**
 * @swagger
 *
 * paths:
 *   /establishment/:id:
 *     delete:
 *       description: delete a establishment
 *       parameters:
 *       - in: path
 *         name: id   # Note the name is the same as in the path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The establishment ID
 *       responses:
 *         "200":
 *           description: Establishment was deleted
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
    await establishment.destroy();
    return res.send({
      message: `Establishment ${id} was successfuly destroyed`,
    });
  } catch (error) {
    return res.send({ error });
  }
};
