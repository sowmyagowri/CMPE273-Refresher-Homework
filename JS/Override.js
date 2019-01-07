function passenger(name,age) {
    this.name = name;
    this.age = age;
}

passenger.prototype.travel = function() {
    console.log(this.name +  " " + this.age + " years old is NOT eligible for senior citizen concession");
}

function seniorCitizen(name,age) {
    passenger.call(this,name,age);
}

seniorCitizen.prototype = Object.create(passenger.prototype);

seniorCitizen.prototype.travel = function() {
    console.log(this.name +  " " + this.age + " years old is eligible for senior citizen concession");
}

const Passenger = new passenger("Sowmya", 34);
const SeniorCitizen = new seniorCitizen("Dennis", 60);

SeniorCitizen.travel();
Passenger.travel();