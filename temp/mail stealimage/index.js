let fs=require('fs');
let n=7500;
for (var i = 0; i < n; i++) {
  fs.appendFileSync("./text.txt",`acc${i}@stealimage.com\n`)
}
