'use  strict';


app.factory('User',function(DS){


	var User = DS.defineResource({
		name: 'user'
		// method: {
		// 	go: function()
		// },
		// relations: {
		// 	hasMany :{
		// 		post:{
		// 			foreignKey: "author",
		// 			parent: true;
		// 		}
		// 	}
		// }
	})	

	return User;
}).run(function(User){})
