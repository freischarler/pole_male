import { sequelize } from '../config/db.js';

const syncModels = async () => {
  await sequelize.sync({ alter: true });
};

export default {
  sequelize,
  syncModels,

};