let str = 'HelloHelloHello';
let target = 'Hell';
let pos = 0;
let count = 0;
while (true) {
    
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) {
        console.log(`Founded ${count} positions`);
        break;
    };
    console.log(`Founded there: ${foundPos}`);
    pos = foundPos + 1;
    count++;
}