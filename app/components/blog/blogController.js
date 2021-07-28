import { all, find } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';
const   db      = require('../index'),
        blog    = 'blog'

// if in field contain file upload use fileRepository

module.exports = {

    findBlog(req, res){
        return find(db.blog, req.params.blogId, res);
    },

    getBlogs(req, res){
        return all(db.blog, res);
    },

    storeBlog(req, res){
        return storeImage(db.blog, req, res, 'image', 'Blog'); 
        // (model, request, respond, fieldName, pathName)
    },
    
    updateBlog(req, res){
        return updateImage(db.blog, req.params.blogId, req, res, 'image', 'Blog'); 
        // (model, id, request, respond, fieldName, pathName)
    },

    deleteBlog(req, res){
        return deleteImage(db.blog, req.params.blogId, req, res, 'image','Blog');
    }
}

