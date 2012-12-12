;(function() {

	/**
	 * View: Top
	 *
	 */
    (function ($) {
        brite.registerView("Top",  {loadTmpl:true,parent:".MainScreen-header"}, {
            create:function (data, config) {
                var $html = app.render("#tmpl-Top");
               	var $e = $($html);
                return $e;
            },
            postDisplay:function (data, config) {
                var view = this;
                var $e = view.$el;
                
            },
            events:{
            	"click;.nav li":function(e){
            		var view = this;
            		var $e = view.$el;
            		var $li = $(e.currentTarget);
            		var nav = $li.attr("data-nav");
            		$e.find("li").removeClass("active");
            		$li.addClass("active");
            		if(nav == "contact"){
            			brite.display("Contacts");
            		}else if(nav == "countrycustom"){
            			brite.display("Countries");
            		}
            	}
            },

            docEvents:{
            },

            daoEvents:{
            }
        });
    })(jQuery);


})();
