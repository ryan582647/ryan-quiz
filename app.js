$(function() {

  console.log("code running");

  let quiz = {
    name: "Food",
    questions: [
      {
        text: "What ingredient does not go in Mac and Cheese?",
        answers: ["Macaroni", "Pickles", "Cheese"],
        correct: 1
      },
      {
        text: "Which of these is a fruit?",
        answers: ["Eggplant", "Pickles", "Cherry"],
        correct: 2        
      },
      {
        text: "Which of these is a berry?",
        answers: ["Banana", "Peach", "Raspberry"],
        correct: 2        
      }
    ]
  }

  let count = 0;
  let score = 0;

  function showQuestion(count) {
    $("#question").empty();
    let question = `<h3> ${quiz.questions[count].text}`;
    $("#question").append(question);

    let answers = "<form>";
    for (let i=0; i<quiz.questions[count].answers.length; i++) {
      answers += `<input type="radio" name="answer" value="${i}"> ${quiz.questions[count].answers[i]}<br>`
    }
    answers += "<input type='submit'></form>";
    $("#question").append(answers);
  }

  showQuestion(count);

})