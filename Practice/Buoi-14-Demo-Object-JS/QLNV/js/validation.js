function Validation() {
  this.checkIsEmpty = (obj, msg, spanId) => {
    if (obj.trim() === "") {
      getElm(spanId).innerHTML = msg;
      return false;
    } else {
      getElm(spanId).innerHTML = "";
      return true;
    }
  };

  //chi dc nhap từ 4-10 ký tụ
  this.checkLength = (obj, msg, spanId, start, end) => {
    if (obj.length >= start && obj.length <= end) {
      getElm(spanId).innerHTML = "";
      return true;
    } else {
      getElm(spanId).innerHTML = msg;
      return false;
    }
  };

  this.checkNumber = (obj, msg, spanId) => {
    var regexNum = /^[0-9]+$/;
    if (obj.match(regexNum)) {
      getElm(spanId).innerHTML = "";
      return true;
    } else {
      getElm(spanId).innerHTML = msg;
      return false;
    }
  };

  this.checkPosition = (id, msg, spanId) => {
    var positionArr = getElm(id);
    if (positionArr.selectedIndex === 0) {
      getElm(spanId).innerHTML = msg;
      return false;
    } else {
      getElm(spanId).innerHTML = "";
      return true;
    }
  };

  this.isExistedEmployee = (employeeList, empl, msg, spanId) => {
    var isValid = true;
    if (employeeList && employeeList.arr) {
      employeeList.arr.forEach((element) => {
        if (element.ID === empl.ID) {
          isValid = false;
        }
      });
    }

    return isValid;
  };
}
