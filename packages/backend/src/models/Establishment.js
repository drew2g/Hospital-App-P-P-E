import Sequelize, { Model } from 'sequelize';
import sequelize from '../services';

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
