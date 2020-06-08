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
var questions = [
    {
        question: "The author of Gone with the wind? ",
        choice1: " Margaret Mitchell",
        choice2: "Hattie McDaniel",
        choice3: "Jane Austen",
        choice4: "Charles Dickens",
        answer: 1
    },
    {
        question: "The author of Harry Potter?",
        choice1: "J. K. Rowling",
        choice2: "Jane Austen",
        choice3: " Margaret Mitchell",
        choice4: "Emma Watson",
        answer: 1
    },
    {
        question: "The quthor of Sonnet 116?",
        choice1: "William Shakespeare",
        choice2: "Jane Austen",
        choice3: "Hattie McDaniel",
        choice4: "Emma Watson",
        answer: 1
    }
];
//new question function
function newQuestion() {
    document.getElementById("question").innerHTML = questions[questionIndex].question;
    questions++;
    document.getElementById("choice").innerHTML = questions[questionIndex].options;
    options++;
    score++;
    
    //for (var i = 0; i < questions.length; i++) {
        //if (questionIndex < questions.length)
            //questions++;
    //}
    }
//checking answer
function checkAnswer() {

    if (document.getElementById("choice1").checked === true) {
        if (document.getElementById("choice1").value === answer[0]) {
            document.getElementById("choiceA").style.background = 'green';
            score++;
        } else {
            alert("Please Enter correct answer!");
        }
    }
}


//reset button
document.getElementById("restart_btn").addEventListener("click", function() {
  alert("Question Reset!");
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



