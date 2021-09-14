const quizData = [
    {
        question:
            "Qual o nome da música que toca na primeira oppenning de Naruto?",
        a: "Blue Bird",
        b: "Sei la",
        c: "Não lembro",
        d: "Tanto faz",
        correct: "a",
    },
    {
        question:
            "Qual o nome da música que toca na primeira oppenning de Bleach?",
        a: "Blue Bird",
        b: "Sei la",
        c: "Não lembro",
        d: "Tanto faz",
        correct: "c",
    },
    {
        question:
            "Qual o nome da música que toca na primeira oppenning de One Piece?",
        a: "Blue Bird",
        b: "We Are",
        c: "Não lembro",
        d: "Tanto faz",
        correct: "b",
    },
    {
        question:
            "Qual o nome da música que toca na décima oppenning de Naruto?",
        a: "Blue Bird",
        b: "Sei la",
        c: "Fighting Dreamer",
        d: "Tanto faz",
        correct: "c",
    },
    {
        question:
            "Qual o nome da música que toca na primeira oppenning de Boku no Hero?",
        a: "Blue Bird",
        b: "Sei la",
        c: "Não lembro",
        d: "Tanto faz",
        correct: "d",
    },
];

const question = document.querySelector('.question');
const answerA = document.querySelector('.answerA');
const answerB = document.querySelector('.answerB');
const answerC = document.querySelector('.answerC');
const answerD = document.querySelector('.answerD');


let currentQuestion = 0;

function quizApp () {
    const questionData = quizData[currentQuestion];

    question.innerText = questionData.question;
    answerA.innerText = questionData.a;
    answerB.innerText = questionData.b;
    answerC.innerText = questionData.c;
    answerD.innerText = questionData.d;
    


    currentQuestion++;
};


function quizResult () {
    
}


addEventListener('click', quizApp);



quizApp();

