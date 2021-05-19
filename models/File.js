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
  type: {
    type: DataTypes.STRING,
  },
  file: {
      type: DataTypes.STRING
  },
  project_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "project",
      key: "id",
    },
  },
  edited: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
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