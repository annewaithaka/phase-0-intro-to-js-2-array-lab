// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// Append at the end of the array
let destructivelyAppendCat = (name) => {
  cats.push(name);
};

// Prepend at the beginning of the array
const destructivelyPrependCat = (name) => {
  cats.unshift(name);
};

// Remove the last cat at the array
let destructivelyRemoveLastCat = () => {
  cats.pop();
};

// Remove the first cat from the cats array
let destructivelyRemoveFirstCat = () => {
  cats.shift();
};

// Append a cat to the cats array and return a new array
let appendCat = (name) => {
  return [...cats, name];
};

// Prepend a cat to the cats array and return a new array
let prependCat = (name) => {
  return [name, ...cats];
};

// Remove the last cat and return a new array
let removeLastCat = () => {
  return cats.slice(0, -1);
};

// Remove the first cat and return a new array
let removeFirstCat = () => {
  return cats.slice(1);
};
