let read=require("readline-sync");
let validator=require("./validator");

let firstname=read.question("Enter the Firstname :");
if(validator.validateName(firstname)){
	console.log("valid firstname");
}else{
	console.log("invalid firstname");
}

let lastname=read.question("Enter the Lastname :");
if(validator.validateName(lastname)){
	console.log("valid lastname");
}else{
	console.log("invalid lastname")
}

let email=read.question("Enter the Email :");
if(validator.validateEmail(email)){
	console.log("valid email");
}else{
	console.log("invalid email");
}

let mobileNumber=read.question("Enter the Mobile Number :");
if(validator.validateMobileNumber(mobileNumber)){
	console.log("valid mobile number");
}else{
	console.log("invalid mobile number");
}

let password=read.question("Enter the Password :");
if(validator.validatePassword(password)){
	console.log("valid password");
}else{
	console.log("invalid password");
}
