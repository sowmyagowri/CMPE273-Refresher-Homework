function passengerInfo(name, age, gender, seatNo) {
	this.name = name;
	this.age = age;
    this.gender = gender;
    this.seatNo = seatNo;
}

passengerInfo.prototype = {
		constructor:passenger,
		getName: function(){
			return this.name;
		},
		getage: function(){
			return this.age;
		},
		getseatNo: function(){
			return this.seatNo;
		},
}

var passenger = new passengerInfo("Sowmya", 34, "F", 70);
console.log("Passenger name: " + passenger.name);
console.log("Seat No. is " + passenger.seatNo);