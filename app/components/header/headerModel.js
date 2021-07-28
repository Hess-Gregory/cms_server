/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
    const header  = sequelize.define
    ("header",
        { 
            id: 
                {
                    autoIncrement: true,
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            page: 
                {
                    type: DataTypes.ENUM('Work', 'Feature', 'Blog', 'About', 'Contact'),
                    defaultValue: 'Work',
                    allowNull: false,
                    validate:{notNull:{msg: 'Quelle est la page d\'en-tête ?'}}
                },
            image: 
                {
                    type: DataTypes.STRING
                },
            tagline: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: { notNull:{msg: 'Quel est le slogan de l\'en-tête ?' } }
                },
            tagdesc: 
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate:{ notNull:{msg: 'Quelle est la description de l\'en-tête ?'}}
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
        {tableName:"header"}
    );

    header.sync().then(() => {
        header.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        page    :   "Work",
                        image   :   "header_1582740452967.jpg",
                        tagline :   "Work",
                        tagdesc :   "description de work"
                        },
                });
        header.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                        page    :   "Feature",
                        image   :   "header_1582740664761.jpg",
                        tagline :   "Feature",
                        tagdesc :   "description de Feature"
                        },
                });
        header.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                        page    :   "Blog",
                        image   :   "header_1582740459541.jpg",
                        tagline :   "Blog",
                        tagdesc :   "description de Blog"
                        },
                });
        header.findOrCreate({
                    where: {id: 4},
                    defaults: 
                        {
                        page    :   "About",
                        image   :   "header_1582740670820.jpg",
                        tagline :   "About",
                        tagdesc :   "description de About"
                        },
                });
        header.findOrCreate({
                    where: {id: 5},
                    defaults: 
                        {
                        page    :   "Contact",
                        image   :   "header_1582740473980.jpg",
                        tagline :   "Contact",
                        tagdesc :   "description de Contact"
                        },
                });                   
    });

return header;
};