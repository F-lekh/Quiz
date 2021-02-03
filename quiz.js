const quizData = [
    {
        question: 'How much hours do you coding at day?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: "d",
    }, {
        question: 'What is the most difficult part of programming?',
        a: 'HTML',
        b: 'CSS',
        c: 'JS',
        d: 'All of them',
        correct: "c",
    }, {
        question: 'Which  of the presidents was elected twice?',
        a: 'Barak Obama',
        b: 'Grover Clivlend',
        c: 'George Washington',
        d: 'Teodore Roosevelt',
        correct: "b",
    }, {
        question: 'What does HTML stand for?',
        a: 'Cascading Style Sheet',
        b: 'Somethink else',
        c: 'Fell the dark side',
        d: 'Hypertext Markup Language',
        correct: "d",
    }, {
        question: 'What year was invented 1st computer?',
        a: '1938',
        b: '1974',
        c: '1944',
        d: '1980',
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {   
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});