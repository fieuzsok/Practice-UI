//FOR

const chart = ["a", "b", "c"];

//for of: get element
for (let element of chart) {
  console.log(element); // a b c
}

//for in: get index
for (let index in chart) {
  console.log(index); //0 1 2
}

//arrow
//Ngắn gọn hơn
//problem: thêm cặp ngoặc tròn nếu muốn trả về object {}
//KHONG làm Thay đổi context  this
//=> dùng this trong arrow func sẽ Khong thay đổi ngữ cảh như bên ngoài scope
const showObj = () => ({
  name: "Hieu",
});
console.log(showObj());

//function thường
//làm Thay đổi context  this
