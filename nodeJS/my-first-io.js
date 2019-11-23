const process = require('process');
const filesystem = require('fs');

let filePath = process.argv[2];
let fileBuffer = filesystem.readFileSync(filePath);
console.log(fileBuffer.toString().split('\n').length - 1);

