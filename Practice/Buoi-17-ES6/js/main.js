/**
 * Project: Tesing web
 * Feature:
 *  1. Get Questions list from API
 *  2. Render Questions
 *  2. Calc Score base on answers
 */

let questionList = [];
const fetchQuestion = () => {
  axios({
    url: "../DeThiTracNghiem.json",
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      mapData(res.data);
      renderQuestionList();
    })
    .catch((e) => {});
};

const mapData = (resData) => {
  questionList = resData.map((element) => {
    switch (element.questionType) {
      case 1:
        var question = new MultipleChoices(
          element.questionType,
          element._id,
          element.content,
          element.answers
        );
        break;
      case 2:
        var question = new FillBlank(
          element.questionType,
          element._id,
          element.content,
          element.answers
        );
        break;
    }
    return question;
  });
};

const renderQuestionList = () => {
  if (questionList) {
    var HTMLCOntent = "";
    questionList.forEach((element) => {
      HTMLCOntent += element.render();
    });
    document.getElementById("question-section").innerHTML = HTMLCOntent;
  }
};

fetchQuestion();

//arrow funct
document.getElementById("btn-submit").addEventListener("click", () => {
  console.log("This", this);
});
