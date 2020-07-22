// init prototype
// not class
// function constructor
const Dog = function (name, weight, tall) {
  this.name = name;
  this.weight = weight;
  this.tall = tall;
  this.sua = function () {
    console.log("gau gau");
  };
};

//Instance of Dog
const husky = new Dog("Husky", 50, 50);
console.log(husky);
husky.sua();
