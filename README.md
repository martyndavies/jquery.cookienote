# jquery.cookieNote

A lightweight jQuery plugin that helps you quickly include notices about use of cookies in your sites. Since the EU e-Privacy  Directive was announced this is becoming more and more prominent but it's an extra bit of work you might end up doing again and again.

This plugin saves you time and keeps you compliant.

## Installation

Include script *after* the jQuery library if you're hand rolling your pages. If you're using it inside a Rails app make sure you include it in your application.css

    <script src="/path/to/jquery.cookienote.min.js"></script>

## Usage

To use this plugin with the default settings, simply create a div with an ID

    <div id="cookie-notice"><div>

Place the div anywhere you like in the page, just after you open the body tag is best.

Then call the cookieNote plugin on the div, like so:

    $('#cookie-note').cookieNote();




## Authors

[Martyn Davies (@martynrdavies)](http://www.twitter.com/martynrdavies)