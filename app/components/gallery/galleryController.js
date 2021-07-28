import { all, find } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';
const    db       = require('../index'),   
         gallery  = 'gallery';

// if in field contain file upload use fileRepository

module.exports = {

   findGallery(req, res){
      return find(db.gallery, req.params.galleryId, res);
   },

   getGallerys(req, res){
      return all(db.gallery, res);
   },

   storeGallery(req, res){
      return storeImage(db.gallery, req, res, 'image', 'gallery'); // (model, request, respond, fieldName, pathName)
   },

   updateGallery(req, res){
      return updateImage(db.gallery, req.params.galleryId, req, res, 'image', 'gallery'); // (model, id, request, respond, fieldName, pathName)
   },

   deleteGallery(req, res){
      return deleteImage(db.gallery, req.params.galleryId, req, res, 'image','gallery');
   }

}

      