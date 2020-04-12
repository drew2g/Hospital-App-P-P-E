import Sequelize, { Model } from 'sequelize';
import sequelize from '../services';

class Receiver extends Model {}

export default Receiver.init(
  {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      field: 'name',
    },
    password: Sequelize.STRING,
    establishment: Sequelize.INTEGER,
    establishmentId: {
      type: Sequelize.INTEGER,
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
