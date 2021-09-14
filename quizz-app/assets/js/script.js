// BD de perguntas
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

// DOM
const question = document.querySelector(".question");
const answerA = document.querySelector(".answerA");
const answerB = document.querySelector(".answerB");
const answerC = document.querySelector(".answerC");
const answerD = document.querySelector(".answerD");
const button = document.querySelector(".button");
const checked = document.querySelectorAll(".answer");
const quiz = document.querySelector(".perguntas");

// Variáveis
let score = 0;
let currentQuestion = 0;

// Jogando as perguntas no HTML
function quizApp() {
    deselectAnswer();

    const questionData = quizData[currentQuestion];

    question.innerText = questionData.question;
    answerA.innerText = questionData.a;
    answerB.innerText = questionData.b;
    answerC.innerText = questionData.c;
    answerD.innerText = questionData.d;
}

//Selecionar resposta do questionário
function selectedAnswer() {
    let answer = undefined;

    checked.forEach((answerEl) => {
        if (answerEl.checked) answer = answerEl.id;
    });

    return answer;
}

// Limpar seleção de resposta
function deselectAnswer() {
    checked.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// Lógica do Quiz
function quizResult() {

    console.log("Done");

    quiz.innerHTML = `<h2 style="text-align: center; margin-top: 100px;">O número de acertos foi:</h2><h1 style="text-align: center"> ${score}/${quizData.length}</h1>`;

    button.innerHTML = `<h3 onclick="location.reload()">Tentar novamente</h3>`;
}

// Funcionalidade do botão Enviar
button.addEventListener("click", () => {
    const answer = selectedAnswer();

    if (answer === quizData[currentQuestion].correct) score++;
    currentQuestion++;

    console.log(score);

    currentQuestion < quizData.length ? quizApp() : quizResult();
});

quizApp();
