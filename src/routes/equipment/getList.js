const equipmentList = [
  'N95 Masks',
  'Hand Sanitizer',
  'Ventilators',
  'Surgical Gloves',
  'Face Shields',
  'Triple Layer Surgical Masks',
  'Disinfecting Wipes',
  'CPap or BiPap Machines',
  'Isolation Gowns',
];

/**
 * @swagger
 *
 * paths:
 *   /equipment/:
 *     get:
 *       description: get list of equipment
 *       responses:
 *         "200":
 *           description: returns the equipments
 *
 */

export default async (_, res) => {
  return res.send(equipmentList);
};
