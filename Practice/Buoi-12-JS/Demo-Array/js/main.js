var arr = [1, 5, "5"];
arr.push("a");
arr.unshift("add start");
arr.shift(); //remove first element in arr
arr.pop(); //remove last element in arr
arr.splice(2, 1); // remover number of elements by index

//console.log(arr);

//Exercise
//1. Kiem tra so nguyen to
const checkPrime = function (n) {
  for (var i = 2; i < n / 2; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(checkPrime(29));

//2. cleck so le
const checkOdd = function (arr) {
  var newArr = [];
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 != 0) newArr.push(arr[i]);
  }
  if (newArr.length === 0) console.log("Khong co so le");
  return newArr;
};

console.log(checkOdd([10, 5, 6, 8, 4, 15, 11, 163]));
console.log(checkOdd([]));
