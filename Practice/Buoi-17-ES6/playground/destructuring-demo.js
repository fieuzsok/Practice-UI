//Destructuring - bóc tách element
const student = {
  name: "Thao",
  age: 20,
};

const { name, age } = student;
console.log(name, age);

var res = {
  data: [
    {
      name: "Thao2",
      age: 21,
    },
    {
      name: "Thao3",
      age: 21,
    },
    {
      name: "Thao4",
      age: 21,
    },
    {
      name: "Thao5",
      age: 21,
    },
  ],
};
const func = (d = { data: res }) => {
  console.log(d);
};
func(res);
res = {};
func(res);
