let str = 'String-ify';

// str.slice(sub [, end]);
console.log(str.slice(0, 5)); // Strin
console.log(str.slice(3)); // ing-ify
console.log(str.slice(-3, -1)); // if

// str.substring(start [, end]);

console.log(str.substring(5, 2)); // rin
console.log(str.substring(2, 5)); // rin
console.log(str.substring(-2)); // -2 => 0; String-ify

console.log(console.log(str.substring(5, 2)) === console.log(str.substring(2, 5))) // true

console.log(str.slice(str.indexOf('-') + 1));

