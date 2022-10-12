// 1
/* function ucFirst(str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(prompt('Enter word', ''))); */

// 2

/* function checkSpam(str) {

    if (str.toLowerCase().includes
    ('viagra') || str.toLowerCase().includes
    ('xxx')) {
        return true;
    }
    return false;
}

let string = prompt('Enter text', '');

console.log(checkSpam(string)); */

// 3

/* function trancate(str, maxlength){
    if (str.length > maxlength){
        let newStr = '';
        for (let i = 0; i < maxlength - 1; i++){
            newStr += str[i];
        }
        return newStr + '…';
    }
    return str;
} */

function trancate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

console.log(trancate('Hello!', 5))