import { Questions } from "./questions.js";
//extend question
//import question đúng tên class
export class MultipleChoices extends Questions {
  constructor(questionType, _id, content, answers) {
    //truyền vào super đầy đủ  những tham số mà lớp cha có
    super(questionType, _id, content, answers);
  }
  /**
   * @params {type} nameOfParam1
   * @params {type} nameOfParam2
   * @returns {String} - HtmlContent
   */
  render() {
    //render html answers
    var htmlAnserContent = "";
    this.answers.map((answer) => {
      htmlAnserContent += `
            <div class="radio">
            <label><input type="radio" name="answer-${this._id}" value="${answer._id}"/> ${answer.content}</label>               
            </div>
        `;
    });

    return `
    <div>
        <p>Câu ${this._id}: ${this.content}?</p>
        ${htmlAnserContent}
    </div>
    `;
  }
  checkExact() {
    var radio = document.getElementsByName(`answer-${this._id}`);
    var selectedValue = "";
    let ansId;
    var label = false;
    radio.forEach((selectedRadio) => {
      if (selectedRadio.checked) {
        ansId = selectedRadio.value;
      }
    });
    if (!ansId) return;
    else {
      this.answers.forEach((a) => {
        if (a._id == ansId && a.exact) {
          label = true;
        }
      });
    }
    return label;
  }
}

const multipleChoices = new MultipleChoices(1, 1, "What is this?", [
  { content: "Asnwer1" },
  { content: "Asnwer1" },
]);

console.log(multipleChoices);
console.log(multipleChoices.render());
console.log("Radio", multipleChoices.checkExact());
