var correctanswer ={
    question1: "b",
    question2: "2",
    question3: "dd",
    queston4: "aaa",
    question5: "a1"
}


let quizdata = document.getElementById(myForm);
let score = 0;
quizData.addEventListener("button",function (event){
event.preventDefault()
var quizForm = new FormData(quizData)
compareData(quizForm)
});
function compareData(quizForm)