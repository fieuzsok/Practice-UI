const cho1 = {
  id: 1,
  ten: "Lulu",
  canNang: 20,
  chieuCao: 50,
  gioiTinh: "Duc",
  chichNgua: false,
  sua: function () {
    console.log("gau gau");
    return this.ten;
  },
};

const cho2 = {
  id: 2,
  ten: "Kiki",
  canNang: 15,
  chieuCao: 30,
  gioiTinh: "CAi",
  chichNgua: false,
  sua: function () {
    console.log("gru gru gau gau");
    return "gru gru gau gau";
  },
};

const trungTam = {
  ten: "Cyber",
  diaChi: "23/3",
  giaDocs: [
    { id: 1, ten: "Lê Thị Lộ, tuoi: 21" },
    { id: 2, ten: "Lý Văn Lu, tuoi: 28" },
  ],
  choList: [cho1, cho2],
};

console.log(cho1["ten"], cho1.canNang);
cho1["sua"]();
cho1.sua();

console.log(cho1.ten.canNang);

cho1.ten = "meo meo";
delete cho1.canNang;
console.log(cho1.ten);
console.log(cho1);
