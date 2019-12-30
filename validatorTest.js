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

describe('Test for email validity',function(){
	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc.xyz@bl.co.in');
		assert.equal(isValid,true);
	});

	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc@yahoo.com');
		assert.equal(isValid,true);
	});

	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc-100@yahoo.com');
		assert.equal(isValid,true);
	});

	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc.100@yahoo.com');
		assert.equal(isValid,true);
	});

	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc111@abc.com');
		assert.equal(isValid,true);
	});

	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc-100@abc.net');
		assert.equal(isValid,true);
	});

	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc.100@abc.com.au');
		assert.equal(isValid,true);
	});

	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc@1.com');
		assert.equal(isValid,true);
	});

	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc@gmail.com.com');
		assert.equal(isValid,true);
	});

	it('it should return true if mail is valid',function(){
		let isValid=validator.validateEmail('abc+100@gmail.com');
		assert.equal(isValid,true);
	});
	
	it('it should return false if mail does not contains “@” symbol',function(){
		let isValid=validator.validateEmail("abc");
	});
});
