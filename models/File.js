const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class File extends Model {}

File.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }, 
  type: {
    type: DataTypes.STRING,
  },
  edited: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  project_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "project",
      key: "id",
    },
  },
  
  
  
},
{
    sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'file',
});

module.exports = File;