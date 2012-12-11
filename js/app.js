var app = app || {};
(function($) {
	
	app.render = function(templateName,data){
		data = data || {};
		return $(Handlebars.compile($(templateName).html())(data));
	}
	
	app.invokeRemote = function(remoteMethod){
		var dfd = $.Deferred();
		var paramsArray = [];
		var action = "CustomControl." + remoteMethod;
		paramsArray.push(action);
		
		for(var i = 1; i < arguments.length; i++){
			paramsArray.push(arguments[i]);
		}
        
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
