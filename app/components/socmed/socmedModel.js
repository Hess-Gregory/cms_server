/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const socmed  = sequelize.define
    ("socmed",
        { 
            id: 
                {
                    autoIncrement: true,
                    type:DataTypes.INTEGER,
                    autoIncrement:true,
                    allowNull:false,
                    primaryKey:true
                },
            name: 
                {
                    type: DataTypes.STRING(150)
                },
            icon: 
                {
                    type: DataTypes.STRING(100)
                },
            url: 
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
        { tableName:"socmed" }
    );

    socmed.sync().then(() => {
        socmed.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        name    :   "Socmed 1",
                        icon    :   "icon-user",
                        url     :   "#"
                        },
                    });
        socmed.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                        name    :   "Socmed 2",
                        icon    :   "icon-user",
                        url     :   "#"
                        },
                    });
        socmed.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                        name    :   "Socmed 3",
                        icon    :   "icon-user",
                        url     :   "#"
                        },
                    });
        socmed.findOrCreate({
                    where: {id: 4},
                    defaults: 
                        {
                        name    :   "Socmed 4",
                        icon    :   "icon-user",
                        url     :   "#"
                        },
                    }); 
        socmed.findOrCreate({
                    where: {id: 5},
                    defaults: 
                        {
                        name    :   "Socmed 5",
                        icon    :   "icon-user",
                        url     :   "#"
                        },
                    });
        socmed.findOrCreate({
                    where: {id: 6},
                    defaults: 
                        {
                        name    :   "Socmed 6",
                        icon    :   "icon-user",
                        url     :   "#"
                        },
                    });                
    });

return socmed;

};