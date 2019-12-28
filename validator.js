class Validator{
	validateName(name){
		let nameRegex=RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
		return nameRegex.test(name);
	}
	
	validateEmail(email){
		let emailRegex=RegExp("^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$");
		return emailRegex.test(email);	
	}
}
module.exports=new Validator();
