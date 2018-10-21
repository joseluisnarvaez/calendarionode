var express = require('express');
var Client = require('node-rest-client').Client;
var router = express.Router();

var client = new Client();

/* GET home page. */
router.get('/', function(req, res, next) {
   var title= 'Calendario de Eventos';
	res.render('index', {title});	  
});


router.get('/eventos', function(req, res, next) {
	client.get("https://api.meetup.com/Launch-Coworking/events?photo-host=public&sig_id=266019427&sig=20925673818023ee6a5537f9b06f5786f123324e", function (data, response) {
		
		var eventos ={
		  "data": [
				  
				  ]
		};
		var i = 1;
		for(index in data){
			var fecha = data[index].local_date+" "+data[index].local_time;
			var fechatermino = data[index].local_date+" "+data[index].local_time+":60000";
			var item = { "id": i,
						 "start_date": fecha,
						 "end_date": fechatermino,
						 "text": data[index].name,
						 "details": data[index].description};
				eventos.data.push(item);
			i++;
			}
		res.send(eventos);
	});
	  
});

module.exports = router;
