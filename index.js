// declare original array
const cats = ["Milo", "Otis", "Garfield"];

// function to reset array
let beforeEach = function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
};

// add name to end of array
function destructivelyAppendCat(name){
  beforeEach();
  return cats.push("Ralph")
}

// add name to start of arrays
function destructivelyPrependCat(name){
  beforeEach();
  return cats.unshift("Bob")
}

// remove last name destructively
function destructivelyRemoveLastCat(){
  beforeEach();
  return cats.pop();
}

// remove first name destructively
function destructivelyRemoveFirstCat(){
  beforeEach();
  return cats.shift();
}

// return new array with added name at the end
function appendCat(name){
  beforeEach();
  return [...cats, "Broom"]
}

// return new array with added name at the start
function prependCat(name){
  beforeEach();
  return ["Arnold",...cats]
}
// return new array with last cat removed
function removeLastCat(){
  beforeEach();
  return cats.slice(0,-1)
}
// return new array with first cat removed
function removeFirstCat(){
  beforeEach();
  return cats.slice(1)
}
