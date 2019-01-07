function Employee () {}

Employee.prototype = {
		//constructor:Employee,
		company: function() {
			console.log(this.name + " works for ABC Corporation!!");
		},
		designation: function() {
			console.log("The designation is " + this.title);
        },
        department: function() {
			console.log("The Department is " + this.initial_department);
		}
}

function Engineer(name, title, initial_department){
	this.name = name;
    this.title = title;
    this.initial_department = initial_department;
};

Engineer.prototype = new Employee(); //Inheritance

var sowmya = new Engineer("Sowmya", "Programmer Analyst", "Bench");
sowmya.company();
sowmya.designation();
sowmya.department();

//Override the department function
Engineer.prototype.department = function(){
	console.log(this.name + " now belongs to Architecture Team");
}

console.log("Department has been updated");
sowmya.department();