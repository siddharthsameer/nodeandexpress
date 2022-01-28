const fs= require('fs');

const first=fs.readFileSync('./content/first.txt','utf8');
const second=fs.readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

fs.writeFileSync('./content/resultwrite.txt', `my name is ${first} ${second}`,{flag:'a'});