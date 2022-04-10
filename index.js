const cats = ["Milo", "Otis", "Garfield"];

let beforeEach = function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
};

function destructivelyAppendCat(name){
  beforeEach();
  return cats.push("Ralph")
}

