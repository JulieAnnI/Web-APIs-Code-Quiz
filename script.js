


var question1 = document.getElementById("question1");
var startButton = document.getElementById("startButton");
var startPage = document.getElementById("startPage");

$(startButton).on("click", function(){

    startPage.style.display = "none"
    question1.style.display = "block"
});

