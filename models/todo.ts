{
    const { Sequelize, DataTypes } = require('sequelize');  
    const { sequelize } = require('../config/sequilize');
  
      const Todo = sequelize.define('Todo', {
          // name: {
          //   type: DataTypes.STRING,
          //   allowNull: false
          // },
          // mobile_no: {
          //   type: DataTypes.STRING,
          //   allowNull: false,
          //   // unique: true
          // }
        }, {
          // options
        });
        
      
      module.exports = Todo;
  }