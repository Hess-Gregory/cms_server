'use strict'
exports.findCondition = async (model, condition, res) => {
   console.log('la condition est la suivante: where: {'
      , condition, '}'
    );
   console.log('le model est le suivant:', model);

  return model.findOne({ where: condition})

}

exports.find = async (model, id, res) => {

    model.findOne({
        where: {
          id: id
        }
      })
         .then(data => {
            if(data){
                res.json(data)    
            } else {
                res.send({ error: 'ID non trouvé'})
            }
            
         })
         .catch(err => {
            res.send({ error: 'ID non trouvé'})
         });
}

/**
 * Get all object by model
 */
exports.findBy = (model, condition, res) => {
    model.findAll({where: condition})
         .then(data => { res.json(data) })
         .catch(err => { res.send({ error: condition+' non trouvé'}) });
};

/**
 * Get all object by model
 */
exports.all = (model, res) => {
    model.findAll({})
         .then(data => {
            res.json(data)
         })
         .catch(err => {
            res.send({ error: 'Échec de la récupération des données'})
        });
};

/**
 * create new object
 */
exports.create = (model, body, res) => {
    model.create(body)
         .then(data => {
            res.json(data);
         })
         .catch(err => {
            res.status(500).send(err);
         });
};

/**
 * update model by id
 */
exports.update = (model, id, body, res) => {
    model.update(body,
                {where: { id: id }}
                 )
         .then(data => {
            res.json({data})
         })
         .catch(err => {
            res.status(400).json({err});
         });
};

/**
 * delete model by id
 */
exports.destroy = (model, id, res, message) => {
    model.destroy({
        where: {
          id: id
        }})
         .then(data => {
                res.json({ message: `${message} ${id} supprimé avec succès` })
         })
         .catch(err => {
            res.status(400).json({err});
         });
};
