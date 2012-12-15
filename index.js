/*
 * index.js: test for worker callback being undefined
 *
 * (C) 2012 Crosstalk Systems Inc.
 */
"use strict";

var state = { status : "initializing" };

crosstalk.on( "test.callback.should.be.defined", function ( params, callback ) {
  
  if ( ! state[ 'should.be.defined.test' ] ) {
    state[ 'should.be.defined.test' ] = callback ? 'pass' : 'fail';
  }

  if ( callback ) return callback();

}); // crosstalk.on 'callback.should.be.defined.test'

crosstalk.on( "test.callback.should.be.undefined", function ( params, callback ) {
  
  if ( ! state[ 'should.be.undefined.test' ] ) {
    state[ 'should.be.undefined.test' ] = callback ? 'fail' : 'pass';
  }

  if ( callback ) return callback(); // don't break test runner if test fails

}); // crosstalk.on 'callback.should.be.defined.test'

crosstalk.on( "test.callback.presence.state", function ( params, callback ) {
  return callback( null, state );
});

state.status = "ready";