/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// creating some variable
var score = 0;
var isChecked = false;
var questionIndex = 1;
//var currentQuestion =0
var answer;
var options = document.getElementById("options");

// creating questions
var choices = [
    " Margaret Mitchell"," Margaret Mitchell", "Jane Austen","Charles Dickens",
    "J. K. Rowling", "Jane Austen", " Margaret Mitchell","Emma Watson",
    "Emma Watson", "Hattie McDaniel", "Jane Austen", "William Shakespeare",
];
var lables = [
    "choiceA", "choiceB", "choiceC", "choiceD"
];
var answers = [
    "choiceA",  "choiceA", "choice A"
    
];

var questions = [
    {
        question: "The author of Gone with the wind? ",
    },
    {
        question: "The author of Harry Potter?",
    },
    {
        question: "The quthor of Sonnet 116?",
    }
];
//new question function
function newQuestion() {
    document.getElementById("question").innerHTML = questions[questionIndex].question;
    questions++;
    for (var i =0; i < 4; i++){
         document.getElementById(lables[i]).innerHTML = choices[i];
         if (choices < ables.length){
             choices++;
         }else if (choices < lables.length)
             choices++;
         };
}


    //document.getElementById("choice1").value = questions[questionIndex].choice1;
   
    
    //for (var i = 0; i < questions.length; i++) {
        //if (questionIndex < questions.length)
            //questions++;
    //}
//checking answer
function checkAnswer() {

    if (document.getElementById("choice1").checked === true) {
        if (document.getElementById("choice1").value === choiceA) {
            document.getElementById("choiceA").style.background = 'green';
            questions++;
            score++;
        } else {
            alert("Please Enter correct answer!");
        }
    }
}
//reset button
document.getElementById("restart_btn").addEventListener("click", function() {
  alert("Page Reset!");
});
//modal function
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
},
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};



