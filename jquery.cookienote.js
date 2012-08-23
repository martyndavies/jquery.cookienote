/*
 * jQuery.cookieNote v0.2
 * https://github.com/martyndavies/jquery.cookienote
 *
 * Copyright 2012, Martyn Davies
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
 (function($) {

  $.fn.cookieNote = function(options) {

  	// get hold of the div this plugin applies to
    var idq = $(this);
    // set up the plugin defaults - these should be pretty sensible out of the box
    var settings = {
      'width': 100, //percent
      'height': 80, // pixels
      'backgroundColor': '#323232', // can be overridden
      'insertionType': 'overlay',
      'animate': false, // this is cleaner
      'animationStyle': 'slideDown', // if you must then this works best
      'animationSpeed': "slow", // this is smoother
      'position': 'top', // where people will see it
      'headingText': 'Cookies on this website', // standard generic
      'explainationText': 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies on the this website. However, if you would like to, you can change your cookie settings at any time.',
      'confirmText': 'Continue', // standard generic
      'setCookie': false, // if true you will need the jQuery.cookie plugin
      'cookieExpiresIn': 7, // default one week, can be overridden
      'showPolicy': false, // need a link to your cookie policy?
      'policyLink': '', // link for your cookie policy
      'policyText': 'Cookie Policy'
    };

    var options = $.extend(settings, options);

    return this.each(function() {

      $(this).css({'display':'none'});

      if (settings.insertionType === 'insert') {
      	// apply some initial css to the container div, overrides will happen if set
	      $(this).css({
	        'width': settings.width+'%',
	        'height': settings.height+'px',
	        'backgroundColor': settings.backgroundColor,
	        'position': 'relative',
	        'color': 'textColor'
	      });

	      // check where the user wants the notice displayed, sensible is top, they might pick bottom
	      if (settings.position === 'bottom') {
	        $(this).css({'bottom': '0'});
	      } else {
	        $(this).css({'top': '0'});
	      }	
      } else {
      	// apply some initial css to the container div, overrides will happen if set
	      $(this).css({
	        'width': settings.width+'%',
	        'height': settings.height+'px',
	        'z-index': '1000',
	        'backgroundColor': settings.backgroundColor,
	        'position': 'absolute',
	        'color': 'textColor'
	      });

	      // check where the user wants the notice displayed, sensible is top, they might pick bottom
	      if (settings.position === 'bottom') {
	        $(this).css({'bottom': '0'});
	      } else {
	        $(this).css({'top': '0'});
	      }	
      }


      // set the header div and style it
      var containerDiv = "<div id='cookienote-container'></div>";
      $(this).append(containerDiv);



      // add the header text
      var h2 = "<h2>"+settings.headingText+"</h2>";
      $('#cookienote-container').append(h2);



      // add the explainer text
      var p = "<p>"+settings.explainationText+"</p>";
      $('#cookienote-container').append(p);

      // set the css for the h2 header text


      // add the continue link and optional 'find out more'
      var ul = "<ul id=\"continue-list\"><li id=\"cookienote-continue\"><button type=\"button\" id=\"cookienote-continue-button\">"+settings.confirmText+"</button></li></ul>";
      $('#cookienote-container').append(ul);

      // is the cookie policy link required?
      if (settings.showPolicy === true) {
        var policy_link = "<li id=\"cookienote-policy\"><a href=\""+settings.policyLink+"\">"+settings.policyText+"</a></li>";
        $('#continue-list').append(policy_link);
      } else {
      }

      // check if cookie is already set by this plugin and if so show nothing
      if ($.cookie && $.cookie('cookieNotice') === 'cookieNoticeAccepted') {
      	
      	$(this).css('display:none');
      	$(this).remove();
      
      } else {
	      // display the div
	      if (settings.animate === true && settings.animationStyle === "slideDown") {
	        $(this).css({'height': '0px'}).show();
	        $(this).animate({height: settings.height+'px', display: 'block'}, settings.animationSpeed, function() {
	          // callback for slideDown
	        });
	      } else if (settings.animate === true && settings.animationStyle === "fadeIn") {
	        $(this).css({'opacity': '0'}).show();
	        $(this).animate({opacity: '1'}, settings.animationSpeed, function() {
	          // callback for fadeIn
	        });
	      } else if (settings.animate === false && settings.insertionType === 'insert'){
					$(this).css({'display':'block'})
	      } else {
	      	$(this).css({'display':'block'})
	      }
      }

      // if continue is clicked, set a cookie if jQuery.cookie is present and get rid
      $("#cookienote-continue-button").click(function(){

        if (settings.setCookie === true) {
          if($.cookie) {
            var randomNumber = guidGenerator();
            $.cookie('cookieNotice', 'cookieNoticeAccepted', { expires: settings.cookieExpiresIn, path: '/' });
            $(idq).slideUp("slow");
          } else {
            $.error('The jQuery.cookie plugin was not found, install this and try again!');
          }
        } else {
          $(idq).slideUp("slow");
        }
      });

      function guidGenerator() {
        var S4 = function() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
      }

    });
  
  };

})(jQuery);