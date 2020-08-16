import { Questions } from "./questions.js";
//extend question
export class FillBlank extends Questions {
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

    return `
      <div>
          <p>Câu ${this._id}: ${this.content}?</p>
          <span>Câu trả lời: </span><input class="form-control w-50" type="text" id="${this._id}"/>
      </div>
      `;
  }
  checkExact() {
    var answText = document.getElementById(`${this._id}`).value;
    if (this.answers[0].content == answText) {
      return true;
    }
    return false;
  }
}
