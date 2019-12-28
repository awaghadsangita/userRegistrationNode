class Validator{
	validateName(name){
		let nameRegex=RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
		return nameRegex.test(name);
	}
	
	validateEmail(email){
		let emailRegex=RegExp("^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$");
		return emailRegex.test(email);	
	}
	
	validateMobileNumber(mobileNumber){
		let mobileRegex=RegExp("^[0-9]{2}[ ]{1}[0-9]{10}$");
		return mobileRegex.test(mobileNumber);
	}
	
	validatePassword(pwd){
		let passwordRegex=RegExp("^[a-zA-Z0-9]{8}");
		let uppercaseRegex=RegExp("[A-Z]");
		return passwordRegex.test(pwd) && uppercaseRegex.test(pwd);
	}
}
module.exports=new Validator();
