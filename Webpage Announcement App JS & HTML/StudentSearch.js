function getStudentInput() {
    //getting and setting variable in one line for efficiency
    localStorage.setItem("studentGrade9Key", document.getElementById("htmlSGrade9").checked);

    localStorage.setItem("studentGrade10Key", document.getElementById("htmlSGrade10").checked);

    localStorage.setItem("studentGrade11Key", document.getElementById("htmlSGrade11").checked);

    localStorage.setItem("studentGrade12Key", document.getElementById("htmlSGrade12").checked);

    localStorage.setItem("studentGradeAllKey", document.getElementById("htmlSAllGrades").checked);

    localStorage.setItem("studentGenderMaleKey", document.getElementById("htmlSMale").checked);

    localStorage.setItem("studentGenderFemaleKey", document.getElementById("htmlSFemale").checked);

    localStorage.setItem("studentGenderOtherKey", document.getElementById("htmlSOther").checked);

    localStorage.setItem("studentGenderAllKey", document.getElementById("htmlSAllGenders").checked);

    localStorage.setItem("studentClubsKey", document.getElementById("htmlSClubs").value)

    //href to automatically bring student to results page
    document.location.href = 'studentResultsPage.html';

}
