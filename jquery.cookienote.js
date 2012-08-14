(function($) {

  // set up a closure of methods to call as a param
	var methods = {
    init : function( options ) { 
      return this.each(function() {        
        this.slideDown('fast', function() {

        });
    	});
    }
  };

  // set up the plugin defaults - these should be pretty sensible out of the box
  var defaults = $.extend({
  	'location': 'top',
  	'slideDown': true,
  	'slideSpeed': 'fast',
    'explainationText': 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies on the this website.',
  }, options);

  $.fn.cookieNote = function(method) {
    
    // Figure out the method the script is looking for
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('The method ' +method+ ' you tried to call does not exist as part of jQuery.cookieNote' );
    }    
  
  };

})(jQuery);