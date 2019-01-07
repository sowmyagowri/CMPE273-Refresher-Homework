var validPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	
var email1 = "myemail@mysite.com";
var email2 = "myemail.mysite.com";

console.log(email1+ " is " + (validPattern.test(email1) ? "valid" : "invalid"));
console.log(email2+ " is " + (validPattern.test(email2) ? "valid" : "invalid"));