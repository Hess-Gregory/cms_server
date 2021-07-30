const jwt = require('jsonwebtoken');
const config = require('./jwtConfig'); 
import localStorage from 'localStorage'
module.exports = {

verifyToken(req, res, next){
	console.log('authorization : ',req)
	let token = req.body.token || req.query.token || req.headers['x-access-token'];
	const authorization = req.headers['x-access-token'];
	//console.log('token : ',token)
	console.log('authorization : ',authorization)

  
	if (!token){
		console.log('token : ',localStorage.getItem())
		return res.status(403).send({ 
			auth: false, message: 'Aucun token fourni.' 
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
					auth: false, 
					message: 'Échec de l\'authentification. Erreur ->' + err 
				});
		}
		req.userId = decoded.id;
		req.userRole = decoded.role;
		next();
	});
},

isAdmin(req, res, next){
	let token = req.headers['x-access-token'];
	
					if(req.userRole === "Administrateur"){
						next();
						return;
					}
				
				
				res.status(403).send("Exiger le rôle d'administrateur!");
				return;
},

isPmOrAdmin(req, res, next){
	let token = req.headers['x-access-token'];
			
					if(req.userRole === "Modérateur"){
						next();
						return;
					}
					
					if(req.userRole === "Administrateur"){
						next();
						return;
					}
				
				
				res.status(403).send("Require PM or Admin Roles!");
	

},

}

