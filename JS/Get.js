var employee = {
    details: ['Sowmya', '702222', 'Programmer Analyst'],
    get latest() {
      if (this.details.length == 0) {
        return undefined;
      }
      return this.details[this.details.length - 1];
    }
  }
  
  console.log("The designation of the employee is", employee.latest);