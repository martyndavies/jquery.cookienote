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

### Configuration options







## Authors

[Martyn Davies (@martynrdavies)](http://www.twitter.com/martynrdavies)