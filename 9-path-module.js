const path = require('path')

console.log(path.sep);//my platform sep path

const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath);


const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute);