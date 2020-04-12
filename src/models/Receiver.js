import Sequelize, { Model } from 'sequelize';
import sequelize from '../services';

class Receiver extends Model {}

Receiver.init(
  {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      field: 'name',
    },
    password: {
      type: Sequelize.STRING,
      field: 'password',
    },
    establishment: {
      type: Sequelize.STRING,
      field: 'establishment',
    },
    establishmentID: {
      type: Sequelize.STRING,
      field: 'establishment_id',
    },
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
    modelName: 'receiver',
    tableName: 'receiver',
    timestamps: false,
  }
);

export default Receiver;
