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
  .then(function (data) {
    console.log(data);
    return 4;
  })
  .catch(function () {
    console.log("Thất bại");
  })
  .finally(function () {
    console.log("Đang xử lý");
  });
