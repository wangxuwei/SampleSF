;(function() {

	/**
	 * View: Top
	 *
	 */
    (function ($) {
        brite.registerView("Top",  {loadTmpl:true,parent:".MainScreen-header"}, {
            create:function (data, config) {
                var $html = $($("#tmpl-Top").html());
               	var $e = $($html);
                return $e;
            },
            postDisplay:function (data, config) {
                var view = this;
                var $e = view.$el;
            },
            events:{
            },

            docEvents:{
            },

            daoEvents:{
            }
        });
    })(jQuery);


})();