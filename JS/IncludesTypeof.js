var student_list = ["Sowmya", "Dennis", "Dave"];

student_find = "Sowmya"
if (student_list.includes("Sowmya")){
    console.log("Student found in the list");
}
else{
    console.log("Student NOT found in the list");
}

var student = 21345;
if (typeof student === "string"){
    student_list.push(student);
}
else{
    console.log("Error!! Input should be a name")
}