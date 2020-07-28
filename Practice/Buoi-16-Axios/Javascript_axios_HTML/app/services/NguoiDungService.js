function NguoiDungService() {
  this.arr = [];
  this.getListUser = function () {
    return axios({
      url: "https://5f1d4ba439d95a0016953dea.mockapi.io/api/NguoiDung",
      method: "GET",
    });
  };

  console.log(this.arr);
}
