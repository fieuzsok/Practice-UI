//extend question
class FillBlank extends Questions {
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
          <span>Câu trả lời: </span><input class="form-control w-50" type="text" />
      </div>
      `;
  }
  checkExact() {}
}

const fill = new FillBlank(1, 1, "What is this?", [
  { content: "Asnwer1" },
  { content: "Asnwer1" },
]);

console.log(fill);
console.log(fill.render());
