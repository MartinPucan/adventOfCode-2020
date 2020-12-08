const fs = require('fs');

const lines = fs.readFileSync('day8.txt', {encoding: 'utf-8'}).split('\n');

const values = lines.map(item => item.split(' '));
let accValue = 0;
let array = [];

for (let i = 0; i < values.length; i++) {
  values[i][1] = parseFloat(values[i][1])
}

for (let i = 0; i < values.length; i++) {
  if (array.includes(i)) {
    break;
  }

  if (values[i][0].includes('jmp')) {
    i += values[i][1] - 1
  }

  if (values[i][0].includes('acc')) {
    accValue += values[i][1]
  }

  array.push(i)
}

console.log(accValue)
