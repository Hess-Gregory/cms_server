"use strict";

import {sequelize} from '../config/dbConnect';

const   fs        = require("fs"),
        path      = require("path"),
        Sequelize = require("sequelize"),
        basename  = path.basename(__filename),
        db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) 
        {
          return 
            (
              file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
            );
        }
  )

  .forEach(function(file) 
      {
        const model = sequelize["import"](path.join(__dirname, file));
          db[model.name] = model;
      }
  );

  Object.keys(db).forEach(function(modelName) 
    {
      if (db[modelName].associate) 
      {
          db[modelName].associate(db);
      }
    }
  );

db.sequelize  = sequelize;
db.Sequelize  = Sequelize;

db.about      = require("./about/aboutModel")(sequelize, Sequelize);
db.blog       = require("./blog/blogModel")(sequelize, Sequelize);
db.carousel   = require("./carousel/carouselModel")(sequelize, Sequelize);
db.company    = require("./company/companyModel")(sequelize, Sequelize);
db.contact    = require("./contact/contactModel")(sequelize, Sequelize);
db.gallery    = require("./gallery/galleryModel")(sequelize, Sequelize);
db.header     = require("./header/headerModel")(sequelize, Sequelize);
db.inbox      = require("./inbox/inboxModel")(sequelize, Sequelize);
db.socmed     = require("./socmed/socmedModel")(sequelize, Sequelize);
db.team       = require("./team/teamModel")(sequelize, Sequelize);
db.testimony  = require("./testimony/testimonyModel")(sequelize, Sequelize);
db.service    = require("./service/serviceModel")(sequelize, Sequelize);
db.user       = require("./user/userModel")(sequelize, Sequelize);

  
  db.ROLES = ["visiteur", "administrateur", "modérateur"];
module.exports = db;