var submitInfo = document.getElementById("submit");

submitInfo.addEventListener("click", validateInput);

function validateInput() {
	var userID = document.getElementById("userID");
    var pwd = document.getElementById("pwd");
    var statusInfo = document.getElementById("status");

    if (userID.value && pwd.value) {
    	console.log("Login Successful");
    	statusInfo.innerHTML = "Login Successful";
    } else if (!userID.value){
    	console.log("User ID should be entered");
    	statusInfo.innerHTML = "Please enter the user ID and resubmit.";
    } else {
    	statusInfo.innerHTML = "Please enter the password and resubmit.";
    	console.log("Password should be entered");
    }
    
}