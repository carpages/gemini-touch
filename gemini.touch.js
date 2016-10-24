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
( function( factory ) {
  if ( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module.
    define([
      'gemini',
      'fastclick',
      'jquery.hammer'
    ], factory );
  } else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    module.exports = factory(
      require( 'gemini-loader' ),
      require( 'fastclick' ),
      require( 'jquery-hammerjs' )
    );
  } else {
    // Browser globals
    factory( G );
  }
}( function( $, FastClick ) {
  // Initiate fast click
  FastClick.attach( document.body );

  return G;
}));
