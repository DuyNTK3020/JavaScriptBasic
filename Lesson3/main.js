let language = [    
    'Javascript',
    'HTML',
    'CSS',
]

console.log(language);
console.log(language.length);
console.log(language[0]);

console.log(language.toString());
console.log(language.join(', '));

console.log(language.pop());
console.log(language);
console.log(language.push('C'));
console.log(language);

console.log(language.shift());
console.log(language);
console.log(language.unshift('Java'));
console.log(language);

let language2 = [    
    'Javascript',
    'CSS',
]
console.log(language2.concat(language));

console.log(language.slice(1, 3));