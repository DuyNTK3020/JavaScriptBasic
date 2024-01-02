function showDialog() {
    alert('Hello');
}
// showDialog();

function writeLog() {
    for (let param of arguments) {
        console.log(param);
    }
}

writeLog('log 1', 'log 2', 'log 3', 'log 4');

function sum(a, b) {
    return a + b;
}
let result = sum(20,10);
console.log(result);

let firstName = 'Duy';
let lastName = 'NTK';
console.log(`Toi la: ${firstName}${lastName}`);

let fullName = '   Duy Nguyen Trong Khanh Duy  ';
console.log(fullName.length);

console.log(fullName.indexOf('Duy'));
console.log(fullName.indexOf('ABC'));


console.log(fullName.slice(-3));
console.log(fullName.slice(-9, -4));


console.log(fullName.replace('Duy','D'));
console.log(fullName.replace(/Duy/g,'D'));

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

console.log(fullName.trim());

let language = 'JS, HTML, CSS'
console.log(language.split(', '));

console.log(fullName.charAt(10));