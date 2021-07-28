import { all, find } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';
const   db       = require('../index'),
        about    = 'about'

module.exports = {

    findAbout(req, res){
        return find(db.about, req.params.aboutId, res);
    },

    getAbouts(req, res){
        return all(db.about, res);
    },

    storeAbout(req, res){
        return storeImage(db.about, req, res, 'image', 'About'); 
        // (model, request, respond, fieldName, pathName)
    },

    updateAbout(req, res){ console.log("req update: ", req)
        return updateImage(db.about, req.params.aboutId, req, res, 'image', 'About'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    deleteAbout(req, res){
        return deleteImage(db.about, req.params.aboutId, req, res, 'image','About');
    }

}

