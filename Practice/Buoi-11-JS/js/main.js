console.log("main");
var age = "8";
console.log(Number(age) + 1);

if (age == 8) {
  //so sanh gia tri, ignore kieu du lieu
  console.log(age);
}
// === so sanh kieu du lieu va gia tr

//------------FUNCTION-----------------

//2 cach khoi tao function
//1.declareation funct
function nameOfFunction(a, b) {
  console.log(a + b);
}
nameOfFunction();

//2.expression fuction
//annonymous func
const nameOfFunction2 = function (a, b) {
  return a + b;
};

console.log(nameOfFunction2(1, 2));

//---------Operator-------
var intA = "4";
var intB = 5;
console.log(intA + intB); //String
console.log(intA - intB); //Number
console.log(intA * intB); //Number
console.log(intA / intB);
console.log(intA % intB);

//-------------Exercise-----------
const calcAvg = function (math, physic, chemistry) {
  return (math + physic + chemistry) / 3;
};
const getRank = function (avgScore) {
  if (avgScore) {
    if (avgScore < 5) {
      return "Yeu";
    }
    if (avgScore >= 5 && avgScore < 6) {
      return "Trung binh";
    }
    if (avgScore >= 6 && avgScore < 7) {
      return "TB Khá";
    }
    if (avgScore >= 7 && avgScore < 8) {
      return "Khá";
    }
    if (avgScore >= 8 && avgScore < 9) {
      return "Gioi";
    }
    return "Xuat Sắc";
  }
};

const main = function () {
  //conver string to number
  //1.parseFloat, parseInt
  //2.nhan 1
  //3. plus +param
  var math = Number(document.getElementById("txtMath").value);
  var ly = Number(document.getElementById("txtPhysic").value);
  var hoa = Number(document.getElementById("txtChemistry").value);

  console.log(typeof math);
  var avg = calcAvg(math, ly, hoa);
  console.log("Average: ", avg);
  console.log("Rank:", getRank(avg));
};

main();
