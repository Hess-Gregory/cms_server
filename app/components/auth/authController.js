import UserScheme from '../user/userModel.js';
// const db = require('../index');
// const config = require('../../config/jwtConfig');
// const User = db.user;
// const Role = db.role;

// const Op = db.Sequelize.Op;

// var jwt = require('jsonwebtoken');
// var bcrypt = require('bcryptjs');

// exports.login = (req, res) => {
//    User.findOne({ 
// 	 where: {
// 	   			email: req.body.email 
// 	 		}
//    })
// 	 .then(user => {
// 	   if (!user) {
// 		 return res.status(404).send({ message: "User Not found." });
// 	   }
 
// 	   let passwordIsValid = bcrypt.compareSync(
// 		 req.body.password,
// 		 user.password
// 	   );
 
// 	   if (!passwordIsValid) {
// 		 return res.status(401).send({
// 		   accessToken: null,
// 		   message: "Invalid Password!"
// 		 });
// 	   }
 
// 	   let token = jwt.sign({ id: user.id }, config.auth.secret, {
// 		 expiresIn: 86400 // 24 hours
// 	   });
 
// 	   let authorities = [];
// 	   user.getRoles().then(roles => {
// 		 for (let i = 0; i < roles.length; i++) {
// 		   authorities.push("ROLE_" + roles[i].name.toUpperCase());
// 		 }
 
// 		 res.status(200).send({
// 		   id: user.id,
// 		   username: user.username,
// 		   email: user.email,
// 		   roles: authorities,
// 		   accessToken: token
// 		 });
// 	   });
// 	 })
// 	 .catch(err => {
// 	   res.status(500).send({ message: err.message });
// 	 });
//  };
//  exports.login = (req, res) => {
//    let email    = req.body.email,
//    	   password = req.body.password;
// 		  console.log("entrée 1", req.body.email)
// 		  console.log("entrée 2", req.body.password)

//    if (email && password) {
//       user.findOne({
//          email: email
//        }, (err, thisUser) => {
//     	if (err) throw err;
   
//       	if (!thisUser) {
//         	res.json({status: false, msg: 'Authentication failed. User not found.'});
//       	} else {
//         	// check if password matches
//         	thisUser.comparePassword(password,  (err, isMatch) => {
// 	          	if (isMatch && !err) {
// 	            	// if user is found and password is right create a token
// 	            	// let token = jwt.sign(thisUser.toJSON(), config.secret,{ expiresIn: '30m' });
// 	            	// return the information including token as JSON
// 	            	res.json({status: true, user: thisUser.toJSON()});
// 	          	} else {
// 	            	res.json({status: false, msg: 'Authentication failed. Wrong password.'});
// 	          	}
//         	});
//       	}
//       });
//    } else { 
//    	 res.json({status: false, msg: 'Invalid Username or email'});
//    }
// }

// exports.login = (req, res) => {
// 		const email = req.body.email;
// 		const password = req.body.password;
// 		   console.log("req auth email: "+ req.body.email);
// 		   console.log("req auth pwd: "+ password);
 
 
// 	if (email && password) {
// 	   user.findOne({
// 		  email: req.body.email
// 		}, (err, thisUser) => {
// 		 if (err) throw err;
	
// 		   if (!thisUser) {
// 			 res.json({status: false, msg: 'Authentication failed. User not found.'});
// 		   } else {
// 			 // check if password matches
// 			 thisUser.comparePassword(password,  (err, isMatch) => {
// 				   if (isMatch && !err) {
// 					 // if user is found and password is right create a token
// 					 //let token = jwt.sign(thisUser.toJSON(), config.secret,{ expiresIn: '30m' });
// 					 // return the information including token as JSON
// 					 res.json({status: true, user: thisUser.toJSON()});
// 				   } else {
// 					 res.json({status: false, msg: 'Authentication failed. Wrong password.'});
// 				   }
// 			 });
// 		   }
// 	   });
// 	} else { 
// 		 res.json({status: false, msg: 'Invalid Username or email'});
// 	}
//  }

 exports.login = (req, res) => {
	console.log("Sign-In");
	
	UserScheme.findOne({
		where: {
			username: req.body.username
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send('User Not Found.');
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}
		
		var token = jwt.sign({ id: user.id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
		});
		
		res.status(200).send({ auth: true, accessToken: token });
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}