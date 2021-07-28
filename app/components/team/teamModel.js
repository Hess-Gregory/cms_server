/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const team  = sequelize.define
    ("team",
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
                    type: DataTypes.STRING(100)
                },
            image: 
                {
                    type: DataTypes.STRING
                },
            position: 
                {
                    type: DataTypes.STRING(100)
                },
            quote: 
                {
                    type: DataTypes.STRING(2000)
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
        { tableName:"team" }
    );

    team.sync().then(() => {
        team.findOrCreate({
                    where: {id: 1},
                    defaults: 
                        {
                        name         :   "team 1",
                        position     :   "position-user",
                        image        :   "team_1578292082001.jpg",
                        quote        :   "quote team"
                        },
                });
        team.findOrCreate({
                    where: {id: 2},
                    defaults: 
                        {
                        name         :   "team 2",
                        position     :   "position-user",
                        image        :   "team_1578292116567.jpg",
                        quote        :   "quote team"
                        },
                });
        team.findOrCreate({
                    where: {id: 3},
                    defaults: 
                        {
                        name         :   "team 3",
                        position     :   "position-user",
                        image        :   "team_1578292141862.jpg",
                        quote        :   "quote team"
                        },
                });               
    }); 

return team;

};