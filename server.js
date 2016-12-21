module.exports = MServer;

function MServer(){}

MServer.prototype.init = function(content)
{

	require('./autload');

	var express = require('express');
	var app 	= express();
	var fs 		= require('fs');

	global.fs = fs;
	global.basePath = __dirname;

	try{
		require('./router')(express, app);
	
		var server = app.listen(6001, function () 
		{
		  var host = 'localhost';
		  var port = server.address().port;

		  console.log('Second app listening at http://%s:%s', host, port);
		});
	}
	catch(err) {
		console.error('Error cathc', err);
	}
};
