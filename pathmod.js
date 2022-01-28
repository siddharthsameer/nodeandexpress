const path = require('path')


const x= path.sep

console.log(x)

const filepath= path.join('/content','subfolder','text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base);

const abs=path.resolve(__dirname, 'content','subfolder','text.txt')
console.log(abs);