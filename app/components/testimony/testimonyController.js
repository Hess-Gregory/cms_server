import { all, find, create, update, destroy } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';

const db          = require('../index'), 
      testimony   = 'testimony';
        

// if in field contain file upload use fileRepository

module.exports = {

   findTestimony(req, res){
      return find(db.testimony, req.params.testimonyId, res);
   },

   getTestimonys(req, res){
      return all(db.testimony, res);
   },

   storeTestimony(req, res){
      return storeImage(db.testimony, req, res, 'avatar', 'testimony'); 
      // (model, request, respond, fieldName, pathName)
   },

   updateTestimony(req, res){
      return updateImage(db.testimony, req.params.testimonyId, req, res, 'avatar', 'testimony'); 
      // (model, id, request, respond, fieldName, pathName)
   },

   deleteTestimony(req, res){
      return deleteImage(db.testimony, req.params.testimonyId, req, res, 'avatar', 'testimony');
   }

}