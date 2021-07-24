
  console.log("bonjour 1")
const db = require('../../config/dbConnect');

const Role = db.role;

const RoleController =
function initial(){
	Role.create({
		id: 1,
		name: "USER"
	});
	
	Role.create({
		id: 2,
		name: "MODERATOR"
	});
	
	Role.create({
		id: 3,
		name: "ADMINISTRATOR"
	});

}

console.log("bonjour 2")
module.exports = RoleController ;