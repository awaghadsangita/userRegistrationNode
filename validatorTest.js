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
		assert.equal(isValid,false);
	});

	it('it should return false if tld start with dot “.”',function(){
		let isValid=validator.validateEmail("abc@.com.my");
		assert.equal(isValid,false);
	});

	it('it should return false if tld start with dot “.”',function(){
		let isValid=validator.validateEmail("abc123@.com.com");
		assert.equal(isValid,false);
	});

	it('it should return false if email’s 1st character start with “.”',function(){
		let isValid=validator.validateEmail(".abc@abc.com");
		assert.equal(isValid,false);
	});

	it('it should return false as email’s is only allow character, digit, underscore and dash',function(){
		let isValid=validator.validateEmail("abc()*@gmail.com");
		assert.equal(isValid,false);
	});
	
	it('it should return false if email contains double dots “.”',function(){
		let isValid=validator.validateEmail("abc..2002@gmail.com");
		assert.equal(isValid,false);
	});
	
	it('it should return false if email ends with "."',function(){
		let isValid=validator.validateEmail("abc.@gmail.com");
		assert.equal(isValid,false);
	});
	
	it('it should return false if email contains "@"',function(){
		let isValid=validator.validateEmail("abc@abc@gmail.com");
		assert.equal(isValid,false);
	});	
	
	it('it should return false if email’s tld which has two characters contains digit',function(){
		let isValid=validator.validateEmail("abc@gmail.com.1a");
		assert.equal(isValid,false);	
	});

	it('it should return false if email contains multiple tld',function(){
		let isValid=validator.validateEmail("abc@gmail.com.aa.au");
		assert.equal(isValid,false);
	});
});

describe("Test for Password Validity",function(){
	it('it should return false if password contains less than 8 characters',function(){
		let isValid=validator.validatePassword("Suraj");
		assert.equal(isValid,false);
	});
	
	it('it should return false if password does not contains atleast one uppercase',function(){
		let isValid=validator.validatePassword("sangita123!");
		assert.equal(isValid,false);
	});	

	it('it should return false if password does not contain atleast one digit',function(){
		let isValid=validator.validatePassword("Sangita!");
		assert.equal(isValid,false);
	});

	it('it should return false if password contains multiple special characters',function(){
		let isValid=validator.validatePassword("Sangita123!!!");
		assert.equal(isValid,false);
	});
});
