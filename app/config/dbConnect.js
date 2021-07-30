'use strict';

const     fs              = require('fs'),
          path            = require('path'),
          mysql           = require('mysql2/promise'),
          { Sequelize }   = require('sequelize'),
          debug           = require("debug")("node-server:db"),
          basename        = path.basename(__filename);

import dbConfig from './dbConfig.json';
//import RoleController from '../components/role/roleController';
import express from 'express';

const app    = express();

// const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + './dbConfig.json')[env];
// const { Sequelize } = require('sequelize');

export const db = {}

var PRODUCTION    = process.env.NODE_ENV === 'production',
    TEST          = process.env.NODE_ENV === 'test',
    DEVELOPEMENT  = process.env.NODE_ENV === 'development';

if (PRODUCTION) {
  var dbMode = dbConfig['production'];
} 
else if (TEST) {
  var dbMode = dbConfig['test']
} 
else if (DEVELOPEMENT) {
  var dbMode = dbConfig['development'];
}

// create db if it doesn't already exist

const       host        =  dbMode.host,
            port        =  dbMode.port,
            username    =  dbMode.username,
            password    =  dbMode.password,
            database    =  dbMode.database,
            collateSet  =  dbMode.charset_collate,
            charSet     =  dbMode.charset_charater,
            dialect     =  dbMode.dialect

initialize();

async function initialize() 

{
  
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

  if (!dbExist[0][0]) {

    console.info("Vous etes dans le s il n existe pas ")

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
            "Sequelize - Impossible de créer la base de donnée MySQL, debug:",
            err
          );
        });
            // parti a supprimer lors du mode prod
            
            //const roleController = require('../components/role/roleController'); 
            //const userController = require('../components/user/userController'); 
        
            //db.role = require('../components/role/roleModel')(sequelize, Sequelize);
            
            // db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
            // db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});
    
    

            // const userController = require('../components/user/userController'); 
            // userController.createFirstUser();  

      // init models and add them to the exported db object
    // db.User = require('../users/user.model')(sequelize); 

      // sync all models with database
        
    }
    
}

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

sequelize.sync().then(() => {
});

db.user = require("../components/user/userModel")(sequelize, Sequelize);
module.exports = db ;  


//module.exports = db ;      