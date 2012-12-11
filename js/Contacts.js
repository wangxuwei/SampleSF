;(function() {

	/**
	 * View: Contacts
	 *
	 */
    (function ($) {
        brite.registerView("Contacts",  {loadTmpl:true,parent:".MainScreen-main"}, {
            create:function (data, config) {
                var $html = app.render("#tmpl-Contacts",data);
                var $e = $($html);
                return $e;
            },
            postDisplay:function (data, config) {
                var view = this;
                var $e = view.$el;
                
                refresh.call(view);
            },
            events:{
            	"click;.btnEdit":function(e){
            		var view = this;
            		var $el = view.$el;
            		var $btn = $(e.currentTarget);
            		var id = $btn.bEntity().id;
            		brite.display("ContactInfo",null,{id:id});
            	},
            	"click;.btnDelete":function(e){
            		var view = this;
            		var $el = view.$el;
            		var $btn = $(e.currentTarget);
            		var id = $btn.bEntity().id;
            		app.invokeRemote("deleteContact",id);
            		refresh.call(view);
            	}
            },

            docEvents:{
            	"DO_REFRESH_CONTACT":function(){
            		refresh.call(this);
            	}
            },

            daoEvents:{
            }
        });
        
        function refresh(){
        	var view = this;
        	var $e = view.$el;
        	var $tbody = $e.find(".lists").empty();
        	app.invokeRemote("listContacts").done(function(list){
        		for(var i = 0; i < list.length; i++){
        			var obj = list[i];
        			obj.index = i;
        			obj.type="Contact";
        			console.log(list);
        			var $item = app.render("#tmpl-Contacts-rowItem",obj);
        			$tbody.append($item);
        		}
			});

        }
    })(jQuery);


})();
