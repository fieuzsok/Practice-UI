/**
 * Bài tập quản lý SV
 * Features
 * 1.Lay danh sanh diem tu giao dien bỏ vào bảng điểm:
 * 2.Tinh diem TB toan bo sinh vien
 * 3.Tim diem cao nhat, nhì
 * 5.Đếm SV co điểm TB dưới 5
 * 6. Sắp xếp tăng dần
 *
 */

var scoreArr = [];

//Get score array from UI
const scoreArray = () => {
  var target = document.getElementsByClassName("td-grade");
  for (i = 0; i < target.length; i++) {
    var score = Number(target[i].innerHTML);
    scoreArr.push(score);
  }
  return scoreArr;
};

//Get avg
const calcAvg = (scoreArr) => {
  var sum = 0;
  scoreArr.forEach((score) => {
    sum += score;
  });
  return sum / scoreArr.length;
};

//count number of stu have score less than 5
const getCount = () => {
  var count = 0;
  scoreArr.forEach((score) => {
    if (score < 5) count++;
  });
  return count;
};
const getMaxScore = () => {
  var max = scoreArr[0];
  var second = scoreArr[1];
  for (i = 1; i < scoreArr.length; i++) {
    if (scoreArr[i] > max) {
      second = max;
      max = scoreArr[i];
    } else if (scoreArr[i] > second && scoreArr[i] !== max) {
      second = scoreArr[i];
    }
  }
  return [max, second];
};

const sortA = () => {
  var isSwap = false;
  do {
    isSwap = false;

    for (i = 0; i < scoreArr.length; i++) {
      if (scoreArr[i] > scoreArr[i + 1]) {
        var tmp = scoreArr[i];
        scoreArr[i] = scoreArr[i + 1];
        scoreArr[i + 1] = tmp;
        isSwap = true;
      }
    }
  } while (isSwap);
  return scoreArr;
};

console.log(scoreArray());
console.log(calcAvg(scoreArr));
var avg = calcAvg(scoreArr);
console.log(Math.floor(avg)); // làm tròn xuống
console.log(Math.ceil(avg)); // làm tròn lên
console.log(Math.round(avg)); // làm tròn truncate
console.log(avg.toFixed(2)); // làm tròn số chữ số thập phân
console.log("Dem so sinh vien co diem duoi 5: ", getCount());
console.log("top 2: ", getMaxScore());
console.log(sortA());

//get Top2 max score
x = 2;
console.log(x);
var x;
console.log(x);
