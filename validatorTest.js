var assert=require('assert');
var validator=require('./validator');

describe('Test for username validity',function(){
	it('it should return true if valid firstname',function(){
		var isValid=validator.validateName('Sangita');
		assert.equal(isValid,true);
	});
	
	it('it should return false if name does not uppercase',function(){
		var isValid=validator.validateName('sangita');
		assert.equal(isValid,false);
	});
	
	it('it should return false if name does not contain minimum 3 letters',function(){
		var isValid=validator.validateName('Sa');
		assert.equal(isValid,false);
	})
});
