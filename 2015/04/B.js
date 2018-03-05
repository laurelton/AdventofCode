let md5 = require('md5');
let input = 'yzbqklnj';

let found = false;
let num = 282749;

while(!found) {
    let msg = md5(input + num);
    if (msg.substring(0,6) == '000000') {
        found = true;
        break;
    } else {
        num += 1;
        if (num % 1000000 == 0){
            console.log(num.toLocaleString());
        }
    }
}

console.log(num);