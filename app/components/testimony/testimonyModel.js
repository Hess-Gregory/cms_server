/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
    const testimony  = sequelize.define
    ("testimony",
        { 
            id: 
                {
                    autoIncrement: true,
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            username: 
                {
                    type: DataTypes.STRING(150)
                },
            avatar: 
                {
                    type: DataTypes.STRING(100)
                },
            comment: 
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
        {
        tableName:"testimony"
        }
    );

    testimony.sync().then(() => {
        testimony.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        username    :   "Testimony 1",
                        avatar        :   "icon-user",
                        comment     :   "testimony comment"
                        },
                });
        testimony.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                        username    :   "Testimony 2",
                        avatar        :   "icon-user",
                        comment     :   "testimony comment"
                        },
                });
        testimony.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                        username    :   "Testimony 3",
                        avatar        :   "icon-user",
                        comment     :   "testimony comment"
                        },
                });
        testimony.findOrCreate({
                    where: {id: 4},
                    defaults: 
                        {
                        username    :   "Testimony 4",
                        avatar        :   "icon-user",
                        comment     :   "testimony comment"
                        },
                }); 
        testimony.findOrCreate({
                    where: {id: 5},
                    defaults: 
                        {
                        username    :   "Testimony 5",
                        avatar        :   "icon-user",
                        comment     :   "testimony comment"
                        },
                });
        testimony.findOrCreate({
                    where: {id: 6},
                    defaults: 
                        {
                        username    :   "Testimony 6",
                        avatar        :   "icon-user",
                        comment     :   "testimony comment"
                        },
                });                
    });

return testimony;

};