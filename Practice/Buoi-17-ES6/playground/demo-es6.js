//Let Var Const

//ES5
var num = 1;

//ES6 const let
const num1 = 2;
let num2 = 3;
//Block
{
  let let1 = 1;
  var var1 = 2;
}
//console.log(let1); //error et1 is not defined
console.log(var1);

//----------------------

//console.log(hoisting); //Cannot access 'hoisting' before initialization, Let không hỗ trợ hoisting
let hoisting = 1;

console.log(hoistingVar); //Undefined
var hoistingVar = 1;

//Question:
/**
 * Let Var khác nhau gì?
 * Let không cho phép khai báo biến trùng tên trong cùng 1 scope
 * scope sử dụng Let hẹp hơn var. (Let chỉ sd trong cùng block)
 * Let không hỗ trợ hoisting
 *
 */

//Default Value
var defaultValue = 2;
const calcSum = (a, b = defaultValue) => a + b;
console.log("calsSum-ES6-defaultValue", calcSum(1));

//Spread Operator

let stu = { name: "Thao", age: 12 };
//ES5
let stu2 = Object.assign({}, stu);
//ES6 Spread
let stu3 = { ...stu, email: "lxthao.it@gmail.com", age: 13 }; //Copy toàn bộ stu bỏ vào stu3 - > stu3 thay đổi sẽ ko làm stu thay đổi
stu2.name = "Dung";
console.log("Spread-ES6-student1", stu);
console.log("Spread-ES6-student3", stu3);

//====Spread with array
var arr1 = [1, 2, 3];
//spread ES6 arr
var arr2 = [...arr1, 9]; // 2 mảng tách biệt hoàn toàn, push thêm 6 vào arr2
arr2.push(5);
console.log("Spread-arr1", arr1);
console.log("Spread-arr2", arr2);

var arr3 = [4, 5, 6];
//Nối nhiều object/arr
var arr4 = [...arr3, ...arr2];
console.log("============Nối nhiều object/arr");
console.log("Spread-arr4", arr4);

//==============Spread Paramete
//Gom tham số thành array
console.log("============Gom tham số thành array");
const calcSumArr = (...arr) => {
  var sum = 0;
  arr.forEach((e) => {
    sum += e;
  });
  console.log("Sum-arr-spread", sum);
};
calcSumArr(1, 2, 3, 4, 5);
/**
 *
 */

console.log("===================Object Literal");

let keyName = "Name";
let studentLiteral = { [keyName]: "Thao" };
console.log(studentLiteral);

console.log("===========Map");
//Số lượng phần tử đầu vào và đầu ra phải giống nhau
let arrMap = [1, 2, 3, 4, 5];
let arrAfterMap = arrMap.map((e) => {
  return e + 1;
});
arrAfterMap.push(7);
console.log(arrAfterMap);
console.log(arrMap);

//
var arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrAfterFilter = arrFilter.filter((e) => e % 2 == 1);
console.log(arrAfterFilter);
