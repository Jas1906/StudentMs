const ps=require('prompt-sync');
const prompt=ps();
const {Student}=require('./Student.js');

var studentDetails=new Array();// creating global array to store student object

function regStudents(){// validate data and create student objects

    let stuno="";
    let sname="";
    let bday="";
    let semail="";
    let sclass="";

    while(true){// while loop starts
        if(stuno.length==5){
            if(sname.length>3){
                if(bday.length==8){
                    semail=prompt("enter student email");
                    sclass=prompt("enter student class");
                    break;//exit from the loop
                }//end of bday
                else{
                    bday=prompt("Enter Student Birthday(ddmmyy)");
                }
            }//end of sname
            else{
                sname=prompt("enter valid name");
            }
        }//end of sno
        else{
            stuno=prompt("enter valid student no [should contain 5 characters]");
        }

    }// end of while loop

    const stu=new Student();// creating student object
    stu.studentNo=stuno;
    stu.studentName=sname;
    stu.studentBday=bday;
    stu.studentEmail=semail;
    stu.studentClass=sclass;
    stu.studentMarks=0;//initial mark
    studentRegistration(stu);

}// end of regStudents function

function studentRegistration(student){
    studentDetails.push(student);
    console.log(studentDetails);

}
function addStudentMarks(stuno,stumarks){// add marks to student object
    for(var i=0;i<studentDetails.length;i++){

        if(studentDetails[i].studentNo==stuno){
            studentDetails[i].studentMarks=stumarks;
            break;
        }
    }
    console.log(studentDetails);

}

module.exports={regStudents,addStudentMarks};