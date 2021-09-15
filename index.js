var readlineSync = require("readline-sync")
// var userAnswer = readlineSync.question("What?")
var userName = readlineSync.question("What's your name?")
console.log("------------------")
console.log("Welcome " + userName + "! to the END GAME")
console.log("------------------")

var questions = [
  {
    question: "Who is my favorite superhero?",
    answer: "Iron Man",
},
  {
    question: "In which movie Tony Start died?",
    answer: "Infinity war"
},
  {
    question: "What number did Tony Stark said in his last breath?",
    answer: "3000",
}
]
var score = 0

var highScores = [
  {
    name: "Saad",
    score: 3
  },
  {
    name: "Jojo",
    score: 2
  }
]

function quiz(question, answer){
  var userAnswer = readlineSync.question(question)
  console.log("You've entered: " + userAnswer)
  // console.log(answer)

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Yay! you got the answer right.")
    score = score + 1;
  } else {
    console.log("Oops! You're wrong.")
  }
  console.log("Current Score is: " + score)
  console.log("------------------")
}

// quiz(questions.questionOne.question, questions.questionOne.answer)
// quiz(questions.questionTwo.question, questions.questionTwo.answer)
// quiz(questions.questionThree.question, questions.questionThree.answer)

for( var i = 0; i < questions.length; i++) {
  quiz(questions[i].question, questions[i].answer)
}

console.log("You've scored: " + score)
console.log("--- High scores Board ----")
for(var i = 0; i < highScores.length; i++ ){
  var currentHighscorePerson = highScores[i]
  console.log(currentHighscorePerson.name + "   " + currentHighscorePerson.score)
}
