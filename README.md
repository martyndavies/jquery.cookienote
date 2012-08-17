# jQuery.cookieNote

A lightweight jQuery plugin that helps you quickly include notices about use of cookies in your sites. Since the EU e-Privacy  Directive was announced this is becoming more and more prominent but it's an extra bit of work you might end up doing again and again.

This fully customisable plugin saves you time and keeps you compliant.

## Installation

Include the link to the stylesheet in your page header or asset pipeline.

```html
<link rel="stylesheet" href="/jquery.cookienote.css">
```

Include the script tag *after* the jQuery library if you're hand rolling your pages. If you're using it inside a Rails app make sure you include it in your application.css

```html
<script src="/jquery.cookienote.min.js"></script>
```

## Usage

To use this plugin with the default settings, simply create a div with an ID

	<div id="cookie-notice"><div>

Place the div anywhere you like in the page, just after you open the body tag is best.

Then call the cookieNote plugin on the div, like so:

```javascript
$('#cookie-note').cookieNote();
```

## Configuration

jQuery.cookieNote comes with some defaults set up to get you going out of the box but several options can be turned on, off, or changed by passing new values on setup.

For instance, to change the initial background color of the notice to red, you can do this:

```javascript
$('#cookie-note').cookieNote({
	backgroundColor: '#cc0000'
});
```

Or how about setting an animation option and a new height?

```javascript
$('#cookie-note').cookieNote({
	backgroundColor: '#cc0000',
	height: 100,
	animate: true
});
```

### Default Configuration

	'width': 100, //percent
	'height': 80, // pixels
	'backgroundColor': '#323232', // can be overridden with hex or just words
	'insertionType': 'overlay', // alternative is 'insert'
	'animate': false, // this is cleaner
	'animationStyle': 'slideDown', // if you must then this works best
	'animationSpeed': 'slow', // this is smoother, can also be 'fast' or milliseconds
	'position': 'top', // where people will see it

	'headingText': 'Cookies on this website', // standard generic
	'explainationText': 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies on the this website. However, if you would like to, you can change your cookie settings at any time.',

	'confirmText': 'Continue', // standard generic
	'setCookie': false, // if true you will need the jQuery.cookie plugin
	'cookieExpiresIn': 7 // default one week, can be overridden

#### width
In percent, best left as the default, which is 100

#### height
In pixels, default is 80px

#### backgroundColor
Takes a hex value, or just a word, default is a dark grey like the BBC use

#### insertionType
Set this is you would prefer to insert the notice rather than overlay it (default). This makes sense if you have a navigation area at the top of the page and you would like the notice to be above that.

	insertionType: 'insert'

#### animate
Sets whether an animation should be used to display the notice. Default is false.

Set to true to use the default animation which is slideDown

	animate: true

#### animationStyle
Sets the type of animation to use if the `animation` value is `true`. Default is `slideDown`. Alternative is `fadeIn`, you should probably only use this if your insertionType has been set to `overlay`.

#### animationSpeed
Sets the speed of the animation. Default is `slow` but can take `fast` or a millisecond value like `2000`.

#### position
Sets where on the page the notice is displayed. Default is `top` and you should just leave it alone.

#### headingText
Sets the heading value (`h2` in the included CSS).

#### explainationText
Sets the text explaining why the user is seeing the notice. Feel free to change. (Related to `p` in included CSS).

#### confirmText
Sets the text on the confirmation button

#### setCookie
Default is `false`. If you would like jQuery.cookieNote to also set up a cookie for the user that means the notice won't show again once they confirm they read it, you can set this to `true`.

This feature is dependent on the excellent [jQuery.cookie](https://github.com/carhartl/jquery-cookie) plugin also being included in your page before jQuery.cookieNote. Your script includes should be in this order:

```html
<link rel="stylesheet" href="/jquery.cookienote.css"/>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="/jquery.cookie.js"></script>
<script src="/jquery.cookienote.js"></script>
```

#### cookieExpiresIn
Optional, you can change this to set a shorter or longer expiration date for your cookie. Default is one week.


## Yo, Davies, why the dependency?

What do you want? The moon on a stick? I haven't built independent cookie control into this because most likely you're going to be using something different on each project and who am I to decide how, when and why you set a cookie. The basic level should be to just not show the message this plugin displays to people that have already seen it and for that the jQuery.cookie library is perfectly fine.

## Customisation

The included CSS file contains a basic set of styles for every element that is written to the page dynamically. It's there for example only and you should really modify it to stay inline with the site you include this on.

## Development

Feel free to fork this, the code is probably ropey as all hell. I'll refactor some of it soon and release another version.

## Authors

[Martyn Davies (@martynrdavies)](http://www.twitter.com/martynrdavies)

## License

Copyright 2012 Martyn Davies

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.