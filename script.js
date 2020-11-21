

var startButton = document.getElementById("startButton");
var startPage = document.getElementById("startPage");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById ("question4");
var question5 = document.getElementById ("question5");
var answers1 = document.getElementsByClassName("answers1")
var answers2 = document.getElementsByClassName("answers2")
var answers3 = document.getElementsByClassName("answers3")
var answers4 = document.getElementsByClassName("answers4")
var answers5 = document.getElementsByClassName("answers5")
var correct = document.getElementsByClassName("correct");

var startFunction = $(startButton).on("click", function(){

    startPage.style.display = "none"
    question1.style.display = "block"
    question2.style.display = "none"
    question3.style.display = "none"
    question4.style.display = "none"
    question5.style.display = "none"
});

var goToQuestion2 = $(answers1).on("click", function(){

    startPage.style.display = "none"
    question1.style.display = "none"
    question2.style.display = "block"
    question3.style.display = "none"
    question4.style.display = "none"
    question5.style.display = "none"
});

var goToQuestion3 = $(answers2).on("click", function(){

    startPage.style.display = "none"
    question1.style.display = "none"
    question2.style.display = "none"
    question3.style.display = "block"
    question4.style.display = "none"
    question5.style.display = "none"
});

var goToQuestion4 = $(answers3).on("click", function(){

    startPage.style.display = "none"
    question1.style.display = "none"
    question2.style.display = "none"
    question3.style.display = "none"
    question4.style.display = "block"
    question5.style.display = "none"
});

var goToQuestion5 = $(answers4).on("click", function(){

    startPage.style.display = "none"
    question1.style.display = "none"
    question2.style.display = "none"
    question3.style.display = "none"
    question4.style.display = "none"
    question5.style.display = "block"
});


if (startFunction) {

    goToQuestion2;
    goToQuestion3;
    goToQuestion4;
    goToQuestion5;
}




