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
