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

const employees = [];

const addEmployee = function () {
  var lastName = document.getElementById("ho").value;
  var firstName = document.getElementById("ten").value;
  var ID = document.getElementById("msnv").value;
  var startedDate = document.getElementById("datepicker").value;
  var position = document.getElementById("chucvu").value;
  var employee = new Employee(firstName, lastName, ID, startedDate, position);

  if (findById(ID)) {
    alert("Employee was existed!!!!!!");
  } else {
    employees.push(employee);
    renderEmpl();
    console.log(employee);
    console.log(employees);
  }
};

const showAllEmployees = function () {};

const findById = function (ID) {
  for (i = 0; i < employees.length; i++) {
    var e = employees[i];
    if (e.ID === ID) {
      return e.ID;
    }
  }
};

const renderEmpl = function () {
  var htmlContent = "";

  employees.forEach((e, index) => {
    //template string
    htmlContent += `
	 <tr>
	  <td>${index + 1}</td>
	  <td>${e.lastName} ${e.firstName}</td>
	  <td>${e.ID}</td>
	  <td>${e.position}</td>
	  <td>${e.startedDate}</td>
	  <td>${e.salary}</td>
	   <tr>
	  `;
  });
  document.getElementById("employeesList").innerHTML = htmlContent;
};
