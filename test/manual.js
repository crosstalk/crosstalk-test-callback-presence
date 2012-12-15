/*
 * test.js
 *
 * (C) 2012 Crosstalk Systems Inc.
 */
"use strict";

var ide = require( 'crosstalk-ide' )();

var token = "CROSSTALK_TOKEN";

ide.send( token, "test.callback.should.be.defined", {}, null, 
  function ( error, response ) {} );

ide.send( token, "test.callback.should.be.undefined", {} );

setTimeout( function () {

  ide.send( token, "test.callback.presence.state", {}, null,
    function ( error, response ){
      console.log( error, response );
  });

}, 5000 );