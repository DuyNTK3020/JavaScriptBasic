// alert('Hi JavaScript') // Hiển thị thông báo

// Biến, built-in function
var fullName = "Nguyen Trong Khanh Duy";
var age = 20;
// alert(fullName);
// alert(age);

console.log(fullName);
console.warn("Cảnh báo");
console.error("Lỗi");
// confirm('JavaScript Basic');
// prompt('Hãy nhập tuổi của bạn');
// setTimeout(() => {
//     alert('Hi JavaScript');
// }, 5000);

var time = 0;

// setInterval(() => {
//     time++;
//     console.log(time);
// }, 1000);

var firstName = "Khánh";
var lastName = "Duy";

var fullName = firstName + " " + lastName;
console.log(fullName);

let undefinedVar;
function doSomething() {
  // Không có lệnh return, nên hàm này trả về undefined
}

const uniqueID = Symbol("id");
const anotherID = Symbol("id");
console.log(uniqueID === anotherID); // false, vì mỗi Symbol là duy nhất

let author = {
  name: "Khánh Duy",
  age: 20,
  isStudent: true,
};

//Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

//Function
(a, b) => {
  return a + b;
};

// Date
let today = new Date();
console.log(today);

//Map
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");

//Set
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Giá trị trùng lặp sẽ bị bỏ qua trong Set

//Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hoàn thành!");
  }, 2000);
});

promise.then((result) => {
  console.log(result); // In ra 'Hoàn thành!' sau 2 giây
});

//Proxy
let target = {
  message: "Hello",
};

let handler = {
  get: function (target, property) {
    return property in target ? target[property] : "Không tìm thấy thuộc tính";
  },
};

let proxy = new Proxy(target, handler);
console.log(proxy.message); // In ra 'Hello'
console.log(proxy.someProperty); // In ra 'Không tìm thấy thuộc tính'

var a = 1;
var b = "1";
console.log(a == b);
console.log(a === b);
