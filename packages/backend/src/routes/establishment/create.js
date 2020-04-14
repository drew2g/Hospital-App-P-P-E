import { v4 as uuidv4 } from 'uuid';
import { Establishment } from '../../models';

/**
 * @swagger
 *
 * paths:
 *   /establishment/:
 *     post:
 *       description: create a establishment
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 currentNeed:
 *                   type: string
 *                 currentRelief:
 *                   type: number
 *                 totalRelief:
 *                   type: number
 *                 lat:
 *                   type: number
 *                   format: float
 *                 lng:
 *                   type: number
 *                   format: float
 *                 city:
 *                   type: string
 *                 state:
 *                   type: string
 *                 country:
 *                   type: string
 *                 isActive:
 *                   type: boolean
 *       responses:
 *         "201":
 *           description: Establishment was created
 *           content:
 *             application/json:
 *               schema:
 *                $ref: "#/components/schemas/Establishment"
 *         "404":
 *           description: Establishment not found
 *
 */

export default async ({ body }, res) => {
  try {
    const establishment = await Establishment.create({
      id: uuidv4(),
      ...body,
    });
    if (!establishment) {
      return res.status(400).send({
        id: 'MalformedError',
        status: '409',
        code: 'MalformedError',
        title: 'MalformedError',
        detail: `Couldn't create establishment`,
      });
    }
    return res.status(201).send({ establishment });
  } catch (error) {
    return res.status(401).send({ error });
  }
};
