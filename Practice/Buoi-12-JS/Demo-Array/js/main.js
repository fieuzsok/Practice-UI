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

//check Sum
const checkSum = (arr) => {
  for (i = 0; i < arr.length; i++) {
    for (k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === 0) {
        return true;
      }
    }
  }
  return false;
};

console.log("Is Sum equal = 0:", checkSum([1, 1, 5, 23, 65, -23, 6]));

//with a sorted array
const checkSumWithSortedArr = (sortedArr) => {
  var i = 0;
  var k = sortedArr.length - 1;
  while (i !== k) {
    var sum = sortedArr[i] + sortedArr[k];
    if (sum === 0) return true;
    if (sum > 0) k--;
    else i++;
  }
  return false;
};

console.log(checkSumWithSortedArr([-8, -5, 0, 5, 9]));
