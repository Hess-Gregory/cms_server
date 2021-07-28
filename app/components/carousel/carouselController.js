import { all, find } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';
const db          = require('../index'),
      carousel    = 'carousel';

// if in field contain file upload use fileRepository

module.exports = {

   findCarousel(req, res){
      return find(db.carousel, req.params.carouselId, res);
   },

   getCarousels(req, res){
      return all(db.carousel, res);
   },

   storeCarousel(req, res){
      return storeImage(db.carousel, req, res, 'image', 'carousel'); 
      // (model, request, respond, fieldName, pathName)
   },

   updateCarousel(req, res){
      return updateImage(db.carousel, req.params.carouselId, req, res, 'image', 'carousel'); 
      // (model, id, request, respond, fieldName, pathName)
   },

   deleteCarousel(req, res){
      return deleteImage(db.carousel, req.params.carouselId, req, res, 'image','carousel');
   }
}

      