var assert=require('assert');
var validator=require('./validator');

describe('Test for username validity',function(){
	it('it should return true if valid firstname',function(){
		var isValid=validator.validateName('Sangita');
		assert.equal(isValid,true);
	});
	
});
