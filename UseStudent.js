const ps=require('prompt-sync');
const prompt=ps();

const {Student}=require('./Student.js');// importing student class
const stuFunctions=require('./stuFunctions.js');// import stuFunctions.js
var choice=0

while(true){//start

if(choice==0){
    console.log("=================================================");
    console.log("select your choice:");
    console.log("\t1.Register Students\n\t2.Record Student Marks\n\t3.Check Student Grades\n\t4.Write Student Details to Text File\n\t5.Show average marks for a class\n\t6.Exit");
    choice=prompt('Enter your choice [1,2,3,4,5,6] :');6
}
else if(choice==1){
    stuFunctions.regStudents();
    choice=0;
}
else if(choice==2){
    let stuNo=prompt("Enter Student No: ");
    let stuMarks=prompt("Enter Student Marks: ");
    stuFunctions.addStudentMarks(stuNo,stuMarks);
    choice=0;
}
else if(choice==3){

}
else if(choice==4){

}
else if(choice==5){

}
else if(choice==6){
    break;// close loop
}



}//end while