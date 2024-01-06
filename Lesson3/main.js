let language = ["Javascript", "HTML", "CSS"];

console.log(language);
console.log(language.length);
console.log(language[0]);

console.log(language.toString());
console.log(language.join(", "));

console.log(language.pop());
console.log(language);
console.log(language.push("C"));
console.log(language);

console.log(language.shift());
console.log(language);
console.log(language.unshift("Java"));
console.log(language);

let language2 = ["Javascript", "CSS"];
console.log(language2.concat(language));

console.log(language.slice(1, 3));

let myInfo = {
  name: "Khanh Duy",
  age: 20,
  address: "Hanoi, Vietnam",
  getName: function () {
    return this.name;
  },
};

myInfo.mail = "DuyNTK3020@gmail.com";
// myInfo['mail'] = 'DuyNTK3020@gmail.com';

console.log(myInfo);
delete myInfo.mail;
console.log(myInfo.getName());

// Object constructor
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User("Duy", "NTK", "AVATAR");
author.title = "Hello";
console.log(author);

var user = new User("Duy", "Khanh", "AVATAR");
user.comment = "Duy qua ga";
console.log(user);

//Object prototype
User.prototype.className = "HUST";
console.log(author);
console.log(user);

// Date
let date = new Date();
console.log(date);

let courses = [
  {
    id: 1,
    name: "Javascript",
    price: 100000,
  },
  {
    id: 2,
    name: "HTML",
    price: 200000,
  },
  {
    id: 3,
    name: "CSS",
    price: 300000,
  },
  {
    id: 4,
    name: "Java",
    price: 400000,
  },
  {
    id: 5,
    name: "Python",
    price: 500000,
  },
];
courses.forEach(function (course, index) {
  console.log(index, course);
});
console.log(
  courses.every(function (course, index) {
    return course.price === 0;
  })
);

let newCourse = courses.map(function(course, index) {
  return {
    id : course.id,
    name : `Khóa học: ${course.name}`,
    price : `Giá: ${course.price}`
  }
});

// console.log(newCourse);

console.log(courses.reduce(function (a, b){
  return a +   b.price;
}, 0));