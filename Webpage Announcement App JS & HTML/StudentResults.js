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
         studentGradeAll && studentGenderAll && studentClub=="All Clubs"
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
      
      if (announcementHolder.length==0){
         document.getElementById("htmlSRResults").innerHTML = "Sorry, there were no announcements found!";
      }
      
      //to display the announcement holder and all the matching announcements
      else{
         (document.getElementById("htmlSRResults").innerHTML = announcementHolder)
      }
   }            
 


}
