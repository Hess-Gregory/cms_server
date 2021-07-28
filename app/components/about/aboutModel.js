/* jshint indent: 2 */
"use strict";

module.exports = function(sequelize, DataTypes) {
  const about  = sequelize.define
  ("about",
    { 
      id: 
        {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          allowNull:false,
          primaryKey:true
        },
      image: 
        {
          type: DataTypes.STRING
        },
      title: 
        {
          type: DataTypes.STRING(2000)
        },
      desc: 
        {
          type: DataTypes.STRING
        },
      createdAt: 
        {
        type: 'TIMESTAMP',
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        allowNull: false
        },
      updatedAt: 
        {
          type: 'TIMESTAMP',
          defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        }
    },
    { tableName:"about"}
  );

  about.sync().then(() => {
    about.findOrCreate({
              where: {id: 1},
              defaults: 
                  {
                      image       :     "about_1583221945188.jpg",
                      title       :     "Marvelous App",
                      desc        :     "<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>"
                  },
              }
          )
  });

  return about;
  
};