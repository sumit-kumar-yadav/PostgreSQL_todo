{
    const { Sequelize, DataTypes } = require('sequelize');  
    const { sequelize } = require('../config/sequilize');
  
      const Category = sequelize.define('Category', {
          type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
        }, {
          // options
          paranoid: true,    // For soft delete
        });
        
      
      module.exports = Category;
  }