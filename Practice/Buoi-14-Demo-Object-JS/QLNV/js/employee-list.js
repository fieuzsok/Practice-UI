//prototype
function EmployeeList() {
  this.arr = [];
  this.addEmployee = (employee) => {
    this.arr.push(employee);
  };

  this.findIndexById = function (ID) {
    var emplList = this.arr;
    var index = -1;
    for (i = 0; i < emplList.length; i++) {
      var e = emplList[i];
      index++;
      if (e.ID === ID) {
        return index;
      }
    }
    return -1;

    // return emplList.findIndex((e) => {
    //   console.log(typeof e.ID, e.ID, emplId);
    //   return e.ID == emplId;
    // });
  };

  this.deleteEmpl = (empId) => {
    console.log(empId);
    var index = this.findIndexById(empId);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  this.getEmployeeByID = (id) => {
    return this.arr.find((e) => {
      return e.ID === id;
    });
  };

  this.updateImpl = (empId) => {};

  this.searchE = function (keyWord) {
    var searchArr = [];
    // this.arr.forEach((element) => {
    //   if (element.lastName.toLowerCase().indexOf(keyWord.toLowerCase()) != -1) {
    //     searchArr.push(element);
    //   }
    // });
    // return searchArr;

    return this.arr.filter((element) => {
      return (
        element.lastName.toLowerCase().indexOf(keyWord.toLowerCase()) != -1
      );
    });
  };
}

EmployeeList.prototype.updateE = function (employ) {
  var index = this.findIndexById(employ.ID);
  if (index != -1) {
    this.arr[index] = employ;
  }
};
