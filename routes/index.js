var express = require('express');
var Client = require('node-rest-client').Client;
var router = express.Router();
var fs = require('fs');
var eventos ={
			  "data": [
					  
					  ]
			};
var i = 1;
var client = new Client();

/* GET home page. */
router.get('/', function(req, res, next) {
   var title= 'Calendario de Eventos';
	res.render('index', {title});	  
});


router.get('/eventos', function(req, res, next) {
	var obj = JSON.parse(fs.readFileSync('links.json', 'utf8'));
				
	
	for(i in obj.grupos){
		console.log(obj.grupos[i]);
		cliente('https://api.meetup.com/'+obj.grupos[i]+'/events?photo-host=public&sig_id=266019427&sig=20925673818023ee6a5537f9b06f5786f123324e')
	}
	res.send(eventos);	
	
	  
});


function cliente (ruta){
	console.log(ruta);
	client.get(ruta, function (data, response) {
		
			
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
				console.log(i)
				}
		});
}
module.exports = router;
