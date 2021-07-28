/* jshint indent: 2 */
"use strict";


module.exports = function(sequelize, DataTypes) {
  const contact  = sequelize.define
  ("contact",
    {
      id: 
        {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
      address: 
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{ notNull: {msg: 'Quelle est l\'adresse ?'}}
        },
      phone: 
        {
          type: DataTypes.STRING,
          unique: true,
          lowercase: true,
          allowNull: false,
          validate:{notNull: {msg: 'Quel est le numéro de télèphone ?'}}
        },
      mail: 
        {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{ notNull: {msg: 'Quelle est l\'adresse mail ?'}}
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
    {tableName:"contact"}
  );
    contact.sync().then(() => {
      contact.findOrCreate({
                where: {id: 1},
                defaults: 
                    {
                    address : "Address",
                    phone   : "telephone",
                    mail    : "mail@box.com"
                    },
            })

    });

return contact;

};