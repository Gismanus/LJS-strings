// 1
/* function ucFirst(str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(prompt('Enter word', ''))); */

// 2

function checkSpam(str) {

    if (str.toLowerCase().includes
    ('viagra') || str.toLowerCase().includes
    ('xxx')) {
        return true;
    }
    return false;
}

let string = prompt('Enter text', '');

console.log(checkSpam(string));
