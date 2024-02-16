//Default parameter values

function logger(log, isAlert) {
  if (isAlert) {
    return alert(log);
  }
  console.log(log);
}

logger("abc");

var fieldName = "nameS";
var fieldPrice = "price";

const courses = {
  [fieldName]: "Javascript",
  [fieldPrice]: 1000,
};

console.log(courses);

// Destructuring, Rest
var array = ["Javascript", "PHP", "Ruby"];

var [a, ...rest] = array;

console.log(a);
console.log(rest);

var { nameS, ...resto } = courses;
console.log(nameS);
console.log(resto);
