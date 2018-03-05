let md5 = require('md5');
let input = 'yzbqklnj';

let found = false;
let num = 0;

while(!found) {
    let msg = md5(input + num);
    if (msg.substring(0, 5) == '00000') {
        found = true;
        break;
    } else {
        num += 1;
    }
}

console.log(num);