var express = require('express');
var Client = require('node-rest-client').Client;
var router = express.Router();

var client = new Client();

/* GET home page. */
router.get('/', function(req, res, next) {
   var title= 'holaMundoJS';
	client.get("https://api.meetup.com/Launch-Coworking/events?photo-host=public&sig_id=266019427&sig=20925673818023ee6a5537f9b06f5786f123324e", function (data, response) {
		
		var eventos ={
		  "data": [
				  
				  ]
		};
		for(index in data){
		var item = { "id": "2",
					 "start_date": data[index].local_date,
					 "text": data[index].name,
					 "details": data[index].description};
			eventos.data.push(item);		 
		}
		console.log(eventos);
		res.render('index', {title,eventos});
	});
	  
});

module.exports = router;
