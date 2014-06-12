/**
 * @fileoverview

A Gemini module to load on mobile devices.

### Features
- Loads [hammer.js](http://eightmedia.github.io/hammer.js/)
- Loads [fastclick](https://github.com/ftlabs/fastclick)

 *
 * @namespace gemini.touch
 * @copyright Carpages.ca 2014
 * @author Matt Rose <matt@mattrose.ca>
 *
 * @requires jquery.hammer
 * @requires fastclick
 *
 */
define(['gemini', 'jquery.hammer', 'fastclick'], function(G){

	//Initiate fast click
	FastClick.attach(document.body);

  return G;

});
