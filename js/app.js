var app = app || {};
(function($) {
	
	app.getRemoteData = function(remoteMethod,params){
		var dfd = $.Deferred();
		params = params || [];
		var paramsArray = [];
		var action = "CustomControl." + remoteMethod;
		paramsArray.push(action);
		
        paramsArray = paramsArray.concat(params);
        
		var resultFunc = function(result, event){
            	dfd.resolve(result);
        };
		paramsArray.push(resultFunc);
		
		paramsArray.push({escape: true});
		
		//do call server data
		console.log(paramsArray);
		Visualforce.remoting.Manager.invokeAction.apply(Visualforce.remoting.Manager,paramsArray);
        return dfd.promise();
	}
})(jQuery);
