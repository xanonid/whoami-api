'use strict';

var requestIp = require('request-ip');
var useragent = require('useragent');
var accepts = require('accepts')
useragent(true);


function ApiHandler () {

	this.getWhoAmI = function (req, res) {
		
		var clientIp = requestIp.getClientIp(req); 		
		var agent = useragent.parse(req.headers['user-agent']);
		
		 //console.log(req.params);
		 res.json({"ip_address":clientIp,"language":accepts(req).languages()[0],"operating_system":agent.os.toString()});
	};



}

module.exports = ApiHandler;
