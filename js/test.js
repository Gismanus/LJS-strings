let str = 'Hello';

function changeString(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i != 2) {
            newStr += str[i];
            console.log(str[i]);

        } else {
            newStr += 'w';
            console.log(newStr[i]);
        }
    }
}

changeString(str);