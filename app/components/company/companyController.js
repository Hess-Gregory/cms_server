import { all, find } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';
const  db         = require('../index'),
       company    = 'company';

// if in field contain file upload use fileRepository

module.exports = {

   findCompany(req, res){
      return find(db.company, req.params.companyId, res);
   },

   getCompanys(req, res){
      return all(db.company, res);
   },

   storeCompany(req, res){
      return storeImage(db.company, req, res, 'image', 'company'); 
      // (model, request, respond, fieldName, pathName)
   },

   updateCompany(req, res){
      return updateImage(db.company, req.params.companyId, req, res, 'image', 'company'); 
      // (model, id, request, respond, fieldName, pathName)
   },

   deleteCompany(req, res){
      return deleteImage(db.company, req.params.companyId, req, res, 'image','company');
   }

}

      