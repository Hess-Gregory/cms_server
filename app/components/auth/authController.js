const jwt = require("jsonwebtoken");
const user = require("../user/userController");
const db = require('../index');
var env = process.env

module.exports = {
  /**²
   * Envoyez le token et les détails de l'utilisateur si l'adresse e-mail et le mot de passe sont valides.
   * @property req.body.email = L'email de l'utilisateur.
   * @property res.body.password = le mot de passe de l'utilisateur.
   * @returns token et l'utilisateur.
   */
   signin(req, res, next) {
    console.log("Sign-In: ", req.body.email);

      let 	email    	= req.body.email,
            password 	= req.body.password;

      user.findUserByEmail({'email': email})
          .then(foundUser => {
              if (!foundUser) 
                {
                  const err = res.json({status: false, msg: 'Echec d\'authentication. Utilisateur non trouvé ou compte inactif.'});
                  return next(err);
              }
              if (!foundUser.validPassword(password)) 
                {
                  const err = res.json({status: false, token: null, msg: 'Echec d\'authentication. Mot de passe incorrect.'});
                  return next(err);
                }
                const jwtUser = {};
                jwtUser.id = foundUser.id;
                jwtUser.username = foundUser.username;
                jwtUser.email = foundUser.email;
                jwtUser.role = foundUser.role;

                const token = jwt.sign(jwtUser, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRES_IN});
                return res.json({status: true, token: token, user: jwtUser});
        })
          .catch(err => next(err));
  }

}