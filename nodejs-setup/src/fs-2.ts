import fs, { read } from 'fs';

const read_file = fs.readFileSync("output.txt","utf-8");


console.log(read_file);