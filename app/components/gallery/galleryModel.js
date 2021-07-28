/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const gallery  = sequelize.define
  ("gallery",
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
          type: DataTypes.STRING
        },
      url: 
        {
          type: DataTypes.STRING
        },
      image: 
        {
          type: DataTypes.STRING
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
    { tableName:"gallery"}
  );

    gallery.sync().then(() => {
      gallery.findOrCreate({
                where: {id: 1},
                defaults: 
                  {
                    title : "First Gallery",
                    url   : "https://www.fullhestack.be",
                    image : "gallery_1582223230652.jpg",
                    desc  : "FULLHESTACK"
                  },
            });
      gallery.findOrCreate({
                where: {id: 2},
                defaults: 
                    {
                      title : "Second Gallery",
                      url   : "https://www.fullhestack.be",
                      image : "gallery_1582224039787.jpg",
                      desc  : "FULLHESTACK"
                    },
              });

      gallery.findOrCreate({
                where: {id: 3},
                defaults: 
                    {
                      title : "Third Gallery",
                      url   : "https://www.fullhestack.be",
                      image : "gallery_1582224124474.jpg",
                      desc  : "FULLHESTACK"
                    },
                });
      gallery.findOrCreate({
                where: {id: 4},
                defaults: 
                    {
                      title : "Fourth Gallery",
                      url   : "https://www.fullhestack.be",
                      image : "gallery_1582224562167.jpg",
                      desc  : "FULLHESTACK"
                    },
                });                
    });

return gallery;

};