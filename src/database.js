// src/database.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('simple-server-database', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;