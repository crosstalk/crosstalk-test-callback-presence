/*
 * index.js: test for worker callback being undefined
 *
 * (C) 2012 Crosstalk Systems Inc.
 */
"use strict";

var state = { status : "initializing" };

crosstalk.on( "test.callback.should.be.defined", function ( params, callback ) {
  
  if ( ! state[ 'callback.should.be.defined' ] ) {
    state[ 'callback.should.be.defined' ] = callback ? 'pass' : 'fail';
  }

  if ( callback ) return callback();

}); // crosstalk.on 'callback.should.be.defined.test'

crosstalk.on( "test.callback.should.be.undefined", function ( params, callback ) {
  
  if ( ! state[ 'callback.should.be.undefined' ] ) {
    state[ 'callback.should.be.undefined' ] = callback ? 'fail' : 'pass';
  }

  if ( callback ) return callback(); // don't break test runner if test fails

}); // crosstalk.on 'callback.should.be.defined.test'

crosstalk.on( "test.callback.presence.state", function ( params, callback ) {
  return callback( null, state );
});

state.status = "ready";