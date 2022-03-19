/*
import { left, right, center } from 'strpad';
console.log(left('starting', 20, '*'));
console.log(right('starting', 20, '#'));
console.log(center('starting', 20, '='));
*/

const strpad = require('strpad');
console.log(strpad.left(' starting ', 20, '*'));
console.log(strpad.right(' starting ', 20, '#'));
console.log(strpad.center(' starting ', 20, '='));