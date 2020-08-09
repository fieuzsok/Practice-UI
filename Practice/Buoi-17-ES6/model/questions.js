/**
 * prototype ES5
function Question(questionType, _id, content) {
  this.questionType = questionType;
  this._id = _id;
  this.content = content;
} 
 */

//ES6
class Questions {
  constructor(questionType, _id, content, answers) {
    this.questionType = questionType;
    this._id = _id;
    this.content = content;
    this.answers = answers;
  }

  render() {}
  checkExact() {}
}
