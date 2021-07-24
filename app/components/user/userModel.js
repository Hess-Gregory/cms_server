// // Include Sequelize module.
// const Sequelize = require('sequelize')
// // Import sequelize object, 
// // Database connection pool managed by Sequelize.
// const sequelize = require('../../config/dbConnect').seqz;
// const bcrypt = require('bcryptjs');
// const _ = require("lodash");

/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, Sequelize) {
  const UserScheme =  sequelize.define('users', {
      id: {
          autoIncrement: true,
          type:Sequelize.INTEGER,
          autoIncrement:true,
          allowNull:false,
          primaryKey:true
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
          notNull: {
            msg: "What is the user's username?"
          }},
          },
        email: {
          type: Sequelize.STRING,
          unique: true,
          lowercase: true,
          allowNull: false,
          validate: {
          notNull: {
            msg: 'What is email user?'
          }
          }
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
          notNull: {
            msg: 'What is password user?'
          }
          }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      }
      ,
      {
      //  hooks: {
      //   beforeCreate: async (user) => {
      //    if (user.password) {
      //     const salt = await bcrypt.genSaltSync(10, 'a');
      //     user.password = bcrypt.hashSync(user.password, salt);
      //    }
      //   },
      //   beforeUpdate:async (user) => {
      //    if (user.password) {
      //     const salt = await bcrypt.genSaltSync(10, 'a');
      //     user.password = bcrypt.hashSync(user.password, salt);
      //    }
      //   }
      //  },
      //  instanceMethods: {
      //   validPassword: (password) => {
      //     console.log('ce password: ', password)
      //     console.log('ce password 2: ', this.password)
      //    return bcrypt.compareSync(password, this.password);
      //   }
      //  }
      }
    );
      // UserScheme.prototype.validPassword = async (password, hash) => {
      //   return await bcrypt.compareSync(password, hash);
      //  }
      
      // UserScheme.findOrCreate(
      //   {
      // where: {id: 1},
      // defaults: {
      //     username: "Admin",
      //     email: "admin@localhost.com",
      //     password: "123456"
      // },
      // });


      return UserScheme;
    };