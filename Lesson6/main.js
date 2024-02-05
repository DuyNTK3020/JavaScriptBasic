// var json = '["javascript","PHP"]';
var json = '{"name":"khanhDuy","age":20}';

var a = "true";
// Chuyển từ json sang javascript types
console.log(JSON.parse(json));

// Chuyển từ javascript types sang json
console.log(JSON.stringify(JSON.parse(json)));

setTimeout(function () {
  console.log("Dòng này sẽ in ra sau");
}, 0);
// setTimeout là tác vụ bất động bộ (async)

console.log("Dòng này sẽ in ra trước"); // Đây là tác vụ đồng bộ (sync)

var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Logic
    // Thành công : resolve()
    // Thất bại : reject()
    resolve([
      {
        id: 1,
        name: "Javascript",
      },
    ]);
    reject("Failed to resolve");
  }
);

promise
  .then(function (courses) {
    // console.log("Thành công");
    console.log(courses);
  })
  .catch(function () {
    console.log("Thất bại");
  })
  .finally(function () {
    console.log("Đang xử lý");
  });

//chain
var promise = new Promise(function (resolve, reject) {
  // Logic
  // Thành công : resolve()
  // Thất bại : reject()
  resolve();
});

promise
  .then(function () {
    return 1;
  })
  .then(function (data) {
    console.log(data);
    return 2;
  })
  .then(function (data) {
    console.log(data);
    return 3;
  })
  .catch(function () {
    console.log("Thất bại");
  })
  .finally(function () {
    console.log("Đang xử lý");
  });
