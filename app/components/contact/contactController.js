import { all, find, create, update, destroy } from '../repository/queryRepository';
const   db          = require('../index'),
        contact     = 'contact'

// if in field contain file upload use fileRepository

module.exports = {

    findContact(req, res){
        return find(db.contact, req.params.contactId, res);
    },

    getContacts(req, res){
        return all(db.contact, res);
    },

    storeContact(req, res){
        return create(db.contact, req.body, res); 
        // (model, request, respond, fieldName, pathName)
    },

    updateContact(req, res){
        return update(db.contact, req.params.contactId, req.body, res); 
        // (model, id, request, respond, fieldName, pathName)
    },

    deleteContact(req, res){
        return destroy(db.contact, req.params.contactId, req.body, res, 'contact');
    }

}


