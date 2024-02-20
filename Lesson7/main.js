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

const person1 = {
  name: "Son",
  age: 21,
};

const person2 = { ...person1 };

// Expected results
console.log(person2.name); // Output: 'Son'
console.log(person2.age); // Output: 21
console.log(person1 === person2); // Output: false

// function highLight(...rest) {
//   console.log(rest);
// }

function highLight([first, ...strings], ...values) {
  console.log(first);
  console.log(strings);
  console.log(values);
  return values.reduce((acc, curVal) => [...acc, `<span>${curVal}</span>`, strings.shift()], [first]).join('');
}

var brand = "F8";
var course = "JavaScript";

const html = highLight`Hoc lap trinh ${course} tai ${brand}!`;

console.log(html);
