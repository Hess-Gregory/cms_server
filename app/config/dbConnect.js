
const dbConfig = require('./dbConfig.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const debug = require("debug")("node-server:db");
import express from 'express';
const app    = express();

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

//module.exports = db = {};

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
    
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` DEFAULT CHARACTER SET = \`${charSet}\` DEFAULT COLLATE \`${collateSet}\`;`)
    .then(() => {

      console.info("Sequelize : La création de la database est effectuée.");
      debug("Sequelize : La création de la database est effectuée.");
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

    // init models and add them to the exported db object
   // db.User = require('../users/user.model')(sequelize);

    // sync all models with database
    await sequelize.sync();

}
// module.exports = dbConnect;