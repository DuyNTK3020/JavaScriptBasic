let myInfo = {
    name: "Khanh Duy",
    age: 20,
    address: "Hanoi, Vietnam",
  };

  for (var key in myInfo) {
    console.log(key + ": " + myInfo[key]);
  }

  var languages = [
    "Javascript",
    "HTML",
    "CSS"
  ]

  for (let value of languages) {
    console.log(value);
  }