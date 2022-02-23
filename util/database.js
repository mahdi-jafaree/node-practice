const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-practice', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
