const que = [
  {
    question: "Which is the largest animal in the world??",
    option1: "Blue whale",
    option2: "Elephant",
    option3: "Shark",
    option4: "Rhino",
    correct: "Blue whale",
  },
  {
    question: "What is the average power consuption of heartbit of an adult??",
    option1: " 1 watt",
    option2: " 1.2 watt",
    option3: "2 watt",
    option4: " 5 watt",
    correct: "1.2 watt",
  },
  {
    question: "what is capital of Nepal??",
    option1: "Beijing",
    option2: "London",
    option3: "Taiwan",
    option4: "None",
    correct: "None",
  },
  {
    question: "Which of the following is most reactive ??",
    option1: "Flourine",
    option2: "Cholrine",
    option3: "Bromine",
    option4: "Iodine",
    correct: "Flourine",
  },
  {
    question: "How many days in a leap year?",
    option1: 400,
    option2: 365,
    option3: 356,
    option4: 366,
    correct: 366,
  },
  {
    question: "Which animal is known as ship of desert?",
    option1: "Sheep",
    option2: "Camel",
    option3: "Owl",
    option4: "Squarrel",
    correct: "Camel",
  },
  {
    question: "Which is tallest animal??",
    option1: "Rhino",
    option2: "Elephant",
    option3: "Kangaroo",
    option4: "Giraffe",
    correct: "Giraffe",
  },
];
// console.log(qns[0].option1);
// const math = Math.floor(Math.random() * 7);
// console.log(que[math]);
const question = document.querySelector("#question");
const next = document.querySelector("#next");
const rr1 = document.querySelector("#rr1");
const rr2 = document.querySelector("#rr2");
const rr3 = document.querySelector("#rr3");
const rr4 = document.querySelector("#rr4");
const input = document.querySelectorAll(".input");
var index = 0;
var sc=0;
const score=document.getElementById("score");
const loadQuestion = () => {
  question.innerHTML = que[index].question;
  rr1.innerHTML = que[index].option1;
  rr2.innerHTML = que[index].option2;
  rr3.innerHTML = que[index].option3;
  rr4.innerHTML = que[index].option4;
};
loadQuestion();
input.forEach(function (a) {
  a.addEventListener("click", () => {
    console.log(a.nextElementSibling.textContent);
    if (a.nextElementSibling.textContent == que[index].correct) {
      console.log("correct");
      sc=sc+1;
  
    } else {
      console.log("wrong");
      sc=sc+0
    }
    
  });
});
next.addEventListener("click", () => {

  score.innerHTML=sc;
  if(index<=5){
    index = index + 1;
    loadQuestion();
  }
  else{
    index=0;
    loadQuestion();
  }
});
