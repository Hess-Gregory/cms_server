'use strict'

exports.find = async (model, id, res) => {
   console.log("fonction find ");

    model.findOne({
        where: {
          id: id
        }
      })
         .then(data => {
            if(data){
                res.json(data)    
            } else {
                res.send({ error: 'ID not Found'})
            }
            
         })
         .catch(err => {
            res.send({ error: 'ID not Found'})
         });
}

/**
 * Get all object by model
 */
exports.findBy = (model, condition, res) => {
   console.log("fonction findBy ");
    model.findAll({where: condition})
         .then(data => { res.json(data) })
         .catch(err => { res.send({ error: condition+' not Found'}) });
};

/**
 * Get all object by model
 */
exports.all = (model, res) => {
   console.log("model: ", model)
    model.findAll({})
         .then(data => {
            res.json(data)
         })
         .catch(err => {
            res.send({ error: 'Failed to retrieve data'})
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
                res.json({ message: `${message} ${id} successfully deleted` })
         })
         .catch(err => {
            res.status(400).json({err});
         });
};
