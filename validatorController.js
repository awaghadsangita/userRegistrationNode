let read=require("readline-sync");
let validator=require("./validator");

let firstname=read.question("Enter the Firstname :");
if(validator.validateName(firstname)){
	console.log("valid first name");
}else{
	console.log("invalid first name");
}

