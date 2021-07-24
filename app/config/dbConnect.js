'use strict';

const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const debug = require("debug")("node-server:db");
const basename = path.basename(__filename);
import dbConfig from './dbConfig.json';
import RoleController from '../components/role/roleController';
import express from 'express';
const app    = express();
// const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + './dbConfig.json')[env];
// const { Sequelize } = require('sequelize');

export const db = {}

var PRODUCTION = process.env.NODE_ENV === 'production';
var TEST = process.env.NODE_ENV === 'test';
var DEVELOPEMENT = process.env.NODE_ENV === 'development';

if (PRODUCTION) {
  var dbMode = dbConfig['production'];
} else if (TEST) {
  var dbMode = dbConfig['test']
} else if (DEVELOPEMENT) {
  var dbMode = dbConfig['development'];
}


initialize();

async function initialize() {
  
// create db if it doesn't already exist

const       host        =  dbMode.host,
            port        =  dbMode.port,
            username    =  dbMode.username,
            password    =  dbMode.password,
            database    =  dbMode.database,
            collateSet  =  dbMode.charset_collate,
            charSet     =  dbMode.charset_charater,
            dialect     =  dbMode.dialect

const connection = await mysql.createConnection({
      host      : host,
      user      : username,
      password  : password,
      port      : port
    });
    const dbExist = await connection.query(`
    SELECT SCHEMA_NAME AS \`Database\`
  FROM INFORMATION_SCHEMA.SCHEMATA
  WHERE SCHEMA_NAME LIKE \'${database}\'
  `)
 //var dbCheck = false;
  //if(dbExist[0][0].Database){var dbCheck = true}else{var dbCheck = false}
  // const dbCheck = dbExist[0][0].Database
  // console.log( "test:", dbCheck)


    if (dbExist[0][0]) 
    
    {
      console.log("existe  " )  
      // connect to db
      const sequelize = new Sequelize(database, username, password, {
          host: host,
          dialect: dialect,
          operatorsAliases: 0,
        
          pool: {
            max: dbMode.pool.max,
            min: dbMode.pool.min,
            acquire: dbMode.pool.acquire,
            idle: dbMode.pool.idle
          }, port: port
        });
        sequelize
        .authenticate()
        .then(() => {
  
          console.info("Sequelize : La connexion MySQL a été établie avec succès.");
          debug("Sequelize : La connexion MySQL a été établie avec succès.");
        })
        .catch(err => {
          console.error(
            "Sequelize : Impossible de se connecter à la base de données MySQL"
          );
          console.error("Type erreur:", err.name);
          console.error("Détail:", err.parent);
      
          debug(
            "Sequelize - Impossible de se connecter à la base de données MySQL, debug:",
            err
          );
        });   
    fs
        .readdirSync(__dirname)
        .filter(file => {
          return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach((file) => {
          const model = require(path.join(__dirname, file));
          db[model.name] = model;
        });
  
        Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
          db[modelName].associate(db);
        }
        });
   
        db.Sequelize = Sequelize;
        db.sequelize = sequelize;
         
        // db.user = require('../components/user/userModel')(sequelize, Sequelize);
        // db.role = require('../components/role/roleModel')(sequelize, Sequelize);
         
        // db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
        // db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});
  
        // db.role = require('../components/role/roleController');   
  
  
  
      // init models and add them to the exported db object
     // db.User = require('../users/user.model')(sequelize);
  
      // sync all models with database
      await sequelize.sync().then(() => {
  
  //initial()
      });
  
  }
    
    else{


console.log("exist pas " ) 

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` DEFAULT CHARACTER SET = \`${charSet}\` ;`)
    .then(() => {

      console.info("Sequelize : La création de la database est effectuée.");
      debug("Sequelize : La création de la database est effectuée.");
    })
    .catch(err => {
      console.error(
        "Sequelize : Impossible de créer la base de donnée MySQL"
      );
      console.log(err)
      console.error("Type erreur:", err.name);
      console.error("Détail:", err.parent);
  
      debug(
        "Sequelize - Impossible de se connecter à la base de données MySQL, debug:",
        err
      );
    });
    const sequelize = new Sequelize(database, username, password, {
      host: host,
      dialect: dialect,
      operatorsAliases: 0,
    
      pool: {
        max: dbMode.pool.max,
        min: dbMode.pool.min,
        acquire: dbMode.pool.acquire,
        idle: dbMode.pool.idle
      }, port: port
    });
    sequelize
    .authenticate()
    .then(() => {

      console.info("Sequelize : La connexion MySQL a été établie avec succès.");
      debug("Sequelize : La connexion MySQL a été établie avec succès.");
    })
    .catch(err => {
      console.error(
        "Sequelize : Impossible de se connecter à la base de données MySQL"
      );
      console.error("Type erreur:", err.name);
      console.error("Détail:", err.parent);
  
      debug(
        "Sequelize - Impossible de se connecter à la base de données MySQL, debug:",
        err
      );
    });   
fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
      const model = require(path.join(__dirname, file));
      db[model.name] = model;
    });

    Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
    });

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
     
    db.user = require('../components/user/userModel')(sequelize, Sequelize);
    db.role = require('../components/role/roleModel')(sequelize, Sequelize);
     
    db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
    db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});

    db.role = require('../components/role/roleController');   



  // init models and add them to the exported db object
 // db.User = require('../users/user.model')(sequelize);

  // sync all models with database
  await sequelize.sync().then(() => {

//initial()
  });


// module.exports = db ;
   
  }


  
}

// module.exports = db ;