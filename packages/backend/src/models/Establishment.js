import Sequelize, { Model } from 'sequelize';
import sequelize from '../services';

/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Establishment:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         currentNeed:
 *           type: string
 *         currentRelief:
 *           type: number
 *         totalRelief:
 *           type: number
 *         lat:
 *           type: number
 *           format: float
 *         lng:
 *           type: number
 *           format: float
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         country:
 *           type: string
 *         created:
 *           type: string
 *           format: date-time
 *         updated:
 *           type: string
 *           format: date-time
 *         isActive:
 *           type: boolean
 */

class Establishment extends Model {}

export default Establishment.init(
  {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      field: 'name',
    },
    currentNeed: {
      type: Sequelize.STRING,
      field: 'current_need',
    },
    currentRelief: {
      type: Sequelize.INTEGER,
      field: 'current_relief',
    },
    totalRelief: {
      type: Sequelize.INTEGER,
      field: 'total_relief',
    },
    lat: Sequelize.FLOAT,
    lng: Sequelize.FLOAT,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING,
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updated: Sequelize.DATE,
    isActive: {
      type: Sequelize.BOOLEAN,
      field: 'is_active',
    },
  },
  {
    sequelize,
    modelName: 'establishment',
    tableName: 'establishment',
    timestamps: false,
  }
);
