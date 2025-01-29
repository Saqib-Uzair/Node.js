import fs from "fs";

fs.writeFileSync("message.txt", "Hello This is the message!");


const context = fs.readFileSync("message.txt","utf-8");


console.log(context);