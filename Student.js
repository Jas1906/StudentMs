class Student{// create student class
    constructor(){
        this.stu_no="";
        this.stu_name="";
        this.stu_bday="";
        this.stu_email="";
        this.stu_class="";
        this.stu_marks="";
    }
    set studentNo(stuno){
        if(stuno.length==5){//checking number of characters
            this.stu_no=stuno;
        }
        else{
            console.log("invalid value");
        }
    }
    get studentNo(){
        return this.stu_no;
    }
    set studentName(sname){
        if(sname.length>=3){// name more than 3 characters
            this.stu_name=sname;
        }
        else{
            console.log("name should be more than 3");
        }
    }
    get studentName(){
        return this.stu_name;
    }
    set studentBday(bday){
        if(bday.length==8){
            this.stu_bday=bday;

        }
        else{
            console.log("invalid value for bday");
        }
    }
    get studentBday(){
        return this.stu_bday;
    }
    set studentEmail(semail){
        this.stu_email=semail;

    }
    get studentEmail(){
        return this.stu_email;
    }
    set studentClass(sclass){
        this.stu_class=sclass;
    }
    get studentClass(){
        return this.stu_class;
    }
    set studentMarks(marks){
        if(marks>=0 && marks<=100){
            this.stu_marks=marks;
        }
        else{
            console.log("invalid input marks");
        }
    }



}//end of class student

module.exports={Student};