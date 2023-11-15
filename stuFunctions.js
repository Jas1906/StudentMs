const ps=require('prompt-sync');
const prompt=ps();

const fs=require('fs');

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

function writeStudentDetails(stuno){//display in text file
    for(var i=0;i<studentDetails.length;i++){

        if(studentDetails[i].studentNo==stuno){

            const stuDetails=fs.writeFileSync(studentDetails[i].studentNo+'.txt','Student No: '+studentDetails[i].studentNo+'\nStudent Name: '+studentDetails[i].studentName+'\nStudent Marks: '+studentDetails[i].studentMarks);

            console.log('data is writter to external txt file');
            break;
        }
    }

}

function classAverage(className){
    let classAvg=0;
    let total=0;
    let stuCount=0;

    for(var i=0;i<studentDetails.length;i++){

        if(studentDetails[i].studentClass==className){
            total=total+Number(studentDetails[i].studentMarks);
            stuCount++; //stuCount=stuCount+1 counting num of students
        }

    }

    classAvg=total/stuCount;
    console.log("======================");
    console.log("average marks : "+classAvg);
}

function calGrade(){
    let stuNo=prompt('enter student no: ')

    for(var i=0;i<studentDetails.length;i++){
        if(studentDetails[i].studentNo==stuNo){

            let marks=studentDetails[i].studentMarks;

            if(marks>=80){
                console.log("A");
            }
            else if(marks>=60){
                console.log("B");
            }
            else if(marks>=45){
                console.log("C");
            }
            else{
                console.log("F");
            }
        }

    }
}

module.exports={regStudents,addStudentMarks,writeStudentDetails,classAverage,calGrade};