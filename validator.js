class Validator{
	validateName(name){
		let nameRegex=RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
		return nameRegex.test(name);
	}
}
module.exports=new Validator();
