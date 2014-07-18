//
//  applicationPreferences.js
//
//
//  Created by Tue Topholm on 31/01/11.
//  Copyright 2011 Sugee. All rights reserved.
//
//
// Updated for Phonegap 3.x by Dave Alden (dave@workingedge.co.uk) on 05 Oct 13

cordova.define("applicationPreferences", function(require, exports, module) {
	var exec = require('cordova/exec');
	
	var ApplicationPreferences = function() {};


	ApplicationPreferences.prototype.get = function(key, successFn, errorFn) {
	    exec(successFn, errorFn, 'applicationPreferences', 'getSetting', [key]);
	}
	
    	ApplicationPreferences.prototype.set = function(key,value, successFn, errorFn) {
            exec(successFn, errorFn, 'applicationPreferences', 'setSetting', [key,value]);
    	}
	
	var applicationPreferences = new ApplicationPreferences();
	module.exports = applicationPreferences;
});
