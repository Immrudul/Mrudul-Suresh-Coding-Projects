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
     
        //parsing teacher club dropdown and textbonx information
        teacherClub=JSON.parse(localStorage.getItem("teacherClubsKey"))
        teacherText = JSON.parse((localStorage.getItem("htmlTDescriptionBoxKey")))

        //setting the counter to the length of the array so that it starts off points to the next open spot in the array
        counter=teacherGrade9.length
    }
}

//defining teacher grade variables
var teacherGrade9;
var teacherGrade10;
var teacherGrade11;
var teacherGrade12;
var teacherGradeAll;

//teacher gender variables
var teacherGenderMale;
var teacherGenderFemale;
var teacherGenderOther;
var teacherGenderAll;

//defining teacher club and textbox
var teacherClub;
var teacherText;

//defining student grade variables
var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentGradeAll;

//defining student gender variables
var studentGenderMale;
var studentGenderFemale;
var studentGenderOther;
var studentGenderAll;

//defining student club dropdown variable
var studentClub;

function displayResults() {
   //parsing teacher grade variables
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

   //parsing teacher club dropdown and textbonx information
   teacherClub=JSON.parse(localStorage.getItem("teacherClubsKey"))
   teacherText = JSON.parse((localStorage.getItem("htmlTDescriptionBoxKey")))

   //parsing student grade variables
   studentGrade9 = JSON.parse(localStorage.getItem("studentGrade9Key"))
   studentGrade10 = JSON.parse(localStorage.getItem("studentGrade10Key"))
   studentGrade11 = JSON.parse(localStorage.getItem("studentGrade11Key"))
   studentGrade12 = JSON.parse(localStorage.getItem("studentGrade12Key"))
   studentGradeAll = JSON.parse(localStorage.getItem("studentGradeAllKey"))

   //parsing student gender variables
   studentGenderMale = JSON.parse(localStorage.getItem("studentGenderMaleKey"))
   studentGenderFemale = JSON.parse(localStorage.getItem("studentGenderFemaleKey"))
   studentGenderOther = JSON.parse(localStorage.getItem("studentGenderOtherKey"))
   studentGenderAll = JSON.parse(localStorage.getItem("studentGenderAllKey"))

   //not parsing student club because it is a dropdown and has only one value
   studentClub = (localStorage.getItem("studentClubsKey"))

   //variable which will hold all the true variables
   let announcementHolder=[]
   
   //for loop to access each item in every list to find a match
   for (let i=0; i<teacherGenderMale.length; i++){
      if (
         //condition to check if teacher has checked all grades and genders and clubs match
         teacherGradeAll[i] && teacherGenderAll[i] && teacherClub[i] == studentClub
         || 
         //condition to check if student has checked all grades and genders and clubs match
         studentGradeAll && studentGenderAll && teacherClub[i]==studentClub
         ||
         //checks if teacher has checked all grades, student and teacher gender matches, and clubs matches
         teacherGradeAll[i]
         && teacherGenderMale[i] == studentGenderMale && teacherGenderFemale[i] == studentGenderFemale && teacherGenderOther[i] == studentGenderOther
         && teacherClub[i]==studentClub
         ||
         //checks if grades match, teacher has checked all genders, and clubs match
         teacherGrade9[i] == studentGrade9 && teacherGrade10[i] == studentGrade10 && teacherGrade11[i] == studentGrade11 &&
         teacherGrade12[i] == studentGrade12 && teacherGenderAll && teacherClub[i]==studentClub
         ||
         //checks if grades match, student has checked all genders, and clubs match
         teacherGrade9[i] == studentGrade9 && teacherGrade10[i] == studentGrade10 && teacherGrade11[i] == studentGrade11 &&
         teacherGrade12[i] == studentGrade12 && studentGenderAll && teacherClub[i]==studentClub
         ||
         //checks if student has checked all grades, genders match, and clubs match
         studentGradeAll
         && teacherGenderMale[i] == studentGenderMale && teacherGenderFemale[i] == studentGenderFemale && teacherGenderOther[i] == studentGenderOther
         && teacherClub[i]==studentClub){
            //if any of the conditions are true, then the announcement is added to the holder variable to be displayed
            announcementHolder.push(teacherText[i])
         }
      //else condition to print that there were no found announcements
      
      else{
         document.getElementById("htmlSRResults").innerHTML = "Sorry, there were no announcements found!";
      }
   }            
//to display the announcement holder and all the matching announcements       
document.getElementById("htmlSRResults").innerHTML = announcementHolder

}
