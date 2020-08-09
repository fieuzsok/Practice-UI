//extend question
class MultipleChoices extends Questions {
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
            <div>
                <input type="radio"/>
                <label >${answer.content}</label>
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
  checkExact() {}
}

const multipleChoices = new MultipleChoices(1, 1, "What is this?", [
  { content: "Asnwer1" },
  { content: "Asnwer1" },
]);

console.log(multipleChoices);
console.log(multipleChoices.render());
