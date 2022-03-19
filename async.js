const fs = require('fs');

const function1 = () => {
    console.log('a1');
    console.log('a2');
}

console.log('a');
function1();
console.log('\n-----\n')

// Sync
console.log('Sync');
const contentSync = fs.readFileSync('./basic.js')
console.log(String(contentSync));

console.log('\n-----\n')

// Async
console.log('Async');
fs.readFile('./basic.js', (err, content) => {
    console.log(String(content));
})


console.log('\n-----\n')
console.log('end!!!!');