//init prototype
const Employee = function (firstName, lastName, ID, startedDate, position) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.ID = ID;
  this.startedDate = startedDate;
  this.position = position;
  this.calcSalary = function () {};
};
