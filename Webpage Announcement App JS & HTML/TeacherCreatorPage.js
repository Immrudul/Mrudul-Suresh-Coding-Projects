//counter variable for iteration
var counter=0;

//teacher grade variables as a array to store multiple announcements
var teacherGrade9 =[]; 
var teacherGrade10=[]; 
var teacherGrade11=[];
var teacherGrade12=[]; 
var teacherGradeAll=[]; 

//teacher student variables as a array to store multiple announcements
var teacherGenderMale=[]; 
var teacherGenderFemale=[]; 
var teacherGenderOther=[]; 
var teacherGenderAll=[]; 

//teacher club dropdown variable as a array to store multiple announcements
var teacherClub=[];

//teacher text to store multiple announcement details/names
var teacherText=[];

//function to get and store the values for teacher criteria
function getTeacherInput() {
    //getting the element according to the counter
    teacherGrade9[counter] = document.getElementById("htmlTGrade9").checked;

        //storing it to the right array
        localStorage.setItem("teacherGrade9Key", JSON.stringify(teacherGrade9));

    teacherGrade10[counter] = document.getElementById("htmlTGrade10").checked;
        localStorage.setItem("teacherGrade10Key", JSON.stringify(teacherGrade10));

    teacherGrade11[counter] = document.getElementById("htmlTGrade11").checked;
        localStorage.setItem("teacherGrade11Key", JSON.stringify(teacherGrade11));

    teacherGrade12[counter] = document.getElementById("htmlTGrade12").checked;
        localStorage.setItem("teacherGrade12Key", JSON.stringify(teacherGrade12));

    teacherGradeAll[counter] = document.getElementById("htmlTAllGrades").checked;
        localStorage.setItem("teacherGradeAllKey", JSON.stringify(teacherGradeAll));

    teacherGenderMale[counter] = document.getElementById("htmlTMale").checked;
        localStorage.setItem("teacherGenderMaleKey", JSON.stringify(teacherGenderMale));

    teacherGenderFemale[counter] = document.getElementById("htmlTFemale").checked;
        localStorage.setItem("teacherGenderFemaleKey", JSON.stringify(teacherGenderFemale));

    teacherGenderOther[counter] = document.getElementById("htmlTOther").checked;
        localStorage.setItem("teacherGenderOtherKey", JSON.stringify(teacherGenderOther));

    teacherGenderAll[counter] = document.getElementById("htmlTAllGenders").checked;
        localStorage.setItem("teacherGenderAllKey", JSON.stringify(teacherGenderAll));

    teacherClub[counter] = document.getElementById("htmlTClubs").value;
        localStorage.setItem("teacherClubsKey", JSON.stringify(teacherClub));

    teacherText[counter] = document.getElementById("htmlTDescriptionBox").value;
        localStorage.setItem("htmlTDescriptionBoxKey", JSON.stringify(teacherText));

    //incrementing the counter to point to the next open spot in the array
    counter++
}

//function to get pre-exisitng announcements from before the browser is closed, wiped, and reset
function getExistingAnnouncements(){
    //if statement to make sure that there were already previously exisitng announcements
    if (JSON.parse(localStorage.getItem("teacherGrade9Key")!=null)){
        teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"))
        teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"))
        teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"))
        teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"))
        teacherGradeAll = JSON.parse(localStorage.getItem("teacherGradeAllKey"))
     
        //parsing teacher gender variables
        teacherGenderMale = JSON.parse(localStorage.getItem("teacherGenderMaleKey"))
        teacherGenderFemale = JSON.parse(localStorage.getItem("teacherGenderFemaleKey"))
        teacherGenderOther = JSON.parse(localStorage.getItem("teacherGenderOtherKey"))
        teacherGenderAll = JSON.parse(localStorage.getItem("teacherGenderAllKey"))
     
        //parsing teacher club dropdown and textbox information
        teacherClub=JSON.parse(localStorage.getItem("teacherClubsKey"))
        teacherText = JSON.parse((localStorage.getItem("htmlTDescriptionBoxKey")))

        //setting the counter to the length of the array so that it starts off points to the next open spot in the array
        counter=teacherGrade9.length
    }
}
