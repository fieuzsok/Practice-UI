var nguoiDungService = new NguoiDungService();
layDSNguoiDung();

function renderTable(arr = nguoiDungService.arr) {
  var htmlContent = ``;
  arr.forEach((e, index) => {
    htmlContent += `
    <tr>
        <td> ${index} </td>
        <td> ${e.taiKhoan} </td>
        <td> ${e.matKhau} </td>
        <td> ${e.hoTen} </td>
        <td> ${e.email} </td>
        <td> ${e.soDT} </td>
        <td> ${e.maLoaiNguoiDung} </td>
    </tr>
    `;
  });
  getElm("tblDanhSachNguoiDung").innerHTML = htmlContent;
}
function layDSNguoiDung() {
  nguoiDungService
    .getListUser()
    .then((result) => {
      console.log(result.data);
      nguoiDungService.arr = result.data;
      renderTable();
    })
    .catch((e) => {
      console.log(e);
    });
}

function getElm(idStr) {
  return document.getElementById(idStr);
}
