var accountBalance = 50;

function withdraw(amount) {
	if (accountBalance) {
		console.log("Withdrawal Successful");
		accountBalance -= amount;
		console.log("Available Bank Balance is $" + accountBalance);
    }
    else{
        console.log("Account Balance zero. Cannot withdraw");
    }
} 

withdraw(10);
withdraw(40);
withdraw(10);