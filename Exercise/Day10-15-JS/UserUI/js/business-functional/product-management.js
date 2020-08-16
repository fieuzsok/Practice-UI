// Sorts an array of objects "in place". (Meaning that the original array will be modified and nothing gets returned.)
const sortOn = (arr, prop) => {
  arr.sort(function (a, b) {
    if (a[prop] < b[prop]) {
      return -1;
    } else if (a[prop] > b[prop]) {
      return 1;
    } else {
      return 0;
    }
  });
};
