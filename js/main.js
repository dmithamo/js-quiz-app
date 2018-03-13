"use strict";

var instructions = [
"Each question in section one has one right answer. Pick that right answer. " +
"[if you want to be right, that is. Else pick the answer that suits your objective(s)]",

"Section two may have multiple correct answers, or one correct answer. The correct answer " +
"may be none of the choices given. So, yea, ye are warned. Again, pick the correct answer(s)," +
"if there be any.",

"In section three, you are required to type in your answer in the space provided. So do that. " +
"You can type in caps or in lowercase. Do what makes you happy.",

"Each question may contain instructions that appear to contradict these instructions. " +
"Be advised, if that be the case, the instructions in the question rank higher." +
"Follow the higher ranking instructions, and it shall be well with you. " ,

"At the bottom of the quiz, there exists several very clearly labelled buttons." +
"Clicking a button will cause what the button's label says will happen to happen. " +
"Click at your own risk.",

];

var questionList = [
    {
        "question":"Who is the current president of Kenya?",
        "choices": ["Raila Amolo Odinga", "Uhuru Muigai Kenyatta", "John Pombe Magufuli",
                    "Uhuru Mureu Kenyatta", "None of the above", ]
    },

    {
        "question":"Which of these completely defeats logic?",
        "choices": ["Raila Amolo Odinga as President", "Uhuru Muigai Kenyatta as President", 
                    "John Pombe Magufuli as an actual person's name",
                    "Thinking Mureu [Kikuyu for drunk person] is the second name of Uhuru just because he is always drunk"]
    }
]

var sectionOneQuestions = document.getElementById("section-one-qns");
var instructionList = document.getElementById("instruction-list");

function writeInstructions(){
    for(var i=0; i<instructions.length; i++){
        instructionList.innerHTML += '<li>' + instructions[i] + '</li>'
    }
};

function makeQuestions(){
    questionList.forEach(question => {
        sectionOneQuestions.innerHTML += '<div class="full-question"><li class="a-question">'+ question.question + '</li>' + 
        '<form action="." class="the-choices"></form></div>';
    });
};

var choicesHTML = document.getElementsByClassName("the-choices");

function appendChoices(){
    for(var i=0; i < choicesHTML.length; i++){
        for (var j=0; j < questionList[i].choices.length; j++){
            choicesHTML[i].innerHTML += '<div class="choices"><input name="choices" type="radio">' + questionList[i].choices[j] + '</div>';
        }
    }
};


window.onload = function(){
    writeInstructions();
    makeQuestions();
    appendChoices();
};