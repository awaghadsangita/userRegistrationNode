var assert=require('assert');
var validator=require('./validator');

describe('Test for username validity',function(){
	it('it should return true if valid firstname',function(){
		let isValid=validator.validateName('Sangita');
		assert.equal(isValid,true);
	});
	
	it('it should return false if name does not uppercase',function(){
		let isValid=validator.validateName('sangita');
		assert.equal(isValid,false);
	});
	
	it('it should return false if name does not contain minimum 3 letters',function(){
		let isValid=validator.validateName('Sa');
		assert.equal(isValid,false);
	});
	
	it('it should return false if name is undefined',function(){
		let isValid=validator.validateName(undefined);
		assert.equal(isValid,false);
	});
	
	it('it should return false if name is null',function(){
		let isValid=validator.validateName(null);
		assert.equal(isValid,false);
	});
});
