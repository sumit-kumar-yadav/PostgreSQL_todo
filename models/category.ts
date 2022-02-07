{
    const { Sequelize, DataTypes } = require('sequelize');  
    const { sequelize } = require('../config/sequilize');
  
      const Category = sequelize.define('Category', {
        //   name: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        //   },
        //   mobile_no: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     // unique: true
        //   }
        }, {
          // options
        });
        
      
      module.exports = Category;
  }