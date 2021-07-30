import user from './userController';
const authJwt = require('../../config/verifyJwtToken');
const router = require('express').Router()

router.get('/user',  user.getUsers)
router.post('/user', 
//[authJwt.verifyToken, authJwt.isAdmin],  
user.storeUser)
router.post('/user/exist', user.existUser)
router.post('/user/exist/:userId', user.existUser)

router.get('/user/:userId', user.findUser)
router.put('/user/:userId', 
// authJwt.verifyToken,  
user.updateUser)
router.delete('/user/:userId', user.deleteUser)

module.exports = router