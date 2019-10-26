$(function() {
  console.log("js is twerking");
  pageLoad();
  questionModal();
  profileModal();
});

/*  jc - I follow a style rule where I 
    define functions above other functions
    that call the first function. This is a
    coding convention from C, but it allows
    developers to understand functions before
    they see it called in the wild. This isn't
    a necessary convention, but it is a good
    one to consider using.
*/
function questionModal () {
    $("a#questions").on("click", function(event) {
      $("#myModal").modal("show");
  })
}

function profileModal () {
    $("a#profile").on("click", function(event) {
      $("#myModal").modal("show");
    })
}

function showMore () {
  if (user) {
    $("a#questions").show;
  }
}

function renderQuestions (questions) {
  /* jc - thank you for using underscore :) */
  template = _.template($("#question-template").html());
  template2 = _.template($("#answer-template").html());

  questions.forEach(function(question) {
    var questionHTML = template(question);
    $("#question-ul").append(questionHTML);

    question.answers.forEach(function(answer){
      console.log(answer)
      var answerHTML = template2(answer);
      var questionSelector = "#foo" + question._id
      console.log(questionSelector)
      $(questionSelector).append(answerHTML);
    });
  });
}

function getQuestions () {
  $.get("/questions.json", function(res){
    renderQuestions(res);
  });
}

function pageLoad () {
  getQuestions();
  $("#new-question-form").on("submit", function(event){
    event.preventDefault();
    var question = {question: $("#question-input").val()}
    /* jc - thank you for using AJAX */
    $.post("/questions", question)
      .done(function(res){
        $("question-ul").empty();
        getQuestions();
        $("#new-question-form")[0].reset();
        });
    });
}

function postAnswers (event){
  event.preventDefault();
  event.stopPropagation();
  console.log(event);
  console.log(event.target);
  var answer = {answer: $("#answer-input").val(), questionID: event.target.classList[0]};
      /*  jc - thank you for using AJAX :)
          TODO: fix the answer location tracking.
          All answers currently posting to top question,
          essentially crippling core app functionality
      */
      $.post("/questions/answers", answer)
      .done(function(res){
        getQuestions();
      });
}

/* jc - unused */
/* TODO: integrate this into your codebase */
function deleteQuestion (content) {
  var id = $(content).data()._id;
  /* jc - thank you for using AJAX :) */
  $.ajax({
    url: "/questions/" + id,
    type: "DELETE",
    success: function(res) {
      getQuestions();
      alert("Question deleted!");
    }
  });
}

function comment () {
  $("#formHidden").toggle("fast")
}
