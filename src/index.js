import add from "./modules/add";
import subtract from "./modules/subtract";
import multiply from "./modules/multiply";
import divide from "./modules/divide";
import {addTen, addFive, addOne} from "./modules/addNumbers";
import {subtractTen, subtractFive, subtractOne} from "./modules/subtractNumbers";

const number1 = 393;
const number2 = 238;

let answer = add(number1,number2);
console.log(answer);

answer = subtract(number1,number2);
console.log(answer);

answer = multiply(number1,number2);
console.log(answer);

answer = divide(number1,number2);
console.log(answer);

answer = addTen(number1);
console.log(answer);

answer = addFive(number1);
console.log(answer);

answer = addOne(number1);
console.log(answer);

answer = subtractOne(number1);
console.log(answer);

answer = subtractFive(number1);
console.log(answer);

answer = subtractTen(number1);
console.log(answer);
