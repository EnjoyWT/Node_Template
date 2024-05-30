const { Sequelize } = require('sequelize');
const config = require('../config/config');
const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env];


const sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, {
    host: sequelizeConfig.host,
    port: sequelizeConfig.port, // 添加端口号
    dialect: sequelizeConfig.dialect,
  });
  

const db = {
  sequelize,
  Sequelize,
  models: {},
};

// 加载模型
db.models.User = require('./user')(sequelize, Sequelize);


module.exports = db;
