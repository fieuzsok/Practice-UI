/**
 * Quản lý nhân viên
 * Chức năng:
 * 1. Thêm Nhân Viên
 * 2. Hiển thị DS nhân viên
 * 3. Xóa Nhân Viên
 * 4. Cập nhật thông tin NV
 * 5. Tìm kiếm theo Mã nhân viên, tên nhân viên
 * 6. Validate
 */

//const employees = [];
var employees = new EmployeeList();
var validation = new Validation();
//getLocalStorage();

if (employees.arr) {
  renderEmpl();
}

const addEmployee = function () {
  var lastName = document.getElementById("ho").value;
  var firstName = document.getElementById("ten").value;
  var id = document.getElementById("msnv").value;
  var startedDate = document.getElementById("datepicker").value;
  var position = document.getElementById("chucvu").value;
  var employee = new Employee(firstName, lastName, id, startedDate, position);

  var isValid = validateField(employee);
  if (!isValid) {
    return;
  }

  if (!validation.isExistedEmployee(employees, employee)) {
    alert("Employee was existed!!!!!!");
  } else {
    //employees.addEmployee(employee);
    saveEmpl(employee);

    console.log(employee);
    console.log(employees);
  }
};

function saveEmpl(employee) {
  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees",
    method: "POST",
    data: employee,
  })
    .then((res) => {
      fetchEmpls();
    })
    .catch((e) => {
      console.log(e);
    });
}

const findById = function (ID) {
  var arr = employees.arr;
  for (i = 0; i < arr.length; i++) {
    var e = arr[i];
    if (e.ID === ID) {
      return e.ID;
    }
  }
};

function validateField(employee) {
  var lastName = document.getElementById("ho").value;
  var firstName = document.getElementById("ten").value;
  var ID = document.getElementById("msnv").value;
  var startedDate = document.getElementById("datepicker").value;
  var position = document.getElementById("chucvu").value;
  var isValid = true;
  isValid &= validation.checkIsEmpty(
    lastName,
    "Vui lòng điền họ.",
    "sp-lastName"
  );
  isValid &= validation.checkIsEmpty(
    firstName,
    "Vui lòng điền tên.",
    "sp-firstName"
  );
  isValid &=
    validation.checkIsEmpty(ID, "Vui lòng điền Mã nhân viên.", "sp-emplId") &&
    validation.checkLength(ID, "Độ dài ký tự từ 3-10.", "sp-emplId", 3, 10) &&
    validation.checkNumber(ID, "Vui lòng nhập số.", "sp-emplId") &&
    validation.isExistedEmployee(
      employees,
      employee,
      "Vui lòng nhập số.",
      "sp-emplId"
    );
  isValid &= validation.checkIsEmpty(
    startedDate,
    "Vui lòng điền Ngày vào làm.",
    "sp-dateIn"
  );
  isValid &=
    validation.checkIsEmpty(position, "Vui lòng chọn chức vụ.", "sp-role") &&
    validation.checkPosition("chucvu", "Vui lòng chọn chức vụ.", "sp-role");

  return isValid;
}

function renderEmpl(employeeList = employees.arr) {
  var htmlContent = "";

  employeeList.forEach((e, index) => {
    //template string
    console.log(e.ID);
    htmlContent += `
	 <tr>
	  <td>${index + 1}</td>
	  <td>${e.lastName} ${e.firstName}</td>
	  <td>${e.id}</td>
	  <td>${e.position}</td>
	  <td>${e.startedDate}</td>
    <td>${e.salary}</td>
    <td><button class="btn btn-info" onclick="edit('${e.id}')">EDIT</button>
    <button class="btn btn-danger" onclick="deleteEmpl('${
      e.id
    }')">DELETE</button>
    <button class="btn btn-info" onclick="viewImpl('${
      e.id
    }')">VIEW</button></td>
	   <tr>
	  `;
  });
  document.getElementById("employeesList").innerHTML = htmlContent;
  //setLocalStorage();
}

function edit(id) {
  console.log(typeof id);
  var currentEmpl = employees.getEmployeeByID(id);

  setValue("ho", currentEmpl.lastName);
  setValue("ten", currentEmpl.firstName);
  setValue("msnv", currentEmpl.id);
  setValue("datepicker", currentEmpl.startedDate);
  setValue("chucvu", currentEmpl.position);
  getElm("update").style.display = "block";
  getElm("cancel").style.display = "block";
  getElm("add").style.display = "none";
  getElm("msnv").setAttribute("disabled", true);

  console.log(id);
}

function huy() {
  getElm("update").style.display = "none";
  getElm("cancel").style.display = "none";
  getElm("add").style.display = "block";
  getElm("msnv").removeAttribute("disabled");
  //reset input
  getElm("form-nv").reset();
}

function updateEmpl(id) {
  var lastName = document.getElementById("ho").value;
  var firstName = document.getElementById("ten").value;
  var id = document.getElementById("msnv").value;
  var startedDate = document.getElementById("datepicker").value;
  var position = document.getElementById("chucvu").value;
  var employee = new Employee(firstName, lastName, id, startedDate, position);
  // employees.updateE(employee);
  // renderEmpl();

  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees/" + id,
    method: "PUT",
    data: employee,
  })
    .then((res) => {
      console.log(res);
      fetchEmpls();
    })
    .catch((e) => {
      console.log(e);
    });
}

function deleteEmpl(emplId) {
  // employees.deleteEmpl(emplId);
  //renderEmpl();
  //setLocalStorage();

  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees/" + emplId,
    method: "DELETE",
  })
    .then((res) => {
      console.log(res);
      fetchEmpls();
    })
    .catch((e) => {
      console.log(e);
    });
}

function getElm(idStr) {
  return document.getElementById(idStr);
}

function setValue(idStr, content) {
  return (document.getElementById(idStr).value = content);
}

// function setLocalStorage() {
//   //lưu xuông local storage phải chuyển value thành chuỗi JSON
//   localStorage.setItem("key", JSON.stringify(employees.arr));
// }

// function getLocalStorage() {
//   employees.arr = JSON.parse(localStorage.getItem("key"));
// }

getElm("search-e").addEventListener("keyup", () => {
  var keyword = getElm("search-e").value;
  var newEmplSearchList = employees.searchE(keyword);
  renderEmpl(newEmplSearchList);
  console.log(newEmplSearchList);
});

// Function to get Employees list from DB
const fetchEmpls = function () {
  const resolver = function (res) {
    employees.arr = res.data;
    renderEmpl();
  };
  const rejecter = function (res) {
    console.log(res);
  };
  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees",
    method: "GET",
  })
    .then(resolver)
    .catch(rejecter);
};

fetchEmpls();

function viewImpl(id) {
  window.location.assign("detail.html?id=" + id);
}
