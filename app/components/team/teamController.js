import { all, find, create, update, destroy } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';

const db        = require('../index'),
      team      = 'team';

// if in field contain file upload use fileRepository

module.exports = {

   findTeam(req, res){
      return find(db.team, req.params.teamId, res);
   },

   getTeams(req, res){
      return all(db.team, res);
   },

   storeTeam(req, res){
      return storeImage(db.team, req, res, 'image', 'team'); 
      // (model, request, respond, fieldName, pathName)
   },

   updateTeam(req, res){
      return updateImage(db.team, req.params.teamId, req, res, 'image', 'team'); 
      // (model, id, request, respond, fieldName, pathName)
   },

   deleteTeam(req, res){
      return deleteImage(db.team, req.params.teamId, req, res, 'image', 'team');
   }

}