// src/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../src/database');

const customerModel = sequelize.define('customer', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  tableName: "customer",
  timestamps: false
});

module.exports = customerModel;