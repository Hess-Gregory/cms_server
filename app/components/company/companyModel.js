/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const company  = sequelize.define
  ( "company",
    { 
      id: 
        {
          autoIncrement: true,
          type:DataTypes.INTEGER,
          autoIncrement:true,
          allowNull:false,
          primaryKey:true
        },
      title: 
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {notNull: {msg: 'Quel est le titre de l\'entreprise ?' }}
        },
      image: 
        {
          type: DataTypes.STRING
        },
      desc: 
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{notNull: {msg: 'Quel est la descrption de l\'entreprise ?'}}
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
      {tableName:"company"}
  );

company.sync().then(() => {
  company.findOrCreate({
            where: {id: 1},
            defaults: 
                {
                  image : "company_1578293616478.jpg",
                  title : "FULLHESTACK",
                  desc  : "Web Design"
                },
        })

  });

return company;

};