# jQuery.cookieNote

A lightweight jQuery plugin that helps you quickly include notices about use of cookies in your sites. Since the EU e-Privacy  Directive was announced this is becoming more and more prominent but it's an extra bit of work you might end up doing again and again.

This fully customisable plugin saves you time and keeps you compliant.

## Installation

Include the link to the stylesheet in your page header or asset pipeline.

		<link rel="stylesheet" href="/jquery.cookienote.css">

Include the script tag *after* the jQuery library if you're hand rolling your pages. If you're using it inside a Rails app make sure you include it in your application.css

    <script src="/jquery.cookienote.min.js"></script>

## Usage

To use this plugin with the default settings, simply create a div with an ID

	<div id="cookie-notice"><div>

Place the div anywhere you like in the page, just after you open the body tag is best.

Then call the cookieNote plugin on the div, like so:

	$('#cookie-note').cookieNote();


## Configuration

jQuery.cookieNote comes with some defaults set up to get you going out of the box but several options can be turned on, off, or changed by passing new values on setup.

For instance, to change the initial background color of the notice to red, you can do this:

	$('#cookie-note').cookieNote({
		backgroundColor: '#cc0000'
	});

Or how about setting an animation option and a new height?

	$('#cookie-note').cookieNote({
		backgroundColor: '#cc0000',
		height: 100,
		animate: true
	});

### Default Configuration

	'width': 100, //percent
	'height': 80, // pixels
	'backgroundColor': '#323232', // can be overridden with hex or just words
	'insertionType': 'overlay', // alternative is 'insert'
	'animate': false, // this is cleaner
	'animationStyle': 'slideDown', // if you must then this works best
	'animationSpeed': "slow", // this is smoother
	'position': 'top', // where people will see it

	'headingText': 'Cookies on this website', // standard generic
	'explainationText': 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies on the this website. However, if you would like to, you can change your cookie settings at any time.',

	'confirmText': 'Continue', // standard generic
	'setCookie': false, // if true you will need the jQuery.cookie plugin
	'cookieExpiresIn': 7 // default one week, can be overridden







## Authors

[Martyn Davies (@martynrdavies)](http://www.twitter.com/martynrdavies)